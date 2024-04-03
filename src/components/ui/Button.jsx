


export default function Button({cn = "", ...prop}) {
    return (
        <button {...prop} className={`primary-btn ${cn}`}></button>
    )
}
