export const Note = (props) => {
    console.log(props)
    const {userId, id, title, body} = props
    return <div >
        <li><small><strong>{userId}/{id}: </strong></small>{title}</li>
        <li><strong>{body}</strong></li>
        <br />
    </div>
}