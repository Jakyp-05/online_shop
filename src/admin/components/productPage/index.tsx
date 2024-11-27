import React from "react";
import Button from "../../../shared/ui/button";
import useProduct from "../../../hooks/useProduct";
import SortByProducts from "../sortBy";
import CategoryProducts from "../category";

const ProductPage: React.FC = () => {
  const { products, status, error } = useProduct();

  if (error) return <div>Error: {error}</div>;

  if (status === "loading") return <div>Loading...</div>;

  return (
    <section className="product-page">
      <div className="product__top">
        <input type="text" placeholder="Search product" />
        <CategoryProducts />
        <SortByProducts />
        <Button role="+ Add Product" bg="btn_add" />
      </div>
      <div className="product__content">
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Purchase Unit Price</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 5).map((el) => (
              <tr>
                <td className="product__table_content">
                  <img src={el.thumbnail} alt={el.title} />
                  <div className="product__table_content_table_title">
                    <h4>{el.title}</h4>
                    <p>
                      SKU: <span>{el.sku}</span>
                    </p>
                  </div>
                </td>
                <td>{el.price} $</td>
                <td>
                  <span
                    className={
                      el?.rating !== undefined && el.rating < 4
                        ? "rating-minus"
                        : "rating-plus"
                    }
                  >
                    {el.rating ?? 0}
                  </span>
                </td>
                <td>
                  <Button role="Edit" bg="btn_edit" />
                  <Button role="Edit" bg="btn_delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductPage;
