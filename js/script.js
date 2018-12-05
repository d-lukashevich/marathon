new Vue({
    el: '#app',
    data: {
        eatingsMap: {
            breakfast: {
                name: 'Завтрак',
                notice: '8:00-8:30'
            },
            bite1: {
                name: 'Перекус',
                notice: '10:30'
            },
            lunch: {
                name: 'Обед',
                notice: '12:30-13:30'
            },
            bite2: {
                name: 'Перекус',
                notice: '16:00'
            },
            dinner: {
                name: 'Ужин',
                notice: '18:00'
            },
            lateDinner: {
                name: 'За 2 часа до сна'
            },
        },
        days: {
            monday: {
                name: 'Понедельник',
                eatings: {
                    breakfast: 'Овсяная каша (5 ст. л.) + курага/изюм',
                    bite1: 'Грецкие орехи (30 гр) и сухофрукты (20гр)',
                    lunch: 'Соба/акароны из твёрдых сортов + Адыгейский сыр + Салат',
                    bite2: 'Обезжиренный творог + Печёная груша (1/2)',
                    dinner: 'Салат с брынзой/тофу',
                    lateDinner: 'Протеиновый коктейль / Кефир / Йогурт'
                }
            },
            tuesday: {
                name: 'Вторник',
                eatings: {
                    breakfast: 'Пшеная каша (5 ст. л.) + груша (1/2) и мёд',
                    bite1: 'Урбеч с мёдом (20 + 20гр)',
                    lunch: 'Соевая спаржа + тушенные овощи + Салат',
                    bite2: 'Протеиновый коктейль / Кефир',
                    dinner: 'Овощные котлетки с адыг. сыром + запечённые кабачки + салат',
                    lateDinner: 'Молоко с корицей'
                }
            },
            wednesday: {
                name: 'Среда',
                eatings: {
                    breakfast: 'Фркутовый салат',
                    bite1: 'Бутерброд с сыром и зеленью',
                    lunch: 'Овощной суп + лепешка/хлебец + салат',
                    bite2: 'Урбеч с мёдом (20 + 20гр)',
                    dinner: 'Обезжиренный йогурт + овощи на пару',
                    lateDinner: 'Молоко с корицей'
                }
            },
            thursday: {
                name: 'Четверг',
                eatings: {
                    breakfast: 'Ячневая/перловая крупа (4 ст. л.) + яблоко/банан(1/2)',
                    bite1: 'Протеиновый коктейль/орехи',
                    lunch: 'Нут с подливкой + Бурый рис + ист салата',
                    bite2: 'Салат / Авокадо',
                    dinner: 'Сабджи + Салат',
                    lateDinner: 'Йогурт/Кефир'
                }
            },
            friday: {
                name: 'Пятница',
                eatings: {
                    breakfast: 'Мюсли с ряженкой + ягоды/сухфорукты и мёд',
                    bite1: 'Урбеч с мёдом',
                    lunch: 'Суп из тофу и нори + лепешка/хлебец с творож. сыром + салат',
                    bite2: 'Яблоко, запечённое с сухофруктами',
                    dinner: 'Адыг. сыр + запечённый картофель + брокколи на пару',
                    lateDinner: 'Протеиновый коктейль / кефир'
                }
            },
            saturday: {
                name: 'Суббота',
                eatings: {
                    breakfast: 'Фруктовый салат и ягоды (по сезону)',
                    bite1: 'Орехи + сухофрукты',
                    lunch: 'Гречка с адыг. сыром + салат',
                    bite2: 'Хлебец с творожным сыром и помидоркой',
                    dinner: 'Омлет из тофу + салат',
                    lateDinner: 'Молоко с корицей'
                }
            },
            sunday: {
                name: 'Воскресенье',
                eatings: {
                    breakfast: 'Творожная запеканка / чизкейк',
                    bite1: 'Урбеч с мёдом',
                    lunch: 'Тушёные овощи + салат',
                    bite2: 'Печёное яблоко',
                    dinner: 'Храмовый пир без фанатизма',
                    lateDinner: 'Уже поели в храме, так что спать или обезжир. молочко'
                }
            }
        }
    }
});

function createScreen(e) {
    e.preventDefault();
    html2canvas(this.parentElement.querySelector('table')).then(canvas => {
        let screenshot = canvas.toDataURL("image/png").replace(/^data:image\/png/, "data:application/octet-stream");
        $(this).attr('download', 'schedule.png').attr('href', screenshot);
        $(this).off( "click", createScreen);
        $(this)[0].click();
    });
}

$(".schedule__btn").on('click', createScreen);
