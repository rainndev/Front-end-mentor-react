import { useCallback, useRef, useState } from "react";

const TicketGeneratorForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("");

  const handleFileChanged = (event: any) => {
    const file = event.target.files[0];
    console.log("Filechange execute: onchanged");
    if (file) {
      // Read file and generate preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result !== undefined) {
          if (typeof e.target.result === "string" && file.size <= 500000) {
            setImage(e.target.result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickUpload = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Open file picker
    }
  }, [setImage]);

  const handleRemove = useCallback(() => {
    console.log("Removing image...");
    setImage("");
  }, [setImage]);

  return (
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
          onClick={() => !image && handleClickUpload()}
          className={`border-2 border-dashed border-[hsl(245,15%,58%)] rounded-xl py-4 bg-[hsla(245,19%,35%,0.3)] cursor-pointer flex flex-col items-center justify-center backdrop-blur-[2px]  ${
            !image && "hover:bg-[hsl(252,6%,83%,0.2)] "
          } `}
        >
          {/* Image icon for upload */}
          <div
            className={`bg-[hsla(246,15%,58%,0.3)] border border-[hsla(246,15%,58%,0.3)] ${
              image ? "p-0 w-10 h-10" : "p-1"
            } drop-shadow-2xl  rounded-lg mb-3 `}
          >
            <img
              src={
                image
                  ? image
                  : "/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-upload.svg"
              }
              alt="upload-avatar"
              className="w-full h-full rounded-lg bg-cover"
            />
          </div>

          {image ? (
            // button for remove
            <div
              onClick={handleRemove}
              className="space-x-2 md:space-x-5 text-[hsl(252,6%,83%)]"
            >
              <button className="px-3 py-1 text-[clamp(0.5rem,3vw,.9rem)] bg-[hsla(245,19%,35%,0.5)] rounded-md underline  hover:bg-[hsl(252,6%,83%,0.2)]">
                Remove image
              </button>

              {/* change avatar button */}
              <button
                onClick={handleClickUpload}
                className="px-3 py-1 text-[clamp(0.5rem,3vw,.9rem)] bg-[hsla(245,19%,35%,0.5)] rounded-md hover:bg-[hsl(252,6%,83%,0.2)]"
              >
                Change image
              </button>
            </div>
          ) : (
            <p className="text-gray-400 text-[clamp(0.9rem,3vw,1rem)] text-center mx-4">
              Drag and drop or click to upload
            </p>
          )}

          <input
            ref={fileInputRef}
            onChange={handleFileChanged}
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

          <p className=" text-[clamp(.8rem,3vw,.875rem)] text-[hsl(245,15%,58%)]">
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
          autoComplete="off"
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
          autoComplete="off"
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
          autoComplete="off"
          placeholder="@yourusername"
          className="border-[hsl(245,15%,58%)] border py-3 rounded-xl bg-[hsla(245,19%,35%,0.3)] px-3 backdrop-blur-[2px]  hover:bg-[hsl(252,6%,83%,0.2)]"
          id="github"
          type="text"
        />
      </div>

      {/* Generate ticket button */}
      <button
        type="submit"
        className="w-full bg-[hsl(7,88%,67%)] text-[hsl(248,70%,10%)] py-3 font-black rounded-xl hover:bg-[hsl(7,71%,60%)] z-20"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default TicketGeneratorForm;
