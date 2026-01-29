// Mock album and track data
export const albums = [
    {
        id: 1,
        title: "Bantu Kindoki",
        artist: "Kweffa3",
        artwork: "/album-1.png",
        price: 12,
        releaseDate: "2024",
        description: "A spiritual journey through Bantu mythology and modern consciousness. Featuring original compositions that blend ancestral rhythms with contemporary production.",
        credits: "Produced by Kweffa3 | Mixed by ObeahMan Studios | Artwork by Ngombongola Design",
        tracks: [
            {
                id: 1,
                title: "Mbumba",
                duration: "3:42",
                audioUrl: "/audio/bumba.m4a",
                price: 1
            },
            {
                id: 2,
                title: "Mvita Nzila Kongo",
                duration: "5:38",
                audioUrl: "/audio/mvita.mp3",
                price: 1.5
            }
        ]
    }
];

// Helper to get all tracks across all albums
export const getAllTracks = () => {
    return albums.flatMap(album =>
        album.tracks.map(track => ({
            ...track,
            album: album.title,
            artist: album.artist,
            artwork: album.artwork
        }))
    );
};

// Helper to find album by ID
export const getAlbumById = (id) => {
    return albums.find(album => album.id === parseInt(id));
};

// Helper to find track by ID
export const getTrackById = (id) => {
    const allTracks = getAllTracks();
    return allTracks.find(track => track.id === parseInt(id));
};
