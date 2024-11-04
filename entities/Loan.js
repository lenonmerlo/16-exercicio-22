// entities/Loan.js
const Installment = require("./Installment");

class Loan {
    static #interestRate = 0.05;

    constructor(amount, numberOfInstallments) {
        this.value = amount;
        this.date = new Date();
        this.installments = [];

        const installmentAmount = amount / numberOfInstallments;
        for (let i = 1; i <= numberOfInstallments; i++) {
            this.installments.push(new Installment(installmentAmount, i));
        }
    }

    static getInterestRate() {
        return this.#interestRate;
    }

    static setInterestRate(newRate) {
        this.#interestRate = newRate / 100;
    }
}

module.exports = Loan;
