import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GridItem = styled.div`
    width: 100%;
    display: flex;
`;

export const Title = styled.p`
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    color: #ffffff;
    width: 20%;
`;

export const Description = styled.div`
    font-size: 10px;
    line-height: 18px;
    color: #B6B8C6;
    margin-top: 16px;
    width: 30%;
`;

export const WrapperItems = styled.div`
    text-align: right;
    width: 80%;
    display: flex;
    justify-content: flex-end;
`;

export const LinkItem = styled.a`
    font-size: 11px;
    line-height: 16px;
    color: #B6B8C6;
    text-decoration: none;
    padding-left: 40px;
    text-align: center;
    
    &:first-child{
      padding-left: 0;
    }

    
    &:hover{
    	text-decoration: underline;
    }
`;

export const WrapperLogos = styled.div`
    text-align: right;
    margin-top: 16px;
    width: 70%;
    
    a {
      padding-left: 24px;
    }
    
    svg * {
      fill: #B6B8C6;
    } 
`;
