import { Button, CardActions, Grid } from '@material-ui/core'

const Pagination = ({ page, totalPages, setPage }) => {
    return (
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <CardActions>
                {page > 0 && page <= totalPages - 1 && (
                    <Button variant="contained" color="primary" onClick={() => setPage(page - 1)} disabled={page === 0}>
                        Previous
                    </Button>
                )}
                {page < totalPages - 1 && (
                    <Button variant="contained" color="primary" onClick={() => setPage(page + 1)} disabled={page === totalPages - 1}>
                        Next
                    </Button>
                )}
            </CardActions>
        </Grid>
    )
}

export default Pagination