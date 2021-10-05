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
        console.log(`${message} - promise resolved`)
    })
    .catch(function (message) {
        console.log(`${message} - promise rejected`)
    });

let f = fetch("https://jsonplaceholder.typicode.com/users");

f
.then(function (user_data) {
    return user_data.json();

})
.then(function (json_data) {
    console.log(json_data)
});
