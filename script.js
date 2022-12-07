
let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.qoute');
let person = document.querySelector('.person');
let hey = document.querySelector('.hey')
console.log(hey)

const quotes = [{
    quote: `"The cow in a hurry to go to America, will come back as corned beef"`,
    person: `Pete Edochie`
},{
    quote: `"Woman wey never see problem na em still dey hold breast run"`,
    person: `Anonymous`
},{
    quote: `"Pastor wey dey pray for mad person no dey close eye"`,
    person: `Anonymous`
},{
    quote: `"Who sweep, no pack go sweep again wen breeze blow"`,
    person: `Anonymous`
},{
    quote: `"Anywhere wey belle face na em b front"`,
    person: `Anonymous`
},{
    quote: `""Any man that uses his teeth to cut shaki from pepper soup with his eyes open, 
    is not afraid of anything`,
    person: `Anonymous`
},{
    quote: `"You cannot shame the shameless"`,
    person: `Anonymous`
},{
    quote: `"Monkey no fine but em mama like ahm"`,
    person: `Anonymous`
},
];

hey.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
