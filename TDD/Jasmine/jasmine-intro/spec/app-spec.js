
describe("adds two numbers and returns an integer", function() {
    
  it("four and five as integers equal 9", function() {
  	var result = add(4,5);
    expect(result).toEqual(9);
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

describe("Should add a given element to the front and  end of an array", function(){

	it("add to the array", function(){
		var array =  [ 4,4,4,4]
		var result = addElementToEndAndFrontOfArray('foo',array);
		expect(result).toContain('foo');
	})
	it("adds element to the end of array", function(){
		var array =  [ 4,4,4,4]
		var result = addElementToEndAndFrontOfArray('foo',array);
		expect(result).toEqual(['foo',4,4,4,4,'foo']);
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



describe("takes an address add adds it to details object", function(){

	it("adds an address to an object with the address", function(){

		var obj = { name:'Tormod'}
		var address = "One Hyde Park Corner"
		var result = addAddress(obj, address);
		expect(result).toEqual({name:'Tormod', address:'One Hyde Park Corner'})
	})

})

describe("gets a given person (object) from an array of people (objects) ", function(){

	// it("returns a give person if in the array", function(){
	// 	var people =[ {name:'Tormod', address : 'One hyde park corner'} , { name: 'Sohil', address: 'Old kent Road'}]
	// 	var result = getGivenPerson('Tormod', people);
	// 	expect(result).toEqual({name:'Tormod', address:'One hyde park corner'});
	// })


})

describe("get the last character of anything passed to the function", function() {
      
      it("get the last character of value passed into function", function(){

      	var result   =  lastCharacter('sohil');
      	var expected =  'l';

      	expect(result).toEqual(expected);
      });

      it("get the last character from a number as well", function(){
      	var result   = lastCharacter(1066);
      	var expected =  6

      	expect(result).toEqual(expected);
      });
      it("get the last character from arguments passed into function" , function(){
      	var result   = lastCharacter(4,5,10,'hello', 9);
      	var expected = 9;
      	expect(result).toEqual(expected);
      });


})

describe("test that the button has been clicked", function(){
	var btn;
	beforeEach(function() {    		
		btn = document.getElementById('start');
  	});
	it('the button should invoke a start function', function(){
		btn.click();
		expect(COUNT).toBeGreaterThan(0); 

	})

})

/*describe("should returns an array of the nth characters in a given array.", function(){

// every([0,1,2,3,4])     // [0,1,2,3,4] nth = null
// every([0,1,2,3,4],1)   // [0,1,2,3,4] nth  = 1 ...every character
// every([0,1,2,3,4],2)   // [0,2,4]	 nth  = 2 ...every two characters
// every([0,1,2,3,4],3)   // [0,3]		 nth  = 3 ...every three characters
// every([0,1,2,3,4],3,1) // [1,4]
})*/