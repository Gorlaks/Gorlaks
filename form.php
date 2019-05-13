<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Gorlaks | Связаться</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Свяжитесь с нами для дальнейшего сотрудничества">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link rel="stylesheet" href="css/media.css" type="text/css">
    <link rel="stylesheet" href="libs/reset/reset.css" type="text/css">
    <link rel="shortcut icon" href="image/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Cormorant+Upright" rel="stylesheet">
</head>
<body>
        <form id="form" method="post" class="flex">
            <a href="index" class="back-main-page gor">Gorlaks</a>
            <label for="field-name">Ваше ФИО</label>
            <input type="text" placeholder="Name" name="name" id="field-name">
            <label for="field-phone">Ваш номер телефона</label>
            <input type="text" placeholder="Number phone" name="phone" id="field-phone">
            <label for="field-mail">Ваша почта</label>
            <input type="text" placeholder="Mail" name="mail" id="field-mail">
            <label for="field-wish">Ваша просьба</label>
            <textarea name="wish" id="field-wish" placeholder="Wish"></textarea>
            <span class="attantion">*Перед отправкой формы убедитесь, что в вашем браузере включён JavaScript</span>
            <input type="submit" id="button-form" name="button-form" value="Отправить">
        </form>
        <p class="copy">Все права защищены &copy; <?= date(Y)?></p>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>    
    <script src="js/form.js"></script>
    <script src="libs/jquery/jquery.js"></script>
</body>
</html>