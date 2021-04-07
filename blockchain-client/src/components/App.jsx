import "antd/dist/antd.css";
import { Row, Col, Menu, Card, Typography } from "antd";
import {
  PlusSquareOutlined,
  BlockOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import { BrowserRouter, Route, Link } from "react-router-dom";

import MineBlock from "../routes/MineBlock";
import Blocks from "../routes/Blocks";
import Block from "../routes/Block";

const { Title } = Typography;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Row style={{ marginBottom: 30 }}>
          <Col span={24}>
            <Menu mode="horizontal" style={{ fontWeight: "bold" }}>
              <Menu.Item icon={<PlusSquareOutlined />} key="mine">
                <Link to="/">Mine Your Block</Link>
              </Menu.Item>
              <Menu.Item icon={<BlockOutlined />} key="blocks">
                <Link to="/blocks">Blocks</Link>
              </Menu.Item>
              <Menu.Item icon={<CheckSquareOutlined />} key="validate">
                <Link to="validate-block">Validate Block</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        <Route path="/" exact component={MineBlock} />
        <Route path="/blocks" exact component={Blocks} />
        <Route path="/block/:hash" exact component={Block} />
      </BrowserRouter>
    </>
  );
};

export default App;
