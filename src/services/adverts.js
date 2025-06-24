import { apiClient } from "./config";

// getall adverts 
export const apiFetchAds = async () => apiClient.get("/products");

export const apiGetSingleAd = async () => apiClient.put (`/ads/${id}` , payload)

export const apiUpdateAds = async (id, payload) => apiClient.put(`/ads/${id}` , payload)

export const apiDeleteAd = async (id) => apiClient.delete(`/ads/${id}` , payload)