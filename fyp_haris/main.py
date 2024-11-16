from fastapi import FastAPI, APIRouter, HTTPException
from starlette import status
from Config.json_manager import *
from Models.Model import User, Signup, User_profile, Recipe, Ingredients
from Config.Database import *
from bson import ObjectId

from Schemas.Recipe import single_recipe, multiple_recipes
from Schemas.Review import single_review
from Schemas.Search import extract_from_tags, format_set_tags, format_set_recipes
from Schemas.Tags import multiple_tags
from Schemas.User import single_user

app = FastAPI()
router = APIRouter()


@router.get("/")
async def root():
    return {"hello": "world"}


@router.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(user: Signup):
    try:
        new_user = user_registration_json(user)
        result = user_collection.insert_one(new_user)
        return {"id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"some {e} occurred")


@router.put("/update_profile/{id}", status_code=status.HTTP_201_CREATED)
async def update_profile(id: str, data: User_profile):
    update_data = profile_update_json(data)
    print(update_data)
    if len(update_data) != 0:
        result = user_collection.update_one({"_id": ObjectId(id)}, {"$set": update_data})
        print(str(result))
        if str(result.matched_count) != "1":
            raise HTTPException(status_code=404, detail=f"User of {id} not found")
        else:
            return {"user_profile": "Updated to new data"}
    else:
        raise HTTPException(status_code=400, detail="No new data is available in your request to update")


@router.get("/Signin", status_code=status.HTTP_200_OK)
async def signin(email: EmailStr, password: str):
    query = {
        "email": email,
        "password": password
    }
    try:
        user = user_collection.find_one(query)
        user = single_user(user)
        return user
    except Exception as e:
        print(e)
        raise HTTPException(status_code=404, detail="Any of email or password is wrong")


@router.post("/create_recipe", status_code=status.HTTP_201_CREATED)
async def create_recipe(recipe: Recipe):
    try:
        ing = recipe.ingredients
        recipe.ingredients = [dict(item) for item in ing]
        r = recipe_collection.insert_one(dict(recipe))
        user_collection.update_one({"_id": ObjectId(recipe.author_id)},
                                   {"$addToSet": {"recipe_created": str(r.inserted_id)}})
        return {"id": str(r.inserted_id)}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Error in uploading")


@router.get("/get_recipe", status_code=status.HTTP_200_OK)
async def get_recipe(id: str):
    try:
        query = {"_id": ObjectId(id)}
        recipe = recipe_collection.find_one(query)
        return single_recipe(recipe)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=404, detail="No such recipe available")


@router.get("/get_recipes/{user_id}", status_code=status.HTTP_200_OK)
async def get_recipes(user_id: str):
    try:
        query = {"_id": ObjectId(user_id)}
        user = single_user(user_collection.find_one(query))
        ids = user['recipe_created']
        if len(ids) != 0:
            recipes = [{id: single_recipe(recipe_collection.find_one({"_id": ObjectId(id)})) for id in ids}]
            return recipes
        else:
            raise HTTPException(status_code=400, detail="No recipe found in requested user profile")
    except Exception as e:
        print(e)
        raise HTTPException(status_code=404, detail="user doesn't exist")


@router.put("/update_recipe", status_code=status.HTTP_201_CREATED)
async def update_recipe(recipe_id: str, new_recipe: Recipe):
    try:
        ing = new_recipe.ingredients
        new_recipe.ingredients = [dict(item) for item in ing]
        r = recipe_collection.update_one({"_id": ObjectId(recipe_id)}, {"$set": dict(new_recipe)})
        result = str(r.matched_count)
        print(result)
        if result == "1":
            return {"update": "Done successfully"}
        else:
            raise HTTPException(status_code=404, detail="Recipe not found")
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Error in uploading")


@router.delete("/delete_recipe/{recipe_id}", status_code=status.HTTP_200_OK)
async def delete_recipe(recipe_id: str, user_id: str):
    try:
        recipe = single_recipe(recipe_collection.find_one({"_id": ObjectId(recipe_id)}))

        if recipe['author_id'] == user_id:
            r = recipe_collection.delete_one({"_id": ObjectId(recipe_id)})
            if str(r.deleted_count) == "1":
                r = user_collection.update_one({"_id": ObjectId(user_id)}, {"$pull": {"recipe_created": recipe_id}})
                return {"message": f"Deleted {r.modified_count}"}
        else:
            raise HTTPException(status_code=400, detail="Recipe doesn't belong to given user_id")
    except Exception as e:
        print(e)
        raise HTTPException(status_code=400, detail=f"{e}")


@router.put("/following_request", status_code=status.HTTP_201_CREATED)
async def following_request(request: Follower_request):
    try:
        action = int(request.inc)
        if action > 0:
            result = user_collection.update_one({"_id": ObjectId(request.user_id)},
                                                {"$addToSet": {"following": request.following_id}})
            if str(result.modified_count) == "1":
                r = user_collection.update_one({"_id": ObjectId(request.following_id)},
                                               {"$inc": {"no_of_followers": action}})
                if str(r.modified_count) == "1":
                    return {"detail": "Done"}
                else:
                    user_collection.update_one({"_id": ObjectId(request.user_id)},
                                               {"$pull": {"following": request.following_id}})
                    raise HTTPException(status_code=404, detail=f"{request.following_id} not found")
            else:
                raise HTTPException(status_code=404, detail=f"{request.user_id} not found")
        else:
            result = user_collection.update_one({"_id": ObjectId(request.user_id)},
                                                {"$pull": {"following": request.following_id}})
            if str(result.modified_count) == "1":
                r = user_collection.update_one({"_id": ObjectId(request.following_id)},
                                               {"$inc": {"no_of_followers": action}})
                if str(r.modified_count) == "1":
                    return {"detail": "Done"}
                else:
                    user_collection.update_one({"_id": ObjectId(request.user_id)},
                                               {"$addToSet": {"following": request.following_id}})
                    raise HTTPException(status_code=404, detail=f"{request.following_id} not found")
            else:
                raise HTTPException(status_code=404, detail=f"{request.user_id} not found")
    except Exception as e:
        print(e)
        raise HTTPException(status_code=404, detail=f"{e}")


@router.put("/favorite_request", status_code=status.HTTP_201_CREATED)
async def favorite_request(request: Favorite_request):
    try:
        if int(request.inc) > 0:
            result = user_collection.update_one({"_id": ObjectId(request.user_id)}, {"$addToSet": {
                "favorite_recipes": request.recipe_id}})
            if str(result.modified_count) == "1" or str(result.matched_count) == "1":
                return {"detail": "Done"}
            else:
                raise HTTPException(status_code=404, detail=f"{request.user_id} doesn't exist")
        else:
            result = user_collection.update_one({"_id": ObjectId(request.user_id)}, {"$pull": {
                "favorite_recipes": request.recipe_id}})
            if str(result.modified_count) == "1" or str(result.matched_count) == "1":
                return {"detail": "Done"}
            else:
                raise HTTPException(status_code=404,
                                    detail=f"{request.user_id} doesn't exist or may be {request.recipe_id} is not in "
                                           f"requested user favorites")
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"{e}")


@router.post("/post_review", status_code=status.HTTP_201_CREATED)
async def post_review(review: Review):
    result = review_collection.insert_one(dict(review))
    if result.inserted_id is not None:
        id = str(result.inserted_id)
        result = recipe_collection.update_one({"_id": ObjectId(review.recipe_id)}, {"$addToSet": {"reviews_ids": id}})
        print(result.matched_count)
        if str(result.matched_count) == "1":
            return {"detail": "Done"}
        else:
            review_collection.delete_one({"_id": ObjectId(id)})
            raise HTTPException(status_code=404, detail=f"recipe of id {review.recipe_id} doesn't exist")
    else:
        raise HTTPException(status_code=500, detail="Problem in db")


@router.get("/get_review/{review_id}", status_code=status.HTTP_200_OK)
async def get_review(review_id: str):
    try:
        data = review_collection.find_one({"_id": ObjectId(review_id)})
        return single_review(data)
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"{review_id} doesn't exist")


@router.post("/tags_post", status_code=status.HTTP_201_CREATED)
async def tags_post(tags: list[Tags]):
    for tag in tags:
        result = tags_collection.insert_one(dict(tag))
        if result.inserted_id is None:
            raise HTTPException(status_code=500, detail=f"error in Tag {tag}")
    return {"detail": "Done"}


@router.get("/get_tags", status_code=status.HTTP_200_OK)
async def get_tags(id: str):
    try:
        data = tags_collection.find({"recipe_id": id})
        data = multiple_tags(data)
        print(len(data))
        return {"tags": data}
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"{e}")


@router.get("/search_recipe/{word}")
async def search(word: str):
    query1 = {"tag_name": {"$regex": word, "$options": "i"}}
    query2 = {"title": {"$regex": word, "$options": "i"}}
    try:
        data = tags_collection.find(query1, {"recipe_id": 1, "_id": 0})
        list1 = format_set_tags(data)

        data = recipe_collection.find(query2)
        set1 = format_set_recipes(data)
        for recipe in set1:
            list1.append(recipe)
        return list1
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"{e}")





app.include_router(router)