/* =========================================================
   CERTIFICATE
   ========================================================= */

(function () {

    "use strict";


    const result =
        JSON.parse(
            localStorage.getItem(
                "keyraddiin_current_result"
            ) || "null"
        );


    if (!result) {

        window.location.href =
            "index.html";

        return;
    }


    if (
        result.status !== "PASS"
    ) {

        document.getElementById(
            "certificateStatus"
        ).textContent =
            "CERTIFICATE NOT AVAILABLE";

        document.getElementById(
            "certificateStatus"
        ).style.background =
            "#fee2e2";

        document.getElementById(
            "certificateStatus"
        ).style.color =
            "#b91c1c";

        return;
    }


    document.getElementById(
        "certificateName"
    ).textContent =
        result.fullName;


    document.getElementById(
        "certificateExam"
    ).textContent =
        result.examCode;


    document.getElementById(
        "certificateScore"
    ).textContent =
        result.percentage + "%";


    const date =
        result.submittedAt
            ? new Date(
                result.submittedAt
            )
            : new Date();


    document.getElementById(
        "certificateDate"
    ).textContent =
        date.getFullYear();

})();