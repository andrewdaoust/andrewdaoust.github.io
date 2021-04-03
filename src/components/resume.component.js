import React from 'react';
import { Typography, Layout, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

export function Resume() {
  return (
    <Content style={{padding: '20px 40px'}}>
      <Title level={2}>Work Experience</Title>
      <Title level={2}>Education</Title>

      <Title level={5}>Rensselaer Polytechnic Institute</Title>
      <Paragraph>
        <ul>
          <li>
            B.Sc. Applied Physics, 2015-2019
          </li>
          {/* <li>
            2015-2019
          </li> */}
        </ul>
      </Paragraph>

    </Content>
  )
}
