import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
  },
});

export async function trendsMovie() {
  const { data } = await instanse.get('/trending/movie/week?api_key=4fbe7a50ce1a6bc10e341cdef41a29ce'
  )
  return data;}
// https://api.themoviedb.org/3/trending/movie/week?api_key=4fbe7a50ce1a6bc10e341cdef41a29ce