import { createContext } from "react";
import styled from "@emotion/native";
import { Colors } from "../Values/Colors";
import { Dimensions } from "react-native";
import { HeaderBar } from "./../components/HeaderBar";
import { StarIcon } from "../icons/StarIcon";
import { Button } from "../components/Button";
import { useState, ReactNode, useContext, useEffect } from "react";
import { PlaceType } from "../@types/PlaceTypes";
import { PlacesData } from "../data";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
    position: relative;
    width: ${String(width)}px;
    height: ${String(height)}px;
  
`;

const PlaceContainer = styled.View`
  width: ${String(width)}px;
  height: ${String(height + 30)}px;
  background-color: ${Colors.theme};
  padding-top: 30px;
  align-items: center;
  padding: 30px 20px 0 20px;
  position: relative;
`;

const CoverImage = styled.Image`
    width: ${String(width - 40)}px;
    height: 250px;
    margin-top: 25px;
    border-radius: 10px;
`;

const PlaceTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    color: ${Colors.themeContrast};
    width: 100%;
`;

const PlaceText = styled.Text`
    font-size: 14px;
    color: ${Colors.themeContrast};
    width: 100%;
`;

const Rating = styled.View`
    flex-direction: row;
    margin-top: 30px;
    width: 100%;
`;

const RatingValue = styled.Text`
    color: ${Colors.themeContrast};
    font-size: 14px;
    margin-left: 10px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.themeContrast};
    width: 100%;
    margin-top: 10px;
`;

const Description = styled.Text`
    color: ${Colors.themeContrast};
    margin-top: 20px;
    line-height: 20px;
    text-align: justify;
`;

const ButtonAdd = styled(Button)`
    margin-top: 20px;
    width: ${String(width - 40)}px;
`;


type PlaceContextType = {
    showPlace: (placeID: number) => void;
    hidePlace: () => void;

}

export const PlaceContext = createContext({} as PlaceContextType)

type PlaceProviderProps = {
    children: ReactNode;
}

export const PlaceProvider = ({ children }: PlaceProviderProps) => {

    const [show, setShow] = useState(false);
    const [place, setPlace] = useState<PlaceType | null>(null);

    const showPlace = (placeId: number) => {

        const place = PlacesData.find((item) => item.id === placeId);

        if (place) {
            setPlace(place);
            setShow(true);
        }

    }

    const hidePlace = () => {
        setShow(false);
        setPlace(null);
    }

    const left = useSharedValue(width);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            left: withTiming(left.value, {
                duration: 500,
            }),
        };
    });

    useEffect(() => {
        left.value = show ? 0 : width;
    }, [show]);

    return (
        <PlaceContext.Provider value={{
            showPlace,
            hidePlace,
        }}>
            {children}
            <Animated.View
                style={[
                    {
                        position: 'absolute',
                        width,
                        height,
                    },
                    animatedStyle,
                ]}
            >
                <Container>
                    <PlaceContainer>
                        <HeaderBar
                            title={place?.title ?? ''}
                        />
                        <CoverImage
                            source={{
                                uri: place?.photo,
                            }}
                        />
                        <PlaceTitle>{place?.title ?? ''}</PlaceTitle>
                        <PlaceText>{place?.address ?? ''}</PlaceText>

                        <Rating>
                            <StarIcon />
                            <RatingValue>{place?.rating.toPrecision(2)}</RatingValue>
                        </Rating>

                        <Title>Descrição</Title>
                        <Description>{place?.description ?? ''}</Description>

                        <ButtonAdd>Adicionar à minha viagem</ButtonAdd>
                    </PlaceContainer>
                </Container>
            </Animated.View>
        </PlaceContext.Provider>
    )

};

// use -> Hooks
export const usePlace = () => {

    const context = useContext(PlaceContext);

    return context;

}