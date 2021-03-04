import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.2);
  color:  #0C1142;
`;

const Body = styled.div`
  padding-left: 10px;
`;

const Sidebar = ({ organizationConfig, ...rest }) => {
  return (
    <Container>
        <Body>
            <h3>API DOCS</h3>
            <ul>
                {Object.keys(organizationConfig.sources).map((item ,ind) => {
                  const link = organizationConfig.sources[item].path;
                  return <li key={ind}><a href={link}>{item}</a></li>
                })}
            </ul>
        </Body>
    </Container>
  )
}

export default Sidebar;