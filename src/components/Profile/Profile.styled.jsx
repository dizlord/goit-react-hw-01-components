import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[5]}px;
  text-align: center;
  padding-top: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};
`;

export const Description = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const Avatar = styled.img`
  display: inline-block;
  margin-bottom: ${p => p.theme.space[5]}px;
  width: 100px;
  height: 100px;
  background-color: ${p => p.theme.colors.img};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.redii.round};
`;