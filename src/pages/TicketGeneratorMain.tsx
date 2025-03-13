import TicketGeneratorForm from "../component/TicketGeneratorForm";

const TicketGeneratorMain = () => {
  return (
    <>
      {/* This are assets in the background */}

      <img
        className="fixed -top-25 -left-20 sm:left-0 md:left-28 w-44 h-44 sm:w-auto bg-cover opacity-70 "
        src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-circle.svg"
        alt=""
      />

      <img
        className="fixed right-0 top-0 w-42  sm:w-auto sm:h-auto"
        src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-squiggly-line-top.svg"
        alt=""
      />

      {/* squiggly image in bottom left - desktop */}
      <img
        className="fixed left-0 bottom-0 hidden sm:block  "
        src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-squiggly-line-bottom-desktop.svg "
        alt=""
      />

      <img
        className="fixed left-0 bottom-0 sm:hidden w-52"
        src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg "
        alt=""
      />
      <div className=" text-white w-screen min-h-screen bg-[hsl(248,70%,10%)] bg-cover bg-no-repeat bg-center flex flex-col  items-center bg-fixed bg-[url(/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-lines.svg),url(/Front-end-mentor-react/conference-ticket-generator/assets/images/background-desktop.png)] font-[Inconsolata] px-4 py-20 ">
        {/* Top Info */}
        <div className="flex flex-col justify-center items-center mx-2 lg:mx-36 mt-20">
          <img
            src="/Front-end-mentor-react/conference-ticket-generator/assets/images/logo-full.svg"
            alt="Full logo"
            className=" w-35 mb-7 md:w-44"
          />

          <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-center text-pretty  mb-3">
            Your Journey to Coding Conf <br />
            2025 Starts Here!
          </h1>

          <p className="text-[hsl(252,6%,83%)] text-center text-[clamp(1rem,2vw,1.125rem)]">
            Secure your spot at next year's biggest coding conference.
          </p>
        </div>

        {/* Form container */}

        <TicketGeneratorForm />
      </div>
    </>
  );
};

export default TicketGeneratorMain;
