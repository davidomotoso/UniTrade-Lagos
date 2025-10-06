import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface SellerPreviewProps {
  seller: {
    name: string;
    score: number;
    followers: number;
  };
  addClass: string;
  visible: boolean;
}

const SellerPreview = ({ seller, addClass, visible }: SellerPreviewProps) => {
  return (
    <div className={`${addClass} rounded-sm`}>
      <div className="p-3 border-b border-gray-200 space-y-2">
        <div className="flex items-center justify-between font-medium">
          <h3 className="text-xl">{seller.name}</h3>
          {visible && (
            <Link
              className="text-sm flex items-center gap-x-1 text-primary/85 hover:text-primary duration-150"
              href={`profile/${seller.name
                .toLocaleLowerCase()
                .split(" ")
                .join("-")}`}
            >
              See Profile <FaChevronRight />
            </Link>
          )}
        </div>
        <p>
          <span className="font-medium">{seller.score}%</span> Seller Score
        </p>
      </div>
      <div className="flex items-center justify-end gap-x-4 p-3">
        <p>
          <span className="font-medium">{seller.followers} </span>
          Followers
        </p>
        <button
          className="text-sm bg-primary text-white font-medium py-2 px-4 rounded-sm shadow-md hover:bg-primary/90 duration-150 cursor-pointer"
          type="submit"
          title="follow"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default SellerPreview;
