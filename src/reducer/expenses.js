const emptyState = {}

const validateExpense = (expense) => {
  if(!expense.name)
    throw new Error('expense expected a name')
  if(!expense.price)
    throw new Error('expense expected a price')
}

export default (state=emptyState, {type, payload}) => {
  let categoryID, categoryExpenses, result
  let expense, oldCategoryID, oldCategory, newCategory
  switch(type){
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] }

    case 'CATEGORY_DESTROY':
      return { ...state, [payload.id]: undefined }

    case 'EXPENSE_UPDATE_CATEGORY_ID':
      expense = payload.expense
      oldCategoryID = expense.categoryID
      // avoid duplacates
      if(oldCategoryID == payload.categoryID)
        return state
      oldCategory = state[expense.categoryID].filter(item => item.id !== expense.id)
      // add expense to future secction
      expense.categoryID = payload.categoryID
      newCategory = [expense, ...state[payload.categoryID]]
      return {
        ...state,
        [oldCategoryID]: oldCategory,
        [expense.categoryID]: newCategory,
      }

    case 'EXPENSE_CREATE':
      validateExpense(payload)
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = [...categoryExpenses, payload]
      return { ...state, [categoryID]: result }

    case 'EXPENSE_UPDATE':
      validateExpense(payload)
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = categoryExpenses.map(item =>
        item.id === payload.id ? payload : item)
      return { ...state, [categoryID]: result }

    case 'EXPENSE_DESTROY':
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = categoryExpenses.filter(item => item.id !== payload.id)
      return { ...state, [categoryID]: result }

    default:
      return state
  }
}
