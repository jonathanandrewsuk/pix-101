import { PIXABAY_API_KEY } from '../../.secrets.env';

export default {
getImagesService: async (args) => {
    const {
      dataSource, searchFor, perPage, page,
    } = args;
    const newNumPages = perPage === 200 ? page + 1 : page;
    const newNumPerPages = perPage + 10;
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${searchFor}&image_type=photo&page=${newNumPages}&per_page=${newNumPerPages}`)
      const data = await response.json()
      const foundImages = data.hits
      const newDataSource = dataSource.cloneWithRows([...dataSource, ...foundImages])
      const formattedData = {
        searchFor,
        dataSource: newDataSource,
        selectedItem: {},
        home: false,
        page: newNumPages,
        perPage: newNumPerPages
      };
      return formattedData;
    } catch (err) {
      console.log(err);
      throw new Error(err.response);
    }
},
};
