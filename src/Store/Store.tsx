import { configureStore } from '@reduxjs/toolkit'
import { FileTreeSliceReducer } from '../Slices/FileTree.slice'

export const Store = configureStore({
  reducer: {
    FileTreeSlice: FileTreeSliceReducer
  },
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

