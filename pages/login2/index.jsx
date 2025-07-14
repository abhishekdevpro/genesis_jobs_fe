import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import logo from "./logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../components/utils/axiosInstance";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { BASE_URL } from "../../components/Constant/constant";
import { useTranslation } from "react-i18next";
import { ResumeContext } from "../../components/context/ResumeContext";
import Navbar from "../../ui/Navbar";
import Button from "../../ui/Button";
const Login2 = () => {
  const { t } = useTranslation();
  const [isThirdstepOpen, setThirdstepOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    // password: "",
  });
  const { selectedLang } = useContext(ResumeContext);
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email } = formData;
    if (!formData.email) {
      toast.error("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(t("loginpage.toast.invalid_email"));
      return;
    }
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/user/auth/login-otp`,
        formData
      );

      if (response.status === 200 || response.data.code == 200) {
        console.log(response);
        toast.success(response.data.message || " Otp sent to your email.");
        localStorage.setItem("userEmail", formData.email);
        router.push("/login2/login-code");
      } else {
        toast.error("Failed to sent otp");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleGoogleSignin = async () => {
    const url = `/api/user/auth/google?lang=${selectedLang}`;

    try {
      const response = await axiosInstance.get(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Google sign-in token: ", response.data.data);
        // window.open(response.data.data);
        window.location.href = response.data.data;
      } else {
        toast.error(t("loginpage.toast.google_failed"));
      }
    } catch (err) {
      console.log(err);
      toast.error(`${err.response?.data?.message || "Google sign-in failed"}`);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[calc(100vh-6rem)] w-full">
        <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
          <div className="flex justify-center mb-6">
            {/* <Image src={logo} className="w-40 h-10" alt="Logo" /> */}
            <Link href="/">
              <h1 className="text-black hover:text-teal-600 text-3xl px-3 py-2 rounded-md  font-semibold cursor-pointer">
                GENESIS
              </h1>
            </Link>
          </div>
          <div className="text-2xl text-black text-center font-bold mb-4">
            {t("loginpage.welcome")}
          </div>
          <p className="text-black text-base text-center mb-6">
            {t("loginpage.description")}
          </p>
          <button
            onClick={handleGoogleSignin}
            type="button"
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md mt-4 shadow-sm hover:bg-gray-100 focus:outline-none"
          >
            <FcGoogle className="h-6 w-6 mr-2" />
            {t("loginpage.continue_google")}
          </button>
          <div className="p-4 flex justify-center items-center">
            <p> {t("loginpage.or")}</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-black mb-2">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder={t("loginpage.email_placeholder")}
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                {t("loginpage.agree_terms")}{" "}
                <Link
                  href="/TermsandConditions"
                  className="text-[#00b38d] underline"
                >
                  {t("loginpage.terms_conditions")}
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              variant={!isChecked || isLoading ? "disabled" : "primary"}
              // className="w-full bg-[#00b38d] text-white px-4 py-2 rounded-md hover:bg-[#00b38d] transition-colors duration-300 relative"
              className={`w-full`}
              disabled={!isChecked || isLoading} // Disabled when terms are not checked or loading
            >
              Send Otp
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login2;
