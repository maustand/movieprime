import { Bars3Icon } from "@heroicons/react/24/solid";
import DrawerSideContent from "@shared/components/drawer/DrawerSideContent";
import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./features/dashboard/Dashboard";
import MoviesList from "./features/movies/MoviesList";
import ShowMovie from "./features/movies/showMovie/ShowMovie";
import SeriesList from "./features/series/SeriesList";
import ShowSerie from "./features/series/showSerie/ShowSerie";

function App() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pt-8 px-8 py-4 min-h-screen flex flex-col">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-outline drawer-button mb-10"
          >
            <Bars3Icon className="size-6" />
          </label>

          <main className="main-content flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="movies">
                <Route index element={<MoviesList />} />
                <Route path=":movieId" element={<ShowMovie />} />
              </Route>

              <Route path="series">
                <Route index element={<SeriesList />} />
                <Route path=":serieId" element={<ShowSerie />} />
              </Route>
            </Routes>
          </main>
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
