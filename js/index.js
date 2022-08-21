import { projects } from "./projects.js";

console.log("Wokring");

/* Getting Projects Wrapper
=========================== */
const projectsWrapper = document.getElementById("projects-wrapper");

/* Creating Prjects Card
======================== */
function ProjectCard(project) {
  const coverImg = new Image();
  coverImg.src = project.coverSrc;

  const projectCard = `
    <div class="project-card" id=project-"${project.id}">
        <div class="project-text">
            <div class="project-text-info">
                <h1>${project.name}</h1>
                <h3>Used Tools:</h3>
                <ul class="tech-tools">
                    ${project.tools.map(
                      (tool) => `<li class="${tool.toLowerCase()}">${tool}</li>`
                    )}
                </ul>
            </div>
            <div class="project-text-actions">
                ${
                  project.url
                    ? `
                    <a class="project-url" target="_blank" href="${project.url}">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29.264" height="29.25" viewBox="0 0 29.264 29.25">
                                <g id="Icon_ionic-ios-link" data-name="Icon ionic-ios-link" transform="translate(-3.375 -3.375)">
                                    <path id="Path_8" data-name="Path 8" d="M19.688,23.984l-.084.007a1.163,1.163,0,0,0-.675.316l-4.542,4.542a5.121,5.121,0,0,1-7.242-7.242l4.823-4.823a5.09,5.09,0,0,1,.8-.654,5.168,5.168,0,0,1,1.041-.527,4.923,4.923,0,0,1,1.055-.26,4.986,4.986,0,0,1,.717-.049c.1,0,.2.007.323.014A5.106,5.106,0,0,1,19.2,16.784a5.042,5.042,0,0,1,1.2,1.92,1.107,1.107,0,0,0,1.357.71c.007,0,.014-.007.021-.007s.014,0,.014-.007a1.1,1.1,0,0,0,.738-1.343,6.372,6.372,0,0,0-1.73-2.883,7.4,7.4,0,0,0-4.05-2.06c-.134-.021-.267-.042-.4-.056a7.256,7.256,0,0,0-.78-.042c-.183,0-.366.007-.541.021a7.091,7.091,0,0,0-1.139.176c-.077.014-.148.035-.225.056a7.314,7.314,0,0,0-1.371.513,7.223,7.223,0,0,0-1.948,1.4L5.52,20a7.417,7.417,0,0,0-2.145,5.238,7.393,7.393,0,0,0,12.614,5.224l4.591-4.591A1.113,1.113,0,0,0,19.688,23.984Z"/>
                                    <path id="Path_9" data-name="Path 9" d="M30.466,5.534a7.41,7.41,0,0,0-10.455,0l-4.479,4.479a1.13,1.13,0,0,0,.71,1.927,1.142,1.142,0,0,0,.893-.323l4.486-4.472a5.121,5.121,0,0,1,7.242,7.242L24.04,19.209a5.09,5.09,0,0,1-.8.654,5.168,5.168,0,0,1-1.041.527,4.923,4.923,0,0,1-1.055.26,4.986,4.986,0,0,1-.717.049c-.1,0-.2-.007-.323-.014a5.053,5.053,0,0,1-4.444-3.27,1.123,1.123,0,0,0-1.343-.689,1.136,1.136,0,0,0-.795,1.441,6.423,6.423,0,0,0,1.666,2.637h0l.014.014a7.4,7.4,0,0,0,4.451,2.116,7.256,7.256,0,0,0,.78.042q.274,0,.548-.021a8.039,8.039,0,0,0,1.357-.225,7.314,7.314,0,0,0,1.371-.513,7.223,7.223,0,0,0,1.948-1.4L30.48,16a7.4,7.4,0,0,0-.014-10.462Z"/>
                                </g>
                            </svg>
                        </p>
                        <p>Go Online</p>
                    </a>`
                    : ""
                }
                ${
                  project.repo
                    ? `
                    <a class="project-url" target="_blank" href="${project.repo}">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33.75" height="27.001" viewBox="0 0 33.75 27.001">
                                <path id="Icon_awesome-github-alt" data-name="Icon awesome-github-alt" d="M13.085,23.112c0,1.47-.766,3.874-2.58,3.874s-2.58-2.4-2.58-3.874.766-3.874,2.58-3.874,2.58,2.4,2.58,3.874ZM33.75,19.561a15.239,15.239,0,0,1-1.23,6.68C29.855,31.627,22.528,31.5,17.283,31.5c-5.33,0-13.092.19-15.863-5.259A15.05,15.05,0,0,1,0,19.561a12.092,12.092,0,0,1,2.918-7.988,11.007,11.007,0,0,1-.541-3.431A7,7,0,0,1,3.4,4.5a10.986,10.986,0,0,1,7.65,2.531,26.933,26.933,0,0,1,6.237-.7,24.255,24.255,0,0,1,5.653.647A10.867,10.867,0,0,1,30.523,4.5a6.936,6.936,0,0,1,1.027,3.642,10.852,10.852,0,0,1-.541,3.389,12.115,12.115,0,0,1,2.742,8.03Zm-4.521,3.551c0-3.087-1.877-5.808-5.168-5.808a28.91,28.91,0,0,0-3.937.422,20.66,20.66,0,0,1-3.171.225,20.786,20.786,0,0,1-3.171-.225A28.441,28.441,0,0,0,9.844,17.3c-3.291,0-5.168,2.721-5.168,5.808,0,6.173,5.653,7.123,10.575,7.123H18.64c4.943,0,10.589-.942,10.589-7.123Zm-5.808-3.874c-1.814,0-2.58,2.4-2.58,3.874s.766,3.874,2.58,3.874S26,24.581,26,23.112,25.235,19.238,23.421,19.238Z" transform="translate(0 -4.5)" fill="#fff"/>
                            </svg>
                        </p>
                        <p>Get Code</p>
                    </a>`
                    : ""
                }
            </div>
        </div>
        <div class="project-cover">
            ${coverImg.outerHTML}
        </div>
    </div>
  `;

  return projectCard;
}

/* Appending Project Card template for each Project
=================================================== */

projects.forEach((project) => {
  const projectTemplate = ProjectCard(project);

  projectsWrapper.innerHTML += projectTemplate;
});

/* App Functions
================ */

// Scrolling with the "say hello" button
const sayHelloBtn = document.getElementById("say-hello");

sayHelloBtn.addEventListener("click", () => {
  const formSection = document.getElementById("contact-form");

  formSection.scrollIntoView({ behavior: "smooth" });
});

// Scrolling with the "start work" button
const startWork = document.getElementById("start-work");
startWork.addEventListener("click", () => {
  const contactMeSection = document.querySelector("section.contact-me");

  contactMeSection.scrollIntoView({ behavior: "smooth" });
});
