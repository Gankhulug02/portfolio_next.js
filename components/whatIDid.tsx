import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const WhatIDid = () => {
  const router = useRouter();
  const websitesData = [
    {
      link: 'https://skill-hive-one.vercel.app/',
      imagePath: '/images/skill-hive.png',
    },
    {
      link: 'https://valentine-phi-gray.vercel.app/',
      imagePath: '/images/valentine.png',
    },
    {
      link: 'https://azure-travel.vercel.app/',
      imagePath: '/images/travel.png',
    },
    {
      link: 'https://gankhulug02.github.io/Lessons/js/Calculator/',
      imagePath: '/images/calculator.png',
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <Box className="w-fit">
        <Typography variant="h5" sx={{ fontWeight: '500' }}>
          My Websites
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
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {websitesData.map((e) => {
          return (
            <Box
              key={e.link}
              sx={{
                width: { xs: '100%', sm: '300px' },
                aspectRatio: '16/9',
                backgroundColor: 'green',
                borderRadius: '15px',
                overflow: 'hidden',
                border: '1px solid grey',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (e.imagePath === '/images/skill-hive.png') {
                  alert(
                    'Хэрвээ алдаа (504 Gateway) гарвал 5 сек хүлээгээд дахин ороорй баярлалаа ;)'
                  );
                }
                router.push(e.link);
              }}
            >
              <Image
                height={1000}
                width={1000}
                alt={'asd'}
                src={e.imagePath}
                className="w-full h-full object-contain"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default WhatIDid;
