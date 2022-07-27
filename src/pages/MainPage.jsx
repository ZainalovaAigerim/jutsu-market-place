import React from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Slider,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";

function MainPage() {
  const { getWatches, watches, filterByPrice, setFilterByPrice } =
    React.useContext(ClientContext);

  React.useEffect(() => {
    getWatches();
  }, [filterByPrice]);

  return (
    <div className="main-page">
      <Container>
        <h2>Весь каталог часов</h2>
        <div className="filter-block">
          <h4>Фильтрация по цене</h4>
          <Slider
            min={0}
            max={999999}
            valueLabelDisplay="auto"
            value={filterByPrice}
            onChange={(e, newValue) => setFilterByPrice(newValue)}
          />
        </div>
        <div className="products">
          {watches.map((item) => (
            <Card key={item.id} className="product-card">
              <CardMedia component="img" height={140} image={item.photo} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <ul className="product-card-ul">
                  <li>
                    <span>Бренд:</span>
                    <span> {item.brand}</span>
                  </li>
                  <li>
                    <span>Дата выпуска:</span>
                    <span> {item.year}</span>
                  </li>
                  <li>
                    <span>Страна производства:</span>
                    <span> {item.country}</span>
                  </li>
                  <li>
                    <span>Цена:</span>
                    <span> {item.price} сом</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
