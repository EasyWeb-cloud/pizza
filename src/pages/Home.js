import React , {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'

import {Categories , SortPopup , PizzaBlock , PizzaLoadingBlock} from '../components'
import {setCategory , setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category , sortBy} = useSelector(({filters}) => filters)
  const categoryNames = ['Мясные' , 'Вегетарианская' , 'Гриль' , 'Острые' , 'Закрытые']
  const sortItems = [
    {name : 'популярности', type: 'popular'},
    {name : 'цене', type: 'price'},
    {name : 'алфавиту', type: 'name'}]

  const onSelectCategory = index => {
    dispatch(setCategory(index))
  }

  const onSelectSortType = type => {
    dispatch(setSortBy(type))
  }

  useEffect(() => {
    console.log(category , sortBy)
    dispatch(fetchPizzas(sortBy , category))
  } , [category, sortBy])

  return (
      <div className="container">
        <div className="content__top">
          <Categories activeCategory={category} onClickItem={onSelectCategory} items={categoryNames}/>
          <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy} items={sortItems} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded ? items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>) : Array(12).fill(0).map((_,index) => <PizzaLoadingBlock key={index}/>)}
        </div>
      </div>
  )
}

export default Home
