import DrawerSideContent from "@shared/components/drawer/DrawerSideContent";
import Dashboard from "./features/dashboard/Dashboard";
import { Bars3Icon } from '@heroicons/react/24/solid'


function App() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pt-16 px-8 py-6">
          <label htmlFor="my-drawer" className="btn btn-square btn-outline drawer-button">
            <Bars3Icon/>
          </label>
          <Dashboard />
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
