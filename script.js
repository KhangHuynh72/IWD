function flipPage(pageId) {
    const page = document.getElementById(pageId);
    page.classList.add('flipped');
    
    // Sau khi lật được một nửa (0.4s), đẩy nó ra sau cùng
    setTimeout(() => {
        page.style.zIndex = "0";
    }, 400);
}

function resetBook(event) {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');

    // Quay lại trang 2 trước
    p2.style.zIndex = "2";
    p2.classList.remove('flipped');
    
    // Sau đó quay lại trang bìa
    setTimeout(() => {
        p1.style.zIndex = "3";
        p1.classList.remove('flipped');
    }, 300);
}

// Hàm tạo hoa rơi
function createFlower() {
    const container = document.getElementById('flower-container');
    const flower = document.createElement('div');
    
    // Các loại hoa/cánh hoa (Emoji cho nhẹ và đẹp)
    const flowers = ['🌸', '🌸', '🌸', '🌺', '🍃', '✨'];
    const type = flowers[Math.floor(Math.random() * flowers.length)];
    
    flower.className = 'flower';
    flower.innerText = type;
    
    // Vị trí xuất hiện ngẫu nhiên theo chiều ngang
    flower.style.left = Math.random() * 100 + 'vw';
    
    // Kích thước ngẫu nhiên
    const size = (Math.random() * 20 + 10) + 'px';
    flower.style.fontSize = size;
    
    // Thời gian rơi ngẫu nhiên (từ 5s đến 10s)
    const duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + 's';
    
    // Độ mờ ngẫu nhiên
    flower.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(flower);

    // Xóa hoa sau khi rơi xong để tránh nặng máy
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Cứ mỗi 300ms tạo ra 1 cánh hoa mới
setInterval(createFlower, 300);