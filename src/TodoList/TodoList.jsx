//Parent File
import Todo from "../Todo/Todo";
import { useState } from "react";

function TodoList({ list, updateList }) {
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
                        updateList(updatedList)
                    }}
                />)}
            </div>
        </div>

    </>
    );
}
export default TodoList;