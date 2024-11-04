// entities/Transfer.js
class Transfer {
    constructor(fromUser, toUser, value) {
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.value = value;
        this.date = new Date();
    }
}

module.exports = Transfer;
