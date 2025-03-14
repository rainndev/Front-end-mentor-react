import { useCallback, useState } from "react";
import TicketGeneratorForm from "../component/TicketGeneratorForm";
import TicketCard from "../component/TicketCard";

const TicketGeneratorMain = () => {
  const [image, setImage] = useState<string>("");
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [github, setGithub] = useState<string>("");

  // get the current date
  const getFormattedDate = useCallback(() => {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Ensure the format includes a comma (Jan 31, 2025)
    return formattedDate.replace(/(\d{1,2}) (\d{4})/, "$1, $2");
  }, []);

  return (
    <>
      {/* This are assets in the background */}

      <img
        className="fixed -top-25 -left-20 sm:left-0 md:left-28 w-44 h-44 sm:w-auto bg-cover opacity-70 "
        src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-circle.svg"
        alt=""
      />

      <img
        className="fixed bottom-25 right-0 w-44 h-44 sm:w-auto bg-cover opacity-70 "
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
        <div className="flex flex-col justify-center max-w-3xl items-center mx-2 lg:mx-36 mt-20  ">
          <img
            src="/Front-end-mentor-react/conference-ticket-generator/assets/images/logo-full.svg"
            alt="Full logo"
            className=" w-35 mb-7 md:w-44"
          />

          <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-center text-pretty  mb-3">
            {isSubmitted ? (
              <p>
                Congrats,{" "}
                <span className=" bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent">
                  {name}
                </span>
                ! Your ticket is ready
              </p>
            ) : (
              <p>Your Journey to Coding Conf 2025 Starts Here!</p>
            )}
          </h1>

          <p className="text-[hsl(252,6%,83%)] text-center text-[clamp(1rem,2vw,1.125rem)] px-4 sm:px-8 md:px-16">
            {isSubmitted ? (
              <p>
                We've emailed your ticket to{" "}
                <span className="text-[hsl(7,71%,60%)]">{email}</span> and will
                send updates in the run up to the event.
              </p>
            ) : (
              "Secure your spot at next year's biggest coding conference."
            )}
          </p>
        </div>

        {/* Ticket and Form container */}
        {isSubmitted ? (
          <TicketCard
            github={github}
            image={image}
            name={name}
            getFormattedDate={getFormattedDate}
          />
        ) : (
          <TicketGeneratorForm
            image={image}
            setImage={setImage}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            github={github}
            setGithub={setGithub}
            setSubmitted={setSubmitted}
          />
        )}
      </div>
    </>
  );
};

export default TicketGeneratorMain;
