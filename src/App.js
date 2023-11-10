import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={RootLayouts}>
    <Route/>
  </Route>
));

export default function App() {
  return <RouterProvider router={router} />;
}
