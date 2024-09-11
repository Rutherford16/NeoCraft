"use client";

import useRedirectAfterSomeSeconds from "./components/redirect";

export default function Welcome() {
  const {seconds} = 500;
  const { secondsRemaining } = useRedirectAfterSomeSeconds("/beranda", seconds);

  return (
    <main className="min-h-screen bg-gradient-to-t from-[#3F2716] to-[#8A5338]">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="p-2 bg-[#F2F0EB] rounded-2xl">
          <img className="w-16 h-auto" src="/images/logo.png" alt="Logo" />
        </div>
        <div
          className="progress w-1/4 sm:w-1/12 mt-3 bg-[#F2F0EB]"
          role="progressbar"
          aria-label="Loading progress"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ height: "5px" }}
        >
          <div
            className="progress-bar bg-[#8A5338]"
            style={{ width: secondsRemaining / (500 / 100) + "%" }}
          ></div>
        </div>
      </div>
    </main>
  );
}
