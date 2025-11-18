export default function CartTitle({ itemsQuantityLabel }) {
  return (
    <div className="my-13 mx-6 text-[#3b3b3b] tracking-[0.4px] max-w-5xl lg:mx-auto lg:px-0">
      <div className="font-bold text-2xl/7 mb-3">Your Cart</div>
      <div className="text-xl leading-6">{itemsQuantityLabel}</div>
    </div>
  )
}
