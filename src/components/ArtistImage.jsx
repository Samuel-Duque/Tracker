// src/components/ArtistImage.jsx
import React, { useState, useEffect } from "react";
import { fetchArtistImage } from "../services/SpotifyService";

const ArtistImage = ({ artistName }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getArtistImage = async () => {
      try {
        const image = await fetchArtistImage(artistName);
        setImageUrl(image);
      } catch (error) {
        setError("Erro ao buscar imagem do artista.");
      } finally {
        setLoading(false);
      }
    };
    getArtistImage();
  }, [artistName]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {imageUrl ? (
        <img src={imageUrl} alt={artistName} />
      ) : (
        <p>Imagem não disponível.</p>
      )}
    </>
  );
};

export default ArtistImage;
