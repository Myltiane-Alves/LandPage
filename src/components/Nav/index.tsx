import React, { useCallback, useState } from 'react';
import  Link  from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileMenu from './Mobile';
import { Container, Content } from './styles';

export default function Nav() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const OpenMobileMenu = useCallback(() => {
      setMobileMenu(oldValue => !oldValue);
    }, []);


    return (
        <>
        <Container>
            <Content>
                <a href="#home" className="logo">
                     Healthy Food
                </a>

                <button className="mobileMenu" type="button" onClick={OpenMobileMenu}>
                <GiHamburgerMenu />
                </button>

                {mobileMenu && <MobileMenu openMobileMenu={OpenMobileMenu} />}
                <nav>
                    <ul>
                        <li>
                        <a href="#recipes">HEALTHY RECIPES</a>
                        </li>
                        <li>
                        <a href="#blog">BLOG</a>
                        </li>
                        <li>
                        <Link href="signin">JOIN</Link>
                        </li>
                        <li>
                        <Link href="signup">
                            <button type="button">REGISTER</button>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </Content>
        </Container>
        </>
    )
}
