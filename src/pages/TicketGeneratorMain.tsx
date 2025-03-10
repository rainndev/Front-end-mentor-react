import { useRef } from "react";

const TicketGeneratorMain = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* This are assets in the background */}
      <img
        className="fixed -top-25  left-28 bg-cover opacity-70 "
        src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-circle.svg"
        alt=""
      />

      <img
        className="fixed right-0 top-20 bg-cover"
        src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-squiggly-line-top.svg"
        alt=""
      />

      <img
        className="fixed left-0 bottom-0 "
        src="/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt=""
      />

      <div className=" text-white w-screen h-screen bg-[hsl(248,70%,10%)] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center bg-[url(/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-lines.svg),url(/Front-end-mentor-react/conference-ticket-generator/assets/images/background-desktop.png)] font-[Inconsolata] p-8 ">
        {/* Top Info */}
        <div className="flex flex-col justify-center items-center mx-36">
          <img
            src="/Front-end-mentor-react/conference-ticket-generator/assets/images/logo-full.svg"
            alt="Full logo"
            className="mb-10 w-44"
          />

          <h1 className="text-5xl font-bold text-center text-pretty  mb-3">
            Your Journey to Coding Conf <br />
            2025 Starts Here!
          </h1>

          <p className="text-[hsl(252,6%,83%)] text-lg">
            Secure your spot at next year's biggest coding conference.
          </p>
        </div>

        {/* Form container */}
        <form
          className="formContainer mt-10 flex flex-col w-full 
      max-w-md space-y-5 "
        >
          {/* Avatar Uploader */}
          <div className="flex flex-col ">
            {/* Label for Upload avatar */}
            <label
              htmlFor="upload-avatar"
              className="text-white text-md font-semibold mb-2"
            >
              Upload Avatar
            </label>

            <div
              id="upload-avatar"
              onClick={() =>
                fileInputRef.current && fileInputRef.current.click()
              }
              className="border-2 border-dashed border-[hsl(245,15%,58%)] rounded-xl py-4 bg-[hsla(245,19%,35%,0.3)] cursor-pointer flex flex-col items-center justify-center backdrop-blur-[2px]  hover:bg-[hsl(252,6%,83%,0.2)] "
            >
              {/* Image icon for upload */}
              <div className="bg-[hsla(246,15%,58%,0.3)] border-[hsl(245,15%,58%)] drop-shadow-2xl p-2 rounded-lg mb-3 ">
                <img
                  src="/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-upload.svg"
                  alt="upload-avatar"
                  className="w-6 h-6 "
                />
              </div>
              <p className="text-gray-400 text-md text-center">
                Drag and drop or click to upload
              </p>

              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
              />
            </div>
            <div className="flex space-x-2 mt-2">
              <img
                src="/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-info.svg"
                alt=""
              />

              <p className="text-sm text-[hsl(245,15%,58%)]">
                Upload your photo (JPG or PNG, max size: 500KB).
              </p>
            </div>
          </div>

          {/* Full name */}

          <div className="flex flex-col">
            <label
              className="text-white text-md font-semibold mb-2 "
              htmlFor="full-name"
            >
              Full Name
            </label>
            <input
              className="border-[hsl(245,15%,58%)] border py-3 rounded-xl bg-[hsla(245,19%,35%,0.3)] px-3 backdrop-blur-[2px]"
              id="full-name"
              type="text"
            />
          </div>
          {/* Email Address */}
          <div className="flex flex-col">
            <label
              className="text-white text-md font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              placeholder="example@gmail.com"
              className="border-[hsl(245,15%,58%)] border py-3 rounded-xl bg-[hsla(245,19%,35%,0.3)] px-3 backdrop-blur-[2px]  hover:bg-[hsl(252,6%,83%,0.2)]"
              id="email"
              type="email"
            />
          </div>

          {/*  Github Username */}
          <div className="flex flex-col">
            <label
              className="text-white text-md font-semibold mb-2"
              htmlFor="github"
            >
              Github Username
            </label>
            <input
              placeholder="@yourusername"
              className="border-[hsl(245,15%,58%)] border py-3 rounded-xl bg-[hsla(245,19%,35%,0.3)] px-3 backdrop-blur-[2px]  hover:bg-[hsl(252,6%,83%,0.2)]"
              id="github"
              type="text"
            />
          </div>

          {/* Generate ticket button */}
          <button
            type="submit"
            className="w-full bg-[hsl(7,88%,67%)] text-[hsl(248,70%,10%)] py-3 font-black rounded-xl hover:bg-[hsl(7,71%,60%)]"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </>
  );
};

export default TicketGeneratorMain;
