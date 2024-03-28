import React, { useEffect, useState } from 'react';

const SideNav = ({ currentSection, scrollToSection }) => {
  const sections = ['Landing', 'About', 'Projects'];
  const [activeSection, setActiveSection] = useState(currentSection);

  useEffect(() => {
    setActiveSection(currentSection);
  }, [currentSection]);

  const handleSectionClick = (section) => {
    scrollToSection(section);
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 rounded-lg p-2">
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`relative cursor-pointer ${
              section === activeSection ? 'text-blue-500' : 'text-gray-400'
            }`}
            onClick={() => handleSectionClick(section)}
          >
            <div
              className={`h-3 w-3 rounded-full border-2 ${
                section === activeSection ? 'border-blue-500' : 'border-gray-400'
              }`}
            />
            <div className="absolute left-6 text-sm font-semibold">{section}</div>
            {section === activeSection && (
              <div className="absolute left-5 h-full w-px bg-blue-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;