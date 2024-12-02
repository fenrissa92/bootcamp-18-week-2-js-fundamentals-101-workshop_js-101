/*Currency Conversion for a Travel-holics
MVP 1
Write a JavaScript function convertGBPtoEUR that takes in a specified amount in £, and converts it to € using a given exchange rate. The function should return the converted amount.
MVP 2
Write another function convertGBPtoUSD that takes in a specified amount in £, and converts it to $ using a given exchange rate. It should behave in a very similar way to the previous function.
MVP 3
Write a function convertGBPToCurrency which takes in both a currency code ("EUR" or "USD") and an amount of £ to convert. It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. If an unknown code is entered, it should return null.*/

/* 
MVP 1
Write a JavaScript function convertGBPtoEUR 
that takes in a specified amount in £, 
and converts it to € using a given exchange rate. 
The function should return the converted amount.

current exchange rate: 1.21
*/


function convertGBPtoEUR(pounds) {

    let euro = pounds * 1.21;
    return euro;
}

console.log(convertGBPtoEUR(50))

/*
MVP 2
Write another function convertGBPtoUSD 
that takes in a specified amount in £, 
and converts it to $ using a given exchange rate. 
It should behave in a very similar way to the previous function.

current exchange rate: 1.26
*/

function convertGBPtoUSD(pounds) {

    let usd = pounds * 1.26;
    return usd;
}

console.log(convertGBPtoUSD(50))

/*
MVP 3
Write a function convertGBPToCurrency 
which takes in both a currency code ("EUR" or "USD") and an amount of £ to convert. 
It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. 
If an unknown code is entered, it should return null.*/

function convertGBPToCurrency(pounds) {
    let eur = pounds * 1.21;
    let usd = pounds * 1.26;
    
    if(pounds > 0) {
    return {eur, usd};
    }
    else null;
}


console.log(convertGBPToCurrency(100))