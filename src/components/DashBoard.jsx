import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TestSeries from "./TestSeries";
import TestResult from "./TestResult";
import { Route, Routes } from "react-router-dom";
import coin from "../assets/coin.png";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import CreateQuestion from "./CreateQuestion";
import SamplePaper from "./SamplePaper.jsx";

const DashBoard = () => {
  const { userdetail } = useContext(UserContext);
  const [cc, setcc] = useState(0);

  useEffect(() => {
    setcc(userdetail.elitecoin);
  }, [userdetail]);
  return (
    <>
      <section id="sidebar-section" className=" flex">
        <aside
          id="default-sidebar"
          className="w-0 md:w-[22%] lg:w-[18%] h-screen  transition-transform -translate-x-full sm:translate-x-0 border-r-2"
          aria-label="Sidebar"
        >
          <div className="h-full md:px-3 md:py-4 px-0 overflow-y-auto bg-gray-50">
            <ul className="space-y-4 font-medium ">
              <li>
                <a
                  href="#"
                  className="flex text-white items-center p-4 bg-blue-400 rounded-lg hover:bg-gray-400  group bg-gradient-to-tr from-gray-300 via-gray-800 to-gray-900"
                >
                  <img src={coin} alt="" className=" h-6" />
                  <span className="ms-3">{cc} Elite Coins</span>
                </a>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className="ms-3">My Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/test-series"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
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
                  to="/dashboard/progress-report"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
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
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Progress Report
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/attempted-test"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
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

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Attempted Test
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/change-password"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
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
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Change Password
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/create-question"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
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
                  to="/dashboard/create-test"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
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
            </ul>
          </div>
        </aside>
        <section id="" className=" w-full">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/test-series" element={<TestSeries />} />
            <Route path="/attempted-test" element={<TestResult />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/create-question" element={<CreateQuestion />} />
            <Route path="/create-test" element={<SamplePaper />} />
          </Routes>
        </section>
      </section>
    </>
  );
};

export default DashBoard;
