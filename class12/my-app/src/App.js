import logo from './logo.svg';
import './App.css';
import { Row, Col, Card, Input } from 'antd';
import CardInput from './components/Input';
import AppRouter from './router/index.js';

// function App() {
//   let getData = (e)=>{
// console.log(e.target.value)
//   }
//   return (
//   <Row>
//     <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{border: "2px solid red"}}>
//     <h1>Minahil Irfan</h1>
//     </Col>
//      <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{border: "2px solid blue"}}>
//     <Row justify={'space-evenly'}>
//       <Col  span={8} style={{border: "2px solid orange"}}>
//       <Card>
//       <CardInput placeholder='Email' onChange={getData}/>
//       </Card>
//       </Col>

//       <Col span={8} style={{border: "2px solid purple"}}>
//        <Card>
//         <CardInput placeholder='password' onChange={getData}/>
//       </Card>
//       </Col>
//     </Row>
//     </Col>
//   </Row>
//   );
// }

function App(){
  return(
    <AppRouter/>
  )
}

export default App;
