import React, { createContext } from 'react';
import beaufort from './images/beaufort.png';
import chelsea from './images/chelsea.jpg';
import fulham from './images/fulham.jpeg';
import kings from './images/kings.jpeg';
import laundreyworks from './images/laundreyworks.jpeg';
import woodberry from './images/woodberry.png';

export const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
    const listings = [
        {id: "sk@hotmail.com", images: [[beaufort, chelsea, fulham, kings, woodberry, laundreyworks]] },
        {id: "tk@hotmail.com", images: [[chelsea, beaufort, kings, fulham, laundreyworks, woodberry]] },
        {id: "pk@hotmail.com", images: [[woodberry, laundreyworks, kings, fulham, beaufort, woodberry]] },
        {id: "ak@hotmail.com", images: [[beaufort, chelsea, fulham, kings, woodberry, laundreyworks]] },
        {id: "ck@hotmail.com", images: [[woodberry, fulham, kings, laundreyworks, laundreyworks, woodberry]] },
        {id: "mk@hotmail.com", images: [[laundreyworks, laundreyworks, kings, fulham, beaufort, woodberry]] }
      ];
      
    return (
        <ListingsContext.Provider value={listings}>
          {children}
        </ListingsContext.Provider>
    );
};