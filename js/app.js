'use strict';


let hours = ['6am', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let newArray = [];
   
 
   // cunstructur function
   function Shop(location, minCus, maxCus, avgCookies) {
    this.location = location;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCookies = avgCookies;

    this.cookiesPerhr = [];
    this.customerPerhr = [];

    
    newArray.push(this);
   // console.log(this);
      
    }
     // prototype
    let seatlle = new Shop('seatlle',23,65,6.3);
    let tokyo = new Shop('tokyo',3,24,1.2,);
    let dubai = new Shop('dubai',11,38,3.7,);
    let paris = new Shop('paris',20,38,2.3,);
    let lima = new Shop('lima',2,16,4.6,);

    Shop.prototype.getRandom = function(){
        for (let i = 0; i <hours.length; i++) {
            this.customerPerhr.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus));
        }
    }
    Shop.prototype.cookiesPurches = function(){

        //console.log(this.customerPerhr);

        for (let i = 0; i < this.customerPerhr.length; i++) {
            this.cookiesPerhr.push(Math.ceil(this.customerPerhr[i] * this.avgCookies));

            this.total += this.cookiesPerhr[i];
          //  console.log(this.total);
        }
    }; 

    let container = document.getElementById('SalmonCookies');
    let tableEl = document.createElement('table');
    container.appendChild(tableEl);  
    Shop.prototype.render = function(){ 
    }
    

      function header() {
        
        let rowHeader = document.createElement('tr');
        tableEl.appendChild(rowHeader);
        let th2 = document.createElement("th");
        rowHeader.appendChild(th2);
        th2.textContent = '';
        for (let i = 0; i < hours.length; i++) {
        let th1 = document.createElement('th');
        rowHeader.appendChild(th1);
        th1.textContent = hours[i];

        }
        let lastStanza = document.createElement('th');
        rowHeader.appendChild(lastStanza);
        lastStanza.textContent = "Daily Location Total";
    }

    Shop.prototype.shops = function(){
        let secondRow = document.createElement('tr');
        tableEl.appendChild(secondRow);
        let tdShops = document.createElement('td')
        secondRow.appendChild(tdShops);
        tdShops.textContent = this.location;

        //console.log(this.cookiesPerhr);

    
    for ( let i = 0; i < this.cookiesPerhr.length ; i++){
        let tdCookieshr = document.createElement('td');
        secondRow.appendChild(tdCookieshr);
        tdCookieshr.textContent = this.cookiesPerhr[i];


        }
        

    }
    header();

    
    for ( let i = 0; i < newArray.length ; i++){
        newArray[i].getRandom();   
        newArray[i].cookiesPurches();
        newArray[i].shops();
        

    }

    footerForTotal();


    function footerForTotal () {

        let dailyTotal = 0;
        let finalTotal = 0
        let footTotal = document.createElement('footTotal');
        tableEl.appendChild(footTotal);

        //Total
        let trFooter = document.createElement('tr');
        tableEl.appendChild(trFooter);
        
        let tdFinallTotal = document.createElement('th');
        trFooter.appendChild(tdFinallTotal );
        tdFinallTotal.textContent = 'Total';
        
        
         for (let i = 0 ; i < hours.length ; i++) {
        
        
         for (let j = 0 ; j < newArray.length ; j++) {
        
        finalTotal += newArray[j].cookiesPerhr[i];
        }
        dailyTotal += finalTotal;
        
        let td = document.createElement('th');
        trFooter.appendChild(td);
        td.textContent = finalTotal;
          }
       
           
        let tdDailyTotal = document.createElement('th');
        trFooter.appendChild(tdDailyTotal);
        tdDailyTotal.textContent = dailyTotal;
        }
     
    
    

    //seatlle.getRandom()
    //seatlle.cookiesPurches()
   // seatlle.header();
   // seatlle.shops();



    
    








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
*/