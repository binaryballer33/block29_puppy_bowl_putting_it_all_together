import { Box, Modal, Typography, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

const PlayerModal = ({
    isOpen,
    setIsOpen,
	player: { name, breed, status, id, teamId, imageUrl },
}) => {
	return (
		<div>
			<Modal
				open={isOpen}
				onClose={() => setIsOpen(!isOpen)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Add this line
			>
                <Card sx={{ width: { sm: "50%", md: "50%", lg: 600 } }}>
                    {/* Display the player's image, with the player's name as alt text */} 
                    <Box sx={{ display: 'flex', justifyContent: "center" }}>
                        <CardMedia image={imageUrl} alt={name} component="img" sx={{ maxHeight: { xs: "300px", md: "600px", lg: "700px"}, width: "100%" }} />
                    </Box>
                    <CardContent >
                        <Typography variant="h5" fontWeight="bold" textAlign="center">{name}</Typography> 
                        <Typography variant="body2" textAlign="center" marginBottom={.5}><span style={{ color: "green"}}>Breed: </span>{breed}</Typography> 
                        <Typography variant="body2" textAlign="center" marginBottom={.5}><span style={{ color: "blue"}}>Position: </span> {status}</Typography>
                        <Typography variant="body2" textAlign="center" marginBottom={.5}><span style={{ color: "red"}}>Id: </span>{id}</Typography>
                        <Typography variant="body2" textAlign="center" marginBottom={.5}><span style={{ color: "purple"}}>Team Id: </span>{teamId}</Typography>
                    </CardContent>
                </Card>
			</Modal>
		</div>
	);
};

export default PlayerModal;
