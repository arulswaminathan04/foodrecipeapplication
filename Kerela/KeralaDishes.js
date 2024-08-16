import React, { useState } from 'react';
import './KeralaDishes.css';
import Confetti from 'react-confetti';

const KeralaDishes = () => {
  const [favourites, setFavourites] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      "name": "Croissant",
      "className": "dish1kr",
      "recipe": {
        "label": "Croissant",
        "url": "https://www.youtube.com/watch?v=djnNkLi_K6E&pp=ygUQQ3JvaXNzYW50IHJlY2lwZQ%3D%3D",
        "videoId": "djnNkLi_K6E",
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "1 cup unsalted butter (chilled and cut into pieces)",
          "¼ cup sugar",
          "1 cup milk",
          "2 ¼ tsp active dry yeast",
          "1 tsp salt",
          "1 egg (for egg wash)"
        ],
        "preparation": [
          "Mix yeast with warm milk and let sit for 5 minutes. In a bowl, combine flour, sugar, and salt.",
          "Cut in chilled butter until the mixture resembles coarse crumbs. Add the yeast mixture and knead until smooth.",
          "Wrap the dough in plastic wrap and chill for at least 2 hours.",
          "Roll out the dough into a large rectangle, fold into thirds, and chill again. Repeat the rolling and folding process 3 times.",
          "Roll out the dough and cut into triangles. Roll each triangle from the wide end and shape into croissants.",
          "Brush with beaten egg and bake at 375°F (190°C) for 15-20 minutes, until golden brown."
        ]
      }
    },
    {
      "name": "Éclair",
      "className": "dish2kr",
      "recipe": {
        "label": "Éclair",
        "url": "https://www.youtube.com/watch?v=6GIGcq8SCpE&pp=ygUOw4ljbGFpciByZWNpcGU%3D",
        "videoId": "6GIGcq8SCpE",
        "ingredients": [
          "1 cup water",
          "½ cup unsalted butter",
          "1 cup all-purpose flour",
          "4 large eggs",
          "1 cup heavy cream",
          "¼ cup sugar",
          "1 tsp vanilla extract",
          "Chocolate glaze (optional)"
        ],
        "preparation": [
          "Preheat the oven to 400°F (200°C). In a saucepan, bring water and butter to a boil. Stir in flour until a dough forms.",
          "Remove from heat and let cool slightly. Beat in eggs one at a time until smooth.",
          "Pipe the dough onto a baking sheet into 4-inch lengths and bake for 20-25 minutes until puffed and golden.",
          "While cooling, whip heavy cream with sugar and vanilla extract until stiff peaks form.",
          "Cut the éclairs in half and fill with whipped cream. Optionally, top with chocolate glaze.",
          "Cool completely before serving."
        ]
      }
    },
    {
      "name": "Mille-Feuille",
      "className": "dish3kr",
      "recipe": {
        "label": "Mille-Feuille",
        "url": "https://www.youtube.com/watch?v=Ic54wMzmV3Q&pp=ygUUTWlsbGUtRmV1aWxsZSByZWNpcGU%3D",
        "videoId": "Ic54wMzmV3Q",
        "ingredients": [
          "Puff pastry sheets",
          "Pastry cream (made with milk, sugar, eggs, and vanilla)",
          "Powdered sugar (for dusting)",
          "Fruit or jam (optional, for filling)"
        ],
        "preparation": [
          "Preheat the oven to 400°F (200°C). Roll out the puff pastry sheets and cut them into even rectangles.",
          "Bake the puff pastry rectangles for 15-20 minutes, or until golden and crisp. Let them cool.",
          "Layer the cooled pastry with pastry cream between each layer.",
          "Dust the top with powdered sugar. Optionally, spread a layer of fruit or jam on the cream before adding the top pastry layer.",
          "Chill in the refrigerator for at least 30 minutes before serving to set the cream."
        ]
      }
    },
    {
      "name": "Danish Pastry",
      "className": "dish4kr",
      "recipe": {
        "label": "Danish Pastry",
        "url": "https://www.youtube.com/watch?v=Zhq20aCSh-s&pp=ygUURGFuaXNoIFBhc3RyeSByZWNpcGU%3D",
        "videoId": "Zhq20aCSh-s",
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "1 cup unsalted butter, chilled and cubed",
          "½ cup sugar",
          "1 cup milk",
          "1 packet active dry yeast",
          "1 egg",
          "Filling of choice (e.g., almond paste, fruit preserves)"
        ],
        "preparation": [
          "In a bowl, combine flour and sugar. Cut in chilled butter until mixture resembles coarse crumbs.",
          "Dissolve yeast in warm milk and let sit for 5 minutes. Add yeast mixture and egg to flour mixture, mixing until a dough forms.",
          "Knead dough lightly, then cover and let rise in a warm place for 1 hour.",
          "Roll out dough on a floured surface, then fold and roll several times to create layers.",
          "Cut and shape dough as desired, add filling, and place on a baking sheet.",
          "Bake at 375°F (190°C) for 15-20 minutes, or until golden brown. Cool before serving."
        ]
      }
    },
    {
      "name": "Apple Turnover",
      "className": "dish5kr",
      "recipe": {
        "label": "Apple Turnover",
        "url": "https://www.youtube.com/watch?v=8Zh6KVV7Ad0&pp=ygUVQXBwbGUgVHVybm92ZXIgcmVjaXBl",
        "videoId": "8Zh6KVV7Ad0",
        "ingredients": [
          "1 sheet puff pastry",
          "2 cups peeled, diced apples",
          "½ cup sugar",
          "1 tsp cinnamon",
          "1 tbsp lemon juice",
          "1 egg (for egg wash)"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C).",
          "In a bowl, mix diced apples with sugar, cinnamon, and lemon juice.",
          "Roll out the puff pastry and cut it into squares or circles.",
          "Place a spoonful of the apple mixture in the center of each pastry piece.",
          "Fold the pastry over to form a triangle or half-moon shape, sealing the edges with a fork.",
          "Brush with beaten egg and bake for 20-25 minutes, or until golden brown."
        ]
      }
    },
    {
      "name": "Cream Puff",
      "className": "dish6kr",
      "recipe": {
        "label": "Profiterole",
        "url": "https://www.youtube.com/watch?v=63wM3_3J6EM&pp=ygUgQ3JlYW0gUHVmZiAoUHJvZml0ZXJvbGUpciByZWNpcGU%3D",
        "videoId": "63wM3_3J6EM",
        "ingredients": [
          "1 cup water",
          "½ cup unsalted butter",
          "1 cup all-purpose flour",
          "4 large eggs",
          "1 cup heavy cream",
          "2 tbsp sugar"
        ],
        "preparation": [
          "Preheat the oven to 425°F (220°C) and line a baking sheet with parchment paper.",
          "In a saucepan, bring water and butter to a boil. Add flour and stir until the dough pulls away from the sides.",
          "Remove from heat and mix in eggs one at a time until smooth.",
          "Spoon or pipe the dough into mounds on the baking sheet and bake for 20-25 minutes until golden brown.",
          "While cooling, whip heavy cream with sugar until stiff peaks form.",
          "Fill the cooled puffs with whipped cream and serve."
        ]
      }
    },
    {
      "name": "Cannoli",
      "className": "dish7kr",
      "recipe": {
        "label": "Cannoli",
        "url": "https://www.youtube.com/watch?v=n4Glui1wRXg&pp=ygUOQ2Fubm9saSByZWNpcGU%3D",
        "videoId": "n4Glui1wRXg",
        "ingredients": [
          "12 oz ricotta cheese",
          "1 cup powdered sugar",
          "1 tsp vanilla extract",
          "1 cup mini chocolate chips",
          "Cannoli shells",
          "1 cup heavy cream"
        ],
        "preparation": [
          "In a bowl, mix ricotta cheese, powdered sugar, and vanilla extract until smooth.",
          "Fold in mini chocolate chips.",
          "Whip heavy cream until stiff peaks form, then gently fold into the ricotta mixture.",
          "Fill a piping bag with the filling and pipe into cannoli shells.",
          "Chill for at least 1 hour before serving.",
          "Dust with powdered sugar before serving if desired."
        ]
      }
    },
    {
      "name": "Baklava",
      "className": "dish8kr",
      "recipe": {
        "label": "Baklava",
        "url": "https://www.youtube.com/watch?v=EBHlZQn14C0&pp=ygUPQmFrbGF2YSAgcmVjaXBl",
        "videoId": "EBHlZQn14C0",
        "ingredients": [
          "1 package phyllo dough",
          "1 cup chopped nuts (walnuts, pistachios, or almonds)",
          "1 cup unsalted butter, melted",
          "1 cup sugar",
          "1 cup water",
          "1 cup honey",
          "1 tsp vanilla extract",
          "1 tsp ground cinnamon"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C). Brush a baking dish with melted butter.",
          "Layer half of the phyllo dough in the dish, brushing each layer with melted butter.",
          "Mix chopped nuts with cinnamon and sprinkle evenly over the top layer of phyllo dough.",
          "Layer the remaining phyllo dough over the nuts, continuing to brush each layer with butter.",
          "Cut the assembled baklava into diamond shapes and bake for 45-50 minutes until golden brown.",
          "While baking, combine sugar, water, honey, and vanilla in a saucepan and simmer for 10 minutes. Pour the syrup over the warm baklava once baked and let cool before serving."
        ]
      }
    },
    {
      "name": "Scone",
      "className": "dish9kr",
      "recipe": {
        "label": "Scone",
        "url": "https://www.youtube.com/watch?v=ulNBP6AQrb8&pp=ygUMU2NvbmUgcmVjaXBl",
        "videoId": "ulNBP6AQrb8", 
        "ingredients": [
          "2 cups all-purpose flour",
          "¼ cup sugar",
          "1 tbsp baking powder",
          "½ cup unsalted butter (cold, cut into cubes)",
          "½ cup milk",
          "1 large egg",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 425°F (220°C) and line a baking sheet with parchment paper.",
          "In a large bowl, mix flour, sugar, and baking powder. Cut in the cold butter until the mixture resembles coarse crumbs.",
          "In another bowl, whisk together milk, egg, and vanilla extract.",
          "Pour the wet ingredients into the dry ingredients and mix until just combined.",
          "Turn the dough onto a floured surface, roll out to about 1-inch thickness, and cut into rounds or wedges.",
          "Place on the prepared baking sheet and bake for 12-15 minutes, or until golden brown. Let cool before serving."
        ]
      }
    },
    {
      "name": "Beignet",
      "className": "dish10kr",
      "recipe": {
        "label": "Beignet",
        "url": "https://www.youtube.com/watch?v=W7rhpbcH6f8&pp=ygUOQmVpZ25ldCByZWNpcGU%3D",
        "videoId": "W7rhpbcH6f8",
        "ingredients": [
          "2 ¼ tsp active dry yeast",
          "¼ cup warm water",
          "½ cup sugar",
          "2 large eggs",
          "¼ cup melted butter",
          "3 ½ cups all-purpose flour",
          "½ tsp salt",
          "Vegetable oil (for frying)",
          "Powdered sugar (for dusting)"
        ],
        "preparation": [
          "Dissolve yeast in warm water and let it sit for 5 minutes.",
          "In a bowl, mix sugar, eggs, melted butter, and yeast mixture. Stir in flour and salt to form a dough.",
          "Knead the dough on a floured surface until smooth, then let it rise in a warm place for about 1 hour.",
          "Roll out the dough to ¼ inch thickness and cut into squares or rectangles.",
          "Heat oil in a deep fryer or large pan to 350°F (175°C) and fry beignets until golden brown, about 2-3 minutes per side.",
          "Drain on paper towels and dust with powdered sugar before serving."
        ]
      }
    },
    {
      "name": "Choux Pastry",
      "className": "dish11kr",
      "recipe": {
        "label": "Choux Pastry",
        "url": "https://www.youtube.com/watch?v=A7OMPK1-wBk&pp=ygUTQ2hvdXggUGFzdHJ5IHJlY2lwZQ%3D%3D",  
        "videoId": "A7OMPK1-wBk",  
        "ingredients": [
          "1 cup water",
          "½ cup unsalted butter",
          "1 cup all-purpose flour",
          "4 large eggs",
          "1 pinch salt"
        ],
        "preparation": [
          "Preheat the oven to 400°F (200°C) and line a baking sheet with parchment paper.",
          "In a saucepan, bring water, butter, and salt to a boil. Remove from heat and stir in the flour until smooth.",
          "Return to heat and cook for 1-2 minutes until the mixture forms a ball and pulls away from the sides of the pan.",
          "Remove from heat and let cool slightly. Beat in eggs one at a time until the mixture is smooth and glossy.",
          "Spoon or pipe the batter onto the prepared baking sheet in small mounds.",
          "Bake for 20-25 minutes, or until golden and puffed. Let cool before filling with cream or custard."
        ]
      }
    },
    {
      "name": "Kouign-Amann",
      "className": "dish12kr",
      "recipe": {
        "label": "Kouign-Amann",
        "url": "https://www.youtube.com/watch?v=RK7AAI6Zicw&pp=ygUTS291aWduLUFtYW5uIHJlY2lwZQ%3D%3D",
        "videoId": "RK7AAI6Zicw",
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "1 cup unsalted butter, softened",
          "¾ cup sugar",
          "1 cup warm water",
          "1 tsp active dry yeast",
          "1 tsp salt"
        ],
        "preparation": [
          "Dissolve yeast in warm water and let sit for 5 minutes. Mix in flour and salt until dough forms.",
          "Knead the dough for 10 minutes, then let rise for 1-2 hours until doubled in size.",
          "Roll out the dough into a rectangle, spread ½ cup butter evenly, and sprinkle with ½ cup sugar.",
          "Fold the dough into thirds, then roll out and fold again. Repeat this process 2-3 times.",
          "Place the dough in a greased pan, sprinkle with remaining sugar, and let rise for 30 minutes.",
          "Bake at 375°F (190°C) for 30-35 minutes, until golden brown and caramelized."
        ]
      }
    },
    {
      "name": "Cheese Danish",
      "className": "dish13kr",
      "recipe": {
        "label": "Cheese Danish",
        "url": "https://www.youtube.com/watch?v=YSuJYyv2-c0&pp=ygUUQ2hlZXNlIERhbmlzaCByZWNpcGU%3D",
        "videoId": "YSuJYyv2-c0",
        "ingredients": [
          "1 sheet puff pastry",
          "1 cup cream cheese, softened",
          "¼ cup sugar",
          "1 egg, beaten",
          "1 tsp vanilla extract",
          "1 tbsp all-purpose flour"
        ],
        "preparation": [
          "Preheat oven to 375°F (190°C). Line a baking sheet with parchment paper.",
          "Roll out the puff pastry on a lightly floured surface and cut into squares.",
          "Mix cream cheese, sugar, vanilla extract, and flour in a bowl until smooth.",
          "Place a spoonful of the cream cheese mixture in the center of each pastry square.",
          "Fold the edges of the pastry over the filling and brush with beaten egg.",
          "Bake for 15-20 minutes or until golden brown and puffed. Cool before serving."
        ]
      }
    },
    {
      "name": "Palmier",
      "className": "dish14kr",
      "recipe": {
        "label": "Palmier",
        "url": "https://www.youtube.com/watch?v=w6URXwEARkk&pp=ygUOUGFsbWllciByZWNpcGU%3D",
        "videoId": "w6URXwEARkk",
        "ingredients": [
          "1 sheet puff pastry",
          "½ cup granulated sugar",
          "1 tsp ground cinnamon",
          "1 egg (for egg wash)"
        ],
        "preparation": [
          "Preheat the oven to 400°F (200°C).",
          "Roll out the puff pastry sheet on a lightly floured surface.",
          "Sprinkle sugar and cinnamon evenly over the pastry, then fold each side towards the center and roll up from both sides to form a log.",
          "Slice the log into ½-inch thick pieces and place them on a baking sheet lined with parchment paper.",
          "Brush with a beaten egg for a golden finish.",
          "Bake for 12-15 minutes or until the pastries are golden and caramelized."
        ]
      }
    },
    {
      "name": "Galaktoboureko",
      "className": "dish15kr",
      "recipe": {
        "label": "Galaktoboureko",
        "url": "https://www.youtube.com/watch?v=DLa4xM8vgyo&pp=ygUUR2FsYWt0b2JvdXJla29yZWNpcGU%3D",
        "videoId": "DLa4xM8vgyo",
        "ingredients": [
          "Phyllo dough sheets",
          "1 cup semolina",
          "4 cups milk",
          "1 cup sugar",
          "3 large eggs",
          "1 tsp vanilla extract",
          "1 cup melted butter",
          "1 cup sugar (for syrup)",
          "1 cup water",
          "1 tbsp lemon juice"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C). Grease a baking dish and layer half of the phyllo dough, brushing each sheet with melted butter.",
          "In a saucepan, heat milk and sugar until the sugar dissolves. Whisk in semolina and cook until thickened.",
          "Remove from heat and stir in vanilla extract and beaten eggs. Let the custard cool slightly.",
          "Spread the custard over the phyllo dough. Top with remaining phyllo dough, brushing each layer with butter.",
          "Bake for 45-50 minutes, until golden brown. While baking, prepare the syrup by boiling water, sugar, and lemon juice.",
          "Pour the hot syrup over the baked galaktoboureko and let it cool before serving."
        ]
      }
    }    
  ];
  

  const handleAddToFavourites = (dishName) => {
    const isFavourite = !favourites[dishName];
    setFavourites((prev) => ({
      ...prev,
      [dishName]: isFavourite
    }));

    setIsAdding(isFavourite);
    setMessage(`${dishName} ${isFavourite ? 'added to' : 'removed from'} your favourites`);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleViewRecipe = (dish) => {
    setSelectedDish(dish);
  };

  const closeRecipeView = () => {
    setSelectedDish(null);
  };

  return (
    <div className="kerala-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Pastries</h1>
      {showMessage && (
        <div className={`message-overlay ${isAdding ? 'adding' : 'removing'}`}>
          {isAdding ? <Confetti /> : null}
          <div className={`message-content ${isAdding ? 'adding' : 'removing'}`}>
            <div className="message">{message}</div>
          </div>
        </div>
      )}
      {selectedDish ? (
        <div className="recipe-page">
          <button className="back-button" onClick={closeRecipeView}>Close</button>
          <div className="recipe-content">
            <div className="recipe-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedDish.recipe.videoId}`}
                title={selectedDish.recipe.label}
                allowFullScreen
              ></iframe>
            </div>
            <div className="recipe-details">
              <h2>{selectedDish.recipe.label}</h2>
              <h3>Ingredients</h3>
              <ul>
                {selectedDish.recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3>Preparation</h3>
              <p>{selectedDish.recipe.preparation}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="dishes-grid">
          {dishes.map((dish, index) => (
            <div key={index} className={`dish-square ${dish.className}`}>
              <div className="overlay">
                <div className="text">{dish.name}</div>
                <div className="buttons-container">
                  <button className="view-recipe-button" onClick={() => handleViewRecipe(dish)}>
                    View Recipe
                  </button>
                  <button
                    className="favourites-button"
                    onClick={() => handleAddToFavourites(dish.name)}
                  >
                    <span className="star-icon">★</span>
                    {favourites[dish.name] ? 'Favourited' : 'Add to Favourites'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeralaDishes;
