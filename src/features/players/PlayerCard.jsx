import React from "react";
import { Grid, Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const PlayerCard = ({ player, setSelectedPlayer, setShowModal }) => (
    // Use the player's ID as the key for this div
    <Grid item xs={12} md={6} lg={4} borderRadius={3} >
        <Box onClick={() => { setShowModal(true); setSelectedPlayer(player); }}>    
            <Card sx={{ width: { xs: "100%", md: "90%", lg: 350 } }}>
                {/* Display the player's image, with the player's name as alt text */} 
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <CardMedia image={player.imageUrl} alt={player.name} component="img" sx={{ height: "320px", width: { xs: 320, lg: 350 } }} />
                </Box>
                <CardContent >
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{player.name}</Typography> 
                    <Typography variant="body2" textAlign="center" marginBottom={1}><span style={{ color: "green"}}>Breed: </span>{player.breed}</Typography> 
                    <Typography variant="body2" textAlign="center" marginBottom={1}><span style={{ color: "blue"}}>Position: </span> {player.status}</Typography>
                </CardContent>
            </Card>
        </Box>
    </Grid>
);

export default PlayerCard;
