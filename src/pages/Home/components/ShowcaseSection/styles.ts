import styled from "styled-components";

export const ShowcaseWrapper = styled.section`
  margin-top: 2rem;
`;

export const ShowcaseTitle = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.3;
  color: ${(props) => props.theme.base_subtitle};
  margin-bottom: 2.125rem;
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 40px 32px;
`;
