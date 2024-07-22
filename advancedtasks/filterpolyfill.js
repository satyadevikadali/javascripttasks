let arr = [1,2,3,4,5];
Array.prototype.myFilter = function(cb){
    let temp = []
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this))
        temp.push(this[i])
    }
    return temp
}
let newArray = arr.myFilter((ele,i)=>{
    return ele>3
    })
    console.log(newArray)