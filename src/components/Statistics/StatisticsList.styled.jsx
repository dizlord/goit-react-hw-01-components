import styled from "@emotion/styled";

export const StatisticsItem = styled.li`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const StatisticsLabel = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
`;


export const StatisticsPercentage = styled.span`
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.white};
`;

