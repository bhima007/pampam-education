import Baby from "./Baby";
import Child from "./Child";
import Mature from "./Mature";
import News from "./News";
import Old from "./Old";
import Teenager from "./Teenager";

const breadcrumb = [{ label: "Home", href: "/" }];

export default function Content({ selectedCategory }) {
  const showContentByCategory = () => {
    switch (selectedCategory) {
      case "bayi":
        return <Baby />;
      case "anak":
        return <Child />;
      case "remaja":
        return <Teenager />;
      case "dewasa":
        return <Mature />;
      case "lansia":
        return <Old />;
      case "berita":
        return <News />;
      default:
        break;
    }
  };

  return (
    <div style={{ margin: "40px auto", padding: 20 }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: 14, marginBottom: 12, color: "#888" }}>
        {breadcrumb.map((item, idx) =>
          item.href ? (
            <span key={idx}>
              <a
                href={item.href}
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                {item.label}
              </a>
              {` / ${selectedCategory}`}
            </span>
          ) : (
            <span key={idx}>{item.label}</span>
          )
        )}
      </nav>

      {/* Content */}
      <section>{showContentByCategory()}</section>
    </div>
  );
}
