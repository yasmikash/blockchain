import { Row, Col, Typography, Table, Space } from "antd";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const { Text } = Typography;

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    render: (time) => <Moment format="YYYY-MM-DD HH:MM">{time}</Moment>,
  },
  {
    title: "Data",
    dataIndex: "data",
    time: "data",
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "Hash",
    dataIndex: "hash",
    key: "hash",
    render: (hash) => <Link to={`/block/${hash}`}>{hash}</Link>,
  },
];

const data = [
  {
    key: "1",
    time: new Date().getTime(),
    data: "NEW DATA",
    height: 1,
    hash: "weudhwefw8efguwefgyuewg",
  },
  {
    key: "2",
    time: new Date().getTime(),
    data: "NEW DATA",
    height: 2,
    hash: "weudhwefw8efguwefgyuewg",
  },
  {
    key: "3",
    time: new Date().getTime(),
    data: "NEW DATA",
    height: 3,
    hash: "weudhwefw8efguwefgyuewg",
  },
  {
    key: "4",
    time: new Date().getTime(),
    data: "NEW DATA",
    height: 4,
    hash: "weudhwefw8efguwefgyuewg",
  },
];

const Blocks = () => {
  return (
    <Row justify="center">
      <Col span={20}>
        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          <Text>Blocks available upto the recent block mined.</Text>
          <Table columns={columns} dataSource={data} />
        </Space>
      </Col>
    </Row>
  );
};

export default Blocks;
