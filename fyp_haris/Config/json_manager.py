from Models.Model import *


def profile_update_json(data: User_profile) -> dict:
    json_to_return = {}
    if data.display_name is not None:
        json_to_return['display_name'] = data.display_name
    if data.photo_link is not None:
        json_to_return['photo_link'] = data.photo_link
    if data.bio is not None:
        json_to_return['bio'] = data.bio

    return json_to_return


def user_registration_json(data: Signup) -> dict:
    new_user = {
        "user_name": data.user_name,
        "email": data.email,
        "password": data.password,
        "photo_link": "",
        "bio": "",
        "display_name": data.user_name,
        "favorite_recipes": [],
        "following": [],
        "no_of_likes": 0,
        "recipe_created": [],
        "no_of_followers": 0
    }
    return new_user
