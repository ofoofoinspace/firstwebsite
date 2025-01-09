

function toggleMenu() {
        var menu = document.getElementById("menu");
      // 메뉴가 보이면 숨기고, 숨겨져 있으면 보이게 함
        if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
        menu.style.display = "block";
        }
}



const image = document.getElementById('main');

image.addEventListener('contextmenu', function(event) {
    event.preventDefault(); 
});



function filterImages(category) {
    const images = document.querySelectorAll('.overview');
    
    if (category === 'all') {
        images.forEach(image => {
            image.classList.remove('faint');
            image.classList.add('show');
        });
    } else {
        images.forEach(image => {
            if (image.classList.contains(category)) {
                image.classList.add('show');
                image.classList.remove('faint');
            } else {
                image.classList.add('faint');
                image.classList.remove('show');
            }
        });
    }
}

// 초기 상태에서는 모든 이미지가 보이도록 설정
window.onload = function() {
    filterImages('all');
};




function disableRightClick(event) {
    event.preventDefault();
}

function openImage(url) {
    var newWindow = window.open(url, '_top');
    newWindow.document.addEventListener('contextmenu', disableRightClick);
}


image.addEventListener('contextmenu', function(event) {
    event.preventDefault(); 
});
