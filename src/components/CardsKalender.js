import React from "react";
import "./CardsKalender.css";
import CardItemKalender from "./CardsItemKalender";

function CardsKelender(props) {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItemKalender
              src="gerakan-sejuta-pohon.jpg"
              text="Hari Perencanaan Gerakan Sejuta Pohon"
              label="10JANUARI"
            />
            <CardItemKalender
              src="lahan-basah.jpeg"
              text="Hari Lahan Basah SeDunia"
              label="2FEBRUARI"
            />
          </ul>
          <ul className="cards__items">
            <CardItemKalender
              src="peduli-sampah.jpg"
              text="Hari Peduli Sampah Nasional"
              label="21FEBRUARI"
            />
            <CardItemKalender
              src="hari-konservasi.jpg"
              text="Hari Strategi Konservasi SeDunia"
              label="6MARET"
            />
            <CardItemKalender
              src="bhakti-rimbawan.jpg"
              text="Hari Bhakti Rimbawan"
              label="16MARET"
            />
          </ul>
          <ul className="cards__items">
            <CardItemKalender
              src="poster-2.jpg"
              text="Hari Kehutanan Sedunia"
              label="20MARET"
            />
            <CardItemKalender
              src="hari-hutan.jpg"
              text="Hari Hutan Internasional"
              label="21MARET"
            />
            <CardItemKalender
              src="hari-air.png"
              text="Hari Air SeDunia"
              label="22MARET"
            />
          </ul>
          <ul className="cards__items">
            <CardItemKalender
              src="hari-meteorologi.png"
              text="Hari Meteorologi"
              label="23MARET"
            />
            <CardItemKalender
              src="hari-bumi.jpg"
              text="Hari Bumi"
              label="22APRIL"
            />
            <CardItemKalender
              src="hayati.jpg"
              text="Hari Keanekaragaman Hayati"
              label="21MEI"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsKelender;
