import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./Cards.css";

function CardsGallery(props) {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="3.jpg"
              text="Kegiatan bersih-bersih di lingkungan sekolah"
            />
            <CardItem
              src="1.jpg"
              text="Budidaya tanaman di lingkungan sekolah"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="7.jpg"
              text="Menghias lingkungan sekolah"
            />
            <CardItem
              src="5.jpg"
              text="Budidaya ikan koi"
            />
            <CardItem
              src="6.jpg"
              text="Membersihkan taman"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="poster-2.jpg"
              text="Poster adiwiyata"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="8.jpg"
              text="Budidaya tanaman hidroponik"
            />
            <CardItem
              src="9.jpg"
              text="Kegiatan bersih-bersih lingkungan"
            />
            <CardItem
              src="2.jpg"
              text="Greenhouse, tempat budidaya tanaman"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsGallery;
