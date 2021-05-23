import { Dispatch } from 'redux';

export const asyncInfinityScroll = (dispatch: Dispatch, cb: any) => {
  const {
    scrollHeight,
    clientHeight,
    scrollTop,
  } = document.scrollingElement as Element;
  if (scrollTop + clientHeight >= scrollHeight) {
    dispatch(cb);
  }
};
