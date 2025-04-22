import styled from "styled-components";

export const CommonInputWrapper = styled.div``;

export const CommonInputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const CommonInputInput = styled.input`
  width: 100%;
  min-height: 42px;
  border-radius: 4px;
  padding: 12px;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.base_text};
  background-color: ${(props) => props.theme.base_input};
  border: 1px solid ${(props) => props.theme.base_button};
  transition: border-color 150ms;

  &:focus {
    border-color: ${(props) => props.theme.brand_yellow_dark};
  }
  &::placeholder {
    color: ${(props) => props.theme.base_label};
  }
`;
