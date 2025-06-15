function Button(props) {
  return (
    <div>
      <button
        className={`flex justify-center items-center space-x-2 p-5 rounded-[8px] ${props.btnBgColor} ${props.btnTextColor}  cursor-pointer`}
      >
        <p>{props.btnText}</p>
        <img src="images/Vector.png" alt="" />
      </button>
    </div>
  );
}

export default Button;
