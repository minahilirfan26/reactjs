import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { useNavigate, Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const items1 = [
    {
        label: 'HOME',
        key: '/'
    },
    {
        label: 'ABOUT',
        key: '/about'
    },
    {
        label: 'PROFILE',
        key: '/profile'
    },
]
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: Array.from({ length: 4 }).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const AppLayout = ({children}) => {
    // console.log(props)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  let navigate = useNavigate()
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        {/* <Menu
        onClick={(data)=> navigate(data.key)}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
<div style={{display: "flex", gap: 10}}>
   <Link to={"/"}> <div style={{color: "white"}}>Home</div></Link>
    <Link to={"/about"}><div style={{color: "white"}}>About</div></Link>
    <Link to={'/profile'}><div style={{color: "white"}}>Profie</div></Link>
</div>

      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderInlineEnd: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AppLayout;