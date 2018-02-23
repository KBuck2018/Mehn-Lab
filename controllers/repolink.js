
const express = require('express')
const router = express.Router()

const RepoLink = require('../models/RepoLink')

router.get('/', (req, res) => {
  RepoLink.find({}).then(repolinks => {
      res.render('post/index', {repolinks})
    })
})
router.get("/new", (req, res) => {
    res.render("post/new")
})
router.post("/", (req, res) => {
    if (req.body.title) {
    RepoLink.create({
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
        date: req.body.date
    }).then(repolink => {
        res.redirect("/repolinks")
    })
} else {
    res.render('post/error')
}
})

router.get('/edit/:id', (req, res) =>{
    RepoLink.findOne({ _id: req.params.id }).then(repolink => {
        res.render('post/edit', repolink)
    })
})

router.get('/:id', (req, res) => {
    RepoLink.findOne({ _id: req.params.id }).then(repolink => {
      res.render('post/show', repolink)
    })
  })

router.put('/:id', (req, res) => {
    RepoLink.findOneAndUpdate({ _id: req.params.id }, req.body).then(repolink => {
        res.redirect('/repolinks')
    })
})
router.delete('/:id', (req, res) => {
        RepoLink.findOneAndRemove({_id: req.params.id}).then(repolink => {
            res.redirect("/repolinks");
    })
})

module.exports = router
