import {Courses} from "../ClassList"

export const Classes = () => {
  return (
    <>
      <div class = "text-white p-40 gap-40 flex flex-col ">
        <div class= 'flex justify-between'>
          <h1 class='text-4xl  font-extrabold'>Computer Science and Engineering</h1>
          {getCourses("Computer Science and Engineering")}
        </div>
        <div class= 'flex justify-between'>
          <h1 class='text-4xl flex j font-extrabold'>Math</h1>
          {getCourses("Math")}
        </div>
        <div class= 'flex justify-between'>
          <h1 class='text-4xl font-extrabold'>Sciences</h1>
          {getCourses("Sciences")}
        </div>
      </div>
    </>
  );
}
export default Classes;

function getCourses(courseType){
  const computerCourses= Courses.filter(Courses => Courses.Type === courseType);
  const listItems = computerCourses.map(Courses =>
    <li>
      <p class = 'transition ease-in-out delay-150  hover:scale-125 duration-700'>
        <b class= 'text-white bg-sky-500 rounded-md h-10 w-40'>{Courses.Name}</b>
      </p>
    </li>
    )
  return <ul class='flex flex-row flex-wrap justify-center space-x-4 '>{listItems}</ul>
}


//{Object.keys(Courses)}