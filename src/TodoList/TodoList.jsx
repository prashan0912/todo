//Parent File
import Todo from "../Todo/Todo";

function TodoList() {
    const list = [
        { id: 1, todoData: 'todo 1' },
        { id: 2, todoData: 'todo 2' },
    ];
    return (<>
        <div>
            <div>
                {list.length > 0 && list.map((e) => <Todo key={e.id} myTodo={e.todoData} />)}
            </div>
        </div>

    </>
    );
}
export default TodoList;