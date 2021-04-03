import { React } from 'react';
import { Typography, Layout, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

export function AboutMe() {
  return (
    <Content style={{padding: '20px 40px'}}>
      <Title>I'm Andrew</Title>
      <Paragraph>
        I'm a data analytic engineer at FacilityConneX. I primarily develop in Python but lately 
        I've been working a lot in Node.js on backend services.
      </Paragraph>
      <Paragraph>
        Lately I've been learning more about React and full-stack serverless web development on 
        AWS in my free time. Other than programming you can find me spending my free time playing 
        tennis, sim racing on iRacing, or still laughing at the latest <Link 
          href="https://ymhstudios.com/yourmomshouse/" target="_blank"
        >YMH episode</Link>.
      </Paragraph>
    </Content>
  )
}
