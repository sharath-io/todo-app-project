export const Header=(props) =>{
    const {todos} = props;
    const todosLength = todos.length;
    const isTasksPlural = todosLength!==1
    const taskOrTasks = isTasksPlural ? "Tasks" : "Task"
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} new {taskOrTasks}</h1>
            
        </header>
    )
}