import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Favourite from "./components/favourite/Favourite";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MobileApp from "./components/mobileApp/MobileApp";
import Playday from "./components/playday/Playday";
import Reagister from "./components/register/Reagister";


function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
      <Arrivals />
      <Playday />
      <Favourite />
      <MobileApp />
      <Reagister />
      <Footer />
      
    </div>
  );
}

export default App;
