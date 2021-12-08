import './ItemListContainer.css'

function greeting ({saludo,clase}) {
    return (
        <h1 className ={clase}>{saludo}</h1>
    )
}

export default greeting;