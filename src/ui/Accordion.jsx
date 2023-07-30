import React, { useState } from 'react';
import module from './Accordion.module.scss';

const Accordion = () => {
    const [activeIndices, setActiveIndices] = useState([]);

    const handleAccordionClick = (index) => {
        // Check if the clicked index is already active
        if (activeIndices.includes(index)) {
            // If active, remove it from the activeIndices array
            setActiveIndices(activeIndices.filter((i) => i !== index));
        } else {
            // If not active, add it to the activeIndices array
            setActiveIndices([...activeIndices, index]);
        }
    };

    const accordionData = [
        {
            title: 'Вопрос 1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Вопрос 1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Вопрос 1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Вопрос 1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ];

    return (
        <div className={module.container}>
            <h1 className={module.uppertext}>Вопросы-Ответы</h1>
            {accordionData.map((item, index) => (
                <div key={index} className={module.accordion}>
                    <button
                        className={`${module.accordionbtn} ${activeIndices.includes(index) ? module.active : ''}`}
                        onClick={() => handleAccordionClick(index)}
                    >
                        {item.title}
                        <span className={module.arrow}>{activeIndices.includes(index) ? 'ᐱ' : 'ᐯ'}</span>
                    </button>
                    <div className={`${module.panel} ${activeIndices.includes(index) ? module.active : ''}`}>
                        <p className={module.panel_content}>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
