var RepoLink = require("../models/RepoLink");
const data = require("./seeds.json");

RepoLink.remove({}).then(() =>{
    return RepoLink.collection.insert(data);
}).then(() => {
    process.exit();
});