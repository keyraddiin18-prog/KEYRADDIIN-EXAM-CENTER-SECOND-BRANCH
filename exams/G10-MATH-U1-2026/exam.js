const examData = {

    examCode: "G10-MATH-U1-2026",

    grade: "10",

    subject: "Mathematics",

    unit: "Unit 1 – Relations and Functions",

    title: "Grade 10 Mathematics Unit 1 – Relations and Functions",

    timer: 60,

    passMark: 50,

    questions: [

        {
            question: "Which of the following best defines a relation?",
            options: [
                "A rule involving only one number",
                "A set of ordered pairs",
                "A set containing only variables",
                "An equation with no solution"
            ],
            correctAnswer: "A set of ordered pairs"
        },

        {
            question: "An ordered pair is generally written in the form:",
            options: [
                "(x + y)",
                "[x, y]",
                "(x, y)",
                "x/y"
            ],
            correctAnswer: "(x, y)"
        },

        {
            question: "What is the domain of the relation R = {(1, 3), (2, 5), (4, 7), (6, 9)}?",
            options: [
                "{3, 5, 7, 9}",
                "{1, 2, 4, 6}",
                "{1, 3, 5, 7}",
                "{2, 4, 6, 8}"
            ],
            correctAnswer: "{1, 2, 4, 6}"
        },

        {
            question: "What is the range of the relation R = {(1, 3), (2, 5), (4, 7), (6, 9)}?",
            options: [
                "{1, 2, 4, 6}",
                "{3, 5, 7, 9}",
                "{1, 3, 5, 7}",
                "{2, 4, 6, 8}"
            ],
            correctAnswer: "{3, 5, 7, 9}"
        },

        {
            question: "Which of the following relations is a function?",
            options: [
                "{(1,2), (1,3), (2,4)}",
                "{(1,2), (2,3), (3,4)}",
                "{(2,1), (2,4), (3,5)}",
                "{(1,3), (1,5), (2,6)}"
            ],
            correctAnswer: "{(1,2), (2,3), (3,4)}"
        },

        {
            question: "Which statement is true about a function?",
            options: [
                "Each input has exactly one output",
                "Each output must have exactly one input",
                "Each input must have two outputs",
                "Inputs and outputs must always be equal"
            ],
            correctAnswer: "Each input has exactly one output"
        },

        {
            question: "Which of the following is NOT a function?",
            options: [
                "{(1,4), (2,5), (3,6)}",
                "{(2,4), (3,4), (4,4)}",
                "{(1,2), (2,3), (3,4)}",
                "{(1,2), (1,5), (2,6)}"
            ],
            correctAnswer: "{(1,2), (1,5), (2,6)}"
        },

        {
            question: "If f(x) = 2x + 3, what is f(4)?",
            options: [
                "8",
                "10",
                "11",
                "12"
            ],
            correctAnswer: "11"
        },

        {
            question: "If f(x) = 3x - 2, what is f(5)?",
            options: [
                "10",
                "12",
                "13",
                "15"
            ],
            correctAnswer: "13"
        },

        {
            question: "If f(x) = x² + 1, what is f(3)?",
            options: [
                "7",
                "9",
                "10",
                "12"
            ],
            correctAnswer: "10"
        },

        {
            question: "Which of the following is a linear function?",
            options: [
                "f(x) = x² + 2",
                "f(x) = 3x - 5",
                "f(x) = x³",
                "f(x) = 4/x"
            ],
            correctAnswer: "f(x) = 3x - 5"
        },

        {
            question: "Which of the following is a quadratic function?",
            options: [
                "f(x) = 2x + 1",
                "f(x) = 5",
                "f(x) = x² - 4x + 3",
                "f(x) = 1/x"
            ],
            correctAnswer: "f(x) = x² - 4x + 3"
        },

        {
            question: "Which of the following is a constant function?",
            options: [
                "f(x) = 2x + 4",
                "f(x) = x²",
                "f(x) = 7",
                "f(x) = x - 7"
            ],
            correctAnswer: "f(x) = 7"
        },

        {
            question: "The graph of a linear function is generally a:",
            options: [
                "Parabola",
                "Circle",
                "Straight line",
                "Curve with a vertex"
            ],
            correctAnswer: "Straight line"
        },

        {
            question: "The graph of a quadratic function is called a:",
            options: [
                "Line",
                "Parabola",
                "Circle",
                "Hyperbola"
            ],
            correctAnswer: "Parabola"
        },

        {
            question: "What is the degree of the polynomial f(x) = 5x² - 3x + 7?",
            options: [
                "1",
                "2",
                "3",
                "5"
            ],
            correctAnswer: "2"
        },

        {
            question: "What is the leading coefficient of f(x) = 4x² - 7x + 2?",
            options: [
                "2",
                "-7",
                "4",
                "7"
            ],
            correctAnswer: "4"
        },

        {
            question: "What is the slope of the line y = 4x + 3?",
            options: [
                "3",
                "4",
                "-3",
                "-4"
            ],
            correctAnswer: "4"
        },

        {
            question: "What is the y-intercept of y = 3x - 5?",
            options: [
                "3",
                "5",
                "-3",
                "-5"
            ],
            correctAnswer: "-5"
        },

        {
            question: "What is the x-intercept of y = 2x - 6?",
            options: [
                "2",
                "3",
                "-3",
                "6"
            ],
            correctAnswer: "3"
        },

        {
            question: "The point where a graph crosses the y-axis is called the:",
            options: [
                "x-intercept",
                "y-intercept",
                "vertex",
                "turning point"
            ],
            correctAnswer: "y-intercept"
        },

        {
            question: "The point where a graph crosses the x-axis is called the:",
            options: [
                "y-intercept",
                "vertex",
                "x-intercept",
                "axis of symmetry"
            ],
            correctAnswer: "x-intercept"
        },

        {
            question: "What is the slope of a horizontal line?",
            options: [
                "0",
                "1",
                "-1",
                "Undefined"
            ],
            correctAnswer: "0"
        },

        {
            question: "What is the slope of a vertical line?",
            options: [
                "0",
                "1",
                "-1",
                "Undefined"
            ],
            correctAnswer: "Undefined"
        },

        {
            question: "Find the slope of the line passing through (1, 2) and (3, 6).",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            correctAnswer: "2"
        },

        {
            question: "Find the slope of the line passing through (2, 5) and (4, 9).",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            correctAnswer: "2"
        },

        {
            question: "Which equation represents a line with slope 5 and y-intercept 2?",
            options: [
                "y = 2x + 5",
                "y = 5x + 2",
                "y = 5x - 2",
                "y = 2x - 5"
            ],
            correctAnswer: "y = 5x + 2"
        },

        {
            question: "What is the vertex of the parabola y = (x - 2)² + 3?",
            options: [
                "(2, 3)",
                "(-2, 3)",
                "(2, -3)",
                "(-2, -3)"
            ],
            correctAnswer: "(2, 3)"
        },

        {
            question: "The axis of symmetry of y = (x - 4)² + 1 is:",
            options: [
                "x = -4",
                "x = 1",
                "x = 4",
                "y = 4"
            ],
            correctAnswer: "x = 4"
        },

        {
            question: "For the quadratic function f(x) = x², the vertex is:",
            options: [
                "(0, 0)",
                "(1, 0)",
                "(0, 1)",
                "(-1, 0)"
            ],
            correctAnswer: "(0, 0)"
        },

        {
            question: "If the leading coefficient of a quadratic function is positive, its parabola opens:",
            options: [
                "Downward",
                "Upward",
                "To the left",
                "To the right"
            ],
            correctAnswer: "Upward"
        },

        {
            question: "If the leading coefficient of a quadratic function is negative, its parabola opens:",
            options: [
                "Upward",
                "Downward",
                "To the left",
                "To the right"
            ],
            correctAnswer: "Downward"
        },

        {
            question: "Which of the following has a parabola that opens downward?",
            options: [
                "y = x² + 2",
                "y = 2x² - 1",
                "y = -x² + 4",
                "y = 3x²"
            ],
            correctAnswer: "y = -x² + 4"
        },

        {
            question: "What is the y-intercept of f(x) = x² - 4x + 7?",
            options: [
                "-4",
                "4",
                "7",
                "-7"
            ],
            correctAnswer: "7"
        },

        {
            question: "What is the x-intercept of the line y = x - 8?",
            options: [
                "0",
                "4",
                "8",
                "-8"
            ],
            correctAnswer: "8"
        },

        {
            question: "Which of the following is the standard form of a linear function?",
            options: [
                "f(x) = ax² + bx + c",
                "f(x) = mx + b",
                "f(x) = a/x",
                "f(x) = x³"
            ],
            correctAnswer: "f(x) = mx + b"
        },

        {
            question: "Which expression represents a quadratic function in standard form?",
            options: [
                "ax + b",
                "ax² + bx + c, where a ≠ 0",
                "a/x + b",
                "mx"
            ],
            correctAnswer: "ax² + bx + c, where a ≠ 0"
        },

        {
            question: "If f(x) = x + 2 and g(x) = 3x, what is (f + g)(x)?",
            options: [
                "4x + 2",
                "3x + 2",
                "x + 6",
                "4x"
            ],
            correctAnswer: "4x + 2"
        },

        {
            question: "If f(x) = 2x and g(x) = x + 3, what is (f + g)(x)?",
            options: [
                "3x + 3",
                "2x + 3",
                "3x",
                "2x + 6"
            ],
            correctAnswer: "3x + 3"
        },

        {
            question: "If f(x) = x + 1 and g(x) = 2x, what is (f ∘ g)(x)?",
            options: [
                "2x + 1",
                "2x + 2",
                "x + 2",
                "3x + 1"
            ],
            correctAnswer: "2x + 1"
        },

        {
            question: "If f(x) = 2x + 1 and g(x) = x - 3, what is f(g(x))?",
            options: [
                "2x - 5",
                "2x + 4",
                "x - 2",
                "2x - 3"
            ],
            correctAnswer: "2x - 5"
        },

        {
            question: "Which test can be used to determine whether a graph represents a function?",
            options: [
                "Horizontal line test",
                "Vertical line test",
                "Slope test",
                "Intercept test"
            ],
            correctAnswer: "Vertical line test"
        },

        {
            question: "According to the vertical line test, a graph represents a function if:",
            options: [
                "Every vertical line intersects the graph at most once",
                "Every horizontal line intersects the graph once",
                "The graph has a positive slope",
                "The graph crosses the origin"
            ],
            correctAnswer: "Every vertical line intersects the graph at most once"
        },

        {
            question: "Which of the following graphs cannot represent a function of x?",
            options: [
                "A straight line",
                "An upward-opening parabola",
                "A circle",
                "A horizontal line"
            ],
            correctAnswer: "A circle"
        },

        {
            question: "If f(x) = 5, what is f(100)?",
            options: [
                "0",
                "5",
                "100",
                "500"
            ],
            correctAnswer: "5"
        },

        {
            question: "If f(x) = -2x + 7, what is f(0)?",
            options: [
                "-2",
                "0",
                "5",
                "7"
            ],
            correctAnswer: "7"
        },

        {
            question: "Which ordered pair lies on the graph of y = 2x + 1?",
            options: [
                "(1, 1)",
                "(1, 2)",
                "(2, 5)",
                "(3, 5)"
            ],
            correctAnswer: "(2, 5)"
        },

        {
            question: "Which ordered pair lies on the graph of y = x²?",
            options: [
                "(2, 3)",
                "(2, 4)",
                "(3, 8)",
                "(-2, 3)"
            ],
            correctAnswer: "(2, 4)"
        },

        {
            question: "What is the range of the function f(x) = x² for all real x?",
            options: [
                "All real numbers",
                "y ≥ 0",
                "y ≤ 0",
                "x ≥ 0"
            ],
            correctAnswer: "y ≥ 0"
        },

        {
            question: "What is the domain of the function f(x) = 2x + 5?",
            options: [
                "All real numbers",
                "x ≥ 0 only",
                "x ≤ 0 only",
                "Positive integers only"
            ],
            correctAnswer: "All real numbers"
        },

        {
            question: "Which statement about a constant function is correct?",
            options: [
                "Its graph is a vertical line",
                "Its graph is a horizontal line",
                "Its graph is always a parabola",
                "Its slope is always undefined"
            ],
            correctAnswer: "Its graph is a horizontal line"
        }

    ]

};