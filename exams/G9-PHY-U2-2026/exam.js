// @ts-nocheck

const examData = {

    examCode: "G9-PHY-U2-2026",

    grade: "9",

    subject: "Physics",

    unit: "Unit 2",

    title: "Grade 9 Physics Unit 2",

    timer: 65,

    passMark: 55,

    questions: [

        {
            question: "The SI standard of time is based on:",
            options: [
                "The daily rotation of the Earth",
                "The yearly revolution of the Earth around the Sun",
                "9,192,631,770 periods of radiation corresponding to the transition between two levels of the cesium-133 atom",
                "A precision pendulum clock"
            ],
            correctAnswer: "9,192,631,770 periods of radiation corresponding to the transition between two levels of the cesium-133 atom"
        },

        {
            question: "Which method provides the most reliable measurement of time in daily life activities?",
            options: [
                "Observing the rotation of stars in the sky",
                "Using a digital watch",
                "Observing the position of shadows cast by trees",
                "Observing the position of the Sun in the sky"
            ],
            correctAnswer: "Using a digital watch"
        },

        {
            question: "What is the difference between traditional measuring units and scientific (standard) measuring units?",
            options: [
                "Traditional units are always more accurate than scientific units.",
                "Scientific units are fixed, standardized, and reproducible, while traditional units vary with place, time, and conditions.",
                "Traditional units are based on fundamental constants; scientific units are arbitrary.",
                "There is no difference; both are equally standardized."
            ],
            correctAnswer: "Scientific units are fixed, standardized, and reproducible, while traditional units vary with place, time, and conditions."
        },

        {
            question: "Which unit would be used for the length of a swimming pool?",
            options: [
                "Meter (m)",
                "Centimeter (cm)",
                "Kilometer (km)",
                "Millimeter (mm)"
            ],
            correctAnswer: "Meter (m)"
        },

        {
            question: "Which unit would you use for the mass of water in the swimming pool?",
            options: [
                "Kilogram (kg)",
                "Gram (g)",
                "Tonne (t)",
                "Milligram (mg)"
            ],
            correctAnswer: "Tonne (t)"
        },

        {
            question: "Which unit is suitable to measure the time it takes a swimmer to swim a lap?",
            options: [
                "Second (s)",
                "Minute (min)",
                "Hour (h)",
                "Day"
            ],
            correctAnswer: "Second (s)"
        },

        {
            question: "Write 0.000001256 in scientific notation.",
            options: [
                "1.256 × 10⁻⁶",
                "0.1256 × 10⁻⁵",
                "12.56 × 10⁻⁷",
                "1.26 × 10⁻⁵"
            ],
            correctAnswer: "1.256 × 10⁻⁶"
        },

        {
            question: "Write 452,000 in scientific notation.",
            options: [
                "0.452 × 10⁶",
                "45.2 × 10⁴",
                "4.52 × 10⁵",
                "4.5 × 10⁴"
            ],
            correctAnswer: "4.52 × 10⁵"
        },

        {
            question: "Write 0.00389 in scientific notation.",
            options: [
                "38.9 × 10⁻⁴",
                "3.89 × 10⁻³",
                "0.389 × 10⁻²",
                "3.9 × 10⁻²"
            ],
            correctAnswer: "3.89 × 10⁻³"
        },

        {
            question: "Write 7,200,000 in scientific notation.",
            options: [
                "72 × 10⁵",
                "0.72 × 10⁷",
                "7.2 × 10⁶",
                "7.2 × 10⁵"
            ],
            correctAnswer: "7.2 × 10⁶"
        },

        {
            question: "Convert 5.67 × 10⁻⁴ to a decimal number.",
            options: [
                "0.000567",
                "0.00567",
                "0.0000567",
                "5.67"
            ],
            correctAnswer: "0.000567"
        },

        {
            question: "Convert 9.1 × 10³ to a decimal number.",
            options: [
                "910",
                "91,000",
                "9,100",
                "0.00091"
            ],
            correctAnswer: "9,100"
        },

        {
            question: "Convert 2.345 × 10⁻² to a decimal number.",
            options: [
                "0.02345",
                "0.2345",
                "0.002345",
                "2.345"
            ],
            correctAnswer: "0.02345"
        },

        {
            question: "Convert 6.0 × 10⁵ to a decimal number.",
            options: [
                "60,000",
                "600,000",
                "6,000",
                "0.0006"
            ],
            correctAnswer: "600,000"
        },

        {
            question: "What is the sum of 1.513 and 27.3 with the correct number of significant figures?",
            options: [
                "28.813",
                "28.8",
                "28.81",
                "28.9"
            ],
            correctAnswer: "28.8"
        },

        {
            question: "What is the result of 6.789 − 4.23 with the correct number of significant figures?",
            options: [
                "2.559",
                "2.56",
                "2.5590",
                "2.6"
            ],
            correctAnswer: "2.56"
        },

        {
            question: "What is the product of 2.1 × 5.687 with the correct number of significant figures?",
            options: [
                "11.943",
                "11.9",
                "11.94",
                "12"
            ],
            correctAnswer: "11.9"
        },

        {
            question: "How should 138.0 be expressed in terms of significant figures when rounded to 3 significant figures?",
            options: [
                "138",
                "140",
                "138.0",
                "137"
            ],
            correctAnswer: "140"
        },

        {
            question: "How should 11.9 be expressed in terms of significant figures when rounded to 2 significant figures?",
            options: [
                "10",
                "12",
                "11",
                "11.9"
            ],
            correctAnswer: "12"
        },

        {
            question: "A nanosecond is",
            options: [
                "10⁹ s",
                "10⁻⁹ s",
                "10⁻⁶ s",
                "10⁻¹² s"
            ],
            correctAnswer: "10⁻⁹ s"
        },

        {
            question: "Which of the following would describe a length that is 2.0 × 10⁻³ of a meter?",
            options: [
                "2.0 km",
                "2.0 cm",
                "2.0 mm",
                "2.0 µm"
            ],
            correctAnswer: "2.0 mm"
        },

        {
            question: "“µg” represents:",
            options: [
                "Microgram, 10⁻⁶ g",
                "Milligram, 10⁻³ g",
                "Kilogram, 10³ g",
                "Megagram, 10⁶ g"
            ],
            correctAnswer: "Microgram, 10⁻⁶ g"
        },

        {
            question: "“mg” represents:",
            options: [
                "Milligram, 10⁻³ g",
                "Microgram, 10⁻⁶ g",
                "Kilogram, 10³ g",
                "Megagram, 10⁶ g"
            ],
            correctAnswer: "Milligram, 10⁻³ g"
        },

        {
            question: "The distance between the Sun and the Earth is about 1.5 × 10¹¹ m. Express this distance using a prefix.",
            options: [
                "1.5 Tm",
                "1.5 Gm",
                "150 Mm",
                "150 Gm"
            ],
            correctAnswer: "150 Gm"
        },

        {
            question: "Write 101 nanoseconds using the correct symbol for the prefix and the base unit.",
            options: [
                "101 ms",
                "101 µs",
                "101 ns",
                "101 ps"
            ],
            correctAnswer: "101 ns"
        },

        {
            question: "10 mg is equal to:",
            options: [
                "1.0 × 10⁻² g",
                "1.0 × 10⁻³ g",
                "1.0 × 10⁻⁵ g",
                "1.0 × 10⁻⁶ g"
            ],
            correctAnswer: "1.0 × 10⁻² g"
        },

        {
            question: "A distance of 72 gigameters can also be written as:",
            options: [
                "7.2 × 10¹⁰ m",
                "7.2 × 10⁹ m",
                "7.2 × 10¹² m",
                "7.2 × 10⁷ m"
            ],
            correctAnswer: "7.2 × 10¹⁰ m"
        },

        {
            question: "What is measurement?",
            options: [
                "The process of comparing a known quantity with another known quantity",
                "The process of comparing an unknown quantity with a known standard quantity of the same kind",
                "The act of counting numbers without using units",
                "The process of estimating the size of an object without tools"
            ],
            correctAnswer: "The process of comparing an unknown quantity with a known standard quantity of the same kind"
        },

        {
            question: "Which instrument is used to measure the thickness of a sheet of metal?",
            options: [
                "Vernier caliper",
                "Micrometer screw gauge",
                "Meter scale",
                "Measuring tape"
            ],
            correctAnswer: "Micrometer screw gauge"
        },

        {
            question: "Which of the following tells time by using the shadow of a vertical object on a marked flat surface?",
            options: [
                "Hourglass",
                "Sundial",
                "Water clock",
                "Mechanical watch"
            ],
            correctAnswer: "Sundial"
        },

        {
            question: "Which of the following is a correct laboratory safety rule?",
            options: [
                "You can work alone if the experiment is simple.",
                "Eating and drinking are allowed if chemicals are not used.",
                "Always wear lab safety goggles during experiments.",
                "Reading the experiment after entering the lab is sufficient."
            ],
            correctAnswer: "Always wear lab safety goggles during experiments."
        },

        {
            question: "Which one of the following pair of physical quantities has the same unit?",
            options: [
                "Displacement and distance",
                "Mass and force",
                "Speed and acceleration",
                "Volume and area"
            ],
            correctAnswer: "Displacement and distance"
        },

        {
            question: "Why are fundamental physical quantities different from derived physical quantities?",
            options: [
                "Fundamental physical quantities are derived from derived physical quantities.",
                "Derived physical quantities are derived from fundamental physical quantities.",
                "Derived and fundamental physical quantities have no relation.",
                "All are answers"
            ],
            correctAnswer: "Derived physical quantities are derived from fundamental physical quantities."
        },

        {
            question: "Which quantity is a vector?",
            options: [
                "Energy",
                "Time",
                "Speed",
                "Force"
            ],
            correctAnswer: "Force"
        },

        {
            question: "Which one of the following lists is a set of scalar quantities?",
            options: [
                "Force, velocity, acceleration",
                "Distance, speed, mass",
                "Displacement, force, momentum",
                "Acceleration, velocity, displacement"
            ],
            correctAnswer: "Distance, speed, mass"
        },

        {
            question: "Which of the following contains only fundamental physical quantities?",
            options: [
                "Length, mass, time",
                "Area, volume, speed",
                "Force, pressure, energy",
                "Density, acceleration, velocity"
            ],
            correctAnswer: "Length, mass, time"
        },

        {
            question: "Which of the following is a group of derived physical quantities?",
            options: [
                "Length, temperature, mass",
                "Time, electric current, amount of substance",
                "Area, volume, speed",
                "Luminous intensity, temperature, length"
            ],
            correctAnswer: "Area, volume, speed"
        },

        {
            question: "How many centimeters are there in one kilometer?",
            options: [
                "10⁴ cm",
                "10⁵ cm",
                "10⁶ cm",
                "10³ cm"
            ],
            correctAnswer: "10⁵ cm"
        },

        {
            question: "How many millimeters are there in one kilometer?",
            options: [
                "10⁶ mm",
                "10⁵ mm",
                "10⁴ mm",
                "10³ mm"
            ],
            correctAnswer: "10⁶ mm"
        },

        {
            question: "How many grams are there in one kilogram?",
            options: [
                "10⁴ g",
                "10³ g",
                "10² g",
                "10⁵ g"
            ],
            correctAnswer: "10³ g"
        },

        {
            question: "How many seconds are there in one day?",
            options: [
                "24,000 s",
                "3.6 × 10³ s",
                "8.64 × 10⁴ s",
                "1.24 × 10⁵ s"
            ],
            correctAnswer: "8.64 × 10⁴ s"
        },

        {
            question: "Which one of the following is a suitable unit to measure the distance between the Earth and the Moon?",
            options: [
                "mm",
                "km",
                "cm",
                "m"
            ],
            correctAnswer: "km"
        },

        {
            question: "Which one of the following is a suitable unit to measure the diameter of an electric wire?",
            options: [
                "mm",
                "km",
                "cm",
                "m"
            ],
            correctAnswer: "mm"
        },

        {
            question: "A hydrogen atom has a diameter of about 10 nm. Express this diameter in millimeters.",
            options: [
                "1 × 10⁻⁸ mm",
                "1 × 10⁻⁶ mm",
                "1 × 10⁻⁵ mm",
                "1 × 10⁻⁷ mm"
            ],
            correctAnswer: "1 × 10⁻⁵ mm"
        },

        {
            question: "A hydrogen atom has a diameter of about 10 nm. Express this diameter in micrometers.",
            options: [
                "0.01 µm",
                "1 × 10⁻³ µm",
                "0.001 µm",
                "0.1 µm"
            ],
            correctAnswer: "0.01 µm"
        },

        {
            question: "The doctor wants to know the age of his patient and asks him how old he is. The patient replies that he is 25½ years old. What is the age of the patient in months?",
            options: [
                "305 months",
                "306 months",
                "307 months",
                "308 months"
            ],
            correctAnswer: "306 months"
        },

        {
            question: "A student wants to measure the length of a classroom using a tape meter. The tape meter reads 8 m and 40 cm. What is the length of the classroom in centimeters?",
            options: [
                "840 cm",
                "804 cm",
                "800 cm",
                "848 cm"
            ],
            correctAnswer: "840 cm"
        },

        {
            question: "How many minutes are there in 3 days?",
            options: [
                "4320 min",
                "4200 min",
                "4500 min",
                "4800 min"
            ],
            correctAnswer: "4320 min"
        },

        {
            question: "The volume of the Earth is on the order of 10²¹ m³. What does this notation mean?",
            options: [
                "1 followed by 21 zeros cubic meters",
                "10 times 21 cubic meters",
                "1 followed by 12 zeros cubic meters",
                "21 cubic meters"
            ],
            correctAnswer: "1 followed by 21 zeros cubic meters"
        }

    ]

};