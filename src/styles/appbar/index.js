import { Box, IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import "@fontsource/montez"
//Container
export const AppbarContainer=styled(Box)(()=>({
    display:'flex',
    marginTop:4,
    justifyContent:'center',
    alignItems:'center',
    padding:'2px 8px'
}))
//header
export const AppbarHeader=styled(Typography)(()=>({
    padding:'4px',
    flexGrow:1,
    fontSize:'4em',
    fontFamily:'"Montez", "cursive',
    color:'Colors.secondary',
}))
export const MyList=styled(List)(({type})=>({
    display:type==='row'?'flex':'block',
    flexGrow:3,
    justifyContent:'center',
    alignItems:'center'
}))
export const ActionsIconsContainerDesktop=styled(Box)(()=>({
    flexGrow:0
}))
export const ActionIconsContainerMobile=styled(Box)(()=>({
    display:'flex',
    background:Colors.shaft,
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%',
    alignItems:'center',
    zIndex:99,
    borderTop:`1px solid${Colors.border}`
}))
export const DrawerCloseButton=styled(IconButton)(()=>({
    position:'absolute',
    top:10,
    left:'250px',
    zIndex:1999
}))