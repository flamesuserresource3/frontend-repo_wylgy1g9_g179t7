import { useRef, useState, useCallback } from 'react';
import HeroSection from './components/HeroSection.jsx';
import SummarySection from './components/SummarySection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SkillsAndContactSection from './components/SkillsAndContactSection.jsx';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const projectsRef = useRef(null);

  const handleSelectCategory = useCallback((category) => {
    setSelectedCategory(category);
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const clearFilter = useCallback(() => setSelectedCategory(null), []);

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <HeroSection onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      <SummarySection />
      <div ref={projectsRef}>
        <ProjectsSection selectedCategory={selectedCategory} clearFilter={clearFilter} />
      </div>
      <SkillsAndContactSection selectedCategory={selectedCategory} />
    </div>
  );
}
