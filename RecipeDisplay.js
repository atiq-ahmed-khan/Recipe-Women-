import React from 'react';
import Comments from './Comments';

const RecipeDisplay = ({ recipe }) => {
    return (
        <div>
            <h1>{recipe.title}</h1>
            <h2>Ingredients</h2>
            <p>{recipe.ingredients}</p>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
            <h2>Cooking Time</h2>
            <p>{recipe.cookingTime} minutes</p>
            <h2>Uploaded by</h2>
            <p>{recipe.createdBy}</p>
            <Comments recipeId={recipe._id} />
        </div>
    );
};

export default RecipeDisplay;
