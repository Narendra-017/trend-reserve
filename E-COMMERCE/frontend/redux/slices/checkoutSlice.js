import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const createCheckout = createAsyncThunk(
  'checkout/createCheckout',
  async (checkoutData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('userToken')
      const headers = token ? { Authorization: `Bearer ${token}` } : {}

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
        checkoutData,
        { headers }
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Something went wrong' })
    }
  }
)

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    checkout: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCheckout.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createCheckout.fulfilled, (state, action) => {
        state.loading = false
        state.checkout = action.payload
      })
      .addCase(createCheckout.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload?.message || 'Checkout failed'
      })
  },
})

export default checkoutSlice.reducer
