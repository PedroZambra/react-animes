import styled from 'styled-components';

const AnimeContainer = styled.div`     
    width: 15rem;
    margin: 0.5rem;
`;

export default function Anime(props) {

    return(
        <AnimeContainer key={props.mal_id}>
            <h3>{props.title}</h3>
            <img src={props.image_url} alt=""/>
        </AnimeContainer>
    )
}