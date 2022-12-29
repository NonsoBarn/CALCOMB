import { useState } from "react";

const BMI = ({ setOpenBMIModal }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  const [displayResult, setDisplayResult] = useState(false);

  const calculateBMI = () => {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  };

  const getStatus = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else if (bmi >= 30 && bmi < 34.9) return "Obesity class I";
    else if (bmi >= 35 && bmi < 39.9) return "Obesity class II";
    else if (bmi > 40) return "Obesity class III";
    else return "Error!!!";
  };

  const showResult = () => {
    calculateBMI();
    setDisplayResult(true);
  };

  const closeResult = () => {
    setDisplayResult(false);
  };

  return (
    <section className="BMI">
      <div
        className="relative z-10"
        aria-labelledby="calculator"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-300  bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900  shadow-xl transition-all sm:my-5  max-w-lg pb-8 sm:pr-5">
              <div className=" px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                {/* close modal btn */}
                <div
                  onClick={() => {
                    setOpenBMIModal(false);
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
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white pt-2">
                      BMI Calculator
                    </h3>

                    {/* BMI calc sec */}
                    <div className={displayResult ? "hidden" : "mt-2 pt-4"}>
                      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-900 dark:border-gray-700 ">
                        {/* input form */}
                        <form className="bg-white dark:bg-gray-900 rounded pt-3 pb-1 mb-4">
                          {/* Height input */}
                          <div className="mb-4 ">
                            <label className="block  text-gray-700 dark:text-white text-sm font-bold mb-2">
                              Height
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                              id="Height "
                              type="text"
                              placeholder="Height in cm"
                              value={height}
                              onChange={(e) => setHeight(e.target.value)}
                            />
                          </div>

                          {/* weight Input */}
                          <div className=" mb-4    ">
                            <label className="block  text-gray-700 dark:text-white text-sm font-bold mb-2">
                              Weight
                            </label>
                            <input
                              className="bg-gray-100 shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-0 leading-tight focus:outline-none focus:shadow-outline"
                              id="Weight"
                              type="Weight in kg"
                              placeholder="Weight in kg"
                              value={weight}
                              onChange={(e) => setWeight(e.target.value)}
                            />
                          </div>

                          {/* cal btn */}
                          <div className="flex items-center justify-center">
                            <button
                              className="bg-violet-900 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="button"
                              onClick={showResult}
                            >
                              Calculate BMI
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* result */}
                    <div
                      className={displayResult ? "mt-2 pt-4 w-60" : "hidden"}
                    >
                      <div className="block  max-w-sm p-0 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-900 dark:border-gray-700 ">
                        <div className="flex items-center justify-center">
                          <div className="bg-white dark:bg-gray-900 rounded  pt-11 pb-5 mb-4">
                            {/* svg 1 */}
                            <div
                              className={
                                status === "Error!!!"
                                  ? "svg-one mb-4 flex items-center justify-center"
                                  : "hidden"
                              }
                            >
                              <div className=" text-gray-700 dark:text-white dark:bg-violet-900 text-sm font-bold mb-2 flex items-center justify-center rounded-full w-12 h-12  ">
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
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </div>
                            </div>

                            {/* svg 2 */}
                            <div
                              className={
                                status !== "Error!!!"
                                  ? " svg-two mb-4 flex items-center justify-center"
                                  : "hidden"
                              }
                            >
                              <div className=" text-gray-700 dark:text-white dark:bg-violet-900 text-sm font-bold mb-2 flex items-center justify-center rounded-full w-12 h-12   ">
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
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </div>
                            </div>
                            {/* result */}
                            <div className="mb-6 pt-6">
                              <div className="block  text-gray-700 dark:text-white text-sm font-bold mb-6">
                                <p>Your BMI is: {bmiResult} </p>
                                <p>You are currently: {status}</p>
                              </div>

                              {/* ok btn */}
                              <div className="flex items-center justify-center pt-5">
                                <button
                                  onClick={closeResult}
                                  className="bg-violet-900 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                  type="button"
                                >
                                  Ok
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default BMI;
