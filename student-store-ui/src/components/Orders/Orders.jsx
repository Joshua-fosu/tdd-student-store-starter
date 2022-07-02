import * as React from "react";
import { useState, useEffect } from "react";
import { Tab, Row, Col, ListGroup, Card, FormControl } from "react-bootstrap";
import axios from "axios";

export default function Orders() {
  const [products, setProducts] = useState([]);

  const [orderByID, setOrderByID] = useState();
  const [orderClicked, setOrderClicked] = useState("");
  const [filterByEmail, setFilterByEmail] = useState("");

  useEffect(() => {
    async function fetchOrders() {
      const orders = await axios.get("http://localhost:3001/orders/");
      setProducts(orders.data);
    }
    fetchOrders();
  }, []);

  function handleOrderClicked(event) {
    setOrderClicked(event.target.innerText);
    setOrderByID(
      products?.find((product) => {
        return product?.email === orderClicked.slice(1);
      })
    );
  }

  let orders_filtered = products.filter((order) => {
    return order.email.includes(filterByEmail);
  });

  return (
    <div>
      <SearchBar
        setFilterByEmail={setFilterByEmail}
        setProducts={setProducts}
        products={products}
        filterByEmail={filterByEmail}
      />
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={5}>
            <ListGroup>
              {orders_filtered.map((product) => (
                <ListGroup.Item
                  action
                  href="#link1"
                  onClick={handleOrderClicked}
                >
                  @{product?.email}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Sonnet order={orderByID} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function Sonnet({ order }) {
  return (
    <>
      {order === undefined ? (
        <h3>Select an Order</h3>
      ) : (
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header>{order?.name}</Card.Header>
          <Card.Body>
            <Card.Title>Email: {order?.email}</Card.Title>
            <Card.Text>Order Total: ${order?.total}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{order?.createdAt}</small>
          </Card.Footer>
        </Card>
      )}
    </>
  );
}

function SearchBar({ setFilterByEmail, setProducts, products, filterByEmail }) {
  function handleInput(event) {
    setFilterByEmail(event.target.value);
  }

  return (
    <FormControl
      type="search"
      placeholder="Search by email"
      className="me-2"
      aria-label="Search"
      onChange={handleInput}
      value={filterByEmail}
    />
  );
}
