let object = {
    'id': 'JUNE_PROMO13',
    'name': 'June Sale',
    'creative': 'banner1',
    'sku': 'slot1',
    'string': 'We were born in the 1990\'s. Multiply $7 by 8 in the console & display in the console with console.log(7*8)'
};

let string = ''

//loop through object
//join key (propery), value (property value)
//join with an &
let param

for (x in object) {
    let key = encodeURIComponent(`${x}`)
    let value = encodeURIComponent(`${object[x]}`)
    string += "&" + key + "=" + value;
}

console.log(string)
