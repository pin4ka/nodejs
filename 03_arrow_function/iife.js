// function one() {
//     console.log("db connet")
// }
// one()

(
    function two() {
        console.log("2")
    }
)();

(()=>{
    console.log("three")
})();

((parameter) => console.log(`hi ${parameter}`))('pinaka');