const projectContainer = document.querySelector(".project-container")
const projectTemplate = document.querySelector(".project-template")


export const showProjectsContainer = (projects) => {
    if (!projects) {
        return
    }

    projects.forEach(project => {
        const { id, image, title, description, live_preview, source_code } = project
        const projectClone = document.importNode(projectTemplate.content, true)
        projectClone.querySelector(".project-title").textContent = title
        projectClone.querySelector(".project-info").textContent = description
        projectClone.querySelector(".project-img").src = image
        projectClone.querySelector(".live-preview").href = live_preview
        projectClone.querySelector(".source-code").href = source_code

        
        


        projectContainer.append(projectClone)
    });


}