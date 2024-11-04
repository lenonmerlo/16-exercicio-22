// index.js
const App = require('./App');

// Criando usuários
App.createUser("João Silva", "joao@example.com");
App.createUser("Maria Oliveira", "maria@example.com");

// Realizando depósitos e transferências
App.deposit("joao@example.com", 500);
App.transfer("joao@example.com", "maria@example.com", 200);

// Solicitando um empréstimo
App.takeLoan("maria@example.com", 1000, 5);

// Exibir informações
console.log("\nDepósitos de João:");
App.findUserByEmail("joao@example.com").account.listDeposits();

console.log("\nEmpréstimos de Maria:");
App.findUserByEmail("maria@example.com").account.listLoans();

console.log("\nTransferências de João:");
App.findUserByEmail("joao@example.com").account.listTransfers();

console.log("\nInformações do Usuário João:");
App.findUserByEmail("joao@example.com").displayUserInfo();
