var array= [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(array){
    var currentMax = 0;
    var max = 0;
    for( var i = 0; i < array.lenth; i += 1){
        currentMax = Math.max(0, currentMax + array[i]);
    } 
    return max;
}

