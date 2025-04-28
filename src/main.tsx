import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import ProductDetail from "./pages/productDetail/ProductDetail.tsx";
import Review from "./pages/review/Review.tsx";
import Category from "./pages/category/Category.tsx";
import SignUp from "./pages/signUp/SignUp.tsx";
import LogIn from "./pages/logIn/LogIn.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/review" element={<Review />} />
      <Route path="/category" element={<Category />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path=":id" element={<ProductDetail />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
