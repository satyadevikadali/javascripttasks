// function flat(arr){

//     let flattenArray = [];

//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flattenArray = flattenArray.concat(flat(arr[i]))
//         }else{
//             flattenArray.push(arr[i])
//         }
//     }
//     return flattenArray

// }
//another method
/* let arr = [[1,2],[3,4,[5]]]

let red = arr.reduce((acc,ele)=>{
    
    return acc.concat(ele)
},[])
console.log(red) */

function flattenArray(ar,depth=1){
    let result = []
    ar.forEach((ele,i)=>{
        if(Array.isArray(ele) && depth>0){
            result.push(...flattenArray(ele,depth-1))
        }else{
            result.push(ele)
        }
        
    })
    return result
}

//let arr = [1,[2,3],[4,[5,6,7,[8]]]];

//console.log(flattenArray(arr))
let array = [1,[2,3],[4,5,6],[7,8]]

console.log(flattenArray(array))