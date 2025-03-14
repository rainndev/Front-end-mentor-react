import React, { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TicketGeneratorFormProps {
  formData: {
    image: string;
    name: string;
    email: string;
    github: string;
    isSubmitted: boolean;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<{
      image: string;
      name: string;
      email: string;
      github: string;
      isSubmitted: boolean;
    }>
  >;
}

const TicketGeneratorForm: React.FC<TicketGeneratorFormProps> = ({
  formData,
  setFormData,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgSizeError, setimgSizeError] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);

  const errorVariants = {
    hidden: {
      x: 0,
      opacity: 0,
    },

    play: {
      x: [0, -2, 2, 0],
      opacity: 1,
    },
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleFileChanged = (event: any) => {
    const file = event.target.files[0];
    console.log("Filechange execute: onchanged");
    if (file) {
      // Read file and generate preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result !== undefined) {
          if (typeof e.target.result === "string" && file.size <= 500000) {
            setFormData({ ...formData, image: e.target.result });
            setimgSizeError(false);
          } else {
            setimgSizeError(true);
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
  }, [formData]);

  const handleRemove = useCallback(() => {
    console.log("Removing image...");
    setFormData({ ...formData, image: "" });
  }, [formData]);

  console.log(formData.name, formData.email, formData.github);

  return (
    <form className="formContainer mt-10 flex flex-col w-full max-w-md space-y-5 z-30 ">
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
          onClick={() => !formData.image && handleClickUpload()}
          className={`border-2 border-dashed border-[hsl(245,15%,58%)] rounded-xl py-4 bg-[hsla(245,19%,35%,0.3)] cursor-pointer flex flex-col items-center justify-center backdrop-blur-[2px]  ${
            !formData.image && "hover:bg-[hsl(252,6%,83%,0.2)]"
          } `}
        >
          {/* Image icon for upload */}
          <div
            className={`bg-[hsla(246,15%,58%,0.3)] border border-[hsla(246,15%,58%,0.3)] ${
              formData.image ? "p-0 w-10 h-10" : "p-1"
            } drop-shadow-2xl  rounded-lg mb-3 `}
          >
            <img
              src={
                formData.image
                  ? formData.image
                  : "/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-upload.svg"
              }
              alt="upload-avatar"
              className="w-full h-full rounded-lg bg-cover"
            />
          </div>

          {formData.image ? (
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
        <motion.div
          variants={errorVariants}
          initial={imgSizeError ? "hidden" : { opacity: 1 }}
          animate={imgSizeError ? "play" : ""}
          transition={{
            duration: 0.25,
          }}
          className={`flex space-x-2 mt-2 ${
            imgSizeError ? "text-red-400" : "text-[hsl(245,15%,58%)] "
          }`}
        >
          <div
            className="w-5 h-5 bg-current"
            style={{
              WebkitMaskImage:
                "url(/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-info.svg)",
              maskImage:
                "url(/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-info.svg)",
              WebkitMaskSize: "contain", // Prevents repeating
              maskSize: "contain", // Ensures the whole SVG fits
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />

          <p className="text-[clamp(.8rem,3vw,.875rem)] ">
            {imgSizeError
              ? "File too large. Please upload a photo under 500KB."
              : "Upload your photo (JPG or PNG, max size: 500KB)."}
          </p>
        </motion.div>
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
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            setEmailValid(validateEmail(formData.email));
          }}
          autoComplete="off"
          placeholder="example@gmail.com"
          className="border-[hsl(245,15%,58%)] border py-3 rounded-xl bg-[hsla(245,19%,35%,0.3)] px-3 backdrop-blur-[2px]  hover:bg-[hsl(252,6%,83%,0.2)]"
          id="email"
          type="text"
        />

        {!isEmailValid && formData.email.length > 5 && (
          <motion.div
            variants={errorVariants}
            initial="hidden"
            whileInView="play"
            transition={{
              duration: 0.25,
            }}
            className={`flex space-x-2 mt-2 ${
              !isEmailValid ? "text-red-400" : "text-[hsl(245,15%,58%)] "
            }`}
          >
            <div
              className="w-5 h-5 bg-current"
              style={{
                WebkitMaskImage:
                  "url(/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-info.svg)",
                maskImage:
                  "url(/Front-end-mentor-react/conference-ticket-generator/assets/images/icon-info.svg)",
                WebkitMaskSize: "contain", // Prevents repeating
                maskSize: "contain", // Ensures the whole SVG fits
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />

            <p className="text-[clamp(.8rem,3vw,.875rem)] ">
              Please enter a valid email adress.
            </p>
          </motion.div>
        )}
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
          value={formData.github}
          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          autoComplete="off"
          placeholder="@yourusername"
          className="border-[hsl(245,15%,58%)] border py-3 rounded-xl bg-[hsla(245,19%,35%,0.3)] px-3 backdrop-blur-[2px]  hover:bg-[hsl(252,6%,83%,0.2)]"
          id="github"
          type="text"
        />
      </div>

      {/* Generate ticket button */}
      <button
        onClick={() => {
          if (!imgSizeError && isEmailValid)
            setFormData({ ...formData, isSubmitted: true });
        }}
        className="w-full bg-[hsl(7,88%,67%)] text-[hsl(248,70%,10%)] py-3 font-black rounded-xl hover:bg-[hsl(7,71%,60%)] z-20"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default React.memo(TicketGeneratorForm);
