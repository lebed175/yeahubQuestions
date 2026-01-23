import { baseApi } from "@/shared/config/api";
import type { QuestionType } from "../model/types";
import type { QueryState } from "../model/types";

interface Response {
  data: QuestionType[];
  total: number;
  limit: number;
}

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<Response, QueryState>({
      query: (queryState) => ({
        url: `questions/public-questions`,
        params: {
          page: queryState.currentPage,
          limit: queryState.limit,
          complexity:
            queryState.complexity?.length === 0
              ? undefined
              : queryState.complexity,
          rate: queryState.rate?.length === 0 ? undefined : queryState.rate,
          skills:
            queryState.questionSkills?.length === 0
              ? undefined
              : queryState.questionSkills,
          specializations:
            queryState.questionSpecializations?.length === 0
              ? undefined
              : queryState.questionSpecializations,
          title: queryState.title ?? undefined,
        },
      }),
    }),
    getQuestionsById: builder.query<QuestionType, number>({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),

  overrideExisting: false,
});

export const { useGetQuestionsQuery, useGetQuestionsByIdQuery } = questionsApi;
