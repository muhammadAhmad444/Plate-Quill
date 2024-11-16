def single_tag(tag) -> dict:
    return {
        "tag_name": tag["tag_name"],
        "recipe_id": tag["recipe_id"]
    }


def multiple_tags(tags) -> list:
    return [single_tag(t) for t in tags]
