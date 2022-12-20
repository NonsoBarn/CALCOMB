import { useState } from "react";

const Calcuator = ({ setOpenCalcModal }) => {
  // declaring state
  const [number, setNumber] = useState("");

  // handle click
  const handleClick = (e) => {
    setNumber(number.concat(e.target.value));
  };

  // handle clear
  const handleClear = () => {
    setNumber("");
  };

  // handle slice
  const handleSlice = () => {
    setNumber(number.slice(0, -1));
  };

  // handle answer
  const handleAnswer = () => {
    try {
      setNumber(eval(number).toString());
    } catch (error) {
      setNumber("Invalid");
    }
  };

  return (
    <section className="Calculator">
      <div
        className="relative z-10"
        aria-labelledby="calculator"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-300  bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center text-center ">
            <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-900  shadow-xl transition-all sm:my-5 w-80 sm:max-w-lg pb-10">
              <div className=" px-2 mr-3 pt-2 pb-4 sm:p-6 sm:pb-4">
                {/* close modal */}
                <div
                  onClick={() => {
                    setOpenCalcModal(false);
                  }}
                  className="mx-auto flex h-12 w-full flex-shrink-0 items-center justify-end rounded-full sm:mx-0 sm:h-10 cursor-pointer "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-violet-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="">
                  <div className="mt-3 text-center sm:mt-0 ml-4 sm:ml-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Calculator
                    </h3>
                  </div>

                  {/* Screen */}
                  <div className="w-96 mx-auto mt-3 ">
                    <div className="screen h-16 w-4/5 px-3 sm:w-80 sm:pr-14 sm:mt-5 ">
                      <input
                        type="text"
                        placeholder="0"
                        value={number}
                        className=" w-full h-full border border-white dark:text-white text-gray-900 dark:bg-gray-900 bg-gray-300 font-bold text-4xl text-right pr-3 rounded-lg "
                        readOnly
                      />
                    </div>
                  </div>
                  {/* Keypad */}
                  <div className="grid grid-cols-4 gap-x-8 gap-y-2 mt-5 mx-3">
                    <button
                      onClick={handleClear}
                      className="text-gray   w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow text-white bg-violet-900"
                    >
                      AC
                    </button>
                    <button
                      value="/"
                      onClick={handleClick}
                      className="text-gray   w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow text-white bg-violet-900"
                    >
                      /
                    </button>
                    <button
                      value="*"
                      onClick={handleClick}
                      className="text-gray w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow text-white bg-violet-900"
                    >
                      *
                    </button>
                    <button
                      onClick={handleSlice}
                      className="text-gray  w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow text-white bg-violet-900"
                    >
                      C
                    </button>

                    {/* .................... */}
                    {/* .................... */}
                    {/* .................... */}

                    <button
                      value="7"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800
                    "
                    >
                      7
                    </button>
                    <button
                      value="8"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800"
                    >
                      8
                    </button>
                    <button
                      value="9"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800"
                    >
                      9
                    </button>
                    <button
                      value="-"
                      onClick={handleClick}
                      className="text-gray  w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow text-white bg-violet-900"
                    >
                      -
                    </button>

                    {/* .................... */}
                    {/* .................... */}
                    {/* .................... */}

                    <button
                      value="4"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800
                    "
                    >
                      4
                    </button>
                    <button
                      value="5"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800"
                    >
                      5
                    </button>
                    <button
                      value="6"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800"
                    >
                      6
                    </button>
                    <button
                      value="+"
                      onClick={handleClick}
                      className="text-gray   w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow text-white bg-violet-900"
                    >
                      +
                    </button>

                    {/* .................... */}
                    {/* .................... */}
                    {/* .................... */}

                    <button
                      value="1"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800
                    "
                    >
                      1
                    </button>
                    <button
                      value="2"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800"
                    >
                      2
                    </button>
                    <button
                      value="3"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800"
                    >
                      3
                    </button>
                    <button
                      onClick={handleAnswer}
                      className="text-gray   w-14 h-30 rounded-lg font-bold text-2xl flex justify-center items-center shadow text-white bg-violet-900 row-span-2 "
                    >
                      =
                    </button>

                    {/* .................... */}
                    {/* .................... */}
                    {/* .................... */}

                    <button
                      value="0"
                      onClick={handleClick}
                      className="text-gray  bg-gray-300 w-32 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow dark:text-white dark:bg-gray-800 col-span-2
                    "
                    >
                      0
                    </button>
                    <button
                      value="."
                      onClick={handleClick}
                      className="text-gray   w-14 h-14 rounded-lg font-bold text-2xl flex justify-center items-center shadow text-white bg-violet-900 "
                    >
                      .
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calcuator;
