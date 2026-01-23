export type QuestionsType = {
  data: QuestionType[];
  total: number;
  limit: number;
};

export type QuestionType = {
  id: number;
  keywords: string[];
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  imageSrc?: string;
  rate: number;
  complexity: number;
  questionSkills: SkillsType[];
  questionSpecializations: SpecializationsType[];
};

export type QueryState = {
  currentPage: number;
  limit: number;
  complexity?: number[] | null;
  rate?: number[] | null;
  questionSkills?: number[] | null;
  questionSpecializations?: number[] | null;
  title?: string | null;
};

export type SkillsType = {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
};

export type SpecializationsType = {
  id: number;
  title: string;
  imageSrc?: string;
  description: string;
};
