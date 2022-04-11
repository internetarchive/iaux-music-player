import { css } from 'lit';

export const channelSelectorRadio = css`
  section#radio {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  #radio .ia.selected .channel-img,
  #radio .ia:hover .channel-img {
    filter: invert(1);
  }

  #radio .wa .channel-img {
    filter: invert(1);
  }

  #radio .wa.selected .channel-img webamp,
  #radio .wa:hover .channel-img {
    filter: unset;
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
  }

  #radio li:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
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
