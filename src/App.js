import React , {useEffect , useState} from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'

import {Header} from './components'
import {Home , Cart} from './pages'
import {setPizzas} from './redux/actions/pizzas'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:3004/pizzas').then(({data}) => dispatch(setPizzas(data)))
  } , [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' component={Home} exact/>
        <Route path='/cart' component={Cart} exact/>
      </div>
    </div>
  );
}

export default App;
