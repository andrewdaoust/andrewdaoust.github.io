import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Typography } from 'antd';

export function Nav(props) {
  const { current } = props;

  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key='home'>
          <Link to={`/`}>Home</Link>
        </Menu.Item>
        <Menu.Item key='resume'>
          <Link to={`/resume`}>Resume</Link>
        </Menu.Item>
        <Menu.Item key="rickroll">
          <Typography.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            Special Link
          </Typography.Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
