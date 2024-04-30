import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Appbardesktop from "./appbardesktop";
import AppbarMobile from "./appbarmobile";

export default function Appbar(){
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down('md'))//Means for Mobile
    return(
        <>
        {matches?<AppbarMobile matches={matches} />:<Appbardesktop matches={matches}/>}
        </>
    )
}
