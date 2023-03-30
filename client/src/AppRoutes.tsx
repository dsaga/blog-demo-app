import { Route, Routes } from "react-router-dom";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { PostsPage } from "./pages/PostsPage";
import { Navigate } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/blog/:path" element={<PostDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
