import { getPagination } from './Pagination.helper';

describe('Pagination', () => {
  // -1 value in arrays represents dots in pagination

  test('Check pagination elements when six pages', () => {
    const pagination = getPagination(6, 1);
    expect(pagination).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Check pagination elements when less than six pages', () => {
    const pagination = getPagination(3, 1);
    expect(pagination).toEqual([1, 2, 3]);
  });

  test('Check pagination elements when more than six pages and first page', () => {
    const pagination = getPagination(10, 1);
    expect(pagination).toEqual([1, 2, 3, -1, 8, 9, 10]);
  });

  test('Check pagination elements when more than six pages and second page', () => {
    const pagination = getPagination(10, 2);
    expect(pagination).toEqual([1, 2, 3, -1, 8, 9, 10]);
  });

  test('Check left hand side of pagination elements behavior when more than six pages', () => {
    const pagination = getPagination(10, 4);
    expect(pagination).toEqual([3, 4, 5, -1, 8, 9, 10]);
  });

  test('Check pagination elements when coming up to end', () => {
    const pagination = getPagination(12, 11);
    expect(pagination).toEqual([-1, 7, 8, 9, 10, 11, 12]);
  });

  test('Check pagination elements when at edge, while coming up to end', () => {
    const pagination = getPagination(12, 6);
    expect(pagination).toEqual([5, 6, 7, -1, 10, 11, 12]);
  });
});
