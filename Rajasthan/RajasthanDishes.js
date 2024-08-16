import React, { useState } from 'react';
import './RajasthanDishes.css';
import Confetti from 'react-confetti';

const RajasthanDishes = () => {
  const [favourites, setFavourites] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      "name": "Classic Glazed Doughnuts",
      "className": "dish1rj",
      "recipe": {
        "label": "Classic Glazed Doughnuts",
        "url": "https://www.youtube.com/watch?v=aFaQ2cxYxbM&pp=ygUfQ2xhc3NpYyBHbGF6ZWQgRG91Z2hudXRzIHJlY2lwZQ%3D%3D",
        "videoId": "aFaQ2cxYxbM",
        "ingredients": [
          "2 ¼ tsp active dry yeast",
          "¼ cup warm milk",
          "2 ½ cups all-purpose flour",
          "¼ cup sugar",
          "¼ cup unsalted butter",
          "2 large eggs",
          "1 tsp vanilla extract",
          "Vegetable oil for frying",
          "1 ½ cups powdered sugar",
          "2-3 tbsp milk (for glaze)"
        ],
        "preparation": [
          "Dissolve yeast in warm milk and let sit for 5 minutes.",
          "In a bowl, mix flour, sugar, and salt. Add yeast mixture, melted butter, eggs, and vanilla; knead into a smooth dough.",
          "Let dough rise in a warm place for 1-2 hours, or until doubled in size.",
          "Roll out dough and cut into doughnut shapes. Let rise for 30 minutes.",
          "Heat oil in a deep pan and fry doughnuts until golden brown. Drain on paper towels.",
          "Mix powdered sugar with milk to make the glaze, then dip the warm doughnuts in the glaze and let set before serving."
        ]
      }
    },
    {
      "name": "Chocolate Frosted Doughnuts",
      "className": "dish2rj",
      "recipe": {
        "label": "Chocolate Frosted Doughnuts",
        "url": "https://www.youtube.com/watch?v=9qiSPNqOwQk&pp=ygUiQ2hvY29sYXRlIEZyb3N0ZWQgRG91Z2hudXRzIHJlY2lwZQ%3D%3D",
        "videoId": "9qiSPNqOwQk",
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "½ cup sugar",
          "2 tsp baking powder",
          "½ tsp salt",
          "½ cup milk",
          "2 large eggs",
          "¼ cup melted butter",
          "1 tsp vanilla extract",
          "1 cup chocolate chips (for frosting)"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, whisk together flour, sugar, baking powder, and salt.",
          "In another bowl, mix milk, eggs, melted butter, and vanilla extract.",
          "Combine the wet and dry ingredients until smooth. Pipe the batter into the doughnut pan.",
          "Bake for 12-15 minutes, or until a toothpick comes out clean. Let cool.",
          "Melt chocolate chips and dip the cooled doughnuts into the chocolate. Let the frosting set before serving."
        ]
      }
    },
    {
      "name": "Jelly-Filled Doughnuts",
      "className": "dish3rj",
      "recipe": {
        "label": "Jelly-Filled Doughnuts",
        "url": "https://www.youtube.com/watch?v=HAEqu0jpeH0&pp=ygUTamVsbHkgZG9udXRzIHJlY2lwZQ%3D%3D", 
        "videoId": "HAEqu0jpeH0", 
        "ingredients": [
          "2 ¼ tsp active dry yeast",
          "¼ cup warm milk",
          "2 ½ cups all-purpose flour",
          "¼ cup sugar",
          "¼ cup unsalted butter",
          "2 large eggs",
          "½ tsp salt",
          "1 cup jelly or jam of choice",
          "Oil for frying",
          "Powdered sugar for dusting"
        ],
        "preparation": [
          "Dissolve yeast in warm milk and let it sit until frothy.",
          "In a bowl, mix flour, sugar, and salt. Add melted butter, eggs, and the yeast mixture, and knead until smooth.",
          "Let the dough rise in a warm place for about 1-2 hours, or until doubled in size.",
          "Roll out the dough, cut into circles, and let rise again for about 30 minutes.",
          "Heat oil to 350°F (175°C) and fry the doughnuts until golden brown. Drain on paper towels.",
          "Once cool, fill with jelly using a piping bag and dust with powdered sugar before serving."
        ]
      }
    },
    {
      "name": "Boston Cream Doughnuts",
      "className": "dish4rj",
      "recipe": {
        "label": "Boston Cream Doughnuts",
        "url": "https://www.youtube.com/watch?v=H1iBZic7FOc&pp=ygUdQm9zdG9uIENyZWFtIERvdWdobnV0cyByZWNpcGU%3D",
        "videoId": "H1iBZic7FOc",
        "ingredients": [
          "2 ¼ cups all-purpose flour",
          "1/4 cup sugar",
          "1 packet active dry yeast",
          "½ cup milk",
          "2 tbsp butter",
          "2 large eggs",
          "1 cup vanilla custard",
          "1 cup chocolate glaze"
        ],
        "preparation": [
          "In a bowl, mix flour, sugar, and yeast. Warm milk and butter, then combine with the dry ingredients.",
          "Knead the dough until smooth, let it rise for 1-2 hours, then roll out and cut into doughnut shapes.",
          "Fry the doughnuts in hot oil until golden brown. Let cool on a wire rack.",
          "Fill the cooled doughnuts with vanilla custard using a piping bag.",
          "Dip the tops in chocolate glaze and let set.",
          "Serve once the glaze is firm and enjoy."
        ]
      }
    },
    {
      "name": "Cinnamon Sugar Doughnuts",
      "className": "dish5rj",
      "recipe": {
        "label": "Cinnamon Sugar Doughnuts",
        "url": "https://www.youtube.com/watch?v=9aCCd1_cOoQ&pp=ygUfQ2lubmFtb24gU3VnYXIgRG91Z2hudXRzIHJlY2lwZQ%3D%3D",
        "videoId": "9aCCd1_cOoQ",
        "ingredients": [
          "2 ¼ cups all-purpose flour",
          "1 cup sugar",
          "2 tsp baking powder",
          "½ tsp salt",
          "¼ cup unsalted butter, melted",
          "2 large eggs",
          "1 cup milk",
          "½ cup granulated sugar (for coating)",
          "1 tbsp ground cinnamon (for coating)"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, mix flour, sugar, baking powder, and salt.",
          "In another bowl, whisk melted butter, eggs, and milk. Combine with the dry ingredients until smooth.",
          "Pour the batter into the doughnut pan and bake for 12-15 minutes, or until a toothpick comes out clean.",
          "Combine granulated sugar and cinnamon in a bowl. Once the doughnuts are slightly cooled, toss them in the cinnamon sugar mixture.",
          "Serve warm or at room temperature."
        ]
      }
    },
    {
      "name": "Blueberry Doughnuts",
      "className": "dish6rj",
      "recipe": {
        "label": "Blueberry Doughnuts",
        "url": "https://www.youtube.com/watch?v=2qqDVGHD8Jg&pp=ygUaQmx1ZWJlcnJ5IERvdWdobnV0cyByZWNpcGU%3D", 
        "videoId": "2qqDVGHD8Jg",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "1 cup fresh or frozen blueberries",
          "2 tsp baking powder",
          "½ cup milk",
          "2 large eggs",
          "¼ cup unsalted butter, melted",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, whisk together flour, sugar, and baking powder.",
          "In another bowl, mix milk, eggs, melted butter, and vanilla extract.",
          "Combine wet and dry ingredients until just mixed, then fold in blueberries.",
          "Spoon the batter into the doughnut pan and bake for 15-20 minutes or until golden brown.",
          "Cool slightly before removing from the pan, then enjoy warm or with a dusting of powdered sugar."
        ]
      }
    },
    {
      "name": "Red Velvet Doughnuts",
      "className": "dish7rj",
      "recipe": {
        "label": "Red Velvet Doughnuts",
        "url": "https://www.youtube.com/watch?v=JfTB5YgHUqs&pp=ygUbUmVkIFZlbHZldCBEb3VnaG51dHMgcmVjaXBl",
        "videoId": "JfTB5YgHUqs",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "2 tbsp cocoa powder",
          "1 tsp baking powder",
          "½ cup buttermilk",
          "2 large eggs",
          "½ cup vegetable oil",
          "1 tbsp red food coloring",
          "1 tsp vanilla extract",
          "½ tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, mix flour, cocoa powder, baking powder, and salt.",
          "In another bowl, whisk together sugar, eggs, buttermilk, oil, food coloring, and vanilla.",
          "Combine wet and dry ingredients until just mixed.",
          "Pipe or spoon the batter into the doughnut pan and bake for 10-12 minutes.",
          "Cool the doughnuts, then glaze with your favorite icing or serve plain."
        ]
      }
    },
    {
      "name": "Lemon Poppy Seed Doughnuts",
      "className": "dish8rj",
      "recipe": {
        "label": "Lemon Poppy Seed Doughnuts",
        "url": "https://www.youtube.com/watch?v=EdTTpjCKpaM&pp=ygUhTGVtb24gUG9wcHkgU2VlZCBEb3VnaG51dHMgcmVjaXBl",
        "videoId": "EdTTpjCKpaM",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "2 tbsp poppy seeds",
          "2 tsp baking powder",
          "¼ cup unsalted butter, melted",
          "1 large egg",
          "¾ cup milk",
          "2 tbsp lemon zest",
          "2 tbsp lemon juice"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, whisk together flour, sugar, poppy seeds, and baking powder.",
          "In another bowl, mix melted butter, egg, milk, lemon zest, and lemon juice.",
          "Combine wet and dry ingredients until just mixed, then fill the doughnut pan.",
          "Bake for 12-15 minutes, or until a toothpick comes out clean.",
          "Cool before glazing or serving."
        ]
      }
    },
    {
      "name": "Coconut Doughnuts",
      "className": "dish9rj",
      "recipe": {
        "label": "Coconut Doughnuts",
        "url": "https://www.youtube.com/watch?v=gSGddUhaRns&pp=ygUYQ29jb251dCBEb3VnaG51dHMgcmVjaXBl",
        "videoId": "gSGddUhaRns",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "½ cup shredded coconut",
          "2 tsp baking powder",
          "½ cup milk",
          "¼ cup melted butter",
          "2 large eggs",
          "1 tsp vanilla extract",
          "Oil for frying"
        ],
        "preparation": [
          "In a bowl, mix flour, sugar, shredded coconut, and baking powder.",
          "In another bowl, whisk together milk, melted butter, eggs, and vanilla extract.",
          "Combine wet and dry ingredients until just mixed.",
          "Heat oil in a deep pan to 350°F (175°C). Drop spoonfuls of batter into the oil and fry until golden brown.",
          "Remove doughnuts with a slotted spoon and drain on paper towels.",
          "Cool slightly before serving or dust with powdered sugar."
        ]
      }
    },
    {
      "name": "Salted Caramel Doughnuts",
      "className": "dish10rj",
      "recipe": {
        "label": "Salted Caramel Doughnuts",
        "url": "https://www.youtube.com/watch?v=YQKGw_79mpc&pp=ygUfU2FsdGVkIENhcmFtZWwgRG91Z2hudXRzIHJlY2lwZQ%3D%3D",
        "videoId": "YQKGw_79mpc",
        "ingredients": [
          "2 ¼ cups all-purpose flour",
          "¼ cup sugar",
          "1 tbsp baking powder",
          "½ tsp salt",
          "1 cup milk",
          "2 large eggs",
          "¼ cup melted butter",
          "1 cup caramel sauce",
          "Sea salt for sprinkling"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, whisk together flour, sugar, baking powder, and salt.",
          "In another bowl, mix milk, eggs, and melted butter until combined.",
          "Add wet ingredients to dry ingredients and stir until just combined.",
          "Fill doughnut pan and bake for 12-15 minutes, or until a toothpick comes out clean.",
          "Cool slightly, then dip in caramel sauce and sprinkle with sea salt."
        ]
      }
    },
    {
      "name": "Churro Doughnuts",
      "className": "dish11rj",
      "recipe": {
        "label": "Churro Doughnuts",
        "url": "https://www.youtube.com/watch?v=jfMIBG27Aus&pp=ygUXQ2h1cnJvIERvdWdobnV0cyByZWNpcGU%3D",
        "videoId": "jfMIBG27Aus",
        "ingredients": [
          "1 cup water",
          "¼ cup unsalted butter",
          "1 cup all-purpose flour",
          "2 large eggs",
          "½ cup granulated sugar",
          "1 tsp cinnamon",
          "Oil for frying"
        ],
        "preparation": [
          "In a saucepan, bring water and butter to a boil. Remove from heat and stir in flour until a dough forms.",
          "Beat in eggs one at a time until smooth. Transfer the dough to a piping bag fitted with a star tip.",
          "Heat oil in a deep fryer or large pan to 350°F (175°C). Pipe dough into the hot oil, cutting into 3-inch lengths.",
          "Fry until golden brown, then drain on paper towels.",
          "Combine granulated sugar and cinnamon in a bowl. Roll the warm doughnuts in the cinnamon-sugar mixture.",
          "Serve immediately and enjoy the crispy, sweet treat."
        ]
      }
    },
    {
      "name": "Strawberry Frosted Doughnuts",
      "className": "dish12rj",
      "recipe": {
        "label": "Strawberry Frosted Doughnuts",
        "url": "https://www.youtube.com/watch?v=aERoQJTf5nY&pp=ygUjU3RyYXdiZXJyeSBGcm9zdGVkIERvdWdobnV0cyByZWNpcGU%3D",
        "videoId": "aERoQJTf5nY",
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "½ cup sugar",
          "2 tsp baking powder",
          "¼ tsp salt",
          "½ cup milk",
          "¼ cup unsalted butter (melted)",
          "2 large eggs",
          "1 tsp vanilla extract",
          "1 cup fresh strawberries (for frosting)",
          "1 ½ cups powdered sugar"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, mix flour, sugar, baking powder, and salt.",
          "In another bowl, whisk milk, melted butter, eggs, and vanilla. Combine with dry ingredients until just mixed.",
          "Spoon the batter into the doughnut pan and bake for 10-12 minutes, or until a toothpick comes out clean.",
          "While the doughnuts cool, blend fresh strawberries with powdered sugar to make the frosting.",
          "Dip the cooled doughnuts into the strawberry frosting and let set before serving."
        ]
      }
    },
    {
      "name": "Black Forest Doughnuts",
      "className": "dish13rj",
      "recipe": {
        "label": "Black Forest Doughnuts",
        "url": "https://www.youtube.com/watch?v=WdewFQOpQLk&pp=ygUdQmxhY2sgRm9yZXN0IERvdWdobnV0cyByZWNpcGU%3D",  
        "videoId": "WdewFQOpQLk",  
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "½ cup sugar",
          "1 tsp baking powder",
          "¼ cup unsweetened cocoa powder",
          "1 cup milk",
          "2 large eggs",
          "¼ cup vegetable oil",
          "1 cup cherry pie filling",
          "1 cup whipped cream",
          "1 cup powdered sugar (for glaze)"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and grease a doughnut pan.",
          "In a bowl, mix flour, sugar, baking powder, and cocoa powder.",
          "In another bowl, whisk milk, eggs, and vegetable oil, then combine with dry ingredients.",
          "Fill the doughnut pan with the batter and bake for 15-18 minutes or until a toothpick comes out clean.",
          "Once cooled, dip the doughnuts in powdered sugar glaze, top with whipped cream, and spoon cherry pie filling over them.",
          "Garnish with extra cherries if desired and serve."
        ]
      }
    },
    {
      "name": "White Chocolate Raspberry Doughnuts",
      "className": "dish14rj",
      "recipe": {
        "label": "White Chocolate Raspberry Doughnuts",
        "url": "https://www.youtube.com/watch?v=76zGSaalulM&pp=ygUqV2hpdGUgQ2hvY29sYXRlIFJhc3BiZXJyeSBEb3VnaG51dHMgcmVjaXBl",  
        "videoId": "76zGSaalulM",  
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "2 tsp baking powder",
          "½ tsp salt",
          "½ cup unsalted butter (melted)",
          "2 large eggs",
          "1 cup milk",
          "1 cup fresh raspberries",
          "½ cup white chocolate chips"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, mix flour, sugar, baking powder, and salt.",
          "In another bowl, combine melted butter, eggs, and milk. Add to dry ingredients and mix until just combined.",
          "Fold in raspberries and white chocolate chips.",
          "Fill the doughnut pan with batter and bake for 12-15 minutes, or until a toothpick comes out clean.",
          "Cool the doughnuts before glazing or serving as desired."
        ]
      }
    },
    {
      "name": "Pistachio Doughnuts",
      "className": "dish15rj",
      "recipe": {
        "label": "Pistachio Doughnuts",
        "url": "https://www.youtube.com/watch?v=H8QuCwRskU0&pp=ygUkUGlzdGFjaGlvIERvdWdobnV0cyBEb3VnaG51dHMgcmVjaXBl",
        "videoId": "H8QuCwRskU0",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "½ cup ground pistachios",
          "2 tsp baking powder",
          "½ cup milk",
          "2 large eggs",
          "¼ cup melted butter",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a doughnut pan.",
          "In a bowl, whisk together flour, sugar, ground pistachios, and baking powder.",
          "In another bowl, mix milk, eggs, melted butter, and vanilla extract.",
          "Combine wet and dry ingredients until just mixed, then fill the doughnut pan.",
          "Bake for 12-15 minutes, or until a toothpick inserted comes out clean.",
          "Cool the doughnuts, then glaze or dust with powdered sugar if desired."
        ]
      }
    },
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
    <div className="rajasthan-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Doughnuts</h1>
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
              <p>{selectedDish.recipe.preparation.join(' ')}</p>
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
                  <button
                    className="view-recipe-button"
                    onClick={() => handleViewRecipe(dish)}
                  >
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

export default RajasthanDishes;
