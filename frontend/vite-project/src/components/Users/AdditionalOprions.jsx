import React from 'react';
import { Link } from 'react-router-dom';
import { FrameGroup, ClickableWrapper, Div1, Container, Div2 } from './UsersStyles';

const AdditionalOptions = ({ options }) => (
  <FrameGroup>
    {options.map((option, index) => (
      <React.Fragment key={index}>
        <ClickableWrapper>
          <Link to={option.path} style={{ textDecoration: 'none', color: 'inherit' }}> {/* 스타일은 링크의 기본 스타일을 오버라이드하기 위해 추가됩니다. */}
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
