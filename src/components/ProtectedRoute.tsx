import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import type { Role } from "../types";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: ReactNode;
  role?: Role;
}) {
  const { user } = useAuth();
  if (user === null) {
    return <Navigate to="/login" replace />;
  }
  if (role && !user.roles.includes(role)) {
    return <Navigate to="/" replace />;
  } 
    return <>{children}</>;
}
