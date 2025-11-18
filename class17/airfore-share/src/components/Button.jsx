import './index.scss'
function MainBtn({title, onClick}){
    return(
        <button className='main-btn' onClick={onClick} >{title}</button>
    )
}
export default MainBtn