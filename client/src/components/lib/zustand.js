import create from 'zustand';
import axios from 'axios';

const useSubmitStore = create((set) => ({
  handleSubmit: async (form) => {
    try {
      const res = await axios.post('https://xyz-wiet.onrender.com/mens', form);
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
      const res = await axios.get('https://xyz-wiet.onrender.com/mens');
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
