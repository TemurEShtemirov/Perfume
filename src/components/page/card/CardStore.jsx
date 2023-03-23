import React, { useState, useEffect } from "react";

const CardStore = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="spinner-border text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  };

  const Showproducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div
                className="card mt-3 mb-3 ms-3 me-3 CardStore"
                style={{ width: "18rem" }}
              >
                <img
                  src={product.image_link}
                  className="card-img-top"
                  alt={product.brand}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.brand}</h5>
                  <p className="card-text">{product.name}</p>
                  <p className="card-text">{product.price} $</p>
                  <a
                    href={product.product_link} 
                    className="btn btn-outline-danger"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </>

    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <Showproducts />}
        </div>
      </div>    
    </div>
  );
};

export default CardStore;