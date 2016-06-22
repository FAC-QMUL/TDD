```javascript
// WRITE YOUR FUNCTIONS HERE
function firstTest() {
}

// REFACTOR: DO NOT USE .LENGTH
// REFACTOR: DO NOT USE FOR LOOPS
function checkArrayLength(arr) {
}

// REFACTOR: DO NOT use for/while loops
// REFACTOR: DO NOT USE forEach on this one!
function double(arr){
}

//Make arr [{name:'Robert', age:43}, {name:'Emma', age:25}, {name:'Josh', age: 29}]
//into: [{'Robert':43}, {'Emma':25}, {'Josh':29}];
function messWithArray (arr) {
}

function getTitleFromDom() {
}

// Just check that the paragraph and image tags are there
function checkTheElementsOnTheDom() {
}

//Now write tests for the following functions:

function divideByTwo(n){
  var halved = n/2;
  return halved;
}

function isPrime(n){
  // If n is less than 2 or not an integer then by definition cannot be prime.
   if (n < 2) { return false; }
   if (n != Math.round(n)) { return false; }

   // Now assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) { isPrime = false; }
   }

   // Finally return whether n is prime or not.
   return isPrime;
}



/* ------------- JASMINE ------------- */
/* ------------- TESTS ------------- */
describe("make all the functions above pass", function() {

it( 'Check that tests are working, firstTest returns true', function() {
  var actual = firstTest();
  expect(actual).toBe(true);
});

it('check how many elements in a given array', function(){
  var arr = [1, 2, 3, 4, 5];
  var actual = checkArrayLength(arr);
  var expected = 5
  it(actual).toEqual(expected);
});

it('Is the array of numbers doubled', function() {
  var arr = [1, 2, 4];
  var actual = double(arr);
  var expected = [2, 4, 8];
  it(actual).toEqual(expected);
});

it('Has the array been messed with?', function() {
  var arr = [{name:'Robert', age:43}, {name:'Emma', age:25}, {name:'Josh', age: 29}];
  var actual = messWithArray(arr);
  var expected = [{'Robert':43}, {'Emma':25}, {'Josh':29}];
  it(actual).toEqual(expected);
});

it('Is h1 title on DOM with "HELLO WORLD"', function() {
  var actual = getTitleFromDom();
  var expected = 'HELLO WORLD'
  it(actual).toEqual(expected);
});

it('Are all the elements on the DOM', function() {
  var actual = checkTheElementsOnTheDom();
  expect(actual).toBe(true);
});

it('test the function divideByTwo', function() {
});

it('test the fucntion isPrime', function() {
});


});

```
