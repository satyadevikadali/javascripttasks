let obj = [
    {
        name: "satya",
        age: 33
    },
    {
        name: "asatya1",
        age: 31
    },
    {
        name: "dsatya2",
        age: 23
    }
]

let sortedobj = obj.sort((a,b)=>{
    let aval = a.name.toLowerCase();
    let bval = b.name.toLowerCase();
    if(aval > bval){
        return 1
    }
    if(aval < bval){
        return -1
    }
    return 0
})
console.log(sortedobj)