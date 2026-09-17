// @ts-nocheck

const examData = {
    examCode: "G9-MATH-ENTRANCE-2026",
    grade: "9",
    subject: "MATHEMATICS",
    unit: "Entrance Examination – Units 1–8",
    title: "Grade 9 Mathematics Entrance Examination",
    timer: 60,
    passMark: 50,

    questions: [
        {
            question: "Let A = {x ∈ ℤ : -2 ≤ x ≤ 2} and B = {x ∈ ℕ : 2^x ≤ 3x + 1} be two sets. Then what is n(A ∪ B)? [UEE 2017]",
            options: [
                "2",
                "6",
                "5",
                "10"
            ],
            correctAnswer: "6"
        },

        {
            question: "Let A = {x | 1 ≤ x ≤ 10} and B = {x | -1 ≤ x ≤ 10} be two sets of real numbers. What is the relative complement of A with respect to B? [UEE 2017]",
            options: [
                "∅",
                "{x | -1 ≤ x ≤ 1}",
                "{x | -1 ≤ x < 1}",
                "{x | -1 ≤ x ≤ 0}"
            ],
            correctAnswer: "{x | -1 ≤ x < 1}"
        },

        {
            question: "Which one of the following is an irrational number? [UEE 2017]",
            options: [
                "√0.04",
                "1.16222...",
                "√29",
                "3.4000"
            ],
            correctAnswer: "√29"
        },

        {
            question: "Given the system of linear equations a₁x + b₁y = c₁ and a₂x + b₂y = c₂, where a₁, a₂, b₁, b₂, c₁, c₂ ∈ ℝ and a₂, b₂, c₂ ≠ 0, then which of the following is true? [UEE 2017]",
            options: [
                "If a₁/a₂ = c₁/c₂, then the system has no solution.",
                "If b₁/b₂ = c₁/c₂, then the system has unique solution.",
                "If a₁/a₂ ≠ c₁/c₂, then the system has infinitely many solutions.",
                "If a₁/a₂ ≠ b₁/b₂, then the system has one solution."
            ],
            correctAnswer: "If a₁/a₂ ≠ b₁/b₂, then the system has one solution."
        },

        {
            question: "If one of the roots of the equation 2x² - 8x + k = 0 exceeds the other by 2, then what is the value of k? [UEE 2017]",
            options: [
                "6",
                "4",
                "3",
                "1"
            ],
            correctAnswer: "6"
        },

        {
            question: "The solution set of the equation 3|2x - 4| = 6 - 2|1 - 5x| is: [UEE 2015]",
            options: [
                "{-1, 1/2}",
                "{}",
                "{-1, 1/2, 5/4}",
                "{1/2, 5/4}"
            ],
            correctAnswer: "{-1, 1/2}"
        },

        {
            question: "The solution set of the inequality (2x - 3)(x + 5) ≤ 0 is: [UEE 2015]",
            options: [
                "[-5, 3/2]",
                "(-∞, -3/2] ∪ [5, ∞)",
                "(-5, 3/2)",
                "(-∞, -5] ∪ [3/2, ∞)"
            ],
            correctAnswer: "[-5, 3/2]"
        },

        {
            question: "Which one of the following interval is the solution set of the inequality x² - 5x + 6 ≤ 0? [UEE 2014]",
            options: [
                "[0, 2]",
                "[2, 3]",
                "(-∞, 3)",
                "[-∞, 2)"
            ],
            correctAnswer: "[2, 3]"
        },

        {
            question: "If r₁ and r₂ are the roots of the equation 3x² + 9x + 6 = 0, which one of the following is true? [UEE 2014]",
            options: [
                "r₁ + r₂ = -3",
                "r₁ × r₂ = -16/3",
                "r₁² + r₂² = -5/3",
                "1/r₁ + 1/r₂ = 9/16"
            ],
            correctAnswer: "r₁ + r₂ = -3"
        },

        {
            question: "Which of the following is NOT true about regular polygons? [UEE 2017]",
            options: [
                "It can be inscribed in a circle.",
                "A circle can be inscribed in a regular polygon.",
                "The measure of each exterior angle of an n-sided regular polygon is equal to 360°/n.",
                "The measure of each interior angle of an n-sided regular polygon is equal to n(180°)/(n - 2)."
            ],
            correctAnswer: "The measure of each interior angle of an n-sided regular polygon is equal to n(180°)/(n - 2)."
        },

        {
            question: "Suppose two triangles are similar by SSS similarity theorem. If the side lengths of one triangle are 2 cm, 4 cm and 6 cm, and the shorter side of the other triangle is 9 cm long, then what are the lengths of the other two sides of the triangle? [UEE 2017]",
            options: [
                "18 and 27",
                "9 and 27",
                "18 and 21",
                "9 and 21"
            ],
            correctAnswer: "18 and 27"
        },

        {
            question: "A boy and girl are both standing in sunlight. The boy's height is 1.6 m and casts a shadow of 2 m. If the girl's height casts a shadow of 1.8 m, then what is the height of the girl? [UEE 2017]",
            options: [
                "1.54",
                "1.68",
                "1.44",
                "1.5"
            ],
            correctAnswer: "1.44"
        },

        {
            question: "A 20 m high building casts a shadow of 4 m. At the same time a 35 m tree casts a shadow of x m. What is the value of x? [UEE 2015]",
            options: [
                "15 m",
                "7 m",
                "11 m",
                "8 m"
            ],
            correctAnswer: "7 m"
        },

        {
            question: "The angle of depression of the top of a flag pole from the top of a building that is 40√3 m away from the flag pole is 30°. If the height of the pole is 10 m, what is the height of the building? [UEE 2014]",
            options: [
                "20√3 m",
                "10(4√3 + 1) m",
                "50 m",
                "40 m"
            ],
            correctAnswer: "50 m"
        },

        {
            question: "If cot θ = √8, and θ is a first quadrant angle, then what is the value of csc θ? [UEE 2009]",
            options: [
                "1/3",
                "3",
                "√8/3",
                "1/√8"
            ],
            correctAnswer: "3"
        },

        {
            question: "Which of the following is the variance of the data given as: 2, 3, 4, 5, 7? [UEE 2014]",
            options: [
                "2.46",
                "2.96",
                "3.06",
                "3.70"
            ],
            correctAnswer: "2.96"
        },

        {
            question: "Which of the following is true about the Arithmetic Mean of a given data? [UEE 2014]",
            options: [
                "It is affected by extreme values.",
                "There can be two means for a given data.",
                "It can also be used for qualitative data.",
                "It can be obtained even in the absence of some of the values in the data."
            ],
            correctAnswer: "It is affected by extreme values."
        }
    ]
};