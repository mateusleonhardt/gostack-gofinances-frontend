import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface UploadProps {
  isDragActive: boolean;
  isDragReject: boolean;
  refKey?: string;
  [key: string]: any;
  type?: 'error' | 'success' | 'default';
}

const dragActive = css`
  border-color: #50fa7b;
`;

const dragReject = css`
  border-color: #ff5555;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  border: 1.5px dashed #bd93f9;
  border-radius: 5px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragActive && dragActive}

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragReject && dragReject}
`;

const messageColors = {
  default: '#bd93f9',
  error: '#ff5555',
  success: '#50fa7b',
};

export const UploadMessage = styled.p`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 48px 0;

  color: ${({ type }: UploadProps) => messageColors[type || 'default']};

  justify-content: center;
  align-items: center;
`;
