import React from 'react';
import { Container, GridItem, Title, Description, WrapperItems, LinkItem, WrapperLogos } from './styles';
import Facebook from '../social/Facebook';
import Twitter from '../social/Twitter';
import Instagram from '../social/Instagram';
import YouTube from '../social/YouTube';
import RSS from '../social/RSS';
import LinkedIn from '../social/LinkedIn';
import Glassdoor from '../social/Glassdoor';

const SubFooter = ({}) => {
  return (
    <Container>
      <GridItem>
        <Title>© 2021 Checkout.com</Title>
        <WrapperItems>
          <LinkItem href="/legal/terms-and-policies">
            Terms & Policies
          </LinkItem>
          <LinkItem href="/legal/privacy-policy">
            Privacy policy
          </LinkItem>
          <LinkItem href="/legal/certificates">
            Certificates
          </LinkItem>
          <LinkItem href="/legal/cookie-policy">
            Cookie Policy
          </LinkItem>
          <LinkItem href="/legal/disclaimer">
            Disclaimer
          </LinkItem>
          <LinkItem href="/static/Modern_Slavery_Statement_v03.pdf">
            Modern Slavery Statement
          </LinkItem>
          <LinkItem href="/static/2019_Supplier_Code_of_Conduct.pdf">
            Supplier Code of Conduct
          </LinkItem>
        </WrapperItems>

      </GridItem>
      <GridItem>
        <Description>Authorised and regulated as an electronic money institution by the UK Financial Conduct
          Authority under number 900816.</Description>
        <WrapperLogos>
          <a href="https://www.facebook.com/checkout/" target="_blank" rel="noopener noreferrer">
            <Facebook/>
          </a>
          <a href="https://twitter.com/checkout" target="_blank" rel="noopener noreferrer">
            <Twitter/>
          </a>
          <a href="https://www.instagram.com/checkout_com/" target="_blank" rel="noopener noreferrer">
            <Instagram/>
          </a>
          <a href="https://www.youtube.com/channel/UCC-VFhOEXmyaOekIOwZvxhg" target="_blank" rel="noopener noreferrer">
            <YouTube/>
          </a>
          <a href="https://www.glassdoor.co.uk/Overview/Working-at-Checkout-com-EI_IE837487.11,23.htm" target="_blank"
             rel="noopener noreferrer">
            <Glassdoor/>
          </a>
          <a href="https://www.checkout.com/blog" target="_blank">
            <RSS/>
          </a>
          <a href="https://www.linkedin.com/company/checkout/" target="_blank" rel="noopener noreferrer">
            <LinkedIn/>
          </a>
        </WrapperLogos>

      </GridItem>
    </Container>
  );
};

export default SubFooter;
