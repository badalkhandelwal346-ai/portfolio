import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { projectsData } from '../../data/projects';
import { ProjectPreview } from './ProjectPreview';
import './SelectedWork.css';

export const SelectedWork: React.FC = () => {
  // Separate projects by tier for editorial layout
  const primaryProjects = projectsData.filter(p => p.tier === 'primary');
  const secondaryProjects = projectsData.filter(p => p.tier === 'secondary');
  const tertiaryProjects = projectsData.filter(p => p.tier === 'tertiary');

  return (
    <Section id="work" className="selected-work-section">
      <Container isEditorial>
        
        {/* Section Intro */}
        <div className="work-intro">
          <h2 className="work-intro-label text-metadata">SELECTED WORK</h2>
          <p className="work-intro-statement text-heading-section">
            Things I've designed, built, and tried to make useful.
          </p>
        </div>

        <div className="work-grid">
          
          {/* Primary Layout */}
          {primaryProjects.length > 0 && (
            <div className="work-group primary-group">
              {primaryProjects.map(project => (
                <ProjectPreview key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* Secondary Layout - Side by side on large screens */}
          {secondaryProjects.length > 0 && (
            <div className="work-group secondary-group">
              {secondaryProjects.map(project => (
                <ProjectPreview key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* Tertiary Layout - Minimal List */}
          {tertiaryProjects.length > 0 && (
            <div className="work-group tertiary-group">
              {tertiaryProjects.map(project => (
                <ProjectPreview key={project.id} project={project} />
              ))}
            </div>
          )}

        </div>

      </Container>
    </Section>
  );
};
