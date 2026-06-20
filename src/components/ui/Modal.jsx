/**
 * Modal Component
 *
 * Props:
 * isOpen
 * onClose
 * title
 * children
 */

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <h2>{title}</h2>

        {children}

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}