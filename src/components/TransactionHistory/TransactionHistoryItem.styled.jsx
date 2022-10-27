import styled from "@emotion/styled";

export const TableRow = styled.tr`
  background-color: ${p => {return p.count % 2 === 0 ? p.theme.colors.gray : p.theme.colors.white}};
`;

export const TableColumn = styled.td`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.tableColumnColor};
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: capitalize;
`;