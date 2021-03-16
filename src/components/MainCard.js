import { Button, Grid } from "@material-ui/core"

const MainCard = (data) => {
    return (
        <div className="program_search__main_card">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="program_search__main_left">
                        <p className="main_left__service">{data.service}</p>
                        <p className="main_left__language">Tour en {data.language}</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="program_search__main_right">
                        <h3>{data.title}</h3>
                        <p className="program_search__main_descripcion">{data.description}</p>
                        <div className="main_right__extras">
                            <div className="main__responsable">
                                {data.responsible}
                            </div>
                            <div className="main__calificaciones">
                                <p className="main__rating">{data.rating.value} {data.rating.detail}</p>
                                {data.comentarios && <p className="main__comentarios">{data.comentarios} comentario(s)</p>}
                            </div>
                        </div>
                    </div>
                </Grid>
                <div className="program_search__main_footer">
                    <div className="main__costo">{data.price}</div>
                    <div className="main__forma_pago">Forma de pago</div>
                    <Button className="main__ver_detalle__button">Ver detalle</Button>
                    <Button className="main__selecciona__button">Seleccionar</Button>
                </div>
            </Grid>
        </div>
    )
}

export default MainCard