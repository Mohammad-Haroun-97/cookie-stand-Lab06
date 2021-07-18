'use strict'

let hours =['6:00 Am','7:00 Am','8:00 Am','9:00 Am','10:00 Am','11:00 Am','12:00 Pm','1:00 Pm','2:00 Pm', '3:00 Pm', '4:00 Pm', '5:00 Pm', '6:00 Pm', '7:00 Pm',  ];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

let Seattle={

    name: 'Seattle' ,
    max: 65,
    min: 23,
    avg: 6.3,
    total: 0,

    randomCustomer: [],
    avgCookiesPurchasedPerHour:[],

getrandomCustomer : function () {
    for (let i = 0; i < hours.length; i++) {
        
        this.randomCustomer.push( random(this.min , this.max))
    }

},

getavgCookiesPurchasedPerHour : function () {
    for (let i = 0; i < hours.length; i++) {
       
        this.avgCookiesPurchasedPerHour.push(Math.ceil(this.randomCustomer[i]*this.avg)) ;
        this.total=this.total + this.avgCookiesPurchasedPerHour[i]
    }
     
    
}
}


Seattle.getrandomCustomer();
Seattle.getavgCookiesPurchasedPerHour();

console.log(Seattle);

Seattle.typeHtml=function() {

    let table=document.getElementById('table');
let h2=document.createElement('h2');

table.appendChild(h2);

h2.textContent= this.name;

let ul=document.createElement('ul')
table.appendChild(ul);

for (let i = 0; i < hours.length; i++) {
    let li=document.createElement('li');
    ul.appendChild(li);
    li.textContent=`${hours[i]}  ${this.avgCookiesPurchasedPerHour[i]} cookies`
    
}

let total=document.createElement('li')
    ul.appendChild(total);
    total.textContent=`Total ${this.total} cookies`
}

Seattle.typeHtml();









let Tokyo={

    name: 'Tokyo' ,
    max: 24,
    min: 3,
    avg: 1.2,
    total: 0,

    randomCustomer: [],
    avgCookiesPurchasedPerHour:[],

getrandomCustomer : function () {
    for (let i = 0; i < hours.length; i++) {
        
        this.randomCustomer.push( random(this.min , this.max))
    }

},

getavgCookiesPurchasedPerHour : function () {
    for (let i = 0; i < hours.length; i++) {
       
        this.avgCookiesPurchasedPerHour.push(Math.ceil(this.randomCustomer[i]*this.avg)) ;
        this.total=this.total + this.avgCookiesPurchasedPerHour[i]
    }
     
    
}
}


Tokyo.getrandomCustomer();
Tokyo.getavgCookiesPurchasedPerHour();

console.log(Tokyo);

Tokyo.typeHtml=function() {

    let table=document.getElementById('table');
let h2=document.createElement('h2');

table.appendChild(h2);

h2.textContent= this.name;

let ul=document.createElement('ul')
table.appendChild(ul);

for (let i = 0; i < hours.length; i++) {
    let li=document.createElement('li');
    ul.appendChild(li);
    li.textContent=`${hours[i]}  ${this.avgCookiesPurchasedPerHour[i]} cookies`
    
}

let total=document.createElement('li')
    ul.appendChild(total);
    total.textContent=`Total ${this.total} cookies`
}

Tokyo.typeHtml();



let Dubai={

    name: 'Dubai' ,
    max: 38,
    min: 11,
    avg: 3.7,
    total: 0,

    randomCustomer: [],
    avgCookiesPurchasedPerHour:[],

getrandomCustomer : function () {
    for (let i = 0; i < hours.length; i++) {
        
        this.randomCustomer.push( random(this.min , this.max))
    }

},

getavgCookiesPurchasedPerHour : function () {
    for (let i = 0; i < hours.length; i++) {
       
        this.avgCookiesPurchasedPerHour.push(Math.ceil(this.randomCustomer[i]*this.avg)) ;
        this.total=this.total + this.avgCookiesPurchasedPerHour[i]
    }
     
    
}
}


Dubai.getrandomCustomer();
Dubai.getavgCookiesPurchasedPerHour();

console.log(Dubai);

Dubai.typeHtml=function() {

    let table=document.getElementById('table');
let h2=document.createElement('h2');

table.appendChild(h2);

h2.textContent= this.name;

let ul=document.createElement('ul')
table.appendChild(ul);

for (let i = 0; i < hours.length; i++) {
    let li=document.createElement('li');
    ul.appendChild(li);
    li.textContent=`${hours[i]}  ${this.avgCookiesPurchasedPerHour[i]} cookies`
    
}

let total=document.createElement('li')
    ul.appendChild(total);
    total.textContent=`Total ${this.total} cookies`
}

Dubai.typeHtml();



let Paris={

    name: 'Paris' ,
    max: 38,
    min: 20,
    avg: 2.3,
    total: 0,

    randomCustomer: [],
    avgCookiesPurchasedPerHour:[],

getrandomCustomer : function () {
    for (let i = 0; i < hours.length; i++) {
        
        this.randomCustomer.push( random(this.min , this.max))
    }

},

getavgCookiesPurchasedPerHour : function () {
    for (let i = 0; i < hours.length; i++) {
       
        this.avgCookiesPurchasedPerHour.push(Math.ceil(this.randomCustomer[i]*this.avg)) ;
        this.total=this.total + this.avgCookiesPurchasedPerHour[i]
    }
     
    
}
}


Paris.getrandomCustomer();
Paris.getavgCookiesPurchasedPerHour();

console.log(Dubai);

Paris.typeHtml=function() {

    let table=document.getElementById('table');
let h2=document.createElement('h2');

table.appendChild(h2);

h2.textContent= this.name;

let ul=document.createElement('ul')
table.appendChild(ul);

for (let i = 0; i < hours.length; i++) {
    let li=document.createElement('li');
    ul.appendChild(li);
    li.textContent=`${hours[i]}  ${this.avgCookiesPurchasedPerHour[i]} cookies`
    
}

let total=document.createElement('li')
    ul.appendChild(total);
    total.textContent=`Total ${this.total} cookies`
}

Paris.typeHtml();





let Lima={

    name: 'Lima' ,
    max: 16,
    min: 2,
    avg: 4.6,
    total: 0,

    randomCustomer: [],
    avgCookiesPurchasedPerHour:[],

getrandomCustomer : function () {
    for (let i = 0; i < hours.length; i++) {
        
        this.randomCustomer.push( random(this.min , this.max))
    }

},

getavgCookiesPurchasedPerHour : function () {
    for (let i = 0; i < hours.length; i++) {
       
        this.avgCookiesPurchasedPerHour.push(Math.ceil(this.randomCustomer[i]*this.avg)) ;
        this.total=this.total + this.avgCookiesPurchasedPerHour[i]
    }
     
    
}
}


Lima.getrandomCustomer();
Lima.getavgCookiesPurchasedPerHour();

console.log(Dubai);

Lima.typeHtml=function() {

    let table=document.getElementById('table');
let h2=document.createElement('h2');

table.appendChild(h2);

h2.textContent= this.name;

let ul=document.createElement('ul')
table.appendChild(ul);

for (let i = 0; i < hours.length; i++) {
    let li=document.createElement('li');
    ul.appendChild(li);
    li.textContent=`${hours[i]}  ${this.avgCookiesPurchasedPerHour[i]} cookies`
    
}

let total=document.createElement('li')
    ul.appendChild(total);
    total.textContent=`Total ${this.total} cookies`
}

Lima.typeHtml();



