import { css } from 'lit';

export const channelSelectorRadio = css`
  section#radio {
    display: flex;
    flex-direction: row;
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
  #radio li:first-child ia-icon-label {
    margin-left: 5px;
  }

  #radio li:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-right: 10px;
    padding-left: 5px;
  }

  #radio li:last-child ia-icon-label {
    margin-right: 5px;
  }

  #radio li:not(:last-child) {
    border-right: none;
    padding-right: 5px;
    padding-left: 5px;
  }

  /* Demarcate when hovering next to selected channel */
  #radio li > ia-icon-label {
    height: 30px;
    padding: 5px;
    box-sizing: border-box;
  }
  /* End demarcation */
`;
