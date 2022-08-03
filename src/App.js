import Layout from "./layout/Layout";
import BottomNav from "./shared/BottomNav/BottomNav";
import Menubar from "./shared/Menubar/Menubar";
function App() {
  return (
    <div className="bg-white">
      <Menubar />
      <Layout />
      <BottomNav />
    </div>
  );
}
export default App;
