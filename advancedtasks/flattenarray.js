function flat(arr){

    let flattenArray = [];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flattenArray = flattenArray.concat(flat(arr[i]))
        }else{
            flattenArray.push(arr[i])
        }
    }
    return flattenArray

}
let array = [1,[2,3],[4,5,6],[7,8]]

console.log(flat(array))