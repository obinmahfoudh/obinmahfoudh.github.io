import {Courses} from "../Data/ClassList"
import {Tooltip} from 'flowbite-react'

export const Classes = () => {
  document.title = 'Obaid | Classes'

  return (
    <div className= 'px-4 gap-10 items-center grid md:grid-rows-3 md:h-screen'>
      <div className="grid gap-10 md:grid-cols-[1fr_3fr] ">
        <h3 className="text-2xl md:text-4xl text-white font-extrabold">Computer Science and Engineering</h3>
        {GetCourses('Computer Science and Engineering')}
      </div>
      <div className="grid gap-10 md:grid-cols-[1fr_3fr] ">
        <h3 className="text-2xl md:text-4xl text-white font-extrabold">Math</h3>
        {GetCourses('Math')}
      </div>
      <div className="grid gap-10 md:grid-cols-[1fr_3fr]">
        <h3 className="text-2xl md:text-4xl text-white font-extrabold">Sciences</h3>
        {GetCourses('Sciences')}
      </div>
    </div>
  );
}
export default Classes;

function GetCourses(courseType){
  const typeCourses= Courses.filter(Courses => Courses.Type === courseType);
  const listItems = typeCourses.map(Courses =>
    <li className=''>
      <Tooltip content= {<p className='font-semibold'>{Courses.Description}</p>} arrow={false} placement='bottom' className='max-w-prose'>
      <p class = 'transition ease-in-out delay-150  hover:scale-125  duration-700 flex'>
        <b class= 'text-white bg-sky-500 rounded-md p-1 hover:bg-slate-600'>   {Courses.Name} </b>
      </p>
      </Tooltip>
    </li>
    )
  return <ul class='flex flex-wrap justify-center gap-4'>{listItems}</ul>
}