import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Actor } from './index';
import { IMAGE_BASE_URL } from '../config'
import '../css/ActorList.css';

const ActorList = props => {
    const renderActor = () => {
        return props.actors.map((actor, i) => {
            const imgSrc = `${IMAGE_BASE_URL}/${actor.profile_path}`;
            return(
                <Actor
                    key={i}
                    imgSrc={imgSrc}
                    name={actor.name}
                    hover={false}
                />
            )
        })
    }
    return (
        <div>
            <h3 className="actorList--title"> ACTEURS</h3>
            <div className="actorList--grid">{renderActor()}</div>
        </div>
    )
}


export { ActorList };