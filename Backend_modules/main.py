from fastapi import FastAPI, APIRouter, HTTPException
from starlette import status

from Models.Model import User, Signup
from Config.Database import *

app = FastAPI()
router = APIRouter()


@router.get("/")
async def root():
    return {"hello": "world"}


@router.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(user: Signup):
    try:
        new_user = {
            "user_name": user.user_name,
            "email": user.email,
            "password": user.password,
            "photo_link": "",
            "bio": "",
            "display_name": user.user_name,
            "favorite_recipes": [],
            "following": [],
            "no_of_likes": 0,
            "recipe_created": [],
            "no_of_followers": 0
        }
        dat = user_collection.insert_one(new_user)
        print("DONE")
        return {"id": str(dat.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"some {e} occurred")



app.include_router(router)
