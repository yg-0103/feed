export type FeedCategoryState = {
  loading: boolean;
  data: null | FeedCategoryData;
  error: null | Error;
};

export type FeedCategoryData = Category[];

export type Category = {
  id: number;
  name: string;
};
