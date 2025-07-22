// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const source = {
  a: {
    size: 200,
  },
  b: {
    size: 400,
  },
  c: {
    a: {
      size: 600,
    },
    b: {
      a: {
        size: 700
      }
    }
  }
}

function getSum(obj){
    let res = 0;
for(let key in obj){
    if(typeof obj[key] === 'object'){
        res += getSum(obj[key])
    }else{
        res +=obj[key]
    }
}
return res;
}

console.log(getSum(source))