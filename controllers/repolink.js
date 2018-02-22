const express = require('express')
const router = express.Router()

const RepoLink = require('../models/RepoLink')

router.get('/', (req, res) => {
  RepoLink.find({}).then(repolinks => {
      res.render('post/index', {repolinks})
    })
})

router.get('/:id', (req, res) => {
    RepoLink.findOne({ _id: req.params.id }).then(repolink => {
      res.render('post/show', repolink)
    })
  })

module.exports = router
