import { apiClient } from "./config";

// getall adverts for user
export const apiFetchUserAds = async () => apiClient.get("/user/ads");

// get single ad for user
export const apiGetSingleUserAd = async (adID) => apiClient.get (`/user/ads/${adID}` , payload);

// search for ads for user 
export const apiSearchUserAd = async () => apiClient.get (`/user/ads/search`);

// get all ads for vendor 
export const apiFetchVendorAds = async () => apiClient.get (`/vendor/ads`);

// search for ads for vendor 
export const apiSearchVendorAds = async () => apiClient.get (`/vendor/ads/search`);

// get single ad for vendor 
export const apiGetSingleVendorAd = async (adID) => apiClient.get (`/vendor/ads${adID}` , payload);

// edit single ad for vendor 
export const apiEditVendorAds = async (adID, payload) => apiClient.put(`/vendor/ads${adID}` , payload);

// delete single ad for vendor 
export const apiDeleteVendorAd = async (adID) => apiClient.delete(`/ads/${adID}` , payload);

// post ads for vendor 
export const apiPostVendorAds = async () => apiClient.post (`/vendor/ads`);