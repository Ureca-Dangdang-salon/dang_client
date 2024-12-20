import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/Common/Header/Header';
import { Box, Typography } from '@mui/material';
import Button from '@components/Common/Button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from '@components/Common/Carousel';
import WinnerProfile from '@components/Contest/WinnerProfile';
import paths from '@/routes/paths';
import { getGroomerProfileMainPage, getContestWinner } from '@/api/home';
import useUserStore from '@/store/useUserStore';
import Loading from '@components/Layout/Loading';
import HomeCouponBanner from './coupon/HomeCouponBanner';

const Home = () => {
  const { role } = useUserStore();
  const navigate = useNavigate();
  const [localGroomers, setLocalGroomers] = useState([]);
  const [popularGroomers, setPopularGroomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const lastMonth = (new Date().getMonth() || 12).toString().padStart(2, '0');
  const [winner, setWinner] = useState({
    name: '',
    profileImage: '',
    grommerProfileId: null,
  });

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };

  const localGroomersSliderRef = useRef(null);
  const popularGroomersSliderRef = useRef(null);

  const handlePrevSlide = (sliderRef) => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = (sliderRef) => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    getGroomerProfileMainPage().then((data) => {
      if (data) {
        setLocalGroomers(data.districtTopGroomers || []);
        setPopularGroomers(data.nationalTopGroomers || []);
      }
    });

    getContestWinner().then((data) => {
      if (data) {
        setWinner({
          name: data.post.dogName,
          profileImage: data.post.imageUrl || 'images/default-dog-profile.png',
          grommerProfileId: data.grommerProfileId,
        });
      }
    });

    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Header />
      <Box p={4} mb={3}>
        <Box textAlign="center">
          <Box textAlign="center" position="relative">
            <Typography fontWeight={700} fontSize={20} mb={0.5}>
              {`🏆️${lastMonth}월 콘테스트 우승자🏆️`}
            </Typography>
            <WinnerProfile
              name={winner.name}
              profileImage={winner.profileImage}
              showVotes={false}
            />
          </Box>
          <Typography
            fontSize={14}
            mb={1}
            sx={{
              borderRadius: '10px',
              textDecoration: 'underline',
              '&:hover': { cursor: 'pointer', color: 'secondary.main' },
            }}
            onClick={() => navigate(paths.contestResult)}
          >
            기타 순위 보러가기
          </Typography>
          <Button
            label="우승 미용사 프로필"
            backgroundColor="primary"
            size="medium"
            onClick={() =>
              navigate(
                paths.salonProfile.replace(':id', winner.grommerProfileId)
              )
            }
          />
        </Box>

        <Typography fontWeight="bold" mt={3} mb={1}>
          우리 동네 추천 반려견 미용사
        </Typography>
        <Box sx={{ position: 'relative', mb: 6 }}>
          <Box
            sx={{
              '& .slick-list': {
                overflow: 'hidden !important',
                padding: '5px',
              },
              '& .slick-slide': {
                padding: '0 12px',
              },
              '& .slick-dots': {
                position: 'absolute',
                bottom: '-30px',
                '& li': {
                  '& button:before': {
                    fontSize: 8,
                    color: '#n1.main',
                  },
                },
                '& li.slick-active button:before': {
                  color: 'primary.main',
                },
              },
            }}
          >
            <Slider ref={localGroomersSliderRef} {...sliderSettings}>
              {localGroomers.map((groomer, index) => (
                <CarouselCard
                  title={groomer.name}
                  subtitle={`${groomer.city} ${groomer.district}`}
                  key={index}
                  onClick={() =>
                    navigate(
                      paths.salonProfile.replace(':id', groomer.profileId)
                    )
                  }
                  imageUrl={groomer.imageKey}
                  defaultImage="/images/default-groomer-profile.png"
                  withSliderArrows={true}
                  onPrevClick={() => handlePrevSlide(localGroomersSliderRef)}
                  onNextClick={() => handleNextSlide(localGroomersSliderRef)}
                />
              ))}
            </Slider>
          </Box>
        </Box>

        {role === 'ROLE_USER' && <HomeCouponBanner />}

        <Typography fontWeight="bold" mt={3} mb={1}>
          전국 인기 반려견 미용사
        </Typography>
        <Box sx={{ position: 'relative', mb: 2 }}>
          <Box
            sx={{
              '& .slick-list': {
                overflow: 'hidden !important',
                padding: '5px',
              },
              '& .slick-slide': {
                padding: '0 12px',
              },
              '& .slick-dots': {
                position: 'absolute',
                bottom: '-30px',
                '& li': {
                  '& button:before': {
                    fontSize: 8,
                    color: '#n1.main',
                  },
                },
                '& li.slick-active button:before': {
                  color: 'primary.main',
                },
              },
            }}
          >
            <Slider ref={popularGroomersSliderRef} {...sliderSettings}>
              {popularGroomers.map((groomer, index) => (
                <CarouselCard
                  title={groomer.name}
                  subtitle={`${groomer.city} ${groomer.district}`}
                  key={index}
                  onClick={() =>
                    navigate(
                      paths.salonProfile.replace(':id', groomer.profileId)
                    )
                  }
                  imageUrl={groomer.imageKey}
                  defaultImage="/images/default-groomer-profile.png"
                  withSliderArrows={true}
                  onPrevClick={() => handlePrevSlide(popularGroomersSliderRef)}
                  onNextClick={() => handleNextSlide(popularGroomersSliderRef)}
                />
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
