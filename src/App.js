import Layout from "./layout/Layout";
import BottomNav from "./shared/BottomNav/BottomNav";
import Footer from "./shared/Footer/Footer";
import Menubar from "./shared/Menubar/Menubar";
function App() {
  return (
    <div className="bg-white">
      <Menubar />
      <Layout />
      <Footer />
      <BottomNav />
    </div>
  );
}
export default App;
