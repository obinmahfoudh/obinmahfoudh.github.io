import { WorkExperiences } from "../Data/ExperienceList";

export const Experiences = () => {
  document.title = 'Obaid | Experiences'

    return (
      <div className="text-white font-bold pt-10 px-4">
        <div className="">
          <h2 className="text-white text-4xl font-extrabold">Work Experiences</h2>
          {getWork()}
        </div>
      </div>
    );
  }
  
  export default Experiences;
  
const getWork = () => {
    const listWork = WorkExperiences.map(work =>
      <div className="py-4 md:py-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <h3 className="text-xl md:text-3xl font-bold text-sky-500">{work.jobTitle}</h3>
            <h3 className="text-lg md:text-2xl font-bold text-slate-300">{work.Company}</h3>
            <h3 className="text-base md:text-xl font-medium text-slate-400">{work.Location}</h3>          
          </div>
          <p className="text-sm mt-1 md:text-xl font-medium text-white md:mt-0">{work.When}</p>
        </div>
        <p className="px-4 pt-2 w-full md:w-6/12 font-normal text-white">{work.Bullets.map(bullet =>
          <li className="list-disc">{bullet}</li>)}
        </p>
      </div>
      )
    return listWork
  }