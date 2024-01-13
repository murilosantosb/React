import React, { useState } from 'react';

function ListTarefas() {
  const [tarefas, setTarefas] = useState([]); // Estado para armazenar as tarefas
  const [novaTarefa, setNovaTarefa] = useState(''); // Estado para armazenar a nova tarefa

  // Função para lidar com a adição de uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div className="App">
      <h1>Minha Lista de Tarefas</h1>
      <ul>
        {/* Renderiza a lista de tarefas */}
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      {/* Input para adicionar nova tarefa */}
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
    </div>
  );
}

export default ListTarefas
