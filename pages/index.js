import { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  const generate = () => {
    setResult(`
I. LÝ DO CHỌN ĐỀ TÀI
Trong quá trình giảng dạy, tôi nhận thấy ${topic} còn tồn tại những hạn chế nhất định...

II. MỤC TIÊU
- Nâng cao chất lượng dạy và học
- Phát triển năng lực, phẩm chất học sinh theo GDPT 2018

III. BIỆN PHÁP THỰC HIỆN
1. Đổi mới phương pháp dạy học
2. Tăng cường hoạt động trải nghiệm
3. Ứng dụng công nghệ thông tin

IV. HIỆU QUẢ
Học sinh học tập tích cực hơn, kết quả được cải thiện rõ rệt.
    `);
  };

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <h2>✍️ Trợ lý viết Sáng kiến kinh nghiệm</h2>

      <input
        style={{ width: "100%", padding: 10 }}
        placeholder="Nhập đề tài (VD: Dạy Toán lớp 4 theo hướng phát triển năng lực)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={generate}
        style={{ marginTop: 12, padding: 10 }}
      >
        Tạo sáng kiến
      </button>

      <pre style={{ marginTop: 16, whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </div>
  );
}
