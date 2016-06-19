# 2. Introduction to Jasmine

![readme_md_ _tdd_jasmine_ __users_mypitit_desktop_qmul_tdd](https://cloud.githubusercontent.com/assets/2573931/16177130/7e2a2ef8-361c-11e6-9ec9-171483208e5e.png)

## What?

Jasmine is a `Behaviour-driven Development` (`BDD`) framework for testing JavaScript. It doesn't need the DOM and can run anywhere JavaScript can run.

One way to think of `BDD` is basically writing tests in a more descriptive, sentence like style.

## How?
To install Jasmine go to the following github repo and download the `jasmine-standalone-2.4.1.zip` file:

https://github.com/jasmine/jasmine/releases

The zip file includes the following:

+ **`SpecRunner.html` file:** This is linked to your source and spec files. Open it in your browser when running your tests.

+ **`spec` folder:** Your tests go into this folder. These are `.js` files.

+ **`src` folder:** The `js` code under test goes here.

+ **`lib`:** Already linked to in the `SpecRunner.html` file.

Before running your tests make sure you link to your src and spec files in `SpecRunner.html`:

```html
<!-- include source files here... -->
<script src="src/code.js"></script>

<!-- include spec files here... -->
<script src="spec/test.js"></script>
```

## How it works?
`Jasmine` tests are split up into `suites`:
+ `suites` describe a group of your tests
+ `suite` takes a `string` (with a description of your tests) and a `function` which defines the tests.

Here is an example of a `suite` starts with `describe`:

```javascript
describe("the function we're going to test", function() {
    // more code goes here
})
```

The function inside `describe` then includes the actual test blocks (also called `Specs`)

Specs are called using the function `it` and work similarly to `describe` (they take a `string` and a `function`)

```javascript
describe("the function we're going to test", function() {
    it("should return 'Hello FAC7!'", function() {
        // your tests go here
    });
})
```

The bottom line here is that `describe` and `it` are just *descriptive* layers to make your tests more readable!

Each spec (or `it` block) can then take a number of `Expectations` that check if your code matches the expected output

Each expectation is built using the `expect` function and a `matcher`:

```javascript
describe("the function we're going to test", function() {
    it("should return 'Hello FAC7!'", function() {
        var actual = facFunction() // a function that we hope will return 'Hello FAC7!'
        expect(actual).toEqual('Hello FAC7!');
    });
})
```

`Jasmine` has a rich set of matchers that can be used to test your functions.

## The different Matchers:

+ **toEqual**
+ **toBe:** compares with ===

```javascript
  it("and has a positive case", function() {
    expect(true).toBe(true);
  });
```
Any matcher can evaluate to *a negative assertion* by chaining the call to expect with a **not** before calling the matcher.

```javascript
  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });
```

+ `toThrow`: is for testing if a function throws an exception

+ `toBeDefined` / `toBeUndefined`

+ `toBeTruthy` / `toBeFalsy`

+ `toBeLessThan` / `toBeGreaterThan`

+ `toMatch`: is for regular expressions

+ `toContain`: is for finding an item in an Array

+ `toBeNull`: compares against null


## Further Learning
+ [Jasmine GitHub page](https://github.com/jasmine/jasmine)
+ [Jasmine Documentation](http://jasmine.github.io/)
+ [Jasmine introduction](http://jasmine.github.io/2.2/introduction.html)

## Slides
You can find the slides [here]().
