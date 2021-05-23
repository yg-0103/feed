import axios from 'axios';
import { baseUrl, limit } from 'constant';
import { FeedCategoryData } from 'types/feedCategoryType';
import { FeedDetailData } from 'types/feedDetailType';
import { FeedAdsData, FeedData } from 'types/feedType';

export const getFeedAll = async (
  ord: string,
  category: string,
  page: number = 1
) => {
  const { data: feedData } = await axios.get<FeedData>(
    `${baseUrl}/list?page=${page}&ord=${ord}${category}&limit=${limit}`
  );

  return feedData;
};

export const getFeed = async (id: number) => {
  const { data: feedDetailData } = await axios.get<FeedDetailData>(
    `${baseUrl}/view?id=${id}`
  );

  return feedDetailData;
};

export const getFeedAds = async (page: number = 1) => {
  const { data: feedAdsData } = await axios.get<FeedAdsData>(
    `${baseUrl}/ads?page=${page}&limit=${limit}`
  );

  return feedAdsData;
};

export const getFeedCategory = async () => {
  const { data: feedCategoryData } = await axios.get<FeedCategoryData>(`
  ${baseUrl}/category`);

  return feedCategoryData;
};
