"use client";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRedirect = (redirect: string) => {
  const { user, loading } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    // Don't redirect while loading
    if (loading) return;
    
    // Redirect if user is not authenticated (no user._id)
    if (!user || !user._id) {
      console.log("Redirecting to:", redirect, "User state:", user);
      router.replace(redirect); // Use replace instead of push to avoid back button issues
    }
  }, [user, loading, redirect, router]);

  // Return loading state so components can show loading UI
  return { loading, isAuthenticated: !!(user && user._id) };
};

export default useRedirect;
