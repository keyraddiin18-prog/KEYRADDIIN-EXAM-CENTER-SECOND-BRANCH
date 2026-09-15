/* =========================================================
   RESULT PAGE
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


    const student =
        result.fullName || "Student";


    document.getElementById(
        "resultStudent"
    ).textContent =
        student +
        " • Grade " +
        result.grade;


    document.getElementById(
        "percentage"
    ).textContent =
        result.percentage + "%";


    document.getElementById(
        "scoreText"
    ).textContent =
        result.correct +
        " / " +
        result.total;


    document.getElementById(
        "correct"
    ).textContent =
        result.correct;


    document.getElementById(
        "wrong"
    ).textContent =
        result.wrong;


    document.getElementById(
        "timeUsed"
    ).textContent =
        result.timeUsed;


    document.getElementById(
        "examCode"
    ).textContent =
        result.examCode;


    document.getElementById(
        "subject"
    ).textContent =
        result.subject;


    document.getElementById(
        "unit"
    ).textContent =
        result.unit;


    document.getElementById(
        "grade"
    ).textContent =
        "Grade " +
        result.grade;


    const statusBadge =
        document.getElementById(
            "statusBadge"
        );


    const statusIcon =
        document.getElementById(
            "statusIcon"
        );


    statusBadge.textContent =
        result.status;


    if (
        result.status === "PASS"
    ) {

        statusBadge.classList.remove(
            "fail"
        );

        statusIcon.textContent =
            "🏆";

    } else {

        statusBadge.classList.add(
            "fail"
        );

        statusIcon.textContent =
            "📘";
    }


})();