document.getElementById("latest-project").innerHTML = `
    <a href="${latestProject.link}">
        <img id="latest-project-img" src="${latestProject.img}" alt="latest project">
        <p id="latest-project-name">${latestProject.name}</p>
        <p id="latest-project-tech-stack">${latestProject.techStack}</p>
    </a>
`;

function createCard(project) {
    const links = [
        project.github ? `<a href="${project.github}">GitHub Repo &rarr;</a>` : "",
        project.live   ? `<a href="${project.live}">Live Site &rarr;</a>`     : ""
    ].join("\n");

    return `
        <div class="project-card hidden">
            <img src="${project.img}" alt="${project.alt}" loading="lazy">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${links}
        </div>
    `;
}

document.getElementById("web-projects").innerHTML     = projects.web.map(createCard).join("");
document.getElementById("python-projects").innerHTML  = projects.python.map(createCard).join("");
document.getElementById("c-projects").innerHTML       = projects.c.map(createCard).join("");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});
document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));