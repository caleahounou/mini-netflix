import React, { Component, Fragment } from 'react';
import { Spinner, HeaderDetails,  ActorList } from '../components';
import axios from 'axios';
import { API_URL, API_KEY} from '../config'

class Details extends Component {
    state = {
        loading: true,
        actors: [
            {
                name: "julien kisoni",
            },
            {
                name: "Aristote kisoni",
            },
            {
                name: "Ahmed Silla",
            },
            {
                name: "Caleb ahounou",
            },
            {
                name: "Samuel ahounou",
            }
        ],
        mTitle: "Batman",
        mDesk: "Voici la description du film Batman",
        imgSrc: './images/Fast_large.jpg',
        revenue: "$1245752547",
        runtime:  "2h30",
        status: "Released",
        vote: ""
    }

    async componentDidMount() {
        try{
            const movieId = this.props.match.params.id;
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
            const {
                data: {
                    revenue,
                    runtime,
                    title,
                    overview,
                    status,
                    vote_average,
                    poster_path
                }
            } = await this.loadInfos(url);
            this.setState({
                revenue,
                runtime,
                mTitle: title,
                mDesk: overview,
                status,
                imgSrc: poster_path,
                vote: vote_average
            }, async () => {
                const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr`;
                const { data : { cast } } = await this.loadInfos(url);
                this.setState({
                    actors: [...cast], 
                    loading: false
                });
            })
        }catch(e) {
            console.log('e', e)
        }
    }
    
    loadInfos = url => axios.get(url)

    render() {
        const { loading, mDesk, mTitle, runtime, revenue, status, vote, actors, imgSrc } = this.state;
        return(
            <div className="app">
                {loading ?
                    (
                        <Spinner />
                    ):
                    (
                        <Fragment>
                            <HeaderDetails
                                mTitle={mTitle}
                                mDesk={mDesk}
                                imgSrc={imgSrc}
                                runtime={runtime}
                                revenue={revenue}
                                status={status}
                                vote={vote}
                            />
                            <ActorList actors={ actors } />
                        </Fragment>
                    )
                }
            </div>
        )
    }
}

export { Details };