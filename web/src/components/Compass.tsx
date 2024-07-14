import React, { useState } from "react"
import { Text, DEFAULT_THEME, Group } from '@mantine/core'
import { useNuiEvent } from "../hooks/useNuiEvent"
import { fetchNui } from "../utils/fetchNui"
import useStyles from '../hooks/useStyles'
import '../index.css'

const Compass: React.FC = () => {
    const { classes } = useStyles()
    const theme = DEFAULT_THEME
    const [heading, setHeading] = useState<string>('')
    const [street1, setStreet1] = useState<string>('')
    const [street2, setStreet2] = useState<string>('')

    useNuiEvent<any>('compass', (data) => {
        setHeading(data.heading)
        setStreet1(data.street1)
        setStreet2(data.street2)
    })

    return (
        <div className={classes.wrapperCompass}>
            <Group style={{ backgroundColor: theme.colors.dark[7], position: 'absolute', bottom: 65, marginLeft: 340, padding: 5, borderRadius: theme.radius.sm, gap: 5 }}>
                <Text size="sm" fw={700} color="dark" style={{ paddingLeft: 5, paddingRight: 5, backgroundColor: theme.colors.dark[0], borderRadius: theme.radius.sm }}>{heading}</Text>
                <Text size="sm" color="white">{street1} {(street2 ? '|' : '')} {street2}</Text>
            </Group>
        </div>
    )
}

export default Compass