import { useRef } from "react";

const TicketGeneratorMain = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="text-white w-screen h-screen bg-[hsl(248,70%,10%)] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center bg-[url(/Front-end-mentor-react/conference-ticket-generator/assets/images/pattern-lines.svg),url(/Front-end-mentor-react/conference-ticket-generator/assets/images/background-desktop.png)] font-[Inconsolata] p-8 ">
      {/* Top Info */}
      <div className="flex flex-col justify-center items-center mx-36">
        <img
          src="/Front-end-mentor-react/conference-ticket-generator/assets/images/logo-full.svg"
          alt="Full logo"
          className="mb-10"
        />

        <h1 className="text-5xl font-bold text-center text-pretty  mb-3">
          Your Journey to Coding Conf <br />
          2025 Starts Here!
        </h1>

        <p className="text-[hsl(245,15%,58%)]">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>

      {/* Form container */}
      <form
        className="mt-10 flex flex-col w-full 
      max-w-md"
      >
        {/* Avatar Uploader */}
        <div className="flex flex-col">
          {/* Label for Upload avatar */}
          <label
            htmlFor="upload-avatar"
            className="text-white text-md font-semibold mb-2"
          >
            Upload Avatar
          </label>

          <div
            id="upload-avatar"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="border-2 border-dashed border-[hsl(245,15%,58%)] rounded-xl py-4 bg-indigo-950 cursor-pointer flex flex-col items-center justify-center"
          >
            {/* Image icon for upload */}
            <div className="bg-indigo-900 p-2 rounded-lg mb-3 ">
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
      </form>
    </div>
  );
};

export default TicketGeneratorMain;
