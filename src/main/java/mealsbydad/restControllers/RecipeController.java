package mealsbydad.restControllers;

import mealsbydad.entities.Recipe;
import mealsbydad.entities.User;
import mealsbydad.respositories.RecipeRepository;
import mealsbydad.respositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@CrossOrigin
public class RecipeController {

    final private RecipeRepository recipeRepository;
    final private UserRepository userRepository;

    public RecipeController(RecipeRepository recipeRepository, UserRepository userRepository) {
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/api/recipes")
    public Iterable<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    @PostMapping("/api/users/{user_id}/recipe")
    public Recipe postRecipe(@PathVariable final long user_id,
                             final @RequestBody Recipe recipe) {
        final Optional<User> perhapsUser = userRepository.findById(user_id);
        perhapsUser.orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Cannot find user " + user_id));
        recipe.setAuthor(perhapsUser.get());
        return recipeRepository.save(recipe);
    }

    @GetMapping("/api/recipes/{recipe_id}")
    public Recipe getRecipeByID(final @PathVariable long recipe_id) {
        final Optional<Recipe> perhapsRecipe = recipeRepository.findById(recipe_id);
        return perhapsRecipe
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cannot find recipe " + recipe_id));
    }
}
