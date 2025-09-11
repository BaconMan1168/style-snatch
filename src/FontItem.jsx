export default function FontItem({font, handleDelete}){
    return (
        <div>
            <p>{font.font} {font.size}</p>
            <button onClick={handleDelete}>Delete Font</button>
        </div>
    )
}