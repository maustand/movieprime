import tmdbLogo from "@/assets/tmdb.svg";
import { NavLink } from "react-router";

function DrawerSideContent() {
  return (
    <>
      <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <img
          className="mb-8"
          src={tmdbLogo}
          alt="The Movie Database (TMDB)"
          width="154"
          height="20"
        ></img>

        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" end>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DrawerSideContent;
