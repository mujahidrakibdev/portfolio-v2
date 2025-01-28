const projectContainer = document.querySelector(".project-container")
const projectTemplate = document.querySelector(".project-template")
console.log(projectContainer)
console.log(projectTemplate)

export const showProjectsContainer = (projects) => {
    if (!projects) {
        return
    }

    projects.forEach(project => {
        const { id, image, title, description } = project
        const projectClone = document.importNode(projectTemplate.content, true)
        projectClone.querySelector(".project-title").textContent = title
        projectClone.querySelector(".project-info").textContent = description
        projectClone.querySelector(".project-img").src = image

        
        


        projectContainer.append(projectClone)
    });


}