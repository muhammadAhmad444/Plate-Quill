def single_review(review) -> dict:
    return {
        "id": str(review['_id']),
        "recipe_id": review['recipe_id'] if 'recipe_id' in review else '',
        "user_id": review['user_id'] if 'user_id' in review else '',
        "rating": review['rating'] if 'rating' in review else 0,
        "comment": review['comment'] if 'comment' in review else '',
        "recipe_author_id": review['recipe_author_id'] if 'recipe_author_id' in review else ''
    }


def multiple_reviews(review) -> list:
    return [single_review(r)for r in review]