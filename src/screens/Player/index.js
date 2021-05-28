import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ChevronIcon } from "../../../assets/icons/Chevron";
import { MoreVertIcon } from "../../../assets/icons/MoreVert";
import { LinearGradient } from "expo-linear-gradient";
import { PlayIcon } from "../../../assets/icons/Play";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
    TopBar,
    ScreenArea,
    CoverArea,
    InfoArea,
    ControlsArea,
    AudioSlider,
} from "./styles";
import { Flex } from "../default-styles";
import {
    BLACK_LIGHT,
    DARK_BLUE,
    PLAYER_CIRCLE,
    SECONDARY_COLOR,
    WHITE,
} from "../colors";

const gradientColors = [DARK_BLUE, BLACK_LIGHT];

const Player = () => {
    const [time, setTime] = useState(0);

    const onChangeTime = (value) => {
        setTime(value);
    };

    return (
        <Flex>
            <LinearGradient
                colors={gradientColors}
                style={styles.linearGradient}
            >
                <TopBar>
                    <TopBar.Left>
                        <ChevronIcon />
                    </TopBar.Left>
                    <TopBar.Middle>
                        <TopBar.Title>Tocando da playlist</TopBar.Title>
                        <TopBar.Subtitle>This is AC/DC</TopBar.Subtitle>
                    </TopBar.Middle>
                    <TopBar.Right>
                        <MoreVertIcon />
                    </TopBar.Right>
                </TopBar>
                <ScreenArea>
                    <CoverArea>
                        <CoverArea.Image
                            resizeMode="contain"
                            source={require("../../../assets/acdc.jpeg")}
                        />
                    </CoverArea>
                    <InfoArea>
                        <InfoArea.Title>Thunderstruck</InfoArea.Title>
                        <InfoArea.Subtitle>AC/DC</InfoArea.Subtitle>
                    </InfoArea>
                    <ControlsArea>
                        <ControlsArea.Slider>
                            <AudioSlider
                                thumbTintColor={WHITE}
                                maximumTrackTintColor={SECONDARY_COLOR}
                                minimumTrackTintColor={PLAYER_CIRCLE}
                                minimumValue={0}
                                maximumValue={100}
                                value={time}
                                onValueChange={onChangeTime}
                            />
                            <ControlsArea.Slider.CurrentTime>
                                {time}
                            </ControlsArea.Slider.CurrentTime>
                            <ControlsArea.Slider.TotalTime>
                                03:30
                            </ControlsArea.Slider.TotalTime>
                        </ControlsArea.Slider>
                        <TouchableOpacity>
                            <FontAwesome
                                name="random"
                                size={24}
                                color={WHITE}
                                style={styles.randomIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome
                                name="step-backward"
                                size={30}
                                color={WHITE}
                                style={styles.stepBackwardIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <PlayIcon width={90} height={90} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome
                                name="step-forward"
                                size={30}
                                color={WHITE}
                                style={styles.stepForwardIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather
                                name="repeat"
                                size={24}
                                color={WHITE}
                                style={styles.repeatIcon}
                            />
                        </TouchableOpacity>
                    </ControlsArea>
                </ScreenArea>
            </LinearGradient>
        </Flex>
    );
};

const styles = StyleSheet.create({
    linearGradient: { flex: 1 },
    randomIcon: { marginRight: 35 },
    stepBackwardIcon: { marginRight: 20 },
    stepForwardIcon: { marginLeft: 20 },
    repeatIcon: { marginLeft: 35 },
});

export default Player;
