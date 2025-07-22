//search any value for deep nested object

function objDeepCompare(obj1, obj2) {
    // console.log(Object.keys(obj1).length)
    //console.log(Object.keys(obj2).length)

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        for (let i = 0; i < obj1.length; i++) {
            if (obj1[i] != obj2[i]) { return false; }
        }
        return true
    }

    if (typeof obj1 !== 'object' && typeof obj2 !== 'object') return;
    if (Object.keys(obj1).length != Object.keys(obj2).length) return;
    for (key in obj1) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            return objDeepCompare(obj1[key], obj2[key])
        } else if (obj1[key] != obj2[key]) {
            return false;
        }
    }
    return true;
}

let obj1 = {
    name: "satya",
    age: 30,
    address: {
        city: "hyderbad",
        pin: [500038, 1234, 456],
        street: "jntu"
    }
}

let obj2 = {
    name: "satya",
    age: 30,
    address: {
        city: "hyderbad",
        pin: [500038, 1234, 456],
        street: "jntu"
    }
}

console.log(objDeepCompare(obj1, obj2));