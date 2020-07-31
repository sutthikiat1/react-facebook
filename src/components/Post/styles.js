import styled, { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";

const bounceAnimation = keyframes`${bounceInUp}`;

export const DivPost = styled.div`
  animation: 1s ${bounceAnimation};
  border: 1px solid hsl(216, 8%, 88%);
  border-radius: 4px;
  max-width: 576px;
  height: 100%;
  margin: 20px auto;
  background: #ffffff;
  padding: 15px;
`;

export const ButtonDeletePost = styled.button`
  border: none;
  background: none;
  padding: 10px;
  float: right;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ImgPost = styled.img`
  width: 100%;
  margin-top: 15px;
  height: 500px;
`;
