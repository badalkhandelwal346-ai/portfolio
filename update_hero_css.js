const fs = require('fs');
const file = 'src/components/hero/Hero.css';
let css = fs.readFileSync(file, 'utf8');

// Replace hero-name styles and add huge text
css = css.replace('.hero-name {\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  margin: 0;\n}', `
.text-hero-huge {
  font-size: 6rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0;
}

@media (max-width: 768px) {
  .text-hero-huge {
    font-size: 4rem;
  }
}
`);

// Add CTA text styling
css = css.replace('/* CTA */', `/* CTA */
.hero-cta-text {
  display: inline-flex;
  align-items: center;
  gap: var(--space-12);
  color: var(--color-primary-text);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: var(--space-24);
  transition: opacity 0.3s ease;
}

.hero-cta-text:hover {
  opacity: 0.7;
}

.hero-cta-arrow-right {
  color: #4caf50;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.hero-cta-text:hover .hero-cta-arrow-right {
  transform: translateX(4px);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: -50px;
  left: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-12);
  opacity: 0.6;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, #4caf50, transparent);
}

.scroll-text {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-secondary-text);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

/* Old CTA */`);

// Adjust portrait anchor
css = css.replace('.hero-portrait-anchor {\n  position: absolute;\n  top: 50%;\n  right: -5%;\n  transform: translateY(-50%);\n  width: 55%;\n  height: 120%;\n  z-index: 0;\n  pointer-events: none;\n}', `.hero-portrait-anchor {
  position: absolute;
  top: 50%;
  right: -35%;
  transform: translateY(-50%);
  width: 80%;
  height: 150%;
  z-index: 0;
  pointer-events: none;
}`);

// Change hero-content gap to be smaller maybe? The mockup has tight spacing
css = css.replace('.hero-content {\n  position: relative;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-24);\n  max-width: 700px;', `.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  max-width: 800px;`);

// Adjust gradient mask so image fades more softly on the left
css = css.replace('linear-gradient(to right, var(--color-page-background) 0%, transparent 40%),', 'linear-gradient(to right, var(--color-page-background) 0%, transparent 60%),');

fs.writeFileSync(file, css);
console.log('CSS updated');
