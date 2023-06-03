import React, { useState, useEffect } from "react";
import CustomText from "../CustomText";
//import pikachuGif from "../assets/images/pokemon/pikachu.gif";
import { useNavigate } from 'react-router-dom';


const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [backgroundSound, setBackgroundSound] = useState(null);

    useEffect(() => {
        const loadBackgroundSound = async () => {
            try {
                const sound = new Audio(require("../assets/sounds/background/opening.mp3"));
                sound.loop = true;
                await sound.play();
                setBackgroundSound(sound);
            } catch (error) {
                console.log("Error loading background sound:", error);
            }
        };

        loadBackgroundSound();

        return () => {
            if (backgroundSound) {
                backgroundSound.pause();
            }
        };
    }, []);


    const navigateTo = useNavigate();
    

    const handleLogin = () => {
        if (username) {
            navigateTo('/team-select', { username })

            if (backgroundSound) {
                backgroundSound.pause();
            }
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.top}>
                {/*<img src={pikachuGif} alt="Pikachu" />*/}
                <CustomText styles={styles.headerText}>Pokémon Battles</CustomText>
            </div>

            <div style={styles.main}>
                <CustomText styles={styles.label}>Enter username</CustomText>
                <input
                    type="text"
                    style={styles.textInput}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button onClick={handleLogin} style={styles.button}>
                    <CustomText styles={styles.buttonText}>Sign in</CustomText>
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        flex: 10,
        padding: 20,
        backgroundColor: "#FFF",
    },
    top: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
    },
    main: {
        flex: 6,
        justifyContent: "flex-start",
    },
    label: {
        fontSize: 16,
    },
    textInput: {
        height: 40,
        marginTop: 5,
        marginBottom: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: "#eaeaea",
        padding: 5,
    },
    button: {
        alignSelf: "center",
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "#05a5d1",
    },
};

export default LoginScreen;
