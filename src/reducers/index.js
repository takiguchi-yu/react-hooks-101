const events = (state = [], action) => {
  
  switch(action.type) {

    // イベント作成
    case 'CREATE_EVENT': 
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;

      return [...state, { id, ...event }];

    // イベント削除
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id);

    // 全てのイベント削除
    case 'DELETE_ALL_EVENTS': 
      return [];
    default:
      return state;  
  }
};

export default events;
