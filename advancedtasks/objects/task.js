const obj = [
    {
        key:'sample1',
        data:'Data1'
    },
    {
        key:'sample1',
        data:'Data1'
    },
    {
        key:'sample2',
        data:'Data2'
    },
    {
        key:'sample1',
        data:'Data1'
    },
    {
        key:'sample3',
        data:'Data1'
    },
    {
        key:'sample4',
        data:'Data1'
    },
]

let newObj ={}

obj.forEach((ele,i)=>{
 if(newObj.hasOwnProperty(ele.key)){
newObj[ele.key] = [...newObj[ele.key],ele]
}else{
newObj[ele.key]=[ele]
}

})
console.log(newObj)