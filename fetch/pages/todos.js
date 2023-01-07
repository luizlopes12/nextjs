export async function getStaticProps(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos')

    let todo = await data.json()
    return {
        props: {
            todo
        }
    }
}

export default function Todos({todo}){
    return(
    <>
    <h1>Tarefas</h1>
    <ul>
        {todo.map((opa) => (
        <li key={opa.id}>{opa.title}</li>
        ))}
    </ul>
    </>

    )
}