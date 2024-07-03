// src/components/TopArtists.jsx
import React, { useState, useEffect } from "react";
import { fetchTopArtists, fetchArtistInfo } from "../services/LastFmServices";
import { fetchArtistImage } from "../services/MusicBrainzService";
import ArtistImage from "./ArtistImage";

const TopArtists = () => {
  const [artists, setArtists] = useState([]);
  const [artistInfo, setArtistInfo] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopArtists = async () => {
      try {
        const data = await fetchTopArtists();
        setArtists(data);
      } catch (error) {
        setError("Erro ao buscar top artistas.");
      } finally {
        setLoading(false);
      }
    };
    getTopArtists();
  }, []);

  const handleArtistClick = async (artistName) => {
    try {
      const info = await fetchArtistInfo(artistName);
      setArtistInfo(info);
      const imageUrl = await fetchArtistImage("Adele");
      setImageUrl(imageUrl);
    } catch (error) {
      setError("Erro ao buscar informações do artista.");
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Top Artistas</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.mbid} onClick={() => handleArtistClick(artist.name)}>
            {artist.name} - {artist.listeners} ouvintes
          </li>
        ))}
      </ul>
      {artistInfo && (
        <div>
          <h2>Informações do Artista</h2>
          <p>Nome: {artistInfo.name}</p>

          <ArtistImage artistName={`${artistInfo.name}`} />

          <p>URL: {artistInfo.url}</p>
          <p>Tags: {artistInfo.tags.tag.map((tag) => tag.name).join(", ")}</p>
          <p>Biografia: {artistInfo.bio.summary}</p>
        </div>
      )}
    </div>
  );
};

export default TopArtists;
