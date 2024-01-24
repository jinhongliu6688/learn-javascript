/**
 * @param {Object[]} groups
 * @param {number} groups.id
 * @param {string} groups.title
 * @param {object} groups.details
 * @param {number} groups.details.messageCount
 * @param {boolean} groups.details.isPublic
 */
const allGroupsPublic = groups => {
    return groups.every(group => {
        return group.details.isPublic == true
    })
}

// Sample usage - do not modify
const sampleGroups = [{
    id: 1,
    title: "Football",
    details: {
        messageCount: 30,
        isPublic: true
    }
}, {
    id: 2,
    title: "Family",
    details: {
        messageCount: 1014,
        isPublic: false
    }
}];
console.log(allGroupsPublic(sampleGroups));
