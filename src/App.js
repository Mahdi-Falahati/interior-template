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
import ServiceSingle from "./Pages/ServisceSingle";
import Pricing from "./Pages/Pricing";
import Project from "./Pages/Project";
import ProjectDetails from "./Pages/ProjectDetails";
import Blog from "./Pages/Blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<HomePages />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service-single" element={<ServiceSingle />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/our-project" element={<Project />} />
      <Route path="/project-details" element={<ProjectDetails />} />
      <Route path="/articles-news" element={<Blog />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
