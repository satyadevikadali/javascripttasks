function flattenObject(obj,parentKey) {
    let newObj = {}

    for (let keys in obj) {
        if (typeof obj[keys] === 'object' && !Array.isArray(obj[keys])) {
               // newObj['user_'+keys] = flattenObject(obj[keys])
               newObj = {...newObj,...flattenObject(obj[keys],`${parentKey}${keys}`)}
        }else{
            newObj[`${parentKey}${keys}`] = obj[keys]
        }
    }
    return newObj

}

let obj = {
    name: "satya",
    age: 30,
    address: {
        city: "hyderbad",
        pin: [500038, 1234, 456],
        street: "jntu"
    }
}
console.log(flattenObject(obj,'user_'));