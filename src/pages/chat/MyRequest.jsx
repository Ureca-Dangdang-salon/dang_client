import { Box } from '@mui/material';
import MyRequestItem from '@components/Chatting/atoms/MyRequestItem';
import { DetailHeader } from '@components/Common/DetailHeader/DetailHeader';
import { useState, useEffect } from 'react';
import { getRequestMy } from '@/api/chat';
import EmptyContent from '@components/Layout/EmptyContent';
import Loading from '@components/Layout/Loading';

const MyRequest = () => {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    const res = await getRequestMy();
    setList(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) return <Loading />;

  return (
    <Box>
      <DetailHeader label="내 견적 요청" />
      <Box p={4}>
        <Box display="flex" flexDirection="column" alignItems="center">
          {list?.length > 0 ? (
            [...list]
              .reverse()
              .map((e, idx) => (
                <MyRequestItem key={idx} data={e} fetchList={fetchList} />
              ))
          ) : (
            <EmptyContent title="요청 내역이 없습니다." />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MyRequest;
