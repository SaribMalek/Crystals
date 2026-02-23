import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Eye, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { resolveProductImage } from '../utils/productImage'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const productImage = resolveProductImage(product)

  return (
    <div className="luxury-product-card">
      <div className="product-visual">
        <img
          src={productImage}
          alt={product.name}
          className="product-img-main"
        />
        {product.is_sale && <span className="luxury-badge">Essence Sale</span>}
        <div className="product-actions-overlay">
          <button className="action-circle" onClick={() => addToCart(product)} title="Add to Cart">
            <ShoppingCart size={18} />
          </button>
          <Link to={`/product/${product.id}`} className="action-circle" title="View Details">
            <Eye size={18} />
          </Link>
        </div>
      </div>

      <div className="product-details-luxury">
        <div className="product-rating-gold">
          {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#D4AF37" color="#D4AF37" />)}
        </div>
        <h3 className="product-name-serif">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="product-cat-tag">{product.category ? product.category.name : 'Curated Crystal'}</p>
        <div className="product-price-luxury">
          <span className="price-primary">${product.price}</span>
          {product.old_price && <span className="price-old">${product.old_price}</span>}
        </div>
      </div>

      <style jsx="true">{`
        .luxury-product-card {
           background: transparent;
           transition: var(--transition);
           position: relative;
           overflow: hidden;
        }
        .product-visual {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: #F8F4F0;
          border-radius: 4px;
        }
        .product-img-main {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .luxury-product-card:hover .product-img-main {
          transform: scale(1.08);
        }
        .luxury-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--bg-dark);
          color: white;
          padding: 6px 15px;
          font-size: 0.6rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 2px;
          z-index: 10;
        }
        .product-actions-overlay {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          display: flex;
          gap: 12px;
          opacity: 0;
          transition: var(--transition);
        }
        .luxury-product-card:hover .product-actions-overlay {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .action-circle {
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          cursor: pointer;
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
        }
        .action-circle:hover {
          background: var(--secondary);
          color: white;
        }
        .product-details-luxury {
          padding: 25px 0;
          text-align: center;
        }
        .product-rating-gold {
            display: flex;
            justify-content: center;
            gap: 3px;
            margin-bottom: 12px;
        }
        .product-name-serif {
          font-size: 1.2rem;
          margin-bottom: 8px;
          font-weight: 500;
          font-family: var(--font-serif);
        }
        .product-name-serif a {
            text-decoration: none;
            color: var(--primary);
            transition: var(--transition);
        }
        .product-name-serif a:hover {
          color: var(--secondary);
        }
        .product-cat-tag {
          font-size: 0.65rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .product-price-luxury {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--primary);
          display: flex;
          justify-content: center;
          gap: 15px;
          letter-spacing: 1px;
        }
        .price-old {
          text-decoration: line-through;
          color: #BDC3C7;
          font-size: 0.9rem;
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}

export default ProductCard
