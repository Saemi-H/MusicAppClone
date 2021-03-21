import React from 'react';
import { AiOutlineVideoCamera , AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDash ,AiOutlineHeart} from "react-icons/ai";
import  numeral from 'numeral'

const MelonItem = ({item, onLike, clicked}) => {
    const {rank,title,poster,singer, done, like, state}=item

    return (
        <tr>
           <td>{rank}</td> 
           <td>
               <img src={poster} alt="poster" width='50'/>
               {title}
            </td> 
           <td>{singer}</td> 
           <td>
               <i onClick={()=>onLike(rank)}>
               {done ? <AiOutlineHeart color='red'/> : <AiOutlineHeart color='#333'/>}
               </i>
               {numeral(like).format(0,0)}
            </td> 
           <td>
               <i><AiOutlineVideoCamera onClick={()=>clicked(rank)}/></i>
            </td> 
           <td>
               {state === '상승' && <i><AiOutlineArrowUp /></i>}
               {state === '하강' && <i><AiOutlineArrowDown /></i>}
               {state === '유지' && <i><AiOutlineDash /></i>}
            </td> 
        </tr>
    );
};

export default MelonItem;