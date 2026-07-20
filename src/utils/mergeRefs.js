/**
 * Merges multiple React refs into a single ref callback.
 *
 * Supports:
 * - useRef()
 * - createRef()
 * - callback refs
 *
 * @param  {...React.Ref} refs
 * @returns {React.RefCallback}
 */
export function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    });
  };
}
