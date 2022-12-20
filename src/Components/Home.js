import { useState, useEffect } from "react";
import Clock from "./Clock";
import Calender from "./Calender";
import Calculator from "./Calculator";
import Geolocation from "./Geolocation";
import CurrencyConverter from "./CurrencyConverter";
import BMI from "./BMI";

const Home = () => {
  const [openCalcModal, setOpenCalcModal] = useState(false);
  const [openCurrModal, setOpenCurrModal] = useState(false);
  const [openBMIModal, setOpenBMIModal] = useState(false);

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

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

  return (
    <section>
      <div className="Home">
        <section className="h-screen bg-white dark:bg-gray-900">
          <div className="py-32 px-4 mx-auto h-screen text-center lg:px-12">
            {/* Dark/Light Mode */}
            <div className="pb-4">
              {theme === "dark" ? (
                <button
                  onClick={handleThemeSwitch}
                  className="text-white bg-gray-800 rounded-full shadow-inner p-2 hover:bg-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleThemeSwitch}
                  className="text-gray-900 bg-gray-200 rounded-full shadow-inner py-2 px-2 hover:bg-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Location, Time & Date */}
            <div className=" time inline-flex justify-between items-center py-1.5 px-4 mb-7 text-sm text-gray-700 bg-violet-900 rounded-full   ">
              <span>
                <Geolocation />
              </span>
              <span className="text-sm bg-primary-600  text-gray-300 px-2 py-1">
                <Clock />
              </span>
              <span className="text-sm bg-primary-600  text-gray-300 px-3 py-1">
                <Calender />
              </span>
            </div>

            {/* Write ups */}
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900  md:text-5xl lg:text-5xl dark:text-white">
              CALCOMB
            </h1>

            <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 leading-none">
              All in one : <br /> Calculator, Currency Converter & BMI
              Calculator{" "}
            </p>

            {/* Modal Buttons */}
            <div className=" space-y-4  space-x-6  ">
              <button
                onClick={() => {
                  setOpenCalcModal(true);
                }}
                title="calculator"
                className=" shadow-xl text-white bg-violet-900 hover:bg-violet-800 dark:text-white  py-3 px-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  setOpenCurrModal(true);
                }}
                title="currency converter"
                className=" shadow-xl text-white bg-violet-900 hover:bg-violet-800 dark:text-white  py-3 px-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  setOpenBMIModal(true);
                }}
                title="BMI calculator"
                className=" shadow-xl text-white bg-violet-900 hover:bg-violet-800 dark:text-white  py-3 px-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Imported modal components */}
      <div>
        {openCalcModal && <Calculator setOpenCalcModal={setOpenCalcModal} />}
        {openCurrModal && (
          <CurrencyConverter setOpenCurrModal={setOpenCurrModal} />
        )}
        {openBMIModal && <BMI setOpenBMIModal={setOpenBMIModal} />}
      </div>
    </section>
  );
};

export default Home;
