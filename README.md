# MealsByDad


## Creating a new database for the Project
* `mysql -u root -e "drop database chefboyarjava"`
* `mysql -u root -e "create database chefboyarjava"`

Each Recipe need to contain certain components so that it will interact will our front end properly

# Entities
## User
- needs username 
- ability to log in
- ability to like recipes
## Recipe
### Needs to have
- Name
- Description
- Instructions
- Category
- Ingredients
- Likes

# Components

- Login
- Recipe card
- Search
- Display list
- Resources (links to other helpful pages)
- Our bio page


Recipe curl command
Sweet Potato Hash
curl -X POST http://localhost:8080/api/users/1/recipe -H 'Content-Type: application/json' -d '{"name": "Sweet Potato Hash", "description": "Savory breakfast hash with sweet potatoes and apples sprinkled with cinnamon and drizzled with honey.", "ingredients": "2 Sweet Potatoes, 2 Apples, 4 Strips of Bacon, Honey, Cinnamon, salt, pepper", "instructions": "1. Dice Sweet potatoes and apples into 1/4-1/2 in pieces. 2. Cook bacon in a pan to desired crispiness, remove from the pan and set aside. 3. In the same pan, add sweet potatoes, sprinkle with salt, pepper, and cinnamon, mix frequently and cook until sweet potatoes start to brown 10-15 minutes. 4. Add apples to the pan, sprinkle with salt, pepper, and cinnamon, and stir frequently until apples are soft and start to brown 5 minutes. 5. Shred bacon into smaller pieces. Add bacon back into the pan and mix together. Drizzle with honey to desired sweetness." }'
