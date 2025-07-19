import styled from "styled-components";
import { useEffect, useState } from "react";
import { FiExternalLink, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
};

type ProjectCategory = "all" | "portfolios" | "bookings";

type ProjectsData = {
  portfolios: Project[];
  bookings: Project[];
};

const projects: ProjectsData = {
  portfolios: [
    {
      id: 1,
      title: "Xpro Build",
      description: "Modern portfolio showcasing residential remodeling projects with before/after comparisons.",
      image: "/construction-fallback.png",
      url: "https://xprobuild.co.uk",
      category: "Construction",
    },
    {
      id: 2,
      title: "Anyfix Limited",
      description: "Clean, professional portfolio for construction, plumbing and electrical services with service area maps.",
      image: "/AnyFix.png",
      url: "https://anyfixproto.netlify.app/",
      category: "Electrical, Construction and Plumbing",
    },
  ],
  bookings: [
    {
      id: 3,
      title: "Luminous Locks Salon",
      description: "Booking system with stylist selection, service packages, and online payments.",
      image: "/Masaf.png",
      url: "https://masaf-hairstylish.netlify.app/",
      category: "Hair Salon",
    },
    // {
    //   id: 4,
    //   title: "Urban Barbers",
    //   description: "Mobile-friendly booking system with loyalty program integration.",
    //   image: "/barber-bookings.jpeg",
    //   url: "https://manage-bookings.netlify.app/",
    //   category: "Barber",
    // },
  ],
};

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("#projects")) {
        const params = new URLSearchParams(hash.split("?")[1]);
        const category = params.get("category");
        if (category && ["portfolios", "bookings"].includes(category)) {
          setActiveCategory(category as ProjectCategory);
        } else {
          setActiveCategory("all");
        }
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  const toggleDescription = (projectId: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const filteredProjects =
    activeCategory === "all"
      ? [...projects.portfolios, ...projects.bookings]
      : activeCategory === "portfolios"
      ? projects.portfolios
      : projects.bookings;

  return (
    <div id="projects">
      <ProjectsContainer>
        <SectionHeader>
          <SectionTitle>Our Work</SectionTitle>
          <SectionSubtitle>Explore projects we've created for our clients</SectionSubtitle>

          <CategoryFilters>
            <CategoryButton active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
              All Projects
            </CategoryButton>
            <CategoryButton active={activeCategory === "portfolios"} onClick={() => setActiveCategory("portfolios")}>
              Portfolio Sites
            </CategoryButton>
            <CategoryButton active={activeCategory === "bookings"} onClick={() => setActiveCategory("bookings")}>
              Booking Systems
            </CategoryButton>
          </CategoryFilters>
        </SectionHeader>

        <ProjectsGrid>
          {filteredProjects.map((project) => {
            const isExpanded = expandedCards[project.id] || false;
            const shouldTruncate = project.description.length > 200;
            const displayText = isExpanded
              ? project.description
              : shouldTruncate
              ? `${project.description.substring(0, 200)}...`
              : project.description;

            return (
              <ProjectCard key={project.id}>
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  <Overlay onClick={() => openModal(project)}>
                    <ViewButton>Preview Project</ViewButton>
                  </Overlay>
                </ProjectImage>
                <ProjectInfo>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>
                    {displayText}
                    {shouldTruncate && (
                      <ExpandButton onClick={() => toggleDescription(project.id)}>
                        {isExpanded ? (
                          <>
                            <FiChevronUp /> See less
                          </>
                        ) : (
                          <>
                            <FiChevronDown /> See more
                          </>
                        )}
                      </ExpandButton>
                    )}
                  </ProjectDescription>
                  <ViewButton onClick={() => openModal(project)}>
                    <FiExternalLink /> View Live
                  </ViewButton>
                </ProjectInfo>
              </ProjectCard>
            );
          })}
        </ProjectsGrid>

        {activeProject && (
          <ModalOverlay>
            <ModalContainer>
              <CloseButton onClick={closeModal}>
                <FiX size={24} />
              </CloseButton>
              <ModalHeader>
                <ModalTitle>{activeProject.title}</ModalTitle>
                <ModalCategory>{activeProject.category}</ModalCategory>
              </ModalHeader>
              <ProjectIframe src={activeProject.url} title={activeProject.title} loading="lazy" />
            </ModalContainer>
          </ModalOverlay>
        )}
      </ProjectsContainer>
    </div>
  );
}

export default Projects;

// Styled Components (same as before)
const ProjectsContainer = styled.section`
  padding: 8rem 5% 4rem;
  background: rgba(246, 246, 243, 0.68);

  @media (max-width: 768px) {
    padding: 5rem 5% 3rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const CategoryFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

interface CategoryButtonProps {
  active?: boolean;
}

const CategoryButton = styled.button<CategoryButtonProps>`
  padding: 0.6rem 1.2rem;
  background: ${({ active }) => (active ? "#0066ff" : "transparent")};
  color: ${({ active }) => (active ? "white" : "#555")};
  border: 1px solid ${({ active }) => (active ? "#0066ff" : "#ddd")};
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${({ active }) => (active ? "#0052cc" : "#f5f5f5")};
    border-color: ${({ active }) => (active ? "#0052cc" : "#ccc")};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(72, 74, 77, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background: #f0f7ff;
  color: #0066ff;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const ExpandButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #0066ff;
  font-weight: 500;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: color 0.2s;
  font-size: 0.9rem;

  &:hover {
    color: #0052cc;
    text-decoration: underline;
  }

  svg {
    font-size: 0.8rem;
  }
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #0066ff;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: auto;
  align-self: flex-start;

  &:hover {
    background: #0052cc;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const ModalHeader = styled.div`
  padding: 1.5rem;
  background: #f9f9f9;
  border-bottom: 1px solid #eee;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.3rem;
`;

const ModalCategory = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const ProjectIframe = styled.iframe`
  width: 100%;
  height: calc(90vh - 100px);
  border: none;
`;