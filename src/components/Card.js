import React from "react";

function card({ data }) {
  //console.log(data);
  return (
    <>
      <section className="main-card--cointainer">
        {data.map((current) => {
          const { id, name, category, image, description } = current;
          return (
            <>
              <div className="card-container" key={current.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle">{id}</span>
                    <span className="card-author">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description">{description}</span>
                  </div>
                  <img src={image} alt="img" srcset="" className="card-media" />
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default card;
