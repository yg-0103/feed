export type AsyncState<T, E = any> = {
  data: T | null;
  loading: boolean;
  error: E | null;
};

export const asyncState = {
  initial<T, E = any>(): AsyncState<T, E> {
    return {
      loading: false,
      data: null,
      error: null,
    };
  },
  load<T, E = any>(): AsyncState<T, E> {
    return {
      loading: true,
      data: null,
      error: null,
    };
  },
  success<T, E = any>(data: T): AsyncState<T, E> {
    return {
      loading: false,
      data,
      error: null,
    };
  },
  error<T, E = any>(e: E): AsyncState<T, E> {
    return {
      loading: false,
      data: null,
      error: e,
    };
  },
};
