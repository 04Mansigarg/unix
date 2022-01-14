
    const array = [2,3,4,5,6,12,7,9]
   // const array = [2,3,4,6]
    const arrayDivisible = (x) => x%3==0;
    var num = array.filter(arrayDivisible);
    //console.log(num)
    const numCube = (x) => x*x*x;
    var cube = num.map(numCube)
    //console.log(cube)
    const cubeSum = (prev,curr) => prev+curr;
    var ans = cube.reduce(cubeSum)
    console.log(ans)
    