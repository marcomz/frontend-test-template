export default function GameImage({ src, isItCartScreen }) {
  let className = 'mb-4';
  if (isItCartScreen) className += ' w-[88%] lg:w-3xs h-auto mr-8';
  return <img className={className} src={src} />
}
