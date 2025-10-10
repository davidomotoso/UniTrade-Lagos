import { sellers } from "@/components/Exports";
import SellerPreview from "@/components/SellerPreview";
import { FiArrowLeft } from "react-icons/fi";
import useFunctions from "@/Utils/useFunctions";
import Link from "next/link";
import comingSoon from "@/../public/coming-soon.svg";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const page = async ({ params }: { params: { name: string } }) => {
  const { name } = await params;
  const { getAppraisal } = useFunctions();
  return (
    <>
      <Navbar />
    <section className="bg-white rounded-sm text-neutral-dark pb-4">
      {sellers
        .filter(
          (seller) => seller.name.toLowerCase().split(" ").join("-") === name,
        )
        .map((seller, index) => (
          <section className="space-y-4" key={index}>
            <Link
              className="hover:text-black duration-150"
              href={`/seller/${seller.name
                .toLocaleLowerCase()
                .split(" ")
                .join("-")}`}
            >
              <h3 className="flex items-center gap-x-3 text-xl font-medium p-3 border-b border-gray-200">
                <FiArrowLeft /> Seller Profile
              </h3>
            </Link>
            <SellerPreview
              seller={seller}
              addClass={"border border-gray-300 mt-4 mx-3"}
              visible={false}
            />
            <div className="grid grid-cols-2 gap-x-5 p-3">
              <div className="border border-gray-300 rounded-sm">
                <h6 className="uppercase p-3 border-b border-gray-200 font-medium">
                  Seller Information
                </h6>
                <div className="p-3 space-y-2">
                  <p>
                    Joined:{" "}
                    <span className="font-medium">
                      {seller.sellerInfo[0].duration} years ago
                    </span>
                  </p>
                  <p>
                    Successful Sales:{" "}
                    <span className="font-medium">
                      {seller.sellerInfo[0].sales}+
                    </span>
                  </p>
                </div>
              </div>
              <div className="border border-gray-300 rounded-sm">
                <h6 className="uppercase p-3 border-b border-gray-200 font-medium">
                  Seller performance
                </h6>
                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-x-1">
                    <div
                      className={`${
                        getAppraisal(
                          seller.sellPerformance[0].shipingSpeed ?? 0,
                        ).color
                      } rounded-full p-1 text-white`}
                    >
                      {
                        getAppraisal(
                          seller.sellPerformance[0].shipingSpeed ?? 0,
                        ).icon
                      }
                    </div>
                    <p>
                      Shipping speed:{" "}
                      <span className="font-medium">
                        {
                          getAppraisal(
                            seller.sellPerformance[0].shipingSpeed ?? 0,
                          ).grade
                        }
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <div
                      className={`${
                        getAppraisal(
                          seller.sellPerformance[0].qualityScore ?? 0,
                        ).color
                      } rounded-full p-1 text-white`}
                    >
                      {
                        getAppraisal(
                          seller.sellPerformance[0].qualityScore ?? 0,
                        ).icon
                      }
                    </div>
                    <p>
                      Quality Score:{" "}
                      <span className="font-medium">
                        {
                          getAppraisal(
                            seller.sellPerformance[0].qualityScore ?? 0,
                          ).grade
                        }
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <div
                      className={`${
                        getAppraisal(
                          seller.sellPerformance[0].customerRating ?? 0,
                        ).color
                      } rounded-full p-1 text-white`}
                    >
                      {
                        getAppraisal(
                          seller.sellPerformance[0].customerRating ?? 0,
                        ).icon
                      }
                    </div>
                    <p>
                      Customer Rating:{" "}
                      <span className="font-medium">
                        {
                          getAppraisal(
                            seller.sellPerformance[0].customerRating ?? 0,
                          ).grade
                        }
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl text-center font-medium mt-3">
              Customer Review
            </h3>
            <Image
              className="mx-auto rounded-sm"
              width={600}
              src={comingSoon}
              alt="coming-soon"
            />
          </section>
        ))}
    </section>
    </>
  );
};

export default page;
