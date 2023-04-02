import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "Proxima",
    temp: "A Project Management App",
    img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1680367025/my-portfolio/proxima2_laaxav.svg",
    img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1680367024/my-portfolio/proxima1_brdcpg.svg",
    description:
      "Proxima is a robust project management platform created using the MERN stack. The application empowers users to effortlessly create, update, and delete their projects. With highly secure features such as sturdy JWT authentication and robust frontend route protection, Proxima ensures the utmost security of user data.",
    tools: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TailwindCSS",
      "Context Api",
    ],
    liveLink: "https://proxima-tufael.netlify.app/",
    frontEndLink: "https://github.com/tufaelahmedbd/proxima-client",
    backEndLink: "https://github.com/tufaelahmedbd/proxima-server",
  },
  {
    id: 2,
    title: "Tech Alpha",
    temp: "An Online Electronics Accessories Store",
    img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1680367032/my-portfolio/Tech1_cvycu2.svg",
    img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1680367027/my-portfolio/Tech2_zquajg.svg",
    description:
      "TechAlpha is an e-commerce website that implements a shopping cart using Redux Toolkit and RTK Query. It allows users to add or remove items, increase or decrease the quantity of items, and view the total cost of all items in the cart. The product data is served via a JSON server and cart items are stored in the client's browser's local storage.",
    tools: [
      "React.js",
      "Redux.js",
      "Redux toolkit",
      "RTK Query",
      "TailwindCSS",
    ],
    liveLink: "https://tech-alphaa.netlify.app/",
    frontEndLink: "https://github.com/tufaelahmedbd/tech-alpha",
  },
  {
    id: 3,
    title: "Todo App",
    temp: "A simple todo application",
    img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1680367027/my-portfolio/todo1_ihztr1.svg",
    img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1680367025/my-portfolio/todo2_hzfuas.svg",
    description:
      "This is a Todo application built with ReactJS and Hooks, using TailwindCSS for styling. The app allows users to create, update, delete, and add todo tasks. The user interface is responsive and user-friendly",
    tools: ["React.js", "Hooks", "TailwindCSS"],
    liveLink: "https://todo-app-tufael.netlify.app/",
    frontEndLink: "https://github.com/tufaelahmedbd/todo-app",
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
