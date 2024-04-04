import React from 'react';
import { Link } from 'react-router-dom';
import { FrameGroup, ClickableWrapper, Div1, Container, Div2 } from './UsersStyles';

const AdditionalOptions = ({ options }) => (
  <FrameGroup>
    {options.map((option, index) => (
      <React.Fragment key={index}>
        <ClickableWrapper>
          <Link to={option.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Div1>{option.label}</Div1>
          </Link>
        </ClickableWrapper>
        {index < options.length - 1 && (
          <Container>
            <Div2>|</Div2>
          </Container>
        )}
      </React.Fragment>
    ))}
  </FrameGroup>
);

export default AdditionalOptions;
