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
  const supportingProjects = projectsData.filter(p => p.tier === 'supporting');
  const courseProjects = projectsData.filter(p => p.tier === 'course');

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
          
          {/* Primary Layout (Level 1) */}
          {primaryProjects.length > 0 && (
            <div className="work-group primary-group">
              {primaryProjects.map(project => (
                <ProjectPreview key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* Secondary Layout (Level 2) */}
          {secondaryProjects.length > 0 && (
            <div className="work-group secondary-group">
              {secondaryProjects.map(project => (
                <ProjectPreview key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* Supporting Layout (Level 3) */}
          {supportingProjects.length > 0 && (
            <div className="work-group supporting-group">
              <div className="group-label" style={{ marginBottom: 'var(--space-24)' }}>
                <span className="text-metadata" style={{ color: 'var(--color-muted-text)' }}>EXPERIMENTAL WORK</span>
              </div>
              {supportingProjects.map(project => (
                <ProjectPreview key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* Course Projects Layout (Level 4 - Minimal List) */}
          {courseProjects.length > 0 && (
            <div className="work-group course-group">
              <div className="group-label" style={{ marginBottom: 'var(--space-24)', paddingTop: 'var(--space-48)' }}>
                <span className="text-metadata" style={{ color: 'var(--color-muted-text)' }}>EARLIER EXPLORATIONS</span>
              </div>
              <div className="course-list">
                {courseProjects.map(project => (
                  <ProjectPreview key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

        </div>

      </Container>
    </Section>
  );
};
