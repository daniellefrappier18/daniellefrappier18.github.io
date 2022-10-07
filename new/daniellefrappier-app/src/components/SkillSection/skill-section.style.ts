import styled from "styled-components";

export interface Props {
  level: number;
}

export const SkillSectionComponent = styled.div`
  display: block;
`;

export const SkillSectionTitle = styled.h2`
  padding: 60px 0 20px 0;
  margin: 0 auto;
  text-align: center;
  display: block;
  color: #343333;
  font-size: 30px;
  font-family: "Oswald", sans-serif;
`;

export const SkillSectionSubTitle = styled.h3`
  margin: 0 auto;
  text-align: center;
  display: block;
  color: #343333;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
`;

export const SkillText = styled.p`
  font-family: "Oswald", sans-serif;
  color: #343333;
  margin: 5px 0;
`;

export const SkillList = styled.div`
  width: 100%;
  background-color: #ccc;
  margin: 20px auto;
`;

export const SkillItem = styled.div<Props>`
  text-align: right;
  padding: 10px 20px;
  color: white;
  background-color: #F62459;

  ${(props) =>
    props.level === 10
      ? `
            width: 10%;
        `
      : props.level === 20
      ? `
            width: 20%;
        `
      : props.level === 30
      ? `
            width: 30%;
        `
      : props.level === 40
      ? `
            width: 40%;
        `
      : props.level === 50
      ? `
            width: 50%;
        `
      : props.level === 60
      ? `
            width: 60%;
        `
      : props.level === 70
      ? `
            width: 70%;
        `
      : props.level === 80
      ? `
            width: 80%;
        `
      : props.level === 90
      ? `
            width: 90%;
        `
      : props.level === 100
      ? `
            width: 100%;
        `
      : ``}
`;  
