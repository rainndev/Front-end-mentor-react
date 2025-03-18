import React from "react";

const AdviceGenerator = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[hsl(218,23%,16%)] font-Man ">
      <div className="bg-[hsl(217,19%,24%)] flex justify-center items-center flex-col p-15 space-y-5 max-w-xl rounded-2xl relative">
        <h1 className="text-[hsl(150,100%,66%)] text-xs font-bold tracking-[.5em]">
          ADVICE #117
        </h1>
        <p className="mt-2 text-2xl font-bold text-center text-[hsl(193,38%,86%)] text-pretty">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
        <img
          src="/Front-end-mentor-react/advice-generator/images/pattern-divider-desktop.svg"
          className="mt-5"
        />

        <div className="absolute -bottom-8 left-0 w-full flex justify-center items-center">
          <div className=" rounded-full p-5 bg-[hsl(150,100%,66%)]">
            <img src="/Front-end-mentor-react/advice-generator/images/icon-dice.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdviceGenerator;
