/**
 ARROW FUNCTIONS

 1.
 function isim (parametreler) {
     // kod bloklari
 }

 2. 
 var isim = function (parametreler) {
     // kod blogu
 }

 var isim = (parametreler) => {
     // kod blogu
 }

 istisna 1 : tek parametre var ise () yok 
    var isim = parametre1 => {
        // kod blogu
    }

 istisna 2 : kod blogu tek satir ise {} yok, return kullanmaya gerek yok
    var isim = () => kod blogu;
 */
/*
var merhaba = function () {
    console.log('merhaba dünya');
}
merhaba();


var merhaba = () => {
    console.log('merhaba dünya');
}
merhaba();


var merhaba = function (text) {
    console.log(text);
}
merhaba('istanbul ve ankara');


var merhaba = text => console.log(text);

merhaba('istanbul ve ankara');



var alan = function (kisaKenar, uzunKenar) {
    console.log(`Kisa kenari ${kisaKenar}m ve uzun kenari ${uzunKenar}m olan dikdörtgenin alani ${ kisaKenar * uzunKenar }m'dir.`)
};
alan(4, 6);


var alan = (kisaKenar, uzunKenar) => {
    console.log(`Kisa kenari ${kisaKenar}m ve uzun kenari ${uzunKenar}m olan dikdörtgenin alani ${ kisaKenar * uzunKenar }m'dir.`)
};
alan(4, 6);


var enUzunKelime = function (str) {
    var array1 = str.split(' ');
    var result = array1[0];             // web

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }

    return result;
}

console.log(enUzunKelime('Web Development Dersi bugun saat kacta olacak'));




var enUzunKelime = str => {
    var array1 = str.split(' ');
    var result = array1[0];             

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }

    return result;
}

console.log(enUzunKelime('Web Development Dersi bugun saat kacta olacak'));
*/


// ARRAY ITERATION METHODS
/**
1. Array.forEach(function)
2. Array.map(function)
3. Array.filter(function)
4. Array.find(function)
5. Arary.some(function)
6. Array.every(function)
7. Array.reduce(function)
8. Array.findIndex(function) 

 */

/*
 // FOREACH() METODU
 // forEach(function)    ----> for loop'un bir muadili

 var numbers = [45, 4, 9, 16, 25];

 // normal for döngüsü ile

 for (var i = 0; i < numbers.length; i++) {
    console.log(`${i + 1}. eleman : ${numbers[i]}`);
 }

 // ---------------------------------------------
 // for döngüsü ile fonksiyon cagirarak
 function yazdir (value, index) {
     return console.log(`${index + 1}. Eleman : ${value}' dir.`)
 }
 for (var i = 0; i < numbers.length; i++) {
    yazdir(numbers[i], i)
 }

 //--------------------------------------------
 // forEach() + klasik fonksiyon ile
 numbers.forEach(function (item, a) {   // once value sonra index parametre olarak verilmeli
    console.log(`Array icerisindeki ${a + 1}. deger : ${item}'dir.`)
 });


 // ------------------------------------------
 // forEach() + Arrow Function ile
numbers.forEach((sayi, index) => 
    console.log(`Numbers array'i icerisinde ${index + 1}. deger : ${sayi}.`)
);





// MAP() METODU
// Array.map(function)  ---> orjinal array'i degistirmeden yeni array olusturmak

// 

var liste = [
    ['Televizyon', 1000],
    ['Kitap', 15],
    ['Bisiklet', 350],
    ['Telefon', 550],
    ['Klavye', 35],
    ['CD', 10],
    ['Bilgisayar', 1500]
]

// normal for döngüsü ile

var fiyatlarListesi = [];
var ihtiyaclarListesi = [];

for (var i = 0; i < liste.length; i++) {
    fiyatlarListesi.push(liste[i][1]);
    ihtiyaclarListesi.push(liste[i][0]);
}
console.log(ihtiyaclarListesi);
console.log(fiyatlarListesi);



// klasik fonksiyon ile
var klasikFuncIhtiyacListesi = liste.map( function (item) {
    return item[0];
});
var klasikFuncFiyatListesi = liste.map(function (item) {
    return item[1];
})
console.log(klasikFuncIhtiyacListesi);
console.log(klasikFuncFiyatListesi);


// Arrow Function ile
var arrowFuncIhtiyacListesi = liste.map( item => item[0]);
var arrowFuncFiyatListesi = liste.map( item => item[1]);

console.log(arrowFuncIhtiyacListesi);
console.log(arrowFuncFiyatListesi);




// FILTER METODU
// Array.filter(function)   --> filtre sonrasinda true olan array elemanlarindan yeni bir array üretmek icin kullaniyoruz.

var liste = [
    ['Televizyon', 1000],
    ['Kitap', 15],
    ['Bisiklet', 350],
    ['Telefon', 550],
    ['Klavye', 35],
    ['CD', 10],
    ['Bilgisayar', 1500]
]

// normal for döngüsü ile fiyati 500 tl üzeri olan ürünleri ve fiyatlarini yeni bir array'de olusturmak.
var filterIhtiyac = [];

for (var i = 0; i < liste.length; i++) {
    if (liste[i][1] > 500) {
        filterIhtiyac.push(liste[i]);
    }
}
console.log(filterIhtiyac);


// klasik fonksiyon ile
var filterKlasikFuncIhtiyac = liste.filter( function (item) {
    return item[1] > 500;
});
console.log(filterKlasikFuncIhtiyac);


// Arrow function ile
var filterArrowFuncIhtiyac = liste.filter( item => item[1] > 500);
console.log(filterArrowFuncIhtiyac);





// FIND METODU
// Array.find(function) --> uygulanan testi/ filter'i gecen (true) ilk elemani verir. 

var liste = [
    ['Televizyon', 1000],
    ['Kitap', 15],
    ['Bisiklet', 350],
    ['Telefon', 550],
    ['Klavye', 35],
    ['CD', 10],
    ['Bilgisayar', 1500],
    ['Klavye', 120]
]

// for döngüsü ile 'klavye' ürününü bulmak istiyorum. 
var findItem;

for ( var i = 0; i < liste.length; i++) {
    if (liste[i][0].toLowerCase() === 'klavye') {
        findItem = liste[i];
        break;
    }
}
console.log(findItem);


// klasik function ile
var findKlasikFuncIhtiyac = liste.find( function (item) {
    return item[0].toLowerCase() === 'klavye';
})
console.log(findKlasikFuncIhtiyac);


// arrow function ile
var findArrowFuncIhtiyac = liste.find( item => item[0].toLowerCase() === 'klavye');
console.log(findArrowFuncIhtiyac);




// EVERY METODU
// Array.every(function) ---> test uyguluyoruz, tüm elemanlarin testi gecip gecmedigini kontrol ediyor. True, false

var liste = [
    ['Televizyon', 1000],
    ['Kitap', 15],
    ['Bisiklet', 350],
    ['Telefon', 550],
    ['Klavye', 35],
    ['CD', 10],
    ['Bilgisayar', 1500],
    ['Klavye', 120]
]

// tüm ürünlerin fiyati 1600 tl'den kücük mü?
var everyArrowFuncItem = liste.every( item => item[1] < 1600 );
console.log(everyArrowFuncItem);

var everyArrowFuncItem1 = liste.every( item => item[1] < 1300 );
console.log(everyArrowFuncItem1);

*/


// SOME METODU
// Array.some(function) ---> test uyguluyoruz, en az bir eleman testi geciyor ise True; aksi halde false

var liste = [
    ['Televizyon', 1000],
    ['Kitap', 15],
    ['Bisiklet', 350],
    ['Telefon', 550],
    ['Klavye', 35],
    ['CD', 10],
    ['Bilgisayar', 1500],
    ['Klavye', 120]
]

// en az bir ürün fiyati 20 tl'den kücük mü?
var someArrowFuncItem = liste.some( item => item[1] < 20 );
console.log(someArrowFuncItem);

var someArrowFuncItem1 = liste.some( item => item[1] > 1700 );
console.log(someArrowFuncItem1);