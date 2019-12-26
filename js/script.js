document.getElementById('proverca').onclick = function () {
    var x = document.getElementById('years').value;
    x = parseInt(x);

    if (x >= 16) {
        alert('добро пожаловать!');
    } else {
        alert('Вход воспрещён');
    };
};