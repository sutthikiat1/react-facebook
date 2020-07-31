import styled from "styled-components";

export const Divinput = styled.div`
  border: 1px solid hsl(216, 8%, 88%);
  border-radius: 4px;
  max-width: 576px;
  margin: 20px auto;
  background: #ffffff;
  position: relative;
`;

export const DivInputHeader = styled.div`
  background: #f5f6f7;
  border-bottom: 1px solid #dddfe2;
  border-radius: 2px 2px 0 0;
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: space-around;

  div {
    flex: 1 1 250px;
  }

  .Button__language {
    text-align: right;
    button {
      background-color: #ffffff;
      padding: 5px;
      border: 1px solid #e1e1e1;
      &:focus {
        outline: none;
      }
    }
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background: #ffffff;
  border: none;
  text-indent: 15%;

  border-radius: 4px;
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    text-indent: 20%;
  }
`;

export const ImgProfile = styled.img`
  width: 10%;
  border-radius: 50%;
  position: absolute;
  left: 3%;
  top: 75px;

  @media (max-width: 767px) {
    top: 80px;
    width: 15%;
  }
`;

export const DivButtonPost = styled.div`
  padding: 10px;
  text-align: center;

  button {
    width: 100%;
    height: 30px;
    background-color: ${(props) =>
      props.input !== "" ? "#4267b2" : "#9cb4d8"};
    border-radius: 4px;
    border: none;
    color: #ffffff;
    &:focus {
      outline: none;
    }
  }
`;
