/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TestSeries from "./TestSeries";
import TestResult from "./TestResult";
import { Route, Routes, Navigate } from "react-router-dom";
import coin from "../assets/coin.webp";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import CreateQuestion from "./CreateQuestion";
import SamplePaper from "./SamplePaper.jsx";
import ProgressReport from "./ProgressReport.jsx";
import ReferEarn from "./ReferEarn.jsx";

const DashBoard = ({ side, handleside }) => {
  const { userdetail } = useContext(UserContext);
  const [cc, setcc] = useState(0);
  // const [side, setside] = useState(true);

  useEffect(() => {
    setcc(userdetail.elitecoin);
  }, [userdetail]);

  return (
    <>
      <section id="sidebar-section" className="flex justify-center relative">
        <div
          className={
            side
              ? "absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 backdrop-blur-sm lg:backdrop-blur-none"
              : ""
          }
          onClick={handleside}
        ></div>
        <aside
          id="default-sidebar"
          className={` min-[1024px]:w-[262px] transition-transform -translate-x-full  lg:translate-x-0  shadow-2xl lg:flex  w-0  ${
            side
              ? "max-lg:absolute   left-[0rem] top-0 bottom-0  duration-300 transition-transform translate-x-[0]   w-[40%] z-20 rounded-md min-[320px]:w-[222px]   sm:w-[222px] "
              : " "
          }`}
          aria-label="Sidebar"
        >
          <div className=" w-full h-full  px-0 overflow-y-auto bg-gray-50">
            <ul className="space-y-4 font-medium ">
              <li>
                {/* <a
                  href="/"
                  className="flex text-white items-center p-4 bg-blue-400 rounded-lg hover:bg-gray-400  group bg-gradient-to-br from-slate-900 via-slate-600 to-slate-800"
                >
                  <img src={coin} alt="" className=" h-6" />
                  <span className="ms-3">{cc} Elite Coins</span>
                </a> */}
              </li>
              <li>
                <Link
                  to="/Dashboard/profile"
                  onClick={handleside}
                  className={`flex items-center ${
                    location.pathname === "/Dashboard/profile" ||
                    location.pathname === "/Dashboard/profile/"
                      ? "bg-gray-300"
                      : ""
                  }  p-2 text-gray-900 rounded-lg hover:bg-gray-200  group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0000"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className="ms-3">My Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Dashboard/test-series"
                  onClick={handleside}
                  className={`flex items-center ${
                    location.pathname === "/Dashboard/test-series/" ||
                    location.pathname === "/Dashboard/test-series"
                      ? "bg-gray-300"
                      : ""
                  }  p-2 text-gray-900 rounded-lg hover:bg-gray-200  group`}
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
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                  <span className="ms-3">Test Series</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Dashboard/progressreport"
                  onClick={handleside}
                  className={`flex items-center ${
                    location.pathname === "/Dashboard/progressreport/" ||
                    location.pathname === "/Dashboard/progressreport"
                      ? "bg-gray-300"
                      : ""
                  }  p-2 text-gray-900 rounded-lg hover:bg-gray-200  group`}
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
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Progress Report
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Dashboard/attempted-test"
                  onClick={handleside}
                  className={`flex items-center ${
                    location.pathname === "/Dashboard/attempted-test/" ||
                    location.pathname === "/Dashboard/attempted-test"
                      ? "bg-gray-300"
                      : ""
                  }  p-2 text-gray-900 rounded-lg hover:bg-gray-200  group`}
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
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>

                  <span className="flex-1 whitespace-nowrap ms-3">
                    Attempted Test
                  </span>
                </Link>
              </li>
              <li>
                {/* <Link
                  to="/Dashboard/refer&earn"
                  onClick={handleside}
                  className={`flex items-center ${
                    location.pathname === "/Dashboard/refer&earn/" ||
                    location.pathname === "/Dashboard/refer&earn"
                      ? "bg-gray-300"
                      : ""
                  }  p-2 text-gray-900 rounded-lg hover:bg-gray-200  group`}
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
                      d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>

                  <span className="flex-1 whitespace-nowrap ms-3">
                    Refer & Earn
                  </span>
                </Link> */}
              </li>
              <li>
                <Link
                  to="/Dashboard/change-password"
                  onClick={handleside}
                  className={`flex items-center ${
                    location.pathname === "/Dashboard/change-password/" ||
                    location.pathname === "/Dashboard/change-password"
                      ? "bg-gray-300"
                      : ""
                  }  p-2 text-gray-900 rounded-lg hover:bg-gray-200  group`}
                >
                  <div className="flex items-center w-6 h-6">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-full h-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  <span className=" flex text-wrap ms-3">Change Password</span>
                </Link>
              </li>
              {userdetail.usertype === "admin" ? (
                <>
                  <li>
                    <Link
                      to="/Dashboard/create-question"
                      onClick={handleside}
                      className={`flex items-center ${
                        location.pathname === "/Dashboard/create-question/" ||
                        location.pathname === "/Dashboard/create-question"
                          ? "bg-gray-300"
                          : ""
                      }  p-2 text-gray-900 rounded-lg hover:bg-gray-200  group`}
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
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Add Question
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Dashboard/create-test"
                      onClick={handleside}
                      className={`flex items-center ${
                        location.pathname === "/Dashboard/create-test/" ||
                        location.pathname === "/Dashboard/create-test"
                          ? "bg-gray-300"
                          : ""
                      }  p-2 text-gray-900 rounded-lg hover:bg-gray-200  group`}
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
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>

                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Create Test
                      </span>
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </aside>

        <section id="" className=" w-full min-h-screen overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Navigate to="test-series" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test-series" element={<TestSeries />} />
            <Route path="/attempted-test" element={<TestResult />} />
            <Route path="/change-password" element={<ChangePassword />} />
            {userdetail.usertype === "admin" ? (
              <>
                <Route path="/create-question" element={<CreateQuestion />} />
                <Route path="/create-test" element={<SamplePaper />} />
              </>
            ) : (
              ""
            )}
            <Route path="/progressreport" element={<ProgressReport />} />
            <Route path="/refer&earn" element={<ReferEarn />} />
          </Routes>
        </section>
      </section>
    </>
  );
};

export default DashBoard;
