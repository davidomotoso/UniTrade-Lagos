const OrderSummary = () => {
  return (
    <section className="w-3/12 bg-white rounded-sm text-neutral-dark text-sm">
      <h6 className="font-medium uppercase px-2 py-3 border-b border-gray-200">
        Order summary
      </h6>
      <ul className="border-b border-gray-200 p-2 space-y-3">
        <li>
          Item's total (2)<span className="font-medium float-right">Price</span>
        </li>
        <li>
          Delivery fees<span className="font-medium float-right">Price</span>
        </li>
      </ul>
      <div className="flex items-center justify-between p-2 font-medium border-b border-gray-200">
        <p>Total</p>
        <p className="text-lg float-left">Total Price</p>
      </div>
      <div className="p-2">
        <button
          className="w-full bg-primary/85 hover:bg-primary font-medium text-white p-3 rounded-sm"
          title="confirm order"
          type="submit"
        >
          Confirm order
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
