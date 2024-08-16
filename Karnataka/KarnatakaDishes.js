import React, { useState } from 'react';
import './KarnatakaDishes.css';
import Confetti from 'react-confetti';

const KarnatakaDishes = () => {
  const [favourites, setFavourites] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      "name": "Blueberry Muffins",
      "className": "dish1ka",
      "recipe": {
        "label": "Blueberry Muffins",
        "url": "https://www.youtube.com/watch?v=298pJ8G3Dj8&pp=ygUYYmx1ZWJlcnJ5IG11ZmZpbnMgcmVjaXBl",
        "videoId": "298pJ8G3Dj8",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "¾ cup sugar",
          "½ cup milk",
          "⅓ cup vegetable oil",
          "1 large egg",
          "1 cup fresh blueberries",
          "2 tsp baking powder",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners.",
          "In a large bowl, mix flour, sugar, and baking powder.",
          "In another bowl, whisk together milk, oil, egg, and vanilla extract.",
          "Combine wet and dry ingredients until just mixed, then fold in the blueberries.",
          "Divide the batter among the muffin cups and bake for 20-25 minutes, until golden brown."
        ]
      }
    },
    {
      "name": "Chocolate Chip Muffins",
      "className": "dish2ka",
      "recipe": {
        "label": "Chocolate Chip Muffins",
        "url": "https://www.youtube.com/watch?v=aEFvNsBDCWs&pp=ygUdQ2hvY29sYXRlIENoaXAgTXVmZmlucyByZWNpcGU%3DL",
        "videoId": "aEFvNsBDCWs",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "1 cup chocolate chips",
          "½ cup unsalted butter, melted",
          "2 large eggs",
          "1 cup milk",
          "1 tsp baking powder",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners.",
          "In a bowl, mix flour, sugar, and baking powder. In another bowl, whisk together milk, melted butter, eggs, and vanilla.",
          "Combine the wet and dry ingredients, then fold in the chocolate chips.",
          "Spoon the batter into the muffin tin, filling each cup about two-thirds full.",
          "Bake for 18-20 minutes or until a toothpick inserted into the center comes out clean.",
          "Let the muffins cool in the tin for a few minutes before transferring them to a wire rack to cool completely."
        ]
      }
    },
    {
      "name": "Banana Nut Muffins",
      "className": "dish3ka",
      "recipe": {
        "label": "Banana Nut Muffins",
        "url": "https://www.youtube.com/watch?v=Z2ljgiT7LVo&pp=ygUZQmFuYW5hIE51dCBNdWZmaW5zIHJlY2lwZQ%3D%3D",
        "videoId": "Z2ljgiT7LVo", 
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "1 tsp baking soda",
          "3 ripe bananas (mashed)",
          "1/2 cup melted butter",
          "1/2 cup chopped walnuts"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a muffin tin with paper liners.",
          "In a bowl, combine flour, sugar, and baking soda.",
          "Mix in the mashed bananas and melted butter until just combined.",
          "Fold in the chopped walnuts.",
          "Spoon the batter into the muffin tin and bake for 20-25 minutes, or until a toothpick comes out clean.",
          "Cool slightly before serving."
        ]
      }
    },
    {
      "name": "Pumpkin Spice Muffins",
      "className": "dish4ka",
      "recipe": {
        "label": "Pumpkin Spice Muffins",
        "url": "https://www.youtube.com/watch?v=XI_sHPitMGA&pp=ygUcUHVtcGtpbiBTcGljZSBNdWZmaW5zIHJlY2lwZQ%3D%3D",
        "videoId": "XI_sHPitMGA",
        "ingredients": [
          "1 ¾ cups all-purpose flour",
          "1 cup sugar",
          "1 cup canned pumpkin puree",
          "2 large eggs",
          "½ cup vegetable oil",
          "1 tsp baking soda",
          "1 ½ tsp pumpkin pie spice",
          "½ tsp salt"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C) and line a muffin tin with paper liners.",
          "In a bowl, mix flour, sugar, baking soda, pumpkin pie spice, and salt.",
          "In another bowl, whisk together pumpkin puree, eggs, and vegetable oil.",
          "Combine the wet and dry ingredients until just mixed.",
          "Divide the batter evenly among the muffin cups.",
          "Bake for 20-25 minutes, or until a toothpick inserted into the center comes out clean."
        ]
      }
    },
    {
      "name": "Apple Cinnamon Muffins",
      "className": "dish5ka",
      "recipe": {
        "label": "Apple Cinnamon Muffins",
        "url": "https://www.youtube.com/watch?v=qCMLkIr92jM&pp=ygUdQXBwbGUgQ2lubmFtb24gTXVmZmlucyByZWNpcGU%3D",
        "videoId": "qCMLkIr92jM",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "½ cup sugar",
          "1 tsp cinnamon",
          "1 tsp baking powder",
          "½ cup milk",
          "1 large apple (peeled and diced)",
          "1 large egg",
          "¼ cup vegetable oil"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a muffin tin with paper liners.",
          "In a bowl, mix flour, sugar, cinnamon, and baking powder.",
          "In another bowl, whisk egg, milk, and oil, then add to the dry ingredients and stir until combined.",
          "Fold in the diced apple.",
          "Spoon the batter into the muffin cups and bake for 20-25 minutes or until a toothpick comes out clean.",
          "Cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Lemon Poppy Seed Muffins",
      "className": "dish6ka",
      "recipe": {
        "label": "Lemon Poppy Seed Muffins",
        "url": "https://www.youtube.com/watch?v=kBJG4M0lEhY&pp=ygUfTGVtb24gUG9wcHkgU2VlZCBNdWZmaW5zIHJlY2lwZQ%3D%3D",
        "videoId": "kBJG4M0lEhY",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "1 tbsp poppy seeds",
          "1 tbsp lemon zest",
          "2 large eggs",
          "1 cup milk",
          "½ cup unsalted butter, melted",
          "1 tsp baking powder"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a muffin tin with paper liners.",
          "In a large bowl, whisk together flour, sugar, poppy seeds, lemon zest, and baking powder.",
          "In another bowl, beat the eggs, then mix in the milk and melted butter.",
          "Combine the wet ingredients with the dry ingredients until just blended.",
          "Spoon the batter into the muffin cups, filling each about 2/3 full.",
          "Bake for 18-20 minutes or until a toothpick inserted in the center comes out clean. Cool before serving."
        ]
      }
    },
    {
      "name": "Double Chocolate Muffins",
      "className": "dish7ka",
      "recipe": {
        "label": "Double Chocolate Muffins",
        "url": "https://www.youtube.com/watch?v=jG75GbL9BcA&pp=ygUeZG91YmxlY2hvY29sYXRlbXVmZmlucyAgcmVjaXBl",
        "videoId": "jG75GbL9BcA",
        "ingredients": [
          "1 ¾ cups all-purpose flour",
          "½ cup cocoa powder",
          "1 cup sugar",
          "1 cup chocolate chips",
          "2 large eggs",
          "1 cup milk",
          "½ cup vegetable oil",
          "1 tsp baking powder",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat oven to 375°F (190°C) and line a muffin tin with paper liners.",
          "In a large bowl, mix flour, cocoa powder, sugar, and baking powder.",
          "In another bowl, whisk together eggs, milk, oil, and vanilla extract.",
          "Combine the wet and dry ingredients until just mixed, then fold in chocolate chips.",
          "Spoon the batter into the muffin tin and bake for 18-20 minutes, or until a toothpick inserted in the center comes out clean.",
          "Cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Raspberry Almond Muffins",
      "className": "dish8ka",
      "recipe": {
        "label": "Raspberry Almond Muffins",
        "url": "https://www.youtube.com/watch?v=bFimdrSe7e4&pp=ygUgUmFzcGJlcnJ5IEFsbW9uZCBNdWZmaW5zICByZWNpcGU%3D",
        "videoId": "bFimdrSe7e4",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "1/2 cup unsalted butter, melted",
          "1 cup fresh raspberries",
          "1/2 cup sliced almonds",
          "2 large eggs",
          "1 tsp baking powder",
          "1/2 tsp almond extract"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners.",
          "In a bowl, mix flour, baking powder, and sugar.",
          "In another bowl, whisk together melted butter, eggs, and almond extract.",
          "Combine the wet and dry ingredients, then fold in the raspberries and sliced almonds.",
          "Divide the batter into the muffin tin and bake for 20-25 minutes, until golden brown.",
          "Let the muffins cool before serving."
        ]
      }
    },
    {
      "name": "Cranberry Orange Muffins",
      "className": "dish9ka",
      "recipe": {
        "label": "Cranberry Orange Muffins",
        "url": "https://www.youtube.com/watch?v=7EjptQUDCmg&pp=ygUgQ3JhbmJlcnJ5IE9yYW5nZSBNdWZmaW5zICByZWNpcGU%3D",
        "videoId": "7EjptQUDCmg",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "1/2 cup unsalted butter, melted",
          "1/2 cup fresh orange juice",
          "1 tbsp orange zest",
          "1 cup fresh or dried cranberries",
          "2 large eggs",
          "1 tsp baking powder"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners.",
          "In a large bowl, mix flour, sugar, baking powder, and orange zest.",
          "In another bowl, whisk together eggs, melted butter, and orange juice.",
          "Combine the wet and dry ingredients until just mixed, then fold in the cranberries.",
          "Spoon the batter into the muffin tin and bake for 18-20 minutes or until a toothpick comes out clean.",
          "Cool the muffins on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Carrot Muffins",
      "className": "dish10ka",
      "recipe": {
        "label": "Carrot Muffins",
        "url": "https://www.youtube.com/watch?v=bJ8aBcdimSw&pp=ygUVQ2Fycm90IE11ZmZpbnMgcmVjaXBl", 
        "videoId": "bJ8aBcdimSw",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "1 tsp baking powder",
          "2 cups grated carrots",
          "2 large eggs",
          "½ cup vegetable oil",
          "1 tsp cinnamon"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C) and line a muffin tin with paper liners.",
          "In a large bowl, mix flour, sugar, baking powder, and cinnamon.",
          "In another bowl, beat eggs, then add oil and grated carrots.",
          "Combine the wet and dry ingredients until just mixed.",
          "Spoon the batter into the muffin tin, filling each cup 2/3 full.",
          "Bake for 20-25 minutes, or until a toothpick inserted in the center comes out clean."
        ]
      }
    },
    {
      "name": "Strawberry Muffins",
      "className": "dish11ka",
      "recipe": {
        "label": "Strawberry Muffins",
        "url": "https://www.youtube.com/watch?v=9-r3i2TKVdQ&pp=ygUZU3RyYXdiZXJyeSBNdWZmaW5zIHJlY2lwZQ%3D%3D",
        "videoId": "9-r3i2TKVdQ",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "1 tsp baking powder",
          "½ tsp baking soda",
          "½ cup unsalted butter (melted)",
          "2 large eggs",
          "1 cup diced strawberries",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C) and line a muffin tin with paper liners.",
          "In a bowl, whisk together flour, sugar, baking powder, and baking soda.",
          "In another bowl, mix melted butter, eggs, and vanilla extract.",
          "Combine wet and dry ingredients until just mixed, then fold in the diced strawberries.",
          "Spoon batter into muffin cups and bake for 20-25 minutes, or until a toothpick comes out clean.",
          "Cool in the tin for 5 minutes, then transfer to a wire rack to cool completely."
        ]
      }
    },
    {
      "name": "Pineapple Muffins",
      "className": "dish12ka",
      "recipe": {
        "label": "Pineapple Muffins",
        "url": "https://www.youtube.com/watch?v=X6H105K3pcI&pp=ygUYUGluZWFwcGxlIE11ZmZpbnMgcmVjaXBl",  
        "videoId": "X6H105K3pcI",  
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "½ cup unsalted butter, softened",
          "1 can (8 oz) crushed pineapple, drained",
          "2 large eggs",
          "1 tsp baking powder",
          "½ tsp baking soda",
          "¼ tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a muffin tin with paper liners.",
          "In a bowl, mix flour, baking powder, baking soda, and salt.",
          "In another bowl, cream the butter and sugar until fluffy, then beat in eggs one at a time.",
          "Fold in the drained pineapple into the butter mixture, then gradually add the dry ingredients until just combined.",
          "Spoon the batter into muffin tins and bake for 20-25 minutes, or until a toothpick comes out clean.",
          "Cool in the tin for a few minutes before transferring to a wire rack to cool completely."
        ]
      }
    },
    {
      "name": "Blackberry Muffins",
      "className": "dish13ka",
      "recipe": {
        "label": "Blackberry Muffins",
        "url": "https://www.youtube.com/watch?v=y-k49-8XKZA&pp=ygUZQmxhY2tiZXJyeSBNdWZmaW5zIHJlY2lwZQ%3D%3D",
        "videoId": "y-k49-8XKZA",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "½ cup unsalted butter, melted",
          "2 large eggs",
          "1 cup milk",
          "1 tsp baking powder",
          "1 cup fresh or frozen blackberries"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners.",
          "In a large bowl, whisk together flour, sugar, and baking powder.",
          "In another bowl, mix melted butter, eggs, and milk until combined.",
          "Add the wet ingredients to the dry ingredients and stir until just combined.",
          "Gently fold in the blackberries.",
          "Divide the batter among the muffin cups and bake for 20-25 minutes, or until a toothpick inserted into the center comes out clean."
        ]
      }
    },
    {
      "name": "Apricot Muffins",
      "className": "dish14ka",
      "recipe": {
        "label": "Apricot Muffins",
        "url": "https://www.youtube.com/watch?v=s7LTfwL_DB8&pp=ygUWQXByaWNvdCBNdWZmaW5zIHJlY2lwZQ%3D%3D",
        "videoId": "s7LTfwL_DB8",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "½ cup sugar",
          "1 tsp baking powder",
          "¼ tsp salt",
          "1/3 cup vegetable oil",
          "1 large egg",
          "1 cup chopped dried apricots",
          "½ cup milk"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners.",
          "In a bowl, whisk together flour, sugar, baking powder, and salt.",
          "In another bowl, mix oil, egg, and milk until combined. Fold in the chopped apricots.",
          "Add the wet ingredients to the dry ingredients and stir until just combined.",
          "Spoon the batter into the muffin tin and bake for 20-25 minutes, or until a toothpick comes out clean.",
          "Cool in the tin for a few minutes, then transfer to a wire rack to cool completely."
        ]
      }
    },
    {
      "name": "Espresso Muffins",
      "className": "dish15ka",
      "recipe": {
        "label": "Espresso Muffins",
        "url": "https://www.youtube.com/watch?v=Y5rYYsoV4TY&pp=ygUXRXNwcmVzc28gTXVmZmlucyByZWNpcGU%3D",
        "videoId": "Y5rYYsoV4TY",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "½ cup unsalted butter, melted",
          "2 large eggs",
          "¼ cup brewed espresso (cooled)",
          "1 tsp baking powder",
          "½ tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a muffin tin with paper liners.",
          "In a bowl, mix flour, sugar, baking powder, and salt.",
          "In another bowl, whisk melted butter, eggs, and brewed espresso.",
          "Combine wet and dry ingredients until just mixed.",
          "Divide the batter evenly among the muffin cups.",
          "Bake for 20-25 minutes, or until a toothpick inserted in the center comes out clean."
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
    <div className="karnataka-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Muffins</h1>
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

export default KarnatakaDishes;
