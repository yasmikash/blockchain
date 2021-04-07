import { Row, Col, Card, Form, Input, Button } from "antd";

const MineBlock = () => {
  return (
    <Row justify="center">
      <Col span={15}>
        <Card>
          <Form>
            <Form.Item label="Enter Block Data">
              <Input placeholder="Ex: Block 1 Data" />
            </Form.Item>
            <Row justify="end">
              <Button type="primary">Mine Block</Button>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default MineBlock;
