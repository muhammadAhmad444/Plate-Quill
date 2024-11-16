from pymongo import MongoClient

# url = "mongodb+srv://uumer2428:MyCode567@myfirstcluster.j0eq0xw.mongodb.net/"

url = "mongodb://localhost:27017/"
connection = MongoClient(url)

db = connection['haris_fyp']

recipe_collection = db['Recipe']
review_collection = db['Review']
tags_collection = db['Tags']
user_collection = db['User']

validation_collection= db['Validation']