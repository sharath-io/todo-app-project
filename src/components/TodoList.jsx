import {TodoCard} from "./TodoCard";

export const TodoList=(props) =>{
    const {todos,tab} = props;
    const filterTodosList = tab==='All' ? todos : tab==='Open' ? todos.filter(todo => !todo.complete)
                                                            :  todos.filter(todo => todo.complete)
    return (
        <>
        {
           filterTodosList.map((todo) =>{
              return  <TodoCard key={todo.id}  todo={todo} {...props}/>
            })
        }
        </>
    )
}