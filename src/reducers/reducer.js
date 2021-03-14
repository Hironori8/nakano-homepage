const initialState = {
		isEng: false,
}

export default function Reducer(state=initialState, action) {
  switch(action.type){
    case "chLang": {
						console.log('chLang入りました〜！！！')
						return {
								...state,
								isEng: !state.isEng
						}
				}
    default:
      return state
  }
}
