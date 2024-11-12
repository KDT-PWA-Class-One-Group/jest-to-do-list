import formatDate from '../formatDate';

test('날짜가 YYYY/MM/DD 형식으로 포맷된다', () => {
  const date = new Date('2023-05-15');
  const formattedDate = formatDate(date);
  expect(formattedDate).toBe('2023/05/15');
});