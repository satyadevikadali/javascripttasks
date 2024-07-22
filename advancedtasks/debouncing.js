// function debounce(callback, delay) {
//     let timeoutId;
    
//     return function(...args) {
//       clearTimeout(timeoutId);
      
//       timeoutId = setTimeout(() => {
//         callback.apply(this, args);
//       }, delay);
//     };
//   }
  
//   // Function to be debounced
//   function handleScroll() {
//     console.log("Scrolled!");
//   }
  
//   // Debounce the scroll event handler to execute after 200ms of inactivity
//   const debouncedScrollHandler = debounce(handleScroll, 3000);
  
//   // Add the debounced scroll event handler
//   window.addEventListener("scroll", debouncedScrollHandler);
function debounce(callback,delay){
  let timeoutid;
  return function (){
      clearTimeout(timeoutid);
      timeoutid = setTimeout(()=>{
          callback()
      },delay)
  }
}

function handleScroll(){
console.log("scrolled")  
}

const debounceScroll = debounce(handleScroll,1000)
window.addEventListener('scroll',debounceScroll)
  