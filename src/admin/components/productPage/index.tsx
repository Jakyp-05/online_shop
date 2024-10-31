import React from "react";
import Button from "../../../shared/ui/button";
import CategoryProducts from "../category";
import SortByProducts from "../sortBy";

const ProductPage: React.FC = () => {
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
              <th>Products</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product__table_content">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgS5Eq1ohKHqo0j3t9jdHJUho1v1-GkrjDA&s"
                  alt="product image"
                />
                <div className="product__table_content_table_title">
                  <h4>Gabriela Cashmere Blazer</h4>
                  <p>
                    SKU: <span>T14116</span>
                  </p>
                </div>
              </td>
              <td>100 $</td>
              <td>20</td>
              <td>4.9</td>
              <td>
                <Button role="Edit" bg="btn_edit" />
                <Button role="Edit" bg="btn_delete" />
              </td>
            </tr>
            <tr>
              <td className="product__table_content">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgS5Eq1ohKHqo0j3t9jdHJUho1v1-GkrjDA&s"
                  alt="product image"
                />
                <div className="product__table_content_table_title">
                  <h4>Gabriela Cashmere Blazer</h4>
                  <p>
                    SKU: <span>T14116</span>
                  </p>
                </div>
              </td>
              <td>100 $</td>
              <td>20</td>
              <td>4.9</td>
              <td>
                <Button role="Edit" bg="btn_edit" />
                <Button role="Edit" bg="btn_delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductPage;
