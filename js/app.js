/* =========================================================
   KEYRADDIIN EXAM CENTER
   Main Application
   ========================================================= */

(function () {

    "use strict";


    /* ---------- Login Form ---------- */

    const loginForm =
        document.getElementById(
            "loginForm"
        );


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const fullName =
                    document.getElementById(
                        "fullName"
                    )
                    .value
                    .trim();


                const grade =
                    document.getElementById(
                        "grade"
                    )
                    .value
                    .trim();


                const examCode =
                    document.getElementById(
                        "examCode"
                    )
                    .value
                    .trim()
                    .toUpperCase();


                const errorBox =
                    document.getElementById(
                        "loginError"
                    );


                errorBox.classList.remove(
                    "show"
                );


                if (
                    fullName.length < 2
                ) {

                    showLoginError(
                        "Please enter your full name."
                    );

                    return;
                }


                if (!grade) {

                    showLoginError(
                        "Please select your grade."
                    );

                    return;
                }


                if (
                    !/^[A-Z0-9-]+$/.test(
                        examCode
                    )
                ) {

                    showLoginError(
                        "Please enter a valid Exam Code."
                    );

                    return;
                }


                const studentData = {

                    fullName:
                        fullName,

                    grade:
                        grade,

                    examCode:
                        examCode

                };


                localStorage.setItem(
                    "keyraddiin_student",
                    JSON.stringify(
                        studentData
                    )
                );


                window.location.href =
                    "exam.html?code=" +
                    encodeURIComponent(
                        examCode
                    );

            }
        );
    }


    function showLoginError(message) {

        const box =
            document.getElementById(
                "loginError"
            );


        if (!box) {
            return;
        }


        box.textContent =
            message;


        box.classList.add(
            "show"
        );
    }


    /* ---------- Auto Uppercase Exam Code ---------- */

    const examCodeInput =
        document.getElementById(
            "examCode"
        );


    if (examCodeInput) {

        examCodeInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.toUpperCase();

            }
        );
    }


})();