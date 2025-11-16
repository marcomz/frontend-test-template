export default function GameImage({ src, isItCartScreen }) {
  return <img className={`mb-4 ${isItCartScreen ? 'w-[88%]' : ''}`} src={src} />
}
