import { createSlice } from '@reduxjs/toolkit';

export const materialsSlice = createSlice({
  name: 'materials',
  initialState: {
    materials: [],
    isLoading: false,
    message: '',
  },
  reducers: {
    fetchMaterials: (state) => {
      state.isLoading = true;
      state.message = '';
    },
    fetchMaterialsSuccess: (state, payload) => {
      console.log(payload, 'store');
      state.materials = payload;
      state.isLoading = false;
    },
    fetchMaterialsReject: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    },
  },
});

export const { fetchMaterials, fetchMaterialsSuccess, fetchMaterialsReject } = materialsSlice.actions;

export default materialsSlice.reducer;
