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
    border: 1px solid;
    border-radius: 50px;
    display: inline-flex;
    align-content: flex-start;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  #radio li:first-child {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding-left: 2px;
  }

  #radio li:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-right: 10px;
  }

  #radio li:not(:last-child) {
    border-right: 1px solid;
  }

  @media (max-width: 600px) {
    #radio .channel-name {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    #radio .channel-name {
      display: none;
    }
  }
`;
