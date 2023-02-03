import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "Foodverse",
    img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675415032/my-portfolio/foodverse1_i90vcn.png",
    img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675415033/my-portfolio/foodverse2_nwgpez.png",
    description:
      "Foodverse is a food website featuring detailed descriptions and ingredients for various food items. It has a fast search bar and users can save items to a favorites list.",
    tools: ["React.js", "React-Router", "TailwindCSS"],
    liveLink: "https://foodverse-tufael.netlify.app/",
    frontEndLink: "https://github.com/tufaelahmedbd/foodverse",
  },
  {
    id: 2,
    title: "Todo App",
    img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675415032/my-portfolio/todo2_clbttj.png",
    img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675415032/my-portfolio/todo1_v89voz.png",
    description:
      "This is a Todo application built with ReactJS and Hooks, using TailwindCSS for styling. The app allows users to create, update, delete, and add todo tasks. The user interface is responsive and user-friendly",
    tools: ["React.js", "Hooks", "GSAP", "TailwindCSS"],
    liveLink: "https://todo-app-tufael.netlify.app/",
    frontEndLink: "https://github.com/tufaelahmedbd/todo-app",
  },
  {
    id: 3,
    title: "Immemorial",
    img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675415032/my-portfolio/immemorial1_yu7srh.png",
    img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675415031/my-portfolio/immemorial2_ls7t1z.png",
    description:
      "Immemorial is a website focused on 90's music items. It uses ReactJS and GSAP to deliver a smooth user experience with eye-catching animations. The website is designed to provide an enjoyable and memorable way to explore classic 90's music items.",
    tools: ["React.js", "React-Router", "GSAP", "TailwindCSS"],
    liveLink: "https://immemorial-tufael.netlify.app/",
    frontEndLink: "https://github.com/tufaelahmedbd/immemorial",
  },
];
const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title="Projects" />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
