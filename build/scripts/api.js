window.API = {
    // Отправка формы покупки товаров
    onFormSubmit: function (params, products, callbackSuccess, callbackFailed) {
        // Отслеживание запросов на сервер
        console.groupCollapsed(('onFormSubmit'));
        console.log(params);
        console.log(products);
        console.groupEnd();

        // эмуляция ответа сервера на фронтенде
        setTimeout( function () {
            var serverResponseSuccess = true;

            if(serverResponseSuccess) {
                let orderNumber = 213;
                callbackSuccess(orderNumber);
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
                src: "assets/img/item/1/img.webp"
            },
            {
                id: "2",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/2/zhenskie-krossovki-adidas-originals-falcon-zip-active-gold-core-black-cloud-white-0_676x676.webp"
            },
            {
                id: "3",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/3/zhenskie-krossovki-nike-m2k-tekno-se-laser-fuchsia-black-white-0_450x450.webp"
            },
            {
                id: "4",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/1/img.webp"
            },
            {
                id: "5",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/2/zhenskie-krossovki-adidas-originals-falcon-zip-active-gold-core-black-cloud-white-0_676x676.webp"
            },
            {
                id: "6",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/3/zhenskie-krossovki-nike-m2k-tekno-se-laser-fuchsia-black-white-0_450x450.webp"
            },
            {
                id: "7",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/1/img.webp"
            },
            {
                id: "8",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/2/zhenskie-krossovki-adidas-originals-falcon-zip-active-gold-core-black-cloud-white-0_676x676.webp"
            },
            {
                id: "9",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/3/zhenskie-krossovki-nike-m2k-tekno-se-laser-fuchsia-black-white-0_450x450.webp"
            },
            {
                id: "10",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/1/img.webp"
            },
            {
                id: "11",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/2/zhenskie-krossovki-adidas-originals-falcon-zip-active-gold-core-black-cloud-white-0_676x676.webp"
            },
            {
                id: "12",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/3/zhenskie-krossovki-nike-m2k-tekno-se-laser-fuchsia-black-white-0_450x450.webp"
            },
            {
                id: "13",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/1/img.webp"
            },
            {
                id: "14",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/2/zhenskie-krossovki-adidas-originals-falcon-zip-active-gold-core-black-cloud-white-0_676x676.webp"
            },
            {
                id: "15",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                price: "92000 ",
                src: "assets/img/item/3/zhenskie-krossovki-nike-m2k-tekno-se-laser-fuchsia-black-white-0_450x450.webp"
            },
        ];

        return items;
    },

    //Вывод данных в карточку продукта
    onCardProduct: function (itemId) {
        // itemId - id товара нажатой ячейки в каталоге
        // бекенд получает себе id товара

        // эмуляция ответа сервера на фронтенде

        // эмуляция объекта с информацией о товаре
        // id - номер товара
        // title - название товара
        // subcategory - подкатегория товара
        // price - цена товара
        // src - массив ссылок на изображения

        var item = {
                id: "1",
                title: "Maison Margiela Fusion Low Sneakers",
                subcategory: "Кроссовки",
                colors:[
                    {
                        color:"Белый с розовым",
                        colorId: 'whiteWithPink'
                    },
                    {
                        color:"Белый с зелёным",
                        colorId: "whiteWithGrin"
                    }
                    ],
                sizes:[
                    {
                        size: "6",
                        sizeId: "size6"},
                    {
                        size: "6.5",
                        sizeId: "size6.5"
                    },
                    {
                        size: "7",
                        sizeId: "size7"},
                    {
                        size: "9",
                        sizeId: "size9"}
                    ],
                price: "92000 ",
                srcSmall: [
                    "assets/img/item/1/img.webp",
                    "assets/img/item/1/image.webp",
                    "assets/img/item/1/image_2.webp",
                    "assets/img/item/1/image_3.webp",
                ],
                srcBig: [
                    "assets/img/item/1/img_big.webp",
                    "assets/img/item/1/image_big.webp",
                    "assets/img/item/1/image_2_big.webp",
                    "assets/img/item/1/image_3_big.webp",
                ],
            material: "Кожа, текстиль",
            country: "Италия",
            description: [
                "Деконструктивный и авангардный дизайн с уникальными концепциями и нетрадиционным мастерством.",
                "В качестве материала используются два вида кожи. Верх дополнен деталями из сетчатого материала и текстиля.",
                "Грубые и многослойные кроссовки показывают отличие от традиционного аккуратного стиля создания обуви. Они оснащены раскрашенной вручную резиновой подошвой с брызгами и потеками.",
                "Оригинальная слегка асимметричная система шнуровки и фирменный стежок на заднике завершают уникальный внешний вид."
                ],
            details: [
                "Два вида кожи",
                "Детали из текстиля",
                "Неординарная шнуровка",
                "Перфорация на мыске",
                "Стежок на заднике",
                "Фигурная резиновая подошва",
                "Цепкая подметка",
                "Окрашивание с брызгами и потеками",
                "Пестрая расцветка"
            ]
        };

        return item;
    }
};