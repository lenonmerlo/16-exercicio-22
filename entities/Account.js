// entities/Account.js
const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

class Account {
    #balance = 0;
    deposits = [];
    loans = [];
    transfers = [];
    owner;

    constructor(owner) {
        this.owner = owner;
    }

    get balance() {
        return this.#balance;
    }

    deposit(value) {
        const deposit = new Deposit(value);
        this.deposits.push(deposit);
        this.#balance += value;
    }

    takeLoan(value, numberOfInstallments) {
        const loan = new Loan(value, numberOfInstallments);
        this.loans.push(loan);
        this.#balance += value;
    }

    transfer(toUser, value) {
        if (toUser === this.owner) {
            this.deposit(value);
        } else {
            if (this.#balance >= value) {
                this.#balance -= value;
                const transfer = new Transfer(this.owner, toUser, value);
                this.transfers.push(transfer);
            } else {
                console.log('Saldo insuficiente para transferência');
            }
        }
    }

    listDeposits() {
        console.table(this.deposits.map(deposit => ({
            Value: deposit.value,
            Date: deposit.date.toLocaleString()
        })));
    }

    listLoans() {
        console.table(this.loans.map(loan => ({
            Value: loan.value,
            Date: loan.date.toLocaleString(),
            Installments: loan.installments.length
        })));
    }

    listTransfers() {
        console.table(this.transfers.map(transfer => ({
            From: transfer.fromUser,
            To: transfer.toUser,
            Value: transfer.value,
            Date: transfer.date.toLocaleString()
        })));
    }
}

module.exports = Account;
