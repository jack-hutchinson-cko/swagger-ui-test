import React from 'react';
import {
    Container,
    SolutionsLinksContainer,
    LinksContainer,
    ColMainWrapper,
    ColWrapper,
    FooterTitle,
    FooterLink,
    LinkText
} from './styles';

const FooterLinkList = ({links = []}) => {

    return (
        <Container>
            {links.map((link, i) => {
                if (i === 0) {
                    return (
                        <SolutionsLinksContainer key={i}>

                            <FooterTitle>{link.primary.title[0].text}</FooterTitle>
                            <ColMainWrapper>
                                <ColWrapper>
                                    {link.items.slice(0, link.items.length / 2 + 1).map((item, i) => (
                                        <FooterLink href={item.link_href[0].text}
                                                    labelHere={item.link_name[0].text === "Careers"} key={i}>
                                            <LinkText> {item.link_name[0].text} </LinkText>
                                        </FooterLink>
                                    ))}
                                </ColWrapper>

                                <ColWrapper className="solutions-second-col">
                                    {link.items.slice(link.items.length / 2 + 1, link.items.length).map((item, i) => (
                                        <FooterLink href={item.link_href[0].text}
                                                    labelHere={item.link_name[0].text === "Careers"} key={i}>
                                            <LinkText> {item.link_name[0].text} </LinkText>
                                        </FooterLink>
                                    ))}
                                </ColWrapper>
                            </ColMainWrapper>
                        </SolutionsLinksContainer>
                    )
                } else {
                    return (
                        <LinksContainer key={i}>

                            <FooterTitle>{link.primary.title[0].text}</FooterTitle>
                            <ColWrapper>
                                {link.items.map((item, i) => (
                                    <FooterLink href={item.link_href[0].text}
                                                labelHere={item.link_name[0].text === "Careers"} key={i}>
                                        <LinkText> {item.link_name[0].text} </LinkText>
                                    </FooterLink>
                                ))}
                            </ColWrapper>
                        </LinksContainer>
                    )
                }
            })}
        </Container>
    );
};

export default FooterLinkList;
