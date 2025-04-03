import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeDisplay from './RecipeDisplay';

const RecipePage = ({ match }) => {
    const [recipe, setRecipe] = useState(null);
    const recipeId = match.params.id; // Assuming the recipe ID is passed in the URL

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await axios.get(`/api/recipes/${recipeId}`);
            setRecipe(response.data);
        };
        fetchRecipe();
    }, [recipeId]);

    if (!recipe) return <div>Loading...</div>;

    return <RecipeDisplay recipe={recipe} />;
};

export default RecipePage;
