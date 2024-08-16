import React, { useState } from 'react';
import './AndhraPradeshDishes.css';
import Confetti from 'react-confetti';

const AndhraPradeshDishes = () => {
  const [favourites, setFavourites] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      "name": "Chocolate Chip Cookies",
      "className": "dish1ap",
      "recipe": {
        "label": "Chocolate Chip Cookies",
        "url": "https://www.youtube.com/watch?v=loqCY9b7aec&pp=ygUdQ2hvY29sYXRlIENoaXAgQ29va2llcyByZWNpcGU%3D",
        "videoId": "loqCY9b7aec",
        "ingredients": [
          "1 cup unsalted butter (softened)",
          "1 cup granulated sugar",
          "1 cup brown sugar",
          "2 large eggs",
          "2 ¼ cups all-purpose flour",
          "1 tsp baking soda",
          "½ tsp salt",
          "1 ½ cups chocolate chips"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C). Line a baking sheet with parchment paper.",
          "Cream together the butter, granulated sugar, and brown sugar until light and fluffy. Beat in the eggs one at a time.",
          "In a separate bowl, mix flour, baking soda, and salt. Gradually add to the butter mixture and mix until combined.",
          "Fold in the chocolate chips.",
          "Drop spoonfuls of dough onto the prepared baking sheet, spacing them about 2 inches apart.",
          "Bake for 10-12 minutes, or until the edges are golden brown. Allow to cool on the sheet for a few minutes before transferring to a wire rack to cool completely."
        ]
      }
    },
    {
      "name": "Oatmeal Raisin Cookies",
      "className": "dish2ap",
      "recipe": {
        "label": "Oatmeal Raisin Cookies",
        "url": "https://www.youtube.com/watch?v=HNB1b5mod1g&pp=ygUdT2F0bWVhbCBSYWlzaW4gQ29va2llcyByZWNpcGU%3D",
        "videoId": "HNB1b5mod1g",
        "ingredients": [
          "1 cup unsalted butter, softened",
          "1 cup brown sugar",
          "½ cup granulated sugar",
          "2 large eggs",
          "1 ½ cups all-purpose flour",
          "1 tsp baking soda",
          "1 tsp ground cinnamon",
          "2 cups old-fashioned oats",
          "1 cup raisins",
          "½ tsp salt"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C) and line baking sheets with parchment paper.",
          "Cream butter, brown sugar, and granulated sugar until light and fluffy.",
          "Beat in eggs one at a time, then mix in the vanilla extract.",
          "In a separate bowl, whisk together flour, baking soda, cinnamon, and salt. Gradually add to the wet mixture.",
          "Fold in oats and raisins until evenly distributed.",
          "Drop spoonfuls of dough onto the prepared baking sheets and bake for 10-12 minutes, or until edges are golden. Cool on wire racks before serving."
        ]
      }
    },
    {
      "name": "Peanut Butter Cookies",
      "className": "dish3ap",
      "recipe": {
        "label": "Peanut Butter Cookies",
        "url": "https://www.youtube.com/watch?v=ED7ZFDvPy4U&pp=ygUcUGVhbnV0IEJ1dHRlciBDb29raWVzIHJlY2lwZQ%3D%3D",  
        "videoId": "ED7ZFDvPy4U",  
        "ingredients": [
          "1 cup peanut butter",
          "1 cup sugar",
          "1 large egg",
          "1 tsp vanilla extract",
          "1/2 tsp baking soda",
          "Pinch of salt"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C) and line a baking sheet with parchment paper.",
          "In a bowl, mix peanut butter, sugar, egg, and vanilla extract until smooth.",
          "Stir in baking soda and salt.",
          "Scoop tablespoon-sized balls of dough onto the prepared baking sheet, and press down with a fork to create a crisscross pattern.",
          "Bake for 10-12 minutes, or until edges are lightly browned.",
          "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
        ]
      }
    },
    {
      "name": "Sugar Cookies",
      "className": "dish4ap",
      "recipe": {
        "label": "Sugar Cookies",
        "url": "https://www.youtube.com/watch?v=hvFNVAOvOXk&pp=ygUUU3VnYXIgQ29va2llcyByZWNpcGU%3D",
        "videoId": "hvFNVAOvOXk",
        "ingredients": [
          "2 ¾ cups all-purpose flour",
          "1 ½ tsp baking powder",
          "½ tsp salt",
          "1 cup unsalted butter, softened",
          "1 ½ cups sugar",
          "1 large egg",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C).",
          "In a bowl, mix flour, baking powder, and salt.",
          "In another bowl, cream the butter and sugar until light and fluffy. Beat in the egg and vanilla.",
          "Gradually add the dry ingredients to the wet mixture, blending until smooth.",
          "Roll dough into balls, place on a baking sheet, and flatten slightly. Bake for 8-10 minutes.",
          "Cool on a wire rack and enjoy your sugar cookies."
        ]
      }
    },
    {
      "name": "Gingerbread Cookies",
      "className": "dish5ap",
      "recipe": {
        "label": "Gingerbread Cookies",
        "url": "https://www.youtube.com/watch?v=brZVMqRlc5w&pp=ygUbR2luZ2VyYnJlYWQgQ29va2llcyAgcmVjaXBl",
        "videoId": "brZVMqRlc5w",
        "ingredients": [
          "3 ¼ cups all-purpose flour",
          "1 ½ tsp ground ginger",
          "1 tsp ground cinnamon",
          "½ tsp ground cloves",
          "¾ cup unsalted butter, softened",
          "¾ cup brown sugar",
          "1 large egg",
          "½ cup molasses",
          "½ tsp baking soda",
          "¼ tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line baking sheets with parchment paper.",
          "In a bowl, whisk flour, ginger, cinnamon, cloves, baking soda, and salt.",
          "In another bowl, cream butter and brown sugar until fluffy. Beat in the egg and molasses.",
          "Gradually add the dry ingredients to the wet mixture, blending until combined.",
          "Roll out the dough on a floured surface and cut into shapes. Place on the prepared baking sheets.",
          "Bake for 8-10 minutes, let cool, and decorate as desired before serving."
        ]
      }
    },
    {
      "name": "Shortbread Cookies",
      "className": "dish6ap",
      "recipe": {
        "label": "Shortbread Cookies",
        "url": "https://www.youtube.com/watch?v=5NDJ6uuVFA4&pp=ygUZU2hvcnRicmVhZCBDb29raWVzIHJlY2lwZQ%3D%3D",
        "videoId": "5NDJ6uuVFA4",
        "ingredients": [
          "1 cup unsalted butter, softened",
          "½ cup granulated sugar",
          "2 cups all-purpose flour",
          "¼ tsp salt",
          "1 tsp vanilla extract"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
          "Cream the butter and sugar together until light and fluffy.",
          "Mix in the vanilla extract, then gradually add flour and salt, mixing until combined.",
          "Roll out the dough on a floured surface to about ¼ inch thick and cut into desired shapes.",
          "Place the cookies on the prepared baking sheet and bake for 12-15 minutes, or until the edges are lightly golden.",
          "Cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Molasses Cookies",
      "className": "dish1ap",
      "recipe": {
        "label": "Molasses Cookies",
        "url": "https://www.youtube.com/watch?v=vfSoP80zAnk&pp=ygUXbW9sYXNzZXMgY29va2llcyByZWNpcGU%3D",
        "videoId": "vfSoP80zAnk",
        "ingredients": [
          "2 ¼ cups all-purpose flour",
          "1 ½ tsp baking soda",
          "1 tsp ground ginger",
          "1 tsp ground cinnamon",
          "¼ tsp ground cloves",
          "¼ tsp salt",
          "¾ cup unsalted butter",
          "1 cup brown sugar",
          "1 large egg",
          "⅓ cup molasses"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C) and line baking sheets with parchment paper.",
          "In a bowl, whisk together flour, baking soda, ginger, cinnamon, cloves, and salt.",
          "In another bowl, cream butter and brown sugar until light and fluffy. Beat in the egg and molasses.",
          "Gradually add dry ingredients to the wet mixture, mixing until combined.",
          "Shape dough into balls and roll in sugar, then place on the baking sheets.",
          "Bake for 8-10 minutes, let cool on the sheets for a few minutes, then transfer to wire racks to cool completely."
        ]
      }
    },
    {
      "name": "Sandwich Cookies",
      "className": "dish8ap",
      "recipe": {
        "label": "Sandwich Cookies",
        "url": "https://www.youtube.com/watch?v=9MncGG2cH_g&pp=ygUfU2FuZHdpY2ggQ29va2llcyBjb29raWVzIHJlY2lwZQ%3D%3D",
        "videoId": "9MncGG2cH_g",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "1 cup unsalted butter, softened",
          "1 large egg",
          "1 tsp vanilla extract",
          "Filling: Chocolate ganache or jam"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
          "Cream butter and sugar until light and fluffy, then beat in the egg and vanilla.",
          "Gradually add the flour and mix until a dough forms.",
          "Roll out the dough and cut into desired shapes. Place on the prepared baking sheet.",
          "Bake for 10-12 minutes or until edges are lightly golden. Cool completely.",
          "Spread filling on one cookie and top with another to create a sandwich."
        ]
      }
    },
    {
      "name": "Butter Cookies",
      "className": "dish9ap",
      "recipe": {
        "label": "Butter Cookies",
        "url": "https://www.youtube.com/watch?v=CMrkchcWHNo&pp=ygUVQnV0dGVyIENvb2tpZXMgcmVjaXBl", 
        "videoId": "CMrkchcWHNo", 
        "ingredients": [
          "1 cup unsalted butter, softened",
          "¾ cup sugar",
          "2 cups all-purpose flour",
          "1 tsp vanilla extract",
          "¼ tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
          "Cream the butter and sugar together until light and fluffy.",
          "Mix in the vanilla extract, then gradually add the flour and salt until a soft dough forms.",
          "Roll the dough into small balls and flatten them slightly on the baking sheet.",
          "Bake for 10-12 minutes or until the edges are lightly golden. Cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Lemon Cookies",
      "className": "dish10ap",
      "recipe": {
        "label": "Lemon Cookies",
        "url": "https://www.youtube.com/watch?v=PYT-Z2PBt_k&pp=ygUUTGVtb24gQ29va2llcyByZWNpcGU%3D",
        "videoId": "PYT-Z2PBt_k", 
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "½ cup unsalted butter, softened",
          "1 large egg",
          "1 lemon (zested and juiced)",
          "1 tsp baking powder"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
          "In a bowl, cream together butter and sugar until light and fluffy.",
          "Beat in the egg, lemon zest, and lemon juice until well combined.",
          "Mix in the flour and baking powder until a dough forms.",
          "Drop spoonfuls of dough onto the prepared baking sheet and bake for 10-12 minutes, until the edges are lightly golden.",
          "Cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Mint Chocolate Cookies",
      "className": "dish11ap",
      "recipe": {
        "label": "Mint Chocolate Cookies",
        "url": "https://www.youtube.com/watch?v=apcORVZV2uY&pp=ygUdTWludCBDaG9jb2xhdGUgQ29va2llcyByZWNpcGU%3D",
        "videoId": "apcORVZV2uY",
        "ingredients": [
          "1 ¾ cups all-purpose flour",
          "½ cup cocoa powder",
          "1 tsp baking soda",
          "¾ cup unsalted butter, softened",
          "1 cup sugar",
          "1 large egg",
          "1 tsp peppermint extract",
          "1 cup chocolate chips"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
          "Cream butter and sugar together until light and fluffy, then beat in the egg and peppermint extract.",
          "In another bowl, whisk together flour, cocoa powder, and baking soda, then gradually add to the wet mixture.",
          "Fold in the chocolate chips until evenly distributed.",
          "Scoop tablespoon-sized balls of dough onto the baking sheet, spacing them out evenly.",
          "Bake for 10-12 minutes, then cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Coconut Macaroon Cookies",
      "className": "dish12ap",
      "recipe": {
        "label": "Coconut Macaroon Cookies",
        "url": "https://www.youtube.com/watch?v=k_1BdSzBaMc&pp=ygUfQ29jb251dCBNYWNhcm9vbiBDb29raWVzIHJlY2lwZQ%3D%3D",
        "videoId": "k_1BdSzBaMc",
        "ingredients": [
          "2 ½ cups shredded coconut",
          "2/3 cup sweetened condensed milk",
          "1 tsp vanilla extract",
          "2 large egg whites",
          "¼ tsp salt"
        ],
        "preparation": [
          "Preheat the oven to 325°F (165°C) and line a baking sheet with parchment paper.",
          "In a bowl, mix shredded coconut, sweetened condensed milk, and vanilla extract until well combined.",
          "In another bowl, beat egg whites and salt until stiff peaks form.",
          "Gently fold the egg whites into the coconut mixture.",
          "Scoop spoonfuls of the mixture onto the baking sheet and bake for 20-25 minutes, until golden brown.",
          "Cool on a wire rack before serving."
        ]
      }
    },
    {
      "name": "Biscotti",
      "className": "dish13ap",
      "recipe": {
        "label": "Biscotti",
        "url": "https://www.youtube.com/watch?v=0onaOjhUIjU&pp=ygUPYmlzY290dGkgcmVjaXBl",
        "videoId": "0onaOjhUIjU",
        "ingredients": [
          "2 cups all-purpose flour",
          "1 cup sugar",
          "1 tsp baking powder",
          "2 large eggs",
          "1 tsp vanilla extract",
          "1 cup chopped almonds"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C) and line a baking sheet with parchment paper.",
          "Mix flour, sugar, and baking powder in a bowl.",
          "Beat eggs and vanilla in another bowl, then combine with dry ingredients to form a dough.",
          "Fold in chopped almonds and shape the dough into a log on the baking sheet.",
          "Bake for 25-30 minutes, then cool slightly and slice into ½-inch pieces.",
          "Bake slices again for 10-15 minutes until golden and crispy."
        ]
      }
    }, 
    {
      "name": "Almond Cookies",
      "className": "dish14ap",
      "recipe": {
        "label": "Almond Cookies",
        "url": "https://www.youtube.com/watch?v=2fzVyZvKz-o&pp=ygUUYWxtb25kY29va2llcyByZWNpcGU%3D",
        "videoId": "2fzVyZvKz-o",
        "ingredients": [
          "1 cup almond flour",
          "1/2 cup sugar",
          "1/4 cup butter, softened",
          "1 large egg",
          "1 tsp vanilla extract",
          "1/4 tsp baking powder"
        ],
        "preparation": [
          "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
          "In a bowl, cream together the butter and sugar until light and fluffy.",
          "Mix in the egg and vanilla extract until well combined.",
          "Add almond flour and baking powder, mixing until a dough forms.",
          "Shape the dough into small balls and place them on the prepared baking sheet.",
          "Bake for 10-12 minutes or until the edges are golden brown. Let cool before serving."
        ]
      }
    },
    {
      "name": "Double Chocolate Cookies",
      "className": "dish15ap",
      "recipe": {
        "label": "Double Chocolate Cookies",
        "url": "https://www.youtube.com/watch?v=y-uiS-JQle4&pp=ygUdZG91YmxlY2hvY29sYXRlY29va2llcyByZWNpcGU%3D",
        "videoId": "y-uiS-JQle4",
        "ingredients": [
          "1 ¼ cups all-purpose flour",
          "½ cup unsalted butter, softened",
          "½ cup brown sugar",
          "½ cup white sugar",
          "1 large egg",
          "½ cup cocoa powder",
          "1 tsp baking soda",
          "1 cup chocolate chips"
        ],
        "preparation": [
          "Preheat oven to 350°F (175°C). Cream together butter, brown sugar, and white sugar until fluffy.",
          "Beat in the egg, then mix in the cocoa powder until smooth.",
          "Incorporate flour and baking soda into the mixture.",
          "Fold in chocolate chips, ensuring they are evenly distributed.",
          "Drop spoonfuls of dough onto a baking sheet, spacing them evenly.",
          "Bake for 10-12 minutes, then cool on a wire rack before serving."
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
    <div className="andhrapradesh-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Cookies</h1>
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

export default AndhraPradeshDishes;