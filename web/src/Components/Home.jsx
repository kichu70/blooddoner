import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import {
 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
 
  Typography,
} from "@mui/material";

const insta = () => {
  window.open("https://www.instagram.com", "_blank");
};

const getCurrentDate = () => {
  const today = new Date();
  return today.toLocaleDateString();
};

const Post = () => {
  
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader title="Blood Donation" subheader={getCurrentDate()} />
      <CardMedia
        component="img"
        height="20%"
        image="https://stanfordbloodcenter.org/wp-content/uploads/2020/06/Blood-facts_10-illustration-graphics__canteen.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Donating blood regularly can also benefit you in a few ways:
          <ul>
            <li>Reduces your risk of heart attack.</li>
            <li>Balances your iron levels.</li>
            <li>Reveals potential health issues.</li>
            <li>Lowers your risk of cancer.</li>
          </ul>
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share" onClick={insta}>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
