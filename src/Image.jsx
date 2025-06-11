// export default function Image({ src = '', ...rest }) {
//   src = typeof src === 'string' && src.includes('https://')
//     ? src
//     : 'https://airbnb-backend-aaky.onrender.com/api/uploads/' + src;

//   return (
//     <img {...rest} src={src} alt="" />
//   );
// }
export default function Image({ src = '', ...rest }) {
  src = typeof src === 'string' && src.includes('https://')
    ? src
    : 'https://airbnb-backend-aaky.onrender.com/uploads/' + src;

  return (
    <img {...rest} src={src} alt="" />
  );
}
