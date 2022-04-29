import { css } from 'lit';

export const channelSelectorRadio = css`
  section#radio {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  #radio #selector-title {
    margin-right: 5px;
  }

  #radio ul {
    display: inline-block;
  }

  #radio ul {
    border-radius: 50px;
    display: inline-flex;
    align-content: flex-start;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  #radio li {
    border: 1px solid #fff;
  }

  #radio li:first-child {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding-left: 5px;
  }

  #radio li:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-right: 10px;
  }

  #radio li:not(:last-child) {
    border-right: none;
  }

  /* Demarcate when hovering next to selected channel */
  #radio li.selected + li:hover {
    border-left: 1px solid #2c2c2c !important;
  }

  #radio li:not(:last-child):hover + li.selected {
    border-left: 1px solid #2c2c2c !important;
  }
  /* End demarcation */
`;
