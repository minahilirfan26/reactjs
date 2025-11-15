import Logo from '../../assets/image/logo.svg'
import './style.scss'
function HomePage(){
    return(
<div className="container">
<div className="Header-bar">
<div className="logo">
    <img src={Logo} alt="" />
</div>
<div className="links">
    <ul>
        <li>How it works </li>
        <li>Download</li>
        <li>Upgrade</li>
        <li>Feedback</li>
        <li className='btn'>Login / Register</li>
    </ul>
</div>
</div>
</div>
    )
}
export default HomePage;