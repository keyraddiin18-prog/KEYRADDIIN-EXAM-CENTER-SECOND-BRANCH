// @ts-nocheck

/* =========================================================
   KEYRADDIIN EXAM CENTER
   EXAM ENGINE
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       GET EXAM CODE
       ===================================================== */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const examCodeFromUrl =
        params.get("code");


    /* =====================================================
       LOAD STUDENT
       ===================================================== */

    const studentData =
        JSON.parse(
            localStorage.getItem(
                "keyraddiin_student"
            ) || "null"
        );


    if (!studentData) {

        window.location.href =
            "login.html";

        return;
    }


    /* =====================================================
       VALIDATE EXAM CODE
       ===================================================== */

    if (!examCodeFromUrl) {

        window.location.href =
            "login.html";

        return;
    }


    const safeExamCode =
        examCodeFromUrl
            .toUpperCase()
            .trim();


    if (
        !/^[A-Z0-9-]+$/.test(
            safeExamCode
        )
    ) {

        window.location.href =
            "login.html";

        return;
    }


    /* =====================================================
       VARIABLES
       ===================================================== */

    let currentIndex = 0;

    let selectedAnswers = [];

    let timeLeft = 0;

    let timerInterval = null;

    let examStarted = false;


    /* =====================================================
       DOM ELEMENTS
       ===================================================== */

    const currentQuestion =
        document.getElementById(
            "currentQuestion"
        );

    const totalQuestions =
        document.getElementById(
            "totalQuestions"
        );

    const questionNumber =
        document.getElementById(
            "questionNumber"
        );

    const questionText =
        document.getElementById(
            "questionText"
        );

    const optionsContainer =
        document.getElementById(
            "optionsContainer"
        );

    const previousBtn =
        document.getElementById(
            "previousBtn"
        );

    const nextBtn =
        document.getElementById(
            "nextBtn"
        );

    const submitBtn =
        document.getElementById(
            "submitBtn"
        );

    const timer =
        document.getElementById(
            "timer"
        );

    const progressFill =
        document.getElementById(
            "progressFill"
        );

    const examSubject =
        document.getElementById(
            "examSubject"
        );

    const examTitle =
        document.getElementById(
            "examTitle"
        );

    const examCodeDisplay =
        document.getElementById(
            "examCodeDisplay"
        );


    /* =====================================================
       LOAD EXAM SCRIPT
       ===================================================== */

    const script =
        document.createElement(
            "script"
        );


    script.src =
        "exams/" +
        encodeURIComponent(
            safeExamCode
        ) +
        "/exam.js";


    script.onload =
        startExam;


    script.onerror =
        function () {

            showMessage(
                "Exam not found. Please check your Exam Code."
            );

        };


    document.head.appendChild(
        script
    );


    /* =====================================================
       START EXAM
       ===================================================== */

    function startExam() {

        if (
            typeof examData ===
            "undefined" ||
            !examData.questions ||
            !Array.isArray(
                examData.questions
            )
        ) {

            showMessage(
                "This exam is not configured correctly."
            );

            return;
        }


        /* ---------- Validate Exam Code ---------- */

        if (
            !examData.examCode ||
            examData.examCode
                .toUpperCase() !==
            safeExamCode
        ) {

            showMessage(
                "Invalid Exam Code."
            );

            return;
        }


        /* ---------- Start ---------- */

        examStarted = true;


        selectedAnswers =
            new Array(
                examData.questions.length
            ).fill(null);


        /* ---------- Exam Information ---------- */

        totalQuestions.textContent =
            examData.questions.length;


        examSubject.textContent =
            examData.subject +
            " • " +
            examData.unit;


        examTitle.textContent =
            examData.title;


        examCodeDisplay.textContent =
            "Exam Code: " +
            examData.examCode;


        /* ---------- Timer ---------- */

        timeLeft =
            Number(
                examData.timer
            ) * 60;


        /* ---------- Create Question Navigation ---------- */

        createQuestionNavigation();


        /* ---------- Render First Question ---------- */

        renderQuestion();


        /* ---------- Start Timer ---------- */

        updateTimer();


        timerInterval =
            setInterval(
                updateTimer,
                1000
            );
    }


    /* =====================================================
       QUESTION NAVIGATION
       ===================================================== */

    function createQuestionNavigation() {

        let navigation =
            document.getElementById(
                "questionNavigation"
            );


        /*
         * If HTML already has the navigation,
         * use it.
         */

        if (!navigation) {

            navigation =
                document.createElement(
                    "div"
                );

            navigation.id =
                "questionNavigation";


            /*
             * Insert navigation after
             * progress bar.
             */

            if (
                progressFill &&
                progressFill.parentElement
            ) {

                progressFill
                    .parentElement
                    .insertAdjacentElement(
                        "afterend",
                        navigation
                    );

            } else if (
                questionText &&
                questionText.parentElement
            ) {

                questionText
                    .parentElement
                    .insertBefore(
                        navigation,
                        questionText
                    );

            }

        }


        navigation.className =
            "question-navigation";


        navigation.innerHTML = "";


        /* ---------- Heading ---------- */

        const heading =
            document.createElement(
                "div"
            );


        heading.className =
            "question-nav-title";


        heading.textContent =
            "QUESTIONS";


        navigation.appendChild(
            heading
        );


        /* ---------- Question Buttons ---------- */

        const grid =
            document.createElement(
                "div"
            );


        grid.className =
            "question-nav-grid";


        examData.questions.forEach(
            function (_, index) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "question-nav-btn";


                button.textContent =
                    index + 1;


                button.dataset.index =
                    index;


                button.addEventListener(
                    "click",
                    function () {

                        currentIndex =
                            index;

                        renderQuestion();

                    }
                );


                grid.appendChild(
                    button
                );

            }
        );


        navigation.appendChild(
            grid
        );


        addNavigationStyles();
    }


    /* =====================================================
       UPDATE QUESTION NAVIGATION
       ===================================================== */

    function updateQuestionNavigation() {

        const navigation =
            document.getElementById(
                "questionNavigation"
            );


        if (!navigation) {
            return;
        }


        const buttons =
            navigation.querySelectorAll(
                ".question-nav-btn"
            );


        buttons.forEach(
            function (button, index) {

                button.classList.remove(
                    "current"
                );

                button.classList.remove(
                    "answered"
                );


                /* Current question */

                if (
                    index ===
                    currentIndex
                ) {

                    button.classList.add(
                        "current"
                    );
                }


                /* Answered question */

                if (
                    selectedAnswers[index] !==
                    null
                ) {

                    button.classList.add(
                        "answered"
                    );
                }

            }
        );
    }


    /* =====================================================
       RENDER QUESTION
       ===================================================== */

    function renderQuestion() {

        const question =
            examData.questions[
                currentIndex
            ];


        if (!question) {
            return;
        }


        /* ---------- Question Number ---------- */

        currentQuestion.textContent =
            currentIndex + 1;


        questionNumber.textContent =
            currentIndex + 1;


        /* ---------- Question Text ---------- */

        questionText.textContent =
            question.question;


        /* ---------- Clear Options ---------- */

        optionsContainer.innerHTML =
            "";


        /* ---------- Options ---------- */

        question.options.forEach(
            function (
                optionText,
                index
            ) {

                const option =
                    document.createElement(
                        "button"
                    );


                option.type =
                    "button";


                option.className =
                    "option";


                /* Selected */

                if (
                    selectedAnswers[
                        currentIndex
                    ] === index
                ) {

                    option.classList.add(
                        "selected"
                    );

                }


                /* ---------- Letter ---------- */

                const letter =
                    document.createElement(
                        "span"
                    );


                letter.className =
                    "option-letter";


                letter.textContent =
                    String.fromCharCode(
                        65 + index
                    );


                /* ---------- Text ---------- */

                const text =
                    document.createElement(
                        "span"
                    );


                text.className =
                    "option-text";


                text.textContent =
                    optionText;


                /* ---------- Add ---------- */

                option.appendChild(
                    letter
                );


                option.appendChild(
                    text
                );


                /* ---------- Click ---------- */

                option.addEventListener(
                    "click",
                    function () {

                        selectAnswer(
                            index
                        );

                    }
                );


                optionsContainer.appendChild(
                    option
                );

            }
        );


        /* ---------- Update UI ---------- */

        updateNavigation();

        updateProgress();

        updateQuestionNavigation();
    }


    /* =====================================================
       SELECT ANSWER
       ===================================================== */

    function selectAnswer(index) {

        selectedAnswers[
            currentIndex
        ] = index;


        renderQuestion();
    }


    /* =====================================================
       PREVIOUS / NEXT / SUBMIT
       ===================================================== */

    function updateNavigation() {

        /* ---------- Previous ---------- */

        previousBtn.disabled =
            currentIndex === 0;


        /* ---------- Last Question ---------- */

        const lastQuestion =
            currentIndex ===
            examData.questions.length - 1;


        if (lastQuestion) {

            nextBtn.style.display =
                "none";


            submitBtn.classList.add(
                "visible"
            );


        } else {

            nextBtn.style.display =
                "inline-flex";


            submitBtn.classList.remove(
                "visible"
            );

        }
    }


    /* ---------- Previous ---------- */

    previousBtn.addEventListener(
        "click",
        function () {

            if (
                currentIndex > 0
            ) {

                currentIndex--;

                renderQuestion();

            }

        }
    );


    /* ---------- Next ---------- */

    nextBtn.addEventListener(
        "click",
        function () {

            if (
                currentIndex <
                examData.questions.length - 1
            ) {

                currentIndex++;

                renderQuestion();

            }

        }
    );


    /* ---------- Submit ---------- */

    submitBtn.addEventListener(
        "click",
        function () {

            submitExam(false);

        }
    );


    /* =====================================================
       SUBMIT EXAM
       ===================================================== */

    function submitExam(
        autoSubmitted
    ) {

        if (!examStarted) {
            return;
        }


        /* ---------- Unanswered ---------- */

        const unanswered =
            selectedAnswers.filter(
                function (answer) {

                    return answer === null;

                }
            ).length;


        if (
            unanswered > 0 &&
            !autoSubmitted
        ) {

            const confirmed =
                window.confirm(
                    "You have " +
                    unanswered +
                    " unanswered question(s). Submit anyway?"
                );


            if (!confirmed) {
                return;
            }

        }


        /* ---------- Stop Timer ---------- */

        clearInterval(
            timerInterval
        );


        examStarted = false;


        /* =================================================
           CALCULATE SCORE
           ================================================= */

        let correct = 0;


        examData.questions.forEach(
            function (
                question,
                index
            ) {

                const selectedIndex =
                    selectedAnswers[index];


                if (
                    selectedIndex === null
                ) {

                    return;

                }


                /*
                 * IMPORTANT:
                 *
                 * exam.js uses:
                 *
                 * correctAnswer:
                 * "..."
                 *
                 * Therefore we compare the selected
                 * OPTION TEXT with correctAnswer.
                 */

                const selectedText =
                    question.options[
                        selectedIndex
                    ];


                const correctAnswer =
                    question.correctAnswer;


                /* ---------- Correct ---------- */

                if (
                    selectedText ===
                    correctAnswer
                ) {

                    correct++;

                }

            }
        );


        /* =================================================
           RESULT CALCULATION
           ================================================= */

        const total =
            examData.questions.length;


        const wrong =
            total - correct;


        const percentage =
            total > 0
                ? Math.round(
                    (correct / total) * 100
                )
                : 0;


        /* ---------- Time Used ---------- */

        const totalExamSeconds =
            Number(
                examData.timer
            ) * 60;


        const usedSeconds =
            Math.max(
                0,
                totalExamSeconds -
                timeLeft
            );


        /* ---------- Pass / Fail ---------- */

        const status =
            percentage >=
            Number(
                examData.passMark
            )
                ? "PASS"
                : "FAIL";


        /* =================================================
           RESULT DATA
           ================================================= */

        const resultData = {

            fullName:
                studentData.fullName,

            grade:
                studentData.grade,

            examCode:
                examData.examCode,

            subject:
                examData.subject,

            unit:
                examData.unit,

            title:
                examData.title,

            total:
                total,

            correct:
                correct,

            wrong:
                wrong,

            percentage:
                percentage,

            score:
                correct,

            passMark:
                examData.passMark,

            status:
                status,

            timeUsed:
                formatTime(
                    usedSeconds
                ),

            submittedAt:
                new Date().toISOString()

        };


        /* =================================================
           SAVE RESULT
           ================================================= */

        saveResult(
            resultData
        );


        localStorage.setItem(
            "keyraddiin_current_result",
            JSON.stringify(
                resultData
            )
        );


        /* =================================================
           GO TO RESULT PAGE
           ================================================= */

        window.location.href =
            "result.html";
    }


    /* =====================================================
       SAVE RESULT
       ===================================================== */

    function saveResult(
        resultData
    ) {

        const history =
            JSON.parse(
                localStorage.getItem(
                    "keyraddiin_results"
                ) || "[]"
            );


        history.push(
            resultData
        );


        localStorage.setItem(
            "keyraddiin_results",
            JSON.stringify(
                history
            )
        );
    }


    /* =====================================================
       TIMER
       ===================================================== */

    function updateTimer() {

        if (!examStarted) {
            return;
        }


        if (timeLeft <= 0) {

            timer.textContent =
                "00:00";


            submitExam(true);


            return;
        }


        timer.textContent =
            formatTime(
                timeLeft
            );


        const timerBox =
            document.querySelector(
                ".timer-box"
            );


        if (
            timerBox &&
            timeLeft <= 30
        ) {

            timerBox.classList.add(
                "danger"
            );


            timerBox.classList.remove(
                "warning"
            );


        } else if (
            timerBox &&
            timeLeft <= 60
        ) {

            timerBox.classList.add(
                "warning"
            );


            timerBox.classList.remove(
                "danger"
            );

        }


        timeLeft--;
    }


    /* =====================================================
       FORMAT TIME
       ===================================================== */

    function formatTime(
        seconds
    ) {

        seconds =
            Math.max(
                0,
                Number(seconds)
            );


        const minutes =
            Math.floor(
                seconds / 60
            );


        const remainingSeconds =
            seconds % 60;


        return (
            String(
                minutes
            ).padStart(
                2,
                "0"
            ) +
            ":" +
            String(
                remainingSeconds
            ).padStart(
                2,
                "0"
            )
        );
    }


    /* =====================================================
       PROGRESS BAR
       ===================================================== */

    function updateProgress() {

        const total =
            examData.questions.length;


        if (!total) {
            return;
        }


        const percent =
            (
                (currentIndex + 1) /
                total
            ) * 100;


        progressFill.style.width =
            percent + "%";
    }


    /* =====================================================
       NAVIGATION STYLES
       ===================================================== */

    function addNavigationStyles() {

        if (
            document.getElementById(
                "examNavigationStyles"
            )
        ) {

            return;

        }


        const style =
            document.createElement(
                "style"
            );


        style.id =
            "examNavigationStyles";


        style.textContent = `

            .question-navigation {
                margin: 24px 0;
                padding: 18px;
                background: #ffffff;
                border: 1px solid #dfe7f1;
                border-radius: 16px;
                box-shadow:
                    0 8px 25px rgba(15, 35, 70, 0.05);
            }


            .question-nav-title {
                margin-bottom: 14px;
                color: #14213d;
                font-size: 13px;
                font-weight: 800;
                letter-spacing: 1px;
            }


            .question-nav-grid {
                display: grid;
                grid-template-columns:
                    repeat(auto-fill, minmax(42px, 1fr));
                gap: 8px;
            }


            .question-nav-btn {
                min-height: 42px;
                border: 1px solid #d9e2ee;
                border-radius: 10px;
                background: #f4f7fb;
                color: #334155;
                font-size: 13px;
                font-weight: 800;
                cursor: pointer;
                transition:
                    transform 0.15s ease,
                    background 0.15s ease,
                    border-color 0.15s ease;
            }


            .question-nav-btn:hover {
                transform: translateY(-1px);
                border-color: #2563eb;
            }


            .question-nav-btn.answered {
                background: #dbeafe;
                border-color: #93c5fd;
                color: #1d4ed8;
            }


            .question-nav-btn.current {
                background: #1d4ed8;
                border-color: #1d4ed8;
                color: #ffffff;
                box-shadow:
                    0 4px 12px rgba(29, 78, 216, 0.25);
            }


            @media (max-width: 600px) {

                .question-navigation {
                    margin: 18px 0;
                    padding: 14px;
                }


                .question-nav-grid {
                    grid-template-columns:
                        repeat(5, 1fr);
                    gap: 7px;
                }


                .question-nav-btn {
                    min-height: 40px;
                    font-size: 12px;
                }

            }

        `;


        document.head.appendChild(
            style
        );
    }


    /* =====================================================
       MESSAGE
       ===================================================== */

    function showMessage(
        message
    ) {

        const box =
            document.getElementById(
                "examMessage"
            );


        if (!box) {

            alert(message);

            return;

        }


        box.textContent =
            message;


        box.classList.add(
            "show"
        );
    }


})();