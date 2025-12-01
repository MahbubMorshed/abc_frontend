import axios from "axios";
import { base_url } from "./config/config.js";

// Create axios instance with base settings
const api = axios.create({
  baseURL: `${base_url}/api`,
});

// Automatically attach token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("abcToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// ---------------- API ROUTES ----------------

// JOURNALS
export const getAllJournal = () => api.get("/content/all/journal");
export const getSingleJournal = (slug) => api.get(`/content/journal/${slug}`);

// ADVISORY
export const getAllAdvisory = () => api.get("/content/all/advisory");
export const getSingleAdvisory = (slug) => api.get(`/content/advisory/${slug}`);

// SERVICES
export const getAllServices = () => api.get("/content/all/services");
export const getSingleService = (slug) => api.get(`/content/service/${slug}`);

// CFP
export const getAllCfp = () => api.get("/content/all/cfp");
export const getSingleCfp = (slug) => api.get(`/content/cfp/${slug}`);

// BLOGS
export const getAllBlogs = () => api.get("/content/all/blogs");
export const getSingleBlog = (slug) => api.get(`/content/blog/${slug}`);

export default api;

// import axios from "axios";

// /**
//  * ENVIRONMENT MODE (AUTO-DETECT)
//  */

// // Backend URLs
// const PROD_URL = "https://abc-backend-hpsg.onrender.com"; // Your production backend   https://abc-backend-hpsg.onrender.com
// const DEV_URL = "http://localhost:5000"; // Your local backend

// // Final Base URL (backend + /api)
// const isLocalhost =
//   window.location.hostname === "localhost" ||
//   window.location.hostname === "127.0.0.1" ||
//   window.location.hostname.startsWith("192.168.") ||
//   window.location.hostname.startsWith("10.");

// const BASE_URL = `${isLocalhost ? DEV_URL : PROD_URL}/api`;

// /**
//  * TOKEN STORAGE KEY (consistent everywhere)
//  */
// export const TOKEN_KEY = "abcToken";

// /**
//  * AXIOS INSTANCE
//  */
// const api = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: false,
// });

// /**
//  * REQUEST INTERCEPTOR
//  */
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(TOKEN_KEY);

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// /**
//  * OPTIONAL: RESPONSE ERROR NORMALIZATION
//  */
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     error.message =
//       error?.response?.data?.message ||
//       error?.message ||
//       "Something went wrong";

//     return Promise.reject(error);
//   }
// );

// export const login = (credentials) => api.post("/auth/login", credentials);

// export const getAllJournal = () => api.get("/content/all/journal");

// export const getSingleJournal = (slug) => api.get(`/content/journal/${slug}`);

// export const getAllAdvisory = () => api.get("/content/all/advisory");

// export const getSingleAdvisory = (slug) => api.get(`/content/advisory/${slug}`);

// export const getAllServices = () => api.get("/content/all/services");

// export const getSingleService = (slug) => api.get(`/content/service/${slug}`);

// export const getAllCfp = () => api.get("/content/all/cfp");

// export const getSingleCfp = (slug) => api.get(`/content/cfp/${slug}`);

// export const getAllBlogs = () => api.get("/content/all/blogs");

// export const getSingleBlog = (slug) => api.get(`/content/blog/${slug}`);

// export default api;
