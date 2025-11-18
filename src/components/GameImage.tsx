export default function GameImage({ src, isItCartScreen, isNew }) {
  let className = 'mb-4';
  if (isItCartScreen) className += ' w-[88%] lg:w-3xs h-auto mr-8 shrink-0';
  if (isNew) className += ' relative';

  let imageClassName = '';
  if (!isItCartScreen) imageClassName += 'rounded-ss-[16] rounded-se-[16]';

  return (
    <div className={className}>
      <img src={src} className={imageClassName} />
      {isNew && <span className="absolute top-0 leading-4 tracking-[0.4] bg-[#F5F5F4] text-[#3B3B3B] top-3 left-3 px-3 py-2 rounded-sm">New</span>}
    </div>
  );
}
