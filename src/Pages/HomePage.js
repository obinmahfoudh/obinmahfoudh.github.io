
import { Carousel, Card, Rating } from 'flowbite-react';
import { Reviews } from './Reviews';


export const HomePage = () => {
  document.title = 'Obaid'
  return (
    <>
        <div className='text-white'>
          <h2 className='flex justify-center align-middle mt-40 font-extrabold text-6xl'>print("Hello world")</h2>
          <p className='flex justify-center align-middle mt-10 font-extrabold text-4xl'>I'm Obaid, a student at the <pre className='text-rose-500'> Illinois Institute of Technology</pre> </p>
          <p className='flex justify-center align-middle mt-10 font-extrabold text-4xl'>studying <pre className='text-rose-500'> Artificial Intelligence </pre> with a minor in Computational Mathematics</p>
          <p className='flex justify-center align-middle mt-10 font-extrabold text-2xl'>This is my resume website where you can see what classes I've taken, my work experiences and a bit more about me</p>
        </div>
        <div className= 'flex justify-end mt-40 '>
          {ReviewRatings()}
        </div>
        <div></div>
    </>
  );
}

export default HomePage;

const ReviewRatings = () => {
  return(
    <div className="text-xl flex space-x-20">
      <p className= 'text-2xl text-white font-bold py-5'>See what people have to say:</p>
      <div className= "h-40 w-96">
        <Carousel indicators={false} leftControl=" " rightControl=" " pauseOnHover>
          {getReviews()}
        </Carousel>
      </div>
    </div>
  )
}

function getReviews(){
  const reviewCards = Reviews.map(Reviews =>
    <Card className= "bg-inherit h-40 w-96 border-transparent" >
      <div className='flex flex-col justify-between h-40'>
        <div className= 'flex justify-between'>
          <h5 className="text-3xl font-bold text-slate-300 ">
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