import {Courses} from "../Data/ClassList"
import {Tooltip} from 'flowbite-react'

export const Classes = () => {
  document.title = 'Obaid | Classes'
  
  return (
      <div className= 'flex py-28 px-10 justify-between'>
        <div className="flex flex-col text-4xl gap-32 text-white font-extrabold">
          <h3>Computer Science and Engineering</h3>
          <h3>Math</h3>
          <h3>Sciences</h3>
        </div>
        <div className="flex flex-col gap-32">
          {GetCourses('Computer Science and Engineering')}
          {GetCourses('Math')}
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