import { apiClient } from "./config";

export const apiLogin = async (payload) => apiClient.post("/auth/sign-in", payload);

export const apiSignup = async (payload) => apiClient.post("/auth/sign-up", payload);
