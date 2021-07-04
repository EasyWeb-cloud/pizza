import React , {memo} from 'react'

const Categories = memo(function Categories({activeCategory , items , onClickItem}){

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>Все</li>
        {items && items.map((name , index) => (
          <li onClick={() => onClickItem(index)} className={activeCategory === index? 'active' : ''} key={`${name}_${index}`}>{name}</li>
        ))}
      </ul>
    </div>
  )
})

export default Categories
