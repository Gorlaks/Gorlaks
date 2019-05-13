$(document).ready(function() {
    $('#button-form').click(function() {
        var name = $('#field-name').val();
        var phone = $('#field-phone').val();
        var email = $('#field-mail').val();
        var message = $('#field-wish').val();
        var fail = "";
        if(name.length < 1) {
            fail = 'В данном поле необходимо ввести хотя бы 1 символ';
        } else if(!phone.match(/(^(\+7|7|8)([0-9]){10}$)|(^([0-9]){7}$)/)) {
            fail = 'Вы ввели некоректный номер телефона';    
        } else if(!email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
            fail = 'Вы ввели некоректный email';
        } else if(message.length < 10) {
            fail = 'Пожалуйста обозначьте проблему или просьбу в строке пожеланий (Должно быть не менее 10 символов)';
        }
        if(fail != "") {
            alert(fail);
            return false;
        }
        $.ajax({
            url: '../send-mail', 
            type: 'POST',
            cache: false,
            data: {'name': name, 'phone': phone, 'email': email, 'message': message},
            success: alert('Благодарим за ваш выбор! Совсем скоро мы с вами свяжемся!'),
        });
    });
});























