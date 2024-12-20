import DrawerSideContent from "@shared/components/drawer/DrawerSideContent";
import Dashboard from "./features/dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-8 py-6">
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
