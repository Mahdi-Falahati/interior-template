import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import HomePages from "./Pages/HomePages";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<HomePages />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
