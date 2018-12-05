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
                    breakfast: 'Овсянка',
                    bite1: 'Грецкие орехи',
                    lunch: 'Соба, макароны'
                }
            },
            tuesday: {
                name: 'Вторник',
                eatings: {
                    breakfast: 'Пшенка',
                    bite1: 'Урбеч',
                    lunch: 'Спаржа'
                }
            }
        }
    }
});