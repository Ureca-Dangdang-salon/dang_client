import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import paths from './paths';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Notification from '@/pages/Notification';
import Contest from '@/pages/Contest';
import Chat from '@/pages/Chat';
import Mypage from '@/pages/mypage/Mypage';
import NewRequest from '@/pages/NewRequest';
import { Navbar } from '@components/Common/Navbar/Navbar';
import { Box } from '@mui/material';
import EditSocialProfile from '@/pages/mypage/EditSocialProfile';
import DogProfile from '@/pages/mypage/DogProfile';
import EditSalonProfile from '@/pages/mypage/EditSalonProfile';
import PaymentHistory from '@/pages/mypage/PaymentHistory';
import SalonProfile from '@/pages/SalonProfile';
import NewReview from '@/pages/NewReview';
import MyCoupons from '@/pages/mypage/MyCoupons';
import MyReviews from '@/pages/mypage/MyReviews';
import EditEstimate from '@/pages/estimate/EditEstimate';
import NewEstimate from '@/pages/estimate/NewEstimate';
import RequestHistory from '@/pages/mypage/RequestHistory';
import RequestHistoryDetail from '@/pages/mypage/RequestHistoryDetail';
import ContestResult from '@/pages/ContestResult';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <Box
      width="500px"
      minHeight="100vh"
      m="auto"
      borderColor="n4.main"
      sx={{
        boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box paddingBottom="80px">
        <Routes>
          <Route path={paths.login} element={<Login />} />

          <Route path={paths.home} element={<Home />} />
          <Route path={paths.contest} element={<Contest />} />
          <Route path={paths.notification} element={<Notification />} />
          <Route path={paths.chat} element={<Chat />} />
          <Route path={paths.mypage} element={<Mypage role="salon" />} />
          <Route path={paths.newRequest} element={<NewRequest />} />
          <Route path={paths.newReview} element={<NewReview />} />
          <Route path={paths.estimate} element={<NewEstimate />} />
          <Route path={paths.editEstimate} element={<EditEstimate />} />
          <Route path={paths.contestResult} element={<ContestResult />} />

          <Route
            path={paths.editSocialProfile}
            element={<EditSocialProfile />}
          />
          <Route path={paths.editSalonProfile} element={<EditSalonProfile />} />
          <Route path={paths.dogProfile} element={<DogProfile />} />
          <Route path={paths.salonProfile} element={<SalonProfile />} />
          <Route path={paths.paymentHistory} element={<PaymentHistory />} />
          <Route path={paths.myCoupons} element={<MyCoupons />} />
          <Route path={paths.myReviews} element={<MyReviews role="salon" />} />
          <Route path={paths.requestHistory} element={<RequestHistory />} />
          <Route
            path={paths.requestHistoryDetail}
            element={<RequestHistoryDetail />}
          />
        </Routes>
      </Box>

      {!location.pathname.endsWith(paths.login) && (
        <Navbar page={location.pathname} />
      )}
    </Box>
  );
};

export default AppRoutes;
