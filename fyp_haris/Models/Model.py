from enum import Enum
from typing import List, Dict

from pydantic import BaseModel, Field, EmailStr


class IncEnum(int, Enum):
    INCREMENT = 1
    DECREMENT = -1


class Cuisine_type_Enum(str, Enum):
    ITALIAN = "Italian"
    MEXICAN = "Mexican"
    CHINESE = "Chinese"
    INDIAN = "Indian"
    MEDITERRANEAN = "Mediterranean"
    AMERICAN = "American"
    CONTINENTAL = "Continental"
    OTHERS = "Others"


class Meal_type_enum(str, Enum):
    BREAKFAST = "Breakfast"
    LUNCH = "Lunch"
    SNACKS = "Snacks"
    APPETIZERS = "Appetizers"
    SOUPS = "Soups"
    DINNER = "Dinner"
    DESSERTS = "Desserts"
    OTHERS = "Others"


class Difficulty_level_enum(str, Enum):
    EASY = "Easy"
    MEDIUM = "Medium"
    HARD = "Hard"


class User_profile(BaseModel):
    photo_link: str = Field(default=None, min_length=5)
    display_name: str = Field(default=None, min_length=3)
    bio: str = Field(default=None, max_length=300)

    class Config:
        json_schema_extra = {
            "example": {
                "photo_link": "http://example.com/photo.jpg",
                "display_name": "John",
                "bio": "i'm best chef"
            }}


class Favorite_request(BaseModel):
    recipe_id: str = Field(min_length=20)
    user_id: str = Field(min_length=20)
    inc: IncEnum = Field(default=IncEnum.INCREMENT)

    class Config:
        json_schema_extra = {
            "example": {
                "recipe_id": "60c72b2f9b1d8b9a40f3a497",
                "user_id": "60c72b2f9b1d8b9a40f3a497",
                "inc": "1"
            }
        }


class Signup(BaseModel):
    user_name: str = Field(min_length=3)
    email: EmailStr = Field(max_length=30)
    password: str = Field(min_length=8)

    class Config:
        json_schema_extra = {
            "example": {
                "user_name": "user1",
                "email": "user1@example.com",
                "password": "********"
            }}


class User(BaseModel):
    user_name: str = Field(min_length=3)
    email: EmailStr = Field(max_length=25)
    password: str = Field(min_length=8, max_length=16)
    photo_link: str = Field(default=None)
    bio: str = Field(default=None, max_length=300)
    display_name: str = Field(default=user_name, min_length=3, max_length=50)
    favorite_recipes: List[str] = Field(default_factory=list)
    following: List[str] = Field(default_factory=list)
    no_of_likes: int = 0
    recipe_created: list[str] = Field(default_factory=list)
    no_of_followers: int = 0

    class Config:
        json_schema_extra = {
            "example": {
                "user_name": "JohnDoe",
                "email": "johndoe@example.com",
                "password": "SecurePass123",
                "photo_link": "http://example.com/photo.jpg",
                "bio": "This is a sample bio for the user.",
                "display_name": "John",
                "favorite_recipes": ["60c72b2f9b1d8b9a40f3a497", "60c72b2f9b1d8b9a40f3a494"],
                "following": ["60c72b2f9b1d8b9a40f3a497", "60c72b2f9b1d8b9a40f3a494"],
                "no_of_likes": 0,
                "recipe_created": ["60c72b2f9b1d8b9a40f3a497", "60c72b2f9b1d8b9a40f3a494"],
                "no_of_followers": 0
            }
        }


class Follower_request(BaseModel):
    user_id: str = Field(min_length=20)
    following_id: str = Field(min_length=20)
    inc: IncEnum = Field(default=IncEnum.INCREMENT)

    class Config:
        json_schema_extra = {
            "example": {
                "user_id": "60c72b2f9b1d8b9a40f3a494",
                "following_id": "60c72b2f9b1d8b9a40f3a495",
                "inc": "1"
            }
        }


class Ingredients(BaseModel):
    ingredients_name: str = Field(min_length=3, max_length=50)
    quantity: float = Field(default=1.0)
    unit_of_quantity: str = Field(min_length=1, max_length=20)

    class Config:
        json_schema_extra = {
            "example": {
                "ingredients_name": "Salt",
                "quantity": 1.0,
                "unit_of_quantity": "tsp"
            }
        }


class Tags(BaseModel):
    tag_name: str = Field(min_length=3, max_length=50)
    recipe_id: str = Field(min_length=20)

    class Config:
        json_schema_extra = {
            "example": {
                "tag_name": "vegan",
                "recipe_id": "60c72b2f9b1d8b9a40f3a498"
            }
        }


class Review(BaseModel):
    recipe_id: str = Field(min_length=20)
    user_id: str = Field(min_length=20)
    rating: int = Field(ge=1, le=5)
    comment: str = Field(min_length=3)
    recipe_author_id: str = Field(min_length=20)

    class Config:
        json_schema_extra = {
            "example": {
                "recipe_id": "60c72b2f9b1d8b9a40f3a499",
                "user_id": "60c72b2f9b1d8b9a40f3a500",
                "rating": 5,
                "comment": "Great recipe!",
                "recipe_author_id": "60c72b2f9b1d8b9a40f3a501"
            }
        }


class Recipe(BaseModel):
    title: str = Field(min_length=3, max_length=50)
    author_id: str = Field(min_length=20)
    cuisine_type: Cuisine_type_Enum = Field(default=Cuisine_type_Enum.OTHERS)
    meal_type: Meal_type_enum = Field(default=Meal_type_enum.OTHERS)
    cooking_time: str = Field(min_length=5)
    difficulty_level: Difficulty_level_enum = Field(default=Difficulty_level_enum.MEDIUM)
    procedure: Dict[str, str] = Field(default_factory=dict)
    image: str = Field(default=None)
    ingredients: List[Ingredients] = Field(default_factory=list)
    likes: int = Field(default=0)
    average_rating: float = Field(default=0.0)

    class Config:
        json_schema_extra = {
            "example": {
                "title": "Spaghetti Carbonara",
                "author_id": "12345678901234567890",
                "cuisine_type": "Italian",
                "meal_type": "Dinner",
                "cooking_time": "30 minutes",
                "difficulty_level": "Medium",
                "procedure": {
                    "1": "Boil pasta.",
                    "2": "Cook bacon.",
                    "3": "Mix eggs and cheese.",
                    "4": "Combine all ingredients."
                },
                "image": "http://example.com/image.jpg",
                "ingredients": [
                    {"ingredients_name": "Pasta", "quantity": 200, "unit_of_quantity": "grams"},
                    {"ingredients_name": "Bacon", "quantity": 100, "unit_of_quantity": "grams"},
                    {"ingredients_name": "Eggs", "quantity": 2, "unit_of_quantity": "pieces"},
                    {"ingredients_name": "Cheese", "quantity": 50, "unit_of_quantity": "grams"}
                ],
                "likes": 0,
                "average_rating": 0.0
            }
        }
