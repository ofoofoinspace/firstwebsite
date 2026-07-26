

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
        
        // 기존에 설정한 아이보리 반투명 배경 및 십자선 커서 유지
        lightbox.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(242,242,242,0.85); z-index:9999; display:flex; justify-content:center; align-items:center; cursor:crosshair;';
        
        var img = document.createElement('img');
        img.id = 'portfolio-lightbox-img';
        img.style.cssText = 'max-width:90%; max-height:90vh; box-shadow:0 10px 30px rgba(0,0,0,0.5);';
        
        // 이미지 드래그 무단 저장 방지
        img.ondragstart = function() { return false; };
        
        // 💡 창을 닫는 공통 함수 생성 (스크롤 복구 포함)
        var closeViewer = function(event) {
            if (event) event.preventDefault(); // 우클릭 시 기본 팝업 메뉴가 뜨는 것을 차단
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // 배경 스크롤 다시 활성화
            return false; // 추가적인 기본 동작 방지
        };
        
        // 💡 마우스 좌클릭 시 닫기 함수 실행
        lightbox.onclick = closeViewer;
        
        // 💡 마우스 우클릭 시 닫기 함수 실행 (배경이나 이미지를 우클릭했을 때 모두 작동)
        lightbox.oncontextmenu = closeViewer;
        img.oncontextmenu = closeViewer;
        
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
    }
    
    document.getElementById('portfolio-lightbox-img').src = imgUrl;
    lightbox.style.display = 'flex';
    
    // 라이트박스가 열릴 때 원래 웹사이트 배경 스크롤 차단
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



