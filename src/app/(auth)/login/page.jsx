"use client";
import Image from "next/image";

import { Lock, Mail } from "lucide-react";
import logo from "../../../../public/assets/common/dhan-xpress-logo.png";
import bg_img from "../../../../public/assets/login/login-bg.jpg";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const handleLogin = (data) => {
    try {
      console.log(data, " :  data");
      if (!data) {
        alert("Please enter username and password");
      }
      router.replace("/dashboard");
    } catch (error) {}
  };
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg_img.src})`,
        }}
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/30 bg-white dark:bg-[#1a1a1a]/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src={logo}
            alt="DhanXpress Logo"
            width={180}
            height={70}
            className="object-contain"
          />

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-gray-900 dark:text-white">
            Login to continue to your account
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white"
              />

              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white dark:bg-[#1a1a1a]/80 pl-12 pr-4 text-sm outline-none transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white"
              />

              <input
                type={"password"}
                {...register("password")}
                placeholder="Enter your password"
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white dark:bg-[#1a1a1a]/80 pl-12 pr-3 text-sm outline-none transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-900 dark:text-white">
              <input type="checkbox" className="h-4 w-4 accent-orange-500" />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 font-semibold text-white shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
