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

  #dropdown li:hover {
    pointer: cursor;
    background-color: #fff;
    color: #2c2c2c;
  }

  #dropdown .selected-option:hover {
    pointer: cursor;
  }

  #dropdown li {
    height: 36px;
    width: 100%;
    background-color: #222;
  }
`;
