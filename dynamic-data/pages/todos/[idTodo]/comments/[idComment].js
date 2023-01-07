import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Comment(){
    const router = useRouter()
    const idTodo = router.query.idTodo
    const idComment = router.query.idComment
    return(
    <>
    <h1>Todo: {idTodo}, Comentario: {idComment}</h1>
    </>

    )
}