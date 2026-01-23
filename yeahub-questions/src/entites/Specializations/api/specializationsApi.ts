import { baseApi } from "@/shared/config/api";

interface Response {
  data: DataType[];
  limit: number;
  total: number;
}

type DataType = {
  id: number;
  title: string;
  description: string;
};

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<Response, number>({
      query: (limit = 5) => `specializations?limit=${limit}`,
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
