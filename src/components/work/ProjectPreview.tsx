import React from 'react';
import type { Project } from '../../data/projects';
import './ProjectPreview.css';

interface ProjectPreviewProps {
  project: Project;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const { number, title, category, description, tier, technologies, liveUrl, imageSrc } = project;

  // The destination link. If liveUrl exists, use it. Otherwise, use a placeholder hash for the future case study.
  const href = liveUrl || `#project-${project.id}`;
  
  return (
    <article className={`project-preview tier-${tier}`}>
      <a href={href} className="project-link-wrapper" target={liveUrl ? "_blank" : "_self"} rel={liveUrl ? "noopener noreferrer" : ""}>
        
        {/* Visual Artifact */}
        {tier !== 'tertiary' && (
          <div className="project-visual-wrapper">
            {imageSrc ? (
              <img src={imageSrc} alt={`${title} interface`} className="project-image" loading="lazy" />
            ) : (
              <div className="project-visual-placeholder">
                <div className="placeholder-indicator">
                  <span className="text-metadata">PROJECT VISUAL</span>
                  <span className="placeholder-title">{title}</span>
                </div>
              </div>
            )}
            
            {/* Subtle hover overlay to indicate interaction */}
            <div className="project-visual-overlay">
              <span className="text-metadata view-label">EXPLORE PROJECT ↗</span>
            </div>
          </div>
        )}

        {/* Content Hierarchy */}
        <div className="project-content">
          <div className="project-header">
            <span className="project-number text-metadata">{number}</span>
            <span className="project-category text-metadata">{category}</span>
          </div>
          
          <div className="project-body">
            <h3 className="project-title text-heading-large">{title}</h3>
            <p className="project-description text-body">{description}</p>
          </div>

          {/* Metadata - restrained */}
          {(technologies && technologies.length > 0) && (
            <div className="project-metadata">
              <span className="text-metadata tech-list">
                {technologies.join(' · ')}
              </span>
            </div>
          )}
          
          {/* Tertiary gets an explicit explore link since it has no visual */}
          {tier === 'tertiary' && (
            <div className="tertiary-explore">
              <span className="text-small">Explore ↗</span>
            </div>
          )}
        </div>

      </a>
    </article>
  );
};
