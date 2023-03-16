import React, { useState } from 'react';
import './style.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordionItem">
      <div className="accordionTitleBox" onClick={() => setIsActive(!isActive)}>
        <div className='accordTitle' data-aos="fade-up">{title}</div>
        <div data-aos="fade-up">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordionContent" data-aos="fade-up">{content}</div>}
    </div>
  );
};

export default Accordion;