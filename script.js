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