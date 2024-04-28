import { configureStore } from '@reduxjs/toolkit'
import publicDataSlice from './reduxSlices/publicDataSlice'

export const userPublicStore = () => {
  return configureStore({
    reducer: {
        userPublic: publicDataSlice.reducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof userPublicStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']