import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import HomePages from "./Pages/HomePages";
import AboutUs from "./Pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<HomePages />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
