import { Box } from '@mui/material';
import ProfileSelector from '@/components/Features/ProfileSelector';
import SurveySection from '@/components/Survey/Common/SurveySection';
import useSurveyUserStore from '@/store/useSurveyUserStore';

const Step7 = () => {
  const setPetInfo = useSurveyUserStore((state) => state.setPetInfo);

  const handleProfileChange = (imageData) => {
    setPetInfo({ profileImage: imageData?.file || null });
  };

  return (
    <SurveySection title="프로필 사진을 등록해주세요">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ProfileSelector defaultImage="dog" onChange={handleProfileChange} />
      </Box>
    </SurveySection>
  );
};

export default Step7;
