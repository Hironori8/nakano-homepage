import {createStore} from 'redux';//reduxの機能
import Reducer from '../reducers/reducer';　//ファイル追加②

export default function configureStore() {
		const store = createStore(Reducer);
  return store;
}
