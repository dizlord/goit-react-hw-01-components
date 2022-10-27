import styled from "@emotion/styled";

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.tableHeadColor};
`;

export const HeadString = styled.tr`
`;

export const HeadColumn = styled.th`
  min-width: ${p => p.theme.sizes[3]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.xs};
  border-top-left-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
`;

export const TableBody = styled.tbody`
`;