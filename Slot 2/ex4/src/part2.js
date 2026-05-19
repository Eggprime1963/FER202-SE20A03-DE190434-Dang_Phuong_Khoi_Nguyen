// Task 1

const people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9},
  {name: 'John', age: 40},
  {name: 'Ann', age: 19},
  {name: 'Elisabeth', age: 16}
];

const array = [1, 2, 3, 4];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// Task 2

// --- People Array Operations ---
const firstTeenager = people.find(p => p.age >= 10 && p.age <= 20);
const allTeenagers = people.filter(p => p.age >= 10 && p.age <= 20);
const isEveryTeenager = people.every(p => p.age >= 10 && p.age <= 20);
const isAnyTeenager = people.some(p => p.age >= 10 && p.age <= 20);

// --- Simple Array Reduction ---
const sumArray = array.reduce((accumulator, current) => accumulator + current, 0);

// --- Companies & Ages Operations ---
// Print the name of each company using forEach
companies.forEach(company => console.log(company.name));

// Print the name of each company that started after 1987
companies
  .filter(company => company.start > 1987)
  .forEach(company => console.log(company.name));

// Get Retail companies, increment start by 1, and append to the DOM
companies
  .filter(company => company.category === "Retail")
  .map(company => ({ ...company, start: company.start + 1 }))
  .forEach(company => {
      const div = document.createElement('div');
      div.innerHTML = `
          <p>Name: ${company.name}</p>
          <p>Category: ${company.category}</p>
          <p>Start: ${company.start}</p>
          <p>End: ${company.end}</p>
      `;
      document.body.appendChild(div);
  });

// Sort the companies based on their end date in ascending order
const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);

// Sort the ages array in descending order
const sortedAges = [...ages].sort((a, b) => b - a);

// Print the sum of all ages using reduce
const sumAges = ages.reduce((total, age) => total + age, 0);
console.log("Sum of ages:", sumAges);

// Task 3

// Make a new object with properties from companies[0] and a print method
const { name: companyName, category } = companies[0]; 
const newCompanyObj = {
  name: companyName,
  category,
  print() {
    console.log(`Name: ${this.name}, Category: ${this.category}`);
  }
};

// Destructuring the property 'street' from the object 'person'
const { address: { street } } = person;

// Function taking an unknown number of number arguments and returning their sum
const sumArguments = (...args) => args.reduce((sum, num) => sum + num, 0);

// Function taking unknown arguments, flattening arrays, and returning a new array
const flattenArguments = (...args) => {
  return args.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(val) : acc.concat([val]);
  }, []);
};

// Function returning an incrementing number starting from 0 using closures
const createCounter = () => {
  let count = 0;
  return () => count++;
};
const increment = createCounter(); 

// Function destructuring URL query parameters into an object
const getQueryParams = (urlString) => {
  const url = new URL(urlString);
  return Object.fromEntries(url.searchParams.entries());
};

// Task 4

class Shape {
  constructor(color) {
    this._color = color;
  }
  
  getArea() {
    return 0.0;
  }
  
  toString() {
    return `Shape[color=${this._color}]`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this._length = length;
    this._width = width;
  }
  
  getArea() {
    return this._length * this._width;
  }
  
  toString() {
    return `Rectangle[color=${this._color}, length=${this._length}, width=${this._width}]`;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this._base = base;
    this._height = height;
  }
  
  getArea() {
    return 0.5 * this._base * this._height;
  }
  
  toString() {
    return `Triangle[color=${this._color}, base=${this._base}, height=${this._height}]`;
  }
}

// Task 5

const generateRandomPromise = () => {
  return new Promise((resolve, reject) => {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    
    if (randomNumber > 5) {
      resolve(randomNumber); 
    } else {
      reject(new Error("Error")); 
    }
  });
};

// Execute the promise
generateRandomPromise()
  .then(result => console.log(`Success! Number: ${result}`)) 
  .catch(error => console.error(error.message));