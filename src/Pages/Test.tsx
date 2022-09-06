import React from 'react';

interface TestProps {
  name: string;
  age: number;
}

function Test({ age, name }: TestProps) {
  return (
    <div>
      Test라우트 페이지 입니다.
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}

export default Test;
