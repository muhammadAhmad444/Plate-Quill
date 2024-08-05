const recipes = [
    {
        id: 1,
        title: "Chicken Pasta",
        author: "Thomas Devon",
        image: "public/chiken-pasta.png",
        rating: 4.5,
        nutrition: {
            protein: 45,
            carbs: 50,
            fats: 40,
            sugar: 2,
            fiber: 3,
        },
        ingredients: [
            "225g fettuccine or any pasta of your choice",
            "450g boneless, skinless chicken breasts, cut into bite-sized pieces",
            "salt",
            "black pepper",
            "2 tablespoons olive oil",
            "3 cloves garlic, minced",
            "240ml heavy cream",
            "100g grated parmesan cheese",
            "fresh parsley, chopped (for garnish)",
            "tomato, chopped (for garnish)"
        ],
        procedure: [
            "Cook the pasta according to the package instructions. Drain and set aside.",
            "Season chicken pieces with salt and pepper. In a pan, heat olive oil over medium heat. Add chicken and cook until browned and fully cooked. Set aside.",
            "In the same pan, add minced garlic and sauté for 1 minute. Pour in the heavy cream and bring to a gentle simmer. Stir in Parmesan cheese until melted and the sauce is smooth.",
            "Add the cooked chicken to the sauce. Toss in the cooked pasta until well coated. Garnish with chopped parsley and tomato.",
            "Enjoy your quick and tasty Easy Chicken Alfredo Pasta!"
        ],
        tags: ["pasta", "chicken pasta", "pasta recipe", "creamy pasta", "homemade dinner", "quick & easy"],
        reviews: [
            { name: "User 1", rating: 5, comment: "Great recipe, my family loved it!" },
            { name: "User 2", rating: 4, comment: "Easy to make and very delicious." },
            { name: "User 3", rating: 5, comment: "Perfect for a quick dinner!" }
        ]
    }
];

export default recipes;
