const IV_DATABASE = [
    {
        "id": 1,
        "brand": "諾沙林 (Norm Saline)",
        "generic": "Sodium Chloride 0.9%",
        "name": "生理食鹽水 (N/S)",
        "categories": [
            "電解質",
            "等張"
        ],
        "ingredients": "Sodium Chloride 0.9g / 100mL",
        "electrolytes": "Na+ 154, Cl- 154 mEq/L",
        "image": "",
        "indications": "水分補給、細胞外液缺乏、電解質失調、洗滌傷口、藥物稀釋。",
        "precaution": "心臟病、高血壓、腎功能不全者需慎用，避免鈉離子過載。"
    },
    {
        "id": 2,
        "brand": "滴滋樂 (Dextrose 5%)",
        "generic": "Glucose (Dextrose) 5%",
        "name": "5% 葡萄糖注射液 (D5W/G5W)",
        "categories": [],
        "ingredients": "Dextrose 5g / 100mL ",
        "electrolytes": "-",
        "image": "",
        "indications": "脫水症狀、水分補給、熱能補充、高鉀血症緊急處理。",
        "precaution": "糖尿病患者、顱內壓增高者慎用。"
    },
    {
        "id": 3,
        "brand": "福多命安",
        "generic": "Sodium Lactate",
        "name": "乳酸林格爾氏液 (L/R)",
        "categories": [],
        "ingredients": "Na+ 130, K+ 4, Ca2+ 3, Cl- 109, Lactate 28 (mEq/L)",
        "electrolytes": "Na+ 130, K+ 4, Ca2+ 3, Cl- 109",
        "image": "",
        "indications": "手術失血補充、燒傷脫水、代謝性酸中毒之糾正。",
        "precaution": "肝功能受損（無法代謝乳酸）或腎衰竭者慎用。"
    },
    {
        "id": 4,
        "name": "台大一號 (Taita No.1)",
        "engName": "Taita No.1 Injection",
        "brand": "大塚台大一號",
        "category": "綜合",
        "ingredients": "Na+ 25, K+ 20, Cl- 22, Acetate 23 (mEq/L), Glucose 5%",
        "indications": "水份、熱量、電解質維持液。常用於維持基本生理需求。",
        "precaution": "含有鉀離子，無尿或少尿患者禁用。",
        "image": "https://via.placeholder.com/300x200?text=Taita+No.1"
    },
    {
        "id": 5,
        "name": "台大三號 (Taita No.3)",
        "engName": "Taita No.3 Injection",
        "brand": "大塚台大三號",
        "category": "綜合",
        "ingredients": "Na+ 75, K+ 12, Cl- 61, Acetate 20 (mEq/L), Glucose 2%",
        "indications": "常見於小兒科、等張性脫水、下痢引起之電解質流失。",
        "precaution": "需注意輸注速度，避免血糖波動。",
        "image": "https://via.placeholder.com/300x200?text=Taita+No.3"
    },
    {
        "id": 6,
        "name": "葡萄糖生理食鹽水 (D5NS)",
        "engName": "5% Dextrose in 0.9% NaCl",
        "brand": "信東 D5NS",
        "category": "綜合",
        "ingredients": "NaCl 0.9g + Glucose 5g / 100mL",
        "indications": "水分及鹽分缺乏、提供基礎熱量、手術前後補充。",
        "precaution": "高滲透壓，輸注速度過快可能導致靜脈炎。",
        "image": "https://via.placeholder.com/300x200?text=D5NS"
    },
    {
        "id": 7,
        "name": "半張葡萄糖食鹽水 (D5 1/2NS)",
        "engName": "5% Dextrose in 0.45% NaCl",
        "brand": "信東 D5 1/2NS",
        "category": "綜合",
        "ingredients": "NaCl 0.45g + Glucose 5g / 100mL",
        "indications": "最常見的住院維持液，提供水分、鈉離子與基礎熱量。",
        "precaution": "注意長期施打造成低血鉀，必要時需額外添加 KCl。",
        "image": "https://via.placeholder.com/300x200?text=D5+1/2+NS"
    },
    {
        "id": 8,
        "name": "10% 葡萄糖注射液 (D10W)",
        "engName": "10% Dextrose in Water",
        "brand": "大塚滴滋樂 10%",
        "category": "醣類",
        "ingredients": "Glucose 10g / 100mL (熱量：340 kcal/L)",
        "indications": "低血糖緊急救治、新生兒低血糖、嚴重肝損害。",
        "precaution": "屬於高張溶液，需觀察血管刺激性，嚴禁快速大量推注。",
        "image": "https://via.placeholder.com/300x200?text=D10W"
    },
    {
        "id": 9,
        "name": "甘露醇 (Mannitol)",
        "engName": "Mannitol 20% Injection",
        "brand": "信東邁力脫",
        "category": "特殊",
        "ingredients": "Mannitol 20g / 100mL",
        "indications": "降低顱內壓、降低眼壓、預防急性腎衰竭（滲透性利尿）。",
        "precaution": "禁止用於活動性顱內出血（除非手術）、嚴重脫水或心臟衰竭者。",
        "image": "https://via.placeholder.com/300x200?text=Mannitol"
    },
    {
        "id": 10,
        "name": "胺基酸注射液 (Aminosol)",
        "engName": "Amino Acids 10%",
        "brand": "大塚胺諾命",
        "category": "營養",
        "ingredients": "含 15-20 種人體必需與非必需胺基酸",
        "indications": "蛋白質攝取不足、營養不良、手術後蛋白質補給。",
        "precaution": "嚴重肝、腎衰竭引起之高氮血症患者慎用。",
        "image": "https://via.placeholder.com/300x200?text=Amino+Acids"
    }
];
