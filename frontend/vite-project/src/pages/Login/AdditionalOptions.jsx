import React from 'react';
import { Link } from 'react-router-dom';
import { FrameGroup, Wrapper, Div1, Container, Div2 } from './LoginStyles.jsx';

// options 배열의 각 항목은 이제 label과 path를 포함하는 객체입니다.
const AdditionalOptions = ({ options }) => (
  <FrameGroup>
    {options.map((option, index) => (
      <React.Fragment key={index}>
        <Wrapper>
          <Link to={option.path} style={{ textDecoration: 'none', color: 'inherit' }}> {/* 스타일은 링크의 기본 스타일을 오버라이드하기 위해 추가됩니다. */}
            <Div1>{option.label}</Div1>
          </Link>
        </Wrapper>
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
