package mealsbydad.restControllers;

import mealsbydad.entities.Recipe;
import mealsbydad.respositories.RecipeRepository;
import mealsbydad.respositories.UserRepository;
import org.springframework.web.bind.annotation.*;

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
        recipe.setAuthor(recipeRepository.findById(user_id));
        return recipeRepository.save(recipe);
    }

    @GetMapping("api/recipes/{recipe_id}")
    public Optional<Recipe> getRecipe(@PathVariable final long recipe_id) {
        return recipeRepository.findById(recipe_id);
    }
}
