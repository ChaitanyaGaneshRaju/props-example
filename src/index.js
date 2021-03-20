import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function Card(props) {
  return (
    <div>
      <img src={props.image} />
      <h5>{props.name}</h5>
      <p>{props.live}</p>
    </div>
  );
}

class Example extends React.Component {
  render() {
    const people = [
      {
        name: "B.R.Ambedkar",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ambedkar_1966_stamp_of_India_%28cropped%29.jpg/100px-Ambedkar_1966_stamp_of_India_%28cropped%29.jpg",
        live: "(1891-1956)",
      },
      {
        name: "A.P.J. Abdul Kalam",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/APJ_Abdul_Kalam_2015_stamp_of_India_%28cropped%29.jpg/100px-APJ_Abdul_Kalam_2015_stamp_of_India_%28cropped%29.jpg",
        live: "(1931-2015)",
      },
      {
        name: "Sardar Vallabhai Patel",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Vallabhbhai_Patel_1975_stamp_of_India.jpg/100px-Vallabhbhai_Patel_1975_stamp_of_India.jpg",
        live: "(1875-1950)",
      },
      {
        name: "Nehru",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Jawaharlal_Nehru_stamp_%28cropped%29.jpg/100px-Jawaharlal_Nehru_stamp_%28cropped%29.jpg",
        live: "(1889-1964)",
      },
      {
        name: "Mother Teresa",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mutter_Teresa_von_Kalkutta.jpg/100px-Mutter_Teresa_von_Kalkutta.jpg",
        live: "(1910-1997)",
      },
      {
        name: "Indira Gandhi",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Indira_Gandhi_%28on_stamp%29.jpg/100px-Indira_Gandhi_%28on_stamp%29.jpg",
        live: "(1917-1984)",
      },
      {
        name: "Sachin Tendulkar",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sachin_Tendulkar_2013_stamp_of_India.jpg/100px-Sachin_Tendulkar_2013_stamp_of_India.jpg",
        live: "(b. 1973)",
      },
    ];
    return (
      <div>
        <h1>Great People of India</h1>
        <div id="people-container">
          {people.map((person) => {
            return (
              <Card
                name={person.name}
                image={person.image}
                live={person.live}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
