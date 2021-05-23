import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { IconVote } from "../IconVote";

const StyledListItem = styled.li`
  font-weight: "regular";
  display: flex;
  align-items: flex-start;
  background-color: var(--color-white);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  padding-left: 0rem;
  margin: 1rem 2rem;
`;

const StyledBadge = styled.div`
  background-color: var(--color-gray);
  color: var(--color-white);
  padding: 0.24em;
  border-radius: 50%;
  text-align: center;
  max-width: 1.2rem;
  min-width: 1.2rem;
  position: relative;
  top: 0.5rem;
  left: -0.5rem;
`;

const StyledWrapperIcon = styled.div`
  position: relative;
  top: 0.5rem;
  left: 2rem;
`;

const StyledTitle = styled.span`
  color: var(--color-black);
  font-size: var(--font-size-title);
`;

const StyledUrl = styled.span`
  color: var(--color-gray);
  font-size: var(--font-size-title);
`;

const StyledMetaData = styled.span`
  color: var(--color-gray);
  font-size: var(--font-size-subtitle);
`;

export const Item = ({
  title,
  position = 1,
  points = 0,
  timestamp,
  author = "anonymous",
  url,
  comments = 0,
}) => {
  return (
    <StyledListItem>
      <StyledBadge>{position}</StyledBadge>
      <div>
        <div>
          <StyledTitle>{title}</StyledTitle> <StyledUrl>({url})</StyledUrl>
        </div>
        <div>
          <StyledMetaData>
            {points} points by {author} {timestamp} | {comments} comments
          </StyledMetaData>
        </div>
      </div>
      <StyledWrapperIcon>
        <IconVote />
      </StyledWrapperIcon>
    </StyledListItem>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.number,
  points: PropTypes.number,
  timestamp: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string.isRequired,
};
