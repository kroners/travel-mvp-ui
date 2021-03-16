import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Checkbox, TextField } from '@material-ui/core';
import { useFilters } from '../hooks';

require("../style/additional_info.scss")

function AdditionalInfo() {
    const { filters: { tripProfiles, activities } } = useFilters()

    let newProfiles = [
        {
            image: "",
            name: "Familiar"
        },
        {
            image: "",
            name: "Grupal"
        },
        {
            image: "",
            name: "Pareja"
        },
    ];
    newProfiles = [...newProfiles, ...tripProfiles];
    
    let newActivities = [
        {
            image: "",
            name: "Familiar"
        },
        {
            image: "",
            name: "Grupal"
        },
        {
            image: "",
            name: "Pareja"
        },
        {
            image: "",
            name: "Familiar"
        },
        {
            image: "",
            name: "Grupal"
        },
        {
            image: "",
            name: "Pareja"
        },
    ];
    newActivities = [...newActivities, ...activities];

    return (
        <div className="additional_info">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="additional_info__wrapper">
                        <div className="additional_info__actividades">
                            <div className="additional_info__actividades_header">
                                <h3>Actividades</h3>
                                <span>({}/{newProfiles.length})</span>
                            </div>                        
                            <div className="additional_info__actividades_wrapper">
                                {newActivities.length && newActivities.map((activity) => (
                                    <div className="additional_info__actividad">
                                        <p>{activity.name}</p>
                                        <Checkbox
                                            defaultChecked
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="additional_info__perfiles_viaje">
                            <div className="additional_info__perfil_viaje_header">
                                <h3>Perfil de viaje</h3>
                                <span>({}/{newProfiles.length})</span>
                            </div>                        
                            <div className="additional_info__perfiles_wrapper">
                                {newProfiles.map((profile) => (
                                    <div className="additional_info__perfil_viaje">
                                        <p>{profile.name}</p>
                                        <Checkbox
                                            defaultChecked
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="additional_info__idioma">
                            <h3>Idioma</h3>
                            <TextField id="pais-input" label="Pais" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="services__side_text"></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AdditionalInfo