import { useState, useEffect } from 'react';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: number;
};

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem('bench_todos');
    return stored ? JSON.parse(stored) : [];
  });

  const [text, setText] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  // Sync todos to localStorage
  useEffect(() => {
    localStorage.setItem('bench_todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddOrEdit = () => {
    if (!text.trim()) return;

    if (editId) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, text } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text,
          completed: false,
          priority: prev.length + 1,
        },
      ]);
    }

    setText('');
  };

  const handleDelete = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleToggle = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // 🔥 Optional: Add confetti burst here
  };

  const handleEdit = (id: string, currentText: string) => {
    setText(currentText);
    setEditId(id);
  };

  const handlePriorityChange = (id: string, newPriority: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);

  return (
    <section className="space-y-6 max-w-xl mx-auto pt-6">
      <h2 className="text-2xl font-bold">Todo Dashboard</h2>
      <div className="flex gap-4">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddOrEdit()}
          placeholder="Enter a task"
          className="px-4 py-2 rounded border border-gray-300 w-full"
        />
        <button
          onClick={handleAddOrEdit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editId ? 'Update' : 'Add'}
        </button>
      </div>

      <ul className="space-y-3">
        {sortedTodos.map((todo, index) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center bg-white px-4 py-2 rounded border shadow-sm ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            <div className="flex items-center gap-4 flex-1 cursor-pointer">
              <span onClick={() => handleToggle(todo.id)} className="min-w-[2rem] text-gray-500">
                {index + 1}.
              </span>
              <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
              <input
                type="number"
                value={todo.priority}
                min={1}
                onChange={e =>
                  handlePriorityChange(todo.id, parseInt(e.target.value, 10))
                }
                className="w-16 text-center border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="text-blue-500 hover:text-blue-700 p-1 px-1.5 bg-gray-100 cursor-pointer"
              >
                ✎
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-700 p-1 px-2 bg-red-100 cursor-pointer"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
