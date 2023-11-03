
import { Carousel, Card, Rating } from 'flowbite-react';
import { Reviews } from './Reviews';


export const HomePage = () => {
  document.title = 'Obaid'
  return (
    <>
        <div className=''>
          <h2 className='flex justify-center align-middle pt-40 font-extrabold text-white text-6xl'>Hello there</h2>
          <p className='flex justify-center align-middle pt-10 font-extrabold text-white text-4xl'>I'm Obaid, a student at the Illinois Institute of Technology</p>
          <p className='flex justify-center align-middle pt-10 font-extrabold text-white text-4xl'>studying Artificial Intelligence with a minor in Computational Mathematics</p>
          <p className='flex justify-center align-middle font-extrabold text-white text-2xl'>This is my resume website where you can see what classes I've taken, my work exerpeiences and a bit more about me</p>
          <div class='flex justify-center pt-10 pb-20'>
            <div className= "">
              {ReviewRatings()}
            </div>
          </div>
        </div>
        
      
    </>
  );
}

export default HomePage;

const ReviewRatings = () => {
  return(
    <div className="flex flex-col text-xl px-40">
        <div>
          <Rating>
            <Rating.Star/>
            <p className='font-bold text-gray-500 text-2xl'> 4.95 </p>
            </Rating>
        </div>
      <div className= "h-40">
        <Carousel indicators={false} leftControl=" " rightControl=" ">
          {getReviews()}
        </Carousel>
      </div>
    </div>
  )
}

function getReviews(){
  const reviewCards = Reviews.map(Reviews =>
    <Card className= "bg-sky-950">
      <div className='flex justify-between align-center bg-inherit'>
        <div>
          <h5 className="text-2xl font-bold  text-slate-300 ">
          {Reviews.Review}
          </h5>
          <p>{Reviews.Review}</p>
        </div>
        <div>
          <Rating>
            <Rating.Star/>
            <p className='font-bold text-slate-300'>5.0</p>
          </Rating>
        </div>
      </div>
    </Card>
    )
return reviewCards
}