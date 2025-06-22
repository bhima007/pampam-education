import React from "react";
import { FaBlind, FaChild, FaRegNewspaper, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { MdChildCare } from "react-icons/md";

const icons = {
  bayi: <MdChildCare />,
  anak: <FaChild />,
  remaja: <FaUserGraduate />,
  dewasa: <FaUserTie />,
  lansia: <FaBlind />,
  blog: <FaRegNewspaper/>,
};

const categories = [
  { key: "bayi", label: "Bayi & Balita", sub: "<5th", icon: icons.bayi },
  { key: "anak", label: "Anak-anak", sub: "5-9 tahun", icon: icons.anak },
  { key: "remaja", label: "Remaja", sub: "10-18 tahun", icon: icons.remaja },
  { key: "dewasa", label: "Dewasa", sub: "19-59 tahun", icon: icons.dewasa },
  { key: "lansia", label: "Lansia", sub: "60+ tahun", icon: icons.lansia },
  { key: "blog", label: "Blog", icon: icons.blog },
];

const Category = ({ selectedCategory, onCategoryClick }) => {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        gap: 16,
        overflow: "auto",
        padding: "18px 12px",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {categories.map((cat) => (
        <div
          key={cat.key}
          onClick={() => onCategoryClick && onCategoryClick(cat.key)}
          className={`flex flex-col items-center hover:shadow-xl p-2 ${
            cat.key == selectedCategory && "shadow-xl"
          }`}
          style={{
            cursor: "pointer",
            borderRadius: 12,
            minWidth: 140,
            textAlign: "center",
            transition: "box-shadow 0.2s",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>{cat.icon}</div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>{cat.label}</div>
          <div style={{ fontSize: 10, fontWeight: 500, color: "#aaa" }}>
            {cat.sub}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
