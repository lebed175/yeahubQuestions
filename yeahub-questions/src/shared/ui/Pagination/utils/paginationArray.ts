export const getPaginationArray = (
  currentPage: number,
  totalButtons: number,
) => {
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalButtons, currentPage + 2);

  const paginationArray = [];

  for (let i = start; i <= end; i++) {
    paginationArray.push(i);
  }

  return { paginationArray, start, end };
};
