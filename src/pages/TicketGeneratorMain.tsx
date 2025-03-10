const TicketGeneratorMain = () => {
  return (
    <div className="text-white w-screen h-screen bg-[hsl(248,70%,10%)] bg-cover bg-no-repeat bg-center flex justify-center items-center bg-[url(/Front-end-mentor-react/conference-ticket-generator/assets/images/background-desktop.png)] font-[Inconsolata] p-8 ">
      {/* Top Info */}
      <div className="flex flex-col justify-center items-center mx-36">
        <img
          src="/Front-end-mentor-react/conference-ticket-generator/assets/images/logo-full.svg"
          alt="Full logo"
          className="mb-10"
        />

        <h1 className="text-5xlxl font-bold text-center text-pretty  mb-3">
          Your Journey to Coding Conf <br />
          2025 Starts Here!
        </h1>

        <p className="text-[hsl(245,15%,58%)]">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
    </div>
  );
};

export default TicketGeneratorMain;
