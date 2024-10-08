import {
    
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";


const RequestList = () => {
    const [req, setReq] = useState([]);
   

    useEffect(() => {
        axios
            .get("http://localhost:3004/viewrr")
            .then((res) => {
                setReq(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    
    return (
        <div style={{ margin: "2%" }}>
            <Typography variant="h5" component="h1" align="center" gutterBottom>
                Request list
            </Typography>
            <Grid container spacing={2}>
                {req.map((val) => (
                    <Grid item xs={12} md={4} key={val._id}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>
                                    Donor Details
                                </Typography>
                                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                    Name: {val.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Age: {val.age}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Blood Group: {val.blood}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Phone Number: {val.phone}
                                </Typography>
                                <Typography variant="body2">
                                    Email: {val.email}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button
                                    size="small"
                                    color="error"
                                    onClick={() => delValue(val._id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    size="small"
                                    onClick={() => updateValue(val)}
                                >
                                    Update
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default RequestList;
