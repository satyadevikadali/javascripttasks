//Here we need to check array and object for clonign deep copy
function deepCopy(obj){
    if(obj !== null && typeof obj !== 'object') return obj;
    let newObj = Array.isArray(obj)?[]:{};
    for(let key in obj){      
            newObj[key] = deepCopy(obj[key])      
        }
    return newObj;
}
let obj = {
    name:"satya",
    age: 30,
    address:{
        city:"hyderbad",
        pin:[500038,1234,456],
        street:"jntu"
    }
}
//console.log(deepCopy(obj))
//let obj1 = Object.assign({},obj)
//let obj1 = JSON.parse(JSON.stringify(obj))
let obj1 = deepCopy(obj);
obj.name = "sunil";
obj.address.city = "HYD"
obj.address.pin = [1,2,3]
console.log(obj.name)
console.log(obj1.name)
console.log(obj.address.city)
console.log(obj1.address.city)
console.log(obj.address.pin)
console.log(obj1.address.pin)
