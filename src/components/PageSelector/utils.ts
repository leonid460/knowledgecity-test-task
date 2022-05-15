import { maxVisibleAmount } from './constants';

function generateArray(size: number, fillFn: (index: number) => number) {
  return new Array(size).fill(0).map((_, index) => fillFn(index));
}

export function generatePageNums(currentPage: number, lastPage: number): number[] {
  if (lastPage <= maxVisibleAmount) {
    return generateArray(lastPage, (index) => index + 1);
  }

  if (currentPage === lastPage) {
    const start = lastPage - maxVisibleAmount;

    return generateArray(maxVisibleAmount, (index) => start + index + 1);
  }

  if (currentPage < maxVisibleAmount) {
    return generateArray(maxVisibleAmount, (index) => index + 1);
  }

  const start = currentPage - maxVisibleAmount + 2;

  return generateArray(maxVisibleAmount, (index) => start + index);
}
