$("#validation_form").submit(function secure(event) {
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
        let error_message = "請輸入完整信息";
        alert(error_message);
    } else if (is_valid(email_address) == false) {
        alert("請輸入正確格式信箱");
    } else if (pass1 != pass2) {
        alert("")
    }

});