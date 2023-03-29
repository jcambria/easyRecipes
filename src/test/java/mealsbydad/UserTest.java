package mealsbydad;

import mealsbydad.entities.Recipe;
import mealsbydad.entities.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void testUser() {
        User testuser = new User("RGernert", "Ryan", "Gernert", "abc");
        assertEquals("RGernert", testuser.getUserName());
        assertEquals("Ryan", testuser.getFirstName());
        assertEquals("Gernert", testuser.getLastName());
        assertEquals("abc", testuser.getPassword());
    }

    @Test
    void favoriteRecipes() {
        User testuser = new User("RGernert", "Ryan", "Gernert", "abc");
        Recipe recipe = new Recipe();
        Recipe recipe2 = new Recipe();
        testuser.addFavoriteRecipe(recipe);
        testuser.addFavoriteRecipe(recipe2);
        assertTrue(testuser.getFavoriteRecipes().contains(recipe));
        assertTrue(testuser.getFavoriteRecipes().contains(recipe2));
        assertEquals(2, testuser.getFavoriteRecipes().size());
    }

    @Test
    void removeFavoriteRecipes() {
        User testuser = new User("RGernert", "Ryan", "Gernert", "abc");
        Recipe recipe = new Recipe();
        Recipe recipe2 = new Recipe();
        testuser.addFavoriteRecipe(recipe);
        testuser.addFavoriteRecipe(recipe2);
        testuser.removeFavoriteRecipe(recipe);
        assertFalse(testuser.getFavoriteRecipes().contains(recipe));
        assertTrue(testuser.getFavoriteRecipes().contains(recipe2));
    }


}