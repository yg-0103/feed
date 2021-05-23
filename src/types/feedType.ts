export type FeedData = {
  current_page: number;
  data: Feed[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
};

export type Feed = {
  id: number;
  title: string;
  contents: string;
  category_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
};

export type FeedAdsData = {
  current_page: number;
  data: FeedAds[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
};

export type FeedAds = {
  id: number;
  title: string;
  contents: string;
  img: string;
  created_at: Date;
  updated_at: Date;
};

export type FeedState = {
  feeds: {
    loading: boolean;
    data: null | FeedData;
    error: null | Error;
  };
  feedAds: {
    loading: boolean;
    data: null | FeedAdsData;
    error: null | Error;
  };
};

export type Link = {
  url: null | string;
  label: number | string;
  active: boolean;
};
