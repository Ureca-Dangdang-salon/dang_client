import { Box } from '@mui/material';
import SubTitle from '../atoms/SubTitle';
import SelectDogItem from '../atoms/SelectDogItem';
import useRequestStore from '@/store/useRequestStore';
import { useEffect, useState } from 'react';
import { getDogProfiles } from '@/api/request';
import usePageStore from '@/store/usePageStore';
import { services } from '@/constants/services';

const SelectDog = ({ title }) => {
  const { setDogStep } = usePageStore();
  const { requestInfo, setDogIndex } = useRequestStore();
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    getDogs();
  }, []);

  const getDogs = async () => {
    const list = await getDogProfiles();
    setDogList(list);
  };

  return (
    <div>
      <SubTitle title={title} />
      <Box mt={1}>
        {requestInfo.dogEstimateRequestList.map((e, idx) => {
          const dogData = dogList.find(
            (dog) => dog.dogProfileId === e.dogProfileId
          );
          const dogInfo = requestInfo.dogEstimateRequestList[idx];
          const servicesArray = Object.keys(services);
          const selectedServices = dogInfo.servicesOffered
            .map((id) => servicesArray[id - 1])
            .filter(Boolean)
            .join(', ');

          const desc = [
            dogInfo.healthIssue ? '질병' : '',
            dogInfo.aggression ? '공격성' : '',
            dogInfo.description,
          ]
            .filter(Boolean)
            .join(', ');

          return (
            <Box
              key={idx}
              onClick={() => {
                setDogIndex(idx);
                setDogStep(1);
              }}
              mb={4}
            >
              <SelectDogItem
                data={dogData}
                selectedServices={selectedServices}
                description={desc}
              />
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default SelectDog;
