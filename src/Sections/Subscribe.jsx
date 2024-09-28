

const Subscribe = () => {
  return (
    <section className="flex flex-wrap gap-10 max-container justify-between items-center">
      <h2 className="text-4xl dark:text-white  font-bold font-palanquin lg:max-w-lg">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h2>

      <div className="sm:border-2 max-sm:flex-col gap-5 border-slate-300 flex-1 max-w-xl flex justify-between items-center max-h-fit py-3 px-5 rounded-full">
        <input className="max-sm:border-2 bg-transparent max-sm:w-full outline-none max-sm:border-slate-300 max-sm:py-5 max-sm:px-3 max-sm:flex-1 max-sm:rounded-full" placeholder="Subscribe@RKSport" />
        <button className="bg-coral-red max-sm:w-full py-3 px-6 rounded-full text-white font-montserrat" >Sign Up</button>
      </div>
    </section>
  )
}

export default Subscribe;