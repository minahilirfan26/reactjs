import React, { useState } from 'react';
import { auth, signOut } from '../config/firebase';
import Logo from '../assets/img/logo.jpg'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const AppLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  let LogOut = ()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Sign-out successful.")
}).catch((error) => {
  // An error happened.
  console.log("An error happened")
});
  }
  const navigate = useNavigate()
  return (
    <Layout style={{width: "100%", height: "100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >
            <img style={{height: "100px", width: "100%"}} src={collapsed ? "https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj" : Logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
             {
              key: '4',
              icon: <UserOutlined />,
              label: 'User',
              onClick: ()=> navigate('/user')
            },
            {
              key: '5',
              icon: <LoginOutlined />,
              label: 'Logout',
              onClick: ()=> LogOut()
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;