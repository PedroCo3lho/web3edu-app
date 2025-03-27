"use client";

import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";
import Image from "next/image";
import { useState } from "react";
import { UserMenu } from "./UserMenu";
import { LoginButton } from "./LoginButton";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useRouter } from "next/navigation";
import { MotionDiv } from "../ui/MotionDiv";

export default function NavBar({}) {
  const router = useRouter();
  const { isLoggedIn, userInfo } = useWeb3AuthContext();
    
   

  return (
    <div className="flex w-full bg-neutralbg justify-between items-center sm:px-10 h-fit p-[0.5rem]">
      <div className="flex gap-3 items-center">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutralbg rounded-box z-[11] mt-3 w-52 p-2 shadow-lg py-2 text-neutral "
          >
            {isLoggedIn && (
              <>
                <li>
                  <a onClick={() => router.push("/homePage")}>Home</a>
                </li>
                <li onClick={() => router.push("/programsPage")}>
                  <a>Programs</a>
                </li>
                <li>
                  <a onClick={() => router.push("/trailsPage")}>Trilhas</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <MotionDiv
          className="flex flex-row gap-3 pr-2"
          func={() => router.push("/")}
        >
          <Image src={web3EduLogo} alt="" className="w-10" />
          <a className="text-2xl text-neutral font-bold">Web3EduBrasil</a>
        </MotionDiv>
        <div className="navbar-center hidden lg:flex bg-[#F0F0F0] rounded-box h-12 justify-center flex-col">
          <ul className="menu menu-horizontal px-3 text-neutral font-medium bg-cgray rounded-box">
            {isLoggedIn && (
              <>
                <li>
                  <a onClick={() => router.push("/homePage")}>Home</a>
                </li>
                <li onClick={() => router.push("/programsPage")}>
                  <a>Programs</a>
                </li>
                <li>
                  <a onClick={() => router.push("/trailsPage")}>Trilhas</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {userInfo ? <UserMenu /> : <LoginButton />}
    </div>
  );
}
