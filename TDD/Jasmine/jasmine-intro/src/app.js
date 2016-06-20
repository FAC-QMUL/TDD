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

function last(list){
    console.log(list);
    var argumentKeys  = Object.keys(arguments)
    var lastKey = argumentKeys[argumentKeys.length-1];
    
    
    return list[list.length -1]  || arguments[lastKey]
}

