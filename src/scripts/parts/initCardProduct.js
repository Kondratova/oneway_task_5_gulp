
function initTitle(item) {
    $('.js_title_h1').html(`<p>${item.title}</p>`);
}

function initSubcategory(item) {
    $('.js_subcategory').html(`<p>${item.subcategory}</p>`);
}

function initColors(item) {
    let arrColors = [];

    item.colors.forEach( (color) => {
        arrColors.push(`        
            <input type="radio" name="color" id="${color.colorId}" value="${ color.color }">
            <label for="${color.colorId}">${ color.color }</label>
        `)}
    );
    $('.js_wrapper_content_color').html(arrColors.join(' '));

    //комм
}

function initSize(item) {
    let arrSize = [];

    item.sizes.forEach( (size) => {
        arrSize.push(`        
            <input type="radio" name="size" id="${size.sizeId}" value="${ size.size }">
            <label for="${size.sizeId}">${ size.size }</label>
        `)}
    );
    $('.js_wrapper_content_size').html(arrSize.join(' '));
}

function initPrice(item) {
    $('.js_price').html(item.price);
}

function initCountry(item) {
    $('.js_wrapper_content_country').html(`<p class="content">${item.country}</p>`);
}

function initMaterial(item) {
    $('.js_wrapper_content_material').html(`<p class="content">${item.material}</p>`);
}

function initDescription(item) {
    let arrDescription = [];

    item.description.forEach( (el) => {
        arrDescription.push(`        
            <p class="content">${el}</p>
        `)}
    );
    $('.js_wrapper_content_description').html(arrDescription.join(' '));
}

function initDetails(item) {
    let arrDetails = [];

    item.details.forEach( (el) => {
        arrDetails.push(`        
            <p class="content">${el}</p>
        `)}
    );
    $('.js_wrapper_content_details').html(arrDetails.join(' '));
}

function initSliderProduct(item) {
    let arrSlideFor = [];
    let arrSlideNav = [];

    item.srcBig.forEach( (src) => {
        arrSlideFor.push(`
            <div class="slide"><img src="${src}" alt=""></div>
        `)}
    );
    $('.js_slider_product_for').html(arrSlideFor.join(' '));
}

export default function initCardProduct() {

    let item = window.API.onCardProduct(1);

    initTitle(item);
    initSubcategory(item);
    initColors(item);
    initSize(item);
    initPrice(item);
    initMaterial(item);
    initCountry(item);
    initDescription(item);
    initDetails(item);
    // initSliderProduct(item);
}