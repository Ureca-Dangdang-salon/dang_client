import { Box, Card, Typography, Avatar } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const SelectDogItem = ({ data, selectedServices, description, price }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        mb: 1,
        borderRadius: 3,
        boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Avatar
            src={data?.profileImage}
            sx={{
              bgcolor: 'p4.main',
              width: 64,
              height: 64,
            }}
          />
          <Typography variant="body2">{data?.name}</Typography>
        </Box>
        <Box>
          <TextBox
            title="서비스 선택"
            contnet={selectedServices}
            placeholder="서비스를 선택해주세요."
          />
          <TextBox title="특이사항" contnet={description} placeholder="없음" />
          {price && (
            <TextBox
              title="금액"
              contnet={price && price + ' 원'}
              placeholder="견적서를 작성해주세요."
            />
          )}
        </Box>
      </Box>
      <Box>
        <ArrowForwardIosRoundedIcon sx={{ color: 'n2.main' }} />
      </Box>
    </Card>
  );
};

const TextBox = ({ title, contnet, placeholder }) => {
  return (
    <Box fontSize="14px">
      {title}:{' '}
      {contnet || (
        <Typography sx={{ color: 'n2.main', display: 'inline' }}>
          {placeholder}
        </Typography>
      )}
    </Box>
  );
};

export default SelectDogItem;