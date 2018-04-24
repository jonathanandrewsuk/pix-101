export const fetchImages = (data) => {
  return {
    type: '$FETCH_IMAGES',
    data,
  };
};

export const clearThenFetchImages = (data) => {
  return {
    type: '$CLEAR_THEN_FETCH_IMAGES',
    data,
  };
};

export const REPLACE_IMAGES = 'REPLACE_IMAGES';

export const replaceImages = (data) => {
  return {
    type: REPLACE_IMAGES,
    data,
  };
};


export const HANDLE_TEXT_INPUT = 'HANDLE_TEXT_INPUT';

export const handleTextInput = (data) => {
  return {
    type: 'HANDLE_TEXT_INPUT',
    data,
  };
};

export const SELECT_ITEM = 'SELECT_ITEM';

export const selectItem = (data) => {
  return {
    type: 'SELECT_ITEM',
    data,
  };
};

export const RESET_STORE = 'RESET_STORE';

export const resetStore = () => {
  return {
    type: 'RESET_STORE',
  };
};
