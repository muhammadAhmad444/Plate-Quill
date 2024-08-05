import React from 'react';

const Recipe = ({ recipe }) => {
    const { title, image, rating, nutrition, ingredients, procedure, tags } = recipe;

    return (
        <div className="recipe">
            
            <div className="recipe-header">
                
                <div className="recipe-info">
                    <h1>{title}</h1>
                    <div className="rating">{'★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))}</div>
                    <div className="stats">
                        <span>{ingredients.length} INGREDIENTS</span>
                        <span>15 MINUTES</span>
                        <span>720 CALORIES</span>
                    </div>
                    <div className="nutrition">
                        <h1>NUTRITION</h1>
                        <div><span>{nutrition.protein}g PROTEIN</span>
                        <span>{nutrition.carbs}g CARBS</span>
                        <span>{nutrition.fats}g FATS</span>
                        <span>{nutrition.sugar}g SUGAR</span>
                        <span>{nutrition.fiber}g FIBER</span></div>
                    </div>
                </div>
                <div className='recipe-img'>
                <img src={image} alt={title} />
                </div>
                
            </div>
            <div className="ingredients">
                <h3>INGREDIENTS</h3>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="procedure">
                <h3>PROCEDURE</h3>
                <ol>
                    {procedure.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className="tags">
                <h3>RECIPE TAGS</h3>
                <div className='tags-name'>
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
                </div>
               
            </div>
        </div>
    );
};

export default Recipe;
