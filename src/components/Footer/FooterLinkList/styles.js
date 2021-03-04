import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SolutionsLinksContainer = styled.div`
    width: 32%;
    margin-top: 40px;
    
   @media only screen and (min-width: 768px) and (max-width: 1080px){
    width: 36%;
   }

`;

export const LinksContainer = styled.div`
    margin-top: 40px;

`;

export const ColMainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
   
`;

export const ColWrapper = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    

`;

export const FooterTitle = styled.p`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #fff;
    -webkit-font-smoothing: antialiased;
`;

export const FooterLink = styled.a`
    font-size: 14px;
    line-height: 40px;
    text-decoration: none;
    color: #B6B8C6;
    -webkit-font-smoothing: antialiased;
    
    &:hover span{
      border-bottom-color: #B6B8C6;
    }
    
    &::after{
      content: "WE'RE HIRING";
      font-weight: 500;
      font-size: 10px;
      line-height: 16px;
      text-transform: uppercase;
      color: #0C1142;
      background: #2BD4DB;
      border-radius: 4px;
      margin-left: 8px;
      padding: 4px;
      text-decoration: none;
    }
    
    &:hover:after{
      text-decoration: none;
    }
    
`;

export const LinkText = styled.span`
      border-bottom: 1px solid transparent;
      padding-bottom: 4px;
      transition: border-bottom-color .2s ease;
`;
