import React, { useState } from "react";
import {
	Box,
	Paper,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
    Button, Typography
} from "@mui/material";
import { useCreatePlayerMutation } from "../api/puppyBowlApi";

export default function CreatePlayerForm() {
    const [formData, setFormData] = useState({ name: "", breed: "", imageUrl: "" });
    const [createPlayer, response] = useCreatePlayerMutation(); 
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const result = await createPlayer(formData).unwrap(); // using post request from redux toolkit query
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        document.location.href = "/";
    }

    const handleRandomDog = async () => {
        setFormData({ 
            name: "ShaqsDawg",
            breed: "Golden Retriever",
            imageUrl: "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww"
        })
    }

    const handleClearForm = () => {
        setFormData({ name: "", breed: "", imageUrl: "" });
    }

	return (
		<Paper
			component="form"
			sx={{ p: 2, mt: 2, display: "flex", flexDirection: "column", gap: 2, maxWidth: { xs: "95%", md: "100%", lg: "93%" }, minWidth: { md: "93%" } }}
            elevation={3}
            onSubmit={handleSubmit}
		>
            <Typography textAlign="center" variant="h4" color="primary">Add A Dog</Typography>
			<TextField id="name" label="Name" required value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})}/>
			<TextField id="image" label="Image" value={formData.imageUrl} onChange={(event) => setFormData({...formData, imageUrl: event.target.value})}/>
			<FormControl fullWidth>
				<InputLabel id="breed-label">Breed</InputLabel>
				<Select
					labelId="breed-label"
					id="breed"
					value={formData.breed}
					label="Breed"
                    onChange={(event) => setFormData({...formData, breed: event.target.value})}
				>
					<MenuItem value="German Shepherd">German Shepherd</MenuItem>
					<MenuItem value="Collie">Collie</MenuItem>
					<MenuItem value="Jack Russel">Jack Russel</MenuItem>
					<MenuItem value="Golden Retriever">Golden Retriever</MenuItem>
					<MenuItem value="Miniature Poodle / Shih Tz">Miniature Poodle / Shih Tzu</MenuItem>
					<MenuItem value="Poddle">Poodle</MenuItem>
					<MenuItem value="Husky">Husky</MenuItem>
				</Select>
			</FormControl>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, placeItems: { xs: "center", md: "normal" }, justifyContent: { md: "center" } }} gap={1}>
                <Button variant="contained" color="primary" sx={{ width: {  xs: "100%", md: "30%" } }} onClick={handleRandomDog}>Shaq's Dog</Button>
                <Button variant="contained" color="primary" type="submit" sx={{ width: {  xs: "100%", md: "30%" } }}>Submit</Button>
                <Button variant="contained" color="primary" sx={{ width: {  xs: "100%", md: "30%" } }} onClick={handleClearForm}>Clear Form</Button>
            </Box>
		</Paper>
	);
}
