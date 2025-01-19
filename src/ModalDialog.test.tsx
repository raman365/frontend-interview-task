import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalDialog from './ModalDialog';
import React from 'react';

test('modal does not render when isOpen is false', () => {
  render(<ModalDialog isOpen={false} onClose={jest.fn()} title="Test Title">Modal Content</ModalDialog>);
  const modal = screen.queryByText('Test Title');
  expect(modal).not.toBeInTheDocument();
});

test('modal renders when isOpen is true', () => {
  render(<ModalDialog isOpen={true} onClose={jest.fn()} title="Test Title">Modal Content</ModalDialog>);
  const modal = screen.getByText('Test Title');
  expect(modal).toBeInTheDocument();
});

test('closes modal when close button is clicked', () => {
  const onCloseMock = jest.fn();
  render(<ModalDialog isOpen={true} onClose={onCloseMock} title="Test Title">Modal Content</ModalDialog>);
  
  const closeButton = screen.getByLabelText('Close modal');
  fireEvent.click(closeButton);
  expect(onCloseMock).toHaveBeenCalledTimes(1);
});
