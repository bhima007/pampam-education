import gambar1 from '../../../assets/home/child/1.png';
import gambar2 from '../../../assets/home/child/2.png';
import gambar3 from '../../../assets/home/child/3.png';

const photos = [gambar1, gambar2, gambar3];
const title = "Pentingnya Makanan Sehat untuk Anak-anak";
const date = "10 Juni 2024";
const longText = `
  <h2>Masa Emas Anak Usia 5-9 Tahun</h2>
  <p>
    Masa usia 5 hingga 9 tahun merupakan masa emas bagi pertumbuhan dan perkembangan anak. 
    Pada rentang usia ini, anak mengalami peningkatan aktivitas fisik, perkembangan kognitif yang pesat, 
    serta mulai membentuk kebiasaan makan yang akan terbawa hingga dewasa. Oleh karena itu, penting untuk memastikan 
    anak mendapatkan asupan makanan yang sehat, bergizi, dan seimbang setiap harinya.
  </p>

  <h2>Peran Makanan Sehat dalam Tumbuh Kembang Anak</h2>
  <p>
    Makanan sehat memiliki peran krusial dalam memastikan anak-anak tumbuh dan berkembang secara optimal, 
    baik secara fisik, kognitif, maupun emosional. Asupan makanan yang seimbang membantu memastikan bahwa:
  </p>
  <ul>
    <li>Organ tubuh berkembang dengan sempurna, termasuk otak, jantung, paru-paru, dan sistem pencernaan.</li>
    <li>Sistem imun bekerja optimal, sehingga anak tidak mudah terserang penyakit seperti flu, diare, atau infeksi.</li>
    <li>Fungsi otak berjalan baik, menunjang kemampuan belajar, konsentrasi, dan memori di sekolah.</li>
    <li>Stamina dan energi cukup, untuk mendukung aktivitas bermain, belajar, dan eksplorasi lingkungan.</li>
  </ul>
  <p>
    Tanpa makanan bernutrisi, anak-anak akan kesulitan menjalani hari-hari mereka secara produktif dan ceria.
  </p>

  <h2>Komponen Penting dalam Makanan Sehat Anak</h2>
  <ul>
    <li>
      <strong>Karbohidrat kompleks:</strong> nasi merah, kentang rebus, roti gandum, jagung, ubi.
    </li>
    <li>
      <strong>Protein berkualitas tinggi:</strong>
      <ul>
        <li>Hewani: ayam, daging sapi tanpa lemak, ikan, telur, susu.</li>
        <li>Nabati: tahu, tempe, kacang-kacangan, edamame.</li>
      </ul>
    </li>
    <li>
      <strong>Lemak sehat:</strong> alpukat, minyak zaitun, kacang-kacangan, ikan berlemak seperti salmon.
    </li>
    <li>
      <strong>Vitamin dan mineral:</strong>
      <ul>
        <li>Vitamin A untuk penglihatan dan imun</li>
        <li>Vitamin D dan kalsium untuk tulang</li>
        <li>Zat besi untuk mencegah anemia</li>
      </ul>
    </li>
    <li>
      <strong>Serat dan antioksidan:</strong> buah-buahan berwarna (pisang, jeruk, apel, pepaya), 
      sayuran hijau (bayam, brokoli, wortel, kangkung).
    </li>
    <li>
      <strong>Air putih:</strong> minuman terbaik bagi anak. Hindari soda dan teh manis.
    </li>
  </ul>
  <p>
    Pola makan sehat: 3 kali makan utama dan 2 kali camilan sehat per hari.
  </p>

  <h2>Dampak Kurangnya Asupan Gizi Seimbang</h2>
  <ul>
    <li>Pertumbuhan terhambat (stunting)</li>
    <li>Kelebihan berat badan atau obesitas</li>
    <li>Anemia</li>
    <li>Gigi berlubang</li>
    <li>Menurunnya prestasi belajar</li>
    <li>Masalah perilaku dan emosi</li>
  </ul>

  <h2>Membentuk Pola Makan Sehat Sejak Dini</h2>
  <ul>
    <li>Menjadi teladan dalam memilih makanan sehat</li>
    <li>Makan bersama di meja makan</li>
    <li>Libatkan anak dalam menyiapkan makanan</li>
    <li>Hindari memaksa atau menghukum saat makan</li>
    <li>Batasi makanan olahan dan camilan tidak sehat</li>
    <li>Jadwalkan waktu makan secara teratur</li>
  </ul>

  <h2>Pemantauan dan Konsultasi</h2>
  <ul>
    <li>Pengukuran berat dan tinggi badan secara berkala</li>
    <li>Pemeriksaan lingkar lengan atas jika dicurigai kurang gizi</li>
    <li>Evaluasi pola makan harian anak</li>
    <li>Observasi perkembangan motorik dan kognitif</li>
    <li>Konsultasi ke dokter anak, ahli gizi, atau puskesmas jika diperlukan</li>
  </ul>
`;

export default function Child() {
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
          width="656"
          height="369"
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
          alignItems: "center",
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
              height: "100%",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: longText }}
      ></div>
    </div>
  );
}
