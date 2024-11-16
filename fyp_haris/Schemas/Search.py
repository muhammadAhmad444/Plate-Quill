from bson import ObjectId

from Config.Database import recipe_collection
from Schemas.Recipe import multiple_recipes, single_recipe


def extract_from_tag(tag):
    return tag["recipe_id"]


def extract_from_tags(tags):
    return [extract_from_tag(tag) for tag in tags]


def format_set_tags(data) -> list:
    data = extract_from_tags(data)
    if len(data) == 0:
        return []
    set1 = set(data)
    list1 = []
    for id in set1:
        data = recipe_collection.find_one({"_id": ObjectId(id)})
        data = single_recipe(data)
        list1.append(data)

    return list1


def format_set_recipes(data) -> list:
    data = multiple_recipes(data)
    if len(data) == 0:
        return []
    return data
