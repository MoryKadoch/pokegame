import { Card, CardContent, Typography, Chip } from '@material-ui/core'

const StatsCard = ({ stats }) => {
    return (
        <Card style={{ height: '100%' }}>
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Stats
                </Typography>
                <Typography variant="body1">
                    {stats.map((stat, i) => {
                        return (
                            <Chip key={i} label={`${stat.stat.name}: ${stat.base_stat}`} style={{ margin: '4px' }} />
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StatsCard