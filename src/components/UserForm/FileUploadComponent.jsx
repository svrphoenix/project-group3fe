import React from 'react';
import {
  StyledAvatarContainer,
  StyledAvatarText,
  StyledAvatarWrapper,
  StyledBtnLink,
} from './UserForm.styled';
import { AddIcon } from './AddIcon';

export const FileUploadComponent = ({
  handleFiles,
  fileInputRef,
  fileListRef,
}) => {
  //   const fileInputRef = useRef(null);
  //   const fileListRef = useRef(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <StyledAvatarWrapper>
      <input
        type="file"
        ref={fileInputRef}
        multiple
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFiles}
      />
      <StyledBtnLink href="#" onClick={handleFileSelect}>
        <AddIcon color="#fff" size={8} />
      </StyledBtnLink>
      <StyledAvatarContainer id="fileList" ref={fileListRef}>
        <StyledAvatarText>N</StyledAvatarText>
      </StyledAvatarContainer>
    </StyledAvatarWrapper>
  );
};

export const createElement = event => {
  const files = event.target.files;

  // if (!files.length) {
  //   fileListRef.current.innerHTML = '<p>No files selected!</p>';

  // const wrapp = document.createElement('div');

  const img = document.createElement('img');
  img.src = window.URL.createObjectURL(files[0]);
  img.height = 60;
  img.onload = function () {
    window.URL.revokeObjectURL(this.src);
  };
  // wrapp.appendChild(img);

  return img;
};
