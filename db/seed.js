var RepoLink = require("../models/RepoLink");
const data = require("./seeds.json");
var User = require("../models/User");

RepoLink.remove({}).then(() =>{
    return RepoLink.collection.insert(data);
}).then(() => {
    process.exit();
});

User.remove({}).then(() => {
    process.exit();
});