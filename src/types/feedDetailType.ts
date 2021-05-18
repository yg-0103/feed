export type FeedDetailData = {
  data: FeedDetail;
};

export type FeedDetail = {
  id: number;
  title: string;
  contents: string;
  category_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  category: Category;
  reply: Reply[];
  user: User;
};

export type FeedDetailState = {
  loading: boolean;
  data: null | FeedDetailData;
  error: null | Error;
};

export type Category = {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export type Reply = {
  id: number;
  user_id: number;
  parent: number;
  contents: string;
  created_at: Date;
  updated_at: Date;
  user: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date;
  created_at: Date;
  updated_at: Date;
};
