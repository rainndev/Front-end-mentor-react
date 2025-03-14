interface TicketPropTypes {
  github: string;
  image: string;
  name: string;
  getFormattedDate: string;
}

const TicketCard = ({
  github,
  image,
  name,
  getFormattedDate,
}: TicketPropTypes) => {
  return (
    <div className="w-full h-fit flex justify-center items-center mt-10 md:mt-20 overflow-hidden">
      <div className="h-fit w-xl relative">
        <img
          className="w-full"
          src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-ticket.svg"
          alt=""
        />

        <div className="absolute top-0 left-0 w-full h-full text-center text-white flex flex-col justify-center items-center  p-3 md:p-5">
          {/* Top info */}
          <div className="h-[70%] w-full flex space-x-4">
            <div className="w-fit">
              {/* top left info */}
              <img
                src="/Front-end-mentor-react/conference-ticket-generator/assets/images/logo-mark.svg"
                alt="logo"
                className="w-6 sm:w-10 mt-4"
              />
            </div>
            {/* top right info */}
            <div className="w-full flex flex-col items-start ">
              <h1 className="font-bold text-[clamp(1.3rem,4vw,2.4rem)]">
                Coding Conf
              </h1>
              <p className="text-[clamp(.7rem,3vw,1rem)] text-[hsl(252,6%,83%)]">{`${getFormattedDate} / Austin, TX`}</p>
            </div>
          </div>

          {/* Bottom info */}

          <div className=" h-[30%] w-full flex  ">
            {/* Bottom left info */}
            <img
              src={image}
              className="max-h-full w-[13%] object-cover rounded-md md:rounded-xl mr-3"
            />

            {/* Bottom Right info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-[clamp(1.2rem,3vw,1.65rem)]">{name}</h1>
              <div className="flex">
                <img
                  className="mr-1 md:mr-2 w-3 md:w-4 object-center"
                  src="/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-github.svg"
                />
                <p className="text-[clamp(.6rem,2vw,1rem)] text-[hsl(252,6%,83%)]">
                  @{github}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
