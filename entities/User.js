// entities/User.js
class User {
    constructor(fullName, email) {
        this.fullName = fullName;
        this.email = email;
        this.account = null;
    }

    displayUserInfo() {
        console.table([{
            FullName: this.fullName,
            Email: this.email,
            AccountBalance: this.account ? this.account.balance : 'N/A'
        }]);
    }
}

module.exports = User;
