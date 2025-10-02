import { Carousel, Card, Rating } from 'flowbite-react';
import { Reviews } from '../Data/Reviews';


export const HomePage = () => {
  document.title = 'Obaid'
  return (
    <>
        <div className='text-white'>
          <h2 className='flex justify-center align-middle mt-20 md:mt-40 font-extrabold text-3xl md:text-6xl'>print("Hello world")</h2>
          <p className='flex justify-center align-middle mt-5 md:mt-10 font-extrabold text-xl md:text-4xl'>I'm Obaid, a student at the <span className='text-rose-500'> Illinois Institute of Technology</span> </p>
          <p className='flex justify-center align-middle mt-5 md:mt-10 font-extrabold text-xl md:text-4xl'>studying <span className='text-rose-500'> Artificial Intelligence </span> with a minor in Computational Mathematics</p>
          <p className='flex justify-center align-middle mt-5 md:mt-10 font-extrabold text-sm md:text-2xl'>This is my resume website where you can see what classes I've taken, my work experiences and a bit more about me</p>
        </div>

        <div className= 'flex flex-col justify-between content-center pt-20 px-4 md:flex-row md:pt-40 md:px-10 text-base md:text-xl text-white '>
          <p className='py-5'>Check out the code here:
            <a className= 'text-sky-500' href="https://github.com/obinmahfoudh/obinmahfoudh.github.io"> https://github.com/obinmahfoudh/obinmahfoudh.github.io</a>
          </p>
          {ReviewRatings()}
        </div>
        <div></div>
    </>
  );
}

export default HomePage;

const ReviewRatings = () => {
  return(
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-20">
      <p className= 'text-lg md:text-2xl font-bold py-5'>See what people have to say:</p>
      <div className= "h-40 w-full md:w-96">
        <Carousel indicators={false} leftControl=" " rightControl=" " pauseOnHover>
          {getReviews()}
        </Carousel>
      </div>
    </div>
  )
}

function getReviews(){
  const reviewCards = Reviews.map(Reviews =>
    <Card className= "bg-inherit h-40 w-full md:w-96 border-transparent" >
      <div className='flex flex-col justify-between h-40'>
        <div className= 'flex justify-between'>
          <h5 className="text-xl md:text-3xl font-bold text-slate-300 ">
          Friend {Reviews.id}
          </h5>
          <Rating>
            <Rating.Star/>
            <p className='font-bold text-white'>5.0</p>
          </Rating>
        </div>
        <div>
          <p className= 'font-bold text-white'>
            {Reviews.Review}
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </Card>
    )
return reviewCards
}