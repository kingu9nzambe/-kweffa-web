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
                title: "Mokpel'a Nembongo (Intro)",
                duration: "1:24",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                price: 1
            },
            {
                id: 2,
                title: "Dragon Leopard Rising",
                duration: "3:45",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                price: 1.5
            },
            {
                id: 3,
                title: "Nguzu Mulongi",
                duration: "4:12",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                price: 1.5
            },
            {
                id: 4,
                title: "Kindoki Flow",
                duration: "3:33",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
                price: 1.5
            },
            {
                id: 5,
                title: "Regime Anthem",
                duration: "5:01",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
                price: 2
            }
        ]
    },
    {
        id: 2,
        title: "Decolonizing Sound",
        artist: "Kweffa3",
        artwork: null, // Will use gradient
        price: 10,
        releaseDate: "2023",
        description: "An artistic statement on reclaiming African sonic identity. Raw, unfiltered truth set to revolutionary beats.",
        credits: "All tracks written, produced, and performed by Kweffa3",
        tracks: [
            {
                id: 6,
                title: "Awakening",
                duration: "2:56",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
                price: 1
            },
            {
                id: 7,
                title: "Breaking Chains",
                duration: "4:23",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
                price: 1.5
            },
            {
                id: 8,
                title: "Ancestral Memory",
                duration: "3:47",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
                price: 1.5
            }
        ]
    },
    {
        id: 3,
        title: "Ngombongola Sessions",
        artist: "Kweffa3",
        artwork: null, // Will use gradient
        price: 8,
        releaseDate: "2024",
        description: "Live studio recordings capturing the raw energy of the Regime. Unpolished, authentic, powerful.",
        credits: "Recorded live at Ngombongola Studios, Kingston",
        tracks: [
            {
                id: 9,
                title: "Session 1: The Calling",
                duration: "6:12",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
                price: 1.5
            },
            {
                id: 10,
                title: "Session 2: Freestyle Riddim",
                duration: "4:45",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
                price: 1.5
            },
            {
                id: 11,
                title: "Session 3: Obeah Chant",
                duration: "5:33",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
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
