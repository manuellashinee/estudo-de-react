export default function ItemTarefa(props) {
    return (
        <li>
            {props.item}
            <span onClick={e => props.removerTarefa(props.item)}></span>
        </li>
    )
}