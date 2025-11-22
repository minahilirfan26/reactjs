import Text_Color from '../../assets/image/text-color.svg'
import Text_Grey from '../../assets/image/text-grey.svg'
import Files_Color from '../../assets/image/files-color.svg'
import Files_Grey from '../../assets/image/files-grey.svg'
import Logo from '../../assets/image/logo.svg'
import './style.scss'
import { useState } from 'react'
import TextArea from '../../components/TextArea'
import MainBtn from '../../components/Button'
import MyDropzone from '../../components/Dropzone'

function HomePage(){
    let [type, setType] = useState("text")
    let [text, setText] = useState("")
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
<div className='card-container'>
<div className='img-area'>
    <div onClick={()=> setType("text")}>
        <img  src={ type === "text" ? Text_Color : Text_Grey} alt="" />
    </div>
    <div onClick={()=> setType("files")}>
        <img src={type === "files" ? Files_Color : Files_Grey} alt="" />
    </div>
</div>
<div className='text-aera'>
   { type === "text" ?
    <div>
        Text
        <div className='input'>
    <TextArea value={text}  onChange={(e)=> setText(e.target.value)}/>
</div>
    </div> :
    <div>
        Files
        <div >
            <MyDropzone/>
        </div>
    </div>
    }
    
</div>
<div className='btn-container'>
<MainBtn disabled={!text} title={"Save"}/>
</div>

</div>
</div>
    )
}
export default HomePage;