import React, {useEffect,useState} from 'react';
import { Card,Col,Row } from 'react-bootstrap';



const card_style = {
    textAlign:"Center",
    boxShadow:"15px 13px 10px ",
    height:"100px",
    width:"200px",
    margin: "20px",
    padding:"10px",
    border:"3px outset gray"
}

const container_style = {
    display: "flex",
    padding:"20px",
    height:"390px",
    width:"75%",
    marginLeft:"200px",
    border:"3px outset black",
    background:" linear-gradient(45deg,#abbaab,#ffffff)",
    borderRadius:" 20px 20px 0 0",
    boxShadow: "0px 0px 15px 5px black",
    fontFamily:"'Barlow', sans-serif, 'Noto Serif', serif, 'PT Serif', serif",
}

const displayButtons = {
    display: "flex"
}

const Covid = () => {

    const [data,setData] = useState([]);

    const getCovidData= async () => {
        try{
        const res = await fetch('https://api.covid19india.org/data.json');
        const ActualData = await res.json();
        console.log(ActualData.statewise[0]);
        setData(ActualData.statewise[0]);
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
                <h1>Currrent cases in India</h1>
                <p>Last updated {data.lastupdatedtime}</p>
                <div >
                    <Row style={displayButtons}>
                        <Col>
                            <div style={card_style}>
                                <h2>Recovered</h2>
                                <p>{data.recovered}</p>
                            </div>
                        </Col>
                        <Col>
                            <div style={card_style}> 
                                <h2>Confirmed</h2>
                                <p>{data.confirmed}</p>
                            </div>
                        </Col>
                  
                        <Col>
                            <div style={card_style}>
                                <h2>Active</h2>
                                <p>{data.active}</p>
                            </div>
                        </Col>
                        <Col>
                            <div style={card_style}> 
                                <h2>Deaths</h2>
                                <p>{data.deaths}</p>
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