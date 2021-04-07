import { Row, Col, Typography, List } from "antd";
import Moment from "react-moment";

const { Title, Text } = Typography;

const data = [
  { title: "Hash", value: "ydfgwe8fygwudfyq686qwdyqwgudyqgdu" },
  {
    title: "Time",
    value: <Moment format="YYYY-MM-DD HH:MM">{new Date().getTime()}</Moment>,
  },
  { title: "Block Height", value: 19 },
  { title: "Block Data", value: "this is the 19th block data" },
  {
    title: "Previous Hash",
    value: "weudhwedYG8DYWEUDG868ygedygweudgywudy7igyi",
  },
];

const Block = ({ match }) => {
  const hash = match.params.hash;
  return (
    <Row justify="center">
      <Col span={20}>
        <Title level={4}>Showing Block for Hash {hash}</Title>
        <Col>
          <List
            style={{ width: "100%" }}
            dataSource={data}
            bordered
            renderItem={(item) => (
              <List.Item>
                <span style={{ fontWeight: "bold" }}>{item.title}:</span>{" "}
                {item.value}
              </List.Item>
            )}
          />
        </Col>
      </Col>
    </Row>
  );
};

export default Block;
