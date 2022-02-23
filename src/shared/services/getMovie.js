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


export const  getMovie=async(id)=> {
  const { data } = await instanse.get(`/movie/${id}?api_key=4fbe7a50ce1a6bc10e341cdef41a29ce`
  )
  return data;}
export  const getCasts=async (id)=> {
  const { data } = await instanse.get(`/movie/${id}/credits?api_key=4fbe7a50ce1a6bc10e341cdef41a29ce`
  )
  return data;}
export  const getReview=async (id)=> {
  const { data } = await instanse.get(`/movie/${id}/reviews?api_key=4fbe7a50ce1a6bc10e341cdef41a29ce`
  )
  return data;}
export  const getFilmSearch=async (query)=> {
  const { data } = await instanse.get(`/search/movie?api_key=4fbe7a50ce1a6bc10e341cdef41a29ce&language=en-US&query=${query}&page=1&include_adult=false`
  )
  return data;}

  // https://api.themoviedb.org/3/search/movie?api_key=dsklfmsdl&language=en-US&query=batm&page=1&include_adult=false