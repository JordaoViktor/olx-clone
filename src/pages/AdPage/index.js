import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { PageArea, FakeLoading } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';


const Page = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(()=>{
        const getAdInfo = async (id) =>{
            const json = await api.getAd(id, true);

            setAdInfo(json)
            setLoading(false)
        }
        getAdInfo(id)
    },[])
    
    const formatDate = (date)=> {
        let cDate = new Date(date);

        let month = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto','setembro','outubro','novembro','dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return ` ${cDay} de ${month[cMonth]} de ${cYear}`

    }
    
    
    return(
        <PageContainer>
            <PageArea>
               <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <FakeLoading height={300}/>}
                            {adInfo.images &&
                                <Slide className="image-container">
                                    {adInfo.images.map((img,k)=> 
                                        <div  className="each-slide">
                                            <img key={k}src={img} alt=''/>
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        
                        <div className="adInfos">
                            <div className="adName">
                                {loading && <FakeLoading height={20}/>}
                                {adInfo.title && 
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <FakeLoading height={100}/>}
                                {adInfo.description}
                                <hr/>
                                {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
               </div>

               <div className="rightSide">
                    <div className="box box--padding">{loading && <FakeLoading height={20}/>}</div>
                    <div className="box box--padding">{loading && <FakeLoading height={30}/>}</div>
               </div>
            </PageArea>
        </PageContainer>
    );
};

export default Page;