let  data = [
  {comment:'哈哈哈'},
  {comment:'嘿嘿嘿'}
]

export default function commentReducer(state=data, action){
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,{comment:action.data}]
    default:
      return state
  }
}
