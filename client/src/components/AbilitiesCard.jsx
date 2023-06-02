import { Card, CardContent, Typography, Chip } from '@material-ui/core'

const AbilitiesCard = ({ abilities }) => {
    return (
        <Card style={{ height: '100%' }}>
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Abilities
                </Typography>
                <Typography variant="body1">
                    {abilities.map((ability, i) => {
                        return (
                            <Chip key={i} label={ability.ability.name} style={{ margin: '4px' }} />
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AbilitiesCard