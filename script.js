const ivData = [
    {
        id: 1,
        name: "生理食鹽水 (0.9% NS)",
        engName: "Normal Saline 0.9%",
        brand: "大塚諾沙林 (Norm-Saline)",
        generic: "Sodium Chloride 0.9%",
        category: "電解質",
        ingredients: "每100ml含 Sodium Chloride 0.9g",
        indications: "水分補給、細胞外液缺乏時之補充、電解質失調、藥物稀釋液。",
        image: "https://via.placeholder.com/300x200/e0f7fa/005a8d?text=0.9%+Normal+Saline"
    },
    {
        id: 2,
        name: "5% 葡萄糖注射液 (D5W)",
        engName: "5% Dextrose in Water",
        brand: "大塚滴滋樂 (Dextrose 5%)",
        generic: "Glucose (Dextrose) 5%",
        category: "醣類",
        ingredients: "每100ml含 Dextrose 5g (提供約17大卡熱量)",
        indications: "水分補給、熱能補充、脫水症狀。",
        image: "https://via.placeholder.com/300x200/fff9c4/fbc02d?text=D5W"
    },
    {
        id: 3,
        name: "乳酸林格爾氏液 (LR)",
        engName: "Lactated Ringer's Solution",
        brand: "信東乳酸林格爾注射液",
        generic: "Compound Sodium Lactate",
        category: "電解質",
        ingredients: "含 NaCl, KCl, CaCl2, Sodium Lactate",
        indications: "手術中失血、燒燙傷補充、代謝性酸中毒之補充、循環血液量減少。",
        image: "https://via.placeholder.com/300x200/e8f5e9/2e7d32?text=Lactated+Ringers"
    },
    {
        id: 4,
        name: "台大三號注射液 (Taita No.3)",
        engName: "Taita No.3 Injection",
        brand: "大塚台大三號 (Taita No.3)",
        generic: "Multiple Electrolytes with 2% Glucose",
        category: "綜合",
        ingredients: "Na 75, Cl 61, K 12, Acetate 20 (mEq/L), Glucose 2%",
        indications: "等張性下痢、水份及電解質維持補充、小兒科常用維持液。",
        image: "https://via.placeholder.com/300x200/f3e5f5/7b1fa2?text=Taita+No.3"
    },
    {
        id: 5,
        name: "台大五號注射液 (Taita No.5)",
        engName: "Taita No.5 Injection",
        brand: "大塚台大五號 (Taita No.5)",
        generic: "Multiple Electrolytes with 10% Glucose",
        category: "綜合",
        ingredients: "Na 36, K 18, Cl 17, Acetate 28, Phosphate 12, Glucose 10%",
        indications: "手術前後、無法進食者之水分與高熱量電解質補充、低磷血症補給。",
        image: "https://via.placeholder.com/300x200/ffebee/c62828?text=Taita+No.5"
    },
    {
        id: 6,
        name: "半張食鹽水 (0.45% NaCl)",
        engName: "Half Normal Saline",
        brand: "信東 0.45% 氯化鈉",
        generic: "Sodium Chloride 0.45%",
        category: "電解質",
        ingredients: "每100ml含 Sodium Chloride 0.45g",
        indications: "高張性脫水補充水分、評估腎功能、治療高滲透壓性糖尿病。",
        image: "https://via.placeholder.com/300x200/f4f7f6/607d8b?text=0.45%+Saline"
    }
];

const grid = document.getElementById('iv-grid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-buttons .btn');
const modal = document.getElementById('modal');
const modalDetail = document.getElementById('modal-detail');
const closeBtn = document.querySelector('.close-btn');

// 初始化渲染
function renderCards(data) {
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => showDetail(item);
        card.innerHTML = `
            <div class="card-img"><img src="${item.image}" alt="${item.name}"></div>
            <div class="card-content">
                <span class="tag">${item.category}</span>
                <h3>${item.name}</h3>
                <p><strong>英文：</strong>${item.engName}</p>
                <p><strong>商品名：</strong>${item.brand.split('(')[0]}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 顯示詳細資訊
function showDetail(item) {
    modalDetail.innerHTML = `
        <h2 style="color:var(--primary-color)">${item.name}</h2>
        <p><strong>英文名稱：</strong>${item.engName}</p>
        <p><strong>商品名：</strong>${item.brand}</p>
        <p><strong>學名成分：</strong>${item.generic}</p>
        <hr>
        <p><strong>詳細成分組成：</strong><br>${item.ingredients}</p>
        <p><strong>適應症：</strong><br>${item.indications}</p>
        <div style="text-align:center; margin-top:20px;">
            <img src="${item.image}" style="max-width:100%; border-radius:10px;">
        </div>
    `;
    modal.style.display = 'block';
}

// 搜尋功能
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = ivData.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.engName.toLowerCase().includes(term) ||
        item.brand.toLowerCase().includes(term) ||
        item.indications.includes(term)
    );
    renderCards(filtered);
});

// 篩選功能
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-filter');
        const filtered = category === 'all' ? ivData : ivData.filter(item => item.category === category);
        renderCards(filtered);
    });
});

// Modal 關閉邏輯
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

// 初次載入
renderCards(ivData);
