import Link from 'next/link';
import styled from 'styled-components';

interface NavbarItemProps {
    targetSection: string;
    label: string;
}


const NavbarItem: React.FC<NavbarItemProps> = ({ targetSection, label }) => {
    return (
        <li>
            <Link style={{
                textDecoration: "none",
                color: "white"
            }} href={`#${targetSection}`}>
                {label}
            </Link>
        </li>
    );
};

export default NavbarItem;