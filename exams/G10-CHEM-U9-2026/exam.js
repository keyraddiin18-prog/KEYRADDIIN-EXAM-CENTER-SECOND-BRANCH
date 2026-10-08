/* =========================================================
   KEYRADDIIN EXAM CENTER
   GRADE 10 CHEMISTRY
   UNIT 1 – CHEMICAL REACTIONS AND STOICHIOMETRY
   UNIVERSITY ENTRANCE EXAMINATION (UEE) MOCK EXAM
   ========================================================= */

const examData = {

    /* -----------------------------------------------------
       EXAM INFORMATION
       ----------------------------------------------------- */

    examCode: "G10-CHEM-U9-2026",

    grade: "10",

    subject: "Chemistry",

    unit: "Unit 1 – Chemical Reactions and Stoichiometry",

    title:
        "Grade 10 Chemistry Unit 1 – UEE Mock Entrance Examination",

    timer: 50,

    passMark: 50,


    /* -----------------------------------------------------
       QUESTIONS
       Total: 50 MCQs
       ----------------------------------------------------- */

    questions: [

        // Question 01
        {
            question:
                "Why must a chemical equation be balanced?",

            options: [
                "To make the reaction occur faster",
                "To satisfy the law of conservation of mass",
                "To increase the amount of product",
                "To change the properties of the reactants"
            ],

            correctAnswer:
                "To satisfy the law of conservation of mass"
        },


        // Question 02
        {
            question:
                "Consider the equation: 2H₂ + O₂ → 2H₂O. What do the coefficients primarily represent?",

            options: [
                "Mass ratios",
                "Atomic numbers",
                "Mole ratios",
                "Oxidation numbers"
            ],

            correctAnswer:
                "Mole ratios"
        },


        // Question 03
        {
            question:
                "A student balances H₂ + O₂ → H₂O by changing H₂O into H₂O₂. Why is this incorrect?",

            options: [
                "Oxygen cannot react with hydrogen",
                "The coefficient of hydrogen cannot be changed",
                "Changing a subscript changes the identity of the substance",
                "H₂O₂ contains no hydrogen"
            ],

            correctAnswer:
                "Changing a subscript changes the identity of the substance"
        },


        // Question 04
        {
            question:
                "Which equation is correctly balanced?",

            options: [
                "Fe + O₂ → Fe₂O₃",
                "2Fe + O₂ → Fe₂O₃",
                "4Fe + 3O₂ → 2Fe₂O₃",
                "3Fe + 2O₂ → Fe₃O₄"
            ],

            correctAnswer:
                "4Fe + 3O₂ → 2Fe₂O₃"
        },


        // Question 05
        {
            question:
                "Which reaction represents direct combination?",

            options: [
                "CaCO₃ → CaO + CO₂",
                "Zn + CuSO₄ → ZnSO₄ + Cu",
                "2Mg + O₂ → 2MgO",
                "AgNO₃ + NaCl → AgCl + NaNO₃"
            ],

            correctAnswer:
                "2Mg + O₂ → 2MgO"
        },


        // Question 06
        {
            question:
                "Which reaction represents decomposition?",

            options: [
                "2Na + Cl₂ → 2NaCl",
                "CaCO₃ → CaO + CO₂",
                "Zn + 2HCl → ZnCl₂ + H₂",
                "AgNO₃ + NaCl → AgCl + NaNO₃"
            ],

            correctAnswer:
                "CaCO₃ → CaO + CO₂"
        },


        // Question 07
        {
            question:
                "Which general form represents a single-displacement reaction?",

            options: [
                "A + B → AB",
                "AB → A + B",
                "A + BC → AC + B",
                "AB + CD → AD + CB"
            ],

            correctAnswer:
                "A + BC → AC + B"
        },


        // Question 08
        {
            question:
                "Which reaction is a double-displacement reaction?",

            options: [
                "Zn + 2HCl → ZnCl₂ + H₂",
                "2KClO₃ → 2KCl + 3O₂",
                "2Na + Cl₂ → 2NaCl",
                "AgNO₃ + NaCl → AgCl + NaNO₃"
            ],

            correctAnswer:
                "AgNO₃ + NaCl → AgCl + NaNO₃"
        },


        // Question 09
        {
            question:
                "Oxidation is best defined as:",

            options: [
                "Gain of electrons",
                "Loss of electrons or increase in oxidation number",
                "Decrease in oxidation number only",
                "Gain of hydrogen only"
            ],

            correctAnswer:
                "Loss of electrons or increase in oxidation number"
        },


        // Question 10
        {
            question:
                "Reduction is best described as:",

            options: [
                "Loss of electrons",
                "Increase in oxidation number",
                "Gain of electrons or decrease in oxidation number",
                "Loss of oxygen only"
            ],

            correctAnswer:
                "Gain of electrons or decrease in oxidation number"
        },


        // Question 11
        {
            question:
                "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which species is oxidized?",

            options: [
                "Zn",
                "Cu²⁺",
                "Zn²⁺",
                "Cu"
            ],

            correctAnswer:
                "Zn"
        },


        // Question 12
        {
            question:
                "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which species is the oxidizing agent?",

            options: [
                "Zn",
                "Zn²⁺",
                "Cu²⁺",
                "Cu"
            ],

            correctAnswer:
                "Cu²⁺"
        },


        // Question 13
        {
            question:
                "Why is Cu²⁺ called an oxidizing agent in Zn + Cu²⁺ → Zn²⁺ + Cu?",

            options: [
                "It loses electrons",
                "It accepts electrons and is reduced",
                "It increases its oxidation number",
                "It donates electrons to Zn"
            ],

            correctAnswer:
                "It accepts electrons and is reduced"
        },


        // Question 14
        {
            question:
                "Which statement is always true for a redox reaction?",

            options: [
                "Only oxidation occurs",
                "Only reduction occurs",
                "Oxidation and reduction occur simultaneously",
                "Oxygen must be present"
            ],

            correctAnswer:
                "Oxidation and reduction occur simultaneously"
        },


        // Question 15
        {
            question:
                "What is the oxidation number of sulfur in H₂SO₄?",

            options: [
                "+2",
                "+4",
                "+6",
                "-6"
            ],

            correctAnswer:
                "+6"
        },


        // Question 16
        {
            question:
                "What is the oxidation number of chlorine in KClO₃?",

            options: [
                "-1",
                "+1",
                "+3",
                "+5"
            ],

            correctAnswer:
                "+5"
        },


        // Question 17
        {
            question:
                "What is the oxidation number of manganese in KMnO₄?",

            options: [
                "+2",
                "+4",
                "+6",
                "+7"
            ],

            correctAnswer:
                "+7"
        },


        // Question 18
        {
            question:
                "What is the usual oxidation number of oxygen in most compounds?",

            options: [
                "+2",
                "+1",
                "-1",
                "-2"
            ],

            correctAnswer:
                "-2"
        },


        // Question 19
        {
            question:
                "What is the oxidation number of a free element such as O₂, Fe, or Cl₂?",

            options: [
                "-1",
                "0",
                "+1",
                "+2"
            ],

            correctAnswer:
                "0"
        },


        // Question 20
        {
            question:
                "In the reaction 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻, which species is reduced?",

            options: [
                "Fe²⁺",
                "Fe³⁺",
                "Cl₂",
                "Cl⁻"
            ],

            correctAnswer:
                "Cl₂"
        },


        // Question 21
        {
            question:
                "In the reaction Fe₂O₃ + 3CO → 2Fe + 3CO₂, which substance is reduced?",

            options: [
                "CO",
                "CO₂",
                "Fe₂O₃",
                "Fe"
            ],

            correctAnswer:
                "Fe₂O₃"
        },


        // Question 22
        {
            question:
                "In Fe₂O₃ + 3CO → 2Fe + 3CO₂, why is CO a reducing agent?",

            options: [
                "Carbon's oxidation number decreases",
                "Carbon's oxidation number increases",
                "CO accepts electrons",
                "Oxygen in CO is reduced"
            ],

            correctAnswer:
                "Carbon's oxidation number increases"
        },


        // Question 23
        {
            question:
                "One mole of a substance contains approximately:",

            options: [
                "6.022 × 10²² particles",
                "6.022 × 10²³ particles",
                "3.011 × 10²³ particles",
                "1.00 × 10²³ particles"
            ],

            correctAnswer:
                "6.022 × 10²³ particles"
        },


        // Question 24
        {
            question:
                "What is the molecular mass of H₂O? (H = 1, O = 16)",

            options: [
                "16 u",
                "17 u",
                "18 u",
                "20 u"
            ],

            correctAnswer:
                "18 u"
        },


        // Question 25
        {
            question:
                "What is the molecular mass of CO₂? (C = 12, O = 16)",

            options: [
                "28 u",
                "32 u",
                "44 u",
                "48 u"
            ],

            correctAnswer:
                "44 u"
        },


        // Question 26
        {
            question:
                "Why is NaCl described using formula mass rather than molecular mass?",

            options: [
                "NaCl contains no atoms",
                "NaCl is an ionic compound with a crystal lattice",
                "NaCl has no definite composition",
                "NaCl cannot be weighed"
            ],

            correctAnswer:
                "NaCl is an ionic compound with a crystal lattice"
        },


        // Question 27
        {
            question:
                "How many moles are present in 36 g of H₂O? (H = 1, O = 16)",

            options: [
                "1 mol",
                "2 mol",
                "3 mol",
                "4 mol"
            ],

            correctAnswer:
                "2 mol"
        },


        // Question 28
        {
            question:
                "How many molecules are present in 0.50 mol of CO₂?",

            options: [
                "1.204 × 10²⁴",
                "6.022 × 10²³",
                "3.011 × 10²³",
                "0.50 × 10²³"
            ],

            correctAnswer:
                "3.011 × 10²³"
        },


        // Question 29
        {
            question:
                "Which formula represents an empirical formula?",

            options: [
                "C₆H₁₂O₆",
                "C₂H₄",
                "CH₂O",
                "C₄H₈"
            ],

            correctAnswer:
                "CH₂O"
        },


        // Question 30
        {
            question:
                "A compound has empirical formula CH₂ and molar mass 42 g/mol. What is its molecular formula?",

            options: [
                "CH₂",
                "C₂H₄",
                "C₃H₆",
                "C₄H₈"
            ],

            correctAnswer:
                "C₃H₆"
        },


        // Question 31
        {
            question:
                "Consider: N₂ + 3H₂ → 2NH₃. What is the mole ratio N₂ : H₂ : NH₃?",

            options: [
                "1 : 2 : 3",
                "1 : 3 : 2",
                "2 : 3 : 1",
                "3 : 1 : 2"
            ],

            correctAnswer:
                "1 : 3 : 2"
        },


        // Question 32
        {
            question:
                "According to N₂ + 3H₂ → 2NH₃, how many moles of NH₃ can form from 4 mol N₂ with excess H₂?",

            options: [
                "2 mol",
                "4 mol",
                "6 mol",
                "8 mol"
            ],

            correctAnswer:
                "8 mol"
        },


        // Question 33
        {
            question:
                "According to 2H₂ + O₂ → 2H₂O, how many moles of H₂O are produced from 3 mol H₂ with excess O₂?",

            options: [
                "1.5 mol",
                "2 mol",
                "3 mol",
                "4 mol"
            ],

            correctAnswer:
                "3 mol"
        },


        // Question 34
        {
            question:
                "Why must a chemical equation be balanced before stoichiometric calculations?",

            options: [
                "To increase the reaction temperature",
                "To obtain correct mole ratios",
                "To increase the molar mass",
                "To change the products"
            ],

            correctAnswer:
                "To obtain correct mole ratios"
        },


        // Question 35
        {
            question:
                "Consider: 2Al + 3Cl₂ → 2AlCl₃. How many moles of AlCl₃ can form from 6 mol Cl₂ with excess Al?",

            options: [
                "2 mol",
                "3 mol",
                "4 mol",
                "6 mol"
            ],

            correctAnswer:
                "4 mol"
        },


        // Question 36
        {
            question:
                "How many grams of CO₂ are produced when 100 g of CaCO₃ decomposes completely? CaCO₃ → CaO + CO₂. (Ca = 40, C = 12, O = 16)",

            options: [
                "22 g",
                "44 g",
                "56 g",
                "100 g"
            ],

            correctAnswer:
                "44 g"
        },


        // Question 37
        {
            question:
                "How many grams of H₂O are produced from 4 g H₂ when O₂ is in excess? 2H₂ + O₂ → 2H₂O.",

            options: [
                "18 g",
                "24 g",
                "36 g",
                "40 g"
            ],

            correctAnswer:
                "36 g"
        },


        // Question 38
        {
            question:
                "For the reaction 2H₂ + O₂ → 2H₂O, 5 mol H₂ reacts with 5 mol O₂. Which is the limiting reactant?",

            options: [
                "H₂",
                "O₂",
                "H₂O",
                "Neither"
            ],

            correctAnswer:
                "H₂"
        },


        // Question 39
        {
            question:
                "In Question 38, how many moles of O₂ remain after the reaction is complete?",

            options: [
                "0.5 mol",
                "1.5 mol",
                "2.5 mol",
                "5 mol"
            ],

            correctAnswer:
                "2.5 mol"
        },


        // Question 40
        {
            question:
                "Why does the limiting reactant determine the theoretical yield?",

            options: [
                "It has the largest molar mass",
                "It is consumed first",
                "It is always present in the largest amount",
                "It is always a gas"
            ],

            correctAnswer:
                "It is consumed first"
        },


        // Question 41
        {
            question:
                "For 2Na + Cl₂ → 2NaCl, suppose 2 mol Na reacts with 2 mol Cl₂. Which statement is correct?",

            options: [
                "Na is excess and Cl₂ is limiting",
                "Cl₂ is excess and Na is limiting",
                "Both are limiting",
                "Neither is consumed"
            ],

            correctAnswer:
                "Cl₂ is excess and Na is limiting"
        },


        // Question 42
        {
            question:
                "A reaction has a theoretical yield of 50 g and an actual yield of 40 g. What is the percentage yield?",

            options: [
                "20%",
                "40%",
                "80%",
                "125%"
            ],

            correctAnswer:
                "80%"
        },


        // Question 43
        {
            question:
                "A student obtains a 108% yield. What is the most reasonable explanation?",

            options: [
                "Atoms were created during the reaction",
                "The product may contain impurities or retained water",
                "The law of conservation of mass was violated",
                "The reaction produced extra elements"
            ],

            correctAnswer:
                "The product may contain impurities or retained water"
        },


        // Question 44
        {
            question:
                "Which statement best distinguishes theoretical yield from actual yield?",

            options: [
                "Theoretical yield is measured experimentally",
                "Actual yield is always greater",
                "Theoretical yield is the calculated maximum amount",
                "They are always equal"
            ],

            correctAnswer:
                "Theoretical yield is the calculated maximum amount"
        },


        // Question 45
        {
            question:
                "Which is NOT a reasonable cause of obtaining less product than the theoretical yield?",

            options: [
                "Incomplete reaction",
                "Product loss during purification",
                "Side reactions",
                "Creation of atoms from nothing"
            ],

            correctAnswer:
                "Creation of atoms from nothing"
        },


        // Question 46
        {
            question:
                "In the reaction 2Fe₂O₃ + 3C → 4Fe + 3CO₂, which statement is correct?",

            options: [
                "Fe is oxidized from +3 to 0",
                "Carbon is reduced because its oxidation number increases",
                "Fe₂O₃ is reduced while carbon is oxidized",
                "Both Fe₂O₃ and carbon are oxidized"
            ],

            correctAnswer:
                "Fe₂O₃ is reduced while carbon is oxidized"
        },


        // Question 47
        {
            question:
                "A student says: 'If a reactant has a larger mass, it must be the excess reactant.' Why is this reasoning incorrect?",

            options: [
                "Mass has no relationship to chemistry",
                "Limiting and excess reactants depend on stoichiometric mole ratios, not mass alone",
                "The reactant with smaller mass is always limiting",
                "Only gases can be limiting reactants"
            ],

            correctAnswer:
                "Limiting and excess reactants depend on stoichiometric mole ratios, not mass alone"
        },


        // Question 48
        {
            question:
                "Which statement about an oxidizing agent is correct?",

            options: [
                "It is oxidized during the reaction",
                "It accepts electrons and is reduced",
                "It always contains oxygen",
                "It always has a negative charge"
            ],

            correctAnswer:
                "It accepts electrons and is reduced"
        },


        // Question 49
        {
            question:
                "Which statement about a reducing agent is correct?",

            options: [
                "It accepts electrons and is reduced",
                "It donates electrons and is oxidized",
                "It must contain hydrogen",
                "It always has a positive charge"
            ],

            correctAnswer:
                "It donates electrons and is oxidized"
        },


        // Question 50
        {
            question:
                "Which sequence represents the correct general pathway for a stoichiometric mass-to-mass calculation?",

            options: [
                "Mass → Mass → Mole → Mole ratio",
                "Mass → Mole → Mole ratio → Mole → Mass",
                "Mole → Mass → Atom → Mole",
                "Mass → Oxidation number → Mass"
            ],

            correctAnswer:
                "Mass → Mole → Mole ratio → Mole → Mass"
        }

    ]
};