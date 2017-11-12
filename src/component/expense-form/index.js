import './expense-form.scss'
import React from 'react'

let emptyState = {
  name: '',
  price: '',
}

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.expense || emptyState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    let {value, name, type} = e.target
    value = type === 'number' ? Number(value) : value
    value = value === 0 ? '' : value
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    let categoryID = this.props.category ?
      this.props.category.id :
      this.props.expense.categoryID

    this.props.onComplete({
      ...this.state,
      categoryID,
    })

    this.setState(emptyState)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.expense)
      this.setState(nextProps.expense)
  }

  render(){
    let buttonText = this.props.expense ? 'Update' : 'Create'
    return (
      <form
        className='expense-form'
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <legend> {buttonText} Expense </legend>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type='number'
            name='price'
            placeholder='price'
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button type='submit'> {buttonText.toLowerCase()} </button>
        </fieldset>
      </form>
    )
  }

}

export default ExpenseForm
