import Text_Color from '../../assets/image/text-color.svg'
import Text_Grey from '../../assets/image/text-grey.svg'
import Files_Color from '../../assets/image/files-color.svg'
import Files_Grey from '../../assets/image/files-grey.svg'
import Logo from '../../assets/image/logo.svg'
import './style.scss'
import { useReducer, useState,useEffect } from 'react'
import TextArea from '../../components/TextArea'
import MainBtn from '../../components/Button'
import MyDropzone from '../../components/Dropzone'
import { RiFacebookBoxFill, RiMoonLine, RiSunLine, RiTwitterFill } from '@remixicon/react'

function HomePage(){
    let [type, setType] = useState("text")
    let [text, setText] = useState("")
    let theme={
        theme:"light",
        class:"light"
    }
    const reducer=(state,action)=>{
     switch (action.type){
        case "update-theme":
            return {
                ...state,
                theme:action.theme,
                class:action.class
            }
            default :
                return state
            
     }
    }
    const [state, dispatch] = useReducer(reducer, theme)
    useEffect(() => {
         document.body.classList.remove(state.class === "light" ? "dark" : "light");
  document.body.classList.add(state.class);
}, [state.class]);
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
    <button>
        {state.theme== "light"?
          <RiMoonLine className='moon'  onClick={()=>dispatch({type:"update-theme",theme:"dark" , class:"dark"})}  />:
                  <RiSunLine    className='sun'   onClick={()=>dispatch({type:"update-theme",theme:"light" , class:"light"})}  />
        }
      


        </button>
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
      <span>  Text</span>
        <div className='input'>
    <TextArea value={text}  onChange={(e)=> setText(e.target.value)}/>
</div>
    </div> :
    <div>
        <span>Files</span>
        <div  className='dropzone-container'>
            <MyDropzone className="drop-zone"/>
        </div>
    </div>
    }
    
</div>
<div className='btn-container '   style={{ display: type === "text" ? "block" : "none" }}>
<MainBtn disabled={!text} title={"Save"} theme={state.theme}/>
</div>

</div>

<div className='footer'>
    <span className='footer-text'>
<p>© 2011-2025 AirForShare.com</p>
<p>Made in <a href="">BirdsCorp.com</a> with ❤️</p>
</span>
<span className='footer-icons'> 
    <RiFacebookBoxFill className='footer-icon'  size={40}/>
    <RiTwitterFill className='footer-icon'  size={40}/>
</span>
</div>
</div>
    )
}
export default HomePage;