export const getCategoryId = (category: string): number => {
  let id = category.match(/\d/g)?.join('');

  return parseInt(id ? id : '', 10);
};
