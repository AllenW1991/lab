function send_request() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Request rejected due to server error")
        }, 3000);
    });
}

// let promise = send_request();
// console.log(promise)  ///promise object///
// promise.then(function (user) {
//     console.log(user)
// });


async function get_user() {
    try {
        let user = await send_request();
        console.log(user);
    } catch (error) {
        console.log(`Error: ${error}`);
    }

};

get_user();



