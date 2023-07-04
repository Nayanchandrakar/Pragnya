const Button = ({ label, handleFunction, isColored, isLoading }) => {
  return (
    <button
      {...(isLoading ? disabled : null)}
      onClick={handleFunction}
      className={`${
        isColored
          ? "bg-secondary hover:bg-secondaryLight"
          : "bg-transparent border-secondary border-[1px] text-[#08154a] hover:border-para"
      } py-3 px-5 text-zinc-200 text-sm font-semibold w-fit h-fit  : null} rounded-full transition-all duration-300  cursor-pointer  disabled:cursor-not-allowed`}
    >
      {label}
    </button>
  )
}
export default Button
