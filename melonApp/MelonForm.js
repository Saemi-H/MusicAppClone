import React, { useEffect, useRef, useState }  from 'react';
import './MelonForm.css'

const MelonForm = ({onSearch}) => {
    const textRef=useRef(null)
    const [input, setInput]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault()
        onSearch(input)
        setInput('')
        textRef.current.focus()
    }
    const onChange=(e)=>{
        const {value} = e.target
        setInput(value)
    }
    useEffect(()=>{
        onSearch(input)
    }, [input])

    return (
        <div className="MelonForm">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='음악명을 입력하세요' onChange={onChange} value={input} ref={textRef}/>
                <button type='submit'>검색</button>
            </form>
        </div>
    );
};

export default MelonForm;