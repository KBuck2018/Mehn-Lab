const mongoose = require("../db/connection");

const repoSchema = new mongoose.Schema({
    title: String,
    url: String,
    description: String,
    date: String,
    comments: [String]
})

const RepoLink = mongoose.model("RepoLink", repoSchema);

module.exports = RepoLink;