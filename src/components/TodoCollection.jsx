import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onToggleDone,
  onSave,
  onDelete,
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onSave={({ id, title }) => onSave?.({ id, title })}
            onToggleDone={(id) => onToggleDone?.(id)}
            onDelete={(id) => onDelete?.(id)}
            onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
