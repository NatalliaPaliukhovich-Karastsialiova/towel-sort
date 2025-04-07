
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    matrix?.forEach((element, index) => {
        if(index % 2 == 0){
            result = [...result, ...element]
        }else{
            const reversedArray = element.reverse();
            result = [...result, ...reversedArray]
        }
    });
    return result;
}
