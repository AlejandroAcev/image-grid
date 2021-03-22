const DEFAULT_LIMIT = 5;
const DEFAULT_PAGE = 1;

type DataResponse<T> = T | null;

const DataFetcher = {
  picsum: {
    list: async <T>(limit: number = DEFAULT_LIMIT, page: number = DEFAULT_PAGE): Promise<DataResponse<T>> => {
      const endpoint = process.env.REACT_APP_API_PICSUM;
      
      if (endpoint) {
        const request = await fetch(`${endpoint}/v2/list?page=${page}&limit=${limit}`);
  
        if (request.ok) {
          const result = await request.json();
          return result;
        }
  
        return null;
      }
  
      throw new Error('Enviroment variable not set');
    },
    details: async <T>(id: string): Promise<DataResponse<T>> => {
      const endpoint = process.env.REACT_APP_API_PICSUM;
      
      if (endpoint) {
        const request = await fetch(`${endpoint}/id/${id}info`);
  
        if (request.ok) {
          const result = await request.json();
          return result;
        }
  
        return null;
      }
  
      throw new Error('Enviroment variable not set');
    }
  },
  rickandmorty: () => {},
}

export default DataFetcher;