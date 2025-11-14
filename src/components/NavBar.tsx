import Logo from "./Logo.tsx";
import ShoppingCart from "./ShoppingCart.tsx";

export default function NavBar() {
  return (
    <div className="flex justify-between items-baseline px-6 bg-[#eeeeee] py-4.25">
      <Logo />
      <ShoppingCart />
    </div>
  );
}
