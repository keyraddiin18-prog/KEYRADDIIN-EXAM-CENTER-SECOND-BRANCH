/* =========================================================
   PROFILE
   ========================================================= */

(function () {

    "use strict";


    const student =
        JSON.parse(
            localStorage.getItem(
                "keyraddiin_student"
            ) || "null"
        );


    const nameElement =
        document.getElementById(
            "profileName"
        );


    const gradeElement =
        document.getElementById(
            "profileGrade"
        );


    if (!student) {

        nameElement.textContent =
            "No student information";

        gradeElement.textContent =
            "-";

    } else {

        nameElement.textContent =
            student.fullName;

        gradeElement.textContent =
            "Grade " +
            student.grade;
    }


    const history =
        JSON.parse(
            localStorage.getItem(
                "keyraddiin_results"
            ) || "[]"
        );


    const historyList =
        document.getElementById(
            "historyList"
        );


    if (
        history.length === 0
    ) {

        historyList.innerHTML = `
            <div class="empty-history">
                No examination history yet.
            </div>
        `;

        return;
    }


    const studentHistory =
        student
            ? history.filter(
                function (item) {

                    return (
                        item.fullName ===
                        student.fullName &&
                        item.grade ===
                        student.grade
                    );

                }
            )
            : history;


    if (
        studentHistory.length === 0
    ) {

        historyList.innerHTML = `
            <div class="empty-history">
                No examination history yet.
            </div>
        `;

        return;
    }


    historyList.innerHTML = "";


    studentHistory
        .slice()
        .reverse()
        .forEach(
            function (item) {

                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "history-item";


                const main =
                    document.createElement(
                        "div"
                    );

                main.className =
                    "history-main";


                const title =
                    document.createElement(
                        "strong"
                    );

                title.textContent =
                    item.examCode;


                const details =
                    document.createElement(
                        "span"
                    );

                details.textContent =
                    item.subject +
                    " • " +
                    item.unit;


                main.appendChild(title);

                main.appendChild(details);


                const score =
                    document.createElement(
                        "div"
                    );

                score.className =
                    "history-score";


                const percentage =
                    document.createElement(
                        "strong"
                    );

                percentage.textContent =
                    item.percentage +
                    "%";


                const status =
                    document.createElement(
                        "span"
                    );

                status.textContent =
                    item.status;

                status.className =
                    item.status === "PASS"
                        ? "pass"
                        : "fail";


                score.appendChild(
                    percentage
                );

                score.appendChild(
                    status
                );


                row.appendChild(main);

                row.appendChild(score);


                historyList.appendChild(
                    row
                );

            }
        );


})();