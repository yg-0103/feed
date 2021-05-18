import axios from 'axios';
import { FeedAbsData, FeedData } from '../types/feedType';

const baseUrl = 'https://problem.comento.kr/api';

export const getFeedAll = async () => {
  const { data: feedData } = await axios.get<FeedData>(
    `${baseUrl}/list?page=0&ord=asc&category[]=1&category[]=2&category[]=3&limit=10`
  );

  return feedData;
};

export const getFeedAbs = async () => {
  const { data: feedAbsData } = await axios.get<FeedAbsData>(
    `${baseUrl}/ads?page=0&limit=10`
  );

  return feedAbsData;
};
