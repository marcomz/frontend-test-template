export default function CartTitle({ itemsQuantityLabel }) {
  return (
    <div className="my-13 mx-6 text-[#3b3b3b] tracking-[0.4px]">
      <div className="font-bold text-2xl/7 mb-3">Your Cart</div>
      <div className="text-xl leading-6">{itemsQuantityLabel}</div>
    </div>
  )
}
