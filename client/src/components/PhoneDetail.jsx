function PhoneDetail({ model }) {
  return (
    <div className="detail">
      <h2>Details of {model.name}</h2>
      <div className="header">
        <div className="info">
          <p>
            <span>Manufacturer:</span> {model.manufacturer}
          </p>
          <p>
            <span>Color:</span> {model.color}
          </p>
          <p>
            <span>Price:</span> {model.price} €
          </p>

          <p>
            <span>Processor:</span> {model.processor}
          </p>
          <p>
            <span>Ram:</span> {model.ram}
          </p>
          <p>
            <span>Screen Size:</span> {model.screen}
          </p>
        </div>

        <div className="image">
          <img src={`./images/${model.imageFileName}`} alt="" />
        </div>
      </div>

      <div className="description">
        <p>
          <span>Description:</span> {model.description}
        </p>
      </div>
    </div>
  );
}

export default PhoneDetail;
