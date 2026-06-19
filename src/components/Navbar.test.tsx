import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    expect(screen.getByText('NextApp')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Funcionalidades')).toBeInTheDocument();
    expect(screen.getByText('Utilizadores')).toBeInTheDocument();
    expect(screen.queryByText('Screenshots')).not.toBeInTheDocument();
  });
});
