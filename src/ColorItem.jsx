export default function ColorItem({color, handleDelete}){
    return (
        <div>
            <p>{color}</p>
            <button onClick={handleDelete}>Delete Color</button>
        </div>
    )
}