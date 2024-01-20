import React from "react";
import { Paper, TextField } from "@mui/material";

const SearchBar = ({ setSearchString }) => (
    <Paper sx={{ width: { xs: "100%", mediumLarge: "104%" } }} elevation={3}>
        <TextField sx={{ width: "100%" }} placeholder="Search For A Dog" onChange={(event) => setSearchString(event.target.value)} />
    </Paper>
);

export default SearchBar;
