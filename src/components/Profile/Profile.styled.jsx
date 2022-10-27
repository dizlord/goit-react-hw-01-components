import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: ${p => p.theme.sizes[3]}px;;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[5]}px;
  text-align: center;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.card};
`;

export const Description = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const Avatar = styled.img`
  display: inline-block;
  margin-bottom: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.sizes[1]}px;;
  height: ${p => p.theme.sizes[1]}px;;
  background-color: ${p => p.theme.colors.img};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Location = styled(Tag)`
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StatsItem = styled.li`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
`;

export const Label = styled(Tag)`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;;
`;

export const Quantity = styled(UserName)`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[0]}px;
`;