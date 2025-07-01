import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import creaify from "../assets/img/creaify_img.png";
import fitClub from "../assets/img/fitclub_img.png";
import cinescope from "../assets/img/cinescope_igm.png";
import taskmanager from "../assets/img/task_img.png";
import portfolio from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import tic from "../assets/img/tic-tac-toe.png";
import calculator from "../assets/img/calc_img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Creaify",
      description: "Full Stack social media platform",
      imgUrl: creaify,
      githubLink: "https://github.com/diyasharma12/Creatify"
    },
    {
      title: "FitClub",
      description: "Full stack gym website",
      imgUrl: fitClub,
      githubLink: "https://github.com/diyasharma12/FitClub",
    },
    {
      title: "CineScope",
      description: "Dev-OpenAI Project\n(Front-end only)",
      imgUrl: cinescope,
      githubLink: "https://github.com/diyasharma12/cinescope",
    },
  ];
    const projects2 = [
    {
      title: "Task manager",
      description: "Task management app ",
      imgUrl: taskmanager,
      githubLink: "https://github.com/diyasharma12/To-Do-list",
    },
    {
      title: "Basic calculator",
      description: "WebD Pro",
      imgUrl: calculator,
      githubLink: "https://github.com/diyasharma12/calculator",
    },
    {
      title: "Portfolio Website",
      description: "WebD Project",
      imgUrl: portfolio,
    },
  ];
    const projects3 = [
      {
        title: "Tic-Tac-Toe",
        description: "WebD Project",
        imgUrl: tic,
      },
    ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Curated collection of projects that I've passionately worked on. Each project represents a unique journey, where I've combined my skills, and problem-solving abilities to bring ideas to life. I've poured my dedication into crafting solutions that not only meet objectives but also push the boundaries of innovation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
