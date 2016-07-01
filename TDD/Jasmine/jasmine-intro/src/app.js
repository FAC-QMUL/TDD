function add(x,y){
	var total = Number(x) + Number(y);
	total = Math.floor(total);
	return total;
}

function getAverage(array){
	var sum = array.reduce((p,c) => {
		return  p+c
	})
	return Math.floor(sum  / array.length)
}

function lastCharacter(list){

	if(arguments.length === 1 && typeof(arguments[0]) === 'number'){
		var string = arguments[0].toString()
		return  Number(string[string.length-1]);
	}
	var lastKey = arguments.length-1;
    return list[list.length -1] || arguments[lastKey]
}

function addElementToEndAndFrontOfArray(element, array){
	array.push(element)
	array.unshift(element)
	return array

}

function addAddress(obj, address){
	obj.address = address;
	return obj;
}

function getGivenPerson(name,people){
	people.filter(function(person){s
		return person.name  === name ;
	})
}


var COUNT =0;

function start(){
	COUNT++;
	return COUNT;
}