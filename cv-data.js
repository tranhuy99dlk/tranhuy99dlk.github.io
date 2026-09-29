/* =====================================================================
   cv-data.js — TOÀN BỘ NỘI DUNG CV NẰM Ở ĐÂY. CHỈ CẦN SỬA FILE NÀY.
   =====================================================================

   QUY TẮC VIẾT (đọc 1 lần là đủ):

   1. Chữ song ngữ:   { vi: "Tiếng Việt", en: "English" }
      Chữ giống nhau ở 2 ngôn ngữ thì viết thẳng:  "JIRA"

   2. In đậm: bọc bằng 2 dấu sao  →  "**Quản lý dự án:** nội dung..."

   3. Mỗi mục trong danh sách [ ... ] cách nhau bằng DẤU PHẨY.
      Lỗi hay gặp nhất: quên dấu phẩy giữa 2 mục, hoặc thiếu dấu " đóng.
      Nếu gõ sai, trang sẽ hiện khung đỏ báo số dòng lỗi (không trắng trơn).

   4. Muốn ẩn cả một mục (ví dụ Chứng chỉ): để mảng rỗng  certifications: []

   5. Thứ tự hiển thị = thứ tự viết trong file. Muốn đưa việc mới lên đầu,
      đặt nó lên đầu mảng experience.

   6. Icon cho "Năng lực cốt lõi": calendar | bulb | pulse | doc | shield | users | chart

   Dòng có chú thích  // KIỂM TRA  là số liệu đang lệch giữa các bản CV gốc.
   ===================================================================== */

window.CV = {

  /* ---------- Cài đặt chung ---------- */
  settings: {
    defaultLang: "vi",          // "vi" hoặc "en": ngôn ngữ mặc định khi mở trang
    updated: "09/2026",         // nhớ sửa mỗi lần cập nhật
    showPhone: true,            // false = ẩn số điện thoại khỏi trang công khai
    siteUrl: "https://USERNAME.github.io/"   // TODO: thay USERNAME
  },

  /* ---------- Phần đầu trang ---------- */
  profile: {
    name:     { vi: "Trần Đình Huy", en: "Tran Dinh Huy" },
    title:    { vi: "Tư vấn Giải pháp Chuyển đổi số · Business Analyst · Quản lý Dự án CNTT",
                en: "Digital Transformation Consultant · Business Analyst · IT Project Manager" },
    eyebrow:  "HealthTech · GovTech · ERP",
    pitch:    { vi: "Tôi biến quy trình nghiệp vụ phức tạp của bệnh viện và cơ quan nhà nước thành hệ thống số vận hành ổn định — kiểm soát trọn vòng đời từ Pre-sale, khảo sát, đặc tả, UAT đến Go-live và bàn giao.",
                en: "I turn complex hospital and public-sector workflows into digital systems that run reliably — owning the full lifecycle from pre-sale, discovery and specification through UAT, go-live and handover." },
    email:    "tranhuy99dlk@gmail.com",
    phone:    "+84847271199",   // dạng quốc tế, dùng cho nút gọi
    phoneDisplay: "0847 27 11 99",
    location: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam" },
    linkedin: ""                // dán link LinkedIn vào đây nếu có; để trống = ẩn
  },

  /* ---------- 6 con số nổi bật (nên giữ 3 hoặc 6 ô cho cân) ---------- */
  metrics: [
    { num: "4+",     label: { vi: "năm triển khai chuyển đổi số (Y tế · Chính quyền · ERP)", en: "years delivering digital transformation (Health · Gov · ERP)" } },
    { num: "04",     label: { vi: "dự án điều phối song song", en: "projects run concurrently" } },
    { num: "60",     label: { vi: "cơ sở y tế (04 bệnh viện + 56 trạm y tế)", en: "healthcare sites (4 hospitals + 56 health stations)" } },
    { num: "58.000", label: { vi: "người dùng khối chính quyền", en: "public-sector users" } },
    { num: "2.000+", label: { vi: "người dùng cuối được đào tạo chuyển giao", en: "end users trained" } },   // KIỂM TRA: bản EN ghi 5,000; 30 lớp × ~200 = ~6.000
    { num: ">90%",   label: { vi: "tỷ lệ nghiệm thu UAT (eDIG)", en: "UAT acceptance rate (eDIG)" } }
  ],

  /* ---------- Tổng quan: mỗi phần tử là 1 đoạn văn ---------- */
  about: [
    { vi: "Chuyên gia **Tư vấn triển khai & Quản lý dự án CNTT** trong lĩnh vực **Chuyển đổi số Y tế (HealthTech)** và **Chính quyền số (GovTech)**. Giai đoạn 2022–2026 trực tiếp điều phối **04 dự án chạy song song**, kiểm soát trọn vòng đời Pre-sale → Kick-off → triển khai → UAT → Go-live → nghiệm thu theo phạm vi, tiến độ, ngân sách và chất lượng.",
      en: "An **IT implementation consultant and project manager** specialising in **healthcare (HealthTech)** and **public-sector (GovTech)** digital transformation. From 2022 to 2026 I ran **4 concurrent projects**, owning the full lifecycle — pre-sale, kick-off, rollout, UAT, go-live and acceptance — against scope, schedule, budget and quality." },
    { vi: "Am hiểu kiến trúc và luồng nghiệp vụ của hệ sinh thái **HIS, EMR, LIS, RIS/PACS, ERP** và cơ chế liên thông **Cổng giám định BHYT Quốc gia**. Thế mạnh: chuẩn hóa quy trình triển khai (SOP), quản lý stakeholder đa phòng ban, kiểm soát rủi ro trên JIRA/Confluence theo Agile – Scrum, và đào tạo chuyển giao với tư cách **Giảng viên nội bộ được chứng nhận**.",
      en: "Deep working knowledge of **HIS, EMR, LIS, RIS/PACS and ERP** architectures and of integration with Vietnam's **National Health Insurance (BHYT) assessment gateway**. Strengths: standardising delivery processes (SOPs), managing multi-department stakeholders, risk control in JIRA/Confluence under Agile–Scrum, and user enablement as a **certified internal trainer**." }
  ],

  /* ---------- Năng lực cốt lõi (nên giữ số chẵn: 2, 4, 6) ---------- */
  expertise: [
    { icon: "calendar",
      title: { vi: "Quản lý dự án & danh mục dự án", en: "Project & Portfolio Management" },
      text:  { vi: "Lập Master Plan; quản lý phạm vi – tiến độ – ngân sách – chất lượng; kiểm soát rủi ro và Change Request; điều phối nguồn lực đa chức năng (BA, Dev, Tester, PS) theo Agile/Scrum trên JIRA, Confluence.",
               en: "Master planning; scope, schedule, budget and quality control; risk and change-request management; coordinating cross-functional teams (BA, Dev, Tester, PS) with Agile/Scrum in JIRA and Confluence." } },
    { icon: "bulb",
      title: { vi: "Tư vấn giải pháp & Pre-sale", en: "Solution Consulting & Pre-sale" },
      text:  { vi: "Khảo sát hiện trạng hạ tầng và nghiệp vụ; phân tích nhu cầu; xây dựng hồ sơ giải pháp (Proposal) và phương án kỹ thuật tổng thể; demo sản phẩm, thực hiện POC; hỗ trợ hồ sơ kỹ thuật phục vụ đấu thầu.",
               en: "Current-state infrastructure and process assessment; needs analysis; solution proposals and end-to-end technical designs; product demos and POCs; technical documentation for public tenders." } },
    { icon: "pulse",
      title: { vi: "Nghiệp vụ Healthcare IT & GovTech", en: "Healthcare IT & GovTech Domain" },
      text:  { vi: "HIS, EMR, LIS, RIS/PACS; liên thông Cổng giám định BHYT; tuân thủ TT 54/2017/TT-BYT, TT 46/2018/TT-BYT, TT 13/2025/TT-BYT; ERP (Tài chính – Kế toán, Kho vận); số hóa tài liệu hành chính công; phân quyền RBAC.",
               en: "HIS, EMR, LIS, RIS/PACS; BHYT gateway integration; compliance with Ministry of Health Circulars 54/2017, 46/2018 and 13/2025; ERP (finance & accounting, inventory); public-records digitisation; RBAC." } },
    { icon: "doc",
      title: { vi: "Chuẩn hóa quy trình & phát triển đội ngũ", en: "Process Standardisation & Enablement" },
      text:  { vi: "Xây dựng SOP, tài liệu đặc tả (SRS, FSD, Use Case) và bộ tiêu chuẩn quản lý dự án; biên soạn giáo trình, tổ chức đào tạo chuyển giao; đánh giá tuân thủ quy trình (PQA), điều phối UAT và cải tiến liên tục.",
               en: "SOPs, specifications (SRS, FSD, Use Cases) and project-management standards; training curricula and handover programmes; process-compliance reviews (PQA), UAT coordination and continuous improvement." } }
  ],

  /* ---------- Kinh nghiệm làm việc (mới nhất đặt trên cùng) ----------
     Mẫu thêm công việc mới — copy khối dưới, bỏ dấu // ở đầu dòng:
     // { role:    { vi: "Chức danh", en: "Job title" },
     //   org:     { vi: "Tên công ty · Thành phố", en: "Company · City" },
     //   period:  "08/2026 – nay",
     //   bullets: [
     //     { vi: "**Điểm nhấn:** việc đã làm + kết quả đo được.", en: "**Highlight:** what you did + measurable result." }
     //   ] },
  */
  experience: [
    { role:   { vi: "Chuyên viên Tư vấn & Triển khai Giải pháp (kiêm Quản lý dự án)", en: "Solution Consultant & Implementation Specialist (concurrent Project Manager)" },
      org:    { vi: "VNPT – Tập đoàn Bưu chính Viễn thông Việt Nam · Đà Nẵng", en: "VNPT – Vietnam Posts and Telecommunications Group · Da Nang" },
      period: "10/2022 – 07/2026",
      bullets: [
        { vi: "**Quản lý danh mục dự án:** Điều phối đồng thời 04 dự án chuyển đổi số quy mô lớn cho khối Y tế và Chính quyền; lập Master Plan, phân bổ nguồn lực đa chức năng (BA, Dev, Tester, PS) và giám sát tiến độ tập trung trên JIRA theo Agile – Scrum.",
          en: "**Portfolio management:** Ran 4 large digital transformation projects in parallel for healthcare and government clients; built the Master Plan, allocated cross-functional resources (BA, Dev, Tester, PS) and tracked delivery centrally in JIRA under Agile–Scrum." },
        { vi: "**Tư vấn giải pháp & Pre-sale:** Rút ngắn chu kỳ chốt phương án kỹ thuật với khách hàng khối công qua khảo sát hiện trạng hạ tầng, đánh giá ngân sách – nhu cầu, xây dựng Proposal, thiết kế phương án kỹ thuật tổng thể và chủ trì POC.",
          en: "**Solution consulting & pre-sale:** Shortened technical sign-off cycles with public-sector clients by assessing current infrastructure, budget and needs, writing proposals, designing the end-to-end technical solution and leading POCs." },
        { vi: "**Kiểm soát chất lượng & rủi ro:** Bảo vệ tiến độ Go-live bằng việc chủ trì rà soát chéo SRS/FSD cùng BA – Dev – PO để phát hiện sớm điểm nghẽn logic; quản lý vòng đời lỗi và Change Request trên JIRA, điều phối hotfix và hỗ trợ onsite.",
          en: "**Quality & risk control:** Protected go-live dates by leading SRS/FSD cross-reviews with BA, Dev and PO to surface logic gaps early; managed the defect lifecycle and change requests in JIRA, coordinated hotfixes and onsite support." },
        { vi: "**Đào tạo chuyển giao:** Biên soạn tài liệu hướng dẫn vận hành, giáo trình và trực tiếp đứng lớp với tư cách Giảng viên nội bộ được chứng nhận cho hơn 2.000 người dùng cuối khối hành chính công và y tế.",   // KIỂM TRA con số 2.000
          en: "**Training & handover:** Wrote operating manuals and curricula and taught, as a certified internal trainer, more than 2,000 end users across public administration and healthcare." }
      ] },

    { role:   { vi: "Chuyên viên Tư vấn & Triển khai Phần mềm ERP", en: "ERP Implementation Consultant" },
      org:    { vi: "ARITO – Công ty Giải pháp Kế toán & ERP · TP. Hồ Chí Minh", en: "ARITO – Accounting & ERP Solutions · Ho Chi Minh City" },
      period: "03/2022 – 09/2022",
      bullets: [
        { vi: "Đưa vào vận hành Go-live ổn định hệ thống ERP cho 02 doanh nghiệp đối tác (Thọ Phát, MYREHAB): thiết lập Master Data, thiết kế kịch bản kiểm thử nghiệp vụ Tài chính – Kế toán và Kho vận, kiểm tra dữ liệu backend trước bàn giao.",
          en: "Brought ERP systems to a stable go-live for 2 client companies (Tho Phat, MYREHAB): set up master data, designed finance, accounting and inventory test scenarios, and validated backend data before handover." },
        { vi: "Khảo sát quy trình vận hành thực tế, xây dựng SOP và tài liệu đặc tả chức năng (FSD), tối ưu luồng phối hợp giữa đội lập trình và QA/QC.",
          en: "Mapped clients' real operating processes and produced SOPs and functional specifications (FSD), streamlining collaboration between developers and QA/QC." },
        { vi: "Chuyển ngữ yêu cầu nghiệp vụ quản trị thành tham số kỹ thuật; thiết kế Wireframe/UI layout bằng Figma cho hệ thống POS tại cửa hàng.",
          en: "Translated management requirements into system parameters; designed POS wireframes and UI layouts in Figma for in-store terminals." }
      ] },

    { role:   { vi: "Thực tập sinh Lập trình viên", en: "Software Developer Intern" },
      org:    { vi: "FPT Software · Đà Nẵng", en: "FPT Software · Da Nang" },
      period: "10/2021 – 02/2022",
      bullets: [
        { vi: "Lập trình backend (Java, C#), tối ưu mã nguồn và Unit Test; nắm nền tảng cấu trúc code, logic phần mềm và vòng đời SDLC theo Agile/Scrum — nền móng để giao tiếp hiệu quả với đội kỹ thuật.",
          en: "Backend development (Java, C#), code optimisation and unit testing; hands-on grounding in code structure and the SDLC under Agile/Scrum — the base for working credibly with engineering teams." }
      ] }
  ],

  /* ---------- Dự án trọng điểm ----------
     tag: nhãn nhỏ góc phải (HealthTech, GovTech, ERP...)
     kpis: các ô số liệu; để [] nếu không có số */
  projects: [
    { name:   { vi: "Hệ sinh thái Y tế số VNPT: HIS, LIS, RIS/PACS & Bệnh án điện tử EMR", en: "VNPT Digital Health Ecosystem: HIS, LIS, RIS/PACS & EMR" },
      role:   { vi: "Quản lý dự án", en: "Project Manager" },
      period: "12/2022 – 07/2026",
      tag:    "HealthTech",
      kpis: [
        { num: "04", label: { vi: "bệnh viện đa khoa/chuyên khoa", en: "general/specialty hospitals" } },
        { num: "56", label: { vi: "trạm y tế", en: "health stations" } }
      ],
      bullets: [
        { vi: "Số hóa toàn trình khám chữa bệnh, thanh toán và lưu trữ bệnh án điện tử; chủ trì khảo sát hiện trạng, chuẩn hóa quy trình và triển khai báo cáo thống kê tự động giúp giảm thời gian xử lý hồ sơ bệnh nhân.",
          en: "Digitised the end-to-end care pathway — admission, treatment, billing and electronic records; led current-state assessment, process standardisation and automated statistical reporting that cut patient-record processing time." },
        { vi: "Đánh giá kiến trúc liên thông dữ liệu giữa HIS với LIS, RIS/PACS và Cổng giám định BHYT Quốc gia, bảo đảm tuân thủ TT 54/2017/TT-BYT, TT 46/2018/TT-BYT và TT 13/2025/TT-BYT.",
          en: "Reviewed the data-integration architecture between HIS, LIS, RIS/PACS and the national BHYT assessment gateway to ensure compliance with Circulars 54/2017, 46/2018 and 13/2025 of the Ministry of Health." },
        { vi: "Quản lý phạm vi, ngân sách và nguồn lực trên JIRA; tổ chức cấu hình tham số, kịch bản UAT và quy trình bảo trì – hỗ trợ vận hành sau triển khai.",
          en: "Managed scope, budget and resources in JIRA; ran parameter configuration, UAT scenarios and the post-launch maintenance and support process." }
      ] },

    { name:   { vi: "Hệ thống Sổ tay Đảng viên Điện tử Thành phố Đà Nẵng", en: "Da Nang City Digital Party-Member Handbook" },
      role:   { vi: "Tư vấn Giải pháp & Trưởng nhóm Triển khai", en: "Solution Consultant & Implementation Lead" },
      period: "05/2024 – 05/2025",
      tag:    "GovTech",
      kpis: [
        { num: "58.000", label: { vi: "người dùng · 16 Đảng bộ", en: "users · 16 party committees" } },
        { num: ">80%",   label: { vi: "tương tác thường xuyên sau 3 tháng", en: "regular engagement after 3 months" } },
        { num: "12",     label: { vi: "tháng — đúng cam kết tiến độ", en: "months — delivered on schedule" } },
        { num: "30",     label: { vi: "khóa đào tạo (~200 học viên/lớp)", en: "training cohorts (~200 each)" } }
      ],
      bullets: [
        { vi: "Dẫn dắt nhóm triển khai; thiết lập cơ chế thu thập phản hồi và điều phối hotfix kịp thời qua JIRA.",
          en: "Led the rollout team; set up the feedback loop and fast hotfix coordination through JIRA." },
        { vi: "Tái thiết kế luồng nghiệp vụ và trải nghiệm người dùng cho các phân hệ cốt lõi (Sinh hoạt chi bộ số, Tính điểm thi đua, phân quyền bảo mật RBAC) dựa trên User Research.",
          en: "Redesigned business flows and UX for core modules (digital branch meetings, performance scoring, RBAC security) based on user research." },
        { vi: "Bảo vệ tính nhất quán dữ liệu qua bóc tách, rà soát và import đồng bộ dữ liệu tham số quy mô lớn; biên soạn slide kỹ thuật và tài liệu hướng dẫn chuẩn hóa.",
          en: "Safeguarded data consistency through large-scale extraction, review and synchronised import of reference data; produced technical slides and standardised user guides." }
      ] },

    { name:   { vi: "eDIG — Nền tảng Kho lưu trữ số", en: "eDIG — Digital Archive Platform" },
      role:   "Business Analyst & Tester",
      period: "12/2023 – 12/2024",
      tag:    "GovTech",
      kpis: [
        { num: ">90%", label: { vi: "nghiệm thu UAT sau 3 tháng", en: "UAT acceptance after 3 months" } },
        { num: "−30%", label: { vi: "lỗi phát sinh sau vận hành", en: "post-release defects" } },
        { num: "3×",   label: { vi: "tốc độ tra cứu văn bản", en: "faster document retrieval" } }
      ],
      bullets: [
        { vi: "Xây dựng ma trận kịch bản kiểm thử toàn diện và kiểm soát chặt vòng đời lỗi trên JIRA khi triển khai tại các cơ quan hành chính Đà Nẵng.",
          en: "Built a comprehensive test-scenario matrix and tightly managed the defect lifecycle in JIRA during rollout across Da Nang administrative agencies." },
        { vi: "Xây dựng SRS và Use Case từ khảo sát hiện trạng văn thư lưu trữ; phân tích luồng số hóa công văn (thu thập, phân loại, bóc tách OCR).",
          en: "Wrote the SRS and use cases from a survey of records-management practice; analysed the document-digitisation flow (capture, classification, OCR extraction)." }
      ] }
  ],

  /* ---------- Kỹ năng & công cụ ---------- */
  skills: [
    { group: { vi: "Phân tích nghiệp vụ", en: "Business Analysis" },
      items: ["Requirement Elicitation", "Gap Analysis", "BPMN", "SRS", "FSD", "Use Case", "User Story", "Acceptance Criteria", "User Story Mapping", "User Research"] },
    { group: { vi: "Quản trị dự án & chất lượng", en: "Delivery & Quality" },
      items: ["Agile / Scrum", "SDLC", "Master Plan", "Change Request", "Stakeholder Management", "UAT", "PQA", "SOP", "Data Migration"] },
    { group: { vi: "Lĩnh vực chuyên môn", en: "Domain" },
      items: ["HIS", "EMR", "LIS", "RIS/PACS", { vi: "Cổng giám định BHYT", en: "BHYT Gateway" }, "ERP", "POS", "RBAC", { vi: "Số hóa văn bản / OCR", en: "Records digitisation / OCR" }] },
    { group: { vi: "Công cụ & kỹ thuật", en: "Tools & Technical" },
      items: ["JIRA", "Confluence", "Figma", "Draw.io", "MS Visio", "Office 365", { vi: "SQL (cơ bản)", en: "SQL (basic)" }, "Java", "C#"] }
  ],

  /* ---------- Học vấn ----------
     badge: nhãn xanh nhỏ (vd "Đang học"); bỏ dòng badge nếu không cần */
  education: [
    { title:  { vi: "Thạc sĩ Hệ thống thông tin quản lý (MIS)", en: "Master of Management Information Systems (MIS)" },
      detail: { vi: "Trường Đại học Kinh tế – Đại học Đà Nẵng · 2025 – 2027", en: "University of Economics – The University of Da Nang · 2025 – 2027" },
      badge:  { vi: "Đang học", en: "In progress" } },
    { title:  { vi: "Cử nhân Công nghệ phần mềm (Chương trình chuẩn CMU)", en: "B.Eng. Software Engineering (CMU-standard programme)" },
      detail: { vi: "Trường Đại học Duy Tân · 2017 – 2022 · Xếp loại Khá", en: "Duy Tan University · 2017 – 2022 · Grade: Good" } }
  ],

  /* ---------- Chứng chỉ & thành tích ---------- */
  certifications: [
    { title:  { vi: "Chứng chỉ Giảng viên nội bộ chuyên nghiệp", en: "Professional Internal Trainer Certificate" },
      detail: { vi: "Trung tâm Phát triển Nguồn Nhân lực, VNPT · 2025", en: "VNPT Human Resource Development Centre · 2025" } },
    { title:  { vi: "Kỹ năng viết hồ sơ dự án & Thuyết trình chuyên sâu CNTT", en: "IT Project Proposal Writing & Presentation" },
      detail: { vi: "Tập đoàn VNPT · 2023", en: "VNPT Group · 2023" } },
    { title:  { vi: "Công đoàn viên xuất sắc", en: "Outstanding Trade Union Member" },
      detail: { vi: "Tập đoàn VNPT · 2024", en: "VNPT Group · 2024" } }
  ],

  /* ---------- Khối kêu gọi liên hệ cuối trang ---------- */
  closing: {
    title: { vi: "Cần triển khai một hệ thống y tế hoặc chính quyền số?", en: "Planning a healthcare or public-sector rollout?" },
    text:  { vi: "Tôi sẵn sàng trao đổi về cơ hội hợp tác, tư vấn giải pháp hoặc vị trí toàn thời gian.", en: "I'm open to consulting engagements, solution advisory and full-time roles." }
  }
};
