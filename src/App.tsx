import DrawerSideContent from "@shared/components/drawer/DrawerSideContent";
import Dashboard from "./features/dashboard/Dashboard";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Navigate, Route, Routes } from "react-router";
import ShowMovie from "./features/movies/showMovie/ShowMovie";
import MoviesList from "./features/movies/MoviesList";

function App() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pt-8 px-8 py-4">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-outline drawer-button mb-10"
          >
            <Bars3Icon className="size-6" />
          </label>

          <div className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="movies">
                <Route index element={<MoviesList />} />
                <Route path=":city" element={<ShowMovie />} />
              </Route>
            </Routes>
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <DrawerSideContent />
        </div>
      </div>
    </>
  );
}

export default App;
