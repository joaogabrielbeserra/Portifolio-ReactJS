import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./mosaic.css";

const PATTERNS = [
  {
    cols: "2fr 1fr",
    rows: "200px 160px",
    slots: [
      { col: "1", row: "1" },
      { col: "2", row: "1 / 3" },
      { col: "1", row: "2" },
    ],
  },
  {
    cols: "1fr 1fr 1fr",
    rows: "180px 180px",
    slots: [
      { col: "1 / 3", row: "1" },
      { col: "3", row: "1 / 3" },
      { col: "1", row: "2" },
      { col: "2", row: "2" },
    ],
  },
  {
    cols: "1fr 2fr",
    rows: "160px 200px",
    slots: [
      { col: "1", row: "1 / 3" },
      { col: "2", row: "1" },
      { col: "2", row: "2" },
    ],
  },
  {
    cols: "1fr 1fr",
    rows: "180px 180px",
    slots: [
      { col: "1", row: "1" },
      { col: "2", row: "1" },
      { col: "1 / 3", row: "2" },
    ],
  },
];

function getCoverImage(project) {
  return project.slug ? `/assets/projetos/${project.slug}/capa.jpg` : project.backgroundUrl;
}

function getGalleryImages(project) {
  if (!project.slug) return [];
  const base = `/assets/projetos/${project.slug}/`;
  return [1, 2, 3, 4, 5].map((n) => `${base}carousel${n}.jpg`);
}

const ProjectCard = ({ project, slot, fullWidth, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const coverImage = getCoverImage(project);

  const imageSrc =
    isMobile
      ? coverImage
      : isHovered && project.gifUrl?.trim()
        ? project.gifUrl
        : coverImage;

  const style = {
    backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  if (slot) {
    style.gridColumn = slot.col;
    style.gridRow = slot.row;
  }

  return (
    <div
      className={`card${fullWidth ? " card--full" : ""}`}
      onClick={onClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={style}
    >
      <div className="card-overlay">
        {/* Sempre visível */}
        <h3 className="card-title">{project.title}</h3>

        {/* Só no hover */}
        <div className="card-hover-content">
          {project.description && (
            <p className="card-summary">
              {project.description.split(".")[0]}.
            </p>
          )}
          <div className="card-stacks">
            {project.skills.slice(0, 5).map((s, i) => (
              <span key={i} className="card-stack">{s}</span>
            ))}
          </div>
          <p className="card-cta">Ver detalhes →</p>
        </div>
      </div>
    </div>
  );
};

const ProjectGallery = ({ images, title }) => {
  const [validImages, setValidImages] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((results) => {
      if (!cancelled) {
        setValidImages(results.filter(Boolean));
        setIndex(0);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [images]);

  if (validImages === null) return null;

  if (validImages.length === 0) {
    return <div className="modal-video-placeholder">Sem fotos disponíveis</div>;
  }

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + validImages.length) % validImages.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % validImages.length);
  };

  return (
    <div className="modal-gallery">
      <img
        src={validImages[index]}
        alt={`${title} — foto ${index + 1}`}
        className="modal-gallery__img"
      />

      {validImages.length > 1 && (
        <>
          <button className="modal-gallery__nav modal-gallery__nav--prev" onClick={prev} aria-label="Foto anterior">
            <FaChevronLeft />
          </button>
          <button className="modal-gallery__nav modal-gallery__nav--next" onClick={next} aria-label="Próxima foto">
            <FaChevronRight />
          </button>

          <div className="modal-gallery__dots">
            {validImages.map((_, i) => (
              <button
                key={i}
                className={`modal-gallery__dot${i === index ? " modal-gallery__dot--active" : ""}`}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const images = getGalleryImages(project);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="modal-video-wrap">
          {images.length > 0 ? (
            <ProjectGallery images={images} title={project.title} />
          ) : (
            <div className="modal-video-placeholder">Sem fotos disponíveis</div>
          )}
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          {project.date && <p className="modal-date">{project.date}</p>}

          {project.description && (
            <p className="modal-description">{project.description}</p>
          )}

          <div className="modal-skills">
            {project.skills.map((s, i) => (
              <span key={i} className="modal-skill">{s}</span>
            ))}
          </div>

          <div className="modal-links">
            {project.siteUrl && (
              <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="modal-link primary">
                Ver projeto ao vivo ↗
              </a>
            )}
            {project.gitHubLink && (
              <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function buildRows(projects) {
  const rows = [];
  let queue = [...projects];
  let pi = 0;

  while (queue.length > 0) {
    const p = queue[0];

    if (p.size === "large") {
      rows.push({ type: "solo", project: p });
      queue.shift();
    } else {
      const pattern = PATTERNS[pi % PATTERNS.length];
      const count = pattern.slots.length;
      const chunk = [];
      const remaining = [];
      for (let i = 0; i < queue.length; i++) {
        if (chunk.length < count && queue[i].size !== "large") {
          chunk.push(queue[i]);
        } else {
          remaining.push(queue[i]);
        }
      }
      rows.push({ type: "mosaic", pattern, items: chunk });
      queue = remaining;
      pi++;
    }
  }

  return rows;
}

// Quantos projetos mostrar antes do botão "ver todos"
const INITIAL_COUNT = 5;

const MosaicProject = ({ projects }) => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const rows = buildRows(visibleProjects);

  return (
    <section className="project section" id="projetos">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Trabalhos mais recentes</span>

      <div className="mosaic-wrap container">
        {rows.map((row, ri) => {
          if (row.type === "solo") {
            return (
              <ProjectCard
                key={row.project.id}
                project={row.project}
                fullWidth
                onClick={() => setSelected(row.project)}
              />
            );
          }

          return (
            <div
              key={ri}
              className="mosaic-group"
              style={{
                gridTemplateColumns: row.pattern.cols,
                gridTemplateRows: row.pattern.rows,
              }}
            >
              {row.pattern.slots.map((slot, j) => {
                const p = row.items[j];
                return p ? (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    slot={slot}
                    onClick={() => setSelected(p)}
                  />
                ) : (
                  <div
                    key={j}
                    className="card card--empty"
                    style={{ gridColumn: slot.col, gridRow: slot.row }}
                  />
                );
              })}
            </div>
          );
        })}

        {!showAll && projects.length > INITIAL_COUNT && (
          <div className="mosaic-show-more">
            <button
              className="mosaic-show-more__btn button button--flex"
              onClick={() => setShowAll(true)}
            >
              Ver todos os projetos
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            <span className="mosaic-show-more__count">
              +{projects.length - INITIAL_COUNT} projetos
            </span>
          </div>
        )}

        {showAll && (
          <div className="mosaic-show-more">
            <button
              className="mosaic-show-more__btn button button--flex"
              onClick={() => setShowAll(false)}
            >
              Recolher
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
            </button>
          </div>
        )}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default MosaicProject;