import { baseApi } from "@/shared/config/api";

interface Response {
  data: DataType[];
  limit: number;
  total: number;
}

type DataType = {
  id: number;
  title: string;
  description?: string;
};

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<Response, number>({
      query: (limit) => `skills?limit=${limit}`,
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
