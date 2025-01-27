import { useContext } from "react";
import Todo from "../Todo/Todo";
import { useState } from "react";
import TodoContext from '../context/TodoContext'

function TodoList() {
    const { list, setList } = useContext(TodoContext)
    // const [list, setList] = useState([])  // tha par n rakh ke app component ka rakhenge
    return (<>
        <div>
            <div>
                {list.length > 0 && list.map((e) => <Todo
                    key={e.id}
                    id={e.id}
                    todoData={e.todoData}
                    isFinished={e.isFinished}
                    myData={e.todoData}
                    const changeFinished={(isFinished) => {
                        const updatedList = list.map(t => {
                            if (t.id == e.id) {
                                e.finished = isFinished
                            }
                            return t;
                        });
                        setList(updatedList)
                    }}
                />)}
            </div>
        </div>

    </>
    );
}
export default TodoList;