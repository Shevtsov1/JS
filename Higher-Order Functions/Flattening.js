let arrays = [ [1, 2, 3], [4, 5], [6] ];
arrays = arrays.reduce( function(previusValue, currentValue) {return previusValue.concat(currentValue);} )
console.log(arrays);
