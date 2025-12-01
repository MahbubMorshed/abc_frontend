import axios from "axios";

/**
 * ENVIRONMENT MODE (AUTO-DETECT)
 */
const isProduction = window.location.hostname !== "localhost";

// Backend URLs
const PROD_URL = "https://abc-backend-hpsg.onrender.com"; // Your production backend   https://abc-backend-hpsg.onrender.com
const DEV_URL = "http://localhost:5000"; // Your local backend

// Final Base URL (backend + /api)
const BASE_URL = `${isProduction ? PROD_URL : DEV_URL}/api`;

/**
 * TOKEN STORAGE KEY (consistent everywhere)
 */
export const TOKEN_KEY = "abcToken";

/**
 * AXIOS INSTANCE
 */
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

/**
 * REQUEST INTERCEPTOR
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * OPTIONAL: RESPONSE ERROR NORMALIZATION
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    error.message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    return Promise.reject(error);
  }
);

export const login = (credentials) => api.post("/auth/login", credentials);

export const getAllJournal = () => api.get("/content/all/journal");

export const getSingleJournal = (slug) => api.get(`/content/journal/${slug}`);

export const getAllAdvisory = () => api.get("/content/all/advisory");

export const getSingleAdvisory = (slug) => api.get(`/content/advisory/${slug}`);

export const getAllServices = () => api.get("/content/all/sevices");

export const getSingleService = (slug) => api.get(`/content/service/${slug}`);

export const getAllCfp = () => api.get("/content/all/cfp");

export const getSingleCfp = (slug) => api.get(`/content/cfp/${slug}`);

export const getAllBlogs = () => api.get("/content/all/blogs");

export const getSingleBlog = (slug) => api.get(`/content/blog/${slug}`);

export default api;
