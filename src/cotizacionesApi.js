import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

    export const cotizacionesApi = createApi({
        reducerPath: "cotizacionesApi",
        baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
        endpoints: (builder) => ({
            getCotizaciones: builder.query({
                query: () => "/cotizaciones",
                providesTags: ["Cotizaciones"],
            }),
            addCotizacion: builder.mutation({
                query: (cotizacion) => ({
                    url: "/cotizaciones",
                    method: "POST",
                    body: cotizacion,
                }),
                invalidatesTags: ["Cotizaciones"],
            }),
            deleteCotizacion: builder.mutation({
                query: (id) => ({
                    url: `/cotizaciones/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: ["Cotizaciones"],
            }),
        }),
    });

    export const {
        useGetCotizacionesQuery,
        useAddCotizacionMutation,
        useDeleteCotizacionMutation,
    } = cotizacionesApi;