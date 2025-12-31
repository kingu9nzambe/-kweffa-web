import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';

const MusicContext = createContext();

export const useMusic = () => {
    const context = useContext(MusicContext);
    if (!context) {
        throw new Error('useMusic must be used within MusicProvider');
    }
    return context;
};

export const MusicProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [queue, setQueue] = useState([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);

    const soundRef = useRef(null);
    const progressInterval = useRef(null);

    // Load and play a track
    const playTrack = (track) => {
        // If same track, just toggle play/pause
        if (currentTrack?.id === track.id) {
            togglePlayPause();
            return;
        }

        // Stop current sound
        if (soundRef.current) {
            soundRef.current.stop();
            soundRef.current.unload();
        }

        // Create new Howl instance
        const sound = new Howl({
            src: [track.audioUrl],
            html5: true,
            volume: volume,
            onload: function () {
                setDuration(sound.duration());
            },
            onplay: function () {
                setIsPlaying(true);
                // Update progress
                progressInterval.current = setInterval(() => {
                    setCurrentTime(sound.seek());
                }, 100);
            },
            onpause: function () {
                setIsPlaying(false);
                if (progressInterval.current) {
                    clearInterval(progressInterval.current);
                }
            },
            onend: function () {
                setIsPlaying(false);
                playNext();
            }
        });

        soundRef.current = sound;
        setCurrentTrack(track);
        sound.play();
    };

    // Toggle play/pause
    const togglePlayPause = () => {
        if (!soundRef.current) return;

        if (isPlaying) {
            soundRef.current.pause();
        } else {
            soundRef.current.play();
        }
    };

    // Play next track in queue
    const playNext = () => {
        if (queue.length === 0) return;

        const currentIndex = queue.findIndex(t => t.id === currentTrack?.id);
        const nextIndex = (currentIndex + 1) % queue.length;
        playTrack(queue[nextIndex]);
    };

    // Play previous track
    const playPrevious = () => {
        if (queue.length === 0) return;

        const currentIndex = queue.findIndex(t => t.id === currentTrack?.id);
        const prevIndex = currentIndex === 0 ? queue.length - 1 : currentIndex - 1;
        playTrack(queue[prevIndex]);
    };

    // Seek to position (0-1)
    const seekTo = (percentage) => {
        if (!soundRef.current) return;
        const seekTime = duration * percentage;
        soundRef.current.seek(seekTime);
        setCurrentTime(seekTime);
    };

    // Change volume (0-1)
    const changeVolume = (newVolume) => {
        setVolume(newVolume);
        if (soundRef.current) {
            soundRef.current.volume(newVolume);
        }
    };

    // Play album (set queue and play first track)
    const playAlbum = (tracks) => {
        setQueue(tracks);
        if (tracks.length > 0) {
            playTrack(tracks[0]);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (soundRef.current) {
                soundRef.current.stop();
                soundRef.current.unload();
            }
            if (progressInterval.current) {
                clearInterval(progressInterval.current);
            }
        };
    }, []);

    const value = {
        currentTrack,
        isPlaying,
        queue,
        currentTime,
        duration,
        volume,
        playTrack,
        togglePlayPause,
        playNext,
        playPrevious,
        seekTo,
        changeVolume,
        playAlbum
    };

    return (
        <MusicContext.Provider value={value}>
            {children}
        </MusicContext.Provider>
    );
};
