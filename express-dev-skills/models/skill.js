var skills = [
    {id: 125223, skill: 'Learn Html', helpful: true},
    {id: 127904, skill: 'Learn CSS', helpful: true},
    {id: 139608, skill: 'Learn JavaScript', helpful: true}
]
	
module.exports = {
    getAll,
    getOne
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}
	
function getAll() {
    return skills
}