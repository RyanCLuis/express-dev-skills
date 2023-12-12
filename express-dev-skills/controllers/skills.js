var Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkills,
    create,
    delete: deleteSkills,
    edit,
    update
}

function update(req, res) {
    Skill.update(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit', {
        title: 'Edit Skills',
        skill
    })
}
function deleteSkills(req,res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
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