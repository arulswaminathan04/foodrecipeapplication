import React, { useState } from 'react';
import './GujaratDishes.css';
import Confetti from 'react-confetti';

const GujaratDishes = () => {
  const [favourites, setFavourites] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      "name": "Classic Dinner Rolls",
      "className": "dish1gj",
      "recipe": {
        "label": "Classic Dinner Rolls",
        "url": "https://www.youtube.com/watch?v=s2QF5bHzYkk&pp=ygUcQ2xhc3NpYyBEaW5uZXIgUm9sbHMgIHJlY2lwZQ%3D%3D",
        "videoId": "s2QF5bHzYkk",
        "ingredients": [
          "4 cups all-purpose flour",
          "1/4 cup sugar",
          "1/4 cup unsalted butter",
          "1 cup warm milk",
          "2 ¼ tsp active dry yeast",
          "1 tsp salt",
          "1 large egg"
        ],
        "preparation": [
          "In a bowl, dissolve yeast in warm milk and let sit for 5 minutes.",
          "Mix flour, sugar, and salt in a large bowl. Cut in butter until mixture resembles coarse crumbs.",
          "Add yeast mixture and egg to the flour mixture. Knead until smooth and elastic.",
          "Cover dough with a cloth and let rise in a warm place for about 1 hour, or until doubled in size.",
          "Punch down the dough and divide into 12-15 pieces. Shape into rolls and place on a greased baking pan.",
          "Let rise again for 30 minutes, then bake at 375°F (190°C) for 15-20 minutes or until golden brown. Cool before serving."
        ]
      }
    },
    {
      "name": "Cinnamon Swirl Buns",
      "className": "dish2gj",
      "recipe": {
        "label": "Cinnamon Swirl Buns",
        "url": "https://www.youtube.com/watch?v=UsI5U9WBMyU&pp=ygUbQ2lubmFtb24gU3dpcmwgQnVucyAgcmVjaXBl",
        "videoId": "UsI5U9WBMyU",
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "¼ cup sugar",
          "2 ¼ tsp active dry yeast",
          "½ cup milk",
          "¼ cup unsalted butter",
          "1 large egg",
          "¼ cup brown sugar",
          "1 tbsp ground cinnamon",
          "½ cup melted butter for filling",
          "Pinch of salt"
        ],
        "preparation": [
          "Warm the milk and dissolve the yeast in it. Let sit for 5 minutes.",
          "In a bowl, mix flour, sugar, and salt. Add melted butter, egg, and yeast mixture. Knead until smooth and let rise for 1 hour.",
          "Combine brown sugar, cinnamon, and melted butter to make the filling.",
          "Roll out the dough, spread the cinnamon filling, and roll up. Slice into buns.",
          "Place buns in a greased pan, let rise for another 30 minutes, then bake at 375°F (190°C) for 20-25 minutes.",
          "Cool slightly before serving."
        ]
      }
    },
    {
      "name": "Garlic Herb Pull-Apart Rolls",
      "className": "dish3gj",
      "recipe": {
        "label": "Garlic Herb Pull-Apart Rolls",
        "url": "https://www.youtube.com/watch?v=cP5rqrGMhVs&pp=ygUjR2FybGljIEhlcmIgUHVsbC1BcGFydCBSb2xscyByZWNpcGU%3D",
        "videoId": "cP5rqrGMhVs",
        "ingredients": [
          "1 can refrigerated biscuit dough",
          "4 tbsp unsalted butter, melted",
          "4 cloves garlic, minced",
          "2 tbsp fresh parsley, chopped",
          "1 tbsp fresh rosemary, chopped",
          "1 tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a bundt pan.",
          "In a bowl, mix melted butter, garlic, parsley, rosemary, and salt.",
          "Cut the biscuit dough into quarters and toss in the garlic herb mixture.",
          "Arrange the dough pieces in the prepared pan, layering them as you go.",
          "Bake for 25-30 minutes, or until golden brown and cooked through.",
          "Cool slightly, then remove from the pan and serve warm."
        ]
      }
    },
    {
      "name": "Honey Butter Buns",
      "className": "dish4gj",
      "recipe": {
        "label": "Honey Butter Buns",
        "url": "https://www.youtube.com/watch?v=SjowbyJ8Wpo&pp=ygUYSG9uZXkgQnV0dGVyIEJ1bnMgcmVjaXBl", 
        "videoId": "SjowbyJ8Wpo", 
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "¼ cup sugar",
          "1 tbsp active dry yeast",
          "½ cup unsalted butter, melted",
          "¾ cup warm milk",
          "¼ cup honey",
          "1 large egg",
          "1 tsp salt"
        ],
        "preparation": [
          "In a bowl, mix warm milk, yeast, and sugar. Let sit for 5 minutes until frothy.",
          "Add melted butter, honey, and egg to the yeast mixture. Stir to combine.",
          "In a large bowl, combine flour and salt. Gradually mix in the wet ingredients to form a dough.",
          "Knead the dough for about 5 minutes until smooth, then let it rise in a warm place for 1 hour or until doubled in size.",
          "Shape the dough into buns and place them in a greased baking dish. Let rise for another 30 minutes.",
          "Bake at 350°F (175°C) for 20-25 minutes until golden brown. Brush with additional melted butter and honey if desired."
        ]
      }
    },
    {
      "name": "Cheddar Jalapeno Rolls",
      "className": "dish5gj",
      "recipe": {
        "label": "Cheddar Jalapeno Rolls",
        "url": "https://www.youtube.com/watch?v=-wpXqGxTx4w&pp=ygUdQ2hlZGRhciBKYWxhcGVubyBSb2xscyByZWNpcGU%3D",
        "videoId": "-wpXqGxTx4w",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup shredded cheddar cheese",
          "2 jalapenos, finely chopped",
          "1/4 cup butter, melted",
          "1/4 cup sugar",
          "1 tbsp baking powder",
          "1/2 cup milk",
          "1/4 tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a baking sheet.",
          "In a bowl, mix flour, sugar, baking powder, and salt.",
          "Add shredded cheddar cheese and chopped jalapenos to the dry ingredients.",
          "Stir in melted butter and milk until just combined.",
          "Spoon the mixture onto the baking sheet and shape into rolls.",
          "Bake for 15-20 minutes or until golden brown. Cool slightly before serving."
        ]
      }
    },
    {
      name: 'Pumpkin Spice Rolls',
      className: 'dish6gj',
      recipe: {
        label: 'Pumpkin Spice Rolls',
        url: 'https://www.youtube.com/watch?v=cr87VwAq70Q&pp=ygUaUHVtcGtpbiBTcGljZSBSb2xscyByZWNpcGU%3D',  
        videoId: 'cr87VwAq70Q',  
        ingredients: [
          '2 ¼ tsp active dry yeast',
          '½ cup warm milk',
          '¼ cup sugar',
          '½ cup butter, softened',
          '1 cup canned pumpkin',
          '2 ½ cups all-purpose flour',
          '1 tsp cinnamon',
          '¼ tsp nutmeg',
          '1 egg',
          '1 tsp vanilla extract',
          'Powdered sugar (for icing)'
        ],
        preparation: [
          'Dissolve yeast in warm milk with a pinch of sugar and let sit for 5-10 minutes.',
          'In a large bowl, mix flour, remaining sugar, cinnamon, and nutmeg. Add butter, pumpkin, egg, and vanilla to the yeast mixture and combine with dry ingredients.',
          'Knead the dough on a floured surface until smooth, then let it rise in a warm place for 1 hour.',
          'Roll out the dough into a rectangle, spread with butter, and sprinkle with cinnamon sugar. Roll up and cut into slices.',
          'Place rolls in a greased baking dish and let rise for 30 minutes. Bake at 375°F (190°C) for 20-25 minutes until golden brown.',
          'Cool and drizzle with powdered sugar icing if desired.'
        ]
      }
    },
    {
      "name": "Cranberry Orange Rolls",
      "className": "dish7gj",
      "recipe": {
        "label": "Cranberry Orange Rolls",
        "url": "https://www.youtube.com/watch?v=ORVyzwyk96A&pp=ygUdQ3JhbmJlcnJ5IE9yYW5nZSBSb2xscyByZWNpcGU%3D",
        "videoId": "ORVyzwyk96A",
        "ingredients": [
          "2 ¾ cups all-purpose flour",
          "¼ cup sugar",
          "1 package active dry yeast",
          "½ cup milk",
          "¼ cup unsalted butter",
          "1 large egg",
          "1 cup cranberry sauce",
          "1 tbsp orange zest"
        ],
        "preparation": [
          "In a bowl, mix flour, sugar, and yeast. In a saucepan, heat milk and butter until warm.",
          "Add warm milk mixture and egg to the dry ingredients. Knead until smooth and let rise for 1 hour.",
          "Roll out dough, spread cranberry sauce and orange zest over it. Roll up the dough and cut into slices.",
          "Place slices in a greased baking dish and let rise for another 30 minutes.",
          "Bake at 375°F (190°C) for 20-25 minutes or until golden brown.",
          "Cool slightly before serving. Optional: drizzle with a simple glaze if desired."
        ]
      }
    },
    {
      "name": "Apple Cinnamon Roll-ups",
      "className": "dish8gj",
      "recipe": {
        "label": "Apple Cinnamon Roll-ups",
        "url": "https://www.youtube.com/watch?v=0v-1YkOiLTo&pp=ygUeQXBwbGUgQ2lubmFtb24gUm9sbC11cHMgcmVjaXBl",  
        "videoId": "0v-1YkOiLTo",  
        "ingredients": [
          "1 sheet of puff pastry",
          "1 large apple, peeled and diced",
          "¼ cup sugar",
          "1 tsp ground cinnamon",
          "2 tbsp melted butter",
          "Powdered sugar (for dusting, optional)"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper.",
          "Roll out the puff pastry on a floured surface and brush with melted butter.",
          "Mix diced apple with sugar and cinnamon, then spread evenly over the pastry.",
          "Roll the pastry into a log and slice into 1-inch pieces.",
          "Place slices on the prepared baking sheet and bake for 15-20 minutes, or until golden brown.",
          "Cool slightly, dust with powdered sugar if desired, and serve warm."
        ]
      }
    },
    {
      "name": "Orange Cardamom Buns",
      "className": "dish9gj",
      "recipe": {
        "label": "Orange Cardamom Buns",
        "url": "https://www.youtube.com/watch?v=b41OMImsnm8&pp=ygUbT3JhbmdlIENhcmRhbW9tIEJ1bnMgcmVjaXBl",
        "videoId": "b41OMImsnm8",
        "ingredients": [
          "3 cups all-purpose flour",
          "¼ cup sugar",
          "1 packet active dry yeast",
          "1 tsp ground cardamom",
          "½ cup orange juice",
          "¼ cup butter, softened",
          "1 egg"
        ],
        "preparation": [
          "In a bowl, mix flour, sugar, yeast, and cardamom. In another bowl, combine orange juice, butter, and egg.",
          "Gradually add the wet ingredients to the dry mixture and knead until a smooth dough forms.",
          "Cover the dough and let it rise in a warm place for 1-2 hours, or until doubled in size.",
          "Preheat the oven to 375°F (190°C). Punch down the dough and divide it into small balls.",
          "Place the balls on a baking sheet, and bake for 15-20 minutes or until golden brown.",
          "Cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Classic Kaiser Rolls",
      "className": "dish10gj",
      "recipe": {
        "label": "Classic Kaiser Rolls",
        "url": "https://www.youtube.com/watch?v=j10JOr_8Ocw&pp=ygUbQ2xhc3NpYyBLYWlzZXIgUm9sbHMgcmVjaXBl", 
        "videoId": "j10JOr_8Ocw",
        "ingredients": [
          "4 cups all-purpose flour",
          "1 cup warm water",
          "2 tbsp sugar",
          "1 tbsp active dry yeast",
          "2 tbsp unsalted butter",
          "1 tsp salt",
          "1 egg (for egg wash)"
        ],
        "preparation": [
          "In a bowl, mix warm water, sugar, and yeast. Let it sit for 5-10 minutes until frothy.",
          "Combine flour, salt, and butter in a large bowl. Add the yeast mixture and knead until smooth.",
          "Cover and let the dough rise in a warm place for 1 hour or until doubled in size.",
          "Punch down the dough and divide into 8-10 pieces. Shape each piece into a roll and place on a baking sheet.",
          "Cover and let rise for 30 minutes. Preheat oven to 375°F (190°C). Brush rolls with beaten egg.",
          "Bake for 15-20 minutes until golden brown. Cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Chocolate Hazelnut Brioche",
      "className": "dish11gj",
      "recipe": {
        "label": "Chocolate Hazelnut Brioche",
        "url": "https://www.youtube.com/watch?v=CZ7kVZoj2sA&pp=ygUaQ2hvY29sYXRlIEhhemVsbnV0IEJyaW9jaGU%3D",
        "videoId": "CZ7kVZoj2sA",
        "ingredients": [
          "3 cups all-purpose flour",
          "1/2 cup sugar",
          "1/2 cup unsalted butter (softened)",
          "1 cup milk",
          "1/4 cup active dry yeast",
          "1/2 cup chopped hazelnuts",
          "1/2 cup chocolate chips",
          "1 egg",
          "1/2 tsp salt"
        ],
        "preparation": [
          "In a bowl, dissolve yeast in warm milk and let it sit until frothy.",
          "Mix flour, sugar, and salt in a separate bowl. Add the yeast mixture, softened butter, and egg, then knead until smooth.",
          "Cover the dough and let it rise in a warm place for 1-2 hours, until doubled in size.",
          "Fold in chopped hazelnuts and chocolate chips, then shape the dough into a loaf and place it in a greased pan.",
          "Preheat oven to 350°F (175°C) and let the dough rise for another 30 minutes.",
          "Bake for 25-30 minutes until golden brown, then cool before serving."
        ]
      }
    },
    {
      "name": "Chili Cheese Rolls",
      "className": "dish12gj",
      "recipe": {
        "label": "Chili Cheese Rolls",
        "url": "https://www.youtube.com/watch?v=-pXdls87VkU&pp=ygUaY2hpbGkgY2hlZXNlIGJhbGxzIHJlY2lwZSA%3D",
        "videoId": "-pXdls87VkU",
        "ingredients": [
          "4 slices of bread",
          "1 cup shredded cheese",
          "2-3 green chilies, finely chopped",
          "1 tbsp butter",
          "1 tbsp all-purpose flour",
          "½ cup milk"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C).",
          "In a pan, melt butter and whisk in flour to make a roux, then gradually add milk to create a smooth sauce.",
          "Add shredded cheese and chopped chilies to the sauce, stirring until cheese is melted and combined.",
          "Trim the crusts off the bread slices, then roll them flat with a rolling pin.",
          "Spread the cheese mixture onto each bread slice, then roll them up tightly.",
          "Place the rolls on a baking sheet and bake for 10-12 minutes, or until golden and crispy."
        ]
      }
    },
    {
      "name": "Poppy Seed Dinner Rolls",
      "className": "dish13gj",
      "recipe": {
        "label": "Poppy Seed Dinner Rolls",
        "url": "https://www.youtube.com/watch?v=-EmQa2FIgSA&pp=ygUfUG9wcHkgU2VlZCBEaW5uZXIgUm9sbHMgcmVjaXBlIA%3D%3D",  
        "videoId": "-EmQa2FIgSA",             
        "ingredients": [
          "2 ¼ tsp active dry yeast",
          "½ cup warm milk",
          "¼ cup sugar",
          "¼ cup unsalted butter, melted",
          "2 large eggs",
          "3 ½ cups all-purpose flour",
          "¼ cup poppy seeds",
          "1 tsp salt"
        ],
        "preparation": [
          "Dissolve yeast in warm milk with a pinch of sugar and let sit until frothy.",
          "In a large bowl, mix melted butter, sugar, and eggs. Add yeast mixture.",
          "Gradually incorporate flour, poppy seeds, and salt until a dough forms.",
          "Knead the dough on a floured surface until smooth, then let it rise in a warm place for 1-2 hours.",
          "Divide the dough into small balls, place in a greased pan, and let rise for another 30 minutes.",
          "Bake at 375°F (190°C) for 15-20 minutes, until golden brown."
        ]
      }
    },
    {
      "name": "Spiced Raisin Buns",
      "className": "dish14gj",
      "recipe": {
        "label": "Spiced Raisin Buns",
        "url": "https://www.youtube.com/watch?v=Q-V7EvNyeXA&pp=ygUaU3BpY2VkIFJhaXNpbiBCdW5zIHJlY2lwZSA%3D",  
        "videoId": "Q-V7EvNyeXA",  
        "ingredients": [
          "3 cups all-purpose flour",
          "¼ cup sugar",
          "1 packet (2 ¼ tsp) active dry yeast",
          "1 tsp ground cinnamon",
          "½ tsp ground nutmeg",
          "½ cup milk",
          "¼ cup butter",
          "1 large egg",
          "1 cup raisins"
        ],
        "preparation": [
          "In a bowl, mix flour, sugar, yeast, cinnamon, and nutmeg.",
          "In a saucepan, heat milk and butter until butter is melted. Cool slightly, then add egg.",
          "Pour the milk mixture into the dry ingredients and knead into a dough.",
          "Fold in raisins, then cover and let rise in a warm place for 1 hour.",
          "Shape the dough into buns and place on a baking sheet. Let rise for 30 minutes.",
          "Bake at 375°F (190°C) for 15-20 minutes until golden brown."
        ]
      }
    },
    {
      "name": "Cinnamon Sugar Crumb Rolls",
      "className": "dish15gj",
      "recipe": {
        "label": "Cinnamon Sugar Crumb Rolls",
        "url": "https://www.youtube.com/watch?v=OBok4qfOzis&pp=ygUiQ2lubmFtb24gU3VnYXIgQ3J1bWIgUm9sbHMgcmVjaXBlIA%3D%3D",
        "videoId": "OBok4qfOzis",
        "ingredients": [
          "2 cups all-purpose flour",
          "½ cup sugar",
          "¼ cup unsalted butter",
          "1 tsp baking powder",
          "1 tsp ground cinnamon",
          "¾ cup milk"
        ],
        "preparation": [
          "Preheat the oven to 375°F (190°C) and grease a baking pan.",
          "Mix flour, sugar, baking powder, and cinnamon in a bowl.",
          "Cut in butter until the mixture resembles coarse crumbs.",
          "Stir in milk until just combined.",
          "Spoon the batter into the pan and bake for 20-25 minutes, or until golden brown.",
          "Cool slightly, then sprinkle with extra cinnamon sugar before serving."
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
    <div className="gujarat-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Buns And Rolls</h1>
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

export default GujaratDishes;
