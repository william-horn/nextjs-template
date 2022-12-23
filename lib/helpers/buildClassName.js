
import removeExtraWhitespace from './removeExtraWhitespace';

const buildClassName = ({ base='', extend='', remove='' }) => {
  let className = base;
  const removed = remove.matchAll(/\S+/g);

  if (remove === 'all') {
    className = '';
  } else {
    for (let match of removed) {
      className = className.replace(
        new RegExp(`(.?)${match[0]}(.?)`, 'g'), // change to non-alphanumeric only
        (initial, bef, aft) => {
          const befSpace = bef === ' ';
          const aftSpace = aft === ' ';
          const befEmpty = bef === '';
          const aftEmpty = aft === '';

          return (befSpace && aftSpace)
            ? ' '
            : (befEmpty && aftSpace || befSpace && aftEmpty)
              ? ''
              : initial;
        }
      );
    }
  }

  className += ' ' + extend;
  return removeExtraWhitespace(className);
}


export default buildClassName;
