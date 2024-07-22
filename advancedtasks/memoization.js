function memoizedValue(fn) {
    const map = new Map();
    let temp = function (...args) {       
        const key = args.join('_');
        console.log(map);
        if (map.has(key)) {            
            console.log("getting from cache");
            return map.get(key)
        }
        const result = fn(...args);
        map.set(key, result)
        return result
    }
    return temp
    // let obj = {}
    // let temp =  function(...args){
   
    // let key = args.join('_')
    // if(obj.hasOwnProperty(key)){
    //     console.log('getting from cache')
    //     return obj[key]
    // }
    // let result = fn(...args);
    // obj[key]=result
    // return result
    // }
    // return temp
}
let add = (a, b) => a + b;

let memoizeValue = memoizedValue(add);
console.log(memoizeValue(1, 2))
console.log(memoizeValue(1, 2))
console.log(memoizeValue(1, 3))
console.log(memoizeValue(3, 2))
console.log(memoizeValue(1, 2))