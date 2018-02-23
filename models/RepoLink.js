const mongoose = require("../db/connection");

const repoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: { 
        type: String,
        required: true
    },
    description: String,
    date: {
        type: String,
        required: true
    },
    comments: [String]
})

const RepoLink = mongoose.model("RepoLink", repoSchema);

module.exports = RepoLink;