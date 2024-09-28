

const ShoeCard = ({shoe, currentImage, heroImageChange}) => {
    
    function handleChange() {
        heroImageChange(shoe.imageURL);
    }

    
  return (
    <div className={`border-2 ${currentImage === shoe.imageURL && 'border-coral-red'} p-2 bg-card bg-center bg-cover rounded-xl cursor-pointer`}>
        <img 
            src={shoe.thumbnail}
            alt="shoe-image"
            width={120}
            height={120}
            className="object-contain"
            onClick={handleChange}
        />
    </div>
  )
}

export default ShoeCard;