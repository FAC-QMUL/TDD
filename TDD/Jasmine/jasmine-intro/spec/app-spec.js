
describe("adds two numbers and returns an integer", function() {
    
  it("four and five as integers equal 9", function() {
  	var result = add(4,5);
    expect(result).toBe(9);
  });
  it("the string four and integer 5", function(){
  	var result = add('4', 5)
  	expect(result).toBe(9);
  });
  it("adds to decimal numbers", function(){
  	var result = add( 4.55, 3.015)
  	expect(result).toBe(7);
  });
});

describe(" getAverage function returns integer average of the sum of an array of numbers." , function(){

	it("returns the average value of the sum of array elements", function(){
		var array  = [2,2,2,2,2];
		var result =  getAverage(array);
		expect(result).toBe(2);
	})
	it("not only selecting middle value", function(){
		var array =[1,2,3,4,5]
		var result = getAverage(array);
		expect(result).toBe(3);
	})
	it("handles uneven averages" ,  function(){
		var array = [4,5,10,1,6]
		var result = getAverage(array);
		expect(result).toBe(5);
	})

})

describe("get the last character of anything passed to the function", function() {
      
      // var result = last([1,2,3,4,5];
      // var result = last("12345");
      // var result = last(1,'b',3,"d",5)

})

describe("everyNth returns an array of the nth characters in a given array.", function(){

// every([0,1,2,3,4])     // [0,1,2,3,4]
// every([0,1,2,3,4],1)   // [0,1,2,3,4]
// every([0,1,2,3,4],2)   // [0,2,4]
// every([0,1,2,3,4],3)   // [0,3]
// every([0,1,2,3,4],3,1) // [1,4]
})