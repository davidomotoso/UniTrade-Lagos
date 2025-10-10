import { FaPen } from "react-icons/fa6";

const Overview = () => {
  return (
    <section className="bg-white rounded-sm text-neutral-dark w-8/11">
      <h3 className="text-xl font-medium p-3 border-b border-gray-200">
        Account Overview
      </h3>
      <section className="flex items-stretch justify-between p-4">
        <div className="w-19/39 rounded-sm border border-gray-300">
          <h5 className="font-medium p-3 border-b border-gray-200 uppercase">
            Account details
          </h5>
          <div className="p-4 space-y-2">
            <h5>David Omotoso</h5>
            <p className="text-sm text-gray-500">example@gmail.com</p>
          </div>
        </div>
        <div className="w-19/39 rounded-sm border border-gray-300">
          <h5 className="font-medium p-3 border-b border-gray-200 uppercase flex items-center justify-between">
            Address Book
            <div className="text-secondary/85 grid place-content-center h-8 w-8 rounded-full duration-200 cursor-pointer hover:bg-secondary/30">
              <FaPen />
            </div>
          </h5>
          <div className="p-4 space-y-2">
            <h5>Your default shipping address:</h5>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              exercitationem ipsa labore ipsam molestiae voluptatem similique
              saepe soluta nobis nostrum eius error dicta, provident, eos veniam
              repellat perspiciatis odio aliquid.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Overview;
