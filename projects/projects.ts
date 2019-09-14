import { FluidObject } from "gatsby-image"

export type Project = {
  isLive: boolean
  name: string
  description: string
  image: string
  fluidImage?: FluidObject
  url?: string
  repositoryURL?: string
}

export const Projects: Array<Project> = [
  {
    isLive: true,
    name: "Otto Codes",
    description:
      "An online code editor for those who want to appear like they can code.",
    image: "Otto.jpg",
    url: "https://ottocodes.ryanknepp.com",
    repositoryURL: "https://github.com/Ryan-Knepp/otto-codes",
  },
  {
    isLive: true,
    name: "Game Night",
    description: "An app to help my wife and I pick a game to play.",
    image: "GameNight.jpg",
    url: "https://gamenight.ryanknepp.com",
    repositoryURL: "https://github.com/Ryan-Knepp/game-night",
  },

  {
    isLive: false,
    name: "Budget Meeting",
    description: "A tool to help facilitate our monthly budget meeting.",
    image: "PiggyBank.jpg",
    url: "",
    repositoryURL: "",
  },
  {
    isLive: false,
    name: "SWGoH Guilds",
    description: "An app to help my SWGoH guild track player progression.",
    image: "SWGoH.jpg",
    url: "",
    repositoryURL: "",
  },
]
