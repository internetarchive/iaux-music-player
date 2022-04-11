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
    background-color: red;
  }

  #dropdown .selected-option:hover {
    pointer: cursor;
    background-color: rebeccapurple;
  }

  #dropdown li,
  #dropdown .selected-option {
    height: 36px;
    border: 1px dotted aliceblue;
    width: 100%;
  }
`;
