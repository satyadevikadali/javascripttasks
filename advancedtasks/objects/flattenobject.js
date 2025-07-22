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

/* {
  user_name: 'satya',
  user_age: 30,
  user_address_city: 'hyderbad',
  user_address_pin_0: 500038,
  user_address_pin_1: 1234,
  user_address_pin_2: 456,
  user_address_street: 'jntu'
}
or

{
  user_name: 'satya',
  user_age: 30,
  user_addresscity: 'hyderbad',
  user_addresspin: [ 500038, 1234, 456 ],
  user_addressstreet: 'jntu'
}


 */
