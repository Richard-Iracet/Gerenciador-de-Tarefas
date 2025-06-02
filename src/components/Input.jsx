function Input({ isInvalid, className = "", ...props }) {
  return (
    <input
      className={`border ${
        isInvalid ? "border-red-500" : "border-gray-600"
      } outline-none bg-gray-900 text-gray-100 px-4 py-2 rounded-md transition-colors ${className}`}
      {...props}
    />
  );
}

export default Input;
