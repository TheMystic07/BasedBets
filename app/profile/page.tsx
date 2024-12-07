"use client";

import React from "react";
import AttestationTable from "./AttestationTable";
import Link from "next/link";
import { Zap, X, Menu } from "lucide-react";
import { useState } from "react";

const UserProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-neon-blue px-6 py-6">
      <nav className="w-full h-fit py-3 sm:py-5 bg-black/50 backdrop-blur-xl border-2 border-neon-purple rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row justify-between items-center relative text-neon-blue px-4 sm:px-10 mb-6">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Link
            href={"/"}
            className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse cursor-pointer"
          >
            Meme Battles
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-neon-blue hover:text-neon-purple transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7 w-full sm:w-auto mt-4 sm:mt-0`}
        >
          <Link
            href={"/battles"}
            className="text-neon-green hover:text-neon-blue font-semibold transition-all duration-300 cursor-pointer text-base sm:text-lg relative group"
          >
            Battle Page
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href={"/profile"}
            className="text-neon-green hover:text-neon-blue font-semibold transition-all duration-300 cursor-pointer text-base sm:text-lg relative group"
          >
            Profile
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <h1
          className="text-5xl font-bold text-center mb-12 glitch-text"
          data-text="User Profile"
        >
          User Profile
        </h1>

        <div className="bg-black/50 border border-neon-purple rounded-3xl shadow-2xl p-8 backdrop-blur-lg">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-neon-blue mb-4 flex items-center">
              <Zap className="w-8 h-8 mr-2 text-neon-purple" />
              Your Attestations
            </h2>
            <p className="text-neon-green text-lg">
              Here is a record of all your meme betting activities. Each
              attestation represents a bet you have made.
            </p>
          </div>
          <AttestationTable />
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
