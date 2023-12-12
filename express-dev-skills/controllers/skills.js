var Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkills,
    create,
}

function create(req, res) {
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills')
}

function newSkills(req, res) {
    res.render('skills/new', {title: 'New Skill'})
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: "Skills Details"
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}