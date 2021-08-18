import { Link } from 'wouter';
import styled from 'styled-components';

const AppHeader = styled.header`     
    text-align: center;
    height: 100px;
    line-height: 100px;
`;

export default function Header() {

    return(
        <AppHeader>
            <h1> 
                <Link to='/'> ANIMES </Link> 
            </h1>
        </AppHeader>
    )
}