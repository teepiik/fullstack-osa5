import React from 'react'
import ReactDOM from 'react-dom'
import counterReducer from './reducer'
import {createStore} from 'redux'


const Statistiikka = () => {
  const tila = store.getState()
  const palautteita = tila.good + tila.ok + tila.bad

  const keskiarvo = Math.round(((tila.good + tila.bad * -1)/palautteita)*100) / 100

  const positiivisia = Math.round((((tila.good)/palautteita) * 100)*10) / 10
  

  if (palautteita === 0) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{tila.good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{tila.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{tila.bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{keskiarvo}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{positiivisia}%</td>
          </tr>
        </tbody>
      </table>

      <button onClick={e => store.dispatch({ type: 'ZERO' })}>nollaa tilasto</button>
    </div >
  )
}

const store = createStore(counterReducer)

class App extends React.Component {

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={e => store.dispatch({ type: 'GOOD'})}>hyvä</button>
        <button onClick={e => store.dispatch({ type: 'OK'})}>neutraali</button>
        <button onClick={e => store.dispatch({ type: 'BAD'})}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
  console.log(store.getState())
}

renderApp()
store.subscribe(renderApp)

export default App
