import Navbar from "../components/Navbar";

import Landpage from "../components/Landpage";
import BookCar from "../components/BookCar";
import Footer from "../components/Footer";
import Plan from "../components/Plan";
import Models from "../components/Models";

function Home() {
  return (
    <>
      <Navbar />

      <Landpage />
      <Models />
      <Plan />
      <BookCar />
      <Footer />
    </>
  );
}

export default Home;
