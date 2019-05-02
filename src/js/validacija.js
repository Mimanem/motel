// import $ from 'jquery';
$(document).ready(function() {

    // const regExIme = /^[A-ZČĆŽŠĐ] [a-z] {1,15}+$/;
    // const regExPrezime = /^[A-ZČĆŽŠĐ] [a-z] {1,15}+$/;
    // const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


    // $(`#btn_forma`).click((e) => {
    //     e.preventDefault();
    //     if ($(`#email`).val().trim() === ``) {
    //         $(`#validationMessage`).html(``);
    //         $(`#validationMessage`).html(`Unesite email`).show().fadeOut(5000);
    //         $(`#email`).focus();
    //     } else if (!regExEmail.test($(`#email`).val().trim())) {
    //         $(`#validationMessage`).html(``);
    //         $(`#validationMessage`).html(`Unesite validan email`).show().fadeOut(5000);
    //         $(`#email`).focus();
    //     } else if ($(`#ime`).val().trim() === ``) {
    //         $(`#validationMessage`).html(``);
    //         $(`#validationMessage`).html(`Unesite ime`).show().fadeOut(5000);
    //         $(`#ime`).focus();
    //     } else if (!regExIme.test($(`#ime`).val().trim())) {
    //         $(`#validationMessage`).html(``);
    //         $(`#validationMessage`).html(`Unesite validno ime`).show().fadeOut(5000);
    //         $(`#ime`).focus();
    //     } else if ($(`#prezime`).val().trim() === ``) {
    //         $(`#validationMessage`).html(``);
    //         $(`#validationMessage`).html(`Unesite prezime`).show().fadeOut(5000);
    //         $(`#prezime`).focus();
    //     } else if (!regExIme.test($(`#prezime`).val().trim())) {
    //         $(`#validationMessage`).html(``);
    //         $(`#validationMessage`).html(`Unesite validno prezime`).show().fadeOut(5000);
    //         $(`#ime`).focus();
    //     } else {
    //         $(`forma`)[0].reset();
    //         $(`#validationMessage`).html(``);
    //         $(`#validationMessage`).html(`<i class="fas fa-check-circle"></i> Poruka je poslata. Hvala!`).show().fadeOut(8000);
    //     }
    // });


    //     var rezevacija = function() {
    //         $('form').submit(function() {
    //             var ime = $('#ime').val();

    //             if (ime === "") {
    //                 $('.ime-error').text('Molim vas unesite vaše ime')
    //             }

    //             return false;
    //         });

    //         $('form').submit(function() {
    //             var prezime = $('#prezime').val();

    //             if (prezime === "") {
    //                 $('.prezime-error').text('Molim vas unesite vaše prezime.')
    //             }

    //             return false;
    //         });

    //         $('form').submit(function() {
    //             var email = $('#email').val();

    //             if (email === "") {
    //                 $('.email-error').text('Molim vas unesite vaš email')
    //             };

    //             return false;
    //         })
    //     }
    //     $(document).ready(rezervacija);

    $(function() {
        $("#email_error_poruka").hide();
        $("#ime_error_poruka").hide();
        $("#prezime_error_poruka").hide();

        var error_email = false;
        var error_ime = false;
        var error_prezime = false;

        $("#email").focusout(function() {
            check_email();
        });
        $("#ime").focusout(function() {
            check_ime();
        });
        $("#prezime").focusout(function() {
            check_prezime();
        });

        function check_ime() {
            var patern = /^[a-zA-Z]*$/;
            var ime = $("#ime").val()
            if (patern.test(ime) && ime !== '') {
                $("#ime_error_poruka").hide();
                $("#ime").css("border-botton", "2px solid #34F458");
            } else {
                $("#ime_error_poruka").html("treba da sadrzi samo slova");
                $("#ime_error_poruka").show();
                $("#ime").css("border-botton", "2px solid #F90A0A");
                error_ime = true;
            }
        }

        function check_prezime() {
            var patern = /^[a-zA-Z]*$/;
            var prezime = $("#prezime").val()
            if (patern.test(prezime) && prezime !== '') {
                $("#prezime_error_poruka").hide();
                $("#prezime").css("border-botton", "2px solid #34F458");
            } else {
                $("#prezime_error_poruka").html("treba da sadrzi samo slova");
                $("#prezime_error_poruka").show();
                $("#prezime").css("border-botton", "2px solid #F90A0A");
                error_prezime = true;
            }
        }

        function check_email() {
            var patern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $("#email").val()
            if (patern.test(email) && email !== '') {
                $("#email_error_poruka").hide();
                $("#email").css("border-botton", "2px solid #34F458");
            } else {
                $("#email_error_poruka").html("nevazeci email");
                $("#email_error_poruka").show();
                $("#email").css("border-botton", "2px solid #F90A0A");
                error_email = true;
            }
        }
        $("#forma").submit(function() {
            error_email = false;
            error_ime = false;
            error_prezime = false;

            check_email();
            check_ime();
            check_prezime();

            if (error_email === false && error_ime === false && error_prezime === false) {
                alert("rezervacija uspesna");
                return true;
            } else {
                alert("molimo vas popunite formu");
                return false;
            }
        })
    })
})