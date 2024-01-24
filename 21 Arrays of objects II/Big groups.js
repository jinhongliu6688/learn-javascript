/**
 * @param {Object[]} groups
 * @param {number} groups.id
 * @param {string} groups.title
 * @param {object} groups.details
 * @param {number} groups.details.messageCount
 * @param {boolean} groups.details.public
 */
const getBigGroups = groups => {
    return groups.filter(group => {
        return group.details.messageCount >= 100
    })
}

// Sample usage - do not modify
const sampleGroups = [{
    id: 1,
    title: "Football",
    details: {
        messageCount: 30,
        public: true
    }
}, {
    id: 2,
    title: "Family",
    details: {
        messageCount: 1014,
        public: false
    }
}];
console.log(getBigGroups(sampleGroups));
