// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
        console.log(`Account created, Account Number: ${accountNumber}, Account Balance: ${balance}`);
    }
    deposit(amount){
        this.amount = amount;
        this.balance += amount;
        console.log(`${this.amount} added to your account, total new balance: ${this.balance}`);
    }
    withdraw(amount){
        this.amount = amount;
        if(this.amount <= this.balance){
            this.balance -= this.amount;
            console.log(`${this.amount} Withdrawn from account, total new balance: ${this.balance}`)
        }
        else{
            console.log("insufficient balance :(");
        }
    }
}
const fahadAccount = new BankAccount(1234, 1000);
fahadAccount.deposit(500);
fahadAccount.withdraw(1000);