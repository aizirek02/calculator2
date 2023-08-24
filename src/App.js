import { useState } from "react";
import { Col, Row } from "antd";
import { Button, Input, Space } from "antd";

let isEqualClicked = false;

function App() {
  const [data, setData] = useState("");

  let btnStyle = { width: "60px", height: "50px" };

  const handleClick = (event) => {
    if (isEqualClicked) {
      setData(event.target.innerText);
      isEqualClicked = false;
    } else {
      setData(data + event.target.innerText);
    }
  };

  const equalClick = () => {
    try {
      setData(eval(data));
      isEqualClicked = true;
    } catch (error) {
      console.log(error);
    }
  };

  const clearClick = () => {
    setData("");
  };

  return (
    <div
      style={{
        color: "blue",
        border: "2px solid powderblue",
        padding: "50px",
        margin: "150px",
        width: "350px",
        height: "360px",
        display: "block",
      }}
    >
      <h2 style={{ color: "green" }}>Calculator</h2>
      <Space>
        <Space.Compact direction="vertical">
          <Row>
            <Input value={data} style={{ width: "350px" }} />
          </Row>
          <Row>
            <Col span={18}></Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={clearClick}>
                C
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                7
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                4
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                1
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                0
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                8
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                5
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                2
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                .
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                9
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                6
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                3
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={equalClick}>
                =
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                /
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                *
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                -
              </Button>
            </Col>
            <Col span={6}>
              <Button style={btnStyle} onClick={handleClick}>
                +
              </Button>
            </Col>
          </Row>
        </Space.Compact>
      </Space>
    </div>
  );
}

export default App;
