// @ts-nocheck

/* =========================================================
   RANKING
   ========================================================= */

(function () {

    "use strict";


    const input =
        document.getElementById(
            "examCodeFilter"
        );


    const button =
        document.getElementById(
            "rankingButton"
        );


    const container =
        document.getElementById(
            "rankingContainer"
        );


    function showRanking() {

        const code =
            input.value
                .trim()
                .toUpperCase();


        if (!code) {

            container.innerHTML = `
                <div class="empty-ranking">
                    Please enter an Exam Code.
                </div>
            `;

            return;
        }


        const results =
            JSON.parse(
                localStorage.getItem(
                    "keyraddiin_results"
                ) || "[]"
            );


        const examResults =
            results.filter(
                function (item) {

                    return (
                        item.examCode
                            .toUpperCase() ===
                        code
                    );

                }
            );


        if (
            examResults.length === 0
        ) {

            container.innerHTML = `
                <div class="empty-ranking">
                    No results found for this Exam Code.
                </div>
            `;

            return;
        }


        examResults.sort(
            function (a, b) {

                if (
                    b.percentage !==
                    a.percentage
                ) {

                    return (
                        b.percentage -
                        a.percentage
                    );
                }

                return (
                    a.timeUsed.localeCompare(
                        b.timeUsed
                    )
                );

            }
        );


        const table =
            document.createElement(
                "table"
            );

        table.className =
            "ranking-table";


        table.innerHTML = `
            <thead>
                <tr>
                    <th>RANK</th>
                    <th>STUDENT</th>
                    <th>SCORE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;


        const tbody =
            table.querySelector(
                "tbody"
            );


        examResults.forEach(
            function (item, index) {

                const row =
                    document.createElement(
                        "tr"
                    );


                row.innerHTML = `
                    <td class="rank-number">
                        #${index + 1}
                    </td>

                    <td class="student-name">
                        ${escapeHtml(item.fullName)}
                    </td>

                    <td class="ranking-score">
                        ${item.percentage}%
                    </td>

                    <td>
                        ${item.status}
                    </td>
                `;


                tbody.appendChild(
                    row
                );

            }
        );


        container.innerHTML = "";

        container.appendChild(
            table
        );
    }


    function escapeHtml(text) {

        const div =
            document.createElement(
                "div"
            );

        div.textContent =
            text;

        return div.innerHTML;
    }


    button.addEventListener(
        "click",
        showRanking
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                showRanking();
            }

        }
    );


})();