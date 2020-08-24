const SectionPorjects = document.querySelector(".projects__container");

const projects = [
  {
    name: "Comprable",
    img: "images/comprable.jpg",
    description: "E-commers for sale foot",
    tech: ["redux","react", "emotion", "rails"],
    website: "https://comprable.netlify.app/",
  },
  {
    name: "{Keepable} ✏️",
    img: "images/keepable.jpg",
    description: "Website for management notes",
    tech: ["react", "emotion", "rails"],
    website: "https://keepable.netlify.app/",
  },
  {
    name: "Organizable",
    img: "images/organizable.png",
    description: "Website for created boards",
    tech: ["react", "emotion", "rails"],
    website: "https://organizable.netlify.app/",
  },
  {
    name: "Memeable",
    img: "images/memeable.jpg",
    description: "Website for share memes",
    tech: ["rails", "html", "css"],
    website: "https://polar-taiga-55914.herokuapp.com/",
  },
  {
    name: "Whac a script",
    img: "images/mole.svg",
    description: "Whac a script",
    tech: ["js", "html", "css"],
    website: "https://alexrai98.github.io/whack-script/",
  },
  {
    name: "Soldevilla",
    img: "images/soldevilla.jpg",
    description: "Website od¿f school",
    tech: ["bootstrap", "html", "css"],
    website: "https://alexrai98.github.io/soldevila/",
  },
  {
    name: "Bitacora",
    img: "images/bitacora.jpg",
    description: "Innovation Bootcamp",
    tech: ["bootstrap", "html", "css"],
    website: "https://alexrai98.github.io/bitacoraP/",
  },
];

function RenderPorjects(projects) {
  projects.map((project) => {
    let div = "";
    project.tech.map((tech) => {
      const elements = `
            <div class="project-technologies">
                <div class="project-technologies__tech">
                    <p class="scuare-tech ${tech}"></p>
                    ${tech}
                </div>
            </div> `;
      div += elements;
    });
    const modelProyect = document.createElement("a");
    modelProyect.classList.add("project-item");
    modelProyect.href = project.website;
    modelProyect.target = "_black";
    modelProyect.innerHTML = `
        <img class="project-item__img" src="${project.img}" alt="logo_project" />
        <div class="project-item__details">
          <p class="project-item__details--title">${project.name}</p>
          <p class="project-item__details--subtitle">${project.description}</p>
          ${div}
        </div>`;
    SectionPorjects.append(modelProyect);
  });
}

RenderPorjects(projects);
