import { useRef, useState } from 'react';
import { Box, Button, DialogTitle, Dialog, DialogActions } from '@mui/material';
import { uploadImage } from '@/api/image';

const ProfileSelector = ({ defaultImage, image, onChange }) => {
  const defaultImgPath =
    defaultImage === 'human'
      ? '/images/default-groomer-profile.png'
      : '/images/default-dog-profile.png';

  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(image ? image : null);

  const handleOpenFileInput = () => {
    if (fileInputRef.current) fileInputRef.current.click();
    setOpen(false);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const res = await uploadImage(file);
      setSelectedImage(res);
      onChange(res);
    }
    setOpen(false);
  };

  return (
    <Box width="150px" margin="auto">
      <Box sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
        <img
          src={selectedImage ? selectedImage : defaultImgPath}
          width="150px"
          height="150px"
          alt={selectedImage}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            border: '5px solid',
            borderColor: '#FDD94E',
          }}
        />

        <img
          src="/images/upload-picture.png"
          width="34px"
          style={{ marginLeft: '-40px' }}
        />
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ maxWidth: '326px', m: 'auto' }}
        PaperProps={{ sx: { borderRadius: '10px' } }}
      >
        <DialogTitle
          id="alert-dialog-title"
          fontSize={16}
          fontWeight={700}
          textAlign="center"
          color="text.main"
          mt={2}
        >
          프로필 사진 설정
        </DialogTitle>
        <DialogActions>
          <Box width="100%" textAlign="center" mb={2} mx={2}>
            <Button
              onClick={() => {
                setOpen(false);
                setSelectedImage(defaultImgPath);
                onChange(defaultImgPath);
              }}
              color="n3"
              variant="contained"
              sx={{
                borderRadius: '10px',
                minHeight: '48px',
                minWidth: '100%',
                fontWeight: 700,
                color: 'text.main',
                mb: 2,
              }}
            >
              기본 사진 선택
            </Button>
            <Button
              onClick={handleOpenFileInput}
              autoFocus
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '10px',
                minWidth: '100%',
                minHeight: '48px',
                fontWeight: 700,
              }}
            >
              파일에서 선택
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

      <input
        ref={fileInputRef}
        accept="image/*"
        multiple
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default ProfileSelector;
