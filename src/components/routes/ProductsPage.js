import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, styled } from '@mui/material';
import bag_02 from './productsimage/bag_02.jpg'
import bag_03 from './productsimage/bag_03.jpg'
import bag_04 from './productsimage/bag_04.jpg'
const ProductCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const products = [
  {
    id: 1,
    name: "Super Backpack",
    price: 129.99,
    description: "A chic companion for your daily hustle, with spacious compartments and luxe detailing, perfect for work or play.",
    image: bag_02,
  },
  {
    id: 2,
    name: "New Hip",
    price: 199.99,
    description: " Effortlessly stylish and compact, this crossbody bag keeps your essentials close at hand with a modern urban flair.",
    image: bag_04,
  },
  {
    id: 3,
    name: "Elite Series",
    price: 189.99,
    description: "Travel in style with this sleek trolley featuring a combination of elegance and practicality, designed for your short escapes.",
    image: bag_03,
  },
  {
    id: 4,
    name: "Casual",
    price: 129.99,
    description: "Timeless and versatile, this messenger bag combines retro charm with modern functionality, ideal for the everyday commuter.",
    image: bag_02,
  },
  {
    id: 5,
    name: "Best Tote",
    price: 399.99,
    description: "Built to withstand any expedition, this rugged duffel offers ample storage and durability for your next outdoor escapade.",
    image: bag_04,
  },
  {
    id: 6,
    name: "Charming Series",
    price: 689.99,
    description: "Designed for the modern explorer, this versatile backpack offers a perfect blend of style and functionality, equipped with tech-friendly features for your on-the-go lifestyle.",
    image: bag_03,
  },
];

const Products = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Products
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductCard>
              <CardMedia component="img" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h5" component="h3">
                  {product.name}
                </Typography>
                <Typography variant="body1">${product.price}</Typography>
                <Typography variant="body2">{product.description}</Typography>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;