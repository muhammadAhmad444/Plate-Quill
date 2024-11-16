def single_user(user) -> dict:
    return {
        "id": str(user['_id']),  # Convert ObjectId to string
        "user_name": user['user_name'],
        "email": user['email'],
        "photo_link": user['photo_link'] if 'photo_link' in user else None,
        "bio": user['bio'] if 'bio' in user else None,
        "display_name": user['display_name'] if 'display_name' in user else user['user_name'],
        "favorite_recipes": user['favorite_recipes'] if 'favorite_recipes' in user else [],
        "following": user['following'] if 'following' in user else [],
        "no_of_likes": user['no_of_likes'] if 'no_of_likes' in user else 0,
        "recipe_created": user['recipe_created'] if 'recipe_created' in user else [],
        "no_of_followers": user['no_of_followers'] if 'no_of_followers' in user else 0
    }


def multiple_users(users) -> list:
    return [single_user(u) for u in users]
