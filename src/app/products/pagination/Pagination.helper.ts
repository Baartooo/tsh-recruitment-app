export const getPagination = (totalPages: number, currentPage: number): number[] => {
  if (totalPages < currentPage) return [];

  const pagination: number[] = [];
  if (totalPages <= 6) {
    for (let i = 0; i < totalPages; i++) {
      pagination.push(i + 1);
    }
  } else {
    if (currentPage < 3) {
      for (let i = 0; i < 3; i++) {
        pagination.push(i + 1);
      }
      pagination.push(-1);
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pagination.push(i);
      }
    } else if (currentPage > totalPages - 6) {
      pagination.push(-1);
      for (let i = totalPages - 6; i <= totalPages; i++) {
        pagination.push(i);
      }
    } else {
      for (let i = 0, j = currentPage - 1; i < 3; i++, j++) {
        pagination.push(j);
      }
      pagination.push(-1);
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pagination.push(i);
      }
    }
  }
  return pagination;
};
