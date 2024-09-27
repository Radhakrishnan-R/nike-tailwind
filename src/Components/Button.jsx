

const Button = ({text, endIcon}) => {
  return (
    <button className="text-lg font-montserrat bg-coral-red py-4 px-8 rounded-full flex gap-2 items-center text-white">
        {text}
        <img
            alt="arrow-right"
            src={endIcon}
            width={20}
            height={20}

        />
    </button>
  )
}

export default Button;