package mealsbydad.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

import java.util.Collection;
import java.util.HashSet;

@Entity(name = "MyUsers")
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

    public Collection<Recipe> getFavoriteRecipes() {
        return favoriteRecipes;
    }

    @Id
    public long id;

    String userName;

    String firstName;

    String lastName;

    String password;
    @ManyToMany
    public Collection<Recipe> favoriteRecipes = new HashSet<>();

    @OneToMany(mappedBy = "author")
    private Collection<Recipe> authoredRecipes = new HashSet<>();


    public void addFavoriteRecipe(final Recipe favoriteRecipe) {
        favoriteRecipes.add(favoriteRecipe);
    }

    public void removeFavoriteRecipe(final Recipe favoriteRecipe) {
        favoriteRecipes.remove(favoriteRecipe);
    }


    public User(String userName, String firstName, String lastName, String password) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;


    }

}
