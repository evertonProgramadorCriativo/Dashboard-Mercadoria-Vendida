import React from "react";
import styled from "styled-components";

// Header
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  border-bottom: 1px solid var(--border);
  background: rgba(8, 12, 24, 0.85);
  backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .mark {
    width: 36px;
    height: 36px;
    background: var(--accent-cyan);
    border-radius: 8px;
    display: grid;
    place-items: center;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--bg-primary);
  }

  h1 {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Logo>
        <div className="mark">CMV</div>
        <h1>Dashboard Analytics </h1>
      </Logo>
    </Wrapper>
  );
}

export default Header;
