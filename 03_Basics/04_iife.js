// Immediately Invoked Function Expressions (IIFE)

(function chai () {
    //named IIFE
    console.log(`Saurav`);
})();

( (name) => {
    console.log(`Saurav connected to ${name}`);
} )("Youtube")