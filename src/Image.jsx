// export default function Image({ src = '', ...rest }) {
//   src = typeof src === 'string' && src.includes('https://')
//     ? src
//     : 'http://localhost:5000/api/uploads/' + src;

//   return (
//     <img {...rest} src={src} alt="" />
//   );
// }
export default function Image({ src = '', ...rest }) {
  src = typeof src === 'string' && src.includes('https://')
    ? src
    : 'http://localhost:5000/uploads/' + src;

  return (
    <img {...rest} src={src} alt="" />
  );
}
