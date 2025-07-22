function counter(){
    
    let countNo =0;
    let temp =  function (){
        countNo++;
        return countNo
    }
    temp.reset= function(){
        countNo =0;
        return countNo
    }
    return temp
}
let count = counter();

console.log(count())
console.log(count())
console.log(count.reset())
console.log(count())
console.log(count())