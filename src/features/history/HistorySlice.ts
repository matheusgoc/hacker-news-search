import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import HistoryModel from '../../models/HistoryModel';

interface HistoryState {
  list: HistoryModel[]
}

const initialState: HistoryState = {
  list: []
}

export const HistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<HistoryModel>) => {
      state.list.push(action.payload)
    },
    removeHistory: (state, action: PayloadAction<HistoryModel>) => {
      const index = state.list.findIndex((history) => {
        return history.text === action.payload.text && history.time === action.payload.time
      })
      state.list.splice(index, 1)
    }
  }
})

// actions
export const { addHistory, removeHistory } = HistorySlice.actions

// selectors
export const getHistory = (state:any) => state.history.list
export const getHistoryTotal = (state:any) => state.history.list.length

// reducers
export default HistorySlice.reducer