const BlogPreviewCard = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[hsl(47_88%_63%)] font-[Figtree] ">
      {/* Container */}
      <div className="bg-white p-5 rounded-2xl border-1 border-[hsl(0_0%_42%)] shadow-[10px_10px]  w-[375px] space-y-4 mx-5">
        {/* Image */}

        <div className="w-full">
          <img
            className="rounded-xl"
            src="/Front-end-mentor-react/blog-preview-card/assets/images/illustration-article.svg"
            alt=""
          />
        </div>

        {/* Info */}
        <div className="space-y-4 w-full">
          <button className="bg-[hsl(47_88%_63%)] px-3 py-1 rounded-md font-bold text-sm">
            Learning
          </button>
          <p className="font-medium  text-sm">Published 21 Dec 2023</p>

          <h1 className="hover:text-[hsl(47_88%_63%)] font-extrabold text-2xl">
            HTML & CSS foundations
          </h1>

          <p className="text-gray-500  ">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>

          {/* Profile */}
          <div className="flex space-x-2 items-center">
            <img
              className="w-8 h-8"
              src="/Front-end-mentor-react/blog-preview-card/assets/images/image-avatar.webp"
              alt="profile-picture"
            />

            <p className="font-bold text-sm">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
