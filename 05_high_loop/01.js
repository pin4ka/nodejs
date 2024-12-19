// const arr = [1, 2, 3, 4]


// for (const rakesh of arr) {
//     console.log(rakesh)
// }

// const greetings = "Good Morning!!"
// for (const greet of greetings) {

//     console.log(greet)
// }


// const map = new Map()
// map.set('IN','India');
// map.set('USA','America');
// map.set('FR','France')
// 
// console.log(map)
// 
// for (const [key,val] of map) {
// console.log(key[0])
// console.log(key ,':-',val)
// }
// 
// 
// 

const my_obj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}

for (const key in my_obj) {
    // console.log(key)
    console.log(my_obj[key]);

}


for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}