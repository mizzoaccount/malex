const ProjectsSection = () => {
    const projects = [
      {
        image: "https://i.pinimg.com/736x/09/a1/c4/09a1c493de34f839c023fca1aa0ecde0.jpg",
        title: "Ligula tristique quis risus",
        text: "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
        date: "2022-04-14",
        category: "Coding"
      },
      {
        image: "https://i.pinimg.com/736x/45/ce/c7/45cec7b33179244b4947ed66e0a1b472.jpg",
        title: "Nullam id dolor elit id nibh",
        text: "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
        date: "2022-03-29",
        category: "Workspace"
      },
      {
        image: "https://i.pinimg.com/736x/8c/cc/95/8ccc955df35bad84d46ad208bbecdf64.jpg",
        title: "Ultricies fusce porta elit",
        text: "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
        date: "2022-02-26",
        category: "Meeting"
      }
    ];
  
    return (
      <section className="bg-cultured py-16" aria-labelledby="project-label">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg font-medium text-gray-600 mb-4" id="project-label">
            Case Studies
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-2xl mx-auto">
            Check out some of our awesome projects with creative ideas and great design.
          </h2>
  
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <li key={index}>
                <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden hover:shadow-xl transition-shadow">
                  <figure className="w-full aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </figure>
  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 hover:text-violet-blue transition-colors">
                      <a href="#" className="focus:outline-none focus:ring-2 focus:ring-violet-blue">
                        {project.title}
                      </a>
                    </h3>
  
                    <p className="text-gray-600 mb-4">{project.text}</p>
  
                    <ul className="flex flex-wrap gap-3 text-sm text-cadet-blue">
                      <li className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M424 64h-40V24c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8v40H168V24c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8v40H88c-22.1 0-40 17.9-40 40v352c0 22.1 17.9 40 40 40h336c22.1 0 40-17.9 40-40V104c0-22.1-17.9-40-40-40zm-12 388H100c-6.6 0-12-5.4-12-12V192h352v248c0 6.6-5.4 12-12 12z"
                          />
                        </svg>
                        <time dateTime={project.date}>
                          {new Date(project.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </li>
                      
                      <li className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M448 368V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v272c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64zM128 64h256c17.6 0 32 14.4 32 32v224H96V96c0-17.6 14.4-32 32-32zm256 384H128c-17.6 0-32-14.4-32-32v-16h320v16c0 17.6-14.4 32-32 32z"
                          />
                        </svg>
                        <span>{project.category}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;