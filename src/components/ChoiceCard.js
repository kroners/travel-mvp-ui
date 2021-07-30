import { Button, Grid } from "@material-ui/core";

const ChoiceCard = ({data}) => {
<<<<<<< HEAD
=======
    console.log({data})
>>>>>>> main

    return (
        <div className="program_search__choice_card">
            <Grid container>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                    <div className="program_search__choice_right">
                        <h3>{data.title}</h3>
                        <p className="choice__language">Tour en {data.language}</p>
                        <p className="program_search__choice_descripcion">{data.description}</p>
                        <p className="choice__service">{data.service}</p>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <div className="program_search__choice_footer">
                    <div className="choice__costo">{data.price}</div>
                    <Button className="choice__ver_detalle__button">Ver detalle</Button>
                </div>
            </Grid>
        </div>
    );
}

export default ChoiceCard

