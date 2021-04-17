'use strict';

//Global area.

let container = document.getElementById('SalmonCookies');

// The base of creating the table (instead of copying it 5 times, it's better to add it globaly and for once)
let tableEl = document.createElement('table');
container.appendChild(tableEl);


let hours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'];
let newArray = [];
console.log(newArray);


// cunstructur functions.

function Shop(location, minCus, maxCus, avgCookies) {
    this.location = location;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCookies = avgCookies;

    this.customerPerhr = [];
    this.cookiesPerhr = [];
    this.total=0;
    newArray.push(this);
    // Push all the object into the newArray we have in global.

}
// Prototype Functions (it's better to add them in last area.



// Prototype must be outside the constrctur functions.

Shop.prototype.getRandom = function (){
    for (let i=0;i<hours.length;i++){
        this.customerPerhr.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus)); //for generating random numbers of customers.
    }
};

Shop.prototype.cookiesPurches = function (){
    for (let i=0; i<hours.length; i++) {
        this.cookiesPerhr.push(Math.ceil(this.avgCookies*this.customerPerhr[i]));
        this.total = this.total+this.cookiesPerhr[i];
    }
};


// End of prototypes.

//             HEADER 

// You can't use preporites inside 'alone functions'.

function header() {
    //Header Row
    let rowHeader = document.createElement('tr');
    tableEl.appendChild(rowHeader);

    // Empty cell. 
    let empty = document.createElement('th');
    rowHeader.appendChild(empty);
    empty.textContent = '';

    // LOOP , Hours. 
    let th = null;
    for (let i = 0; i < hours.length; i++) {
        th = document.createElement('th');
        rowHeader.appendChild(th);
        th.textContent=hours[i]; // 6am , 7am , 8am, .. 
    }

    let lastStanza = document.createElement('th');
    rowHeader.appendChild(lastStanza);
    lastStanza.textContent=('Daily Hour');
}

header();
// We Finished The Header. 


//               BODY 

// You can use preporites in prototypes functions.

Shop.prototype.render = function () { //it's better to use reander here, it used to show somthing

    let nextRow = document.createElement('tr');
    tableEl.appendChild(nextRow);

    let shopsLocation = document.createElement('th');
    nextRow.appendChild(shopsLocation);
    shopsLocation.textContent=this.location; // it will select all the locations.

    // LOOP , Cookie purchase per hour. 

    let td = null;

    for (let i = 0; i < hours.length; i++) {
        td  = document.createElement('td');
        nextRow.appendChild(td);
        td.textContent=this.cookiesPerhr[i];
    }

    let dailyTotal = document.createElement('td');
    nextRow.appendChild(dailyTotal);
    dailyTotal.textContent = this.total;
};

  Shop.prototype.calculation=function(){
      this.getRandom();
      this.cookiesPurches();
      this.render();
    }

// We Finished The Body. 
      let seatlle = new Shop('Seatlle', 23, 65, 6.3);
      let tokyo = new Shop('Tokyo', 3, 24, 1.2,);
      let dubai = new Shop('Dubai', 11, 38, 3.7,);
      let paris = new Shop('Paris', 20, 38, 2.3,);
      let lima = new Shop('Lima', 2, 16, 4.6,);


    seatlle.calculation();
    tokyo.calculation();
    dubai.calculation();
    paris.calculation();
    lima.calculation();
  

//               FOOTER 

//**********/
function footer(){
    // Raw
    let lastRow=document.createElement('tr');
    tableEl.appendChild(lastRow);

    let tableData=document.createElement('th');
    lastRow.appendChild(tableData);
    tableData.textContent = 'Totals';
    //**********/

    let allCookies=0;

    for(let i=0;i<hours.length;i++){

    let totalHr = 0;

    for(let j=0;j<newArray.length;j++){

    totalHr = totalHr + newArray [j].cookiesPerhr[i];
    }

    tableData= document.createElement('td');
    lastRow.appendChild(tableData);
    tableData.textContent=totalHr;
    allCookies=allCookies+totalHr;
}

    let lastData = document.createElement('td');
    lastRow.appendChild(lastData);
    lastData.textContent=allCookies;
}
footer();




const form = document.getElementById('shopsForm');

 
form.addEventListener('submit', handleSubmitting);
function handleSubmitting(event){
    event.preventDefault();
    console.log(event.target);
 
    
    let shopName = event.target.location.value;
 
    let min = parseInt(event.target.minCus.value)
    let max  = parseInt(event.target.maxCus.value)
    //console.log(maxCus);
    let avg  = parseFloat(event.target.avgCookies.value)
   // console.log(avgCookies);
 
    let newShop = new Shop(shopName, min, max, avg);
 
    newShop.getRandom();
    newShop.cookiesPurches();
    newShop.render();
 
  
 };





/*

console.log(seatlle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);

seatlle.cookiesPurches();
tokyo.cookiesPurches();
dubai.cookiesPurches();
paris.cookiesPurches();
lima.cookiesPurches();

seatlle.getRandom();
tokyo.getRandom();
dubai.getRandom();
paris.getRandom();
lima.getRandom(); */



/*const seattle = {
    location: 'Seatlle  ',
    minCus: 23,
    maxCus: 65,
    avgCookies: 6.3,
    hours: ['6am', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    cookiesPerhr: [],
    customerPerhr: [],
    total: 0,
    getRandom: function () {
        for (let i = 0; i < 14; i++) {
            this.customerPerhr.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus));
        }
    },
    cookiesPurches: function () {
        for (let i = 0; i < this.customerPerhr.length; i++) {
            this.cookiesPerhr.push(Math.ceil(this.customerPerhr[i] * this.avgCookies));
            this.total += this.cookiesPerhr[i];
        }
    },
    SalesList: function () {
        let listSalesCookies = document.getElementById('listSalesCookies');
        let div = document.createElement('div');
        listSalesCookies.appendChild(div);
        let h2 = document.createElement('h2');
        div.appendChild(h2);
        h2.textContent = this.location;
        let h3 = document.createElement('h3');
        div.appendChild(h3);
        h3.textContent = 'Sales/Hour:';
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < this.customerPerhr.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${this.hours[i]} :${this.cookiesPerhr[i]} cookies `;
        }
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total : ${this.total} Cookies `;
    }
};


seattle.getRandom();
seattle.cookiesPurches();
seattle.SalesList();


//...................................................................


const tokyo = {
    location: 'tokyo ',
    minCus: 3,
    maxCus: 24,
    avgCookies: 1.2,
    hours: ['6am', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    cookiesPerhr: [],
    customerPerhr: [],
    total: 0,
    getRandom: function () {
        for (let i = 0; i < 14; i++) {
            this.customerPerhr.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus));
        }
    },
    cookiesPurches: function () {
        for (let i = 0; i < this.customerPerhr.length; i++) {
            this.cookiesPerhr.push(Math.ceil(this.customerPerhr[i] * this.avgCookies));
            this.total += this.cookiesPerhr[i];
        }
    },
    SalesList: function () {
        let listSalesCookies = document.getElementById('listSalesCookies');
        let div = document.createElement('div');
        listSalesCookies.appendChild(div);
        let h2 = document.createElement('h2');
        div.appendChild(h2);
        h2.textContent = this.location;
        let h3 = document.createElement('h3');
        div.appendChild(h3);
        h3.textContent = 'Sales/Hour:';
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < this.customerPerhr.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${this.hours[i]} :${this.cookiesPerhr[i]} cookies `;
        }
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total : ${this.total} Cookies `;
    }
};

tokyo.getRandom();
tokyo.cookiesPurches();
tokyo.SalesList();

//...................................................................


const dubai = {
    location: 'dubai ',
    minCus: 11,
    maxCus: 38,
    avgCookies: 3.7    ,
    hours: ['6am', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    cookiesPerhr: [],
    customerPerhr: [],
    total: 0,
    getRandom: function () {
        for (let i = 0; i < 14; i++) {
            this.customerPerhr.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus));
        }
    },
    cookiesPurches: function () {
        for (let i = 0; i < this.customerPerhr.length; i++) {
            this.cookiesPerhr.push(Math.ceil(this.customerPerhr[i] * this.avgCookies));
            this.total += this.cookiesPerhr[i];
        }
    },
    SalesList: function () {
        let listSalesCookies = document.getElementById('listSalesCookies');
        let div = document.createElement('div');
        listSalesCookies.appendChild(div);
        let h2 = document.createElement('h2');
        div.appendChild(h2);
        h2.textContent = this.location;
        let h3 = document.createElement('h3');
        div.appendChild(h3);
        h3.textContent = 'Sales/Hour:';
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < this.customerPerhr.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${this.hours[i]} :${this.cookiesPerhr[i]} cookies `;
        }
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total : ${this.total} Cookies `;
    }
};

dubai.getRandom();
dubai.cookiesPurches();
dubai.SalesList();

//...................................................................


const paris = {
    location: 'paris ',
    minCus: 20,
    maxCus: 38,
    avgCookies: 2.3,
    hours: ['6am', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    cookiesPerhr: [],
    customerPerhr: [],
    total: 0,
    getRandom: function () {
        for (let i = 0; i < 14; i++) {
            this.customerPerhr.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus));
        }
    },
    cookiesPurches: function () {
        for (let i = 0; i < this.customerPerhr.length; i++) {
            this.cookiesPerhr.push(Math.ceil(this.customerPerhr[i] * this.avgCookies));
            this.total += this.cookiesPerhr[i];
        }
    },
    SalesList: function () {
        let listSalesCookies = document.getElementById('listSalesCookies');
        let div = document.createElement('div');
        listSalesCookies.appendChild(div);
        let h2 = document.createElement('h2');
        div.appendChild(h2);
        h2.textContent = this.location;
        let h3 = document.createElement('h3');
        div.appendChild(h3);
        h3.textContent = 'Sales/Hour:';
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < this.customerPerhr.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${this.hours[i]} :${this.cookiesPerhr[i]} cookies `;
        }
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total : ${this.total} Cookies `;
    }
};


paris.getRandom();
paris.cookiesPurches();
paris.SalesList();

//...................................................................


const lima = {

    location: 'lima ',
    minCus: 2,
    maxCus: 16,
    avgCookies: 4.6,
    hours: ['6am', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    cookiesPerhr: [],
    customerPerhr: [],
    total: 0,
    getRandom: function () {
        for (let i = 0; i < 14; i++) {
            this.customerPerhr.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus));
        }
    },
    cookiesPurches: function () {
        for (let i = 0; i < this.customerPerhr.length; i++) {
            this.cookiesPerhr.push(Math.ceil(this.customerPerhr[i] * this.avgCookies));
            this.total += this.cookiesPerhr[i];
        }
    },
    SalesList: function () {
        let listSalesCookies = document.getElementById('listSalesCookies');
        let div = document.createElement('div');
        listSalesCookies.appendChild(div);
        let h2 = document.createElement('h2');
        div.appendChild(h2);
        h2.textContent = this.location;
        let h3 = document.createElement('h3');
        div.appendChild(h3);
        h3.textContent = 'Sales/Hour:';
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < this.customerPerhr.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${this.hours[i]} :${this.cookiesPerhr[i]} cookies `;
        }
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total : ${this.total} Cookies `;
    }
};


lima.getRandom();
lima.cookiesPurches();
lima.SalesList();
*////