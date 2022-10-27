import styled from "@emotion/styled";

export const FriendsItem = styled.li`
  min-width: ${p => p.theme.sizes[2]}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.card};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Status = styled.span`
  display: block;
  width: ${p => p.theme.sizes[0]}px;
  height: ${p => p.theme.sizes[0]}px;
  background-color: ${p => { return p.isOnline ? p.theme.colors.green : p.theme.colors.red}};
  border-radius: ${p => p.theme.radii.round};
`;

export const FriendAvatar = styled.img`
  background-color: ${p => p.theme.colors.friendImg};
  border-radius: ${p => p.theme.radii.normal};
`;

export const FriendName = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
`;