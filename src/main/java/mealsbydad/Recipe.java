package mealsbydad;

public class Recipe {


    private int id;
    private String name;
    private String description;
    private String ingredients;
    private String instructions;
    private long userLikes;

    public Recipe() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return this.description;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getIngredients() {
        return this.ingredients;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getInstructions() {
        return this.instructions;
    }

    public void setUserLikes(long userLikes) {
        this.userLikes = userLikes;
    }

    public long getUserLikes() {
        return this.userLikes;
    }
}
