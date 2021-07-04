import React , {useEffect , useState} from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

import {Header} from './components'
import {Home , Cart} from './pages'

const App = () => {
  const [pizzas , setPizzas] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas))
  } , [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={() => <Home items={pizzas}/>} exact/>
        <Route path='/cart' component={Cart} exact/>
      </div>
    </div>
  );
}

export default connect()(App);
