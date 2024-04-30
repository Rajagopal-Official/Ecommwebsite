import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Box } from '@mui/system';
import { Typography } from '@mui/material';

const CategoriesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const CategoriesHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const CategoriesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: theme.spacing(2),
}));

const CategoryLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
}));

const Categories = () => {
  const categories = [
    'Backpacks',
    'Handbags',
    'Tote Bags',
    'Messenger Bags',
    'Luggage',
    'Wallets',
  ];

  return (
    <CategoriesContainer>
      <CategoriesHeading variant="h5">Categories</CategoriesHeading>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryLink
            key={index}
            to={`/category/${category.toLowerCase().replace(' ', '-')}`}
          >
            {category}
          </CategoryLink>
        ))}
      </CategoriesGrid>
    </CategoriesContainer>
  );
};

export default Categories;