import React from "react";
import {Avatar, Grid, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {routesItem} from "../../../routes/RoutesConfig";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from '@mui/icons-material/Send';
import OnlineUsersList from "./OnlineUsersList";
import ChatMessage from "./ChatMessage";
import ChatFooter from "./ChatFooter";

export default function ChatRoom() {
    const [open, setOpen] = React.useState(true);
    const handleList = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={5} sm={3} md={2}>
                   <OnlineUsersList userList={open}/>
                </Grid>
                <Grid xs={1} sm={1} md={1}>
                    <IconButton className="userMenuIcon" onClick={handleList} sx={{marginLeft: open ? "1px" : "-100px", position: "fixed"}}>
                        <MenuIcon/>
                    </IconButton>
                </Grid>
                <Grid item xs={6} sm={8} md={9} sx={{
                    display: 'flex',
                    flexDirection:"column",
                    justifyContent: "space-between"}}>
                    <Box sx={{ margin: "16px"}} dir="ltr">
                        <ChatMessage username="mohamamd" message=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." userImage="ajksdhfkjasdf"/>
                    </Box>
                    <ChatFooter  />
                </Grid>


            </Grid>

        </div>

    )
}