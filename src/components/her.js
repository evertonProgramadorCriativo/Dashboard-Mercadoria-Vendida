import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Animação de pulso para os botões
const pulseButton = keyframes`
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.7);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 0 8px rgba(0, 212, 255, 0);
    transform: scale(1.02);
  }
`;

// Wrapper — estrutura base do header
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

/* Botão hambúrguer */
const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    height: 3px;
    width: 100%;
    background: var(--text-primary);
    border-radius: 4px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    right: 20px;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(8, 12, 24, 0.95);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

/* Botão pulsante genérico */
const PulsingButton = styled.button`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${pulseButton} 2s infinite;

  &:hover {
    transform: translateY(-2px);
    animation: none;
  }
`;

const LoginButton = styled(PulsingButton)`
  background: transparent;
  border: 1.5px solid var(--accent-cyan);
  color: var(--accent-cyan);

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    box-shadow: 0 0 12px rgba(0, 212, 255, 0.3);
  }
`;

const CadastroButton = styled(PulsingButton)`
  background: var(--accent-blue);
  border: none;
  color: white;

  &:hover {
    background: linear-gradient(135deg, var(--text-muted), var(--accent-cyan));
    box-shadow: 0 0 16px rgba(10, 131, 92, 0.4);
  }
`;

const AdminButton = styled(PulsingButton)`
  background: rgba(255, 59, 48, 0.15);
  border: 1.5px solid rgba(255, 59, 48, 0.6);
  color: #ff6b6b;
  animation-delay: 0.5s;

  &:hover {
    background: rgba(255, 59, 48, 0.25);
    border-color: #ff3b30;
    color: #ff8a8a;
    box-shadow: 0 0 12px rgba(255, 59, 48, 0.3);
  }
`;

const Badge = styled.div`
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--accent-cyan);
  background: rgba(0, 245, 196, 0.08);
  border: 1px solid rgba(0, 245, 196, 0.2);
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    alert("Login clicado - redirecionar para login");
    setIsOpen(false);
  };

  const handleCadastro = () => {
    alert("Cadastro clicado - redirecionar para cadastro");
    setIsOpen(false);
  };

  const handleAdmin = () => {
    alert("Área Admin clicada - redirecionar para admin");
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Logo>
        <div className="mark">CMV</div>
        <h1>Dashboard Analytics</h1>
      </Logo>

      {/* Botão Hambúrguer (Mobile) */}
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </HamburgerButton>

      {/* Menu */}
      <Right isOpen={isOpen}>
        <LoginButton onClick={handleLogin}>Login</LoginButton>
        <CadastroButton onClick={handleCadastro}>Cadastro</CadastroButton>
        <AdminButton onClick={handleAdmin}>Área Admin</AdminButton>
        <Badge>Nome da Empresa</Badge>
      </Right>
    </Wrapper>
  );
}

export default Header;
