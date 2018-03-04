import React from 'react';
import actionFor from './actionCreators'




class App extends React.Component {


  addAnecdote = (event) => {
    event.preventDefault()
    this.props.store.dispatch(
      actionFor.anecdoteCreation(event.target.content.value)
    )
    event.target.content.value = ''
  }

  giveVote = (id) => () => {
    this.props.store.dispatch(
      actionFor.voteAction(id)
    )
  }

  render() {
    const anecdotes = this.props.store.getState()
    /*
    anecdotes.sort(function (a, b) {
      return b.votes - a.votes;
    });*/
    
    anecdotes.sort((a, b) => b.votes - a.votes);

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.giveVote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="content" /></div>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
}

export default App