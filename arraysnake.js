var array = ["Mansi","Anjali","Rishabh","Ashish","Mohit","Sahil"]

const snake = (prev,curr) => prev + "_" + curr

var ans = array.reduce(snake);
console.log(ans)