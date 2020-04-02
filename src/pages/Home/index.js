import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from "@material-ui/core";
import styles from './styles';

export default () => {
        const [searchText, setSearchText] = useState('');
        const classes = styles();
        const handleSearchTextChange = event => {
            setSearchText(event.target.value);
        };
        const handleCleanTextClick = event => {
            console.log('click');
        };
        const handleSearchTextClick = event => {
            console.log('click');
        };

        return(
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.gridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenido</Typography>
                    </Grid>
                    <Grid>
                        <label>Icono</label>
                    </Grid>
                </Grid>
                <TextField
                    value={searchText}
                    className={classes.textFieldSearch}
                    placeholder="Buscar"
                    onChange={handleSearchTextChange}/>
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button className={classes.searchButton} variant="contained" color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    )
};