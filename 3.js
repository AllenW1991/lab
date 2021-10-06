let send_to_airport = false;
let p = new Promise(function (resolve, reject) {
    if (send_to_airport) {
        // console.log("send to airport");
        resolve("from resolve(): send to airport");
    } else {
        // console.log("cannot send to airport")
        reject("from reject(): order cancelled");
    }
});

p
    .then(function (message) {
        // console.log(`${message} - promise resolved`)
    })
    .catch(function (message) {
        // console.log(`${message} - promise rejected`)
    });

let f = fetch("https://jsonplaceholder.typicode.com/users");

f
    .then(function (user_data) {
        // console.log(user_data.json())
        return user_data.json();
    })
    .then(function (json_data) {
        console.log(json_data);
    });

/////////basic js/////////

let temprature = 30;
// console.log(temprature);

let temprature_f = temprature * 1.8 + 20;
// console.log(temprature_f);

let number_of_cats = 99;
let number_of_dogs = number_of_cats;
// console.log(number_of_dogs)

let bookcount = 100;
function add(day) {
    for (let i = 0; i < day; i++) {
        bookcount += 200;
        // console.log(bookcount)
    }
    return bookcount
}

add(3)

let x = 3;
let y = 1 + (x *= 3)
// console.log(y);

console.log("12" > "20");
console.log(0 == false);
console.log(0 === false);


let sales = [100, 50, 60, 80, 90, 120, 150]
let total = 0;
for (let i = 0; i < sales.length; i++) {
    console.log(sales[i]);
    total += 1;
}
console.log(`共有${total}個物品`)

function say_hi(username = "visitor") {
    console.log(`hi ${username} welcome to my js function`)
}
say_hi()


function cal(n1, n2) {
    console.log(`n1 + n2 = ${n1 + n2}`)
    let total = n1 + n2;
    return total
}

let s = cal(10, 5352)
console.log(s)