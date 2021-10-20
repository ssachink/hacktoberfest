function removeDuplicates(arr){
    
var ans = [];
     
return arr.filter(function(i,val){
	return arr.indexOf(i) == val;
	}
);

}
