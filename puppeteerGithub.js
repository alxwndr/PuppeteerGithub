const github = require('./github');

const login = 'email'; // email github
const psw = 'pass'; // pass github
const value = process.argv[2]; // Search value
const nbUsers = process.argv[3]; // Nb user to scrap

//$ node puppeteerGithub.js john 74

(async () => {

    await github.initialize();

    await github.login(login, psw);

    await github.search(value);

    await github.getUsers(nbUsers);

})()