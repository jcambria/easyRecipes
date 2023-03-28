package mealsbydad;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class RecipeTest {
    @Test
    public void testConstructNewRecipe() {
        Recipe recipe = new Recipe();
        recipe.setId(1);
        assertEquals(1, recipe.getId());
    }

    @Test
    public void testSetRecipeName() {
        Recipe recipe = new Recipe();
        recipe.setName("Recipe");
        assertEquals("Recipe", recipe.getName());
    }

    @Test
    public void testSetRecipeDescription() {
        Recipe recipe = new Recipe();
        recipe.setDescription("Description");
        assertEquals("Description", recipe.getDescription());
    }

    @Test
    public void testSetRecipeIngredients() {
        Recipe recipe = new Recipe();
        recipe.setIngredients("Ingredients");
        assertEquals("Ingredients", recipe.getIngredients());
    }

}