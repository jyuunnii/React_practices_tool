import React, {Component} from 'react';
import TodoItem from './TodoItem';
class TodoItemList extends Component {
    shouldComponenetUpdate(nextProps, nextState){ //컴포넌트 최적화(optional)
        return this.render.props.todos!==nextProps.todos;
    } 

    render(){
        const {todos, onToggle, onRemove}=this.props;
        const todoList=todos.map( //원래 하단 div에 <TodoItem text="안녕">으로 있던 객체 배열을 컴포넌트 배열로 변환 map 이용!
            ({id, text,checked}) =>(
                <TodoItem 
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        return(
            <div>
               {todoList}
            </div>
        )
    }
}
export default TodoItemList;
//비어있는 컴포넌트 형성 => 후에 TodoItem.js 만들고, <컴포넌트> 작성
//3가지 props를 받을 예정: todos(객체들이 들어있는배열) 
//onToggle(체크박스를키고끄는함수) onRemove(아이템을 삭제하는함수)