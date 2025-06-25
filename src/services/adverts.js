import { apiClient } from "./config";

// Get all adverts for user
export const apiFetchUserAds = async () => apiClient.get("/user/ads");

// Get single ad for user
export const apiGetSingleUserAd = async (adID) =>
  apiClient.get(`/user/ads/${adID}`);

// Search ads for user
export const apiSearchUserAd = async () => apiClient.get("/user/ads/search");

// Get all ads for vendor
export const apiFetchVendorAds = async () => apiClient.get("/vendor/ads");

// Search ads for vendor
export const apiSearchVendorAds = async () =>
  apiClient.get("/vendor/ads/search");

// Get single ad for vendor
export const apiGetSingleVendorAd = async (adID) =>
  apiClient.get(`/vendor/ads/${adID}`);

// Edit single ad for vendor
export const apiEditVendorAds = async (adID, payload) =>
  apiClient.put(`/vendor/ads/${adID}`, payload);

// Delete single ad for vendor
export const apiDeleteVendorAd = async (adID) =>
  apiClient.delete(`/vendor/ads/${adID}`);

// Post new ad for vendor
export const apiPostVendorAds = async (payload) =>
  apiClient.post("/vendor/ads", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
