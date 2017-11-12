import './category-item.scss'
import React from 'react'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import DropZone from '../drop-zone'
import faker from 'faker'
import {connect} from 'react-redux'
import * as category from '../../action/categories.js'
import * as expense from '../../action/expenses.js'
import * as util from '../../lib/util.js'

class CategoryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {editing: false}
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(category){
    this.props.categoryUpdate(category)
    this.setState({editing: false})
  }

  componentWillMount(){
    this.props.expenseCreate({name: faker.lorem.words(3), price: faker.random.number(), categoryID: this.props.category.id})
    this.props.expenseCreate({name: faker.lorem.words(3), price: faker.random.number(), categoryID: this.props.category.id})
  }


  render(){

    let {category, categoryDestroy, expenseCreate, expenses, expenseUpdateCategory} = this.props
    let categoryExpenses = expenses[category.id]
    let {editing} = this.state

    return (
      <li className='category-item'>
        <button className='delete' onClick={() => categoryDestroy(category)}>
        X
        </button>
        {util.renderIf(editing,
          <CategoryForm onComplete={this.handleUpdate} category={category} />)}
        {util.renderIf(!editing,
          <div className='label' onDoubleClick={() => this.setState({editing: true})}>
            <h4> Title: {category.name.toUpperCase()} </h4>
            <h4> Amount: {`$${category.amount}`} </h4>
          </div>
        )}

        <ExpenseForm onComplete={expenseCreate} category={category}/>
        <DropZone onComplete={(expense) => expenseUpdateCategory(expense, category.id)}>
          {categoryExpenses.map((expense, i) =>
            <ExpenseItem
              expense={expense}
              key={i}
            />
          )}
        </DropZone>
      </li>
    )
  }
}

let mapStateToProps = (state) => ({expenses: state.expenses})

let mapDispatchToProps = (dispatch) => ({
  categoryUpdate: (data) => dispatch(category.update(data)),
  categoryDestroy: (data) => dispatch(category.destroy(data)),
  expenseCreate: (data) => dispatch(expense.create(data)),
  expenseUpdateCategory: (data, categoryID) => dispatch(expense.updateCategoryID(data, categoryID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
