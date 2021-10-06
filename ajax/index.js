$("#validation_form").submit(function secure(event) {
    let error_message = "";
    event.preventDefault();

    let name = $("#e-mail-name").val();
    let email_address = $("#e-mail-address").val();
    let pass1 = $("#pass1").val();
    let pass2 = $("#pass2").val();
    let message = $("#e-mail-message").val();

    function is_valid(e_mail) {
        let pattern = /^\b[A-Za-z0-9]+@[A-Za-z0-9]+\.com\b/i;
        return pattern.test(email_address);
    }

    if (name == "" || email_address == "" || pass1 == "" || pass2 == "") {
        error_message = "請輸入完整信息";

    } else if (is_valid(email_address) == false) {
        error_message = "請輸入正確格式信箱";
    } else if (pass1 != pass2) {
        error_message = "兩次密碼輸入不符";
    }

    if (error_message == "") {
        $("#error").css("color", "rgb(124, 230, 138)")
        $("#error").html("訊息已傳送");
    } else {
        $("#error").html(`${error_message}`);
    }
});