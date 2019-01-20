import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked!==nextProps.checked;
    }

    render(){
        const {text, checked, id, onToggle, onRemove}=this.props;
        return(
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // 해당 DOM의 부모의 클릭이벤트에 연결되어있는 onToggle 실행막음
                    onRemove(id)}
                    }>&times;
                </div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {checked &&(<div className="check-mark">✓</div>)}
            </div>
        );
    }
}
export default TodoItem;

//5가지의 props 전달받음 :text(todo내용) checked(체크박스상태) id(todo의 id)
//onToggle(체크박스 끄고키는 함수) onRemove(아이템 삭제함수) 
