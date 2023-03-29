package mealsbydad.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import mealsbydad.Recipe;

import java.util.Collection;
import java.util.HashSet;

//@Entity
public class User {

    public String getUserName() {
        return userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public Collection<Recipe> getFavoriteRecipes() { return favoriteRecipes; }

    // @Id
    public long id;

    String userName;

    String firstName;

    String lastName;

    String password;

    public Collection<Recipe> favoriteRecipes = new HashSet<>();



    public void addFavoriteRecipe(final Recipe favoriteRecipe) {
        favoriteRecipes.add(favoriteRecipe);
    }




    public User(String userName, String firstName, String lastName, String password) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;


    }

}
