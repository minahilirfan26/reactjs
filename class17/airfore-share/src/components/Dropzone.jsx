import './index.scss'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
  const onDrop = acceptedFiles => {
    // Do something with the files
    console.log("acceptedFiles", acceptedFiles)
  }
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input className='input-btn' {...getInputProps()} />
      <div className='droper'>
        
        Drag and drop any files up to 2 files, 5Mbs each or Browse
Upgrade to get more space
      </div>
      
    </div>
  )
}

export default MyDropzone