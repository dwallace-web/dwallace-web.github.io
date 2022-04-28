function downloadEvent() {
    window.dataLayer.push({
        'event': 'sample_download',
        'order': [
            {
                'id': 'JUNE_PROMO13', // ID or Name is required.
                'name': 'June Sale',
                'creative': 'banner1',
                'sku': 'slot1'
            },
            {
                'id': 'FREE_SHIP13',
                'name': 'Free Shipping Promo',
                'creative': 'skyscraper2',
                'sku': 'slot2'
            },
            {
                'id': 'FREE_SHIP13',
                'name': 'Free Shipping Promo',
                'creative': 'banner23423',
                'sku': 'slot3'
            },
            {
                'id': 'FREE_SHIP13',
                'name': 'Free Shipping Promo',
                'creative': '123404',
                'sku': 'banner23423'
            }]
    })
};

let anOrder = [
    {
        'id': 'JUNE_PROMO13', // ID or Name is required.
        'name': 'June Sale',
        'creative': 'banner1',
        'sku': 'slot1'
    },
    {
        'id': 'FREE_SHIP13',
        'name': 'Free Shipping Promo',
        'creative': 'skyscraper2',
        'sku': 'slot2'
    },
    {
        'id': 'FREE_SHIP13',
        'name': 'Free Shipping Promo',
        'creative': 'banner23423',
        'sku': 'slot3'
    },
    {
        'id': 'FREE_SHIP13',
        'name': 'Free Shipping Promo',
        'creative': '123404',
        'sku': 'banner23423'
    }]

var quickurl = "https://via.placeholder.com/600/";

var prodArr = [];


function varToArray() {
    anOrder.map(product => {
        prodArr.push(product.sku)
    })
}

varToArray();


let x = 0;
let imgsrc
for (x; x <= prodArr.length - 1; x++) {
    console.log('hello world')
    console.log(prodArr[x]);
    imgsrc = quickurl + prodArr[x];
    var img = document.createElement("img");
    img.style = "display:none; width: 1px; height: 1px;";
    img.src = imgsrc
    document.getElementsByTagName('body')[0].appendChild(img);
}