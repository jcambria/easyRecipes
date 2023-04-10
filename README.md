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
Pasta and Veggie Stir Fry
curl -X POST http://localhost:8080/api/users/1/recipe -H 'Content-Type: application/json' -d '{"name": "Pasta and Veggie Stir Fry", "description": "Quick and easy, pasta drizzled with oil, seasoning and veggies.", "ingredients": "Pasta(desired type, I use penne), 1 Onion, 1 Pepper, 2 Carrots, Olive oil, Italian seasoning, garlic", "instructions": "1. Bring water to a boil and add pasta. 2. Cut Vegetables into thin slices and mince garlic add oil and vegetables to a saute pan on medium heat. 3. Stir vegetables frequently add seasoning and garlic. 4. Once pasta is done drain then add the pasta to the pan with vegetables, add more oil and seasoning and stir." }'
Grilled Pork Loin
curl -X POST http://localhost:8080/api/users/1/recipe -H 'Content-Type: application/json' -d '{"name": "Grilled Pork Loin", "description": "Savory grilled pork served over rice with veggies on the side.)", "ingredients": "1lb pork loin (I get pre-seasoned pork but you can season it yourself), 1 1/2 cups rice, 1 cup canned green beans (you can use fresh and heat them in a pan if desired), salt, pepper, butter", "instructions": "1. Bring 2 cups of water to a boil then add rice.  2. Bring grill to medium heat place pork for 8 minutes then flip, cook for another 8 minutes. Slice pork to check if it's done, thicker pieces may need a few more minutes. 3. White rice and pork cook add green beans to a bowl with 1 tbsp butter salt and pepper, microwave for 1 minute and stir. If fresh bring a pan to medium heat then add butter and stir for 5-8 minutes. 4. Slice pork into 1 1/2 slices and serve with the rice and green beans on the side." }'
Philly Cheese Steak
curl -X POST http://localhost:8080/api/users/1/recipe -H 'Content-Type: application/json' --data-binary '{"name": "Philly Cheesesteak", "description": "a sandwich made with super thinly sliced ribeye steak, caramelized onion, and provolone cheese", "ingredients": $' 10 to 12 ounces ribeye steak \n 1/2 teaspoon kosher salt \n 1/2 teaspoon black pepper, 2 tablespoons olive oil, 1/2 medium sweet onion, sliced, 1/2 green bell pepper, sliced, 1/2 red bell pepper, sliced , 3 slices provolone cheese, 2 hoagie rolls, toasted, 1/4 cup Cheez Whiz, warmed, Fresh thyme, for garnish, optional', "instructions": "1.Butter hoagie rolls, 2.dice onion and thinly slice beef, 3.Sautee beef until cooked through and add back onions, 4. divide into 4 portions, top each with 2 slices cheese, 5.Cover wth buns and scrape buns with a spatula" }'