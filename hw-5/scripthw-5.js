const birthday = prompt('Ваш рік народження');
let numberCheck;

    switch (true) {
        case birthday === null : {
            numberCheck = "Ви скасували"
            break;
        }
        case isNaN (+birthday): {
            numberCheck = "Це не цифра: спробуйте знову";
            break;
        }
        case birthday.trim() === '': {
            numberCheck = "Шкода, що Ви не захотіли ввести свій рік народження";
            break;
        }
        default: {
            numberCheck = 2023 - birthday + " років";
            break;
        }
    }

const cityOfResidence = prompt('Місто вашого проживання');
let cityMessage;
       
    switch (true) {
        case "Київ" === "Київ, Вашингтон, Лондон": {
            cityMessage = "Ти живеш в столиці України";
            break;
        }
        case "Вашингтон" === "Київ, Вашингтон, Лондон": {
            cityMessage = "Ти живеш в столиці CША";
            break;
        }
        case "Лондон" === "Київ, Вашингтон, Лондон": {
            cityMessage = "Ти живеш в столиці Великобританії";
            break;
        }
        case cityOfResidence === null : {
            cityMessage = "Ви скасували"
            break;
        }
        case cityOfResidence.trim() === '' : {
            cityMessage = "Шкода, що Ви не захотіли ввести своє місто";
            break;
        }
        default: {
            cityMessage = "Ти живеш в місті " + cityOfResidence;
            break;
        }
}

const favoriteSport = prompt('Ваш улюблений вид спорту');
let sportMessage;

    switch (true) {
        case "Футбол" === "Футбол, Бокс, Баскетбол": {
            sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
            break;
        }
        case "Бокс" === "Футбол, Бокс, Баскетбол": {
            sportMessage = "Круто! Хочеш стати як Віталій Кчичко?";
            break;
        }
        case "Баскетбол"  === "Футбол, Бокс, Баскетбол": {
            sportMessage = "Круто! Хочеш стати як Леброн Джеймс?";
            break;
        }
        case favoriteSport === null : {
            sportMessage = "Ви скасували"
            break;
        }
        case favoriteSport.trim() === '' : {
            sportMessage = "Шкода, що Ви не захотіли ввести свій улюблений вид спорт";
            break;
        }
    }

alert(`${numberCheck}
${cityMessage}
${sportMessage}`)





