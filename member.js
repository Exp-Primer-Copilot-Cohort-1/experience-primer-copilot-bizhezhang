function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JavaScript', 'CSS', 'HTML'],
        addSkill: function (newSkill) {
            this.skills.push(newSkill);
        }
    };
    return member;
}