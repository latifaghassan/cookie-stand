'use strict';

const seattle = {
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
