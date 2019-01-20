import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'; //투두리스트컴포넌트 불러오기
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  //초기 state 정의
  id=3 //이미 0,1,2가 존재하기 때문에
  state={
    input:'',
    todos:[
      {id:0, text:'초기 상태11', checked:false},
      {id:1, text:'초기 상태22', checked:true},
      {id:2, text:'초기 상태33', checked:false}
    ]
  }
  //Form 기능 구현하기 1. 텍스트내용 바뀌면 state 업데이트 2. 버튼클릭시 새로운 todo형성 후 업데이트 3. 인풋에서 엔터누르면 버튼 클릭과 동일한 작업진행
  handleChange=(e)=>{
    this.setState({
      input: e.target.value
    });
  }
  handleCreate=()=>{
    const {input, todos}=this.state;
    this.setState({
      input:'', //input 비우기
      todos: todos.concat({  //concat 이용하여 배열추가
        id: this.id++,
        text:input,
        checked: false
      })
    });
  }
  handleKeyPress=(e)=>{
    if(e.key==='Enter'){
      this.handleCreate();
    }
  }

//체크하기
  handleToggle=(id)=>{
    const {todos} = this.state;
    const index=todos.findIndex(todo=>todo.id===id);
    const selected =todos[index];
    const nextTodos=[...todos];

    nextTodos[index]={
      ...selected,
      checked:!selected.checked
    };
    this.setState({
      todos:nextTodos
    });
  }
//제거하기
  handleRemove=(id)=>{
    const{todos}=this.state;
    this.setState({
      todos:todos.filter(todo=>todo.id!==id)
    });
  }

  render() {
    const{input, todos}=this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    
    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
       <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
     </TodoListTemplate>
    );
  }
}

export default App;
