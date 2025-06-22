const photos = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
];
const title = "Pentingnya Makanan Sehat untuk Bayi dan Balita";
const date = "10 Juni 2024";
const longText = `
Masa Bayi Balita adalah masa setelah dilahirkan sampai sebelum berumur 59 bulan, terdiri dari bayi baru lahir usia 0-28 hari, bayi usia 0-11 bulan dan anak balita usia 12 - 59 bulan. Kesehatan bayi dan balita sangat penting diperhatikan karena pada masa ini pertumbuhan dan perkembangan fisik serta mentalnya sangat cepat. Upaya Kesehatan bayi dan balita meliputi tata laksana dan rujukan, gizi, pemantauan pertumbuhan dan perkembangan, imunisasi, rehabilitasi dan perawatan jangka panjang pada penyakit kronis/langka, pola asuh dan stimulasi perkembangan, serta penyediaan lingkungan yang sehat dan aman. 

Selain upaya kesehatan tersebut, pada bayi,  kesehatan yang perlu diperhatikan adalah pencegahan infeksi, pelayanan neonatal esensial, pemberian makan bayi dan anak, skrining bayi baru lahir, perawatan BBLR, dan gizi bagi ibu menyusui hingga skiring pada balita. Kesehatan bayi dan balita sangat dipengaruhi oleh asupan makanan dan nutrisi yang cukup serta perawatan yang baik. Bayi dan balita yang sehat ditandai dengan berat badan, tinggi badan, dan lingkar kepala yang sesuai dengan usianya.

Pada masa bayi, kesehatan sangat ditentukan oleh nutrisi yang diberikan oleh ibu melalui ASI. Oleh karena itu, penting bagi ibu untuk memberikan ASI eksklusif selama 6 bulan pertama kehidupan bayi, kemudian dilanjutkan dengan MPASI yang sehat dan bergizi. Perawatan bayi juga perlu diperhatikan, seperti perawatan kulit, sanitasi dan kebersihan, serta vaksinasi untuk melindungi bayi dari penyakit. Sedangkan pada masa balita, selain nutrisi yang baik, juga perlu diperhatikan kegiatan fisik dan stimulasi yang dapat membantu perkembangan otak dan keterampilan sosial.

Kegiatan fisik yang tepat dapat membantu pertumbuhan dan perkembangan otot serta tulang pada anak. Selain itu, orangtua juga perlu memberikan stimulasi pada anak, seperti membaca cerita dan bermain, untuk membantu meningkatkan keterampilan bahasa, sosial, dan kognitif. Kesehatan bayi dan balita dapat dilihat dari berat badan, tinggi badan, lingkar kepala, serta aktivitas dan respons yang sesuai dengan usianya. Jika ada keluhan atau tanda-tanda tidak sehat pada bayi atau balita, segera konsultasikan ke dokter atau fasilitas kesehatan terdekat.


`;

export default function Baby() {
  return (
    <div>
      {/* Title */}
      <h1 style={{ fontSize: 32, margin: "0 0 8px 0", color: "#222" }}>
        {title}
      </h1>

      {/* Date */}
      <div style={{ fontSize: 15, color: "#888", marginBottom: 24 }}>
        {date}
      </div>

      {/* Video */}
      <div className="flex justify-center" style={{ marginBottom: 24 }}>
        <iframe
          width="100%"
          height="400"
          style={{ maxWidth: 800 }}
          src="https://www.youtube.com/embed/knwuEedQ--4"
          title="5 Sumber Makanan Sehat untuk Anak"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Foto */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        {photos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Makanan sehat ${idx + 1}`}
            style={{
              width: 200,
              height: 140,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div style={{ fontSize: 18, lineHeight: 1.5, color: "#333" }}>
        {longText.split("\n").map((p, i) =>
          p.trim() ? (
            <p key={i}>
              {p.trim()}
              <br />
              <br />
            </p>
          ) : null
        )}
      </div>
    </div>
  );
}
