var doc = document;
(function() {
    var getL = doc.getElementsByTagName('a');
    for(var i = 0; i < getL.length; i++) {
        getL[i].addEventListener('click', function(e) {
            if(e.target.hasAttribute('data-target', 'not')) {
                e.preventDefault();
            }
        }, false)
    }
}());
(function() {
    var getDesign = doc.getElementById('open-design');
    var getOpen = doc.getElementsByClassName('web-design');
    getDesign.addEventListener('click', function(e) {
        for(var i = 0; i < getOpen.length; i++) {
                getOpen[i].className += ' open-work'; 
        }
    }, false);
    
    var getClose = doc.getElementById('close');
    getClose.addEventListener('click', function(e) {
        for(var j = 0; j < getOpen.length; j++) {
                getOpen[j].className = 'web-design';
        }
    }, false);  
}());
(function() {
    var getDev = doc.getElementById('link-develop');
    var getCircle = doc.getElementById('main-circle');
    var getRomb = doc.getElementById('main-romb');
    var getSev = doc.getElementsByClassName('several-circle');
    var getBack = doc.getElementById('back');
    getDev.addEventListener('click', function(e) {
            getCircle.classList.add('open-circle');
            getRomb.classList.add('hidden-romb');
            for(var i = 0; i < getSev.length; i++) {
                getSev[i].classList.add('open-several-circle');
            }
    }, false);
    getBack.addEventListener('click', function(e) {
        getCircle.classList.remove('open-circle');
        getRomb.classList.remove('hidden-romb');
        for(var i = 0; i < getSev.length; i++) {
                getSev[i].classList.remove('open-several-circle');
            }
    }, false);
}());














