package mealsbydad.restControllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import mealsbydad.entities.Recipe;
import mealsbydad.entities.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD) // reset the database for each test
@AutoConfigureMockMvc
class ControllerIntegrationTest {

    @Autowired
    private MockMvc mvc;

    //Helper function to turn an object into JSON content
    private static String getJsonContent(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }

    @Test
    public void postRecipe() throws Exception {

        //Returns an empty recipe array
        mvc.perform(MockMvcRequestBuilders.get("/api/recipes").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string(equalTo("[]")));

        //Returns an empty user array
        mvc.perform(MockMvcRequestBuilders.get("/api/users").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string(equalTo("[]")));


        //Set up a new user
        final User user = new User("user1", "first", "last", "pass");

        //Make sure that users id is 1
        user.setId(1);

        //Set up a new recipe
        final Recipe recipe = new Recipe("name", "description",
                "ingredients", "instructions");

        //Make sure that recipe id is 1
        recipe.setId(1);

        //POST request to create a new User
        mvc.perform(MockMvcRequestBuilders.post("/api/user")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(user)))
                .andExpect(status().isOk());

        //POST request to create a new recipe by that user
        mvc.perform(MockMvcRequestBuilders.post("/api/users/1/recipe")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(recipe)))
                .andExpect(status().isOk());

        //GET request to retrieve the recipe with an id of 1
        mvc.perform(MockMvcRequestBuilders.get("/api/recipes/1").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        //GET request to retrieve the user with an id of 1
        mvc.perform(MockMvcRequestBuilders.get("/api/users/1").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        //GET request to return 400 error if user doesn't exist
        mvc.perform(MockMvcRequestBuilders.get("/api/users/100").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());

        //GET request to return 400 error if recipe doesn't exist
        mvc.perform(MockMvcRequestBuilders.get("/api/recipes/100").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());

        //POST request to return 400 error if recipe is created by a non-existent user
        mvc.perform(MockMvcRequestBuilders.post("/api/users/100/recipe")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(recipe)))
                .andExpect(status().isNotFound());
    }
}