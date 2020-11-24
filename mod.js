export const rand = ( min, max ) =>
  ( undefined == max )
  ? ( Math.random() * min )
  : ( Math.random() * (max - min) + min )
