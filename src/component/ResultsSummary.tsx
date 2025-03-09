const ResultsSummary = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-[Hanken_grotesk] text-white  ">
      {/* container */}
      <div className="w-full bg-white rounded-4xl max-w-3xl grid grid-cols-2">
        {/* LEFT GRID SUMMARY */}
        <div className="relative bg-[hsl(252_100%_67%)]  w-full p-10 flex items-center flex-col space-y-5 rounded-4xl">
          {/* result text */}
          <h1 className="text-2xl font-semibold text-[hsl(241,100%,89%)]">
            Your Result
          </h1>
          {/* Circle with data */}
          <div className="w-48 h-48  rounded-full bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] flex flex-col justify-center items-center p-12 space-y-2 ">
            <h1 className="text-6xl text-white font-bold z-10">76</h1>
            <p className="text-[16px] text-[hsl(241,100%,89%)]  font-bold">
              of 100
            </p>
          </div>
          {/* info */}
          <h3 className="text-3xl font-semibold z-10">Great</h3>
          <p className="text-center z-10 text-lg mx-5 text-[hsl(241,100%,89%)]">
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
        <div className="bg-white w-full rounded-4xl">Summary</div>
      </div>
    </div>
  );
};

export default ResultsSummary;
