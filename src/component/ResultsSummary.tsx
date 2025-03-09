import data from "../data/results-summary-data.json";

const ResultsSummary = () => {
  return (
    <div className="w-screen h-screen flex justify-center md:items-center font-[Hanken_grotesk] text-white  bg-gray-100 drop-shadow-xl shadow-[hsl(252,100%,67%)]">
      {/* container */}
      <div className="w-full bg-white rounded-4xl max-w-3xl grid grid-cols-1 md:grid-cols-2">
        {/* LEFT GRID SUMMARY */}
        <div className="relative bg-[hsl(252_100%_67%)]  w-full p-10  flex items-center flex-col space-y-3 md:space-y-5 rounded-b-4xl  md:rounded-4xl ">
          {/* result text */}
          <h1 className="text-[clamp(1rem,1.5vw,1.5rem)] font-semibold text-[hsl(221,100%,96%)]">
            Your Result
          </h1>
          {/* Circle with data */}
          <div className="w-40 h-40 md:w-48 md:h-48  rounded-full bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] flex flex-col justify-center items-center p-12">
            <h1 className=" text-[clamp(3.5rem,2vw,3.75rem)] text-white font-bold z-10">
              76
            </h1>
            <p className="text-[clamp(1rem,2vw,16px)] text-[hsl(241,100%,89%)]  font-bold">
              of 100
            </p>
          </div>
          {/* info */}
          <h3 className="text-[clamp(1.5rem,2vw,1.875rem)] font-semibold z-10">
            Great
          </h3>
          <p className=" text-[clamp(1rem,2vw,1.125rem)] text-center z-10  mx-4 text-[hsl(241,100%,89%)]">
            You scored higher than 65% of the people who have taken these tests.
          </p>

          {/* bg tranparent */}
          <div
            className="absolute rounded-4xl h-[100%] top-0 left-0 w-full flex flex-col items-center
           bg-gradient-to-t from-[hsl(241,81%,54%)] to-transparent 
          "
          />
        </div>

        {/* Right grid - Summary */}
        <div className="bg-white w-full rounded-4xl p-[clamp(1.2rem,2vw,2.5rem)] space-y-8">
          {/* Title */}
          <h1 className="text-[hsl(224,30%,27%)] text-2xl font-bold">
            Summary
          </h1>

          {/* Content */}
          <div className="space-y-3">
            {data.map(({ category, clr, score, icon, bgClr }, i) => (
              <div
                style={{ backgroundColor: bgClr }}
                key={i}
                className="p-4 flex justify-between rounded-xl "
              >
                <div className="flex space-x-3 text-[clamp(1rem,2vw,1.125rem)]">
                  <img src={icon} alt={category} />
                  <p className="font-semibold" style={{ color: clr }}>
                    {category}
                  </p>
                </div>
                <div className="font-bold">
                  <p>
                    <span className="text-[hsl(224,30%,27%)]">{score}</span>
                    <span className="text-gray-400"> / 100</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button continue */}
          <button className="text-center bg-[hsl(224,30%,27%)] w-full py-3 rounded-full  text-[clamp(1rem,2vw,1.125rem)] active:bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsl(241,81%,54%)] transition-all cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
