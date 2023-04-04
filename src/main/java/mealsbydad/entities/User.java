package mealsbydad.entities;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashSet;

@Entity(name = "MyUsers")
public class User {

    @Id
    @GeneratedValue()
    public long id;
    @ManyToMany
    public Collection<Recipe> favoriteRecipes = new HashSet<>();
    String userName;
    String firstName;
    String lastName;
    String password;
    @OneToMany(mappedBy = "author")
    private Collection<Recipe> authoredRecipes = new HashSet<>();

    public User() {

    }

    public User(String userName, String firstName, String lastName, String password) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;


    }

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

    public Collection<Recipe> getFavoriteRecipes() {
        return favoriteRecipes;
    }

    public void addFavoriteRecipe(final Recipe favoriteRecipe) {
        favoriteRecipes.add(favoriteRecipe);
    }

    public void removeFavoriteRecipe(final Recipe favoriteRecipe) {
        favoriteRecipes.remove(favoriteRecipe);
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setAuthoredRecipe(Recipe recipe) {
        this.setAuthoredRecipe(recipe);
    }
}
