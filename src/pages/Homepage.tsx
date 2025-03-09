import { challenges } from "../data/challenges";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="text-amber-300">
      <h1 className="text-5xl font-bold"> Frontend Mentor | Challenges</h1>
      <ul className="mt-5 list-disc list-inside text-2xl underline">
        {challenges.map(({ title }) => (
          <li>
            <Link to={`/${title}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
