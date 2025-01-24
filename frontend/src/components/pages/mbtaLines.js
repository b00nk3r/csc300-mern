import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function Lines() {
  const [lines, setLines] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/lines',
      );
      setLines(result.data.data);
    }
    fetchData();
  }, []);


  return (
    <div>
      {lines.map(line => (
        <Card
        body
        outline
        color="success"
        className="mx-1 my-2"
        style={{ 
          width: "30rem"
        }}
      >
        <Card.Body>
        <Card.Title>Line</Card.Title>
        <Card.Text>{line.attributes.long_name}{line.attributes.short_name}</Card.Text>
        </Card.Body>
      </Card>
      ))}


        <h1>Lines!</h1>
      {lines.map(line => (
        <div key={line.id}>
          <h3>{line.attributes.long_name}</h3>
          <p>{line.attributes.short_name}</p>
        </div>
      ))}
    </div>
  );
}


export default Lines;