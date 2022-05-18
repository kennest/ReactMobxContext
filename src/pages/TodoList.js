const { useCallback } = require("react");
const { useStores } = require("../stores/CounterStore");
const { observer } = require("mobx-react-lite");
export const TodoList = observer(() => {
    const { todosStore } = useStores();

    const handleAddItem = useCallback(() => {
        todosStore.addItem("new value !");
    }, []);

    return (
        <>
            <button onClick={handleAddItem}>Add</button>
            {todosStore.listLength > 0 && (
                <ul>
                    {todosStore.items.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            )}
        </>
    );
});