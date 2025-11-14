export default function CartTitle({ itemsQuantityLabel }) {
  return (
    <>
      <div className="font-[Archivo] font-bold text-2xl/7 tracking-[0.4px] text-[#3b3b3b] py-8 px-5.75">Your Cart</div>
      <div className="">{itemsQuantityLabel}</div>
    </>
  )
}
