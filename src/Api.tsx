import { useEffect, useState } from "react";
import axios from "axios";
import "./Api.css";

function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        myFirstFetch();
    }, []);
    
    const myFirstFetch = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data:', error));
    };

  return (
    <section className="api-page">
      <div className="api-header">
        <h1>API</h1>
        <p>This is the API page.</p>
      </div>
      <div className="api-list">
        {data.map((item: any) => (
          <article key={item.id} className="api-item">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Api;