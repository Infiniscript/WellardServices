function sendMail() {
    let parms = {
        name : document.getElementById("fullname").value,
        email : document.getElementById("email").value,
        pnumber : document.getElementById("pnumber").value,
        services : document.getElementById("service").value,
    }

    emailjs.send("service_yvdm277","template_8a0d2n3",parms).then(alert("Email Sent!!"))
}