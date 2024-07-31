// 1. Exploring JavaScript Objects

// Objective: The aim of this assignment is to deepen understanding and proficiency in manipulating JavaScript objects, including creating objects, accessing properties and methods, using constructors, and working with prototypes.

// Problem Statement: You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to add new books, search for books by title or author, and display information about the library's collection.


// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

// Task 2: Implement a method within the Book object to display book information.

class Book {
    constructor (bookTitle, bookAuthor, bookPages) {
        this.bookTitle = bookTitle,
        this.bookAuthor = bookAuthor,
        this.bookPages = bookPages
    };

    displayBookInformation () {
        console.log (`Book Information:\nTitle: ${this.bookTitle}\nAuthor: ${this.bookAuthor}\nPage Count: ${this.bookPages}`)
    };
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);


// Task 2:

console.log("*".repeat(35))
console.log("Task 2:")

book1.displayBookInformation();

console.log("*".repeat(35))


// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

let library = [];

function addBook(bookTitle, bookAuthor, bookPages) {
    const bookExists = library.some(book => book.bookTitle === bookTitle);

    if (bookExists) {
        console.log(`${bookTitle} is already in the library.`);
    } else {
        const newBook = new Book(bookTitle, bookAuthor, bookPages);
        library.push(newBook);
        console.log(`${bookTitle} was successfully added to the library.`);
    }
}

function displayLibrary() {
    console.log("Library Contents:");
    library.forEach((book, index) => {
        console.log(`Book ${index + 1}:`);
        book.displayBookInformation();
        console.log();
    })
}

function searchLibrary(titleOrAuthor) {
    const matchingBooks = library.filter(book =>
        book.bookTitle === titleOrAuthor || book.bookAuthor === titleOrAuthor
    );

    if (matchingBooks.length > 0) {
        matchingBooks.forEach(book => {
            console.log(`${book.bookTitle} written by ${book.bookAuthor} is available in the library.`);
        });
    } else {
        console.log(`Sorry, no results matching ${titleOrAuthor} are currently in the library.`);
    }
}


// Task 3:

console.log("Task 3:")

addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBook("1984", "George Orwell", 328);
addBook("To Kill a Mockingbird", "Harper Lee", 281)
addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);

console.log("-".repeat(35))

displayLibrary();

console.log("-".repeat(35))

searchLibrary("The Great Gatsby")
searchLibrary("Pride and Prejudice")

console.log("*".repeat(35))


// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.


function booksOver100Pages() {
    const booksOver100Pgs = library.filter(book =>
        book.bookPages > 100
    );

    if (booksOver100Pgs.length > 0) {
        booksOver100Pgs.forEach(book => {
            console.log(`${book.bookTitle} written by ${book.bookAuthor} is over 100 pages and is ${book.bookPages} pages long.`);
        });
    } else {
        console.log(`Sorry, no books with more than 100 pages are currently in the library.`);
    }
}

function formatBookTitlesAndAuthors(library) {
    const formattedBooks = library.map(book => {
        return new Book(
            `Title: ${book.bookTitle}`,
            `Author: ${book.bookAuthor}`,
            book.bookPages
        );
    });

    return formattedBooks;
}


// Task 4:

console.log("Task 4:")

booksOver100Pages()

console.log("-".repeat(35))

console.log("Unformatted library:")
console.log(library)

console.log("-".repeat(35))

console.log("Formatted library:")
const formattedLibrary = formatBookTitlesAndAuthors(library);
console.log(formattedLibrary);

console.log("*".repeat(35))



// 2. Exploring Objects and Math in JavaScript

// Objective: The objective of this assignment is to enhance proficiency in working with JavaScript objects and utilizing the Math class for mathematical operations.

// Problem Statement: You are tasked with developing a JavaScript program that simulates a simple banking application. The program should allow users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.


// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

// Task 2: Implement methods within the Account object to deposit and withdraw funds.

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.

class BankAccount {
    constructor(ownerName, existingAccounts) {
        this.ownerName = ownerName;
        this.balance = 0;
        this.accountNumber = this.generateUniqueAccountNumber(existingAccounts);
        existingAccounts.push(this.accountNumber);
    }

    generateAccountNumber() {
        return 'ACC' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    }

    generateUniqueAccountNumber(existingAccounts) {
        let accountNumber;
        do {
            accountNumber = this.generateAccountNumber();
        } while (existingAccounts.includes(accountNumber));
        return accountNumber;
    }

    deposit(depositAmount) {
        if (typeof depositAmount === 'number' && depositAmount > 0) {
            this.balance += depositAmount;
            console.log(`\$${depositAmount} was successfully deposited into your account.`);
            console.log(`Current account balance: \$${this.balance}`);
        } else {
            console.log(`Invalid deposit amount. Enter a positive number.`);
        }
        return this.balance;
    }

    withdraw(withdrawalAmount) {
        if (typeof withdrawalAmount === 'number' && withdrawalAmount > 0) {
            if (this.balance >= withdrawalAmount) {
                this.balance -= withdrawalAmount;
                console.log(`\$${withdrawalAmount} was successfully withdrawn from your account.`);
                console.log(`Current account balance: \$${this.balance}`);
            } else {
                console.log(`Sorry, insufficient funds in your account to withdraw \$${withdrawalAmount}`);
                console.log(`Current account balance: \$${this.balance}`);
            }
        } else {
            console.log(`Invalid withdrawal amount. Enter a positive number.`);
        }
        return this.balance;
    }

    checkBalance() {
        console.log(`Account balance: \$${this.balance}`);
        return this.balance;
    }

    getAccountDetails() {
        console.log(`Account Owner: ${this.ownerName}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Current Balance: \$${this.balance}`);
    }

    calculateCompoundInterest(rate, timesCompounded, years) {
        const r = rate / 100;
        const futureValue = this.balance * Math.pow((1 + r / timesCompounded), timesCompounded * years);
        return futureValue;
    }

}

const existingAccounts = ['ACC000001', 'ACC000002'];



// Task 1:

console.log("Task 1:")

const myAccount = new BankAccount('Jane Smith', existingAccounts);
myAccount.getAccountDetails();

console.log("*".repeat(35))


// Task 2:

console.log("Task 2:")

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(500);
myAccount.deposit(10000);

console.log("-".repeat(35))

myAccount.getAccountDetails();

console.log("-".repeat(35))

console.log("Existing account numbers:")
console.log(existingAccounts)

console.log("*".repeat(35))


// Task 3:

console.log("Task 3:")

const compoundInterestValue = myAccount.calculateCompoundInterest(5, 4, 10);
console.log(`Initial investment: \$${myAccount.balance}`)
console.log(`Investment parameters: 5% annual interest, compounded quarterly, over 10 years`)
console.log(`Future value of the investment: \$${compoundInterestValue.toFixed(2)}`);

console.log("*".repeat(35))


