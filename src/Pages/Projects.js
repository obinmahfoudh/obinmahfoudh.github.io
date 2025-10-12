import { Projects } from '../Data/ProjectsList';
import github_logo from '../images/github-mark-white.png'

export const ProjectsPage = () => {
    document.title = 'Obaid | Projects';

    return (
        <div className="text-white font-bold pt-10 px-4">
            <h2 className="text-white text-4xl font-extrabold">My Projects</h2>
            {getProjects()}
        </div>
    );
};

export default ProjectsPage;

const getProjects = () => {
        const projectList = Projects.map(project =>
            <div key={project.id} className="py-4 md:py-8">
                <div className="flex flex-col text-center md:flex-row justify-between items-center md:items-start">
                    <h3 className="text-xl md:text-3xl font-bold text-sky-500">{project.Name}</h3>
                    <a href={project.Link} target="_blank" rel="noreferrer"> <img src={github_logo} alt="Linkedin" className="w-10 h-10"/></a>
                </div>
                <div className='pt-2 text-xl'>
                    <p className="text-lg md:text-2xl font-normal text-white pt-2 md:w-3/4">{project.Description}</p>
                </div>
                <div className="px-4 pt-4">
                    <p className="w-full font-normal text-white">
                        {project.Bullets.map((bullet, index) =>
                            <li key={index} className="list-disc">{bullet}</li>)}
                    </p>
                </div>
            </div>
        );
        return projectList;
    };