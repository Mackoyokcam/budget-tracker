import uuid from 'uuid'

export const create = ({name, price, categoryID}) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryID,
    timestamp: new Date(),
    id: uuid.v1(),
  },
})

export const update = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

export const destroy = (expense) => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
})

export const updateCategoryID = (expense, categoryID) => ({
  type: 'EXPENSE_UPDATE_CATEGORY_ID',
  payload: {expense, categoryID},
})
