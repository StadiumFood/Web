var serverIp = "localhost";
var serverPort = 5000;
var activeForm = "login-form";
var newUser, newUserPasport;

function saveNewUser() {
    newUser = {
        surName: document.getElementById("usersurname").value.trim(),
        name: document.getElementById("username_").value.trim(),
        oldName: document.getElementById("useroldname").value.trim(),
        mail: document.getElementById("email").value.trim(),
        pass: document.getElementById("password_").value.trim(),
        confirmPass: document.getElementById("confirm-password").value.trim()
    };
}

function saveNewUserPasport() {
    newUserPasport = {
        birthday: document.getElementById("birthday").value.trim(),
        sex: document.getElementById("sexmale").checked ? 'M' : 'F',
        pasportseries: document.getElementById("pasportseries").value.trim(),
        pasportnumber: document.getElementById("pasportnumber").value.trim(),
        address: document.getElementById("address").value.trim(),
        editionDate: document.getElementById("editionDate").value.trim(),
        editionPlace: document.getElementById("editionPlace").value.trim()
    };
}


$(function() {

    $('#login-form-link').click(function(e) {
        activeForm = "login-form";
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#register-form-pasport").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        // e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        if (activeForm != "register-form") {
            activeForm = "register-form";
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $("#register-form-pasport").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            // e.preventDefault();
        }
    });

});


function login() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    $.get("http://localhost:5000/type/1")
        .done(function (data) {
            if (data.code == 200 && data.data.name == "beer")
            {
                alert(data.data.name);

                window.location.href = "main.html";

                // document.getElementById("content").innerHTML = '<object type="text/html" data="main.html"></object>';
                // var request = new XMLHttpRequest();
                // request.open("GET", href, false);
                // request.send();
                //
                // return request.responseText;
            }
    });
    window.location.href = "main.html";
}

//TODO иногда переход не срабатывает
function registerContinue() {
    saveNewUser();

    console.log(
        newUser.surName+
        newUser.name+
        newUser.oldName+
        newUser.mail+
        newUser.pass+
        newUser.confirmPass);

    $("#register-form-pasport").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    // $('#login-form-link').removeClass('active');
    // $(this).addClass('active');
}

function registerBack() {
    saveNewUserPasport();
}

function logup() {
    saveNewUserPasport();

    console.log(
        newUserPasport.pasportseries+
        newUserPasport.pasportnumber+
        newUserPasport.birthday+
        newUserPasport.sex+
        newUserPasport.address+
        newUserPasport.editionDate+
        newUserPasport.editionPlace);


    $.post("http://localhost:5000/passport", {
        'series': 1,
        'number': 2,
        'birthday': newUserPasport.birthday,
        'sex': newUserPasport.sex,
        'address': newUserPasport.address,
        'editionDate': newUserPasport.editionDate,
        'editionPlace': newUserPasport.editionPlace
    })
        .done(function (data) {
            if (data.code == 200)
                alert(data.message);
        });

    $.post("http://localhost:5000/type", {
        name: "cheeps"
    })
        .done(function (data) {
            if (data.code == 200)
                alert(data.message);
        });
}

function onFSexChange() {
    if(document.getElementById("sexmale").checked)
        document.getElementById("sexmale").checked = false;
}

function onMSexChange() {
    if(document.getElementById("sexfemale").checked)
        document.getElementById("sexfemale").checked = false;
}