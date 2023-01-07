import Link from 'next/link'

export async function getStaticProps(context){
    const {params} = context
    let data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.idTodo}`)

    let todo = await data.json()

    return{
        props: { todo }
    }
}

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    let data = await response.json()
    const paths = data.map(todo =>{
        return {
            params:{
                idTodo: `${todo.id}`
            }
        }
    })
    // o fallback false faz com que a rendenização das páginas só aconteça ao buildar
    // Caso seja true quando alguem entrar na pagina ela já vai ser carregada
    return { paths, fallback: true }
}

export default function Todo({todo}){
    return(
    <>
    <h1>Tarefas</h1>
    <ul>
        Todo: {todo?.id}<br/>
        Texto: {todo?.title}
    </ul>
    <p>
        <Link href={`/todos/${todo?.id}/comments/2`}>Detalhes</Link>
    </p>
    </>

    )
}