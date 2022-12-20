import axios from "axios";
import { useState, useEffect } from "react";

const CurrencyConverter = ({ setOpenCurrModal }) => {
  const [currencies, setCurrencies] = useState([
    "NGN",
    "USD",
    "EUR",
    "CAD",
    "GBP",
    "GHS",
    "ZAR",
    "AUD",
    "CNY",
  ]);
  const [base, setBase] = useState("ZAR");
  const [convertTo, setConvertTo] = useState("GHS");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrencyConverter = async () => {
        const response = await axios.get(
          `https://api.streetrates.hng.tech/api/rate/convert/calc?from_currency=${base}&to_currency=${convertTo}&amount=${amount}`
        );
        console.log("response==>", response);

        const getResult = response.data.data.official_total;
        setResult(getResult);
        console.log(getResult);
      };
      getCurrencyConverter();
    }
  }, [base, convertTo, amount]);

  const handleSelect = (e) => {
    setBase(e.target.value);
    setConvertTo(e.target.value);
    setResult("");
  };

  const handleSwap = (e) => {
    e.preventDefault();

    setConvertTo(base);
    setBase(convertTo);
    // result: null,
  };

  return (
    <section className="currencyconv">
      <div
        className="relative z-10"
        aria-labelledby="calculator"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-300  bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900  shadow-xl transition-all sm:my-5  max-w-lg pb-8">
              <div className=" px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                {/* Close model btn */}
                <div
                  onClick={() => {
                    setOpenCurrModal(false);
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
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white pt-2">
                      Currency Converter
                    </h3>
                    <div className="mt-2 pt-4">
                      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl  dark:bg-gray-900 dark:border-gray-700 ">
                        <p className="text-gray-400 text-md mb-5">
                          Exchange Rate
                        </p>

                        {/* Result */}
                        <div className="pt-3">
                          <p className="text-gray-400 font-normal text-xs">
                            {amount} {base} is equivalent to{" "}
                          </p>
                          <p className=" text-4xl font-medium tracking-tight text-gray-900 dark:text-white mt-0 mb-3">
                            {amount === ""
                              ? "0"
                              : result === null
                              ? "Error"
                              : result}
                            {convertTo}
                          </p>
                        </div>

                        {/* Form section  */}
                        <form className="bg-white dark:bg-gray-900 rounded pt-6 pb-1 mb-4">
                          {/* Amount Input Section */}
                          <div className="mb-3">
                            <label className="flex  text-gray-700 dark:text-white text-sm font-semi-bold mb-1">
                              Amount
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline pl-2 dark:bg-gray-700  bg-gray-100"
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </div>

                          {/* currency selelction */}

                          <div className="flex gap-12">
                            {/* curr 1 */}
                            <div className="mb-3 xl:w-96">
                              <label className="flex  text-gray-700 dark:text-white text-sm font-normal mb-1 ">
                                From
                              </label>
                              <select
                                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-gray-100 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:text-white"
                                aria-label=""
                                name="base"
                                value={base}
                                onChange={(e) => setBase(e.target.value)}
                              >
                                {currencies.map((currency, i) => (
                                  <option key={i}>{currency}</option>
                                ))}
                              </select>
                            </div>

                            {/* curr Swap svg */}
                            <span
                              onClick={handleSwap}
                              className="  cursor-pointer dark:text-white flex items-start justify-center mt-8 xl:w-96"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-violet-700 hover:text-violet-800 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                />
                              </svg>
                            </span>

                            {/* curr 2 */}
                            <div className="mb-3 xl:w-96">
                              <label className="flex  text-gray-700 dark:text-white text-sm font-normal mb-1 ">
                                To
                              </label>
                              <select
                                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:text-white"
                                aria-label=""
                                value={convertTo}
                                onChange={(e) => setConvertTo(e.target.value)}
                              >
                                {currencies.map((currency, i) => (
                                  <option key={i}>{currency}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default CurrencyConverter;
