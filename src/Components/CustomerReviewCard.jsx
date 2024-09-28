import { star } from "../assets/icons";

const CustomerReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex flex-col items-center mt-16 ">
        <img 
            src={imgURL} alt="customer-profile"
            className="w-32 h-32 rounded-full"
        />
        <p className="info-text text-center max-w-sm mt-6">{feedback}</p>
        <div className="flex items-center gap-3 mt-5">
            <img 
                src={star} alt="rating-star"
            />
            <p className="info-text">({rating})</p>
        </div>
        <h3 className='text-3xl font-palanquin font-bold my-5'>{customerName}</h3>
    </div>
  )
}

export default CustomerReviewCard;