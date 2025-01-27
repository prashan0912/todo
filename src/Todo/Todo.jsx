function Todo({ myTodo }) {
    return (
        <>
            <div>
                <input type="checkbox" />
                {myTodo}
                <button>Edit</button>
                <button>Delete</button>
            </div>

        </>)
}
export default Todo;