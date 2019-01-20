import React from 'react';
import './Form.css';

const Form=({value, onChange, onCreate, onKeyPress})=>{
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>추가</div>
        </div>
    );
};

export default Form;

//총 4가지 proprs: value(인풋의 내용) onCreate(버튼클릭시 실행함수) 
// onChange(인풋내용이 변경될 때 실행함수) onKeyPress(키 입력시 실행함수)