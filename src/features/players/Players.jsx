import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Typography } from "@mui/material";
import { useGetPlayersQuery } from "../../api/puppyBowlApi";
import PlayerModal from "./PlayerModal";
import "../../index.css"
import CreatePlayerForm from "../../components/CreatePlayerForm";
import PlayerCard from "./PlayerCard";
import SearchBar from "../../components/SearchBar";


const Players = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchString, setSearchString] = useState("");
  const players = useSelector(state => state.players) 
  const { data } = useGetPlayersQuery();
  // const { data: player, error, isLoading } = selectedPlayer ? useGetPlayerQuery(selectedPlayer.id) : useGetPlayerQuery();
  
    
  useEffect(() => {
    setFilteredPlayers(players);
  }, [players]);
  
  useEffect(() => {
    setFilteredPlayers(players.filter((player) => player.name.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString]);

  return (
    <Box sx={{ display: { mediumLarge: "flex" }, justifyContent: "center"}}>
      <Box sx={{ mr: { xs: "0rem", md: "3rem" }, mt: { xs: "0rem", md: "1.5rem" }, maxWidth: { xs: "100%", md: "100%", lg: "30%" } }}>
        <Typography variant="h2" color="primary" mb={1} textAlign="center" sx={{ fontSize: { xs: "3rem", md: "3.75rem" } }}>My Dawgz</Typography>
        <SearchBar setSearchString={setSearchString} />
        <CreatePlayerForm />
      </Box>

      <Grid container spacing={2} mt={2} mb={2} sx={{ overflow: "scroll", maxHeight: "900px" }}>
        {/* Map through the data array and generate a div for each player */}
        {filteredPlayers.map((player) => (
          <PlayerCard player={player} setSelectedPlayer={setSelectedPlayer} setShowModal={setShowModal} key={player.id}/>
        ))}
      </Grid>
      {showModal && <PlayerModal isOpen={showModal} setIsOpen={setShowModal} player={selectedPlayer} />}
    </Box>
  );
};

// Export the component so it can be imported and used in other files
export default Players;
