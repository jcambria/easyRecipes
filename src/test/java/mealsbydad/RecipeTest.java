package mealsbydad;

import mealsbydad.entities.Recipe;
import mealsbydad.entities.User;
import org.junit.jupiter.api.Test;

import java.util.HashMap;

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
        Recipe recipe = new Recipe(user, "Recipe Name", "Recipe Description", "Recipe Ingredients", "Recipe Instructions", new HashMap<>());
        assertEquals(user, recipe.getAuthor());
    }
    @Test
    public void testRecipeDirections() {
        User user = new User("RGernert", "Ryan", "Gernert", "1234");
        Recipe recipe = new Recipe(user,
                "Sweet Potato and Apple Breakfast Hash",
                "Savory breakfast hasg with sweet potatoes and apples sprinkled with cinnamon and drizzles with honey",
                """
                        - 3 Sweet Potatoes
                        - 2 Apples
                        -Bacon
                        -Honey
                        -Cinnamon, salt, pepper""",
                "Recipe Instructions", new HashMap<>());

        directions.put(1, "1. Dice Sweet potatoes and apples into 1/4-1/2 in pieces.");
        directions.put(2, "2. Cook bacon in a pan to desired crispiness, remove from the pan and set aside.");
        directions.put(3, "3. In the same pan, add sweet potatoes, sprinkle with salt, pepper, and cinnamon, mix frequently and cook until sweet potatoes start to brown, 10-15 minutes.");
        directions.put(4, "4. Add apples to the pan, sprinkle with salt, pepper, and cinnamon, and stir frequently until apples are soft and start to brown 5 minutes.");
        directions.put(5, "5. Shred bacon into smaller pieces. Add bacon back into the pan and mix together. Drizzle with honey to desired sweetness.");
        assertEquals(directions.keySet().size(), 5);
        System.out.println(recipe.getIngredients());
        System.out.println(directions.get(1));
        System.out.println(directions.get(2));
        System.out.println(directions.get(3));
        System.out.println(directions.get(4));
        System.out.println(directions.get(5));


    }

}