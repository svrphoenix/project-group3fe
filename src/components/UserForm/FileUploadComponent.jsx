import React, { useRef } from 'react';
import { StyledAvatarWrapper, StyledBtnLink } from './UserForm.styled';
import { AddIconMediaSizes } from './Icons';
import useAuth from 'hooks/useAuth';
import { StyledAvatar } from './StyledAvatar';

const FileUploadComponent = ({ handleFiles, fileListRef, userAvatarUrl }) => {
  const { user } = useAuth();
  const fileInputRef = useRef(null);

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
      <div id="fileList" ref={fileListRef}>
        <StyledAvatar alt={user.name} src={userAvatarUrl} />
      </div>
    </StyledAvatarWrapper>
  );
};

export default FileUploadComponent;
