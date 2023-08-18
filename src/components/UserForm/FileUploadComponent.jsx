import React, { useRef } from 'react';
import {
  StyledAvatarContainer,
  StyledAvatarText,
  StyledAvatarWrapper,
  StyledBtnLink,
} from './UserForm.styled';
import { AddIconMediaSizes } from './Icons';
import useAuth from 'hooks/useAuth';

const FileUploadComponent = ({ handleFiles, fileListRef }) => {
  const { user } = useAuth();
  const fileInputRef = useRef(null);

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
        <AddIconMediaSizes />
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

export default FileUploadComponent;
