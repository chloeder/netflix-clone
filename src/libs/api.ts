import { apiKey, apiUrl } from "../config";

export const getPlayingMovies = async () => {
  const response = await fetch(`${apiUrl}/now_playing?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};

export const getPopularMovies = async () => {
  const response = await fetch(`${apiUrl}/popular?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};

export const getTopRatedMovies = async () => {
  const response = await fetch(`${apiUrl}/top_rated?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};

export const getUpcomingMovies = async () => {
  const response = await fetch(`${apiUrl}/upcoming?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};
