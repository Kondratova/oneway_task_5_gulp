window.API = {
    // Отправка формы

    onFormSubmit: function (params, callbackSuccess, callbackFailed) {
        // Отслеживание запросов на сервер
        console.groupCollapsed(('onFormSubmit'));
        console.log(params);
        console.groupEnd();

        // эмуляция ответа сервера на фронтенде
        setTimeout( function () {
            var serverResponseSuccess = true;

            if(serverResponseSuccess) {
                callbackSuccess();
            } else  {
                var errors = [{fieldName: 'pasword', message: "Неверная эл. почта или пароль"}];
                callbackFailed(errors);
            }
        }, 500)
    },

    numberOfPages: function(category) {

        // category - из какой категории искать товар

        // бекенд получает себе категорию товара

        //эмуляция количества страниц для вмещения всех результатов поиска
        var numberOfPages = 12;

        // console.log(category);
        // console.log(numberOfPages);

        return numberOfPages;

    },

    //Вывод данных в каталог
    onCatalogPage: function (start) {
        // на 1 странице по 16 карточек товара
        // start - номер нажатой ссылки на сраницу

        // бекенд получает себе номер нужной страницы

        // эмуляция ответа сервера на фронтенде

        // эмуляция объекта с информацией о товаре
        // с (start-1)*16+1 по start*16
        // id - номер товара (для отслживания по какой ячейке нажали и что выводит в карточке товара)
        // title - название товара
        // subcategory - подкатегория товара
        // price - цена товара
        // src - ссылка на маленькое изображение товара
        var items = [
            {
                id: "1",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/muzhskie-krossovki-maison-margiela-fusion-low-top-octane-mix-0_450x450.webp"
            },
            {
                id: "2",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/zhenskie-krossovki-adidas-originals-falcon-zip-active-gold-core-black-cloud-white-0_676x676.webp"
            },
            {
                id: "3",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/zhenskie-krossovki-nike-m2k-tekno-se-laser-fuchsia-black-white-0_450x450.webp"
            },
        ];

        // console.log('onCatalogPage работает');
        // console.log(`start:${start}`);
        // console.log(`category:${category}`);
        // console.log(`items:${items}`);

        return items;
    }
};