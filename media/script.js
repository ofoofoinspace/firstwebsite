

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

function openImage(imgUrl) {
    var lightbox = document.getElementById('portfolio-lightbox');
    
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'portfolio-lightbox';
        
        lightbox.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(242,242,242,0.85); z-index:9999; display:flex; justify-content:center; align-items:center; cursor:crosshair;';
        
        var img = document.createElement('img');
        img.id = 'portfolio-lightbox-img';
        
        // 💡 핵심 수정: 모바일 브라우저의 터치 팝업 및 텍스트/이미지 선택을 원천 차단하는 CSS 추가
        img.style.cssText = 'max-width:90%; max-height:90vh; box-shadow:0 10px 30px rgba(0,0,0,0.5); -webkit-touch-callout:none; -webkit-user-select:none; user-select:none; -webkit-user-drag:none;';
        
        img.ondragstart = function() { return false; };
        
        var closeViewer = function(event) {
            if (event) event.preventDefault(); 
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; 
            return false; 
        };
        
        lightbox.onclick = closeViewer;
        lightbox.oncontextmenu = closeViewer;
        img.oncontextmenu = closeViewer;
        
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
    }
    
    document.getElementById('portfolio-lightbox-img').src = imgUrl;
    lightbox.style.display = 'flex';
    
    document.body.style.overflow = 'hidden'; 
}


image.addEventListener('contextmenu', function(event) {
    event.preventDefault(); 
});


// 새창 이미지 우클릭 금지
// function openImage(imageSrc) {
//     var imageWindow = window.open('', '_blank');  // 새로운 창 열기
//     imageWindow.document.write('<html><head><title>Image</title></head><body>');
//     imageWindow.document.write('<img src="' + imageSrc + '" oncontextmenu="return false;" />');
//     imageWindow.document.write('</body></html>');
//   }






// window.addEventListener('resize', adjustContentSize);

// function adjustContentSize() {
//     var width = window.innerWidth;
//     var height = window.innerHeight;
    
//     var fontSize = (width / 100) + 'px';  // 화면 너비에 비례한 폰트 크기 설정
    
//     document.body.style.fontSize = fontSize;  // 폰트 크기 동적으로 조정
// }

// adjustContentSize();  // 초기 로드시에도 실행하여 크기 조정








// jquery 테스트
$(document).ready(function(){
    $('#testId').css('background-color','red');
    $('#testId').css('width','150px');
});








// Smooth scrolling for anchor links
$(document).on('click', 'a[href*="#"]:not([href="#"])', function() {
    const pathname = location.pathname.replace(/^\//, '');
    const hostname = location.hostname;
    if (pathname === this.pathname.replace(/^\//, '') && hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top }, 1000);
            return false;
        }
    }
});



// Initialize lazy loading for images with class .lazy
const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    threshold: 750,
});

// Update the lazyLoad instance to capture any dynamically added images
if (lazyLoadInstance) {
    lazyLoadInstance.update();
}

// Caching des Selektors für Infinite Scroll
var $proportional = $('.proportional');



