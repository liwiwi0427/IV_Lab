document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('ivGrid');
    const searchInput = document.getElementById('mainSearch');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const resultsCount = document.getElementById('resultsCount');
    const modal = document.getElementById('ivModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-modal');

    let currentFilter = 'all';

    // 渲染卡片函數
    function render(filterTerm = '', category = 'all') {
        grid.innerHTML = '';
        const filteredData = IV_DATABASE.filter(item => {
            const matchesSearch = 
                item.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
                item.engName.toLowerCase().includes(filterTerm.toLowerCase()) ||
                item.indications.includes(filterTerm) ||
                item.brand.includes(filterTerm);
            
            const matchesCat = (category === 'all' || item.category === category);
            
            return matchesSearch && matchesCat;
        });

        resultsCount.innerText = `找到 ${filteredData.length} 項點滴資料`;

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'iv-card';
            card.innerHTML = `
                <img src="${item.image}" class="iv-thumb" alt="${item.name}">
                <div class="iv-info">
                    <span class="tag">${item.category}</span>
                    <h3>${item.name}</h3>
                    <small>${item.engName}</small>
                </div>
            `;
            card.addEventListener('click', () => openModal(item));
            grid.appendChild(card);
        });
    }

    // 打開詳情
    function openModal(item) {
        modalContent.innerHTML = `
            <h2 style="color:#2980b9; margin-top:0;">${item.name}</h2>
            <p><strong>英文名稱：</strong>${item.engName}</p>
            <p><strong>商品名稱：</strong>${item.brand}</p>
            <p><strong>學名/成分：</strong><br><span style="color:#e67e22">${item.ingredients}</span></p>
            <hr>
            <p><strong>🩺 適應症：</strong><br>${item.indications}</p>
            <p><strong>⚠️ 注意事項：</strong><br>${item.precaution}</p>
            <div style="text-align:center; margin-top:20px;">
                <img src="${item.image}" style="width:100%; max-width:400px; border-radius:8px;">
            </div>
        `;
        modal.style.display = 'block';
    }

    // 搜尋事件
    searchInput.addEventListener('input', (e) => {
        render(e.target.value, currentFilter);
    });

    // 分類切換
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.cat;
            render(searchInput.value, currentFilter);
        });
    });

    // 關閉 Modal
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; };

    // 初始載入
    render();
});
