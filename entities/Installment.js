// entities/Installment.js
class Installment {
    constructor(amount, number) {
        this.amount = amount;
        this.number = number;
        this.status = 'pending'; // Corrigido de 'peding' para 'pending'
    }
}

module.exports = Installment;
