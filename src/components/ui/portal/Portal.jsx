import { createPortal } from 'react-dom';

export function Portal({ children, container }) {
  const portalRoot = container ?? document.getElementById('portal');

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
}
