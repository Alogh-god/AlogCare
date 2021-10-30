import React, {useEffect,useState} from 'react';
import { Card,Col,Row } from 'react-bootstrap';



const card_style={

    display: 'grid',
    placeItems:'center',
    background: '#e5e5e5',
    textAlign:"Center",
    boxShadow:"3px 3px 5px rgb(0, 0, 0, 0.2), -2px -2px 5px rgb(255, 255, 255, 1)",
    height:"100px",
    width:"200px",
    margin: "20px",
    padding:"10px",
}
const container_style={
    padding:"20px",
    height:"390px",
    width:"75%",
    marginLeft:"200px",
    background: '#e5e5e5',
    borderRadius:" 20px 20px 0 0",
    boxShadow: "3px 3px 5px rgb(0, 0, 0, 0.2), -2px -2px 5px rgb(255, 255, 255, 1)",
    fontFamily:"'Barlow', sans-serif, 'Noto Serif', serif, 'PT Serif', serif",
}
const Covid = () => {

    const [data,setData] = useState([]);

    const getCovidData= async () => {
        try{
        const res = await fetch('https://api.covid19api.com/summary');
        const ActualData = await res.json();
        console.log(ActualData.Global);
        console.log(ActualData.NewConfirmed)
        setData(ActualData);
        }
        catch(err){
            console.log(err);
        }
    
    }
    useEffect(()=>{
        getCovidData();
    }, []);

    return ( 
        <>
            <div style={container_style}>    
                <h1>Currrent cases in World</h1>
                <p>Last updated {global.lastupdatedtime}</p>
                <div >
                    <Row>
                        <Col>
                            <div style={card_style}>
                                <h2>Recovered</h2>
                                <p>{global.recovered}</p>
                            </div>
                        </Col>
                        <Col>
                            <div style={card_style}> 
                                <h2>Confirmed</h2>
                                <p>{global.confirmed}</p>
                            </div>
                        </Col>
                  
                        <Col>
                            <div style={card_style}>
                                <h2>Active</h2>
                                <p>{global.active}</p>
                            </div>
                        </Col>
                        <Col>
                            <div style={card_style}> 
                                <h2>Deaths</h2>
                                <p>{global.deaths}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                
                
            </div>
        </>
     );
}
 
export default Covid;
/*
            <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    < Col>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Text>
                        {data.recovered}
                    </Card.Text>
                    </Col>
                </Card.Body>
            </Card> <br/>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Confirmed</Card.Title>
                    <Card.Text>
                        {data.confirmed}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Deaths</Card.Title>
                    <Card.Text>
                        {data.deaths}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Active</Card.Title>
                    <Card.Text>
                        {data.active}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Row> */