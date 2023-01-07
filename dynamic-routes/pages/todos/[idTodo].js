import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Todo(){
    const router = useRouter()

    const {idTodo} = router.query
    return(
    <>
    <h1>Tarefas</h1>
    <ul>
        Todo: {idTodo}
    </ul>
    <p>
        <Link href={`/todos/${idTodo}/comments/2`}>Detalhes</Link>
    </p>
    </>

    )
}