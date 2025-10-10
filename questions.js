const QUESTIONS = [
  {
    "q": "Which of the following is a plant hormone responsible for cell elongation?",
    "a": [
      "Cytokinin",
      "Gibberellin",
      "Auxin",
      "Abscisic acid"
    ],
    "correct": 2
  },
  {
    "q": "The basic unit of life is —",
    "a": [
      "Atom",
      "Molecule",
      "Cell",
      "Tissue"
    ],
    "correct": 2
  },
  {
    "q": "Which organelle is known as the “Powerhouse of the cell”?",
    "a": [
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus",
      "Lysosome"
    ],
    "correct": 1
  },
  {
    "q": "Which part of the plant is mainly responsible for photosynthesis?",
    "a": [
      "Root",
      "Stem",
      "Leaf",
      "Flower"
    ],
    "correct": 2
  },
  {
    "q": "DNA is located mainly in —",
    "a": [
      "Ribosome",
      "Cytoplasm",
      "Nucleus",
      "Cell wall"
    ],
    "correct": 2
  },
  {
    "q": "Which gas is released during photosynthesis?",
    "a": [
      "Carbon dioxide",
      "Nitrogen",
      "Oxygen",
      "Hydrogen"
    ],
    "correct": 2
  },
  {
    "q": "The green pigment in plants is —",
    "a": [
      "Carotene",
      "Xanthophyll",
      "Chlorophyll",
      "Anthocyanin"
    ],
    "correct": 2
  },
  {
    "q": "Which of the following is a prokaryotic organism?",
    "a": [
      "Amoeba",
      "Bacteria",
      "Hydra",
      "Paramecium"
    ],
    "correct": 1
  },
  {
    "q": "Which vitamin is synthesized by skin in sunlight?",
    "a": [
      "Vitamin A",
      "Vitamin B",
      "Vitamin D",
      "Vitamin C"
    ],
    "correct": 2
  },
  {
    "q": "Blood is a —",
    "a": [
      "Connective tissue",
      "Muscular tissue",
      "Epithelial tissue",
      "Nervous tissue"
    ],
    "correct": 0
  },
  {
    "q": "The functional unit of the kidney is —",
    "a": [
      "Nephron",
      "Neuron",
      "Alveoli",
      "Villus"
    ],
    "correct": 0
  },
  {
    "q": "The smallest blood vessels are —",
    "a": [
      "Arteries",
      "Veins",
      "Capillaries",
      "Venules"
    ],
    "correct": 2
  },
  {
    "q": "Which blood group is called universal donor?",
    "a": [
      "A",
      "B",
      "AB",
      "O"
    ],
    "correct": 3
  },
  {
    "q": "The process of conversion of glucose into energy is called —",
    "a": [
      "Photosynthesis",
      "Respiration",
      "Transpiration",
      "Germination"
    ],
    "correct": 1
  },
  {
    "q": "The main excretory product in humans is —",
    "a": [
      "Ammonia",
      "Urea",
      "Uric acid",
      "Water"
    ],
    "correct": 1
  },
  {
    "q": "Which part of the brain controls balance and posture?",
    "a": [
      "Cerebrum",
      "Medulla oblongata",
      "Cerebellum",
      "Pons"
    ],
    "correct": 2
  },
  {
    "q": "Which of these diseases is caused by virus?",
    "a": [
      "Cholera",
      "Typhoid",
      "Influenza",
      "Tuberculosis"
    ],
    "correct": 2
  },
  {
    "q": "The human heart has —",
    "a": [
      "Two chambers",
      "Three chambers",
      "Four chambers",
      "Five chambers"
    ],
    "correct": 2
  },
  {
    "q": "Which blood vessel carries oxygenated blood from lungs to heart?",
    "a": [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Vena cava"
    ],
    "correct": 1
  },
  {
    "q": "Which of these helps in clotting of blood?",
    "a": [
      "RBC",
      "WBC",
      "Platelets",
      "Plasma"
    ],
    "correct": 2
  },
  {
    "q": "The site of fertilization in humans is —",
    "a": [
      "Ovary",
      "Uterus",
      "Oviduct (fallopian tube)",
      "Vagina"
    ],
    "correct": 2
  },
  {
    "q": "Which gland is known as the “master gland”?",
    "a": [
      "Adrenal gland",
      "Pituitary gland",
      "Thyroid gland",
      "Pancreas"
    ],
    "correct": 1
  },
  {
    "q": "The normal body temperature of humans is —",
    "a": [
      "96°F",
      "98.6°F",
      "100°F",
      "102°F"
    ],
    "correct": 1
  },
  {
    "q": "Which of these is not a part of the human digestive system?",
    "a": [
      "Stomach",
      "Liver",
      "Kidney",
      "Intestine"
    ],
    "correct": 2
  },
  {
    "q": "The movement of water through a semi-permeable membrane is called —",
    "a": [
      "Diffusion",
      "Osmosis",
      "Active transport",
      "Transpiration"
    ],
    "correct": 1
  },
  {
    "q": "Which part of the flower becomes fruit after fertilization?",
    "a": [
      "Ovary",
      "Ovule",
      "Stigma",
      "Petal"
    ],
    "correct": 0
  },
  {
    "q": "Which among the following is not a vertebrate?",
    "a": [
      "Frog",
      "Snake",
      "Earthworm",
      "Bird"
    ],
    "correct": 2
  },
  {
    "q": "The process of losing water through stomata is called —",
    "a": [
      "Translocation",
      "Transpiration",
      "Photosynthesis",
      "Absorption"
    ],
    "correct": 1
  },
  {
    "q": "Which tissue transports food in plants?",
    "a": [
      "Xylem",
      "Phloem",
      "Parenchyma",
      "Collenchyma"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is not a function of roots?",
    "a": [
      "Absorption of water",
      "Anchorage",
      "Photosynthesis",
      "Storage of food"
    ],
    "correct": 2
  },
  {
    "q": "Which of the following is a unicellular organism?",
    "a": [
      "Amoeba",
      "Human",
      "Frog",
      "Grass"
    ],
    "correct": 0
  },
  {
    "q": "The female reproductive part of a flower is called —",
    "a": [
      "Stamen",
      "Pistil",
      "Petal",
      "Sepal"
    ],
    "correct": 1
  },
  {
    "q": "Which process do plants use to make their food?",
    "a": [
      "Respiration",
      "Photosynthesis",
      "Transpiration",
      "Digestion"
    ],
    "correct": 1
  },
  {
    "q": "Which part of the plant transports water?",
    "a": [
      "Phloem",
      "Xylem",
      "Stomata",
      "Root hair"
    ],
    "correct": 1
  },
  {
    "q": "Seeds are produced in —",
    "a": [
      "Stem",
      "Flower",
      "Leaf",
      "Root"
    ],
    "correct": 1
  },
  {
    "q": "Starch is stored in plants in —",
    "a": [
      "Chloroplast",
      "Vacuole",
      "Amyloplast",
      "Mitochondria"
    ],
    "correct": 2
  },
  {
    "q": "The main gas used by plants in photosynthesis is —",
    "a": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    "correct": 1
  },
  {
    "q": "The human skeleton is made up of —",
    "a": [
      "Cartilage only",
      "Bones only",
      "Bones and cartilage",
      "Muscle"
    ],
    "correct": 2
  },
  {
    "q": "The human skeleton has —",
    "a": [
      "206 bones",
      "205 bones",
      "210 bones",
      "201 bones"
    ],
    "correct": 0
  },
  {
    "q": "Red blood cells are responsible for —",
    "a": [
      "Fighting infection",
      "Carrying oxygen",
      "Clotting",
      "Producing hormones"
    ],
    "correct": 1
  },
  {
    "q": "White blood cells help in —",
    "a": [
      "Transporting oxygen",
      "Fighting infection",
      "Clotting blood",
      "Producing enzymes"
    ],
    "correct": 1
  },
  {
    "q": "Platelets help in —",
    "a": [
      "Blood clotting",
      "Fighting infection",
      "Oxygen transport",
      "Hormone production"
    ],
    "correct": 0
  },
  {
    "q": "The largest organ in the human body is —",
    "a": [
      "Heart",
      "Skin",
      "Liver",
      "Kidney"
    ],
    "correct": 1
  },
  {
    "q": "Which organ is responsible for filtering blood in humans?",
    "a": [
      "Liver",
      "Kidney",
      "Heart",
      "Lungs"
    ],
    "correct": 1
  },
  {
    "q": "The functional unit of the kidney is —",
    "a": [
      "Neuron",
      "Nephron",
      "Alveoli",
      "Villus"
    ],
    "correct": 1
  },
  {
    "q": "The main excretory product in humans is —",
    "a": [
      "Ammonia",
      "Urea",
      "Uric acid",
      "Water"
    ],
    "correct": 1
  },
  {
    "q": "Human heart has how many chambers?",
    "a": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correct": 2
  },
  {
    "q": "The organ that controls body coordination is —",
    "a": [
      "Cerebrum",
      "Medulla oblongata",
      "Cerebellum",
      "Hypothalamus"
    ],
    "correct": 2
  },
  {
    "q": "The site of fertilization in humans is —",
    "a": [
      "Ovary",
      "Uterus",
      "Fallopian tube",
      "Vagina"
    ],
    "correct": 2
  },
  {
    "q": "Which blood group is called universal donor?",
    "a": [
      "A",
      "B",
      "AB",
      "O"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following is an endocrine gland?",
    "a": [
      "Sweat gland",
      "Pituitary gland",
      "Salivary gland",
      "Sebaceous gland"
    ],
    "correct": 1
  },
  {
    "q": "Which organ produces insulin?",
    "a": [
      "Liver",
      "Pancreas",
      "Kidney",
      "Heart"
    ],
    "correct": 1
  },
  {
    "q": "The part of neuron which transmits impulses away from cell body is —",
    "a": [
      "Dendrite",
      "Axon",
      "Synapse",
      "Nucleus"
    ],
    "correct": 1
  },
  {
    "q": "The part of neuron which receives impulses is —",
    "a": [
      "Axon",
      "Dendrite",
      "Synapse",
      "Cell body"
    ],
    "correct": 1
  },
  {
    "q": "Which part of the brain controls breathing?",
    "a": [
      "Cerebrum",
      "Cerebellum",
      "Medulla oblongata",
      "Hypothalamus"
    ],
    "correct": 2
  },
  {
    "q": "The functional unit of the lung is —",
    "a": [
      "Bronchi",
      "Alveoli",
      "Trachea",
      "Diaphragm"
    ],
    "correct": 1
  },
  {
    "q": "Which vitamin is essential for blood clotting?",
    "a": [
      "Vitamin A",
      "Vitamin D",
      "Vitamin K",
      "Vitamin C"
    ],
    "correct": 2
  },
  {
    "q": "Which of these diseases is caused by a virus?",
    "a": [
      "Tuberculosis",
      "Influenza",
      "Cholera",
      "Typhoid"
    ],
    "correct": 1
  },
  {
    "q": "The largest part of the human brain is —",
    "a": [
      "Cerebellum",
      "Medulla",
      "Cerebrum",
      "Pons"
    ],
    "correct": 2
  },
  {
    "q": "Which of these is responsible for transportation of food in plants?",
    "a": [
      "Xylem",
      "Phloem",
      "Stomata",
      "Root hair"
    ],
    "correct": 1
  },
  {
    "q": "The part of plant where gaseous exchange occurs is —",
    "a": [
      "Stomata",
      "Root hair",
      "Xylem",
      "Phloem"
    ],
    "correct": 0
  },
  {
    "q": "Which part of the plant anchors it to the soil?",
    "a": [
      "Stem",
      "Root",
      "Leaf",
      "Flower"
    ],
    "correct": 1
  },
  {
    "q": "The male reproductive part of a flower is —",
    "a": [
      "Pistil",
      "Stamen",
      "Sepal",
      "Petal"
    ],
    "correct": 1
  },
  {
    "q": "Which is not a part of human digestive system?",
    "a": [
      "Stomach",
      "Liver",
      "Kidney",
      "Small intestine"
    ],
    "correct": 2
  },
  {
    "q": "The functional unit of the liver is —",
    "a": [
      "Nephron",
      "Lobule",
      "Alveolus",
      "Neuron"
    ],
    "correct": 1
  },
  {
    "q": "The process of water movement from roots to leaves is called —",
    "a": [
      "Osmosis",
      "Transpiration",
      "Photosynthesis",
      "Respiration"
    ],
    "correct": 1
  },
  {
    "q": "Which vitamin is synthesized by skin in sunlight?",
    "a": [
      "Vitamin A",
      "Vitamin B",
      "Vitamin D",
      "Vitamin K"
    ],
    "correct": 2
  },
  {
    "q": "Which blood vessel carries oxygenated blood from lungs to heart?",
    "a": [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Vena cava"
    ],
    "correct": 1
  },
  {
    "q": "The largest gland in the human body is —",
    "a": [
      "Pancreas",
      "Liver",
      "Thyroid",
      "Adrenal"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is a structural protein?",
    "a": [
      "Hemoglobin",
      "Collagen",
      "Insulin",
      "Myosin"
    ],
    "correct": 1
  },
  {
    "q": "The male gamete in humans is —",
    "a": [
      "Ovum",
      "Sperm",
      "Zygote",
      "Egg"
    ],
    "correct": 1
  },
  {
    "q": "The female gamete in humans is —",
    "a": [
      "Ovum",
      "Sperm",
      "Zygote",
      "Testes"
    ],
    "correct": 0
  },
  {
    "q": "Which organ controls hormones in the body?",
    "a": [
      "Heart",
      "Brain",
      "Endocrine glands",
      "Liver"
    ],
    "correct": 2
  },
  {
    "q": "The main component of cell wall in plants is —",
    "a": [
      "Chitin",
      "Cellulose",
      "Protein",
      "Lipid"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is not a part of plant tissue?",
    "a": [
      "Parenchyma",
      "Collenchyma",
      "Xylem",
      "Cartilage"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following is a nitrogenous waste in humans?",
    "a": [
      "Urea",
      "Glucose",
      "Amino acid",
      "Fat"
    ],
    "correct": 0
  },
  {
    "q": "Photosynthesis occurs in —",
    "a": [
      "Chloroplast",
      "Mitochondria",
      "Nucleus",
      "Ribosome"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is a blood clotting protein?",
    "a": [
      "Fibrinogen",
      "Hemoglobin",
      "Insulin",
      "Keratin"
    ],
    "correct": 0
  },
  {
    "q": "The process by which plants lose water is —",
    "a": [
      "Translocation",
      "Transpiration",
      "Photosynthesis",
      "Respiration"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is a component of plasma?",
    "a": [
      "RBC",
      "WBC",
      "Water and proteins",
      "Platelets"
    ],
    "correct": 2
  },
  {
    "q": "Which tissue connects muscles to bones?",
    "a": [
      "Ligament",
      "Tendon",
      "Cartilage",
      "Epithelium"
    ],
    "correct": 1
  },
  {
    "q": "Which part of the brain regulates body temperature?",
    "a": [
      "Cerebrum",
      "Hypothalamus",
      "Cerebellum",
      "Medulla"
    ],
    "correct": 1
  },
  {
    "q": "Which hormone regulates sugar in blood?",
    "a": [
      "Insulin",
      "Adrenaline",
      "Thyroxine",
      "Testosterone"
    ],
    "correct": 0
  },
  {
    "q": "The part of neuron that connects two neurons is called —",
    "a": [
      "Dendrite",
      "Axon",
      "Synapse",
      "Soma"
    ],
    "correct": 2
  },
  {
    "q": "The main function of ribosome is —",
    "a": [
      "Protein synthesis",
      "Energy production",
      "Transport",
      "Digestion"
    ],
    "correct": 0
  },
  {
    "q": "The main site of nutrient absorption in humans is —",
    "a": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Liver"
    ],
    "correct": 1
  },
  {
    "q": "Which part of brain controls voluntary movements?",
    "a": [
      "Cerebellum",
      "Cerebrum",
      "Medulla",
      "Pons"
    ],
    "correct": 1
  },
  {
    "q": "The main function of xylem is —",
    "a": [
      "Transport of food",
      "Transport of water",
      "Photosynthesis",
      "Respiration"
    ],
    "correct": 1
  },
  {
    "q": "The main function of phloem is —",
    "a": [
      "Transport of food",
      "Transport of water",
      "Photosynthesis",
      "Respiration"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is a characteristic of living organisms?",
    "a": [
      "Respiration",
      "Growth",
      "Reproduction",
      "All of the above"
    ],
    "correct": 3
  },
  {
    "q": "Atomic number of hydrogen is —",
    "a": [
      "1",
      "2",
      "0",
      "8"
    ],
    "correct": 0
  },
  {
    "q": "The chemical formula of water is —",
    "a": [
      "H2O",
      "H2O2",
      "CO2",
      "OH"
    ],
    "correct": 0
  },
  {
    "q": "The pH of pure water is —",
    "a": [
      "5",
      "7",
      "9",
      "1"
    ],
    "correct": 1
  },
  {
    "q": "Which gas is used in the preparation of ammonia by Haber process?",
    "a": [
      "Oxygen",
      "Hydrogen",
      "Nitrogen",
      "Carbon dioxide"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is an alkali metal?",
    "a": [
      "Sodium",
      "Magnesium",
      "Aluminium",
      "Iron"
    ],
    "correct": 0
  },
  {
    "q": "Common salt is —",
    "a": [
      "NaCl",
      "KCl",
      "CaCl2",
      "Na2SO4"
    ],
    "correct": 0
  },
  {
    "q": "HCl is —",
    "a": [
      "Acidic",
      "Basic",
      "Neutral",
      "None"
    ],
    "correct": 0
  },
  {
    "q": "NaOH is —",
    "a": [
      "Acid",
      "Base",
      "Salt",
      "None"
    ],
    "correct": 1
  },
  {
    "q": "The atomic number represents —",
    "a": [
      "Number of neutrons",
      "Number of protons",
      "Mass of atom",
      "Number of electrons"
    ],
    "correct": 1
  },
  {
    "q": "The chemical symbol for gold is —",
    "a": [
      "Go",
      "Au",
      "Ag",
      "Ga"
    ],
    "correct": 1
  },
  {
    "q": "Which gas is liberated when hydrochloric acid reacts with zinc?",
    "a": [
      "Oxygen",
      "Hydrogen",
      "Carbon dioxide",
      "Nitrogen"
    ],
    "correct": 1
  },
  {
    "q": "NaCl dissolves in water due to —",
    "a": [
      "Covalent bond",
      "Ionic bond",
      "Metallic bond",
      "Hydrogen bond"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is not a noble gas?",
    "a": [
      "Helium",
      "Neon",
      "Argon",
      "Nitrogen"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following is used in making fertilizers?",
    "a": [
      "H2SO4",
      "NH3",
      "NaOH",
      "HCl"
    ],
    "correct": 1
  },
  {
    "q": "The chemical formula of methane is —",
    "a": [
      "CH4",
      "C2H6",
      "C2H4",
      "CH3OH"
    ],
    "correct": 0
  },
  {
    "q": "Which acid is present in vinegar?",
    "a": [
      "Acetic acid",
      "Citric acid",
      "Sulphuric acid",
      "Hydrochloric acid"
    ],
    "correct": 0
  },
  {
    "q": "Baking soda is —",
    "a": [
      "NaHCO3",
      "NaOH",
      "Na2CO3",
      "KOH"
    ],
    "correct": 0
  },
  {
    "q": "Water of crystallization is —",
    "a": [
      "H2O present in salts",
      "Free water",
      "Acidic water",
      "None"
    ],
    "correct": 0
  },
  {
    "q": "Which is a halogen?",
    "a": [
      "Oxygen",
      "Chlorine",
      "Nitrogen",
      "Carbon"
    ],
    "correct": 1
  },
  {
    "q": "The atomic mass of an element is —",
    "a": [
      "Number of protons",
      "Number of neutrons",
      "Sum of protons and neutrons",
      "Number of electrons"
    ],
    "correct": 2
  },
  {
    "q": "The valency of oxygen is —",
    "a": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1
  },
  {
    "q": "Which is used in making antiseptics?",
    "a": [
      "NaCl",
      "KMnO4",
      "HCl",
      "NH3"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is a chemical change?",
    "a": [
      "Melting of ice",
      "Burning of paper",
      "Dissolving sugar in water",
      "Boiling of water"
    ],
    "correct": 1
  },
  {
    "q": "Which is a physical change?",
    "a": [
      "Rusting of iron",
      "Boiling of water",
      "Burning of wood",
      "Cooking of food"
    ],
    "correct": 1
  },
  {
    "q": "Which is the strongest acid?",
    "a": [
      "HCl",
      "H2SO4",
      "HNO3",
      "HF"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is used in making soap?",
    "a": [
      "Sodium chloride",
      "Sodium hydroxide",
      "Sodium carbonate",
      "Sodium nitrate"
    ],
    "correct": 1
  },
  {
    "q": "The gas given out when metals react with acid is —",
    "a": [
      "Oxygen",
      "Hydrogen",
      "Carbon dioxide",
      "Nitrogen"
    ],
    "correct": 1
  },
  {
    "q": "Which of these is used as a preservative?",
    "a": [
      "NaCl",
      "KCl",
      "Na2CO3",
      "CaCO3"
    ],
    "correct": 0
  },
  {
    "q": "Which is a diatomic molecule?",
    "a": [
      "H2",
      "CO2",
      "CH4",
      "NaCl"
    ],
    "correct": 0
  },
  {
    "q": "Which of these is a metalloid?",
    "a": [
      "Boron",
      "Aluminium",
      "Sodium",
      "Iron"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is an inert gas?",
    "a": [
      "Nitrogen",
      "Argon",
      "Oxygen",
      "Hydrogen"
    ],
    "correct": 1
  },
  {
    "q": "The formula of common salt is —",
    "a": [
      "Na2SO4",
      "NaCl",
      "KCl",
      "CaCl2"
    ],
    "correct": 1
  },
  {
    "q": "The process of rusting requires —",
    "a": [
      "Water only",
      "Air only",
      "Water and air",
      "Neither water nor air"
    ],
    "correct": 2
  },
  {
    "q": "Which element is used in making thermite?",
    "a": [
      "Aluminium",
      "Iron",
      "Magnesium",
      "Zinc"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is a carbohydrate?",
    "a": [
      "Glucose",
      "Protein",
      "Fat",
      "Vitamin"
    ],
    "correct": 0
  },
  {
    "q": "Which of these is an organic compound?",
    "a": [
      "H2O",
      "NaCl",
      "CH4",
      "O2"
    ],
    "correct": 2
  },
  {
    "q": "Which is used as a fuel?",
    "a": [
      "NaCl",
      "CO2",
      "C2H6",
      "H2O"
    ],
    "correct": 2
  },
  {
    "q": "Which of these is an example of an acid-base indicator?",
    "a": [
      "Litmus",
      "NaCl",
      "H2O",
      "CO2"
    ],
    "correct": 0
  },
  {
    "q": "The chemical formula of table sugar is —",
    "a": [
      "C6H12O6",
      "C12H22O11",
      "C2H5OH",
      "CH3COOH"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is an oxide?",
    "a": [
      "CO2",
      "H2O",
      "NaCl",
      "CH4"
    ],
    "correct": 0
  },
  {
    "q": "Which gas is liberated when sodium reacts with water?",
    "a": [
      "Oxygen",
      "Hydrogen",
      "Carbon dioxide",
      "Nitrogen"
    ],
    "correct": 1
  },
  {
    "q": "Which acid is present in lemon?",
    "a": [
      "Hydrochloric acid",
      "Citric acid",
      "Acetic acid",
      "Sulphuric acid"
    ],
    "correct": 1
  },
  {
    "q": "Which of these is used in making batteries?",
    "a": [
      "Zn",
      "NaCl",
      "C2H6",
      "H2O"
    ],
    "correct": 0
  },
  {
    "q": "Which of these is not an element?",
    "a": [
      "Oxygen",
      "Hydrogen",
      "Water",
      "Nitrogen"
    ],
    "correct": 2
  },
  {
    "q": "The atomic number of carbon is —",
    "a": [
      "6",
      "12",
      "14",
      "8"
    ],
    "correct": 0
  },
  {
    "q": "The SI unit of force is —",
    "a": [
      "Joule",
      "Newton",
      "Pascal",
      "Watt"
    ],
    "correct": 1
  },
  {
    "q": "Acceleration is defined as —",
    "a": [
      "Change in velocity per unit time",
      "Change in force per unit mass",
      "Change in distance per unit time",
      "Change in energy per unit time"
    ],
    "correct": 0
  },
  {
    "q": "The formula for speed is —",
    "a": [
      "Distance × Time",
      "Distance ÷ Time",
      "Mass × Acceleration",
      "Force ÷ Area"
    ],
    "correct": 1
  },
  {
    "q": "The weight of an object depends on —",
    "a": [
      "Mass only",
      "Acceleration due to gravity only",
      "Both mass and gravity",
      "Volume only"
    ],
    "correct": 2
  },
  {
    "q": "The acceleration due to gravity on Earth is approximately —",
    "a": [
      "9.8 m/s²",
      "10 m/s²",
      "8.9 m/s²",
      "12 m/s²"
    ],
    "correct": 0
  },
  {
    "q": "The SI unit of energy is —",
    "a": [
      "Newton",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "correct": 1
  },
  {
    "q": "Power is defined as —",
    "a": [
      "Work × Time",
      "Work ÷ Time",
      "Force × Distance",
      "Mass × Acceleration"
    ],
    "correct": 1
  },
  {
    "q": "The formula for work is —",
    "a": [
      "Force × Distance",
      "Mass × Acceleration",
      "Force ÷ Distance",
      "Energy × Time"
    ],
    "correct": 0
  },
  {
    "q": "The unit of pressure is —",
    "a": [
      "Pascal",
      "Newton",
      "Joule",
      "Watt"
    ],
    "correct": 0
  },
  {
    "q": "The unit of frequency is —",
    "a": [
      "Hertz",
      "Joule",
      "Newton",
      "Pascal"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is a scalar quantity?",
    "a": [
      "Velocity",
      "Acceleration",
      "Force",
      "Speed"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following is a vector quantity?",
    "a": [
      "Speed",
      "Distance",
      "Velocity",
      "Time"
    ],
    "correct": 2
  },
  {
    "q": "The work done when a force moves an object through a distance of 1 meter is 10 N is —",
    "a": [
      "1 J",
      "10 J",
      "100 J",
      "0 J"
    ],
    "correct": 1
  },
  {
    "q": "A freely falling body accelerates due to —",
    "a": [
      "Magnetic force",
      "Gravitational force",
      "Electrostatic force",
      "Friction"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is an example of potential energy?",
    "a": [
      "Moving car",
      "Stretched spring",
      "Flowing water",
      "Running man"
    ],
    "correct": 1
  },
  {
    "q": "Kinetic energy of an object depends on —",
    "a": [
      "Mass and velocity",
      "Mass only",
      "Velocity only",
      "Force only"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is a conductor of electricity?",
    "a": [
      "Wood",
      "Copper",
      "Plastic",
      "Rubber"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is an insulator?",
    "a": [
      "Aluminium",
      "Copper",
      "Glass",
      "Iron"
    ],
    "correct": 2
  },
  {
    "q": "Ohm’s law states —",
    "a": [
      "V = IR",
      "P = VI",
      "F = ma",
      "E = mc²"
    ],
    "correct": 0
  },
  {
    "q": "The unit of electric current is —",
    "a": [
      "Volt",
      "Ampere",
      "Ohm",
      "Joule"
    ],
    "correct": 1
  },
  {
    "q": "The unit of electric charge is —",
    "a": [
      "Coulomb",
      "Ampere",
      "Volt",
      "Ohm"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is used to measure electric current?",
    "a": [
      "Voltmeter",
      "Ammeter",
      "Ohmmeter",
      "Galvanometer"
    ],
    "correct": 1
  },
  {
    "q": "Which of these is a magnetic material?",
    "a": [
      "Aluminium",
      "Iron",
      "Copper",
      "Silver"
    ],
    "correct": 1
  },
  {
    "q": "The distance travelled in one second by light in vacuum is approximately —",
    "a": [
      "3 × 10⁸ m",
      "3 × 10⁵ km",
      "3 × 10³ m",
      "3 × 10⁶ km"
    ],
    "correct": 0
  },
  {
    "q": "The SI unit of wavelength is —",
    "a": [
      "Metre",
      "Second",
      "Hertz",
      "Newton"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is a longitudinal wave?",
    "a": [
      "Sound wave",
      "Light wave",
      "Radio wave",
      "X-ray"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is a transverse wave?",
    "a": [
      "Sound wave",
      "Water wave",
      "Seismic P-wave",
      "Pressure wave"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following remains constant in uniform motion?",
    "a": [
      "Velocity",
      "Acceleration",
      "Force",
      "Speed"
    ],
    "correct": 3
  },
  {
    "q": "Momentum of a body depends on —",
    "a": [
      "Mass and velocity",
      "Mass only",
      "Velocity only",
      "Acceleration only"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is a non-contact force?",
    "a": [
      "Friction",
      "Gravity",
      "Tension",
      "Normal force"
    ],
    "correct": 1
  },
  {
    "q": "The SI unit of work is —",
    "a": [
      "Watt",
      "Joule",
      "Newton",
      "Pascal"
    ],
    "correct": 1
  },
  {
    "q": "The SI unit of power is —",
    "a": [
      "Joule",
      "Watt",
      "Newton",
      "Volt"
    ],
    "correct": 1
  },
  {
    "q": "The slope of a distance-time graph gives —",
    "a": [
      "Speed",
      "Acceleration",
      "Force",
      "Work"
    ],
    "correct": 0
  },
  {
    "q": "The slope of a velocity-time graph gives —",
    "a": [
      "Acceleration",
      "Speed",
      "Force",
      "Displacement"
    ],
    "correct": 0
  },
  {
    "q": "Which law states “for every action there is an equal and opposite reaction”?",
    "a": [
      "Newton’s 1st Law",
      "Newton’s 2nd Law",
      "Newton’s 3rd Law",
      "Law of Gravitation"
    ],
    "correct": 2
  },
  {
    "q": "The universal law of gravitation was given by —",
    "a": [
      "Newton",
      "Einstein",
      "Galileo",
      "Kepler"
    ],
    "correct": 0
  },
  {
    "q": "The acceleration of an object moving in a circle at constant speed is called —",
    "a": [
      "Tangential acceleration",
      "Centripetal acceleration",
      "Gravitational acceleration",
      "Linear acceleration"
    ],
    "correct": 1
  },
  {
    "q": "Light travels fastest in —",
    "a": [
      "Air",
      "Water",
      "Vacuum",
      "Glass"
    ],
    "correct": 2
  },
  {
    "q": "Reflection of light follows —",
    "a": [
      "Snell’s law",
      "Law of reflection",
      "Newton’s law",
      "Ohm’s law"
    ],
    "correct": 1
  },
  {
    "q": "Refraction occurs due to —",
    "a": [
      "Change in speed of light",
      "Change in direction only",
      "Absorption",
      "Reflection"
    ],
    "correct": 0
  },
  {
    "q": "The bending of light around corners is called —",
    "a": [
      "Reflection",
      "Refraction",
      "Diffraction",
      "Dispersion"
    ],
    "correct": 2
  },
  {
    "q": "The color of sky is due to —",
    "a": [
      "Reflection",
      "Scattering",
      "Refraction",
      "Diffraction"
    ],
    "correct": 1
  },
  {
    "q": "The SI unit of electric potential is —",
    "a": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
    ],
    "correct": 0
  },
  {
    "q": "The SI unit of capacitance is —",
    "a": [
      "Farad",
      "Henry",
      "Ohm",
      "Joule"
    ],
    "correct": 0
  },
  {
    "q": "The resistance of a conductor depends on —",
    "a": [
      "Length, area, resistivity",
      "Mass only",
      "Voltage only",
      "Current only"
    ],
    "correct": 0
  }
];