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
    <div className="d-flex flex-wrap">
      <h1 className="w-100 text-center my-4">MBTA Lines</h1>
      {lines.map(line => (
        <Card
        body
        outline
        color="success"
        className="mx-1 my-2"
        style={{ 
          width: "18rem",
          height: "14rem",
          borderColor: `#${line.attributes.color}`,
          backgroundColor: `#${line.attributes.color}20`
        }}
      >
        <Card.Body className="d-flex justify-content-center align-items-center h-100">
          <Card.Text className="text-center">
            {line.attributes.short_name ? (
              <>
                <strong>Line {line.attributes.short_name}</strong>: {line.attributes.long_name}
              </>
            ) : (
              line.attributes.long_name
            )}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}

    </div>
  );
}


export default Lines;