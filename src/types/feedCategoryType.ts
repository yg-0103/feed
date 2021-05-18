export type FeedCategoryState = {
  loading: boolean;
  data: null | FeedCategoryData;
  error: null | Error;
};

export type FeedCategoryData = {
  category: Category[];
};

export type Category = {
  id: number;
  name: string;
};
