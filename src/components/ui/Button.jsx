/**
 * Button Component
 *
 * Props:
 * variant - primary | secondary | outline
 * size - sm | md | lg
 * disabled - boolean
 * onClick - function
 */

export default function Button({
  children,
  variant = "primary",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg ${
        variant === "primary"
          ? "bg-green-600 text-white"
          : "border border-green-600 text-green-600"
      }`}
    >
      {children}
    </button>
  );
}