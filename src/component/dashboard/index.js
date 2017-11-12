import './dashboard.scss'
import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'
import * as category from '../../action/categories.js'

class Dashboard extends React.Component {

  render(){

    let {
      categories,
      categoryCreate,
    } = this.props

    return (
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate} />
        <div className='categories'>
          {categories.map((category, i) =>
            <CategoryItem
              category={category}
              key={i}
            />
          )}
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({categories: state.categories})

let mapDispatchToProps = (dispatch) => ({
  categoryCreate: (data) => dispatch(category.create(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
