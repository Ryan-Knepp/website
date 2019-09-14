import React, { Component } from "react"
import ProjectItem from "./ProjectItem"

import "./ProjectList.css"
import { Projects, Project } from "../../projects/projects"

export class ProjectList extends Component<
  { afterLoad: Function; data: any },
  { projects: Array<Project> }
> {
  constructor(props: any) {
    super(props)
    console.log(props.data)
    const projectsWithImages: Array<Project> = Projects.map(project => {
      let newProject = project
      const fluidImage = props.data.allImageSharp.edges.filter(image => {
        return image.node.fluid.originalName === project.image
      })
      console.log(fluidImage)
      newProject.fluidImage = fluidImage[0].node.fluid
      return newProject
    })
    this.state = { projects: projectsWithImages }
  }

  render() {
    console.log(this.state)
    return (
      <div className="project_list">
        <h2>Projects</h2>
        <div className="projects">
          {this.state.projects.map(project => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </div>
    )
  }
}

export default ProjectList
