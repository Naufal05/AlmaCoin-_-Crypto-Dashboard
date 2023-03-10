import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../redux/action/action";
import { CryptoChart } from "./CryptoChart";
import { ExchangeCoins } from "./ExchangeCoins";
import { SideBar } from "./SideBar";
import { Portfolio } from "./Portfolio";
import { SearchBar } from "./SearchBar";
import { Footer } from "./footer";
import { useState } from "react";
import Lottie from "lottie-react";
import Header from "./Header";
import * as bitcoin from "../assets/92445-crypto-bitcoin.json";
import * as success from "../assets/1127-success.json";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import AuthModal from "./Authentication/authModal";

/**
 * Dashboard is the parent component, which contains all the
 * child components ie Exchangecoins, Sidebar, Portfolio, Searchbar, fetchcoins for api.
 * @param {} id Dashboard
 * @returns {File}  Parent componenent
 */
function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.default);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);
  const [theme, setTheme] = useState("light");

  /**
   * Dark Mode on entire application
   * @param {theme} id Dark mode
   * @returns {theme} changees the state
   */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setTimeout(() => {
      if (data.coinList.length === 0) {
        dispatch(fetchCoins());

        setLoading(true);

        setTimeout(() => {
          setCompleted(true);
        }, 1000);
      }
    }, 2500);
  }, [data.coinList.length, dispatch]);

  return (
    <>
      {!completed ? (
        <>
          <div className="lg:mt-[10rem] lg:ml-[25rem] lg:pl-[6rem] w-[10rem] mt-[13rem] ml-[6.5rem] sm:mt-[190px] sm:ml-[15rem] sm:w-[10rem] md:mt-[15rem] md:ml-[17rem] md:w-[15rem]">
            {!loading ? (
              <Lottie animationData={bitcoin} />
            ) : (
              <Lottie animationData={success} />
            )}
          </div>
        </>
      ) : (
        <>
          {/* bg-gradient-to-r from-[#2A5470] to-[#4C4177]flex bg-opacity-10 backdrop-blur-md */}
          <div className="bg-[#142540] dark:bg-black flex ">
            <Header />
            {/* Material UI Icon */}
            <ModeNightIcon
              className="text-center flex md:order-3 w-6 mx-3 bg-white rounded-3xl"
              onClick={handleThemeSwitch}
            />
            <div className="text-center flex md:order-3 w-6 mx-10">
              <AuthModal />
            </div>
          </div>
          <div className="py-4 px-4 bg-[#142540] dark:bg-black">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 gap-2">
              <div className="md:col-span-3 grid-cols-3 sm:grid-cols-3 container-fluid">
                <SearchBar />
                <CryptoChart />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Portfolio />
                  <ExchangeCoins />
                </div>
              </div>
              <SideBar />
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
