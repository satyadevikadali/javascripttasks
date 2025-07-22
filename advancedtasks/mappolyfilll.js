let arr = [1,2,3,4,5];

Array.prototype.myMap = function(cb){
    let temp = []
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}
let newArray = arr.myMap((ele,i)=>{
return ele*2
})
console.log(newArray)