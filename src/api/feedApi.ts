import axios from 'axios';
import { FeedCategoryData } from '../types/feedCategoryType';
import { FeedDetailData } from '../types/feedDetailType';
import { FeedAbsData, FeedData } from '../types/feedType';

const baseUrl = 'https://problem.comento.kr/api';

export const getFeedAll = async (ord: string, category: string) => {
  const { data: feedData } = await axios.get<FeedData>(
    `${baseUrl}/list?page=0&ord=${ord}${category}&limit=10`
  );

  return feedData;
};

export const getFeed = async (id: number) => {
  const { data: feedDetailData } = await axios.get<FeedDetailData>(
    `${baseUrl}/view?id=${id}`
  );

  return feedDetailData;
};

export const getFeedAbs = async () => {
  const { data: feedAbsData } = await axios.get<FeedAbsData>(
    `${baseUrl}/ads?page=0&limit=10`
  );

  return feedAbsData;
};

export const getFeedCategory = async () => {
  const { data: feedCategoryData } = await axios.get<FeedCategoryData>(`
  ${baseUrl}/category`);

  return feedCategoryData;
};
