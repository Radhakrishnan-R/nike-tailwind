import CustomerReviewCard from "../Components/CustomerReviewCard";
import { reviews } from "../contants";

const CustomerReviews = () => {
  console.log(reviews);
  return (
    <section>
      <div className="flex justify-center flex-col items-center">
      <h2 className="text-4xl font-bold font-palanquin text-center ">What Our <span className="text-coral-red">Customer</span> Say?</h2>
      <p className="info-text max-w-lg text-center mt-5">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className="flex justify-center lg:gap-32 flex-wrap max-xl:min-w-[350px] ">
        {reviews.map((review, i) => (
          <CustomerReviewCard key={i} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews;