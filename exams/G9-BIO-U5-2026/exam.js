// @ts-nocheck

const examData = {
    examCode: "G9-BIO-U5-2026",
    grade: "9",
    subject: "Biology",
    unit: "Unit 5 – Nutrition, Health and Disease",
    title: "Grade 9 Biology Unit 5",
    timer: 100,
    passMark: 53,

    questions: [
        {
            question: "What is food?",
            options: [
                "A chemical energy of organic molecules",
                "A result of chemical reaction in the body",
                "A substance with narcotic or stimulant effects.",
                "A substance that sustains life and provides energy"
            ],
            correctAnswer: "D"
        },
        {
            question: "Which of the following is NOT a source of food?",
            options: [
                "Soil",
                "Plants",
                "Fungi",
                "Animals"
            ],
            correctAnswer: "A"
        },
        {
            question: "What is the primary role of food in the body?",
            options: [
                "To cause harm",
                "To aid in thinking",
                "To increase body size",
                "To provide energy and nutrients"
            ],
            correctAnswer: "D"
        },
        {
            question: "What is nutrition?",
            options: [
                "The process of digestion and excretion only",
                "The absorption of water and minerals in the body",
                "The elimination of waste products from the body",
                "The process of taking in food and converting it into energy"
            ],
            correctAnswer: "D"
        },
        {
            question: "What are macronutrients?",
            options: [
                "Vitamins and minerals",
                "Carbohydrates and fats only",
                "Nutrients required in large amounts",
                "Nutrients required in small amounts"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which of the following is a micronutrient?",
            options: [
                "Fats",
                "Protein",
                "Vitamin C",
                "Carbohydrates"
            ],
            correctAnswer: "C"
        },
        {
            question: "What is the primary source of energy for the human body?",
            options: [
                "Fats",
                "Carbohydrates",
                "Proteins",
                "Minerals"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which one of the following alternatives contains only monosaccharides?",
            options: [
                "Sucrose, Lactose, Maltose",
                "Glucose, Fructose, Galactose",
                "Ribose, Maltose, Glucose",
                "Starch, Cellulose, Glycogen"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which of the following is a disaccharide?",
            options: [
                "Glucose",
                "Fructose",
                "Sucrose",
                "Cellulose"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which of the following correctly matches a disaccharide with its monosaccharide residues?",
            options: [
                "Maltose – Fructose + Glucose",
                "Sucrose – Glucose + Galactose",
                "Lactose – Glucose + Galactose",
                "Cellobiose – Glucose + Fructose"
            ],
            correctAnswer: "C"
        },
        {
            question: "What type of carbohydrate is cellulose?",
            options: [
                "Disaccharide",
                "Monosaccharide",
                "Simple sugar",
                "Polysaccharide"
            ],
            correctAnswer: "D"
        },
        {
            question: "What is the major function of fats in the body?",
            options: [
                "To provide fiber",
                "To store energy and provide insulation",
                "To digest proteins",
                "To regulate metabolic activity"
            ],
            correctAnswer: "B"
        },
        {
            question: "What are proteins made of?",
            options: [
                "Fatty acids",
                "Nucleotides",
                "Carbohydrates",
                "Amino acids"
            ],
            correctAnswer: "D"
        },
        {
            question: "Which nutrient is primarily responsible for muscle growth and repair?",
            options: [
                "Fats",
                "Fiber",
                "Proteins",
                "Carbohydrates"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which of the following elements is found in proteins but not in carbohydrates or fats?",
            options: [
                "Carbon",
                "Oxygen",
                "Nitrogen",
                "Hydrogen"
            ],
            correctAnswer: "C"
        },
        {
            question: "What function does vitamin A serve in the body?",
            options: [
                "Bone strength",
                "Blood clotting",
                "Energy production",
                "Immune function and vision"
            ],
            correctAnswer: "D"
        },
        {
            question: "Which of the following vegetables is most important for maintaining good night vision due to its high vitamin A content?",
            options: [
                "Carrot",
                "Cabbage",
                "Potato",
                "Onion"
            ],
            correctAnswer: "A"
        },
        {
            question: "Which vitamin is necessary for collagen production?",
            options: [
                "Vitamin A",
                "Vitamin C",
                "Vitamin E",
                "Vitamin K"
            ],
            correctAnswer: "B"
        },
        {
            question: "What is the primary function of calcium in the body?",
            options: [
                "To form blood cells",
                "To regulate blood sugar",
                "To build bones and teeth",
                "To maintain nerve function"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which mineral helps in the production of thyroid hormones?",
            options: [
                "Iron",
                "Iodine",
                "Calcium",
                "Phosphorus"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which mineral is required for the formation of red blood cells?",
            options: [
                "Iron",
                "Iodine",
                "Calcium",
                "Phosphorus"
            ],
            correctAnswer: "A"
        },
        {
            question: "What is the main role of water in the body?",
            options: [
                "To digest food",
                "To supply energy",
                "To synthesize proteins",
                "To transport nutrients and waste"
            ],
            correctAnswer: "D"
        },
        {
            question: "What is the result of consuming inadequate amounts of essential nutrients?",
            options: [
                "Improved growth",
                "Deficiency diseases",
                "Increased energy levels",
                "Stronger immune system"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which group of people requires a diet rich in protein and calories for growth and muscle development?",
            options: [
                "Elderly",
                "Athletes",
                "Children",
                "Pregnant women"
            ],
            correctAnswer: "C"
        },
        {
            question: "What is the primary symptom of anemia?",
            options: [
                "Dry skin",
                "Swollen abdomen",
                "Bone deformities",
                "Weakness and fatigue"
            ],
            correctAnswer: "D"
        },
        {
            question: "If a person consumes insufficient carbohydrates, they are most at risk of developing which deficiency disease?",
            options: [
                "Scurvy",
                "Rickets",
                "Marasmus",
                "Kwashiorkor"
            ],
            correctAnswer: "C"
        },
        {
            question: "A child with swollen abdomen, dry skin, and irritability most likely suffers from which of the following?",
            options: [
                "Scurvy",
                "Rickets",
                "Anemia",
                "Kwashiorkor"
            ],
            correctAnswer: "D"
        },
        {
            question: "What is the best source of vitamin C to prevent scurvy?",
            options: [
                "Fish",
                "Eggs",
                "Citrus fruits",
                "Dairy products"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which nutrient deficiency can lead to poor wound healing and swollen gums?",
            options: [
                "Iron",
                "Protein",
                "Vitamin C",
                "Vitamin A"
            ],
            correctAnswer: "C"
        },
        {
            question: "In a drought-affected village, a health worker notices that many children appear very thin for their height. Which condition are these children most likely experiencing?",
            options: [
                "Obesity",
                "Wasting",
                "Stunting",
                "Overweight"
            ],
            correctAnswer: "B"
        },
        {
            question: "In a rural Ethiopian community, many children under 5 years are shorter than the expected height for their age due to long-term food shortages. What is the most likely condition affecting these children?",
            options: [
                "Obesity",
                "Wasting",
                "Stunting",
                "Overweight"
            ],
            correctAnswer: "C"
        },
        {
            question: "What is the definition of underweight in children?",
            options: [
                "Low height-for-age",
                "Low weight-for-age",
                "Low weight-for-height",
                "High weight-for-height"
            ],
            correctAnswer: "B"
        },
        {
            question: "What condition are people most likely to develop if they consume high-fat foods and sugary snacks regularly but do not engage in physical activity?",
            options: [
                "Rickets",
                "Obesity",
                "Anemia",
                "Marasmus"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which of the following health problems is directly associated with obesity?",
            options: [
                "Scurvy",
                "Marasmus",
                "Kwashiorkor",
                "High blood pressure"
            ],
            correctAnswer: "D"
        },
        {
            question: "How is Body Mass Index (BMI) calculated?",
            options: [
                "Body mass (kg) / height (m)",
                "Body mass (kg) / height² (m²)",
                "Height (m) / body mass (kg)",
                "Height (m²) / body mass (kg)"
            ],
            correctAnswer: "B"
        },
        {
            question: "If a patient has a Body Mass Index (BMI) of 32, what category does this fall under?",
            options: [
                "Obese",
                "Underweight",
                "Normal weight",
                "Excess weight"
            ],
            correctAnswer: "A"
        },
        {
            question: "A person is 1.73 meters tall and weighs 45 kg. What is the minimum amount of weight they must gain to reach a normal BMI range?",
            options: [
                "3.5 kg",
                "5.2 kg",
                "7.5 kg",
                "10.4 kg"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which of the following activities is most likely to help prevent obesity?",
            options: [
                "Going to school by taxi",
                "Sitting and watching TV",
                "Playing computer games",
                "Going to school by walking"
            ],
            correctAnswer: "D"
        },
        {
            question: "A health worker explains that a child's growth in height is permanently affected due to poor nutrition in the first 1000 days of life. What condition is the health worker describing?",
            options: [
                "Wasting",
                "Stunting",
                "Marasmus",
                "Kwashiorkor"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which chemical in cigarette smoke is known to contain carcinogenic compounds?",
            options: [
                "Tar",
                "Nicotine",
                "Ammonia",
                "Carbon monoxide"
            ],
            correctAnswer: "A"
        },
        {
            question: "What is the active ingredient in tobacco that causes addiction?",
            options: [
                "Tar",
                "Nicotine",
                "Cannabinoids",
                "Carbon monoxide"
            ],
            correctAnswer: "B"
        },
        {
            question: "In cigarette smoke, which component combines permanently with haemoglobin and reduces the oxygen-carrying capacity of the blood?",
            options: [
                "Tar",
                "Nicotine",
                "Methane",
                "Carbon monoxide"
            ],
            correctAnswer: "D"
        },
        {
            question: "What is the active ingredient in marijuana responsible for its psychoactive effects?",
            options: [
                "Naltrexone",
                "Methamphetamine",
                "Cannabidiol (CBD)",
                "Tetrahydrocannabinol (THC)"
            ],
            correctAnswer: "D"
        },
        {
            question: "What long-term condition involves liver tissue being replaced by scar tissue due to chronic alcohol consumption?",
            options: [
                "Cirrhosis",
                "Fatty liver",
                "Liver cancer",
                "Alcohol hepatitis"
            ],
            correctAnswer: "A"
        },
        {
            question: "What type of drug is heroin classified as when considering its effects on the nervous system?",
            options: [
                "Laxative",
                "Stimulant",
                "Depressant",
                "Hallucinogen"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which active compound in khat is responsible for its stimulant effects on the human body?",
            options: [
                "Nicotine",
                "Caffeine",
                "Morphine",
                "Cathinone"
            ],
            correctAnswer: "D"
        },
        {
            question: "Which oral health problem is frequently associated with long-term khat chewing?",
            options: [
                "Strengthened enamel",
                "Increased saliva production",
                "Reduced risk of oral cancer",
                "Gum disease and tooth decay"
            ],
            correctAnswer: "D"
        },
        {
            question: "Why is doping a threat to the spirit of sport?",
            options: [
                "It is a traditional practice",
                "It helps athletes win fairly",
                "It is only harmful to health",
                "It gives an unfair advantage"
            ],
            correctAnswer: "D"
        },
        {
            question: "If an athlete is caught doping, what sporting consequence might follow?",
            options: [
                "Fame and glory",
                "Free entry to tournaments",
                "Loss of results and medals",
                "More training opportunities"
            ],
            correctAnswer: "C"
        },
        {
            question: "What term refers to a condition in which the body does not function normally?",
            options: [
                "Infection",
                "Immunity",
                "Disease",
                "Disorder"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which of the following is classified as an infectious disease?",
            options: [
                "Obesity",
                "Diabetes",
                "Tuberculosis",
                "Sickle cell anemia"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which type of organism is NOT typically responsible for causing infectious diseases?",
            options: [
                "Virus",
                "Bacteria",
                "Fungi",
                "Algae"
            ],
            correctAnswer: "D"
        },
        {
            question: "How can infectious diseases be transmitted from one person to another?",
            options: [
                "Direct contact",
                "Taking vitamins",
                "Drinking clean water",
                "Breathing pure oxygen"
            ],
            correctAnswer: "A"
        },
        {
            question: "Which of the following is a method to prevent the spread of infectious diseases?",
            options: [
                "Skipping vaccinations",
                "Practicing personal hygiene",
                "Eating raw meat",
                "Avoiding sunlight"
            ],
            correctAnswer: "B"
        },
        {
            question: "What is the main target of the HIV virus in the human body?",
            options: [
                "T cells",
                "Platelets",
                "Liver cells",
                "Red blood cells"
            ],
            correctAnswer: "A"
        },
        {
            question: "How can HIV be transmitted from one person to another?",
            options: [
                "Through sweat",
                "Through handshakes",
                "Through mosquito bites",
                "Through sharing needles"
            ],
            correctAnswer: "D"
        },
        {
            question: "What is the role of antiretroviral therapy (ART) in managing HIV?",
            options: [
                "It cures HIV completely",
                "It reduces fever temporarily",
                "It boosts white blood cell count only",
                "It controls the virus and improves immunity"
            ],
            correctAnswer: "D"
        },
        {
            question: "Which stage of HIV infection leads to life-threatening infections and cancers?",
            options: [
                "AIDS",
                "Incubation",
                "Acute phase",
                "Recovery phase"
            ],
            correctAnswer: "A"
        },
        {
            question: "What is the causative agent of tuberculosis?",
            options: [
                "Plasmodium spp.",
                "Influenza virus",
                "Mycobacterium leprae",
                "Mycobacterium tuberculosis"
            ],
            correctAnswer: "D"
        },
        {
            question: "Which organ is primarily affected by tuberculosis?",
            options: [
                "Heart",
                "Liver",
                "Lungs",
                "Intestines"
            ],
            correctAnswer: "C"
        },
        {
            question: "What is a common method of transmission of tuberculosis?",
            options: [
                "Insect bites",
                "Contaminated water",
                "Airborne droplets",
                "Direct skin contact"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which of the following is used to prevent tuberculosis?",
            options: [
                "COVID vaccine",
                "Hepatitis B vaccine",
                "ART drugs",
                "BCG vaccine"
            ],
            correctAnswer: "D"
        },
        {
            question: "What is the vector responsible for transmitting malaria?",
            options: [
                "Flea",
                "Housefly",
                "Tsetse fly",
                "Anopheles mosquito"
            ],
            correctAnswer: "D"
        },
        {
            question: "In which regions is malaria most commonly found?",
            options: [
                "Urban cities",
                "Desert regions",
                "Arctic and Antarctic",
                "Tropical and subtropical areas"
            ],
            correctAnswer: "D"
        },
        {
            question: "What is one effective way to control malaria?",
            options: [
                "Taking antibiotics",
                "Drinking herbal teas",
                "Wearing warm clothes",
                "Using antimalarial drugs"
            ],
            correctAnswer: "D"
        },
        {
            question: "Which virus causes COVID-19?",
            options: [
                "HIV",
                "SARS-CoV-2",
                "Influenza A",
                "Plasmodium"
            ],
            correctAnswer: "B"
        },
        {
            question: "What is one effective way to reduce the risk of COVID-19 transmission?",
            options: [
                "Sharing personal items",
                "Staying indoors with many people",
                "Washing hands regularly",
                "Avoiding sunlight exposure"
            ],
            correctAnswer: "C"
        },
        {
            question: "What is a non-infectious disease?",
            options: [
                "A disease caused by bacteria",
                "A disease spread through contact",
                "A disease caused by fungi",
                "A disease not caused by pathogens"
            ],
            correctAnswer: "D"
        },
        {
            question: "Which of the following is a non-infectious disease caused by nutritional deficiency?",
            options: [
                "Malaria",
                "Scurvy",
                "Tuberculosis",
                "COVID-19"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which non-infectious condition is caused by a genetic factor?",
            options: [
                "Obesity",
                "Malaria",
                "Sickle cell anemia",
                "Chronic bronchitis"
            ],
            correctAnswer: "C"
        }
    ]
};