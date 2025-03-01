let menIcon = document.querySelector('.m');
let men = document.querySelector('.men');
menIcon.addEventListener('click', function() {
    if (menIcon.classList.contains('fa-bars')) {
        menIcon.classList.remove('fa-bars');
        menIcon.classList.add('fa-xmark');
        men.style.display = 'flex';
    } else {
        menIcon.classList.remove('fa-xmark');
        menIcon.classList.add('fa-bars');
        men.style.display = 'none';
    }
    
});
   
    
