import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwaggerUI from 'swagger-ui';
import data from '../organization_config.js';
import Footer from '../Footer/component'
import Sidebar from '../Sidebar/component'
import '../../../node_modules/swagger-ui/dist/swagger-ui.css'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Body = styled.div`
  width: 90vw;
  padding-left: 30px;
  padding-top: 30px;
  overflow-y: scroll;
`;

const Header = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: whitesmoke;
  background-color: #0C1142;
  border-bottom: 5px solid #6D708E;
`;
  
const Heading = styled.h1`
  margin: 0;
  font-size: 36pt;
`;


const App = () => {
  const [definitionLink, setDefinitionLink] = useState<string>('https://petstore.swagger.io/v2/swagger.json');
  const [definitionList, setDefinitionList] = useState(null);
  const [organizationConfig, setOrganizationConfig] = useState(data.orgData);

  useEffect(() => {
    setDefinitionLink(data.orgData.sources[window.location.pathname.slice(1)].link);

    SwaggerUI({
      domNode: document.getElementById("api-data"),
      url: definitionLink
    })
  }, [definitionLink, window.location.pathname])


const swaggerhub = (inputMethod, inputResource, inputParams) => {
  let url = ""
  if (inputParams) {
    url = "https://api.swaggerhub.com/apis/" + inputResource + "?" + inputParams
  } else {
    url = "https://api.swaggerhub.com/apis/" + inputResource
  }
  
  return fetch(url, {
      method: inputMethod
  }).then(response => {
    if (response.ok) {
      return response.json()
    } throw new Error('There was an issue requesting the API')
  }).then(json => {
    return json
  })
}

const getOrganizationData = (organization) => {
  let inputParams = "page=0&limit=20&sort=NAME&order=ASC"
  let inputResource = organization;

  swaggerhub('GET', inputResource, inputParams).then(response => {
    setDefinitionLink(response.apis);
  })
}

  return (
    <>
     <Header>
          <Heading>{organizationConfig.displayName}</Heading>
      </Header>
      <Container>
        <Sidebar 
            organizationConfig={organizationConfig}
            definitionList={definitionList}
            getOrganizationData={getOrganizationData}
          />
        <Body id="api-data" />
      </Container>
      <Footer />
    </>
  );
}

export default App;
