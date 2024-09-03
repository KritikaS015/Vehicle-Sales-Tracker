import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : baseURI}),
    endpoints : builder => ({
        // get cars
        getCars : builder.query({
            // get: 'http://localhost:8080/api/cars'
            query: () => '/api/cars',
            providesTags: ['cars']
        }),
        // add new sale
        addCars : builder.mutation({
            query : (initialCar) => ({
                // post: 'http://localhost:8080/api/cars'
                url: '/api/cars',
                method: "POST",
                body: initialCar
            }),
            invalidatesTags: ['cars']
        }),
        getBikes : builder.query({
            // get: 'http://localhost:8080/api/bikes'
            query: () => '/api/bikes',
            providesTags: ['bikes']
        }),
        addBikes : builder.mutation({
            query : (initialBike) => ({
                // post: 'http://localhost:8080/api/bikes'
                url: '/api/bikes',
                method: "POST",
                body: initialBike
            }),
            invalidatesTags: ['bikes']
        }),
        getScooters : builder.query({
            // get: 'http://localhost:8080/api/scooters'
            query: () => '/api/scooters',
            providesTags: ['scooters']
        }),
        addScooters : builder.mutation({
            query : (initialScooter) => ({
                // post: 'http://localhost:8080/api/scooters'
                url: '/api/scooters',
                method: "POST",
                body: initialScooter
            }),
            invalidatesTags: ['scooter']
        }),
        getTrucks : builder.query({
            // get: 'http://localhost:8080/api/trucks'
            query: () => '/api/trucks',
            providesTags: ['trucks']
        }),
        addTrucks : builder.mutation({
            query : (initialTruck) => ({
                // post: 'http://localhost:8080/api/trucks'
                url: '/api/trucks',
                method: "POST",
                body: initialTruck
            }),
            invalidatesTags: ['truck']
        }),
        // get accounts
        getAccounts : builder.query({
            // get: 'http://localhost:8080/api/accounts'
            query: () => '/api/accounts',
            providesTags: ['accounts']
        }),
        // add new account
        addAccounts : builder.mutation({
            query : (initialAccount) => ({
                // post: 'http://localhost:8080/api/accounts'
                url: '/api/accounts',
                method: "POST",
                body: initialAccount
            }),
            invalidatesTags: ['accounts']
        }),
    })
})

export default apiSlice;