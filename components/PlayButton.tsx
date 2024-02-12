import { FaPlay } from "react-icons/fa";

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton = () => {
  return (
    <button className="flex translate-y-1/4 items-center rounded-full bg-green-500 p-4 opacity-0 drop-shadow-lg transition hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100">
      <FaPlay />
    </button>
  );
};
export default PlayButton;
