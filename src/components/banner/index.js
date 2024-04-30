import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

export default function Banner(){
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down('md'))
    return(
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6"> Think of Aesthetic Bag Collections,Think of us✌</Typography>
                <BannerTitle variant="h2">
                    Trendy Bags
                </BannerTitle>
                <BannerDescription variant="body1">
                Wide Range of Bag Collections which is suitable for all and should make you to stand out among the crowd and will bring the real vide of you.
                </BannerDescription>
                <BannerShopButton color="primary" variant="contained">Shop Now</BannerShopButton>

            </BannerContent>
        </BannerContainer>
    )
}