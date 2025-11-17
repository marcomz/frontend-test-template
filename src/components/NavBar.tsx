import Logo from "./Logo.tsx";
import ShoppingCart from "./ShoppingCart.tsx";

export default function NavBar() {
  return (
    <div className="px-6 bg-[#eeeeee] py-4.25">
      <div className="flex justify-between items-baseline mx-auto max-w-5xl">
        <Logo />
        <ShoppingCart />
      </div>
    </div>
  );
}
