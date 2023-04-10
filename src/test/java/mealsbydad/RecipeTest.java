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
        User user = new User("Darry", "Darry", "Parks", "1234");
        recipe.setUserLikes(user);
        assertTrue(recipe.getUserLikes().contains(user));
    }

    @Test
    public void testUserCreateRecipe() {
        User user = new User("Darry", "Darry", "Parks", "1234");
        Recipe recipe = new Recipe(user, "Recipe Name", "Recipe Description", "Recipe Ingredients", "Recipe Instructions");
        assertEquals(user, recipe.getAuthor());
    }
    @Test
    public void testRecipeDirections() {
        User user = new User("RGernert", "Ryan", "Gernert", "1234");
        String directions = """
                        1. Dice Sweet potatoes and apples into 1/4-1/2 in pieces.
                        2. Cook bacon in a pan to desired crispiness, remove from the pan and set aside.
                        3. In the same pan, add sweet potatoes, sprinkle with salt, pepper, and cinnamon, mix frequently and cook until sweet potatoes start to brown 10-15 minutes.
                        4. Add apples to the pan, sprinkle with salt, pepper, and cinnamon, and stir frequently until apples are soft and start to brown 5 minutes.
                        5. Shred bacon into smaller pieces. Add bacon back into the pan and mix together. Drizzle with honey to desired sweetness.""";

        Recipe recipe = new Recipe(user,
                "Sweet Potato and Apple Breakfast Hash",
                "Savory breakfast hash with sweet potatoes and apples sprinkled with cinnamon and drizzled with honey",
                """
                        -2 Sweet Potatoes
                        -2 Apples
                        -4 Strips of Bacon
                        -Honey
                        -Cinnamon, salt, pepper""",
                directions);
        assertEquals(directions, recipe.getInstructions());



    }

}