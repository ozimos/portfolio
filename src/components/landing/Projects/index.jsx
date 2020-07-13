import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Item } from "react-flex-ready"
import Container from "components/common/Container"
import Card from "components/common/Card"
import starIcon from "assets/icons/star.svg"
import forkIcon from "assets/icons/fork.svg"
import { Wrapper, Content, Stats } from "./styles"

const extraProjects = [
  {
    node: {
      id: "bridgeconnector",
      name: "Adapters",
      url: "git@github.com:BridgeCr/Adapters",
      description:
        "Laravel package to enable data transfer from one API to another (Private Repository)",
      forkCount: 0,
      stargazers: {
        totalCount: 0,
      },
      primaryLanguage: {
        name: "PHP/Laravel",
      },
    },
  },
  {
    node: {
      id: "watchtower",
      name: "Watchtower",
      url: "https://github.com/andela/watch-tower-server.git",
      description:
        "A dashboard for monitoring and managing employee performance (Private Repository)",
      forkCount: 0,
      stargazers: {
        totalCount: 0,
      },
      primaryLanguage: {
        name: "PHP/Laravel",
      },
    },
  },
  {
    node: {
      id: "yum-nexus",
      name: "Yum",
      url: "https://yum-nexus.vercel.app",
      description:
        "An ecommerce catering application to enable caterers to list meals and customers to order them",
      forkCount: 0,
      stargazers: {
        totalCount: 0,
      },
      primaryLanguage: {
        name: "Node/JS",
      },
    },
  },
]
export default () => {
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pinnedItems(types: REPOSITORY, first: 6) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    description
                    url
                    forkCount
                    stargazers {
                      totalCount
                    }
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const projects = extraProjects.concat(edges)
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Flex col={4}>
        {projects.map(
          ({
            node: {
              id,
              url,
              name,
              description,
              stargazers,
              forkCount,
              primaryLanguage,
            },
          }) => (
            <Item
              key={id}
              col={4}
              colTablet={6}
              colMobile={12}
              marginBottom={30}
              gap={1}
              stretch
            >
              <Card as="a" href={url} target="_blank" rel="noopener noreferrer">
                <Content>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </Content>
                <Stats>
                  <div>
                    <img src={starIcon} alt="stars" />
                    <span>{stargazers.totalCount}</span>
                  </div>
                  <div>
                    <img src={forkIcon} alt="forks" />
                    <span>{forkCount}</span>
                  </div>
                  <div>
                    <span>{primaryLanguage.name}</span>
                  </div>
                </Stats>
              </Card>
            </Item>
          )
        )}
      </Flex>
    </Wrapper>
  )
}
