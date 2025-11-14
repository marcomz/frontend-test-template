export default function CartSummary({ cart, itemsQuantityLabel }) {
  const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);
  return (
    <>
      <div>Order Summary</div>
      <div>{itemsQuantityLabel}</div>
      {
        cart.map(item => {
          return <div key={`item_summary_${item.id}`}>{`${item.name} $${item.price}`}</div>
        })
      }
      <div>Order Total {`$${total}`}</div>
    </>
  )
}
