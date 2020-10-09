import React from 'react';
import { Thumbnail, Card } from 'react-bootstrap';
import { URL_IMG, IMG_SIZE_XSMALL } from '../const';

export default function Cast({cast}) {
  return (
   <div className="p-1">




    <Thumbnail src={URL_IMG+IMG_SIZE_XSMALL+cast.profile_path} alt={cast.name} style={{height:"22vh"}}>
      <p>{cast.name}</p>
    </Thumbnail>
    </div>
    
  );
}

Cast.propTypes = {
  cast: React.PropTypes.shape({
    profile_path: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  })
};
