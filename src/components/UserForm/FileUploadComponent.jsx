import React from 'react';
import {
  StyledAvatarContainer,
  StyledAvatarText,
  StyledAvatarWrapper,
  StyledBtnLink,
} from './UserForm.styled';
import { AddIcon } from './Icons';
import useAuth from 'hooks/useAuth';

export const FileUploadComponent = ({
  handleFiles,
  fileInputRef,
  fileListRef,
}) => {
  const { user } = useAuth();
  const firstLetterUserName = user.name.charAt(0).toUpperCase();

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
        name="avatar"
      />
      <StyledBtnLink href="#" onClick={handleFileSelect}>
        <AddIcon color="#fff" size={8} />
      </StyledBtnLink>
      <StyledAvatarContainer id="fileList" ref={fileListRef}>
        {user.avatarURL ? (
          <img src={user.avatarURL} alt="avatar" />
        ) : (
          <StyledAvatarText>{firstLetterUserName}</StyledAvatarText>
        )}
      </StyledAvatarContainer>
    </StyledAvatarWrapper>
  );
};

export const createElement = event => {
  const files = event.target.files;

  const img = document.createElement('img');
  img.src = window.URL.createObjectURL(files[0]);
  img.height = 60;
  img.onload = function () {
    window.URL.revokeObjectURL(this.src);
  };

  return img;
};
