export default function CartSummary({ cart, itemsQuantityLabel }) {
  const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);
  return (
    <div className="border-[0.5] border-[#8F8F8F] rounded-lg text-[#3b3b3b] py-6 px-4 mx-4">
      <div className="font-bold text-xl leading-6 tracking-[0.4] mb-4">Order Summary</div>
      <div className="leading-6 tracking-[0.4] text-lg mb-10">{itemsQuantityLabel}</div>
      {
        cart.map(item => {
          return (
            <div className="leading-6 text-lg tracking-[0.4] mb-4.5" key={`item_summary_${item.id}`}>
              <span>{`${item.name}`}</span>
              <span className="float-right">{`$${item.price}`}</span>
            </div>
          );
        })
      }
      <div className="text-xl font-bold leading-6 tracking-[0.4] border-t-[0.5] pt-6 mb-4.5">
        <span>Order Total</span>
        <span className="float-right">{`$${total}`}</span>
      </div>
    </div>
  )
}
