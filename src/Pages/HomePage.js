import { Carousel, Card, Rating } from 'flowbite-react';
import { Reviews } from '../Data/Reviews';
import github_logo from '../images/github-mark-white.png'
import linkedin_logo from '../images/linkedin_logo.png'
import email_logo from '../images/email_logo.png'
//import MePhoto from '../images/personal_photo.jpg'


export const HomePage = () => {
  document.title = 'Obaid'
  return (
    <>
    <div className='flex flex-col md:w-1/2 h-screen pt-10 md:pt-20 mx-auto justify-between'>
      <div className='flex flex-col text-center justify-center text-white px-4 md:px-10 '>
        <h2 className='mt-20 md:mt-40 font-extrabold text-3xl md:text-6xl'>print("Hello world")</h2>
        <p className='mt-5 md:mt-10 font-extrabold text-xl md:text-4xl'>I'm Obaid, a student at the
          <span className='text-rose-500'> Illinois Institute of Technology</span> studying
          <span className='text-rose-500'> Artificial Intelligence </span> with a minor in
          <span className='text-rose-500'> Computational Mathematics</span>
          . 
        </p>  
        <p className='mt-5 md:mt-10 font-extrabold text-sm md:text-2xl'>This is my résumé website, where you can explore the classes I’ve taken, my work experience,
           and learn a bit more about me.</p>    
      </div>
      {/*}
      <div className= 'flex flex-col justify-between content-center pt-20 px-4 md:flex-row md:pt-40 md:px-10 text-base md:text-xl text-white '>
        {ReviewRatings()}
      </div>
      */}
      <div className='flex flex-col items-center mb-28 md:mb-20 text-white' >
          <h3 className='text-2xl mb-10 font-extrabold'>Connect with me:</h3>
          <div className='flex justify-between w-40 md:w-60'>
              <a href="https://www.linkedin.com/in/obaid-bin-mahfoudh/" target="_blank" rel="noreferrer">
                  <img src={linkedin_logo} alt="Linkedin" className="w-10 h-10"/>
              </a>
              <a href="https://github.com/obinmahfoudh" target="_blank" rel="noreferrer">
                  <img src={github_logo}alt="GitHub" className="w-10 h-10"/>
              </a>
              <a href="mailto:binmahfoudhobaid@gmail.com">
                  <img src={email_logo} alt="Email" className="w-10 h-10"/>
              </a>
          </div>
        </div>
          {/*
          <a href="/ContactMe" className="text-sky-500 hover:text-sky-400 mt-4">Or send me a message directly &rarr;</a>
          */}
      </div>
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
      </div>
    </Card>
    )
return reviewCards
}