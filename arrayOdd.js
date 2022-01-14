
    const array = ["Mansi","Anjali","Rishabh","Ashish","Mohit","Sahil"]
    const stringOdd = (string) => string.length%2 !==0
    var oddstring = array.filter(stringOdd)
    //console.log(oddstring)

    const stringLength = (string) => string.length;
    var length = oddstring.map(stringLength)
    //console.log(length)
    const lengthSum = (prev,curr) => prev+curr;
    var ans = length.reduce(lengthSum)
    console.log(ans)
   