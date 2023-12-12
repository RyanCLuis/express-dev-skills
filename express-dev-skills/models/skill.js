var skills = [
    {id: 125223, skill: 'Html', helpful: true},
    {id: 127904, skill: 'CSS', helpful: true},
    {id: 139608, skill: 'JavaScript', helpful: true}
]
	
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.helpful = false
    skills.push(skill)
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}
	
function getAll() {
    return skills
}