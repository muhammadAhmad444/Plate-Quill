import React from 'react';
import Recipe from '../components/Recipe_info/RecipeDetail';
import Review from '../components/Recipe_info/Review';
import recipes from '../components/Recipe_info/RecipeData';
import '../components/Recipe_info/RecipeInfo.css';

const RecipeInformation = () => {
    const recipe = recipes[0]; // For simplicity, using the first recipe

    return (
        <div className="recipe-page">
            <Recipe recipe={recipe} />
            
            <div className="reviews">
                <h3>REVIEWS</h3>
                {recipe.reviews.map((review, index) => (
                    <Review key={index} review={review} />
                ))}
            </div>
        </div>
    );
};

export default RecipeInformation;
