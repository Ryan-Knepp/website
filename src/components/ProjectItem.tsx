import React, { Component } from "react"
import WebIcon from "../icons/WebIcon"
import GithubIcon from "../icons/GithubIcon"
import { Project } from "../../projects/projects"
import "./ProjectItem.css"
import LinkButton from "./LinkButton"
import Img from "gatsby-image"

interface Props {
  project: Project
}

export class ProjectItem extends Component<Props> {
  render() {
    const { project } = this.props
    return (
      <div className={`card`}>
        <Img fluid={project.fluidImage} />
        <div className="content">
          <h4 className="title">
            {project.name +
              (project.isLive
                ? ""
                : " - Coming Soon" + String.fromCharCode(8482))}
          </h4>
          <p>{project.description}</p>
        </div>

        <div className="button-bar">
          {project.repositoryURL ? (
            <LinkButton
              href={project.repositoryURL}
              title="View code in Github"
            >
              <GithubIcon />
              View Code
            </LinkButton>
          ) : null}
          {project.url ? (
            <LinkButton
              href={project.url}
              title={`Go to the ${project.name} app`}
            >
              <WebIcon />
              Go To App
            </LinkButton>
          ) : null}
        </div>
      </div>
    )
  }
}
export default ProjectItem
