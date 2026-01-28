import { setFilters } from "@/entites/Questions/model/filtersSlice";
import { useAppDispatch } from "@/shared/libs/hooks";

interface Props {
  filterName:
    | "rate"
    | "questionSkills"
    | "questionSpecializations"
    | "complexity";
}

export const useToggleFilters = ({ filterName }: Props) => {
  const dispatch = useAppDispatch();
  const toggleFilterState = (
    variant: number | string,
    currentState: (number | string)[],
  ) => {
    const next = currentState.includes(variant)
      ? currentState.filter((item) => item !== variant)
      : [...currentState, variant];

    dispatch(setFilters({ [filterName]: next }));
  };

  return toggleFilterState;
};
