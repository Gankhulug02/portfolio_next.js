import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  FavoriteBorderOutlined,
  MoreTimeOutlined,
  StarBorderRounded,
  AutoAwesomeMotionRounded,
} from '@mui/icons-material';
const currentYear = new Date().getFullYear();

const FunFacts = () => {
  const funFactsData = [
    {
      icon: (
        <FavoriteBorderOutlined sx={{ color: '#19A7CE', fontSize: '45px' }} />
      ),
      title: 'Happy Clients',
      details: 1,
    },
    {
      icon: <MoreTimeOutlined sx={{ color: '#19A7CE', fontSize: '45px' }} />,
      title: 'Working Year',
      details: currentYear - 2023,
    },
    {
      icon: <StarBorderRounded sx={{ color: '#19A7CE', fontSize: '45px' }} />,
      title: 'Awards Won',
      details: 1,
    },
    {
      icon: (
        <AutoAwesomeMotionRounded sx={{ color: '#19A7CE', fontSize: '45px' }} />
      ),
      title: 'Projects',
      details: 5,
    },
  ];
  return (
    <Box>
      <Box className="w-fit">
        <Typography variant="h5" sx={{ fontWeight: '500' }}>
          Fun Facts
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(4,4,4,0.1)',
          }}
        >
          <Box
            sx={{
              left: '0',
              width: '30%',
              height: '100%',
              backgroundColor: '#007fff',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          pt: 4,
          gap: '15px',
        }}
      >
        {funFactsData.map((e) => (
          <Box
            key={e.title}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '200px',
              border: '2px solid #e9e9e9',
              backgroundColor: 'white',
              borderRadius: '10px',
              '&:hover': {
                scale: '1.05',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {e.icon}
              <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                {e.title}
              </Typography>
              <Typography sx={{ fontSize: '40px', color: '#c9c9c9' }}>
                {e.details}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FunFacts;
