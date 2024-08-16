import React, { useState, useEffect } from 'react';
import './Cakes.css';
import Confetti from 'react-confetti';

const Cakes = () => {
  const [favourites, setFavourites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      name: 'Chocolate Cake',
      className: 'dish1tn',
      recipe: { 
        label: 'Chocolate Cake',
        url: 'https://www.youtube.com/watch?v=vI5w-fK25w4&pp=ygUWQ2hvY29sYXRlIENha2UgIHJlY2lwZQ%3D%3D', 
        videoId: 'vI5w-fK25w4', 
        ingredients: [
          'Flour: 1 and 3/4 cups (220g) all-purpose flour.',
          'Cocoa Powder: 3/4 cup (65g) unsweetened cocoa powder.',
          'Sugar: 2 cups (400g) granulated sugar.',
          'Eggs: 2 large eggs, at room temperature.',
          'Liquids:1 cup (240ml) whole milk,1/2 cup (120ml) vegetable oil,2 teaspoons vanilla extract,1 cup (240ml) boiling water',
          'Leavening Agents:1 and 1/2 teaspoons baking powder,1 and 1/2 teaspoons baking soda,1 teaspoon salt'
        ],
        preparation: [' Preheat Oven: Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round baking pans.',
                      ' Mix Dry Ingredients: In a large bowl, whisk together the flour, cocoa powder, sugar, baking powder, baking soda, and salt.',
                      ' Add Wet Ingredients: Add the eggs, milk, vegetable oil, and vanilla extract to the dry ingredients. Beat on medium speed until well combined.',
                      ' Add Boiling Water: Stir in the boiling water until the batter is smooth. The batter will be thin.',
                      ' Bake: Divide the batter evenly between the prepared pans. Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean..'
        ]
      }
    },
    {
      name: 'Red Velvet Cake',
      className: 'dish2tn',
      recipe: {
        label: 'Red Velvet Cake',
        url: 'https://www.youtube.com/watch?v=cMPUB3DUssA&pp=ygUXUmVkIFZlbHZldCBDYWtlICByZWNpcGU%3D',
        videoId: 'cMPUB3DUssA', 
        ingredients: [
          '2 ½ cups all-purpose flour , 1 ½ cups sugar',
          '1 cup buttermilk, 2 large eggs',
          '2 tbsp cocoa powder , 1 tsp baking soda',
          '1 tsp vanilla extract, 1 tsp vanilla extract ',
          '1 cup vegetable oil, 1-2 tbsp red food coloring',
          '½ tsp salt'
        ],
        preparation: [
          'Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.',
          'In a bowl, mix flour, cocoa, and salt. In another, beat sugar, eggs, and oil until smooth. ',
          ' Add buttermilk, vanilla, and food coloring to the wet mixture; combine with dry ingredients.',
          ' Mix baking soda and vinegar in a small bowl, then fold into the batter.',
          ' Divide the batter between the pans and bake for 25-30 minutes, until a toothpick comes out clean.'
        ]
      }
    },
    {
      name: 'Carrot Cake',
      className: 'dish3tn',
      recipe: {
        label: 'Carrot Cake',
        url: 'https://www.youtube.com/watch?v=Q9lKv1xpe28&pp=ygUVcmVjaXBlIG9mIENhcnJvdCBDYWtl',
        videoId: 'Q9lKv1xpe28', 
        ingredients: [
          '2 cups all-purpose flour, 1 ½ cups sugar',
          '1 cup vegetable oil, 4 large eggs',
          '2 cups grated carrots',
          '1 tsp baking soda',
          '1 tsp cinnamon, 1 tsp vanilla extract',
          '½ tsp salt'
        ],
        preparation: [
          'Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.',
          ' In a bowl, whisk flour, baking soda, cinnamon, and salt.',
          ' In another bowl, beat eggs, sugar, oil, and vanilla until smooth.',
          ' Gradually add the dry ingredients to the wet mixture, then fold in the grated carrots and nuts.',
          ' Pour the batter into the prepared pans and bake for 25-30 minutes, until a toothpick comes out clean.'
        ]
      }
    },
    {
      name: 'Cheesecake',
      className: 'dish4tn',
      recipe: {
        label: 'Cheesecake',
        url: 'https://www.youtube.com/watch?v=fZ13nRpZIAU&pp=ygUUcmVjaXBlIG9mIGNoZWVzZWNha2U%3D',
        videoId: 'fZ13nRpZIAU', 
        ingredients: [
          '2 cups graham cracker crumbs',
          '1 cup sugar',
          '4 packages (8 oz each) cream cheese, softened',
          '4 large eggs',
          '1 tsp vanilla extract',
          '1 cup sour cream'
        ],
        preparation: [
          'Preheat the oven to 325°F (160°C). Mix graham cracker crumbs with melted butter and press into the bottom of a springform pan.',
          ' In a large bowl, beat cream cheese and sugar until smooth, then add eggs one at a time, mixing well after each. Stir in vanilla and sour cream until combined.',
          ' Pour the mixture over the crust in the pan. Pour the mixture over the crust in the pan. Refrigerate for at least 4 hours.'
        ]
      }
    },
    {
      name: 'Lemon Drizzle Cake',
      className: 'dish5tn',
      recipe: {
        label: 'Lemon Drizzle Cake',
        url: 'https://www.youtube.com/watch?v=nxTRn6vOMMg&pp=ygUccmVjaXBlIG9mIExlbW9uIERyaXp6bGUgQ2FrZQ%3D%3D',
        videoId: 'nxTRn6vOMMg',
        ingredients: [
          '1 ½ cups all-purpose flour',
          '1 cup sugar',
          '1 tablespoon tamarind paste',
          '1 cup unsalted butter, softened',
          '3 large eggs',
          '2 lemons (zested and juiced)',
          '1 tsp baking powder'
        ],
        preparation: [
          'Preheat the oven to 350°F (175°C) and grease a loaf pan.',
          ' Cream the butter and sugar together until light and fluffy. Gradually beat in the eggs one at a time.',
          ' Fold in the flour, baking powder, and lemon zest until well combined. Pour the batter into the prepared pan and bake for 45-50 minutes, or until a toothpick comes out clean.',
          ' While the cake bakes, mix the lemon juice with a bit of sugar to make the drizzle.',
          ' Once baked, poke holes in the warm cake and pour the lemon drizzle over it. Let cool before serving.'
        ]
      }
    },
    {
      name: 'Black Forest Cake',
      className: 'dish6tn',
      recipe: {
        label: 'Black Forest Cake',
        url: 'https://www.youtube.com/watch?v=4g0WUw_dCvQ&pp=ygUbcmVjaXBlIG9mIEJsYWNrIEZvcmVzdCBDYWtl',
        videoId: '4g0WUw_dCvQ', 
        ingredients: [
          '1 ¾ cups all-purpose flour',
          '1 ½ cups sugar, ¾ cup cocoa powder',
          '1 ½ tsp baking powder',
          '3 large eggs, 1 cup buttermilk',
          '½ cup vegetable oil, 1 tsp vanilla extract',
          '2 cups heavy cream, whipped',
          '1 cup cherry pie filling',
          '½ cup grated dark chocolate'
        ],
        preparation: [
          'Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.',
          ' Mix flour, sugar, cocoa powder, baking powder, and a pinch of salt in a bowl. In another bowl, whisk eggs, buttermilk, oil, and vanilla.',
          ' Combine the wet and dry ingredients until smooth, then divide the batter between the pans.',
          ' Bake for 25-30 minutes, or until a toothpick comes out clean. Let the cakes cool completely. Bake for 25-30 minutes, or until a toothpick comes out clean. Let the cakes cool completely.',
          ' Frost the outside with whipped cream, top with more cherries, and garnish with grated chocolate.'
        ]
      }
    },
    {
      name: 'Pineapple Upside-Down Cake',
      className: 'dish7tn',
      recipe: {
        label: 'Pineapple Upside-Down Cake',
        url: 'https://www.youtube.com/watch?v=zrpqF1CAfoU&pp=ygUkcmVjaXBlIG9mIFBpbmVhcHBsZSBVcHNpZGUtRG93biBDYWtl',
        videoId: 'zrpqF1CAfoU', 
        ingredients: [
          '1 cup all-purpose flour',
          '1 cup sugar (divided)',
          '½ cup unsalted butter (divided)',
          '1 can (20 oz) pineapple slices (drained)',
          '1 cup brown sugar, 2 large eggs',
          '1 tsp baking powder'
        ],
        preparation:[
          'Preheat the oven to 350°F (175°C). Melt ¼ cup of butter in a 9-inch round cake pan, then sprinkle brown sugar evenly over it.',
          ' Arrange pineapple slices on top of the brown sugar, placing cherries in the center of each slice if desired.',
          ' In a bowl, cream the remaining butter and ¾ cup sugar until fluffy. Beat in the eggs one at a time.',
          ' Mix in the flour and baking powder until smooth, then pour the batter over the pineapple slices.',
          ' Bake for 35-40 minutes, or until a toothpick inserted in the center comes out clean.'
        ]
      }
    },
    {
      name: "Opera Cake",
      className: "dish8tn",
      recipe: 
      {
        "label": "Opera Cake",
        "url": "https://www.youtube.com/watch?v=SAtPvopYjFA&pp=ygUUcmVjaXBlIG9mIG9wZXJhIENha2U%3D",
        "videoId": "SAtPvopYjFA",
        "ingredients": 
        [
          "Almond flour",
          "Eggs",
          "Sugar",
          "Butter",
          "Coffee syrup",
          "Chocolate ganache",
          "Coffee buttercream"
        ],
        "preparation": [
          "Bake almond sponge layers by mixing almond flour, eggs, and sugar.",
          "Brush the sponge layers with coffee syrup to moisten.",
          "Prepare coffee buttercream and spread it over one sponge layer.",
          "Top with another layer, add chocolate ganache, and repeat with remaining layers.",
          "Finish with a smooth layer of chocolate glaze on top and chill.",
          "Slice and serve chilled, ensuring each layer is visible."
        ]
      }
    },
    {
      "name": "Banana Cake",
      "className": "dish9tn",
      "recipe": {
        "label": "Banana Cake",
        "url": "https://www.youtube.com/watch?v=1ETGMW0id5A&pp=ygUVcmVjaXBlIG9mIGJhbmFuYSBjYWtl",
        "videoId": "1ETGMW0id5A", 
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "½ cup unsalted butter, softened",
          "2 large eggs",
          "3 ripe bananas, mashed",
          "1 tsp baking soda",
          "½ tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and grease a 9x13-inch baking pan.",
          "Cream butter and sugar together until light and fluffy, then beat in eggs one at a time.",
          "Mix in the mashed bananas and vanilla extract until well combined.",
          "In a separate bowl, whisk flour and baking soda, then fold into the banana mixture.",
          "Pour the batter into the prepared pan and bake for 25-30 minutes or until a toothpick comes out clean.",
          "Cool before slicing and serving."
        ]
      }
    },
    {
      "name": "Coconut Cake",
      "className": "dish10tn",
      "recipe": {
        "label": "Coconut Cake",
        "url": "https://www.youtube.com/watch?v=9SVFyqbV0-g&pp=ygUTY29jb251dCBjYWtlIHJlY2lwZQ%3D%3D",
        "videoId": "9SVFyqbV0-g",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 ½ cups sugar",
          "1 cup unsalted butter, softened",
          "4 large eggs",
          "1 cup coconut milk",
          "1 ½ cups shredded coconut",
          "1 tsp baking powder",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.",
          "Cream the butter and sugar until light and fluffy, then beat in the eggs one at a time.",
          "Mix in the coconut milk and vanilla extract, then fold in the flour, baking powder, and shredded coconut.",
          "Divide the batter between the pans and bake for 25-30 minutes, or until a toothpick comes out clean.",
          "Cool the cakes, then frost with coconut cream and sprinkle with additional shredded coconut before serving."
        ]
      }
    },    
    {
      "name": "Marble Cake",
      "className": "dish11tn",
      "recipe": {
        "label": "Marble Cake",
        "url": "https://www.youtube.com/watch?v=AYwB387RKQ8&pp=ygUSbWFyYmxlIGNha2UgcmVjaXBl",
        "videoId": "AYwB387RKQ8",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "½ cup unsalted butter",
          "2 large eggs",
          "1 cup milk",
          "2 tbsp cocoa powder",
          "1 ½ tsp baking powder",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and grease a loaf pan.",
          "Cream together butter and sugar until light and fluffy. Beat in eggs one at a time.",
          "Mix in flour, baking powder, and vanilla. Gradually add milk until smooth.",
          "Divide the batter into two bowls. Stir cocoa powder into one bowl.",
          "Spoon alternate dollops of each batter into the pan and swirl with a knife to create a marble effect.",
          "Bake for 45-50 minutes, or until a toothpick comes out clean. Cool before slicing."
        ]
      }
    },
    {
      name: 'Sponge Cake',
      className: 'dish12tn',
      recipe: {
        label: 'Sponge Cake',
        url: 'https://www.youtube.com/watch?v=UTi1n-TM53c&pp=ygUSc3BvbmdlIGNha2UgcmVjaXBl',
        videoId: 'UTi1n-TM53c',  
        ingredients: [
          '1 cup all-purpose flour',
          '1 cup sugar',
          '4 large eggs',
          '½ cup unsalted butter, melted',
          '1 tsp vanilla extract',
          '1 tsp baking powder'
        ],
        preparation: [
          'Preheat the oven to 350°F (175°C) and grease an 8-inch round cake pan.',
          'Beat eggs and sugar together until light and fluffy.',
          'Add melted butter and vanilla extract, then mix well.',
          'Fold in flour and baking powder until smooth.',
          'Pour batter into the pan and bake for 25-30 minutes, or until a toothpick comes out clean.',
          'Cool in the pan for 10 minutes, then transfer to a wire rack to cool completely before serving.'
        ]
      }
    },
    {
      "name": "Funfetti Cake",
      "className": "dish13tn",
      "recipe": {
        "label": "Funfetti Cake",
        "url": "https://www.youtube.com/watch?v=wIgVD0rVRmo&pp=ygUUZnVuZmV0dGkgY2FrZSByZWNpcGU%3D",
        videoId: 'wIgVD0rVRmo',   
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "1 ½ cups sugar",
          "1 cup unsalted butter, softened",
          "4 large eggs",
          "1 cup buttermilk",
          "½ cup rainbow sprinkles",
          "1 tsp vanilla extract",
          "2 ½ tsp baking powder",
          "½ tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.",
          "Cream the butter and sugar together until light and fluffy. Beat in the eggs one at a time.",
          "Mix in vanilla extract and buttermilk. Combine the flour, baking powder, and salt, then gradually add to the wet mixture.",
          "Fold in rainbow sprinkles.",
          "Divide the batter between the prepared pans and bake for 25-30 minutes, or until a toothpick comes out clean.",
          "Cool the cakes before frosting and serving."
        ]
      }
    },
    {
      "name": "Strawberry Cake",
      "className": "dish14tn",
      "recipe": {
        "label": "Strawberry Cake",
        "url": "https://www.youtube.com/watch?v=fmD5GnrtOjc&pp=ygUWc3RyYXdiZXJyeSBjYWtlIHJlY2lwZQ%3D%3D",
        "videoId": "fmD5GnrtOjc",
        "ingredients": [
          "1 ½ cups all-purpose flour",
          "1 cup sugar",
          "1 cup fresh strawberries, pureed",
          "½ cup unsalted butter",
          "2 large eggs",
          "1 tsp baking powder",
          "¼ cup milk",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and grease a 9-inch round cake pan.",
          "Cream butter and sugar until fluffy. Beat in eggs one at a time.",
          "Mix in strawberry puree and vanilla extract.",
          "Combine flour and baking powder, then gradually add to the wet mixture, alternating with milk.",
          "Pour the batter into the prepared pan and bake for 30-35 minutes or until a toothpick comes out clean.",
          "Cool before frosting or serving."
        ]
      }
    },
    {
      "name": "Ice Cream Cake",
      "className": "dish15tn",
      "recipe": {
        "label": "Ice Cream Cake",
        "url": "https://www.youtube.com/watch?v=nzgsIqxuXmc&pp=ygUVaWNlIGNyZWFtIGNha2UgcmVjaXBl",
        "videoId": "nzgsIqxuXmc",
        "ingredients": [
          "1 package of chocolate cake mix",
          "1 quart of your favorite ice cream (softened)",
          "1 cup whipped cream",
          "1/2 cup chocolate syrup",
          "Sprinkles or other toppings (optional)"
        ],
        "preparation": [
          "Bake the chocolate cake according to package instructions and let it cool completely.",
          "Slice the cake in half horizontally and place one layer in a cake pan.",
          "Spread softened ice cream evenly over the first cake layer, then top with the second cake layer.",
          "Freeze the cake for at least 2 hours to firm up.",
          "Spread whipped cream over the top and sides of the cake.",
          "Drizzle with chocolate syrup and add sprinkles or other toppings if desired."
        ]
      }
    }
  ];

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (Array.isArray(storedFavourites)) {
      setFavourites(storedFavourites);
    } else {
      setFavourites([]);
    }
  }, []);

  const handleAddToFavourites = (dish) => {
    const isFavourite = favourites.some(fav => fav.name === dish.name);
    if (isFavourite) {
      const updatedFavourites = favourites.filter(fav => fav.name !== dish.name);
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      setIsAdding(false);
      setMessage(`${dish.name} removed from your favourites`);

    } else {
      const updatedFavourites = [...favourites, dish];
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      setIsAdding(true);
      setMessage(`${dish.name} added to your favourites`);
    }
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
    <div className="tamilnadu-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Cakes</h1>
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
                    onClick={() => handleAddToFavourites(dish)}
                  >
                    <span className="star-icon">★</span>
                    {favourites.some(fav => fav.name === dish.name) ? 'Favourited' : 'Add to Favourites'}
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

export default Cakes;