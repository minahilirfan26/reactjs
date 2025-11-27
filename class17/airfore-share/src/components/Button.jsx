import './index.scss'
function MainBtn({disabled,title, onClick}){
    return(
        <button className='main-btn' style={{ color: disabled ? "rgba(186, 179, 179, 0.56)" : "#4a4a4a", border: disabled ? "1px solid rgba(186, 179, 179, 0.56)" : "1px solid #4a4a4a" }} disabled={disabled} onClick={onClick} >{title}</button>
    )
}
export default MainBtn 