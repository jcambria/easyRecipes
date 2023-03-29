package mealsbydad;

import mealsbydad.entities.Recipe;
import mealsbydad.entities.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

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

    @Test
    public void testSetRecipeInstructions() {
        Recipe recipe = new Recipe();
        recipe.setInstructions("Instructions");
        assertEquals("Instructions", recipe.getInstructions());
    }

    @Test
    public void testSetRecipeLike() {
        Recipe recipe = new Recipe();
        User user = new User("Darry", "Darry", "Parks", "FFFFF");
        recipe.setUserLikes(user);
        assertTrue(recipe.getUserLikes().contains(user));
    }

    @Test
    public void testUserCreateRecipe() {
        User user = new User("Darry", "Darry", "Parks", "FFFFF");
        Recipe recipe = new Recipe(user, "Recipe Name", "Recipe Description", "Recipe Ingredients", "Recipe Instructions");
        assertEquals(user, recipe.getAuthor());

    }

}