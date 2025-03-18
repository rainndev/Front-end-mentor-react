import React, { useEffect, useState } from "react";

const AdviceGenerator = () => {
  const [AdviceId, setAdviceId] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };

    FetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[hsl(218,23%,16%)] font-Man">
      {/* Container advice */}
      {loading ? (
        <p className="text-lg font-bold text-center text-[hsl(193,38%,86%)] drop-shadow-2xl">
          Loading...
        </p>
      ) : (
        <div className="bg-[hsl(217,19%,24%)] flex justify-center items-center flex-col p-15 space-y-4 max-w-xl rounded-2xl relative">
          <h1 className="text-[hsl(150,100%,66%)] text-xs font-bold tracking-[.5em]">
            ADVICE #{AdviceId}
          </h1>
          <p className="mt-2 text-2xl font-bold text-center text-[hsl(193,38%,86%)] text-pretty">
            “{advice}”
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
      )}
    </div>
  );
};

export default AdviceGenerator;
