import Image from "next/image"
import logo from "@/../public/LAGMIA-logo.png"

const auth = () => {
  return (
    <section className="text-neutral-dark w-full grid place-content-center h-screen bg-white absolute top-0 left-0">
      <section className="space-y-7 w-[27rem]">
        <div className="space-y-1 text-center">
       <Image className="mx-auto mb-2" src={logo} alt="lagmia logo"/>
        <h2 className="font-semibold text-2xl">Welcome to Lagmia</h2>
        <p>
          Input your e-mail or phone number to log in or create a Lagmia account.
        </p>
      </div>
      <form className="space-y-10">
        <label className="font-medium" htmlFor="auth">
          Email or Phone number
        </label>
        <input
          className="w-full border rounded-sm border-gray-400 p-4 focus:outline-primary/50 mt-1"
          title="enter phone number or email"
          name="auth"
          id="auth"
          type="text"
          autoComplete="on"
          placeholder="Mobile Number or Email..."
        />
        <button
          className="bg-primary/85 hover:bg-primary duration-150 cursor-pointer text-white font-medium text-center w-full p-4 rounded-sm"
          title="submit"
          type="submit"
        >
          Submit
        </button>
      </form>
      </section>
      <p className="text-primary underline mt-1">
        Sell on Lagmia
      </p>
    </section>
  );
};

export default auth;
