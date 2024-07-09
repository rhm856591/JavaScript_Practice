function outer(bahar){
    console.log(`I am in ${bahar}`);
    function inner() {
        console.log(`I am in inner`);
    }
    // return inner
}
// outer('bahar me')
let c = outer('Bahar me')
c()


// IIFE immidiate invoke function excution

(function outer(bahar){
    console.log(`I am in ${bahar}`);
    (function inner() {
        console.log(`I am in inner`);
    })()
    // return inner
})('bahar me')