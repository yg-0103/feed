import axios from 'axios';
import { FeedData } from '../types/feedType';

export const getFeedAll = async () => {
  const { data: feedData } = await axios.get<FeedData>(
    `https://problem.comento.kr/api/list?page=0&ord=desc&category[]=1&category[]=2&category[]=3&limit=10`
  );

  return feedData;
};
