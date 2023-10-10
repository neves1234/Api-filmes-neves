import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    background-color: #f7f7f7; 
    border-radius: 15px; 

    h1 {
        text-align: left;
        margin: 0 0 2rem 0;
        color: #333;
        font-size: 2em; 
    }
`;

export const MovieList = styled.ul`
    color: #333;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
`;

export const Movie = styled.li`
    border: 2px solid #000;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    img {
        margin: 0.2rem;
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 1rem;
        transition: transform 0.3s ease-in-out;
    }
    
    span {
        font-weight: bold;
        font-size: 1.2em;
        text-align: center;
        color: #555;
    }
    
    a {
        color: #0066FF;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
    }
    
    a:hover {
        color: #FF3300;
        transform: scale(1.05);
    }
`;

export const Btn = styled.button`
    margin-top: 1rem;
    padding: 0.7rem 3rem;
    border: 2px solid #000;
    border-radius: 15px;
    color: #000;
    background-color: #f0f0f0;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
        background-color: #ccc; 
        transform: translateY(-3px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;
