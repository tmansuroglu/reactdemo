import React, { Component } from 'react';
import { Thumbnail,Col } from 'react-bootstrap';
import { URL_IMG, IMG_SIZE_XSMALL } from '../const';
import { CAST_MAX_NUM } from '../const';

export default function SimilarMovies({data}) {
    const similarMovies = data.results.map(movie=>{
        return(
        <Col 
        xs={12} 
        sm={6} 
        md={2}
        >
            <Thumbnail 
            style={{minHeight:"22vh"}}
            src={URL_IMG+IMG_SIZE_XSMALL+movie.poster_path}>
                <p>{movie.title}</p>
            </Thumbnail>
        </Col>
        )})
    return(
    <div>
        <h3>Similar Movies</h3>
        {similarMovies.slice(0,CAST_MAX_NUM)}
        </div>
    )

    
}

