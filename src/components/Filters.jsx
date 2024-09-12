/* eslint-disable react/prop-types */
import { useId, useContext } from 'react'
import './Filters.css'
import { FiltersContext } from '../context/filters'

// const categories = [
//   "smartphones",
//   "laptops",
//   "fragrances",
//   "skincare",
//   "groceries",
//   "home-decoration",
//   "furniture",
//   "tops",
//   "womens-dresses",
//   "womens-shoes",
//   "mens-shirts",
//   "mens-shoes",
//   "mens-watches",
//   "womens-watches",
//   "womens-bags",
//   "womens-jewellery",
//   "sunglasses",
//   "automotive",
//   "motorcycle",
//   "lighting"
// ]

export function Filters ({props}) {
  const priceFilterId = useId()
  const categoryFilterId = useId()
  const { setFilters, filters } = useContext(FiltersContext)

  const categories = props.categories?.map((elem) => {
    return elem.slug
  })

  const handlePriceChange = (event) => {
    setFilters(prevState => ({
      ... prevState,
      minPrice: event.target.value
    }))
  }

  const handleCategoryChange = (event) => {
    setFilters(prevState => ({
      ... prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={priceFilterId}>Price min</label>
        <input 
          type="range"
          id={priceFilterId}
          min="0"
          max="1700"
          onChange={handlePriceChange} 
        />
        <strong>${filters.minPrice}</strong>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
          <select id={categoryFilterId} onChange={handleCategoryChange}>
            <option value="all">all</option>
            {
            categories.map((elem, index) => {
              return <option key={index} value={elem}>{elem}</option>
            })
            }
          </select>
      </div>
    </section>
  )
}