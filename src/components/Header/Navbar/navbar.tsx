import { useEffect } from 'react';
import NavbarItem from '../Item/navItem';
import styled from 'styled-components';

const TagUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
`

const Navbar: React.FC = () => {
    useEffect(() => {
        const smoothScroll = (targetId: string) => {
            const targetSection = document.getElementById(targetId);
    
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth',
                });
            }
        };
    
        document.querySelectorAll('nav a').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const hrefAttribute = link.getAttribute('href');
                const targetId = hrefAttribute ? hrefAttribute.substring(1) : '';
                
                smoothScroll(targetId);
            });
        });
    }, []);
    return (
        <nav>
            <TagUl>
                <NavbarItem targetSection="/" label="Sobre" />
                <NavbarItem targetSection="section1" label="PC TOP" />
                <NavbarItem targetSection="section2" label="PC + OU -" />
                <NavbarItem targetSection="section3" label="PC da Crise" />
            </TagUl>
        </nav>
    );
};

export default Navbar;