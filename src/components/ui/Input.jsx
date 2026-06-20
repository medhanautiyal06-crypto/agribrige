/**
 * Input Component
 *
 * Props:
 * label
 * placeholder
 * type
 * value
 * onChange
 * error
 */

export default function Input({
  label,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border p-2 rounded-lg"
      />
    </div>
  );
}