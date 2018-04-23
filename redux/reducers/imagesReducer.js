import { ListView } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });

const defaultState = {
  searchFor: 'dogs',
  dataSource: ds.cloneWithRows([]),
  selectedItem: {},
  home: true,
  canLoadMoreContent: true,
  page: 1,
  perPage: 10,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REPLACE_IMAGES':
      return {
        searchFor: action.data.searchFor,
        dataSource: action.data.dataSource,
        selectedItem: action.data.selectedItem,
        home: action.data.home,
        canLoadMoreContent: action.data.canLoadMoreContent,
        page: action.data.page,
        perPage: action.data.perPage,
      };
    case 'HANDLE_TEXT_INPUT':
      return {
        ...state,
        searchFor: action.data,
      };
    case 'SELECT_ITEM':
      return {
        ...state,
        selectedItem: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
