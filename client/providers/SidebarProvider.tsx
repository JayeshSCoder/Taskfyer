"use client";
import Sidebar from "@/app/Components/Sidebar/Sidebar";
import { useUserContext } from "@/context/userContext";
import React from "react";

function SidebarProvider() {
  const { user, loading } = useUserContext();
  const userId = user?._id;
  
  // Don't render sidebar if still loading
  if (loading) return null;
  
  // Only render sidebar if user is authenticated
  return <>{userId && <Sidebar />}</>;
}

export default SidebarProvider;
