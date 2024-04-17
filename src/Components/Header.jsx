import React from "react";
import {Layout, Breadcrumb} from 'antd';
import Contentdesc from "./HomeContent";
import Searchbar from "./Searchbar";

const {Header, Content} = Layout;

const Top = () => {
    return(
        <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>StructureStack</div>
        </Header>
        <Content style ={{background: '#ffffff'}}>
            <Contentdesc />
        </Content>
      </Layout>
    );
  }

export default Top;