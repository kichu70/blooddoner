
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  
} from "@mui/material";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader title="Admin Page" sx={{ textAlign: "center" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", 
          gap: "20%", 
          padding: "0 16px",
          marginTop: "16px",
        }}
      >
        <Button
          variant="contained"
          color="error"
          component={Link}
          to="/admdonlist"
        >
          Donors list
        </Button>
        <Button
          variant="contained"
          color="error"
          component={Link}
          to="/admriqlist"
        >
          Request list
        </Button>
      </Box>
      <CardMedia
        component="img"
        height="20%"
        image="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-public-welfare-blood-donation-volunteer-rescue-image_11578.jpg"
        alt="Paella dish"
      />
      <CardContent></CardContent>
      <CardActions disableSpacing>
       
      </CardActions>
      
    </Card>
  );
};

export default Admin;
