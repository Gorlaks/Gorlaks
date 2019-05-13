(function() {
    var getIcon = document.getElementById('icon-whatsapp');
    var getPhone = document.getElementById('phone');
    getIcon.addEventListener('click', function(e) {
        if(getPhone.classList == '') {
            getPhone.classList.add('here');
        } else {
            getPhone.classList.remove('here');
        }
    }, false);
}());