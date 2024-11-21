import "./itemDetail.css"

const ItemDetail = ({ product }) => {
    return (
      <div className="producto d-flex vh-100">
        <div className="p-3">
          <h1>{product.name}</h1>
          <img className="imagen" src={product.image} alt={product.name}/>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </div>
    )
  }
  export default ItemDetail