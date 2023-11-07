import { WorkExperiences } from "../Data/ExperienceList";

export const Experiences = () => {
  document.title = 'Obaid | Experiences'
    return (
      
      <div className="text-white font-bold pt-10 px-4">
        <div className="">
          <h2 className="text-white text-4xl font-extrabold">Work Experiences</h2>
          {getWork()}
        </div>
        <div>

        </div>
      </div>
    );
  }
  
  export default Experiences;
  
  const getWork = () => {
    const listWork = WorkExperiences.map(work =>
      <div className="py-8">
        <div className="flex justify-between">
          <h3 className="text-3xl text-slate-400">{work.jobTitle} | {work.Location}</h3>
          <h3 className="">{work.When}</h3>
        </div>
        <p className="text-2xl text-slate-400">{work.Company}</p>
        <p className="px-4 w-6/12 ">{work.Bullets.map(bullet =>
          <li>{bullet}</li>)}
        </p>
      </div>
      )
    return listWork
  }