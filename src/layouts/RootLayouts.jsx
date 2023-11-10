import { Outlet } from "react-router-dom";

export default function RootLayouts() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
