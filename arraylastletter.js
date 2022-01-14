
    const array = ["ala","avoid","babita","abaca","academia"]
    const lastLetter = (string) => string[0]==="a" && string[string.length-1]==="a";
    var ans = array.filter(lastLetter)
    console.log(ans)