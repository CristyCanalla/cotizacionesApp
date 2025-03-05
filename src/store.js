// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { cotizacionesApi } from './cotizacionesApi'; // Asegúrate de que la ruta sea correcta

export const store = configureStore({
    reducer: {
        [cotizacionesApi.reducerPath]: cotizacionesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cotizacionesApi.middleware),
});