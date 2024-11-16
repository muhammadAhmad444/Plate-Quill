def single_recipe(recipe) -> dict:
    return {
        "id": str(recipe["_id"]),  # Include _id as a string
        "title": recipe["title"],
        "author_id": recipe["author_id"],
        "cuisine_type": recipe["cuisine_type"],
        "meal_type": recipe["meal_type"],
        "cooking_time": recipe["cooking_time"],
        "difficulty_level": recipe["difficulty_level"],
        "procedure": recipe["procedure"],
        "image": recipe["image"],
        "ingredients": [
            {
                "ingredients_name": ingredient["ingredients_name"],
                "quantity": ingredient["quantity"],
                "unit_of_quantity": ingredient["unit_of_quantity"]
            }
            for ingredient in recipe["ingredients"]
        ],
        "likes": recipe["likes"],
        "average_rating": recipe["average_rating"]
    }


def multiple_recipes(recipe) -> list:
    return [single_recipe(re) for re in recipe]
