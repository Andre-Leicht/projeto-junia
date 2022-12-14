const toReal = (dream) => {
    realList = dream.split(" ").filter((x) =>{
        return !isNaN((parseFloat(x)))
    })
    return realList
}
console.log(toReal("Thanks for making 2022 real"))