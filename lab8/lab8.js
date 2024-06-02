function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML += '<br>Россия: ' + today.toLocaleString('ru-RU');
    out.innerHTML += '<br>США: ' + today.toLocaleString('en-US', { timeZone: 'America/New_York' });
    out.innerHTML += '<br>Япония: ' + today.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    out.innerHTML += '<br>Китай: ' + today.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
    out.innerHTML += '<br>Бразилия: ' + today.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    out.innerHTML += '<br>Франция: ' + today.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

    

}