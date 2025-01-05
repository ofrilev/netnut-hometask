import React from "react";
import styled from "styled-components";

// Styled Components
const CheckboxWrapper = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  background-color: ${({ checked }) => (checked ? "#4b50e6" : "transparent")};
  border: 2px solid ${({ checked }) => (checked ? "#4b50e6" : "#d3d3d3")};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ checked }) => (checked ? "#4b50e6" : "#a0a0a0")};
  }
`;

const Checkmark = styled.div<{ visible: boolean }>`
  display: ${({ visible }: { visible: boolean }) =>
    visible ? "block" : "none"};
  width: 16px;
  height: 16px;
  background: white;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E")
    center / contain no-repeat;
`;

const Checkbox = (props: {checked: boolean }) => {
  const { checked } = props;
  return (
    <CheckboxWrapper checked={checked}>
      <Checkmark visible={checked} />
    </CheckboxWrapper>
  );
};

export default Checkbox;
