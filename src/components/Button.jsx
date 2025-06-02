function Button(props) {
  return (
    <button
      {...props}
      className="bg-gray-700 p-2 rounded-md text-gray-100 hover:bg-gray-600 transition-colors"
    >
      {props.children}
    </button>
  );
}

export default Button;
