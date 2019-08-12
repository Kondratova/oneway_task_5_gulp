import {initSliderProductFor, initSliderProductNav} from '.././parts/sliders';

function showId(id) {
    document.body.id = id;
}

function showTitle(title) {
    $('.js_title_h1').html(`<p>${title}</p>`);
}

function showSubcategory(subcategory) {
    $('.js_subcategory').html(`<p>${subcategory}</p>`);
}

function showColors(colors) {
    $('.js_wrapper_content_color').html(colors.map(color =>
        `<input type="radio" name="color" id="${color.colorId}" value="${ color.color }">
         <label for="${color.colorId}">${ color.color }</label>`
    ));
}

function showSize(sizes) {
    $('.js_wrapper_content_size').html(sizes.map(size =>
        `<input type="radio" name="size" id="${size.sizeId}" value="${ size.size }">
            <label for="${size.sizeId}">${ size.size }</label>`
    ));
}

function showPrice(price) {
    $('.js_price').html(price);
}

function showMaterial(material) {
    $('.js_wrapper_content_material').html(`<p class="content">${material}</p>`);
}

function showCountry(country) {
    $('.js_wrapper_content_country').html(`<p class="content">${country}</p>`);
}

function showDescription(description) {
    $('.js_wrapper_content_description').html(description.map(el =>
        `<p class="content">${el}</p>`
    ));
}

function showDetails(details) {
    $('.js_wrapper_content_details').html(details.map(el =>
        `<p class="content">${el}</p>`
    ));
}

function showSliderProduct(srcBig, srcSmall) {

    $('.js_slider_product_for').html(srcBig.map(src =>
        `<div class="slide"><img src="${src}" alt="Изображение"></div>`
    ));

    $('.js_slider_product_nav').html(srcSmall.map(src =>
        `<div class="slide"><img src="${src}" alt="Изображение"></div>`
    ));

    initSliderProductFor();
    initSliderProductNav();
}

//Доделать возможность получения списка интересного с сервера
/*function initIinterestingSlider(item) {
    let arrIinterestingSlide = [];

    item.src.forEach( (src) => {
        arrIinterestingSlide.push(`
            <div class="slide"><img src="${src}" alt="Изображение"></div>
        `)}
    );
    $('.js_slider_product_for').html(arrIinterestingSlide.join(' '));


    initIinterestingSlider();
}*/

export default function initCardProduct() {

    let item = window.API.onCardProduct(1);

    showId(item.id);
    showTitle(item.title);
    showSubcategory(item.subcategory);
    showColors(item.colors);
    showSize(item.sizes);
    showPrice(item.price);
    showMaterial(item.material);
    showCountry(item.country);
    showDescription(item.description);
    showDetails(item.details);
    showSliderProduct(item.srcBig, item.srcSmall);

    return item;
}