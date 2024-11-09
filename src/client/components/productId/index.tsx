import React from "react";

import Button from "@shared/ui/button";
import useProductId from "@hooks/useProductId";
import { useLocation } from "react-router-dom";

const ProductId: React.FC = () => {
  const location = useLocation();
  const isCatalog = location.pathname.includes("/catalog");
  const { product, error, handleCloseRoute } = useProductId(isCatalog);

  const hasImages = Array.isArray(product?.images) && product.images.length > 0;
  const imageUrl = hasImages
    ? product.images[0]
    : "/path/to/placeholder-image.jpg";

  if (error) return <span>Error:{error}</span>;

  return (
    <section className="productId">
      <div className="container productId__container">
        <div className="productId__content">
          <div className="productId__content__top">
            <h2>{product?.title}</h2>
            {product?.brand && <strong>{product?.brand}</strong>}
            <div className="prodcustId__rating-reviews">
              <span
                className={
                  product?.rating !== undefined && product.rating < 4
                    ? "rating-minus"
                    : "rating-plus"
                }
              >
                {product?.rating ?? 0}
              </span>
              <a href="#">({product?.reviews?.length ?? 0}) Reviews</a>
            </div>
            <p>
              SKU:<span> #{product?.sku}</span>
            </p>
          </div>
          <div className="productId__content__bottom">
            <div className="productId__price-discount">
              <p>$ {product?.price}</p>
              <span>- {product?.discountPercentage} %</span>
            </div>
            <p>{product?.description}</p>
            <div className="productId__size">
              <p>
                width: <span>{product?.dimensions.width}</span>
              </p>
              <p>
                height: <span>{product?.dimensions.height}</span>
              </p>
              <p>
                depth: <span>{product?.dimensions.depth}</span>
              </p>
            </div>
            <div className="productId__btns">
              <Button role="Add To Cart" bg="btn_cart" />
              <Button role="Close" bg="btn_close" onclick={handleCloseRoute} />
            </div>
          </div>
        </div>
        <div className="productId__image">
          <img src={imageUrl} alt={product?.title} loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default ProductId;
