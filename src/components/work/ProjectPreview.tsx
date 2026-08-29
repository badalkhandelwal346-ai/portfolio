import React from 'react';
import type { Project } from '../../data/projects';
import './ProjectPreview.css';

interface ProjectPreviewProps {
  project: Project;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const { number, title, category, description, tier, technologies, liveUrl, imageSrc, caseStudyUrl } = project;

  // The destination link. If caseStudyUrl exists, prioritize it. Otherwise use liveUrl, or a placeholder hash.
  const href = caseStudyUrl || liveUrl || `#project-${project.id}`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a local route (caseStudyUrl), left-click (button 0), and no modifiers are pressed
    if (caseStudyUrl && e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      window.history.pushState({}, '', caseStudyUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const isExternalLiveUrl = !caseStudyUrl && liveUrl;

  return (
    <article className={`project-preview tier-${tier}`}>
      <a 
        href={href} 
        onClick={handleClick}
        className="project-link-wrapper" 
        target={isExternalLiveUrl ? "_blank" : "_self"} 
        rel={isExternalLiveUrl ? "noopener noreferrer" : ""}
      >
        
        {/* Visual Artifact */}
        {(tier !== 'course' && tier !== 'supporting') && (
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
          
          {/* Text-first projects get an explicit explore link since they have no visual block */}
          {(tier === 'course' || tier === 'supporting') && (
            <div className="course-explore">
              <span className="text-small">Explore ↗</span>
            </div>
          )}
        </div>

      </a>
    </article>
  );
};
