import { Row, Col, Input } from "antd";

function CardInput({placeholder = "Enter here", onChange}){
    return(
        <Row>
            <Col span={12}>
            <Input placeholder={placeholder} onChange={onChange}></Input>
            </Col>
        </Row>
    )
}

export default CardInput