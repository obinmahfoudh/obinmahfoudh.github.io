import { Carousel, Card, Rating } from 'flowbite-react';
import { Reviews } from '../Data/Reviews';
import github_logo from '../images/github-mark-white.png'
import linkedin_logo from '../images/linkedin_logo.png'
import email_logo from '../images/email_logo.png'
import MePhoto from '../images/personal_photo.jpg'


export const HomePage = () => {
  document.title = 'Obaid'
  return (
    <>
      <div className='text-white flex flex-col items-center px-4 md:flex-row md:px-10 md:justify-center'>
        <div className='flex flex-col justify-center text-center md:items-start md:text-left md:pr-10'>
          <h2 className='mt-20 md:mt-40 font-extrabold text-3xl md:text-6xl'>print("Hello world")</h2>
          <p className='mt-5 md:mt-10 font-extrabold text-xl md:text-4xl'>I'm Obaid, a student at the <span className='text-rose-500'> Illinois Institute of Technology</span> </p>
          <p className='mt-5 md:mt-10 font-extrabold text-xl md:text-4xl'>studying <span className='text-rose-500'> Artificial Intelligence </span> with a minor in Computational Mathematics</p>
          <p className='mt-5 md:mt-10 font-extrabold text-sm md:text-2xl'>This is my resume website where you can see what classes I've taken, my work experiences and a bit more about me</p>
        </div>
        <div className='flex justify-center md:flex-none mt-10 md:mt-20'>
          <img src={MePhoto} alt='Picture of Obaid Bin Mahfoudh' className='max-w-xs md:max-w-md w-full h-full border-slate-500'/>
        </div>
      </div>
      {/*}
      <div className= 'flex flex-col justify-between content-center pt-20 px-4 md:flex-row md:pt-40 md:px-10 text-base md:text-xl text-white '>
        {ReviewRatings()}
      </div>
      */}
       {/* Projects Section */}
      <div className='text-white pt-20 px-4 md:px-10'>
          <h3 className='text-4xl font-extrabold flex justify-center'>Projects</h3>
          <div className='flex flex-col md:flex-row justify-center gap-10 mt-10'>
              {/* Placeholder for Project 1 */}
              <div className='bg-slate-800 p-6 rounded-lg shadow-lg w-full md:w-1/3'>
                  <h4 className='text-2xl font-bold'>Project Title 1</h4>
                  <p className='mt-2'>Brief description of the project.</p>
                  <a href="https://github.com/your-username/project-1" target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-400 mt-4 block">View on GitHub</a>
              </div>
              {/* Placeholder for Project 2 */}
              <div className='bg-slate-800 p-6 rounded-lg shadow-lg w-full md:w-1/3'>
                  <h4 className='text-2xl font-bold'>Project Title 2</h4>
                  <p className='mt-2'>Brief description of the project.</p>
                  <a href="https://github.com/your-username/project-2" target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-400 mt-4 block">View on GitHub</a>
              </div>
          </div>
          <p className='text-center mt-10'>
              <a href="/Projects" className="text-sky-500 hover:text-sky-400 text-xl font-semibold">View all projects &rarr;</a>
          </p>
      </div>
      <div className='flex flex-col items-center pt-20 px-4 md:px-10 text-white' >
          <h3 className='text-2xl font-extrabold mb-4'>Connect with me:</h3>
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
          <a href="/ContactMe" className="text-sky-500 hover:text-sky-400 mt-4">Or send me a message directly &rarr;</a>
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