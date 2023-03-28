package mealsbydad;

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


}