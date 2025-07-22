let arr = [1,2,3,4,5];
Array.prototype.myReduce = function(cb,initialvalue){

    let acc = initialvalue
   
    for(let i=0;i<this.length;i++){
        acc = acc?cb(acc,this[i],i,this):this[i]   }
    return acc
}
let newArray = arr.myReduce((acc,ele,i)=>{
    acc = acc+ele;
    return acc;
    },0)
    console.log(newArray)