// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = [];
  var sum = 0;
  _.each(numbers, function(number, index, collection) {
    (number % 5 === 0) ? sum++ : sum = sum;
  });
  return sum;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var oneFruit = _.filter(fruits, function(fruit) {
    return (fruit === targetFruit);
  });
  return oneFruit;

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function(fruit) {
    return (fruit[0] === letter);
  });
  return result;

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var result = _.filter(desserts, function(dessert) {
    return (dessert.type === 'cookie');
  });
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function(memo, product) {
    return memo + parseFloat((product.price).slice(1));
  }, 0);
  return sum;

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  //takes an array of objects, desserts
  //reduce this array, need to keep count of how many of each dessert.
  //var obj = {};
  var obj = _.reduce(desserts, function(memo, dessert) {
    //reduce function
    //if dessert type isn't in obj, set obj[dessert] to 1.
    //if dessert type is in obj, obj[dessert] ++
    if (memo[dessert.type] === undefined) {
      memo[dessert.type] = 1;
      return memo;
    } else {
      memo[dessert.type] = memo[dessert.type] + 1;
      return memo;
    }


  }, {});
  //returns an object consisting of dessert types and how many
  return obj;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var arr = _.reduce(movies, function(memo, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      memo.push(movie.title);
    }
    return memo;
  }, []);
  return arr;

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var movieExists = _.reduce(movies, function(memo, movie) {
    if (movie.runtime < timeLimit) {
      memo = true;
    }
    return memo;

  }, false);

  return movieExists;

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var array = _.map(fruits, function (fruit) {
    return fruit.toUpperCase();
  });
  return array;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var array = _.map(desserts, function (dessert, key) {
    //var obj = {};
    //if flour is in the ingredients,
    if (dessert.ingredients.indexOf('flour') !== -1) {
      //set glutenfree as false
      dessert.glutenFree = false;
      return dessert;
    } else {
      //else, set glutenfree as true
      dessert.glutenFree = true;
      return dessert;
    }
  });
  return array;

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  //takes groceries array of objects, coupon value discount
  var array = _.map(groceries, function (item, key) {
    //get price in cents
    var priceInCents = parseFloat(item.price.slice(1)) * 100;
    var discountedPriceInCents = priceInCents * (1 - coupon);
    var discountedPrice = '$' + (Math.round(discountedPriceInCents) / 100);
    item.salePrice = discountedPrice;
    return item;
  });
  //returns an array of objects with sale price as new key with according price
  return array;
};
