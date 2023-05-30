//script.js
function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("emai_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_32rkj6x", "template_u2jovmk", params).then(function (res) {
        alert("success!" + res.status);
    })
}