import { css } from 'lit';

export const channelSelectorDropDown = css`
  #dropdown section,
  #dropdown ul,
  #dropdown li,
  #dropdown li > * #dropdown .selected-option {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }

  #dropdown section > div {
    width: 100%;
  }
`;
