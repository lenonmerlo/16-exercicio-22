// App.js
const User = require('./entities/User');
const Account = require('./entities/Account');
const Loan = require('./entities/Loan');

class App {
    static #users = [];

    static createUser(fullName, email) {
        if (this.#users.find(user => user.email === email)) {
            console.log('Email já utilizado.');
            return;
        }
        const newUser = new User(fullName, email);
        newUser.account = new Account(newUser);
        this.#users.push(newUser);
        console.log('Usuário criado com sucesso');
    }

    static findUserByEmail(email) {
        return this.#users.find(user => user.email === email);
    }

    static deposit(email, value) {
        const user = this.findUserByEmail(email);
        if (user) {
            user.account.deposit(value);
            console.log(`Depósito de R$ ${value} realizado com sucesso.`);
        } else {
            console.log('Usuário não encontrado');
        }
    }

    static transfer(fromEmail, toEmail, value) {
        const fromUser = this.findUserByEmail(fromEmail);
        const toUser = this.findUserByEmail(toEmail);
        if (fromUser && toUser) {
            fromUser.account.transfer(toUser, value);
            console.log(`Transferência de R$ ${value} realizada com sucesso de ${fromUser.fullName} para ${toUser.fullName}.`);
        } else {
            console.log('Usuário não encontrado');
        }
    }

    static takeLoan(email, value, numberOfInstallments) {
        const user = this.findUserByEmail(email);
        if (user) {
            user.account.takeLoan(value, numberOfInstallments);
            console.log(`Empréstimo de R$ ${value} solicitado com sucesso para ${user.fullName}.`);
        } else {
            console.log('Usuário não encontrado');
        }
    }

    static changeInterestRate(newRate) {
        Loan.setInterestRate(newRate);
        console.log(`Taxa de juros alterada para ${newRate}%.`);
    }
}

module.exports = App;
