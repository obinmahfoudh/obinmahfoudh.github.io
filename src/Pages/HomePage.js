
import { Carousel, Card, Rating } from 'flowbite-react';
import { Reviews } from './Reviews';


export const HomePage = () => {
  document.title = 'Obaid'
  return (
    <>
        <div className='text-white'>
          <h2 className='flex justify-center align-middle pt-40 font-extrabold text-6xl'>Hello there</h2>
          <p className='flex justify-center align-middle pt-10 font-extrabold text-4xl'>I'm Obaid, a student at the Illinois Institute of Technology</p>
          <p className='flex justify-center align-middle pt-10 font-extrabold text-4xl'>studying Artificial Intelligence with a minor in Computational Mathematics</p>
          <p className='flex justify-center align-middle pt-10 font-extrabold text-2xl'>This is my resume website where you can see what classes I've taken, my work exerpeiences and a bit more about me</p>
          <div class='flex px-20 pt-20'>
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
    <div className="text-xl">
        <div>
          <Rating>
            <Rating.Star/>
            <p className='font-bold text-gray-500 text-2xl'> 4.95 </p>
            </Rating>
        </div>
      <div className= "flex h-40 w-96">
        <Carousel indicators={false} pauseOnHover>
          {getReviews()}
        </Carousel>
      </div>
    </div>
  )
}

function getReviews(){
  const reviewCards = Reviews.map(Reviews =>
    <Card className= "bg-slate-900 h-40">
      <div className='flex justify-between h-40'>
        <div className= 'flex flex-col justify-between'>
          <h5 className="text-2xl font-bold text-slate-300 ">
          Friend {Reviews.id}
          </h5>
          <p className= 'font-bold'>
            {Reviews.Review}
          </p>
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