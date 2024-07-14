import React, { useState } from "react"
import { Group, Text, DEFAULT_THEME } from '@mantine/core'
import { useNuiEvent } from "../hooks/useNuiEvent"
import { fetchNui } from "../utils/fetchNui"
import useStyles from '../hooks/useStyles'
import '../index.css'

const Vehicle: React.FC = () => {
    const { classes } = useStyles()
    const theme = DEFAULT_THEME
    const [speed, setSpeed] = useState<number>(0)
    const [gear, setGear] = useState<number>(0)
    const [speedType, setSpeedType] = useState<string>('')

    useNuiEvent<any>('vehicle', (data) => {
        setSpeed(data.speed)
        setGear(data.gear)
        setSpeedType(data.speedType)
    })

    return (
        <div className={classes.wrapperVehicle}>
            <Group spacing={5} style={{ position: 'absolute', bottom: 100, marginLeft: 340, display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <Group style={{ marginBottom: -35, gap: 5 }}>
                    <Group style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        <Text color="white" fw={700} size={20} style={{ backgroundColor: theme.colors.dark[7], padding: 2.5, paddingLeft: 10, paddingRight: 10, borderRadius: theme.radius.sm }}>{(gear == 0 ? 'R' : gear)}</Text>
                        <Text color="white" fw={700} size={15}>{(speedType == 'kmh' ? 'KM/H' : 'MPH')}</Text>
                    </Group>
                    <Text color="white" size={85} fw={500} style={{ fontFamily: 'Digital-7', letterSpacing: 5 }}>{((speed < 100 && speed > 10) ? '0' + speed : ((speed < 100 && speed > 0 && speed < 10) ? '00' + speed : (speed == 0 ? '000' : speed)))}</Text>
                </Group>
            </Group>
        </div>
    )
}

export default Vehicle