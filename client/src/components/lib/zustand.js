import create from 'zustand';
import axios from 'axios';

const useSubmitStore = create((set) => ({
  handleSubmit: async (form) => {
    try {
      const res = await axios.post('http://localhost:7000/mens', form);
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
  },
}));

const useDataStore = create((set) => ({
  data: [],
  getData: async () => {
    try {
      const res = await axios.get('http://localhost:7000/mens');
      set({ data: res.data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export {
  useDataStore,
  useSubmitStore
}
