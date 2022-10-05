import styled from 'styled-components';

export const TimelineComponent = styled.div`
    display: block;
`;

export const TimelineTitle = styled.h2`
    padding: 60px 0 20px 0;
    margin: 0 auto;
    text-align: center;
    display: block;
    color: #343333;
    font-size: 30px;
    font-family: 'Oswald', sans-serif;
`;

export const Item = styled.div`
    position: relative;
    &:before {
        background: #eee;
        content: "";
        height: 96%;
        right: 35px;
        position: absolute;
        top: 2%;
        width: 2px;
    }
`;

export const ItemBullet = styled.div`
    background: #fff;
    border: 5px solid #F62459;
    border-radius: 50%;
    height: 30px;
    right: 21px;
    display: inline-block;
    position: absolute;
    width: 30px;
    vertical-align: top;
`;

export const ItemContent = styled.div`
    display: inline-block;
    padding: 0 15px;
    margin-left: 15px;
    width: 88%;
`;

export const ItemTitleContainer = styled.div`
    background: #eee;
    display: block;
    margin: 0;
    padding: 10px;
    position: relative;
    border: none;

    :before {
        border-color: transparent transparent transparent #eee;
        border-image: none;
        border-style: solid;
        border-width: 10px;
        content: "";
        position: absolute;
        left: 100%;
        top: 5px;
    }
`;

export const ItemTitle = styled.h3`
    font-family: 'Oswald', sans-serif;
    color: #F62459;
    font-size: 18px
    font-weight: 500;
    line-height: 1.42;
    margin: 10px 0;
`;

export const ItemSubtitle = styled.span`
    font-family: 'Oswald', sans-serif;
    color: #F62459;
    font-size: 16px
    font-weight: 500;
    line-height: 1.42;
`;

export const ItemText = styled.ul`
    margin-top: 0;
    margin-bottom: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
`;



