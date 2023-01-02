import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export const getPosts = async (_page = 1, _limit = 9) => {
  const { data } = await instance('/', {
    params: {
      _page,
      _limit,
    },
  });
  return data;
};

export const searchPosts = async search => {
  const { data } = await instance('/', {
    params: {
      search,
    },
  });
  return data;
};
