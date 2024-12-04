import { Box, Typography } from '@mui/material';
import RadioButton from '@/components/Common/RadioButton/RadioButton';
import SurveySection from '@/components/Survey/Common/SurveySection';
import useSurveyUserStore from '@/store/useSurveyUserStore';

const Step5 = () => {
  const { petInfo, setPetInfo } = useSurveyUserStore();

  return (
    <SurveySection title="반려견은 어떤 성별인가요?">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Box>
          <Typography sx={{ mb: 2 }}>성별</Typography>
          <Box sx={{ display: 'flex', gap: '12px' }}>
            <RadioButton
              label="남아"
              selected={petInfo.gender === 'MALE'}
              onChange={() => setPetInfo({ gender: 'MALE' })}
              size="large"
            />
            <RadioButton
              label="여아"
              selected={petInfo.gender === 'FEMALE'}
              onChange={() => setPetInfo({ gender: 'FEMALE' })}
              size="large"
            />
          </Box>
        </Box>

        <Box>
          <Typography sx={{ mb: 2 }}>중성화 여부</Typography>
          <Box sx={{ display: 'flex', gap: '12px' }}>
            <RadioButton
              label="중성화 했어요."
              selected={petInfo.neutered === 'Y'}
              onChange={() =>
                setPetInfo({ neutered: petInfo.neutered === 'Y' ? 'N' : 'Y' })
              }
              size="large"
            />
          </Box>
        </Box>
      </Box>
    </SurveySection>
  );
};

export default Step5;
