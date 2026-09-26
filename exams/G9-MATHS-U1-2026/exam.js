// @ts-nocheck

/* =========================================================
   KEYRADDIIN EXAM CENTER
   GRADE 9 MATHEMATICS
   UNIT 1 — FURTHER ON SETS
   ========================================================= */

const examData = {

    examCode: "G9-MATHS-U1-2026",
    grade: "9",
    subject: "Mathematics",
    unit: "Unit 1 — Further on Sets",
    title: "Grade 9 Mathematics Unit 1 — Further on Sets",
    timer: 30,
    passMark: 50,

    questions: [

        // Question 01
        {
            question:
                "Which one of the following sets is not a subset of {1, {2}, {1, 2}}?",
            options: [
                "{1}",
                "{2}",
                "{1, {2}}",
                "{{1, 2}}"
            ],
            correctAnswer:
                "{2}"
        },

        // Question 02
        {
            question:
                "If A = {0, {3}, 5, -4}, then which one of the following is true?",
            options: [
                "3 ∈ A",
                "{5} ∈ A",
                "5 ∈ A",
                "{0, -4} ∈ A"
            ],
            correctAnswer:
                "5 ∈ A"
        },

        // Question 03
        {
            question:
                "Which of the following is true?",
            options: [
                "0 ∈ ∅",
                "{3, 4} ⊂ {3, 4, 5}",
                "{1, 2, 3} ⊂ {1, 2, 3, 4}",
                "7 ∈ {7}"
            ],
            correctAnswer:
                "{1, 2, 3} ⊂ {1, 2, 3, 4}"
        },

        // Question 04
        {
            question:
                "Which one of the following sets is not finite?",
            options: [
                "A = {x : x is an even integer lying between 2 and 10}",
                "B = {x : x is a letter of the English alphabet}",
                "C = {x : x is a student of St. Gabriel Secondary School}",
                "D = {x : x is an integer less than 10}"
            ],
            correctAnswer:
                "D = {x : x is an integer less than 10}"
        },

        // Question 05
        {
            question:
                "Let A = {1, {2,3}, 3} and B = {{1}, {3,2}, 3}. Then B − A is equal to:",
            options: [
                "{{3,2}}",
                "{{1}}",
                "{{1}, {3,2}}",
                "{1}"
            ],
            correctAnswer:
                "{{1}, {3,2}}"
        },

        // Question 06
        {
            question:
                "If A and B are two sets such that n(A) = 12, n(B) = 15 and n(A ∩ B) = 4, then n(A ∪ B) is equal to:",
            options: [
                "8",
                "11",
                "23",
                "19"
            ],
            correctAnswer:
                "23"
        },

        // Question 07
        {
            question:
                "The number of subsets of the set {x : x is an even integer and -1 < x < 3} is:",
            options: [
                "4",
                "2",
                "32",
                "8"
            ],
            correctAnswer:
                "4"
        },

        // Question 08
        {
            question:
                "In a given universal set U, let A and B be sets. Which of the following is a simplified form of (A ∪ B) ∩ (A' ∩ B')'?",
            options: [
                "∅",
                "U",
                "A ∪ B",
                "A ∩ B"
            ],
            correctAnswer:
                "A ∪ B"
        },

        // Question 09
        {
            question:
                "If set M = {x : -2 < x < 2}, where x is an integer, then which one of the following sets is equivalent to set M?",
            options: [
                "{x : -1 < x < 1, where x is an integer}",
                "{x : -1 < x < 1, where x is a real number}",
                "{x : x < 3, where x is a natural number}",
                "{x : 1 < x < 5, where x is an integer}"
            ],
            correctAnswer:
                "{x : -1 < x < 1, where x is an integer}"
        },

        // Question 10
        {
            question:
                "For two finite sets A and B, where A ⊂ B with n(A) = p and n(B) = q such that p < q, which one of the following relations is true?",
            options: [
                "n(A ∪ B) = p",
                "n(A ∪ B) = q",
                "n(A ∪ B) = p + q",
                "n(A ∪ B) < q"
            ],
            correctAnswer:
                "n(A ∪ B) = q"
        },

        // Question 11
        {
            question:
                "Let H = {∅, {{0,1}}}. Which one of the following is the power set of H?",
            options: [
                "{∅, {∅}, {{{0,1}}}, {∅, {{0,1}}}}",
                "{∅, {{0,1}}, {∅, {0,1}}}",
                "{∅, {0}, {1}, {0,1}}",
                "{∅, {∅}, {0}, {1}, {0,1}}"
            ],
            correctAnswer:
                "{∅, {∅}, {{{0,1}}}, {∅, {{0,1}}}}"
        },

        // Question 12
        {
            question:
                "Given three sets X, Y, and Z, which one of the following statements is NOT true?",
            options: [
                "If X ∩ Y ≠ ∅ and X ∩ Z = ∅, then X ∩ Y ∩ Z = ∅",
                "If X ∩ Y = Y, then Y ⊆ X",
                "If X ∩ Y = ∅, then Y − X = Y",
                "If X ∩ Y = ∅, then X − Y = X"
            ],
            correctAnswer:
                "If X ∩ Y ≠ ∅ and X ∩ Z = ∅, then X ∩ Y ∩ Z = ∅"
        },

        // Question 13
        {
            question:
                "The number of proper subsets of a set with 7 elements is:",
            options: [
                "127",
                "128",
                "14",
                "28"
            ],
            correctAnswer:
                "127"
        },

        // Question 14
        {
            question:
                "If A = {x : x ∈ N and 1 ≤ x ≤ 20} and B = {x : x ∈ N, 1 ≤ x ≤ 20 and x is odd}, the relative complement of B with respect to A (A − B) is:",
            options: [
                "{2, 4, 6, 8, 10, 12, 14, 16, 18, 20}",
                "∅",
                "{2, 4, 6, ..., 20}",
                "{2, 4, 6, ..., 18}"
            ],
            correctAnswer:
                "{2, 4, 6, 8, 10, 12, 14, 16, 18, 20}"
        },

        // Question 15
        {
            question:
                "Consider the following sets: W = {1, 1.1, 1.2, 1.3, ..., 1.9, 2}, X = {0,1,2,3,...,9,10}, and Z = {x : x ∈ N and x ≤ 10}. Which one of the following is true?",
            options: [
                "X = Z",
                "X ~ Z",
                "W = X",
                "W ~ Z"
            ],
            correctAnswer:
                "X = Z"
        },

        // Question 16
        {
            question:
                "If E and F are two unequal sets and U is the corresponding universal set, which one of the following statements is true?",
            options: [
                "E ∩ ∅ = U",
                "If E ⊆ F, then (E ∩ F) = E",
                "If E ⊆ F, then E ∪ F = E",
                "E ∪ ∅ = U"
            ],
            correctAnswer:
                "If E ⊆ F, then (E ∩ F) = E"
        },

        // Question 17
        {
            question:
                "Which one of the following pairs represents equal sets?",
            options: [
                "{x : x ∈ Z and (x² − 4)(3 − x) = 0} and {x : x ∈ N and (4 − x²)(x − 3) = 0}",
                "{x : x is an even natural number} and {x : x is an odd natural number}",
                "{6, 12} and {3, 9}",
                "{x : x ∈ Z and 2 < x ≤ 3} and {x : x ∈ Z and 3 < x < 4}"
            ],
            correctAnswer:
                "{x : x ∈ Z and 2 < x ≤ 3} and {x : x ∈ Z and 3 < x < 4}"
        },

        // Question 18
        {
            question:
                "If A = {-1, 0, 1} and B = {-1, 1}, then the Cartesian product A × B is:",
            options: [
                "{(-1,-1), (0,-1), (0,1), (1,1), (-1,1), (1,-1)}",
                "{(-1,-1), (0,-1), (0,1), (1,1), (-1,1)}",
                "{(-1,-1), (0,1), (1,1)}",
                "{(-1,-1), (0,-1), (0,1), (1,1)}"
            ],
            correctAnswer:
                "{(-1,-1), (0,-1), (0,1), (1,1), (-1,1), (1,-1)}"
        },

        // Question 19
        {
            question:
                "Which one of the following sets is equal to the set {x : x = 2n + 1, n ∈ Z}?",
            options: [
                "{..., -5, -3, -2, 2, 3, 5, 7, 11, 13, ...}",
                "R \\ {x : x = 2n, n ∈ Z}",
                "{..., -6, -4, -2, 0, 2, 4, 6, ...}",
                "{..., -5, -3, -1, 1, 3, 5, 7, 9, ...}"
            ],
            correctAnswer:
                "{..., -5, -3, -1, 1, 3, 5, 7, 9, ...}"
        },

        // Question 20
        {
            question:
                "If B = {-2,-1,0,1,2} and A = {x + y : x ∈ B and y ∈ B}, then the list of all elements of A is:",
            options: [
                "{-4,-3,-2,-1,0,1,2,3,4}",
                "{-2,-1,0,1,2}",
                "{-3,-1,0,1,3}",
                "{-3,-2,-1,0,1,2,3}"
            ],
            correctAnswer:
                "{-4,-3,-2,-1,0,1,2,3,4}"
        },

        // Question 21
        {
            question:
                "Given three sets A, B, C and a universal set U, which one of the following is true?",
            options: [
                "A ∩ B ∩ C = A ∩ B ∩ C",
                "A ⊆ A ∩ B",
                "A ∩ B ∩ C' = A ∩ B' ∩ C'",
                "A ∩ U = A"
            ],
            correctAnswer:
                "A ∩ U = A"
        },

        // Question 22
        {
            question:
                "In a certain Ethiopian high school, 100 students are studying English, 85 students are studying French, and 35 students are studying both languages. How many students are studying at least one of the two foreign languages?",
            options: [
                "220",
                "15",
                "150",
                "185"
            ],
            correctAnswer:
                "150"
        }

    ]

};