import React from 'react';
import './Modal.css';
import {AiOutlineCiCircle} from 'react-icons/ai'

const MelonModal = ({findData, close}) => {
    const {title, key, singer} =  findData
    return (
        <div className='Modal'>
           <div className="bg" onClick={close}></div>
           <div className="popup">
               <h2>{title}</h2>
               <iframe src={`https://www.youtube.com/embed/${key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <strong>{singer}</strong>
               <p className="more">
                    <AiOutlineCiCircle onClick={close}/>
               </p>
           </div>
        </div>
    );
};

export default MelonModal;