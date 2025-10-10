import { BsBagCheckFill } from "react-icons/bs";
import { FaCheck, FaCheckDouble, FaX } from "react-icons/fa6";
import { useCartStore } from "./storeCart";

const useFunctions = () => {
  const getDeliveryDate = (daysToAdd: number): string => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const getAppraisal = (score: number) => {
    if (score >= 75) {
      return {
        icon: <BsBagCheckFill className="text-xs" />,
        grade: "Excellent",
        color: "bg-green-500",
      };
    } else if (score >= 60) {
      return {
        icon: <FaCheckDouble className="text-xs" />,
        grade: "Good",
        color: "bg-blue-500",
      };
    } else if (score >= 40) {
      return {
        icon: <FaCheck className="text-xs" />,
        grade: "Average",
        color: "bg-secondary",
      };
    } else {
      return {
        icon: <FaX className="text-xs" />,
        grade: "Poor",
        color: "bg-red-500",
      };
    }
  };

  const alertMessage = (message: string, color: string) => {
    const setAlert = useCartStore.getState().setAlert;
    setAlert({ message, type: true, color });
    setTimeout(() => {
      setAlert({ message: "", type: false, color: "" });
    }, 2000);
  };

  const calTotalPrice = () => {
    const cart = useCartStore.getState().cart as { price: string,quantity:number }[];
    let total = 0;
    cart.forEach((item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *item.quantity;
      total += price;
    });
    return total
      .toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      })
      .replace(/\.00$/, "");
  };


  return { getDeliveryDate, getAppraisal, alertMessage, calTotalPrice };
};
export default useFunctions;
