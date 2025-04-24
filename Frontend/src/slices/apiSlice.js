import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const basequery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
    basequery,
    tagTypes : ['Product','Order','User'], // for invalidating cache
    endpoints : (builder) => ({})
})