import DrawerSideContent from "./components/drawer/DrawerSideContent";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
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
