// function throttle(callback, delay) {
//     let lastExecution = 0;
    
//     return function(...args) {
//       const now = Date.now();
      
//       if (now - lastExecution >= delay) {
//         callback.apply(this, args);
//         lastExecution = now;
//       }
//     };
//   }
  
//   // Function to be throttled
//   function handleScroll() {
//     console.log("Scrolled!");
//   }
  
//   // Throttle the scroll event handler to execute at most once every 200ms
//   const throttledScrollHandler = throttle(handleScroll, 3000);
  
//   // Add the throttled scroll event handler
//   window.addEventListener("scroll", throttledScrollHandler);
function throttling(callback,delay){
  let lastExecution = 0;
  return function (...args){
      let now = Date.now();
      if(now-lastExecution >= delay){
          callback();
          lastExecution = now;
      }
  }
}

function handleScroll(){
console.log("scrolled")  
}

const debounceScroll = throttling(handleScroll,3000)
window.addEventListener('scroll',debounceScroll)