import { AppRoutes } from "../AppRoutes";
import { Header } from "./Header";

export function Base() {
  return (
    <div>
      <Header />

      <main>
        <AppRoutes />
      </main>
    </div>
  );
}
