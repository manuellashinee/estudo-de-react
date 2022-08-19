import { useState } from "react"
import ItemTarefa from "../../components/itemTarefa";

export default function Tarefas() {
    const [tarefa, setTarefa] = useState('');
    const [lista, setLista] = useState([]);

    function addTarefa() {
        let novaLista = [...lista, tarefa];
        setLista(novaLista);
    }

    function removerTarefas(t) {
        let novaLista = lista.filter(item => item !== t)
    }

    return(
        <section>
            <h1>TAREFAS </h1>
            <div>
                Nova Tarefa: <input type='text' value={tarefa} onChange={e => setTarefa(e.target.value)}/>
                <button onClick={addTarefa}> Adicionar </button>
            </div>
            <ul>
                {lista.map (item => 
                    <ItemTarefa item ={item} removerTarefas = {removerTarefas}/> )}
            </ul>
        </section>
    )
}