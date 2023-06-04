import { Card, CardContent, Typography, Chip } from '@material-ui/core'
import moves_data from './Battle/Data/moves_data.js'

const MovesCard = ({ moves }) => {
    return (
        <Card style={{ height: '100%' }}>
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Moves
                </Typography>
                <Typography variant="body1">
                    {moves.map((move, i) => {
                        return (
                            <Chip key={i} label={move.move.name} style={{ margin: '4px' }} color={moves_data[move.move.url.split('/')[6]] ? 'primary' : 'default'} />
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MovesCard