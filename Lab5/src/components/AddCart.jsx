import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  incrementQty,
  decrementQty,
  deleteItem,
  clearCart,
} from "../redux/actions/addCartActions";

const CATALOG = [
  { id: "p1", name: "Notebook", price: 4.5 },
  { id: "p2", name: "Markers", price: 6.0 },
  { id: "p3", name: "Backpack", price: 29.99 },
  { id: "p4", name: "Water Bottle", price: 12.99 },
];

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.addCart.items);

  const summary = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    return { itemCount, subtotal };
  }, [items]);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "1rem auto",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2>Shopping Cart (Redux)</h2>
      <p style={{ fontSize: 14, color: "#555" }}>
        Catalog on the left, cart on the right. All state lives in Redux.
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {/* Catalog */}
        <div style={{ flex: 1 }}>
          <h3>Catalog</h3>
          {CATALOG.map((p) => (
            <div
              key={p.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "6px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div>
                <strong>{p.name}</strong> <span>(${p.price.toFixed(2)})</span>
              </div>
              <button onClick={() => dispatch(addItem(p))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div
          style={{
            flex: 1,
            paddingLeft: "1rem",
            borderLeft: "1px solid #ddd",
          }}
        >
          <h3>Cart</h3>

          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "6px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div>
                    <strong>{item.name}</strong>{" "}
                    <span>(${item.price.toFixed(2)})</span>

                    <div style={{ fontSize: 12, color: "#666" }}>
                      Line total: ${(item.price * item.qty).toFixed(2)}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <button onClick={() => dispatch(decrementQty(item.id))}>
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button onClick={() => dispatch(incrementQty(item.id))}>
                      +
                    </button>

                    <button
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onClick={() => dispatch(deleteItem(item.id))}
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: "1rem" }}>
                <p>
                  <strong>Items:</strong> {summary.itemCount}
                </p>

                <p>
                  <strong>Subtotal:</strong> ${summary.subtotal.toFixed(2)}
                </p>

                <p>
                  <strong>Tax (8%):</strong>{" "}
                  ${(summary.subtotal * 0.08).toFixed(2)}
                </p>

                <p style={{ marginTop: 10, fontSize: 24 }}>
                  <strong>Total:{" "}
                  ${(summary.subtotal * 1.08).toFixed(2)}
                  </strong>
                </p>

                <button
                  onClick={() => dispatch(clearCart())}
                  style={{ marginTop: "10px" }}
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
