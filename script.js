// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const aboutMeSection = document.querySelector('#about-me');
    
    function handleScroll() {
        // about-me 섹션의 위치를 가져옵니다.
        const sectionTop = aboutMeSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight && sectionTop > 0) {
            // about-me 섹션이 화면에 보일 때
            navbar.classList.add('scrolled-bg');
            navbar.classList.remove('default-bg');
        }
    }

    // 스크롤 이벤트에 핸들러를 추가합니다.
    window.addEventListener('scroll', handleScroll);

    // 페이지 로드 시 초기화
    handleScroll();
});
