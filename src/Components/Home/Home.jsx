import { Outlet, useLocation, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      {
        navigation.state === "loading"?
        'Loading...' :
        <Outlet></Outlet>
      }
      <Footer></Footer>
    </div>
  );
};

export default Home;