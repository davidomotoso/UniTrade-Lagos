import useFunctions from "@/Utils/useFunctions";
import Link from "next/link";
import {
  FaChevronRight,
  FaSackDollar,
  FaShieldHalved,
  FaTruckMoving,
} from "react-icons/fa6";

const CheckoutDetails = () => {
  const { getDeliveryDate } = useFunctions();
  return (
    <section className="w-8/11 text-neutral-dark space-y-5">
      <div className="bg-white rounded-sm">
        <div>
          <div className="p-2 border-b border-gray-200 text-sm flex items-center justify-between">
            <h6 className="font-semibold uppercase">1. Customer Address</h6>
            <Link className="text-primary flex items-center gap-x-1" href={""}>
              Change <FaChevronRight />
            </Link>
          </div>
          <div className="p-3 space-y-2">
            <h6 className="text-sm">Customer name</h6>
            <address className="text-xs text-gray-600">
              Customer address | phone number
            </address>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm">
        <div>
          <div className="p-2 border-b border-gray-200 text-sm flex items-center justify-between">
            <h6 className="font-semibold uppercase">2. Delivery Details</h6>
            <Link className="text-primary flex items-center gap-x-1" href={""}>
              Change <FaChevronRight />
            </Link>
          </div>
          <div className="p-3 space-y-2">
            <h6 className="text-sm flex items-center justify-between">
              Door Delivery <FaTruckMoving className="text-lg text-secondary" />
            </h6>
            <p className="text-xs text-gray-600">
              Delivery between <strong>{getDeliveryDate(3)}</strong> and{" "}
              <strong>{getDeliveryDate(6)}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm">
        <div>
          <div className="p-2 border-b border-gray-200 text-sm flex items-center justify-between">
            <h6 className="font-semibold uppercase">3. Payment method</h6>
            <Link className="text-primary flex items-center gap-x-1" href={""}>
              Change <FaChevronRight />
            </Link>
          </div>
          <div className="p-3 font-medium space-y-4 border-b border-gray-200">
            <h6>Payment on delivery</h6>
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-x-3 group text-sm">
                <input
                  className="group-hover:before:bg-primary/30 before:duration-200 before:-left-2 before:-top-2 before:rounded-full before:absolute before:w-7 before:h-7 relative accent-primary"
                  title="Pay on delivery"
                  type="radio"
                  name="payment-method"
                  id="pay-on-delivery"
                />
                <label htmlFor="pay-on-delivery">
                  Pay on Delivery via bank transfer
                </label>
              </div>
              <FaSackDollar className="text-secondary" />
            </div>
          </div>
          <div className="p-3 font-medium space-y-4">
            <h6>Pre-pay</h6>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3 group text-sm">
                <input
                  className="group-hover:before:bg-primary/30 before:duration-200 before:-left-2 before:-top-2 before:rounded-full before:absolute before:w-7 before:h-7 relative accent-primary"
                  title="pre-pay"
                  type="radio"
                  name="payment-method"
                  id="pre-pay"
                />
                <label htmlFor="pre-pay">Pay via Paystack</label>
              </div>
              <FaShieldHalved className="text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutDetails;
