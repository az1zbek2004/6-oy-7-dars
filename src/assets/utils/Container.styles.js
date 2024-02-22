import styled from 'styled-components';
import backgroundImage from '../image/Rectangle.png';

export const Body = styled.div`
    width: 100%;
    height: 800px;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: 50% 100%;
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 500px;
`;


export const Header = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Divade = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`;

export const UL = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 20px;
`;

export const Li = styled.li`
    font-size: 16px;
    color: #660E10;
    font-weight: 400;
    font-family: 'Playfair Display';
    transition: all 0.5s;
    cursor: pointer;
    &:hover{
        color: blue;
    }
`;

export const Button = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid #660E10;
    border-radius: 100px;
    background-color: #FFF;
    color: #660E10;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Playfair Display';
    transition: all 0.5s;
    cursor: pointer;
    &:hover{
        color: #FFF;
        background: #660E10;
    }
`;

export const Article = styled.article`
    margin-left: 55%;
    margin-top: 138px;
`;

export const Title = styled.h2`
    font-size: 55px;
    font-family: 'Playfair Display';
    color: #660E10;
    font-weight: 400;
    line-height: 66px;
`;

export const RedTitle = styled.span`
    font-weight: 700;
    color: #E14649;
`;

export const Desc = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-top: 25px;
    margin-bottom: 75px;
    color: #660E10;
`;

export const RedButton = styled(Button)`
    width: 200px; 
    height: 60px;
    color: #FFF;
    background: #E14649;
    border: none;
    font-size: 16px;
    font-weight: 400;
    &:hover{
        border: 1px solid #660E10;
        background: #FFF;
        color: #660E10;
    }
`;
