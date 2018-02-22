const express = require('express')
const router = express.Router()

const RepoLink = require('../models/RepoLink')

router.get('/', (req, res) => {
  RepoLink.find({}).then(repolinks => {
      res.render('post/index', {repolinks})
    })
})

router.get("/new", (req, res) => {
    res.render("/post/new")
})

router.post("/", (req, res) => {
    RepoLink.create({
        title: req.body.title,
        url: req.body.url,
        description : req.body.description,
        date : req.body.date,
        comments: req.body.comments
    }).then(repolink => {
        res.redirect("/post")
    })
})

module.exports = router
