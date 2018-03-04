const generateId = () => (100000 * Math.random()).toFixed(0)

export default {

    anecdoteCreation(content) {
        return {
            type: 'NEW_ANECDOTE',
            data: {
                content,
                id: generateId(),
                votes: 0
            }
        }
    },
    voteAction(id) {
        return {
            type: 'VOTE',
            data: { id }
        }
    }
}
