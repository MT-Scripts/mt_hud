import React, { useState } from "react"
import { Group, RingProgress, Center, ThemeIcon, DEFAULT_THEME } from '@mantine/core'
import { TbLungsFilled } from 'react-icons/tb'
import { PiEngineFill } from "react-icons/pi"
import { useNuiEvent } from "../hooks/useNuiEvent"
import { fetchNui } from "../utils/fetchNui"
import useStyles from '../hooks/useStyles'
import { FaHeart, FaWalkieTalkie, FaSkull, FaMicrophone, FaShield, FaGasPump } from "react-icons/fa6"
import { FaMicrophoneSlash } from 'react-icons/fa'
import { MdFastfood, MdLocalDrink, MdRestaurant } from "react-icons/md"

const Player: React.FC = () => {
    const { classes } = useStyles()
    const theme = DEFAULT_THEME
    const [health, setHealth] = useState<number>(0)
    const [armor, setArmor] = useState<number>(0)
    const [thirst, setThirst] = useState<number>(0)
    const [hunger, setHunger] = useState<number>(0)
    const [oxygen, setOxygen] = useState<number>(0)
    const [talking, setTalking] = useState<any>(false)
    const [fuel, setFuel] = useState<any>(false)
    const [engine, setEngine] = useState<any>(false)
    const [voice, setVoice] = useState<number>(0)
    const [colors, setColors] = useState<any>({})
    
    useNuiEvent<any>('player', (data) => {
        setColors(data.colors)
        setHealth(data.health)
        setArmor(data.armor)
        setThirst(data.thirst)
        setHunger(data.hunger)
        setOxygen(data.oxygen)
        setTalking(data.talking)
        setVoice(data.voice)
        setFuel(data.fuel)
        setEngine(data.engine)
    })

    return (
        <div className={classes.wrapperPlayer}>
            <Group spacing={0} style={{ position: 'absolute', bottom: 5, marginLeft: 10 }}>
                <RingProgress sections={[{ value: (voice == 1.5 ? 25 : (voice == 3.0) ? 50 : 100), color: (talking == 'radio' ? colors.voiceRadio : (talking == 'voice' ? colors.voiceActive : colors.voiceInactive)) }]} thickness={5} size={50} roundCaps
                    label={
                        <Center>
                            <ThemeIcon color={(talking == 'radio' ? colors.voiceRadio : (talking == 'voice' ? colors.voiceActive : colors.voiceInactive))} variant='light' radius='xl' size={40}>
                                {!talking && (<FaMicrophoneSlash size={18}/>)}
                                {talking == 'voice' && (<FaMicrophone size={18}/>)}
                                {talking == 'radio' && (<FaWalkieTalkie size={18}/>)}
                            </ThemeIcon>
                        </Center>
                    }
                />
                {health < 100 && (<RingProgress sections={[{ value: health, color: (health <= 0 ? 'red.9' : colors.health) }]} thickness={5} size={50} roundCaps
                    label={
                        <Center>
                            <ThemeIcon color={(health <= 0 ? 'red.9' : colors.health)} variant='light' radius='xl' size={40}>
                                {health > 0 && (<FaHeart size={18}/>)}
                                {health <= 0 && (<FaSkull size={18}/>)}
                            </ThemeIcon>
                        </Center>
                    }
                />)}
                {armor > 0 && (<RingProgress sections={[{ value: armor, color: colors.armor }]} thickness={5} size={50} roundCaps
                    label={
                        <Center>
                            <ThemeIcon color={colors.armor} variant='light' radius='xl' size={40}>
                                <FaShield size={18}/>
                            </ThemeIcon>
                        </Center>
                    }
                />)}
                {thirst < 100 && (<RingProgress sections={[{ value: thirst, color: (thirst <= 20 ? 'red.9' : colors.thirst) }]} thickness={5} size={50} roundCaps
                    label={
                        <Center>
                            <ThemeIcon color={(thirst <= 20 ? 'red.9' : colors.thirst)} variant='light' radius='xl' size={40}>
                                <MdLocalDrink size={18}/>
                            </ThemeIcon>
                        </Center>
                    }
                />)}
                {hunger < 100 && (<RingProgress sections={[{ value: hunger, color: (hunger <= 20 ? 'red.9' : colors.hunger) }]} thickness={5} size={50} roundCaps
                    label={
                        <Center>
                            <ThemeIcon color={(hunger <= 20 ? 'red.9' : colors.hunger)} variant='light' radius='xl' size={40}>
                                <MdRestaurant size={18}/>
                            </ThemeIcon>
                        </Center>
                    }
                />)}
                {oxygen < 100 && (<RingProgress sections={[{ value: oxygen, color: (oxygen <= 20 ? 'red.9' : colors.oxygen) }]} thickness={5} size={50} roundCaps
                    label={
                        <Center>
                            <ThemeIcon color={(oxygen <= 20 ? 'red.9' : colors.oxygen)} variant='light' radius='xl' size={40}>
                                <TbLungsFilled size={18}/>
                            </ThemeIcon>
                        </Center>
                    }
                />)}
                {engine && (<RingProgress sections={[{ value: engine || 0, color: (engine <= 20 ? 'red.9' : colors.engine) }]} thickness={5} size={50} roundCaps
                    label={
                        <Center>
                            <ThemeIcon color={(engine <= 20 ? 'red.9' : colors.engine)} variant='light' radius='xl' size={40}>
                                <PiEngineFill size={18}/>
                            </ThemeIcon>
                        </Center>
                    }
                />)}
                {fuel && (<RingProgress sections={[{ value: fuel || 0, color: (fuel <= 20 ? 'red.9' : colors.fuel) }]} thickness={5} size={50} roundCaps
                    label={
                        <Center>
                            <ThemeIcon color={(fuel <= 20 ? 'red.9' : colors.fuel)} variant='light' radius='xl' size={40}>
                                <FaGasPump size={16}/>
                            </ThemeIcon>
                        </Center>
                    }
                />)}
            </Group>
        </div>
    )
}

export default Player