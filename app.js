const navItems = [
  {
    id: "dashboard",
    label: "儀表板",
    icon: "DB",
    sections: [
      { id: "dashboard-overview", label: "關鍵指標" },
      { id: "dashboard-routing", label: "分派與人力" },
      { id: "dashboard-queue", label: "今日待辦" },
      { id: "dashboard-portfolio", label: "玩家與對話" }
    ]
  },
  {
    id: "players",
    label: "VIP 玩家",
    icon: "P",
    sections: [
      { id: "players-list", label: "玩家列表" },
      { id: "players-profile", label: "360 主檔" },
      { id: "players-work", label: "關聯工作" }
    ]
  },
  {
    id: "inbox",
    label: "收件匣",
    icon: "IN",
    sections: [
      { id: "inbox-queue", label: "待回覆佇列" },
      { id: "inbox-chat", label: "對話處理" },
      { id: "inbox-context", label: "玩家與話術" }
    ]
  },
  {
    id: "ai",
    label: "AI 客服",
    icon: "AI",
    sections: [
      { id: "ai-triage", label: "AI 分流" },
      { id: "ai-rules", label: "決策規則" },
      { id: "ai-audit", label: "知識與稽核" }
    ]
  },
  {
    id: "tickets",
    label: "工單",
    icon: "T",
    sections: [
      { id: "tickets-metrics", label: "SLA 指標" },
      { id: "tickets-board", label: "看板流程" },
      { id: "tickets-list", label: "案件列表" }
    ]
  },
  {
    id: "bonus",
    label: "優惠",
    icon: "B",
    sections: [
      { id: "bonus-request", label: "申請表" },
      { id: "bonus-checks", label: "發放檢查" },
      { id: "bonus-approvals", label: "待審批" }
    ]
  },
  {
    id: "tasks",
    label: "任務",
    icon: "TS",
    sections: [
      { id: "tasks-queue", label: "任務佇列" },
      { id: "tasks-rules", label: "自動規則" }
    ]
  },
  {
    id: "risk",
    label: "風控中心",
    icon: "R",
    sections: [
      { id: "risk-alerts", label: "風險警示" },
      { id: "risk-instructions", label: "客服指引" }
    ]
  },
  {
    id: "rg",
    label: "責任博彩",
    icon: "RG",
    sections: [
      { id: "rg-metrics", label: "RG 指標" },
      { id: "rg-watchlist", label: "觀察名單" },
      { id: "rg-controls", label: "限制引導" },
      { id: "rg-cases", label: "Case 流程" }
    ]
  },
  {
    id: "reports",
    label: "報表",
    icon: "RP",
    sections: [
      { id: "reports-metrics", label: "總覽指標" },
      { id: "reports-executive", label: "主管摘要" },
      { id: "reports-guide", label: "閱讀說明" },
      { id: "reports-cards", label: "報表卡片" }
    ]
  },
  {
    id: "settings",
    label: "設定",
    icon: "S",
    sections: [
      { id: "settings-vip", label: "VIP 規則" },
      { id: "settings-sla", label: "SLA 規則" },
      { id: "settings-templates", label: "話術權限" }
    ]
  }
];

const localeNames = {
  zh: "中文",
  en: "English",
  vi: "Tiếng Việt"
};

const localeReplacements = {
  zh: {
    "VIP CS / CRM Prototype": "VIP CS / CRM 原型",
    "Player Relationship": "玩家關係管理",
    "Compliance Guard": "合規守門",
    "Main navigation": "主要導覽",
    "Search": "搜尋",
    "Language": "語言",
    "Dashboard": "儀表板",
    "VIP Players": "VIP 玩家",
    "Inbox": "收件匣",
    "Tickets": "工單",
    "Bonus & Compensation": "優惠與補償",
    "Bonus": "優惠",
    "Tasks": "任務",
    "Risk Center": "風控中心",
    "Responsible Gaming": "責任博彩",
    "Reports": "報表",
    "Settings": "設定",
    "VIP Control Center": "VIP 控制中心",
    "Omnichannel Service": "全渠道客服",
    "SLA Operations": "SLA 營運",
    "Cost Control": "成本控管",
    "Retention Workflow": "留存流程",
    "Follow-up Tasks": "跟進任務",
    "Risk Collaboration": "風控協作",
    "Compliance Control": "合規控管",
    "Management View": "管理視角",
    "System Rules": "系統規則",
    "Active VIP Today": "今日活躍 VIP",
    "VIP Deposit Today": "今日 VIP 入金",
    "VIP Withdrawal Today": "今日 VIP 出金",
    "Open Tickets / RG": "未結工單 / RG",
    "Today Queue": "今日待辦",
    "Urgent VIP Tasks": "緊急 VIP 任務",
    "Guardrails": "操作防線",
    "Risk / RG Alerts": "風控 / RG 警示",
    "Assigned Portfolio": "負責玩家組合",
    "My VIP Players": "我的 VIP 玩家",
    "Open Conversations": "開啟對話",
    "Waiting Queue": "等待佇列",
    "Player": "玩家",
    "Last Login": "最近登入",
    "Net Deposit": "淨入金",
    "Risk": "風險",
    "Action": "動作",
    "Waiting": "等待",
    "Priority": "優先級",
    "Portfolio": "玩家組合",
    "Player List + 360 Profile": "玩家列表 + 360 主檔",
    "Open Profile": "Player 360",
    "Send Message": "發送訊息",
    "Create Ticket": "建立工單",
    "Add Note": "新增備註",
    "Issue Bonus": "發放優惠",
    "Escalate Risk": "升級風控",
    "RG Action": "RG 動作",
    "Assigned Agent": "指派客服",
    "KYC / Currency": "KYC / 幣別",
    "Last Deposit": "最近入金",
    "Last Bet": "最近投注",
    "Last Contact": "最近聯繫",
    "Value Snapshot": "玩家價值",
    "Total Deposit": "累積入金",
    "Total Withdrawal": "累積出金",
    "Monthly GGR": "月 GGR",
    "Bonus Cost": "優惠成本",
    "30 Days Trend": "近 30 天趨勢",
    "Deposit": "入金",
    "Turnover": "流水",
    "Active Time Heatmap": "活躍時間熱力圖",
    "Relationship & Behavior": "關係與行為",
    "Player Summary": "玩家摘要",
    "Templates": "話術模板",
    "Ticket Management": "工單管理",
    "All Tickets": "全部工單",
    "SLA Queue": "SLA 佇列",
    "Open / Escalated Tickets": "未結 / 升級工單",
    "Ticket": "工單",
    "Category": "類型",
    "Status": "狀態",
    "Team": "團隊",
    "Player ID": "玩家 ID",
    "Offer Type": "優惠類型",
    "Amount": "金額",
    "Turnover Requirement": "流水要求",
    "Reason": "原因",
    "Pre-issue Checks": "發放前檢查",
    "Approval Queue": "審批佇列",
    "Route": "路徑",
    "Workflow": "流程",
    "VIP Follow-up Tasks": "VIP 跟進任務",
    "My Queue": "我的佇列",
    "Automation Rules": "自動任務規則",
    "Risk / Fraud": "風控 / 詐欺",
    "Collaboration Flow": "協作流程",
    "Tag": "標籤",
    "CS Instruction": "客服指引",
    "Required Approval": "所需審批",
    "RG Alerts": "RG 警示",
    "Promo Blocked": "促銷封鎖",
    "Cooling-off Active": "冷靜期啟用",
    "Deposit Limit Requests": "存款限制申請",
    "RG Watchlist": "RG 觀察名單",
    "Allowed Actions": "允許操作",
    "Management Reports": "管理報表",
    "VIP Value Report": "VIP 價值報表",
    "Agent Performance": "客服績效",
    "Retention Report": "留存報表",
    "Bonus Cost Report": "優惠成本報表",
    "Complaint Report": "投訴報表",
    "Risk Report": "風險報表",
    "Rules & Controls": "規則與控管",
    "VIP Level Rules": "VIP 等級規則",
    "SLA Rules": "SLA 規則",
    "Template Control": "話術控管",
    "Open": "未結",
    "Review": "審核",
    "Escalated": "已升級",
    "Payment Review": "Payment 審核",
    "High": "高",
    "Medium": "中",
    "Low": "低",
    "Player ID, username, tags, tickets": "Player ID、帳號、標籤、工單",
    "Player ID, username, tags": "Player ID、帳號、標籤"
  },
  en: {
    "主要導覽": "Main navigation",
    "玩家關係管理": "Player Relationship Management",
    "Player ID、帳號、標籤、工單": "Player ID, username, tags, tickets",
    "Player ID、帳號、標籤": "Player ID, username, tags",
    "語系已切換": "Language switched",
    "已切換角色視角": "Role view switched",
    "：": ": ",
    "；": "; ",
    "，": ", ",
    "。": ".",
    "、": ", ",
    "搜尋": "Search",
    "語言": "Language",
    "帳號": "Username",
    "標籤": "Tags",
    "新增工單": "New Ticket",
    "關閉": "Close",
    "合規守門": "Compliance Guard",
    "RG / Risk checks enabled": "RG / Risk checks enabled",
    "VIP 控制中心": "VIP Control Center",
    "儀表板": "Dashboard",
    "VIP 玩家": "VIP Players",
    "收件匣": "Inbox",
    "工單": "Tickets",
    "優惠": "Bonus",
    "任務": "Tasks",
    "風控中心": "Risk Center",
    "責任博彩": "Responsible Gaming",
    "報表": "Reports",
    "設定": "Settings",
    "全渠道客服": "Omnichannel Service",
    "SLA 營運": "SLA Operations",
    "成本控管": "Cost Control",
    "優惠與補償": "Bonus & Compensation",
    "留存流程": "Retention Workflow",
    "跟進任務": "Follow-up Tasks",
    "風控協作": "Risk Collaboration",
    "合規控管": "Compliance Control",
    "管理視角": "Management View",
    "系統規則": "System Rules",
    "今日待辦": "Today Queue",
    "緊急 VIP 任務": "Urgent VIP Tasks",
    "查看任務": "View Tasks",
    "進入風控": "Open Risk",
    "負責玩家組合": "Assigned Portfolio",
    "管理玩家": "Manage Players",
    "開啟對話": "Open Conversations",
    "進入 Inbox": "Open Inbox",
    "等待佇列": "Waiting Queue",
    "等待": "Waiting",
    "玩家": "Player",
    "最近登入": "Last Login",
    "淨入金": "Net Deposit",
    "風險": "Risk",
    "動作": "Action",
    "查看": "View",
    "搜尋玩家": "Search Player",
    "VIP 等級": "VIP Level",
    "風險狀態": "Risk Status",
    "全部": "All",
    "找不到符合條件的 VIP 玩家": "No VIP players match the filters",
    "提領限制": "Withdrawal restricted",
    "優惠限制": "Bonus restricted",
    "正常": "Normal",
    "補件中": "Pending documents",
    "通過": "Passed",
    "限制": "Restricted",
    "需確認": "Needs review",
    "可執行": "Allowed",
    "阻擋": "Blocked",
    "待輸入": "Pending input",
    "可引導": "Can guide",
    "需審核": "Approval needed",
    "指派客服": "Assigned Agent",
    "最近入金": "Last Deposit",
    "最近投注": "Last Bet",
    "最近聯繫": "Last Contact",
    "玩家價值": "Value Snapshot",
    "近 30 天趨勢": "30 Days Trend",
    "活躍時間熱力圖": "Active Time Heatmap",
    "關係與行為": "Relationship & Behavior",
    "客服可見操作指引": "CS Visible Instructions",
    "偏好聯絡": "Preferred Contact",
    "常玩遊戲": "Favorite Games",
    "投注習慣": "Betting Pattern",
    "入出金模式": "Payment Pattern",
    "重要備註": "Important Notes",
    "禁止促銷式挽留": "Promotional retention blocked",
    "不可發送刺激繼續投注的優惠或話術，必要時提示冷靜期與限額工具。": "Do not send offers or wording that encourages continued betting. Suggest cooling-off or limit tools when needed.",
    "優惠需審批": "Bonus requires approval",
    "額外 bonus、返水、補償均需 Team Leader + Risk 審核。": "Extra bonus, cashback, or compensation requires Team Leader + Risk approval.",
    "出金資訊受限": "Withdrawal information restricted",
    "不可承諾到帳時間；僅可說明可揭露的審核狀態。": "Do not promise arrival time. Only disclose approved review status.",
    "可標準服務": "Standard service allowed",
    "可依 VIP 等級、優惠資格與 SLA 進行一般服務。": "Proceed with standard service by VIP level, eligibility, and SLA.",
    "核准話術": "Approved Templates",
    "玩家摘要": "Player Summary",
    "今日輸贏": "Today P/L",
    "最近出金": "Recent Withdrawal",
    "風險標籤": "Risk Tags",
    "不可發放優惠原因": "Reason bonus is unavailable",
    "輸入客服回覆，系統會即時檢查敏感話術": "Type a reply. Sensitive wording is checked in real time.",
    "話術檢查：目前未偵測到高風險語句": "Wording check: no high-risk phrase detected",
    "話術風險：偵測到": "Wording risk: detected",
    "請改用合規模板或 RG 提醒。": "Please use a compliant template or RG reminder.",
    "送出回覆": "Send Reply",
    "轉工單": "Create Ticket",
    "已逾時": "Overdue",
    "小時": "hours",
    "分鐘": "minutes",
    "分鐘前": "minutes ago",
    "小時前": "hours ago",
    "昨日": "Yesterday",
    "今日": "Today",
    "剛剛": "Just now",
    "未回覆": "Unreplied",
    "進入對應審批": "enter the proper approval route",
    "Issue Bonus": "Issue Bonus",
    "優惠與補償申請": "Bonus & Compensation Request",
    "發放前檢查": "Pre-issue Checks",
    "待審批申請": "Pending Approvals",
    "送出審批": "Submit Approval",
    "發放原因、玩家情境、客服判斷與可供稽核的依據": "Reason, player context, CS judgment, and auditable basis",
    "提交後會寫入玩家紀錄與稽核紀錄。": "Submission writes to player and audit records.",
    "玩家為 RG High，促銷與刺激性挽留禁止；補償需 Compliance 先確認。": "Player is RG High. Promotional retention is blocked; compensation needs Compliance confirmation.",
    "未達硬性阻擋，仍需避免刺激性話術。": "No hard block, but avoid stimulating wording.",
    "玩家有優惠濫用或套利標籤，額外優惠需 Risk 審核。": "Player has bonus abuse or arbitrage tags. Extra offers require Risk review.",
    "未偵測優惠濫用標籤。": "No bonus abuse tag detected.",
    "KYC 或 AML 狀態未完全通過，高額優惠與 manual credit 需暫停或審核。": "KYC or AML is not fully cleared. High-value offers and manual credit must pause or be reviewed.",
    "KYC 狀態可支援一般發放流程。": "KYC status supports the standard issue flow.",
    "金額達高額門檻，需 VIP Manager 與相關部門審批。": "Amount reaches the high-value threshold and requires VIP Manager plus related approval.",
    "金額未達高額門檻，可依玩家風險進入對應審批。": "Amount is below the high-value threshold and follows the player risk approval route.",
    "請輸入金額後檢查審批路徑。": "Enter an amount to check the approval route.",
    "審批中": "In approval",
    "Team Leader 審核": "Team Leader review",
    "Manager 審核": "Manager review",
    "客服可見風控指引": "CS Visible Risk Instructions",
    "新增 Risk Alert": "New Risk Alert",
    "處理紀錄": "Handling Note",
    "風控協作中心": "Risk Collaboration Center",
    "責任博彩控制中心": "Responsible Gaming Control Center",
    "需關注玩家": "Watchlist Players",
    "客服限制與引導": "CS Restrictions & Guidance",
    "套用 RG Action": "Apply RG Action",
    "促銷訊息自動停止": "Promotional messages auto-blocked",
    "本週新增": "New this week",
    "件待 Compliance": "pending Compliance",
    "VIP 價值、客服績效與風險報表": "VIP value, agent performance, and risk reports",
    "設定中心": "Settings Center",
    "分層規則": "Segmentation Rules",
    "服務時限": "Service SLA",
    "話術權限": "Template Permissions",
    "新增跟進": "New Follow-up",
    "待處理任務": "Open Tasks",
    "自動任務規則": "Automation Rules",
    "建立任務": "Create Task",
    "描述問題、玩家情境、已查證資訊與下一步": "Describe the issue, player context, verified facts, and next step",
    "這裡的資料會進入稽核紀錄，請避免不必要個資與主觀標籤": "This goes into audit records. Avoid unnecessary personal data or subjective labels.",
    "為什麼需要跟進，以及客服應注意的合規限制": "Why follow-up is needed and compliance limits CS should note",
    "記錄玩家狀態、訊號與採取限制的依據": "Record player status, signals, and basis for restrictions",
    "建立工單": "Create Ticket",
    "儲存備註": "Save Note",
    "送出 RG 審核": "Submit RG Review",
    "玩家資料": "Player Profile",
    "新增備註": "Add Note",
    "設定跟進": "Set Follow-up",
    "全部": "All"
  },
  vi: {
    "VIP CS / CRM Prototype": "Nguyên mẫu VIP CS / CRM",
    "Player Relationship": "Quản lý quan hệ người chơi",
    "Compliance Guard": "Bộ lọc tuân thủ",
    "Main navigation": "Điều hướng chính",
    "Search": "Tìm kiếm",
    "Language": "Ngôn ngữ",
    "Dashboard": "Bảng điều khiển",
    "VIP Players": "Người chơi VIP",
    "Inbox": "Hộp thư",
    "Tickets": "Ticket",
    "Bonus & Compensation": "Khuyến mãi & bồi hoàn",
    "Bonus": "Khuyến mãi",
    "Tasks": "Nhiệm vụ",
    "Risk Center": "Trung tâm rủi ro",
    "Responsible Gaming": "Chơi có trách nhiệm",
    "Reports": "Báo cáo",
    "Settings": "Cài đặt",
    "VIP Control Center": "Trung tâm điều hành VIP",
    "Omnichannel Service": "CS đa kênh",
    "SLA Operations": "Vận hành SLA",
    "Cost Control": "Kiểm soát chi phí",
    "Retention Workflow": "Quy trình giữ chân",
    "Follow-up Tasks": "Nhiệm vụ theo dõi",
    "Risk Collaboration": "Phối hợp rủi ro",
    "Compliance Control": "Kiểm soát tuân thủ",
    "Management View": "Góc nhìn quản lý",
    "System Rules": "Quy tắc hệ thống",
    "Active VIP Today": "VIP hoạt động hôm nay",
    "VIP Deposit Today": "Nạp VIP hôm nay",
    "VIP Withdrawal Today": "Rút VIP hôm nay",
    "Open Tickets / RG": "Ticket mở / RG",
    "Today Queue": "Hàng đợi hôm nay",
    "Urgent VIP Tasks": "Nhiệm vụ VIP khẩn cấp",
    "Guardrails": "Rào chắn vận hành",
    "Risk / RG Alerts": "Cảnh báo Risk / RG",
    "Assigned Portfolio": "Danh mục phụ trách",
    "My VIP Players": "VIP của tôi",
    "Open Conversations": "Cuộc trò chuyện mở",
    "Waiting Queue": "Hàng đợi",
    "Player": "Người chơi",
    "Last Login": "Đăng nhập gần nhất",
    "Net Deposit": "Nạp ròng",
    "Risk": "Rủi ro",
    "Action": "Thao tác",
    "Waiting": "Đợi",
    "Priority": "Ưu tiên",
    "Portfolio": "Danh mục",
    "Player List + 360 Profile": "Danh sách người chơi + hồ sơ 360",
    "Open Profile": "Player 360",
    "Send Message": "Gửi tin nhắn",
    "Create Ticket": "Tạo ticket",
    "Add Note": "Thêm ghi chú",
    "Issue Bonus": "Phát ưu đãi",
    "Escalate Risk": "Chuyển Risk",
    "RG Action": "Hành động RG",
    "Assigned Agent": "CS phụ trách",
    "KYC / Currency": "KYC / Tiền tệ",
    "Last Deposit": "Nạp gần nhất",
    "Last Bet": "Cược gần nhất",
    "Last Contact": "Liên hệ gần nhất",
    "Value Snapshot": "Tổng quan giá trị",
    "Total Deposit": "Tổng nạp",
    "Total Withdrawal": "Tổng rút",
    "Monthly GGR": "GGR tháng",
    "Bonus Cost": "Chi phí ưu đãi",
    "30 Days Trend": "Xu hướng 30 ngày",
    "Deposit": "Nạp",
    "Turnover": "Vòng cược",
    "Active Time Heatmap": "Heatmap hoạt động",
    "Relationship & Behavior": "Quan hệ & hành vi",
    "Player Summary": "Tóm tắt người chơi",
    "Templates": "Mẫu câu",
    "Ticket Management": "Quản lý ticket",
    "All Tickets": "Tất cả ticket",
    "SLA Queue": "Hàng đợi SLA",
    "Open / Escalated Tickets": "Ticket mở / đã chuyển cấp",
    "Ticket": "Ticket",
    "Category": "Loại",
    "Status": "Trạng thái",
    "Team": "Đội",
    "Player ID": "Player ID",
    "Offer Type": "Loại ưu đãi",
    "Amount": "Số tiền",
    "Turnover Requirement": "Yêu cầu vòng cược",
    "Reason": "Lý do",
    "Pre-issue Checks": "Kiểm tra trước khi phát",
    "Approval Queue": "Hàng đợi duyệt",
    "Route": "Luồng",
    "Workflow": "Quy trình",
    "VIP Follow-up Tasks": "Nhiệm vụ theo dõi VIP",
    "My Queue": "Hàng đợi của tôi",
    "Automation Rules": "Quy tắc tự động",
    "Risk / Fraud": "Rủi ro / Gian lận",
    "Collaboration Flow": "Luồng phối hợp",
    "Tag": "Nhãn",
    "CS Instruction": "Hướng dẫn CS",
    "Required Approval": "Phê duyệt cần thiết",
    "RG Alerts": "Cảnh báo RG",
    "Promo Blocked": "Chặn khuyến mãi",
    "Cooling-off Active": "Cooling-off đang bật",
    "Deposit Limit Requests": "Yêu cầu giới hạn nạp",
    "RG Watchlist": "Danh sách theo dõi RG",
    "Allowed Actions": "Thao tác được phép",
    "Management Reports": "Báo cáo quản lý",
    "VIP Value Report": "Báo cáo giá trị VIP",
    "Agent Performance": "Hiệu suất CS",
    "Retention Report": "Báo cáo giữ chân",
    "Bonus Cost Report": "Báo cáo chi phí ưu đãi",
    "Complaint Report": "Báo cáo khiếu nại",
    "Risk Report": "Báo cáo rủi ro",
    "Rules & Controls": "Quy tắc & kiểm soát",
    "VIP Level Rules": "Quy tắc cấp VIP",
    "SLA Rules": "Quy tắc SLA",
    "Template Control": "Kiểm soát mẫu câu",
    "Open": "Mở",
    "Review": "Đang xét",
    "Escalated": "Đã chuyển cấp",
    "Payment Review": "Payment xét duyệt",
    "High": "Cao",
    "Medium": "Trung bình",
    "Low": "Thấp",
    "主要導覽": "Điều hướng chính",
    "玩家關係管理": "Quản lý quan hệ người chơi",
    "Player ID、帳號、標籤、工單": "Player ID, tài khoản, nhãn, ticket",
    "Player ID、帳號、標籤": "Player ID, tài khoản, nhãn",
    "語系已切換": "Đã đổi ngôn ngữ",
    "已切換角色視角": "Đã đổi vai trò",
    "：": ": ",
    "；": "; ",
    "，": ", ",
    "。": ".",
    "、": ", ",
    "搜尋": "Tìm kiếm",
    "語言": "Ngôn ngữ",
    "帳號": "Tài khoản",
    "標籤": "Nhãn",
    "新增工單": "Tạo ticket",
    "關閉": "Đóng",
    "合規守門": "Bộ lọc tuân thủ",
    "RG / Risk checks enabled": "Đã bật kiểm tra RG / Risk",
    "VIP 控制中心": "Trung tâm điều hành VIP",
    "儀表板": "Bảng điều khiển",
    "VIP 玩家": "Người chơi VIP",
    "收件匣": "Hộp thư",
    "工單": "Ticket",
    "優惠": "Khuyến mãi",
    "任務": "Nhiệm vụ",
    "風控中心": "Trung tâm rủi ro",
    "責任博彩": "Chơi có trách nhiệm",
    "報表": "Báo cáo",
    "設定": "Cài đặt",
    "全渠道客服": "CS đa kênh",
    "SLA 營運": "Vận hành SLA",
    "成本控管": "Kiểm soát chi phí",
    "優惠與補償": "Khuyến mãi & bồi hoàn",
    "留存流程": "Quy trình giữ chân",
    "跟進任務": "Nhiệm vụ theo dõi",
    "風控協作": "Phối hợp rủi ro",
    "合規控管": "Kiểm soát tuân thủ",
    "管理視角": "Góc nhìn quản lý",
    "系統規則": "Quy tắc hệ thống",
    "今日待辦": "Hàng đợi hôm nay",
    "緊急 VIP 任務": "Nhiệm vụ VIP khẩn cấp",
    "查看任務": "Xem nhiệm vụ",
    "進入風控": "Mở Risk",
    "負責玩家組合": "Danh mục phụ trách",
    "管理玩家": "Quản lý người chơi",
    "開啟對話": "Cuộc trò chuyện mở",
    "進入 Inbox": "Mở Inbox",
    "等待佇列": "Hàng đợi",
    "等待": "Đợi",
    "玩家": "Người chơi",
    "最近登入": "Đăng nhập gần nhất",
    "淨入金": "Nạp ròng",
    "風險": "Rủi ro",
    "動作": "Thao tác",
    "查看": "Xem",
    "搜尋玩家": "Tìm người chơi",
    "VIP 等級": "Cấp VIP",
    "風險狀態": "Trạng thái rủi ro",
    "全部": "Tất cả",
    "找不到符合條件的 VIP 玩家": "Không có VIP phù hợp bộ lọc",
    "提領限制": "Hạn chế rút tiền",
    "優惠限制": "Hạn chế khuyến mãi",
    "正常": "Bình thường",
    "補件中": "Chờ bổ sung hồ sơ",
    "通過": "Đạt",
    "限制": "Hạn chế",
    "需確認": "Cần kiểm tra",
    "可執行": "Được phép",
    "阻擋": "Chặn",
    "待輸入": "Chờ nhập",
    "可引導": "Có thể hướng dẫn",
    "需審核": "Cần duyệt",
    "指派客服": "CS phụ trách",
    "最近入金": "Nạp gần nhất",
    "最近投注": "Cược gần nhất",
    "最近聯繫": "Liên hệ gần nhất",
    "玩家價值": "Tổng quan giá trị",
    "近 30 天趨勢": "Xu hướng 30 ngày",
    "活躍時間熱力圖": "Heatmap hoạt động",
    "關係與行為": "Quan hệ & hành vi",
    "客服可見操作指引": "Hướng dẫn CS được thấy",
    "偏好聯絡": "Kênh liên hệ ưa thích",
    "常玩遊戲": "Game ưa thích",
    "投注習慣": "Thói quen cược",
    "入出金模式": "Mẫu nạp/rút",
    "重要備註": "Ghi chú quan trọng",
    "禁止促銷式挽留": "Chặn giữ chân bằng khuyến mãi",
    "不可發送刺激繼續投注的優惠或話術，必要時提示冷靜期與限額工具。": "Không gửi ưu đãi hoặc lời nhắn kích thích tiếp tục cược. Khi cần, gợi ý cooling-off hoặc công cụ giới hạn.",
    "優惠需審批": "Khuyến mãi cần duyệt",
    "額外 bonus、返水、補償均需 Team Leader + Risk 審核。": "Bonus, hoàn trả hoặc bồi hoàn thêm cần Team Leader + Risk duyệt.",
    "出金資訊受限": "Thông tin rút tiền bị giới hạn",
    "不可承諾到帳時間；僅可說明可揭露的審核狀態。": "Không cam kết thời gian nhận tiền. Chỉ nói trạng thái xét duyệt được phép công bố.",
    "可標準服務": "Được phục vụ chuẩn",
    "可依 VIP 等級、優惠資格與 SLA 進行一般服務。": "Có thể phục vụ theo cấp VIP, điều kiện ưu đãi và SLA.",
    "核准話術": "Mẫu đã duyệt",
    "玩家摘要": "Tóm tắt người chơi",
    "今日輸贏": "P/L hôm nay",
    "最近出金": "Rút gần nhất",
    "風險標籤": "Nhãn rủi ro",
    "不可發放優惠原因": "Lý do không thể phát ưu đãi",
    "輸入客服回覆，系統會即時檢查敏感話術": "Nhập phản hồi CS, hệ thống kiểm tra câu nhạy cảm theo thời gian thực",
    "話術檢查：目前未偵測到高風險語句": "Kiểm tra lời nhắn: chưa phát hiện câu rủi ro cao",
    "話術風險：偵測到": "Rủi ro lời nhắn: phát hiện",
    "請改用合規模板或 RG 提醒。": "Vui lòng dùng mẫu tuân thủ hoặc nhắc RG.",
    "送出回覆": "Gửi phản hồi",
    "轉工單": "Chuyển ticket",
    "已逾時": "Quá hạn",
    "小時": "giờ",
    "分鐘": "phút",
    "分鐘前": "phút trước",
    "小時前": "giờ trước",
    "昨日": "Hôm qua",
    "今日": "Hôm nay",
    "剛剛": "Vừa xong",
    "未回覆": "Chưa phản hồi",
    "Issue Bonus": "Phát ưu đãi",
    "優惠與補償申請": "Yêu cầu khuyến mãi & bồi hoàn",
    "發放前檢查": "Kiểm tra trước khi phát",
    "待審批申請": "Yêu cầu chờ duyệt",
    "送出審批": "Gửi duyệt",
    "發放原因、玩家情境、客服判斷與可供稽核的依據": "Lý do, bối cảnh người chơi, nhận định CS và căn cứ kiểm toán",
    "提交後會寫入玩家紀錄與稽核紀錄。": "Sau khi gửi sẽ ghi vào hồ sơ người chơi và audit log.",
    "玩家為 RG High，促銷與刺激性挽留禁止；補償需 Compliance 先確認。": "Người chơi RG High. Cấm giữ chân bằng khuyến mãi; bồi hoàn cần Compliance xác nhận trước.",
    "未達硬性阻擋，仍需避免刺激性話術。": "Chưa bị chặn cứng, vẫn cần tránh lời nhắn kích thích.",
    "玩家有優惠濫用或套利標籤，額外優惠需 Risk 審核。": "Người chơi có nhãn lạm dụng ưu đãi hoặc arbitrage. Ưu đãi thêm cần Risk duyệt.",
    "未偵測優惠濫用標籤。": "Chưa phát hiện nhãn lạm dụng ưu đãi.",
    "KYC 或 AML 狀態未完全通過，高額優惠與 manual credit 需暫停或審核。": "KYC hoặc AML chưa hoàn tất. Ưu đãi giá trị cao và manual credit cần tạm dừng hoặc xét duyệt.",
    "KYC 狀態可支援一般發放流程。": "Trạng thái KYC cho phép quy trình phát chuẩn.",
    "金額達高額門檻，需 VIP Manager 與相關部門審批。": "Số tiền đạt ngưỡng cao, cần VIP Manager và bộ phận liên quan duyệt.",
    "金額未達高額門檻，可依玩家風險進入對應審批。": "Số tiền dưới ngưỡng cao, đi theo luồng duyệt theo rủi ro người chơi.",
    "請輸入金額後檢查審批路徑。": "Nhập số tiền để kiểm tra luồng duyệt.",
    "審批中": "Đang duyệt",
    "Team Leader 審核": "Team Leader duyệt",
    "Manager 審核": "Manager duyệt",
    "客服可見風控指引": "Hướng dẫn rủi ro CS được thấy",
    "新增 Risk Alert": "Tạo Risk Alert",
    "處理紀錄": "Ghi chú xử lý",
    "風控協作中心": "Trung tâm phối hợp rủi ro",
    "責任博彩控制中心": "Trung tâm chơi có trách nhiệm",
    "需關注玩家": "Người chơi cần theo dõi",
    "客服限制與引導": "Hạn chế & hướng dẫn CS",
    "套用 RG Action": "Áp dụng RG Action",
    "促銷訊息自動停止": "Tin khuyến mãi tự động bị chặn",
    "本週新增": "Mới trong tuần",
    "件待 Compliance": "chờ Compliance",
    "VIP 價值、客服績效與風險報表": "Báo cáo giá trị VIP, hiệu suất CS và rủi ro",
    "設定中心": "Trung tâm cài đặt",
    "分層規則": "Quy tắc phân tầng",
    "服務時限": "SLA dịch vụ",
    "話術權限": "Quyền mẫu câu",
    "新增跟進": "Tạo theo dõi",
    "待處理任務": "Nhiệm vụ mở",
    "自動任務規則": "Quy tắc tự động",
    "建立任務": "Tạo nhiệm vụ",
    "描述問題、玩家情境、已查證資訊與下一步": "Mô tả vấn đề, bối cảnh người chơi, thông tin đã xác minh và bước tiếp theo",
    "這裡的資料會進入稽核紀錄，請避免不必要個資與主觀標籤": "Nội dung này vào audit log. Tránh dữ liệu cá nhân không cần thiết hoặc nhãn chủ quan.",
    "為什麼需要跟進，以及客服應注意的合規限制": "Lý do cần theo dõi và giới hạn tuân thủ CS cần chú ý",
    "記錄玩家狀態、訊號與採取限制的依據": "Ghi trạng thái người chơi, tín hiệu và căn cứ áp dụng hạn chế",
    "建立工單": "Tạo ticket",
    "儲存備註": "Lưu ghi chú",
    "送出 RG 審核": "Gửi duyệt RG",
    "玩家資料": "Hồ sơ người chơi",
    "新增備註": "Thêm ghi chú",
    "設定跟進": "Đặt theo dõi"
  }
};

const players = [
  {
    id: "P-88031",
    username: "dragon888",
    name: "林柏翰",
    vipLevel: 5,
    tier: "Whale / Platinum",
    agent: "Ivy Chen",
    region: "Taiwan",
    language: "繁中",
    currency: "USDT",
    kyc: "通過",
    status: "正常",
    riskLevel: "Medium",
    rgRisk: "High",
    lastLogin: "10 分鐘前",
    lastContact: "24 分鐘前",
    lastDeposit: "12 分鐘前",
    lastBet: "18 分鐘前",
    tags: ["High Value", "Big Loser", "RG Risk", "Complaint Risk"],
    notes: "偏好快速、直接的說明；避免談及家人與借貸。近期情緒波動明顯。",
    birthday: "08-22",
    preferredContact: "LINE",
    tone: "快速回覆 / 正式",
    metrics: {
      totalDeposit: 1280000,
      monthDeposit: 182000,
      totalWithdrawal: 742000,
      monthWithdrawal: 96000,
      netDeposit: 538000,
      turnover: 9450000,
      ggr: 188000,
      ngr: 142500,
      bonusCost: 26000,
      cashbackCost: 19500,
      avgBet: 1650,
      activeDays: 26,
      ltv: 780000,
      todayPl: -42000
    },
    behavior: {
      games: ["Baccarat", "Live Casino", "Sportsbook"],
      bettingTime: "22:00-03:00",
      depositPattern: "大額、短間隔入金",
      withdrawalPattern: "常取消出金後再投注",
      bonusPattern: "偏好返水與 loss compensation",
      device: "iOS Safari / trusted",
      locations: "Taipei, Taichung",
      session: "平均 4.6 小時"
    },
    trend: [18, 24, 20, 31, 44, 39, 51, 48, 63, 70, 57, 76],
    wagerTrend: [48, 52, 67, 61, 74, 81, 78, 88, 95, 91, 104, 112],
    heat: [0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 2, 0, 0, 1, 1, 2, 3, 3, 3, 2, 1, 0]
  },
  {
    id: "P-87144",
    username: "mei_gold",
    name: "陳美儀",
    vipLevel: 4,
    tier: "Top Player",
    agent: "Ken Wu",
    region: "Hong Kong",
    language: "繁中 / English",
    currency: "HKD",
    kyc: "補件中",
    status: "提領限制",
    riskLevel: "High",
    rgRisk: "Medium",
    lastLogin: "2 小時前",
    lastContact: "1 小時前",
    lastDeposit: "今日 11:20",
    lastBet: "今日 12:05",
    tags: ["AML Watch", "Payment Risk", "Churn Risk"],
    notes: "要求出金速度高，近期 KYC 補件未完成。任何出金承諾需使用核准話術。",
    birthday: "12-01",
    preferredContact: "WhatsApp",
    tone: "精簡 / 具體時程",
    metrics: {
      totalDeposit: 840000,
      monthDeposit: 118000,
      totalWithdrawal: 690000,
      monthWithdrawal: 146000,
      netDeposit: 150000,
      turnover: 5320000,
      ggr: 92000,
      ngr: 70500,
      bonusCost: 14500,
      cashbackCost: 7000,
      avgBet: 980,
      activeDays: 18,
      ltv: 430000,
      todayPl: 12800
    },
    behavior: {
      games: ["Sportsbook", "Slots"],
      bettingTime: "18:00-23:00",
      depositPattern: "週末集中入金",
      withdrawalPattern: "高頻小額出金",
      bonusPattern: "活動碼使用率高",
      device: "Android Chrome / new device",
      locations: "Hong Kong, Macau",
      session: "平均 2.1 小時"
    },
    trend: [32, 28, 36, 42, 39, 35, 38, 40, 33, 27, 25, 22],
    wagerTrend: [62, 60, 58, 57, 55, 53, 49, 46, 42, 39, 36, 34],
    heat: [0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 2, 0, 0, 1, 2, 2, 2, 3, 3, 2, 1, 0, 0]
  },
  {
    id: "P-86002",
    username: "raymax",
    name: "王睿",
    vipLevel: 3,
    tier: "High Turnover",
    agent: "Ivy Chen",
    region: "Malaysia",
    language: "English / 简中",
    currency: "MYR",
    kyc: "通過",
    status: "正常",
    riskLevel: "Low",
    rgRisk: "Low",
    lastLogin: "昨日 21:18",
    lastContact: "2 日前",
    lastDeposit: "3 日前",
    lastBet: "昨日 22:12",
    tags: ["Potential VIP", "Bonus Sensitive"],
    notes: "喜歡遊戲活動與固定返水。對升級進度很在意。",
    birthday: "03-19",
    preferredContact: "Telegram",
    tone: "輕鬆 / 具數字",
    metrics: {
      totalDeposit: 315000,
      monthDeposit: 51000,
      totalWithdrawal: 206000,
      monthWithdrawal: 33000,
      netDeposit: 109000,
      turnover: 2180000,
      ggr: 51000,
      ngr: 39000,
      bonusCost: 8500,
      cashbackCost: 3500,
      avgBet: 420,
      activeDays: 21,
      ltv: 230000,
      todayPl: 2800
    },
    behavior: {
      games: ["Slots", "Fishing", "Live Casino"],
      bettingTime: "20:00-01:00",
      depositPattern: "固定週期入金",
      withdrawalPattern: "週末出金",
      bonusPattern: "偏好 free spin",
      device: "Windows Chrome / trusted",
      locations: "Kuala Lumpur",
      session: "平均 1.8 小時"
    },
    trend: [10, 12, 14, 18, 20, 19, 23, 28, 31, 30, 34, 37],
    wagerTrend: [24, 29, 31, 33, 39, 42, 45, 52, 55, 59, 62, 68],
    heat: [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1, 2, 3, 3, 2, 2, 1, 0, 0]
  },
  {
    id: "P-84518",
    username: "ace_mika",
    name: "Mika Sato",
    vipLevel: 4,
    tier: "Top Player",
    agent: "Mina Ho",
    region: "Japan",
    language: "日本語",
    currency: "JPY",
    kyc: "通過",
    status: "正常",
    riskLevel: "Medium",
    rgRisk: "Medium",
    lastLogin: "7 日前",
    lastContact: "6 日前",
    lastDeposit: "8 日前",
    lastBet: "7 日前",
    tags: ["Churn Risk", "High Value", "Big Winner"],
    notes: "近期大贏後沉默。建議關係維護，但不應使用刺激投注話術。",
    birthday: "05-30",
    preferredContact: "Email",
    tone: "禮貌 / 細節完整",
    metrics: {
      totalDeposit: 720000,
      monthDeposit: 34000,
      totalWithdrawal: 612000,
      monthWithdrawal: 128000,
      netDeposit: 108000,
      turnover: 4740000,
      ggr: 61000,
      ngr: 40500,
      bonusCost: 10500,
      cashbackCost: 10000,
      avgBet: 880,
      activeDays: 9,
      ltv: 360000,
      todayPl: 0
    },
    behavior: {
      games: ["Baccarat", "Roulette"],
      bettingTime: "19:00-22:00",
      depositPattern: "活動前入金",
      withdrawalPattern: "贏後即出金",
      bonusPattern: "生日禮與邀請制活動",
      device: "iPad Safari / trusted",
      locations: "Tokyo, Osaka",
      session: "平均 2.8 小時"
    },
    trend: [44, 41, 39, 35, 31, 26, 20, 18, 14, 10, 8, 6],
    wagerTrend: [84, 79, 73, 70, 64, 55, 43, 36, 28, 20, 15, 10],
    heat: [0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 2, 0, 0, 0, 1, 2, 2, 3, 2, 1, 0, 0, 0]
  },
  {
    id: "P-83977",
    username: "bonusfox",
    name: "周志明",
    vipLevel: 2,
    tier: "Mid Value",
    agent: "Ken Wu",
    region: "Singapore",
    language: "English / 繁中",
    currency: "SGD",
    kyc: "通過",
    status: "優惠限制",
    riskLevel: "High",
    rgRisk: "Low",
    lastLogin: "35 分鐘前",
    lastContact: "未回覆 18 小時",
    lastDeposit: "今日 09:40",
    lastBet: "今日 10:15",
    tags: ["Bonus Abuse", "Arbitrage", "Fraud Risk"],
    notes: "投注模式符合套利與優惠濫用特徵。客服僅可使用一般說明，不可提供額外優惠。",
    birthday: "10-11",
    preferredContact: "Live Chat",
    tone: "正式 / 留稽核紀錄",
    metrics: {
      totalDeposit: 210000,
      monthDeposit: 42000,
      totalWithdrawal: 198000,
      monthWithdrawal: 39000,
      netDeposit: 12000,
      turnover: 1900000,
      ggr: 9000,
      ngr: -4000,
      bonusCost: 11000,
      cashbackCost: 2000,
      avgBet: 260,
      activeDays: 24,
      ltv: 48000,
      todayPl: 4500
    },
    behavior: {
      games: ["Sportsbook", "Matched betting"],
      bettingTime: "賽事前 10 分鐘",
      depositPattern: "優惠期集中",
      withdrawalPattern: "流水完成後即提領",
      bonusPattern: "高頻領取",
      device: "Multiple devices / suspicious",
      locations: "Singapore, VPN signals",
      session: "平均 42 分鐘"
    },
    trend: [20, 19, 18, 20, 21, 20, 19, 21, 20, 21, 20, 20],
    wagerTrend: [46, 49, 52, 51, 53, 55, 52, 56, 57, 58, 56, 59],
    heat: [0, 2, 3, 3, 0, 0, 1, 1, 0, 0, 2, 3, 0, 0, 1, 3, 3, 0, 0, 0, 1, 2, 3, 0]
  }
];

const conversations = [
  {
    id: "C-1008",
    playerId: "P-88031",
    channel: "LINE",
    waiting: "2 分鐘",
    topic: "連續入金後情緒波動",
    priority: "P0",
    status: "Open",
    messages: [
      { sender: "player", at: "14:01", body: "我今天一直輸，剛又入金一次，幫我看一下有沒有補償。" },
      { sender: "agent", at: "14:03", body: "我先協助確認帳戶狀態與可用選項，稍後會用合規核准的方式回覆你。" },
      { sender: "internal", at: "14:04", body: "系統提示：近 6 小時入金 5 次，虧損高於 30 日平均 3.2 倍。禁止促銷式挽留。" }
    ]
  },
  {
    id: "C-1007",
    playerId: "P-87144",
    channel: "WhatsApp",
    waiting: "11 分鐘",
    topic: "出金延遲 / KYC 補件",
    priority: "P1",
    status: "Open",
    messages: [
      { sender: "player", at: "13:38", body: "提款為什麼還沒到？昨天已經等很久。" },
      { sender: "agent", at: "13:43", body: "我已查到目前在 KYC 補件審核階段，會同步 Payment 與 Compliance 更新可揭露進度。" }
    ]
  },
  {
    id: "C-1004",
    playerId: "P-83977",
    channel: "Live Chat",
    waiting: "18 小時",
    topic: "要求額外優惠",
    priority: "P2",
    status: "Open",
    messages: [
      { sender: "player", at: "昨日 20:12", body: "我有達流水，應該還能再給我一次優惠吧？" },
      { sender: "internal", at: "昨日 20:13", body: "優惠限制：Bonus Abuse + Arbitrage。所有額外優惠需主管與 Risk 審核。" }
    ]
  }
];

const tickets = [
  {
    id: "T-5942",
    playerId: "P-87144",
    category: "Withdrawal Issue",
    priority: "P1",
    status: "Payment Review",
    team: "Payment",
    owner: "Payment Desk",
    sla: "due",
    due: "23 分鐘",
    description: "VIP 4 出金延遲，KYC 補件待確認。"
  },
  {
    id: "T-5938",
    playerId: "P-88031",
    category: "Responsible Gaming",
    priority: "P0",
    status: "Escalated",
    team: "Compliance",
    owner: "RG Officer",
    sla: "breached",
    due: "已逾時 8 分鐘",
    description: "短時間多次入金與高額虧損，需人工追蹤。"
  },
  {
    id: "T-5921",
    playerId: "P-86002",
    category: "Bonus Issue",
    priority: "P2",
    status: "Open",
    team: "VIP CS",
    owner: "Ivy Chen",
    sla: "safe",
    due: "2 小時 12 分",
    description: "Free Spin 派發條件確認。"
  },
  {
    id: "T-5899",
    playerId: "P-84518",
    category: "Churn Prevention",
    priority: "P1",
    status: "Open",
    team: "VIP CS",
    owner: "Mina Ho",
    sla: "due",
    due: "42 分鐘",
    description: "VIP 4 大贏後 7 日未登入，需關係維護。"
  }
];

const tasks = [
  { id: "F-812", playerId: "P-88031", type: "Big Loss Care", priority: "P0", due: "立即", status: "Open", reason: "6 小時虧損高於 30 日平均 3.2 倍" },
  { id: "F-799", playerId: "P-84518", type: "Churn Prevention", priority: "P1", due: "今日 18:00", status: "Open", reason: "VIP 4 已 7 天未登入" },
  { id: "F-785", playerId: "P-87144", type: "Withdrawal Follow-up", priority: "P1", due: "今日 15:00", status: "Open", reason: "大額出金審核進度需同步" },
  { id: "F-771", playerId: "P-86002", type: "VIP Upgrade Nudging", priority: "P2", due: "明日 12:00", status: "Open", reason: "接近 VIP 4 月流水門檻" }
];

const riskAlerts = [
  { id: "R-449", playerId: "P-88031", type: "RG Risk", severity: "High", status: "Open", action: "停止促銷訊息，建議冷靜期 / 限額工具" },
  { id: "R-441", playerId: "P-87144", type: "AML Watch", severity: "High", status: "Review", action: "KYC 補件完成前不可承諾出金時間" },
  { id: "R-430", playerId: "P-83977", type: "Bonus Abuse", severity: "High", status: "Open", action: "暫停優惠發放，升級 Risk 審核" },
  { id: "R-418", playerId: "P-84518", type: "Churn Risk", severity: "Medium", status: "Open", action: "關係維護，不使用刺激性投注話術" }
];

const agents = [
  { name: "Ivy Chen", role: "VIP CS", languages: ["繁中", "English"], skills: ["VIP 5", "RG Care"], capacity: 5, active: 3, status: "Available" },
  { name: "Ken Wu", role: "VIP CS", languages: ["繁中", "English"], skills: ["Payment", "KYC"], capacity: 5, active: 5, status: "At capacity" },
  { name: "Mina Ho", role: "VIP CS", languages: ["日本語", "English"], skills: ["Retention", "High Value"], capacity: 4, active: 2, status: "Available" },
  { name: "RG Officer", role: "Compliance", languages: ["繁中", "English"], skills: ["RG", "Self-exclusion"], capacity: 6, active: 4, status: "Available" },
  { name: "Payment Desk", role: "Payment", languages: ["繁中", "English"], skills: ["Withdrawal", "KYC"], capacity: 8, active: 7, status: "Busy" }
];

const routingRules = [
  { trigger: "VIP 5 + P0 / RG High", route: "RG Officer + VIP Manager", target: "1 分鐘首響，15 分鐘內決策" },
  { trigger: "Withdrawal + KYC / AML", route: "Payment Desk + Compliance", target: "30 分鐘內同步可揭露狀態" },
  { trigger: "Bonus Abuse / Arbitrage", route: "Risk Team", target: "禁止額外優惠，需留完整原因" },
  { trigger: "Churn Risk + VIP 4+", route: "負責客服 + Team Leader", target: "24 小時內關係維護" }
];

let rgCases = [
  {
    id: "RG-902",
    playerId: "P-88031",
    riskScore: 92,
    status: "Compliance Review",
    owner: "RG Officer",
    nextReview: "今日 16:30",
    actions: ["Promo Block", "Deposit Limit Suggested", "Cooling-off Offered"],
    evidence: ["6 小時入金 5 次", "今日虧損高於 30 日平均 3.2 倍", "聊天內容要求補償並出現情緒波動"],
    note: "不可使用促銷式挽留；僅能提供玩家保護工具與可用協助。"
  },
  {
    id: "RG-884",
    playerId: "P-84518",
    riskScore: 61,
    status: "Monitoring",
    owner: "Mina Ho",
    nextReview: "明日 12:00",
    actions: ["No Promo Retention", "Wellbeing Check"],
    evidence: ["VIP 4 大贏後 7 日未登入", "過去偏好生日禮與邀請制活動"],
    note: "可做關係維護，但不得暗示投注或使用 bonus 作為回流誘因。"
  }
];

let bonusRequests = [
  { id: "B-2041", playerId: "P-86002", type: "Free Spin", amount: 1200, status: "Team Leader 審核", route: "Medium", created: "今日 10:32" },
  { id: "B-2033", playerId: "P-84518", type: "Birthday Gift", amount: 5000, status: "Manager 審核", route: "High", created: "昨日 18:10" }
];

const savedLocale = (() => {
  try {
    return localStorage.getItem("vip-cs-locale") || "zh";
  } catch (error) {
    return "zh";
  }
})();

const templates = [
  {
    category: "Responsible Gaming",
    title: "大額虧損關懷",
    body: "我注意到你今天的遊玩強度比平常高。若你需要，我可以協助設定冷靜期、存款限制或投注限制。"
  },
  {
    category: "Withdrawal Delay",
    title: "出金審核說明",
    body: "目前款項正在例行審核流程中，我會協助追蹤可揭露的進度，並在狀態更新時通知你。"
  },
  {
    category: "Bonus Rejection",
    title: "優惠不符合資格",
    body: "我已協助確認目前帳戶不符合額外優惠條件，原因會依照平台規則與帳戶狀態判定。"
  },
  {
    category: "Complaint Handling",
    title: "投訴受理",
    body: "我已將你的問題建立為工單，會由相關團隊依 SLA 優先處理，並保留完整紀錄。"
  }
];

const aiKnowledgeBase = [
  {
    id: "KB-RG-001",
    category: "Responsible Gaming",
    title: "RG High 玩家回覆規範",
    owner: "Compliance",
    updated: "2026-06-20",
    summary: "禁止促銷式挽留，優先提供冷靜期、存款限制、投注限制與自我排除資訊。"
  },
  {
    id: "KB-PAY-014",
    category: "Withdrawal Delay",
    title: "出金審核可揭露話術",
    owner: "Payment",
    updated: "2026-06-18",
    summary: "不可承諾到帳時間；僅可說明目前可揭露的審核階段與下一次更新方式。"
  },
  {
    id: "KB-BON-008",
    category: "Bonus Request",
    title: "優惠補償審批與阻擋規則",
    owner: "VIP Manager",
    updated: "2026-06-16",
    summary: "RG High、Bonus Abuse、Arbitrage、KYC 未完成時不可自動發放優惠。"
  },
  {
    id: "KB-COM-005",
    category: "Complaint",
    title: "投訴受理與升級流程",
    owner: "Team Leader",
    updated: "2026-06-12",
    summary: "投訴需建立工單、標記 SLA、保留完整對話與內部處理紀錄。"
  }
];

let aiAuditEvents = [
  { id: "AI-9007", conversationId: "C-1008", action: "Blocked promo wording", status: "Guardrail", at: "今日 14:04" },
  { id: "AI-9003", conversationId: "C-1007", action: "Suggested Payment handoff", status: "Review", at: "今日 13:44" }
];

const state = {
  view: "dashboard",
  activeSection: "dashboard-overview",
  locale: localeNames[savedLocale] ? savedLocale : "zh",
  activePlayerId: "P-88031",
  activeConversationId: "C-1008",
  globalSearch: "",
  role: "VIP CS",
  playerFilters: { search: "", vip: "all", risk: "all" },
  bonusDraft: { playerId: "P-88031", type: "Loss Compensation", amount: 0 }
};

const titles = {
  dashboard: ["VIP 控制中心", "儀表板"],
  players: ["Player 360", "VIP 玩家"],
  inbox: ["全渠道客服", "收件匣"],
  ai: ["AI Copilot", "AI 客服"],
  tickets: ["SLA 營運", "工單"],
  bonus: ["成本控管", "優惠與補償"],
  tasks: ["留存流程", "跟進任務"],
  risk: ["風控協作", "風控中心"],
  rg: ["合規控管", "責任博彩"],
  reports: ["管理視角", "報表"],
  settings: ["系統規則", "設定"]
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const app = document.querySelector("#app");
const navList = document.querySelector("#navList");
const viewEyebrow = document.querySelector("#viewEyebrow");
const viewTitle = document.querySelector("#viewTitle");
const globalSearch = document.querySelector("#globalSearch");
const localeSelect = document.querySelector("#localeSelect");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modalBody = document.querySelector("#modalBody");
const modalTitle = document.querySelector("#modalTitle");
const modalEyebrow = document.querySelector("#modalEyebrow");
const toastStack = document.querySelector("#toastStack");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function replacementEntries(locale) {
  const replacements = localeReplacements[locale] || {};
  return Object.entries(replacements).sort((a, b) => b[0].length - a[0].length);
}

function translateTextForLocale(text, locale = state.locale) {
  if (!text) return text;
  const entries = replacementEntries(locale);
  if (!entries.length) return text;
  return entries.reduce((output, [source, target]) => output.replaceAll(source, target), text);
}

function setTranslatedText(selector, sourceText) {
  const element = document.querySelector(selector);
  if (element) element.textContent = translateTextForLocale(sourceText);
}

function setTranslatedAttribute(selector, attribute, sourceText) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, translateTextForLocale(sourceText));
}

function applyLocale(root = document.body) {
  const langMap = { zh: "zh-Hant", en: "en", vi: "vi" };
  document.documentElement.lang = langMap[state.locale] || "zh-Hant";
  document.title =
    state.locale === "zh"
      ? "VIP CS / CRM 原型"
      : state.locale === "vi"
        ? "Nguyên mẫu VIP CS / CRM"
        : "VIP CS / CRM Prototype";

  setTranslatedText(".brand-block span", "玩家關係管理");
  setTranslatedText(".sidebar-footer strong", "合規守門");
  setTranslatedText(".sidebar-footer div span", "RG / Risk checks enabled");
  setTranslatedText(".global-search span", "搜尋");
  setTranslatedText(".language-field span", "語言");
  setTranslatedText("#quickTicket", "新增工單");
  setTranslatedAttribute(".sidebar", "aria-label", "主要導覽");
  setTranslatedAttribute("#globalSearch", "placeholder", "Player ID、帳號、標籤、工單");
  setTranslatedAttribute("#closeModal", "aria-label", "關閉");
  if (localeSelect) localeSelect.value = state.locale;

  const scope = root === document ? document.body : root;
  if (!scope) return;

  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, [data-no-i18n]")) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    node.nodeValue = translateTextForLocale(node.nodeValue);
  });

  scope.querySelectorAll?.("[placeholder], [aria-label], [title]").forEach((element) => {
    if (element.closest("[data-no-i18n]")) return;
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, translateTextForLocale(value));
    });
  });
}

function formatMoney(value) {
  return money.format(value);
}

function playerById(id) {
  return players.find((player) => player.id === id) || players[0];
}

function conversationsForPlayer(playerId) {
  return conversations.find((conversation) => conversation.playerId === playerId);
}

function ticketById(id) {
  return tickets.find((ticket) => ticket.id === id);
}

function rgCaseById(id) {
  return rgCases.find((item) => item.id === id);
}

function suggestedOwner(player, category = "") {
  if (player.rgRisk === "High" || /Responsible Gaming|RG/i.test(category)) return "RG Officer";
  if (player.kyc !== "通過" || player.tags.includes("AML Watch") || /Withdrawal|KYC|Payment/i.test(category)) return "Payment Desk";
  if (player.tags.includes("Bonus Abuse") || player.tags.includes("Arbitrage") || /Risk/i.test(category)) return "Risk Team";
  return player.agent;
}

function ticketStatusClass(status) {
  if (/Closed|Resolved/i.test(status)) return "closed";
  if (/Escalated|Review|Payment|Compliance|Risk/i.test(status)) return "pending";
  return "open";
}

function nextTicketStatus(ticket) {
  const flow = ["Open", "Payment Review", "Risk Review", "Compliance Review", "Escalated", "Resolved", "Closed"];
  const current = flow.indexOf(ticket.status);
  if (current < 0) return "Payment Review";
  return flow[Math.min(current + 1, flow.length - 1)];
}

function playerTimeline(playerId) {
  const player = playerById(playerId);
  const events = [
    {
      rank: 5,
      type: "Payment",
      time: player.lastDeposit,
      title: "最近入金",
      body: `${formatMoney(Math.round(player.metrics.monthDeposit / 8))}，${player.behavior.depositPattern}`
    },
    {
      rank: 9,
      type: "Betting",
      time: player.lastBet,
      title: "最近投注",
      body: `${player.behavior.games.join(" / ")}，${player.behavior.bettingTime}`
    }
  ];

  conversations
    .filter((conversation) => conversation.playerId === playerId)
    .forEach((conversation, index) => {
      events.push({
        rank: 20 + index,
        type: "Conversation",
        time: conversation.waiting,
        title: conversation.topic,
        body: `${conversation.channel} · ${conversation.priority} · ${conversation.status}`
      });
    });

  tickets
    .filter((ticket) => ticket.playerId === playerId)
    .forEach((ticket, index) => {
      events.push({
        rank: 30 + index,
        type: "Ticket",
        time: ticket.due,
        title: `${ticket.id} · ${ticket.category}`,
        body: `${ticket.status} · ${ticket.team} · ${ticket.description}`
      });
    });

  riskAlerts
    .filter((alert) => alert.playerId === playerId)
    .forEach((alert, index) => {
      events.push({
        rank: 40 + index,
        type: "Risk",
        time: alert.status,
        title: `${alert.type} · ${alert.severity}`,
        body: alert.action
      });
    });

  rgCases
    .filter((item) => item.playerId === playerId)
    .forEach((item, index) => {
      events.push({
        rank: 50 + index,
        type: "RG",
        time: item.nextReview,
        title: `${item.id} · Score ${item.riskScore}`,
        body: `${item.status} · ${item.actions.join(" / ")}`
      });
    });

  bonusRequests
    .filter((request) => request.playerId === playerId)
    .forEach((request, index) => {
      events.push({
        rank: 60 + index,
        type: "Bonus",
        time: request.created,
        title: `${request.id} · ${request.type}`,
        body: `${formatMoney(request.amount)} · ${request.status} · Route ${request.route}`
      });
    });

  tasks
    .filter((task) => task.playerId === playerId)
    .forEach((task, index) => {
      events.push({
        rank: 70 + index,
        type: "Task",
        time: task.due,
        title: `${task.id} · ${task.type}`,
        body: `${task.priority} · ${task.reason}`
      });
    });

  return events.sort((a, b) => a.rank - b.rank);
}

function routingQueueItems() {
  const conversationItems = conversations.map((conversation) => {
    const player = playerById(conversation.playerId);
    return {
      id: conversation.id,
      source: "Inbox",
      player,
      priority: conversation.priority,
      owner: suggestedOwner(player),
      sla: `Waiting ${conversation.waiting}`,
      action: conversation.topic,
      severity: riskClass(conversation.priority)
    };
  });

  const ticketItems = tickets
    .filter((ticket) => ticket.status !== "Closed")
    .map((ticket) => {
      const player = playerById(ticket.playerId);
      return {
        id: ticket.id,
        source: "Ticket",
        player,
        priority: ticket.priority,
        owner: ticket.owner || suggestedOwner(player, ticket.category),
        sla: ticket.due,
        action: ticket.description,
        severity: ticket.sla === "breached" ? "high" : ticket.sla === "due" ? "medium" : riskClass(ticket.priority)
      };
    });

  return [...conversationItems, ...ticketItems].sort((a, b) => {
    const weight = { high: 0, medium: 1, low: 2 };
    return (weight[a.severity] ?? 3) - (weight[b.severity] ?? 3);
  });
}

function conversationText(conversation) {
  return conversation.messages.map((message) => message.body).join(" ");
}

function aiAnalyzeConversation(conversation) {
  const player = playerById(conversation.playerId);
  const text = `${conversation.topic} ${conversationText(conversation)}`;
  let intent = "General VIP Service";
  let category = "General";
  let confidence = 76;

  if (/出金|提款|withdraw|款項|到帳|KYC/i.test(text)) {
    intent = "出金 / KYC 進度查詢";
    category = "Withdrawal Delay";
    confidence = 94;
  } else if (/補償|優惠|bonus|返水|free spin|活動碼/i.test(text)) {
    intent = "優惠 / 補償請求";
    category = "Bonus Request";
    confidence = 91;
  } else if (/投訴|complaint|不滿|客訴/i.test(text)) {
    intent = "投訴處理";
    category = "Complaint";
    confidence = 89;
  }

  if (player.rgRisk === "High" || /一直輸|虧損|翻本|冷靜期|限制/i.test(text)) {
    intent = "責任博彩關懷";
    category = "Responsible Gaming";
    confidence = Math.max(confidence, 96);
  }

  const blockers = [];
  if (player.rgRisk === "High") blockers.push("RG High");
  if (player.kyc !== "通過") blockers.push("KYC 未完成");
  if (player.tags.includes("AML Watch")) blockers.push("AML Watch");
  if (player.tags.includes("Bonus Abuse") || player.tags.includes("Arbitrage")) blockers.push("Bonus Abuse / Arbitrage");
  if (conversation.priority === "P0" || conversation.priority === "P1") blockers.push(`${conversation.priority} 優先級`);

  const severity = blockers.some((item) => /RG High|AML|P0|Bonus Abuse/i.test(item)) ? "high" : blockers.length ? "medium" : "low";
  const autoReplyAllowed = severity === "low" && !["Responsible Gaming", "Withdrawal Delay", "Bonus Request", "Complaint"].includes(category);
  const route = category === "Responsible Gaming"
    ? "Compliance / RG Officer"
    : category === "Withdrawal Delay"
      ? "Payment Desk"
      : category === "Bonus Request"
        ? "Team Leader + Risk"
        : category === "Complaint"
          ? "Team Leader"
          : player.agent;

  return {
    conversation,
    player,
    intent,
    category,
    confidence,
    severity,
    blockers,
    route,
    autoReplyAllowed,
    summary: aiConversationSummary(conversation, player, category),
    suggestedReply: aiSuggestedReply(category, player),
    sources: aiKnowledgeBase.filter((item) => item.category === category || (category === "General" && item.category === "Complaint")).slice(0, 2)
  };
}

function aiConversationSummary(conversation, player, category) {
  const latestPlayerMessage = [...conversation.messages].reverse().find((message) => message.sender === "player");
  const pieces = [
    `${player.name}（${player.id} / VIP ${player.vipLevel}）透過 ${conversation.channel} 詢問：${conversation.topic}。`,
    latestPlayerMessage ? `最新玩家訊息：${latestPlayerMessage.body}` : "目前沒有玩家最新訊息。",
    `AI 判斷類型：${category}；風險標籤：${player.tags.join(" / ")}。`
  ];
  if (player.rgRisk === "High") pieces.push("玩家為 RG High，不可使用促銷或刺激投注話術。");
  if (player.kyc !== "通過") pieces.push("KYC 未完成，只能說明可揭露的審核狀態。");
  return pieces;
}

function aiSuggestedReply(category, player) {
  if (category === "Responsible Gaming") {
    return "我注意到你今天的遊玩強度比平常高。若你需要，我可以協助說明冷靜期、存款限制或投注限制等工具；也可以先協助你暫停接收促銷訊息。";
  }
  if (category === "Withdrawal Delay") {
    return player.kyc === "通過"
      ? "目前款項正在例行審核流程中，我會協助追蹤可揭露的進度，並在狀態更新時通知你。"
      : "目前帳戶仍有 KYC 補件或審核項目，因此我只能協助確認可揭露的審核狀態，並同步相關團隊更新下一步。";
  }
  if (category === "Bonus Request") {
    return player.rgRisk === "High" || player.tags.includes("Bonus Abuse")
      ? "我已協助確認目前帳戶不適合額外優惠或補償流程；我可以改為協助確認帳戶狀態、可用工具或建立工單追蹤。"
      : "我可以先協助確認你目前的優惠資格與活動條件；若需要額外補償，會依照 VIP 等級、帳戶狀態與審批流程處理。";
  }
  if (category === "Complaint") {
    return "我已了解你的問題，會先建立工單並保留完整紀錄，相關團隊會依 SLA 優先處理並回覆可揭露的進度。";
  }
  return "我可以先協助確認帳戶狀態與可用選項，並依照平台規則提供下一步。";
}

function aiAnalyses() {
  return conversations.map((conversation) => aiAnalyzeConversation(conversation));
}

function aiStatusLabel(analysis) {
  if (analysis.autoReplyAllowed) return ["可自動回覆", "open"];
  if (analysis.severity === "high") return ["需人工接管", "blocked"];
  return ["需審核", "pending"];
}

function vipClass(level) {
  return `vip${level}`;
}

function riskClass(value) {
  const key = String(value).toLowerCase();
  if (key.includes("high") || key.includes("p0") || key.includes("p1")) return "high";
  if (key.includes("medium") || key.includes("review") || key.includes("p2")) return "medium";
  return "low";
}

function tagClass(tag) {
  if (/Risk|AML|Abuse|Arbitrage|Fraud|Loser|Complaint/i.test(tag)) return "risk";
  if (/Churn|Winner|Sensitive|Watch/i.test(tag)) return "warning";
  return "ok";
}

function priorityPill(priority) {
  return `<span class="severity ${riskClass(priority)}">${escapeHtml(priority)}</span>`;
}

function renderNav() {
  const counts = {
    dashboard: tasks.filter((task) => task.status === "Open").length,
    inbox: conversations.filter((conversation) => conversation.status === "Open").length,
    ai: aiAnalyses().filter((analysis) => !analysis.autoReplyAllowed).length,
    tickets: tickets.filter((ticket) => ticket.status !== "Closed").length,
    risk: riskAlerts.filter((alert) => alert.status !== "Closed").length,
    rg: riskAlerts.filter((alert) => alert.type === "RG Risk").length
  };

  const currentSection = normalizedSectionForView(state.view);

  navList.innerHTML = navItems
    .map((item) => {
      const active = state.view === item.id;
      const badge = counts[item.id] || item.sections?.length || "";
      const subItems = item.sections?.length
        ? `
          <div class="nav-sub-list" aria-label="${escapeHtml(item.label)} 子功能">
            ${item.sections
              .map(
                (section) => `
                  <button class="nav-sub-button ${active && currentSection === section.id ? "active" : ""}" data-view="${item.id}" data-section="${section.id}" type="button">
                    <span>${escapeHtml(section.label)}</span>
                  </button>
                `
              )
              .join("")}
          </div>
        `
        : "";

      return `
        <div class="nav-group ${active ? "active" : ""}">
          <button class="nav-button ${active ? "active" : ""}" data-view="${item.id}" type="button" aria-expanded="${active ? "true" : "false"}">
            <span class="nav-icon">${escapeHtml(item.icon)}</span>
            <span>${escapeHtml(item.label)}</span>
            ${badge ? `<span class="nav-count">${badge}</span>` : ""}
          </button>
          ${subItems}
        </div>
      `;
    })
    .join("");
}

function navItemById(view) {
  return navItems.find((item) => item.id === view) || navItems[0];
}

function defaultSectionForView(view) {
  return navItemById(view)?.sections?.[0]?.id || "";
}

function normalizedSectionForView(view, section = state.activeSection) {
  const item = navItemById(view);
  if (!item?.sections?.length) return "";
  return item.sections.some((subItem) => subItem.id === section) ? section : item.sections[0].id;
}

function sectionLabelForView(view, section = state.activeSection) {
  const item = navItemById(view);
  return item?.sections?.find((subItem) => subItem.id === section)?.label || "";
}

function setView(view, section = "") {
  state.view = view;
  state.activeSection = normalizedSectionForView(view, section || defaultSectionForView(view));
  render();
  app.focus({ preventScroll: true });
}

function render() {
  state.activeSection = normalizedSectionForView(state.view);
  renderNav();
  const [eyebrow, title] = titles[state.view] || titles.dashboard;
  const activeSectionLabel = sectionLabelForView(state.view);
  viewEyebrow.textContent = activeSectionLabel ? `${eyebrow} / ${activeSectionLabel}` : eyebrow;
  viewTitle.textContent = title;

  const viewRenderer = {
    dashboard: renderDashboard,
    players: renderPlayers,
    inbox: renderInbox,
    ai: renderAiDesk,
    tickets: renderTickets,
    bonus: renderBonus,
    tasks: renderTasks,
    risk: renderRisk,
    rg: renderResponsibleGaming,
    reports: renderReports,
    settings: renderSettings
  }[state.view];

  app.innerHTML = `${renderSectionPager()}${viewRenderer ? viewRenderer() : renderDashboard()}`;
  applySectionPaging();
  hydrateView();
  applyLocale(document.body);
}

function renderSectionPager() {
  const item = navItemById(state.view);
  if (!item?.sections?.length) return "";

  return `
    <nav class="section-pager" aria-label="${escapeHtml(item.label)} 功能分頁">
      ${item.sections
        .map(
          (section) => `
            <button class="section-tab ${state.activeSection === section.id ? "active" : ""}" data-view="${item.id}" data-section="${section.id}" type="button">
              ${escapeHtml(section.label)}
            </button>
          `
        )
        .join("")}
    </nav>
  `;
}

function applySectionPaging() {
  const activeSection = normalizedSectionForView(state.view);
  app.classList.toggle("section-page-mode", Boolean(activeSection));

  const sectionElements = [...app.querySelectorAll("[data-section]")].filter((element) => element.tagName !== "BUTTON");
  sectionElements.forEach((element) => {
    const active = element.dataset.section === activeSection;
    element.hidden = !active;
    element.classList.toggle("active-section", active);
  });

  [...app.querySelectorAll("[data-section-container]")].forEach((container) => {
    const hasVisibleSection = [...container.querySelectorAll("[data-section]")].some((element) => !element.hidden);
    container.hidden = !hasVisibleSection;
  });
}

function filteredPlayers() {
  const query = `${state.globalSearch} ${state.playerFilters.search}`.trim().toLowerCase();
  return players.filter((player) => {
    const blob = [
      player.id,
      player.username,
      player.name,
      player.agent,
      player.region,
      player.tags.join(" "),
      player.riskLevel,
      player.rgRisk
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !query || blob.includes(query);
    const matchesVip = state.playerFilters.vip === "all" || String(player.vipLevel) === state.playerFilters.vip;
    const matchesRisk = state.playerFilters.risk === "all" || player.riskLevel === state.playerFilters.risk || player.rgRisk === state.playerFilters.risk;
    return matchesQuery && matchesVip && matchesRisk;
  });
}

function renderDashboard() {
  const activeVip = players.filter((player) => !player.status.includes("排除")).length;
  const depositToday = players.reduce((sum, player) => sum + Math.round(player.metrics.monthDeposit / 8), 0);
  const withdrawalToday = players.reduce((sum, player) => sum + Math.round(player.metrics.monthWithdrawal / 9), 0);
  const openTickets = tickets.filter((ticket) => ticket.status !== "Closed").length;
  const rgAlerts = riskAlerts.filter((alert) => alert.type === "RG Risk").length;
  const urgentTasks = tasks.filter((task) => ["P0", "P1"].includes(task.priority));

  return `
    <section class="section-stack">
      <div class="dashboard-grid" data-section="dashboard-overview">
        ${metricCard("Active VIP Today", activeVip, "5 位重點玩家在線", "up")}
        ${metricCard("VIP Deposit Today", formatMoney(depositToday), "高額入金需 30 分鐘內關懷", "up")}
        ${metricCard("VIP Withdrawal Today", formatMoney(withdrawalToday), "2 筆出金接近 SLA", "down")}
        ${metricCard("Open Tickets / RG", `${openTickets} / ${rgAlerts}`, "P0 需立即升級", "flat")}
      </div>

      <div class="two-column" data-section="dashboard-routing">
        ${renderRoutingPanel()}
        ${renderAgentCapacityPanel()}
      </div>

      <div class="two-column" data-section="dashboard-queue">
        <section class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Today Queue</p>
              <h3>Urgent VIP Tasks</h3>
            </div>
            <button class="subtle-button" data-view="tasks" type="button">查看任務</button>
          </div>
          <div class="task-list">
            ${urgentTasks.map((task) => taskCard(task)).join("")}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Guardrails</p>
              <h3>Risk / RG Alerts</h3>
            </div>
            <button class="subtle-button" data-view="risk" type="button">進入風控</button>
          </div>
          <div class="alert-list">
            ${riskAlerts.slice(0, 4).map((alert) => alertCard(alert)).join("")}
          </div>
        </section>
      </div>

      <div class="split-band" data-section="dashboard-portfolio">
        <section class="table-panel">
          <div class="table-header">
            <div>
              <p class="eyebrow">Assigned Portfolio</p>
              <h3>My VIP Players</h3>
            </div>
            <button class="subtle-button" data-view="players" type="button">管理玩家</button>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>VIP</th>
                  <th>Last Login</th>
                  <th>Net Deposit</th>
                  <th>Risk</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${players
                  .map(
                    (player) => `
                      <tr>
                        <td><strong>${player.name}</strong><br><span class="message-meta">${player.id} · ${player.username}</span></td>
                        <td><span class="pill ${vipClass(player.vipLevel)}">VIP ${player.vipLevel}</span></td>
                        <td>${player.lastLogin}</td>
                        <td>${formatMoney(player.metrics.netDeposit)}</td>
                        <td><span class="severity ${riskClass(player.riskLevel)}">${player.riskLevel}</span></td>
                        <td><button class="subtle-button" data-open-profile="${player.id}" type="button">Open Profile</button></td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </section>

        <section class="table-panel">
          <div class="table-header">
            <div>
              <p class="eyebrow">Open Conversations</p>
              <h3>Waiting Queue</h3>
            </div>
            <button class="subtle-button" data-view="inbox" type="button">進入 Inbox</button>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Waiting</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                ${conversations
                  .map((conversation) => {
                    const player = playerById(conversation.playerId);
                    return `
                      <tr>
                        <td><strong>${player.name}</strong><br><span class="message-meta">${conversation.topic}</span></td>
                        <td>${conversation.waiting}</td>
                        <td>${priorityPill(conversation.priority)}</td>
                      </tr>
                    `;
                  })
                  .join("")}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderRoutingPanel() {
  const queue = routingQueueItems().slice(0, 5);
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Omnichannel Routing</p>
          <h3>下一步分派佇列</h3>
        </div>
        <button class="subtle-button" data-action="assign-next" type="button">分派下一件</button>
      </div>
      <div class="queue-list">
        ${queue
          .map(
            (item) => `
              <article class="queue-item">
                <div>
                  <strong>${item.source} · ${item.id}</strong>
                  <p>${item.player.name} · ${item.action}</p>
                </div>
                <div class="queue-meta">
                  <span class="severity ${item.severity}">${item.priority}</span>
                  <span class="sla-pill ${item.severity === "high" ? "breached" : item.severity === "medium" ? "due" : "safe"}">${item.sla}</span>
                  <span class="pill">${item.owner}</span>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAgentCapacityPanel() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Workload</p>
          <h3>客服容量與技能</h3>
        </div>
      </div>
      <div class="agent-grid">
        ${agents
          .map((agent) => {
            const usage = Math.min(100, Math.round((agent.active / agent.capacity) * 100));
            const statusClass = usage >= 100 ? "blocked" : usage >= 80 ? "pending" : "open";
            return `
              <article class="agent-card">
                <div class="list-card-title">
                  <div>
                    <strong>${agent.name}</strong>
                    <p>${agent.role} · ${agent.languages.join(" / ")}</p>
                  </div>
                  <span class="status ${statusClass}">${agent.status}</span>
                </div>
                <div class="capacity-bar" aria-label="Capacity ${usage}%"><span style="width:${usage}%"></span></div>
                <p>${agent.active}/${agent.capacity} active · ${agent.skills.join(" / ")}</p>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function metricCard(label, value, foot, trend) {
  const trendText = trend === "up" ? "↑" : trend === "down" ? "!" : "•";
  return `
    <article class="metric-card">
      <div class="metric-topline">
        <span class="metric-label">${label}</span>
        <span class="trend ${trend}">${trendText}</span>
      </div>
      <p class="metric-value">${value}</p>
      <p class="metric-foot">${foot}</p>
    </article>
  `;
}

function taskCard(task) {
  const player = playerById(task.playerId);
  return `
    <article class="list-card">
      <div class="list-card-title">
        <div>
          <strong>${task.type}</strong>
          <p>${player.name} · ${player.id}</p>
        </div>
        ${priorityPill(task.priority)}
      </div>
      <p>${task.reason}</p>
      <div class="profile-actions">
        <button class="subtle-button" data-open-profile="${player.id}" type="button">Player 360</button>
        <button class="ghost-button" data-send-message="${player.id}" type="button">Send Message</button>
      </div>
    </article>
  `;
}

function alertCard(alert) {
  const player = playerById(alert.playerId);
  return `
    <article class="list-card compact risk-card ${riskClass(alert.severity)}">
      <div class="list-card-title">
        <div>
          <strong>${alert.type}</strong>
          <p>${player.name} · ${player.id}</p>
        </div>
        <span class="severity ${riskClass(alert.severity)}">${alert.severity}</span>
      </div>
      <p>${alert.action}</p>
    </article>
  `;
}

function renderPlayers() {
  const list = filteredPlayers();
  const activePlayer = playerById(state.activePlayerId);

  return `
    <section class="section-stack">
      <div class="view-header">
        <div>
          <p class="eyebrow">Portfolio</p>
          <h2>Player List + 360 Profile</h2>
        </div>
        <button class="primary-button" data-action="create-ticket" data-player="${activePlayer.id}" type="button">新增工單</button>
      </div>

      <div class="filter-bar" data-section="players-list">
        <label class="field">
          <span>搜尋玩家</span>
          <input id="playerSearch" type="search" value="${escapeHtml(state.playerFilters.search)}" placeholder="Player ID、帳號、標籤" />
        </label>
        <label class="field">
          <span>VIP 等級</span>
          <select id="vipFilter">
            ${["all", "5", "4", "3", "2", "1"].map((value) => `<option value="${value}" ${state.playerFilters.vip === value ? "selected" : ""}>${value === "all" ? "全部" : `VIP ${value}`}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>風險狀態</span>
          <select id="riskFilter">
            ${["all", "High", "Medium", "Low"].map((value) => `<option value="${value}" ${state.playerFilters.risk === value ? "selected" : ""}>${value === "all" ? "全部" : value}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="player-layout">
        <section class="player-list-grid" data-section="players-list" aria-label="VIP 玩家列表">
          ${list.length ? list.map((player) => playerListCard(player)).join("") : `<div class="empty-state">找不到符合條件的 VIP 玩家</div>`}
        </section>
        <aside class="profile-pane" data-section-container>
          ${renderProfile(activePlayer)}
        </aside>
      </div>
    </section>
  `;
}

function playerListCard(player) {
  const risk = player.rgRisk === "High" ? "RG High" : player.riskLevel;
  return `
    <article class="player-card ${player.id === state.activePlayerId ? "active" : ""}">
      <div>
        <div class="player-card-title">
          <strong>${player.name}</strong>
          <span class="pill ${vipClass(player.vipLevel)}">VIP ${player.vipLevel}</span>
          <span class="severity ${riskClass(risk)}">${risk}</span>
        </div>
        <div class="player-meta">
          <span>${player.id} · ${player.username}</span>
          <span>${player.agent}</span>
          <span>${player.lastLogin}</span>
          <span>${formatMoney(player.metrics.netDeposit)} Net</span>
        </div>
        <div style="margin-top: 8px">${player.tags.map((tag) => `<span class="tag ${tagClass(tag)}">${tag}</span>`).join("")}</div>
      </div>
      <button class="subtle-button" data-select-player="${player.id}" type="button">查看</button>
    </article>
  `;
}

function renderProfile(player) {
  return `
    <section class="profile-hero" data-section-container>
      <div data-section="players-profile">
        <div class="profile-head">
          <div class="profile-name-row">
            <div>
              <p class="eyebrow">${player.id} · ${player.username}</p>
              <h2>${player.name}</h2>
              <div class="profile-actions">
                <span class="pill ${vipClass(player.vipLevel)}">VIP ${player.vipLevel}</span>
                <span class="severity ${riskClass(player.riskLevel)}">Risk ${player.riskLevel}</span>
                <span class="severity ${riskClass(player.rgRisk)}">RG ${player.rgRisk}</span>
              </div>
            </div>
            <span class="status ${player.status.includes("限制") ? "blocked" : "open"}">${player.status}</span>
          </div>
          <div class="profile-actions">
            <button class="tool-button" data-send-message="${player.id}" type="button">Send Message</button>
            <button class="tool-button" data-action="create-ticket" data-player="${player.id}" type="button">Create Ticket</button>
            <button class="tool-button" data-action="add-note" data-player="${player.id}" type="button">Add Note</button>
            <button class="tool-button" data-issue-bonus="${player.id}" type="button">Issue Bonus</button>
            <button class="tool-button" data-action="risk-escalate" data-player="${player.id}" type="button">Escalate Risk</button>
            <button class="tool-button" data-action="rg-action" data-player="${player.id}" type="button">RG Action</button>
          </div>
        </div>

        <div class="summary-grid">
          ${summaryCell("Assigned Agent", player.agent)}
          ${summaryCell("KYC / Currency", `${player.kyc} · ${player.currency}`)}
          ${summaryCell("Last Login", player.lastLogin)}
          ${summaryCell("Last Deposit", player.lastDeposit)}
          ${summaryCell("Last Bet", player.lastBet)}
          ${summaryCell("Last Contact", player.lastContact)}
        </div>

        <div class="profile-section">
          <h3>Value Snapshot</h3>
          <div class="summary-grid">
            ${summaryCell("Total Deposit", formatMoney(player.metrics.totalDeposit))}
            ${summaryCell("Total Withdrawal", formatMoney(player.metrics.totalWithdrawal))}
            ${summaryCell("Net Deposit", formatMoney(player.metrics.netDeposit))}
            ${summaryCell("Monthly GGR", formatMoney(player.metrics.ggr))}
            ${summaryCell("Bonus Cost", formatMoney(player.metrics.bonusCost))}
            ${summaryCell("LTV", formatMoney(player.metrics.ltv))}
          </div>
        </div>

        <div class="profile-section">
          <h3>30 Days Trend</h3>
          ${lineChart(player.trend, player.wagerTrend)}
          <div class="chart-legend">
            <span class="legend-item"><span class="legend-swatch" style="background:#24715e"></span>Deposit</span>
            <span class="legend-item"><span class="legend-swatch" style="background:#a26e1b"></span>Turnover</span>
          </div>
        </div>

        <div class="profile-section">
          <h3>Active Time Heatmap</h3>
          <div class="heatmap">
            ${player.heat.map((level) => `<span class="heat-cell level-${level}" title="Activity ${level}"></span>`).join("")}
          </div>
        </div>

        <div class="profile-section">
          <h3>Relationship & Behavior</h3>
          <div class="task-list">
            ${infoLine("偏好聯絡", `${player.preferredContact} · ${player.tone}`)}
            ${infoLine("常玩遊戲", player.behavior.games.join(" / "))}
            ${infoLine("投注習慣", `${player.behavior.bettingTime} · ${player.behavior.session}`)}
            ${infoLine("入出金模式", `${player.behavior.depositPattern}；${player.behavior.withdrawalPattern}`)}
            ${infoLine("重要備註", player.notes)}
          </div>
        </div>

        <div class="profile-section">
          <h3>客服可見操作指引</h3>
          <div class="check-list">
            ${guardrail(player)}
          </div>
        </div>

        <div class="profile-section">
          <div class="section-title-row">
            <h3>玩家事件時間軸</h3>
            <span class="pill">${playerTimeline(player.id).length} events</span>
          </div>
          ${renderPlayerTimeline(player.id)}
        </div>
      </div>

      <div class="profile-section" data-section="players-work">
        <h3>關聯工作項目</h3>
        ${renderLinkedWorkItems(player.id)}
      </div>
    </section>
  `;
}

function summaryCell(label, value) {
  return `
    <div class="summary-cell">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function infoLine(label, value) {
  return `
    <article class="list-card compact">
      <div class="list-card-title">
        <strong>${label}</strong>
      </div>
      <p>${escapeHtml(value)}</p>
    </article>
  `;
}

function guardrail(player) {
  const lines = [];
  if (player.rgRisk === "High") {
    lines.push(["禁止促銷式挽留", "不可發送刺激繼續投注的優惠或話術，必要時提示冷靜期與限額工具。", "blocked"]);
  }
  if (player.tags.includes("Bonus Abuse") || player.tags.includes("Arbitrage")) {
    lines.push(["優惠需審批", "額外 bonus、返水、補償均需 Team Leader + Risk 審核。", "blocked"]);
  }
  if (player.tags.includes("AML Watch") || player.kyc !== "通過") {
    lines.push(["出金資訊受限", "不可承諾到帳時間；僅可說明可揭露的審核狀態。", "pending"]);
  }
  if (!lines.length) {
    lines.push(["可標準服務", "可依 VIP 等級、優惠資格與 SLA 進行一般服務。", "open"]);
  }
  return lines
    .map(
      ([title, body, status]) => `
        <article class="check-item">
          <strong>${title}<span class="status ${status}">${status === "blocked" ? "限制" : status === "pending" ? "需確認" : "可執行"}</span></strong>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
}

function renderPlayerTimeline(playerId) {
  return `
    <div class="event-timeline">
      ${playerTimeline(playerId)
        .slice(0, 9)
        .map(
          (event) => `
            <article class="timeline-event ${riskClass(event.type)}">
              <span class="event-marker">${event.type}</span>
              <div>
                <div class="event-head">
                  <strong>${event.title}</strong>
                  <span>${event.time}</span>
                </div>
                <p>${event.body}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderLinkedWorkItems(playerId) {
  const linkedTickets = tickets.filter((ticket) => ticket.playerId === playerId);
  const linkedRg = rgCases.filter((item) => item.playerId === playerId);
  const linkedTasks = tasks.filter((task) => task.playerId === playerId);
  const linkedBonus = bonusRequests.filter((request) => request.playerId === playerId);
  const empty = !linkedTickets.length && !linkedRg.length && !linkedTasks.length && !linkedBonus.length;

  if (empty) return `<div class="empty-state compact">目前沒有關聯工作項目</div>`;

  return `
    <div class="work-link-grid">
      ${linkedTickets
        .map(
          (ticket) => `
            <article class="work-link-card">
              <span class="tag warning">Ticket</span>
              <strong>${ticket.id} · ${ticket.category}</strong>
              <p>${ticket.status} · ${ticket.due}</p>
              <button class="subtle-button" data-open-ticket="${ticket.id}" type="button">查看工單</button>
            </article>
          `
        )
        .join("")}
      ${linkedRg
        .map(
          (item) => `
            <article class="work-link-card">
              <span class="tag risk">RG</span>
              <strong>${item.id} · Score ${item.riskScore}</strong>
              <p>${item.status} · ${item.nextReview}</p>
              <button class="subtle-button" data-open-rg-case="${item.id}" type="button">查看 RG</button>
            </article>
          `
        )
        .join("")}
      ${linkedTasks
        .map(
          (task) => `
            <article class="work-link-card">
              <span class="tag ok">Task</span>
              <strong>${task.id} · ${task.type}</strong>
              <p>${task.priority} · ${task.due}</p>
            </article>
          `
        )
        .join("")}
      ${linkedBonus
        .map(
          (request) => `
            <article class="work-link-card">
              <span class="tag warning">Bonus</span>
              <strong>${request.id} · ${request.type}</strong>
              <p>${formatMoney(request.amount)} · ${request.status}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function lineChart(primary, secondary) {
  const width = 680;
  const height = 168;
  const pad = 18;
  const combined = primary.concat(secondary);
  const max = Math.max(...combined);
  const min = Math.min(...combined);
  const points = (series) =>
    series
      .map((value, index) => {
        const x = pad + (index * (width - pad * 2)) / (series.length - 1);
        const y = height - pad - ((value - min) * (height - pad * 2)) / Math.max(1, max - min);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

  return `
    <svg class="trend-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="30 天入金與投注趨勢">
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#dbe2da" />
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="#dbe2da" />
      <polyline fill="none" stroke="#a26e1b" stroke-width="4" points="${points(secondary)}" />
      <polyline fill="none" stroke="#24715e" stroke-width="4" points="${points(primary)}" />
    </svg>
  `;
}

function renderInbox() {
  const conversation = conversations.find((item) => item.id === state.activeConversationId) || conversations[0];
  const player = playerById(conversation.playerId);
  const ai = aiAnalyzeConversation(conversation);

  return `
    <section class="inbox-layout">
      <aside class="conversation-list" data-section="inbox-queue">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Waiting Queue</p>
            <h3>Open Conversations</h3>
          </div>
        </div>
        ${conversations.map((item) => conversationButton(item)).join("")}
      </aside>

      <section class="chat-panel" data-section="inbox-chat">
        <header class="conversation-header">
          <div>
            <p class="eyebrow">${conversation.channel} · ${conversation.priority}</p>
            <h3>${player.name} · ${conversation.topic}</h3>
          </div>
          <div class="profile-actions">
            <button class="subtle-button" data-open-profile="${player.id}" type="button">Player 360</button>
            <button class="subtle-button" data-action="create-ticket" data-player="${player.id}" type="button">轉工單</button>
          </div>
        </header>
        <div class="messages" id="messages">
          ${conversation.messages.map((message) => messageBubble(message)).join("")}
        </div>
        <form class="composer" id="composer">
          <textarea id="messageInput" placeholder="輸入客服回覆，系統會即時檢查敏感話術"></textarea>
          <div class="message-tools">
            <div class="compliance-hint" id="complianceHint">話術檢查：目前未偵測到高風險語句</div>
            <button class="primary-button" type="submit">送出回覆</button>
          </div>
        </form>
      </section>

      <aside class="context-panel" data-section="inbox-context">
        ${renderAiCopilot(ai)}

        <section class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Player Summary</p>
              <h3>${player.name}</h3>
            </div>
            <span class="pill ${vipClass(player.vipLevel)}">VIP ${player.vipLevel}</span>
          </div>
          <div class="task-list">
            ${infoLine("今日輸贏", formatMoney(player.metrics.todayPl))}
            ${infoLine("最近入金", player.lastDeposit)}
            ${infoLine("最近出金", formatMoney(player.metrics.monthWithdrawal))}
            ${infoLine("風險標籤", player.tags.join(" / "))}
            ${infoLine("不可發放優惠原因", blockedOfferReason(player))}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Templates</p>
              <h3>核准話術</h3>
            </div>
          </div>
          <div class="template-list">
            ${templates.map((template) => templateButton(template)).join("")}
          </div>
        </section>
      </aside>
    </section>
  `;
}

function renderAiCopilot(analysis) {
  const [label, status] = aiStatusLabel(analysis);
  return `
    <section class="panel ai-copilot-panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">AI Copilot</p>
          <h3>客服輔助</h3>
        </div>
        <span class="status ${status}">${label}</span>
      </div>
      <div class="ai-summary-list">
        ${analysis.summary.map((item) => `<p>${item}</p>`).join("")}
      </div>
      <div class="ai-score-row">
        <span class="severity ${analysis.severity}">${analysis.intent}</span>
        <span class="pill">${analysis.confidence}% confidence</span>
      </div>
      ${
        analysis.blockers.length
          ? `<div class="tag-row">${analysis.blockers.map((item) => `<span class="tag risk">${item}</span>`).join("")}</div>`
          : `<span class="tag ok">無硬性阻擋</span>`
      }
      <div class="ai-reply-preview">
        <strong>建議回覆</strong>
        <p>${analysis.suggestedReply}</p>
      </div>
      <div class="knowledge-list compact">
        ${analysis.sources.map((item) => `<span class="tag warning">${item.id}</span>`).join("")}
      </div>
      <div class="profile-actions">
        <button class="subtle-button" data-ai-apply-reply="${analysis.conversation.id}" type="button">套用建議</button>
        <button class="ghost-button" data-ai-handoff="${analysis.conversation.id}" type="button">轉真人摘要</button>
      </div>
    </section>
  `;
}

function conversationButton(conversation) {
  const player = playerById(conversation.playerId);
  return `
    <button class="conversation-item ${conversation.id === state.activeConversationId ? "active" : ""}" data-conversation="${conversation.id}" type="button">
      <div class="conversation-title">
        <strong>${player.name}</strong>
        ${priorityPill(conversation.priority)}
      </div>
      <p>${conversation.topic}</p>
      <p>${conversation.channel} · Waiting ${conversation.waiting}</p>
    </button>
  `;
}

function messageBubble(message) {
  const label = message.sender === "player" ? "Player" : message.sender === "agent" ? "Agent" : "Internal";
  return `
    <article class="message-bubble ${message.sender}">
      <p>${escapeHtml(message.body)}</p>
      <span class="message-meta">${label} · ${message.at}</span>
    </article>
  `;
}

function templateButton(template) {
  return `
    <button class="template-pill" data-template="${escapeHtml(template.body)}" type="button">
      <strong>${template.title}</strong>
      <p>${template.category}</p>
    </button>
  `;
}

function blockedOfferReason(player) {
  if (player.rgRisk === "High") return "RG High：禁止促銷訊息，補償需 Compliance 確認";
  if (player.tags.includes("Bonus Abuse")) return "Bonus Abuse：需主管與 Risk 審核";
  if (player.kyc !== "通過") return "KYC 未完成：限制出金與高額優惠";
  return "無硬性阻擋，仍需依額度規則檢查";
}

function renderAiDesk() {
  const analyses = aiAnalyses().sort((a, b) => {
    const weight = { high: 0, medium: 1, low: 2 };
    return (weight[a.severity] ?? 3) - (weight[b.severity] ?? 3);
  });
  const highRisk = analyses.filter((analysis) => analysis.severity === "high").length;
  const needsReview = analyses.filter((analysis) => !analysis.autoReplyAllowed).length;
  const autoAllowed = analyses.filter((analysis) => analysis.autoReplyAllowed).length;
  const avgConfidence = Math.round(analyses.reduce((sum, analysis) => sum + analysis.confidence, 0) / Math.max(1, analyses.length));

  return `
    <section class="section-stack">
      <div class="view-header">
        <div>
          <p class="eyebrow">AI Service Layer</p>
          <h2>AI 客服工作台</h2>
        </div>
        <button class="primary-button" data-action="ai-run-triage" type="button">重新執行分流</button>
      </div>

      <div class="dashboard-grid" data-section="ai-triage">
        ${metricCard("待人工", needsReview, "需真人 / 審核 / 合規", needsReview ? "down" : "flat")}
        ${metricCard("高風險", highRisk, "RG / AML / Abuse", highRisk ? "down" : "flat")}
        ${metricCard("可自動", autoAllowed, "低風險一般服務", "up")}
        ${metricCard("信心分數", `${avgConfidence}%`, "意圖分類平均值", "flat")}
      </div>

      <div class="ai-command-layout">
        <section class="panel ai-main-panel" data-section="ai-triage">
          <div class="panel-header">
            <div>
              <p class="eyebrow">AI Triage Queue</p>
              <h3>需要處理的對話</h3>
            </div>
          </div>
          <div class="ai-triage-list">
            ${analyses.map((analysis) => aiTriageCard(analysis)).join("")}
          </div>
        </section>

        <aside class="section-stack ai-side-rail" data-section-container>
          <section class="panel" data-section="ai-rules">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Guardrails</p>
                <h3>決策規則</h3>
              </div>
            </div>
            <div class="ai-rule-list">
              ${[
                ["可自動", "一般 FAQ、流程說明、低風險狀態查詢。", "open"],
                ["需審核", "優惠、補償、VIP 特例、Payment 進度。", "pending"],
                ["需接管", "RG High、AML Watch、Bonus Abuse、出金承諾、風控細節。", "blocked"]
              ]
                .map(
                  ([title, body, status]) => `
                    <article class="ai-rule-item">
                      <span class="status ${status}">${title}</span>
                      <p>${body}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>

          <details class="panel ai-fold-panel" data-section="ai-audit">
            <summary>
              <span>
                <small>Knowledge Base</small>
                <strong>核准知識來源</strong>
              </span>
              <em>${aiKnowledgeBase.length}</em>
            </summary>
            <div class="knowledge-list">
              ${aiKnowledgeBase.map((item) => knowledgeCard(item)).join("")}
            </div>
          </details>

          <details class="panel ai-fold-panel">
            <summary>
              <span>
                <small>Audit Trail</small>
                <strong>AI 稽核紀錄</strong>
              </span>
              <em>${aiAuditEvents.length}</em>
            </summary>
            <div class="timeline">
              ${aiAuditEvents
                .map((event) => timelineItem(`${event.id} · ${event.status}`, `${event.at} · ${event.conversationId} · ${event.action}`))
                .join("")}
            </div>
          </details>
        </aside>
      </div>
    </section>
  `;
}

function aiTriageCard(analysis) {
  const [label, status] = aiStatusLabel(analysis);
  return `
    <article class="ai-triage-card ${analysis.severity}">
      <div class="ai-queue-main">
        <div class="ai-person-cell">
          <strong>${analysis.player.name}</strong>
          <p>${analysis.conversation.id} · ${analysis.conversation.channel} · VIP ${analysis.player.vipLevel}</p>
        </div>
        <div class="ai-intent-cell">
          <strong>${analysis.intent}</strong>
          <p>${analysis.confidence}% confidence · ${analysis.route}</p>
        </div>
        <span class="status ${status}">${label}</span>
        <div class="profile-actions">
          <button class="subtle-button" data-open-ai-conversation="${analysis.conversation.id}" type="button">開啟</button>
          <button class="ghost-button" data-ai-apply-reply="${analysis.conversation.id}" type="button">套用</button>
          <button class="ghost-button" data-ai-handoff="${analysis.conversation.id}" type="button">交接</button>
        </div>
      </div>
      <details class="ai-row-detail">
        <summary>查看摘要、阻擋與建議回覆</summary>
        <div class="ai-detail-body">
          <div class="ai-summary-list">
            ${analysis.summary.map((item) => `<p>${item}</p>`).join("")}
          </div>
          ${
            analysis.blockers.length
              ? `<div class="tag-row">${analysis.blockers.map((item) => `<span class="tag risk">${item}</span>`).join("")}</div>`
              : `<span class="tag ok">無硬性阻擋</span>`
          }
          <div class="ai-reply-preview">
            <strong>建議回覆</strong>
            <p>${analysis.suggestedReply}</p>
          </div>
        </div>
      </details>
    </article>
  `;
}

function knowledgeCard(item) {
  return `
    <article class="knowledge-card">
      <div class="list-card-title">
        <div>
          <strong>${item.id} · ${item.title}</strong>
          <p>${item.category} · Owner ${item.owner}</p>
        </div>
        <span class="status open">${item.updated}</span>
      </div>
      <p>${item.summary}</p>
    </article>
  `;
}

function renderTickets() {
  const openCount = tickets.filter((ticket) => ticket.status !== "Closed").length;
  const dueCount = tickets.filter((ticket) => ticket.sla === "due").length;
  const breachedCount = tickets.filter((ticket) => ticket.sla === "breached").length;
  const escalatedCount = tickets.filter((ticket) => /Escalated|Review/i.test(ticket.status)).length;

  return `
    <section class="section-stack">
      <div class="view-header">
        <div>
          <p class="eyebrow">Ticket Management</p>
          <h2>All Tickets</h2>
        </div>
        <button class="primary-button" data-action="create-ticket" data-player="${state.activePlayerId}" type="button">新增工單</button>
      </div>

      <div class="dashboard-grid" data-section="tickets-metrics">
        ${metricCard("Open Tickets", openCount, "未結案件需 owner 與下一步", "flat")}
        ${metricCard("Due Soon", dueCount, "SLA 低於 45 分鐘", "down")}
        ${metricCard("Breached", breachedCount, "需主管補紀錄", "down")}
        ${metricCard("In Review", escalatedCount, "Payment / Risk / Compliance", "flat")}
      </div>

      <section class="ticket-board" data-section="tickets-board">
        ${ticketColumn("Open", tickets.filter((ticket) => ticket.status === "Open"))}
        ${ticketColumn("Review", tickets.filter((ticket) => /Review/i.test(ticket.status)))}
        ${ticketColumn("Escalated", tickets.filter((ticket) => ticket.status === "Escalated"))}
        ${ticketColumn("Resolved", tickets.filter((ticket) => /Resolved|Closed/i.test(ticket.status)))}
      </section>

      <section class="table-panel" data-section="tickets-list">
        <div class="table-header">
          <div>
            <p class="eyebrow">SLA Queue</p>
            <h3>Open / Escalated Tickets</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Player</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Team</th>
                <th>Owner</th>
                <th>SLA</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${tickets
                .map((ticket) => {
                  const player = playerById(ticket.playerId);
                  return `
                    <tr>
                      <td><strong>${ticket.id}</strong><br><span class="message-meta">${ticket.description}</span></td>
                      <td>${player.name}<br><span class="message-meta">${player.id}</span></td>
                      <td>${ticket.category}</td>
                      <td>${priorityPill(ticket.priority)}</td>
                      <td><span class="status ${ticketStatusClass(ticket.status)}">${ticket.status}</span></td>
                      <td>${ticket.team}</td>
                      <td>${ticket.owner || suggestedOwner(player, ticket.category)}</td>
                      <td><span class="sla-pill ${ticket.sla}">${ticket.due}</span></td>
                      <td>
                        <div class="row-actions">
                          <button class="subtle-button" data-open-ticket="${ticket.id}" type="button">處理</button>
                          <button class="ghost-button" data-open-profile="${player.id}" type="button">Player 360</button>
                        </div>
                      </td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  `;
}

function ticketColumn(title, items) {
  return `
    <section class="ticket-column">
      <div class="ticket-column-head">
        <strong>${title}</strong>
        <span class="nav-count">${items.length}</span>
      </div>
      <div class="ticket-column-list">
        ${
          items.length
            ? items
                .map((ticket) => {
                  const player = playerById(ticket.playerId);
                  return `
                    <article class="ticket-card ${ticket.sla}">
                      <div class="list-card-title">
                        <div>
                          <strong>${ticket.id}</strong>
                          <p>${player.name} · ${ticket.category}</p>
                        </div>
                        ${priorityPill(ticket.priority)}
                      </div>
                      <p>${ticket.description}</p>
                      <div class="ticket-card-foot">
                        <span class="sla-pill ${ticket.sla}">${ticket.due}</span>
                        <button class="subtle-button" data-open-ticket="${ticket.id}" type="button">處理</button>
                      </div>
                    </article>
                  `;
                })
                .join("")
            : `<div class="empty-state compact">無案件</div>`
        }
      </div>
    </section>
  `;
}

function renderBonus() {
  const player = playerById(state.bonusDraft.playerId);
  const checks = evaluateBonus(player, state.bonusDraft.amount, state.bonusDraft.type);

  return `
    <section class="bonus-layout">
      <section class="panel" data-section="bonus-request">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Issue Bonus</p>
            <h2>優惠與補償申請</h2>
          </div>
          <span class="status ${checks.blocked ? "blocked" : "pending"}">${checks.route}</span>
        </div>

        <form class="bonus-form" id="bonusForm">
          <div class="form-grid">
            <label class="field">
              <span>Player ID</span>
              <select id="bonusPlayer">
                ${players.map((item) => `<option value="${item.id}" ${item.id === player.id ? "selected" : ""}>${item.id} · ${item.name} · VIP ${item.vipLevel}</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span>Offer Type</span>
              <select id="bonusType">
                ${["Loss Compensation", "Cashback", "Free Spin", "Birthday Gift", "Retention Offer", "Manual Credit"].map((type) => `<option value="${type}" ${type === state.bonusDraft.type ? "selected" : ""}>${type}</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span>Amount</span>
              <input id="bonusAmount" type="number" min="0" step="100" value="${state.bonusDraft.amount}" placeholder="0" />
            </label>
            <label class="field">
              <span>Turnover Requirement</span>
              <select>
                <option>1x</option>
                <option>3x</option>
                <option>5x</option>
                <option>需主管決定</option>
              </select>
            </label>
          </div>
          <label class="field">
            <span>Reason</span>
            <textarea placeholder="發放原因、玩家情境、客服判斷與可供稽核的依據"></textarea>
          </label>
          <div class="bonus-form-row">
            <p class="message-meta">提交後會寫入玩家紀錄與稽核紀錄。</p>
            <button class="primary-button" type="submit" ${checks.blocked ? "disabled" : ""}>送出審批</button>
          </div>
        </form>

        <div class="policy-strip">
          ${summaryCell("建議上限", formatMoney(checks.maxRecommended))}
          ${summaryCell("優惠成本率", `${checks.costRatio}%`)}
          ${summaryCell("預估 NGR", formatMoney(checks.projectedNgr))}
          ${summaryCell("審批路徑", checks.approvals.join(" + "))}
        </div>
      </section>

      <aside class="section-stack" data-section-container>
        <section class="panel" data-section="bonus-checks">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Pre-issue Checks</p>
              <h3>發放前檢查</h3>
            </div>
          </div>
          <div class="check-list">
            ${checks.items
              .map(
                (item) => `
                  <article class="check-item">
                    <strong>${item.title}<span class="status ${item.status}">${item.label}</span></strong>
                    <p>${item.body}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="panel" data-section="bonus-approvals">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Approval Queue</p>
              <h3>待審批申請</h3>
            </div>
          </div>
          <div class="approval-list">
            ${bonusRequests.map((request) => approvalCard(request)).join("")}
          </div>
        </section>
      </aside>
    </section>
  `;
}

function evaluateBonus(player, amount, type) {
  const checks = [];
  let route = "Auto / Small Amount";
  let blocked = false;
  const numericAmount = Number(amount) || 0;
  const maxRecommended = Math.max(500, Math.round(player.metrics.ngr * (player.vipLevel >= 4 ? 0.08 : 0.05)));
  const projectedNgr = player.metrics.ngr - numericAmount;
  const costRatio = Math.round(((player.metrics.bonusCost + numericAmount) / Math.max(1, Math.abs(player.metrics.ngr))) * 100);
  const approvals = ["Team Leader"];

  const add = (title, body, status, label) => checks.push({ title, body, status, label });

  if (player.rgRisk === "High") {
    add("Responsible Gaming", "玩家為 RG High，促銷與刺激性挽留禁止；補償需 Compliance 先確認。", "blocked", "阻擋");
    blocked = type !== "Manual Credit";
    route = "Compliance 必審";
    approvals.push("Compliance");
  } else {
    add("Responsible Gaming", "未達硬性阻擋，仍需避免刺激性話術。", "open", "通過");
  }

  if (player.tags.includes("Bonus Abuse") || player.tags.includes("Arbitrage")) {
    add("Bonus Abuse / Arbitrage", "玩家有優惠濫用或套利標籤，額外優惠需 Risk 審核。", "blocked", "需審");
    route = "Team Leader + Risk";
    approvals.push("Risk");
  } else {
    add("Bonus Abuse / Arbitrage", "未偵測優惠濫用標籤。", "open", "通過");
  }

  if (player.kyc !== "通過" || player.tags.includes("AML Watch")) {
    add("KYC / AML", "KYC 或 AML 狀態未完全通過，高額優惠與 manual credit 需暫停或審核。", "pending", "需確認");
    route = "Risk / Compliance";
    approvals.push("Compliance");
  } else {
    add("KYC / AML", "KYC 狀態可支援一般發放流程。", "open", "通過");
  }

  if (numericAmount >= 10000 || (player.vipLevel >= 4 && numericAmount >= 5000)) {
    add("Amount Threshold", "金額達高額門檻，需 VIP Manager 與相關部門審批。", "pending", "需審");
    route = "VIP Manager + Risk";
    approvals.push("VIP Manager");
  } else if (numericAmount > 0) {
    add("Amount Threshold", "金額未達高額門檻，可依玩家風險進入對應審批。", "open", "通過");
  } else {
    add("Amount Threshold", "請輸入金額後檢查審批路徑。", "pending", "待輸入");
  }

  if (numericAmount > maxRecommended) {
    add("Cost Control", `申請金額高於建議上限 ${formatMoney(maxRecommended)}，需補 ROI 與主管理由。`, "pending", "需理由");
    if (!approvals.includes("VIP Manager")) approvals.push("VIP Manager");
  } else {
    add("Cost Control", `目前金額落在建議上限 ${formatMoney(maxRecommended)} 內。`, "open", "通過");
  }

  if (costRatio >= 60) {
    add("Bonus Cost Ratio", `成本率預估 ${costRatio}%，可能壓縮 NGR，需 Manager 確認。`, "pending", "高成本");
    if (!approvals.includes("Manager")) approvals.push("Manager");
  } else {
    add("Bonus Cost Ratio", `成本率預估 ${costRatio}%，可進入標準審批。`, "open", "通過");
  }

  return { items: checks, route, blocked, maxRecommended, costRatio, projectedNgr, approvals: [...new Set(approvals)] };
}

function approvalCard(request) {
  const player = playerById(request.playerId);
  return `
    <article class="approval-card">
      <div class="list-card-title">
        <div>
          <strong>${request.type} · ${formatMoney(request.amount)}</strong>
          <p>${player.name} · ${request.id}</p>
        </div>
        <span class="status pending">${request.status}</span>
      </div>
      <p>${request.created} · Route ${request.route}</p>
    </article>
  `;
}

function renderTasks() {
  return `
    <section class="section-stack">
      <div class="view-header">
        <div>
          <p class="eyebrow">Workflow</p>
          <h2>VIP Follow-up Tasks</h2>
        </div>
        <button class="primary-button" data-action="create-task" data-player="${state.activePlayerId}" type="button">新增跟進</button>
      </div>

      <div class="two-column">
        <section class="panel" data-section="tasks-queue">
          <div class="panel-header">
            <div>
              <p class="eyebrow">My Queue</p>
              <h3>待處理任務</h3>
            </div>
          </div>
          <div class="task-list">
            ${tasks.map((task) => taskCard(task)).join("")}
          </div>
        </section>

        <section class="panel" data-section="tasks-rules">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Automation Rules</p>
              <h3>自動任務規則</h3>
            </div>
          </div>
          <div class="timeline">
            ${timelineItem("VIP 3+ 連續 7 天未登入", "建立 Churn Prevention，指派負責客服，SLA 24 小時。")}
            ${timelineItem("VIP 4+ 單日入金達門檻", "建立 Deposit Follow-up，客服需 30 分鐘內關懷。")}
            ${timelineItem("連續 3 天大額虧損", "建立 Big Loss Care，並觸發 Responsible Gaming 觀察提醒。")}
            ${timelineItem("投訴超過 SLA 50%", "升級 Team Leader 並標記 Complaint Risk。")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function timelineItem(title, body) {
  return `
    <article class="timeline-item">
      <strong>${title}</strong>
      <p>${body}</p>
    </article>
  `;
}

function renderRisk() {
  return `
    <section class="section-stack">
      <div class="view-header">
        <div>
          <p class="eyebrow">Risk / Fraud</p>
          <h2>風控協作中心</h2>
        </div>
        <button class="primary-button" data-action="risk-escalate" data-player="${state.activePlayerId}" type="button">新增 Risk Alert</button>
      </div>

      <div class="risk-grid" data-section="risk-alerts">
        ${riskAlerts
          .map((alert) => {
            const player = playerById(alert.playerId);
            return `
              <article class="panel risk-card ${riskClass(alert.severity)}">
                <div class="list-card-title">
                  <div>
                    <p class="eyebrow">${alert.id}</p>
                    <h3>${alert.type}</h3>
                  </div>
                  <span class="severity ${riskClass(alert.severity)}">${alert.severity}</span>
                </div>
                <p><strong>${player.name}</strong> · ${player.id}</p>
                <p>${alert.action}</p>
                <div class="profile-actions">
                  <button class="subtle-button" data-open-profile="${player.id}" type="button">Player 360</button>
                  <button class="ghost-button" data-action="risk-note" data-player="${player.id}" type="button">處理紀錄</button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>

      <section class="table-panel" data-section="risk-instructions">
        <div class="table-header">
          <div>
            <p class="eyebrow">Collaboration Flow</p>
            <h3>客服可見風控指引</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tag</th>
                <th>CS Instruction</th>
                <th>Required Approval</th>
              </tr>
            </thead>
            <tbody>
              ${[
                ["Bonus Abuse", "不可主動提供額外優惠；所有補償需留原因。", "Team Leader + Risk"],
                ["AML Watch", "不可承諾出金速度；僅說明可揭露狀態。", "Risk + Compliance"],
                ["Payment Risk", "大額出入金需 Payment 檢查。", "Payment Desk"],
                ["Suspicious Device", "不得提示風控規則細節。", "Risk Team"]
              ]
                .map((row) => `<tr><td><span class="tag risk">${row[0]}</span></td><td>${row[1]}</td><td>${row[2]}</td></tr>`)
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  `;
}

function renderResponsibleGaming() {
  const rgPlayers = players.filter((player) => player.rgRisk !== "Low" || player.tags.includes("Big Loser"));
  const highScoreCases = rgCases.filter((item) => item.riskScore >= 80).length;
  return `
    <section class="section-stack">
      <div class="view-header">
        <div>
          <p class="eyebrow">Responsible Gaming</p>
          <h2>責任博彩控制中心</h2>
        </div>
        <button class="primary-button" data-action="rg-action" data-player="${state.activePlayerId}" type="button">套用 RG Action</button>
      </div>

      <div class="dashboard-grid" data-section="rg-metrics">
        ${metricCard("RG Alerts", riskAlerts.filter((alert) => alert.type === "RG Risk").length, "High risk requires immediate escalation", "down")}
        ${metricCard("Promo Blocked", 7, "促銷訊息自動停止", "flat")}
        ${metricCard("高風險 Case", highScoreCases, "Score 80+ 需 Compliance", "down")}
        ${metricCard("Deposit Limit Requests", 5, "2 件待 Compliance", "flat")}
      </div>

      <div class="two-column">
        <section class="panel" data-section="rg-watchlist">
          <div class="panel-header">
            <div>
              <p class="eyebrow">RG Watchlist</p>
              <h3>需關注玩家</h3>
            </div>
          </div>
          <div class="task-list">
            ${rgPlayers
              .map(
                (player) => `
                  <article class="list-card">
                    <div class="list-card-title">
                      <div>
                        <strong>${player.name}</strong>
                        <p>${player.id} · ${player.username}</p>
                      </div>
                      <span class="severity ${riskClass(player.rgRisk)}">RG ${player.rgRisk}</span>
                    </div>
                    <p>${rgSignals(player).join(" / ")}</p>
                    <div class="mini-signal-grid">
                      ${rgSignalPill("Today P/L", formatMoney(player.metrics.todayPl), player.metrics.todayPl < -10000 ? "blocked" : "open")}
                      ${rgSignalPill("Deposit Pattern", player.behavior.depositPattern, player.behavior.depositPattern.includes("短間隔") ? "pending" : "open")}
                    </div>
                    <div class="profile-actions">
                      <button class="subtle-button" data-open-profile="${player.id}" type="button">Player 360</button>
                      <button class="ghost-button" data-action="rg-action" data-player="${player.id}" type="button">設定限制</button>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="panel" data-section="rg-controls">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Allowed Actions</p>
              <h3>客服限制與引導</h3>
            </div>
          </div>
          <div class="check-list">
            ${[
              ["Bonus", "RG Risk 玩家禁止或需審批，不能作為挽留刺激。", "blocked"],
              ["Promotional Message", "RG High 玩家禁止發送促銷訊息。", "blocked"],
              ["Limit Increase", "提高限額需 Compliance 審核。", "pending"],
              ["Cooling-off", "客服可引導玩家申請冷靜期。", "open"],
              ["Self-exclusion", "需走合規流程並保留稽核紀錄。", "pending"]
            ]
              .map(
                ([title, body, status]) => `
                  <article class="check-item">
                    <strong>${title}<span class="status ${status}">${status === "blocked" ? "限制" : status === "pending" ? "需審核" : "可引導"}</span></strong>
                    <p>${body}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      </div>

      <section class="panel" data-section="rg-cases">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Case Workflow</p>
            <h3>RG Case 處理流程</h3>
          </div>
        </div>
        <div class="case-grid">
          ${rgCases.map((item) => rgCaseCard(item)).join("")}
        </div>
      </section>
    </section>
  `;
}

function rgSignalPill(label, value, status) {
  return `
    <div class="signal-pill ${status}">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function rgCaseCard(item) {
  const player = playerById(item.playerId);
  return `
    <article class="case-card">
      <div class="case-score ${item.riskScore >= 80 ? "high" : item.riskScore >= 60 ? "medium" : "low"}">
        <strong>${item.riskScore}</strong>
        <span>Score</span>
      </div>
      <div class="case-body">
        <div class="list-card-title">
          <div>
            <strong>${item.id} · ${player.name}</strong>
            <p>${item.status} · Owner ${item.owner}</p>
          </div>
          <span class="status ${item.status.includes("Review") ? "pending" : "open"}">${item.nextReview}</span>
        </div>
        <p>${item.note}</p>
        <div class="tag-row">
          ${item.actions.map((action) => `<span class="tag ${action.includes("Block") ? "risk" : "warning"}">${action}</span>`).join("")}
        </div>
        <div class="profile-actions">
          <button class="subtle-button" data-open-rg-case="${item.id}" type="button">查看證據</button>
          <button class="ghost-button" data-action="rg-action" data-player="${item.playerId}" type="button">新增 Action</button>
        </div>
      </div>
    </article>
  `;
}

function rgSignals(player) {
  const signals = [];
  if (player.metrics.todayPl < -10000) signals.push("大額虧損");
  if (player.behavior.depositPattern.includes("短間隔")) signals.push("短時間多次入金");
  if (player.behavior.withdrawalPattern.includes("取消")) signals.push("取消出金後再投注");
  if (player.lastLogin.includes("7 日")) signals.push("流失風險觀察");
  if (!signals.length) signals.push("中度觀察");
  return signals;
}

function renderReports() {
  const totalDeposit = players.reduce((sum, player) => sum + player.metrics.monthDeposit, 0);
  const totalWithdrawal = players.reduce((sum, player) => sum + player.metrics.monthWithdrawal, 0);
  const totalNgr = players.reduce((sum, player) => sum + player.metrics.ngr, 0);
  const totalBonusCost = players.reduce((sum, player) => sum + player.metrics.bonusCost + player.metrics.cashbackCost, 0);
  const bonusCostRatio = Math.round((totalBonusCost / Math.max(1, Math.abs(totalNgr))) * 100);
  const slaRisk = tickets.filter((ticket) => ticket.sla === "due" || ticket.sla === "breached").length;
  const highRiskVip = players.filter((player) => player.riskLevel === "High" || player.rgRisk === "High").length;
  const churnVip = players.filter((player) => player.tags.includes("Churn Risk")).length;
  const reportRows = [
    {
      title: "VIP 價值",
      question: "VIP 族群今天是否健康？",
      primary: formatMoney(totalNgr),
      secondary: `入金 ${formatMoney(totalDeposit)} / 出金 ${formatMoney(totalWithdrawal)}`,
      warning: "NGR 下降但優惠成本上升時，要檢查高成本玩家與套利風險。",
      action: "優先查看 VIP 4+、High Value、Bonus Cost 高的玩家。",
      bars: [45, 62, 58, 80, 72, 66]
    },
    {
      title: "客服績效",
      question: "SLA 和服務品質有沒有失控？",
      primary: `${slaRisk} 件`,
      secondary: "接近或已逾 SLA",
      warning: "P0/P1 或大額出金案件逾時時，主管需要補 owner 和下一步。",
      action: "先處理 breached，再看 due soon，最後看一般 Open。",
      bars: [70, 63, 78, 82, 76, 88]
    },
    {
      title: "留存",
      question: "哪些高價值玩家可能流失？",
      primary: `${churnVip} 位`,
      secondary: "帶 Churn Risk 標籤",
      warning: "大贏後沉默、連續未登入、投訴後未回訪都要分開看。",
      action: "建立關係維護任務，但避免用刺激投注的話術。",
      bars: [35, 48, 54, 57, 62, 68]
    },
    {
      title: "優惠成本",
      question: "補償是否真的值得？",
      primary: `${bonusCostRatio}%`,
      secondary: "Bonus + Cashback / NGR",
      warning: "成本率超過 60% 時，要要求 ROI 理由和主管審批。",
      action: "先看 RG、Bonus Abuse、Arbitrage，再決定是否給優惠。",
      bars: [62, 56, 49, 44, 39, 31]
    },
    {
      title: "投訴",
      question: "投訴是否正在變成風險？",
      primary: `${tickets.filter((ticket) => /Complaint|Withdrawal|Responsible/i.test(ticket.category)).length} 件`,
      secondary: "投訴 / 出金 / RG 相關",
      warning: "同玩家多工單或 SLA breach 會放大客訴與監管風險。",
      action: "把對話、工單、內部備註串回 Player 360。",
      bars: [30, 28, 34, 26, 21, 18]
    },
    {
      title: "風險",
      question: "哪些玩家不應該被一般行銷處理？",
      primary: `${highRiskVip} 位`,
      secondary: "High Risk / RG High",
      warning: "RG High、AML Watch、Bonus Abuse 不應進一般留存或促銷流程。",
      action: "轉 Risk / Compliance，客服只看可揭露指引。",
      bars: [20, 26, 24, 31, 28, 22]
    }
  ];

  return `
    <section class="section-stack">
      <div class="view-header">
        <div>
          <p class="eyebrow">Management Reports</p>
          <h2>管理報表總覽</h2>
        </div>
      </div>

      <div class="dashboard-grid" data-section="reports-metrics">
        ${metricCard("本月 NGR", formatMoney(totalNgr), "扣除玩家輸贏與成本後的管理視角", "up")}
        ${metricCard("優惠成本率", `${bonusCostRatio}%`, "超過 60% 需 Manager 理由", bonusCostRatio >= 60 ? "down" : "flat")}
        ${metricCard("SLA 風險", slaRisk, "due / breached 工單", slaRisk ? "down" : "flat")}
        ${metricCard("高風險 VIP", highRiskVip, "Risk High 或 RG High", highRiskVip ? "down" : "flat")}
      </div>

      <div class="two-column" data-section="reports-executive">
        <section class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Executive Readout</p>
              <h3>主管先看這三件事</h3>
            </div>
          </div>
          <div class="report-insight-list">
            ${reportInsight("先看風險", `${highRiskVip} 位高風險 VIP 不能進一般促銷流程，需走 Risk / Compliance 指引。`, "blocked")}
            ${reportInsight("再看服務", `${slaRisk} 件工單接近或已逾時，需確認 owner、下一步與可揭露內容。`, slaRisk ? "pending" : "open")}
            ${reportInsight("最後看成本", `目前優惠成本率 ${bonusCostRatio}%，所有高額補償都要看 ROI 與玩家風險。`, bonusCostRatio >= 60 ? "pending" : "open")}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Actions</p>
              <h3>今天建議處理順序</h3>
            </div>
          </div>
          <div class="report-action-list">
            ${reportAction("1", "處理 breached / due 工單", "避免大額出金、RG、投訴案件失去 SLA 控制。")}
            ${reportAction("2", "檢查高風險 VIP", "RG High、AML Watch、Bonus Abuse 先從行銷與優惠流程排除。")}
            ${reportAction("3", "審查高成本優惠", "金額超過建議上限或成本率過高時，要求主管理由。")}
            ${reportAction("4", "回訪流失風險玩家", "只做關係維護，不用刺激投注話術。")}
          </div>
        </section>
      </div>

      <section class="table-panel" data-section="reports-guide">
        <div class="table-header">
          <div>
            <p class="eyebrow">How To Read</p>
            <h3>每張報表看什麼</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>報表</th>
                <th>回答的問題</th>
                <th>異常訊號</th>
                <th>管理動作</th>
              </tr>
            </thead>
            <tbody>
              ${reportRows
                .map(
                  (row) => `
                    <tr>
                      <td><strong>${row.title}</strong><br><span class="message-meta">${row.secondary}</span></td>
                      <td>${row.question}</td>
                      <td>${row.warning}</td>
                      <td>${row.action}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <div class="report-grid" data-section="reports-cards">
        ${reportRows.map((row) => reportTile(row)).join("")}
      </div>
    </section>
  `;
}

function reportInsight(title, body, status) {
  return `
    <article class="report-insight ${status}">
      <strong>${title}</strong>
      <p>${body}</p>
    </article>
  `;
}

function reportAction(step, title, body) {
  return `
    <article class="report-action">
      <span>${step}</span>
      <div>
        <strong>${title}</strong>
        <p>${body}</p>
      </div>
    </article>
  `;
}

function reportTile(report) {
  return `
    <article class="report-tile">
      <div class="report-tile-head">
        <div>
          <p class="eyebrow">${report.question}</p>
          <h3>${report.title}</h3>
        </div>
        <strong>${report.primary}</strong>
      </div>
      <p>${report.secondary}</p>
      <p>${report.action}</p>
      <div class="mini-bars" aria-hidden="true">
        ${report.bars.map((bar, index) => `<span class="mini-bar" style="height:${bar}%; background:${index % 2 ? "#a26e1b" : "#24715e"}"></span>`).join("")}
      </div>
    </article>
  `;
}

function renderSettings() {
  return `
    <section class="section-stack">
      <div class="view-header">
        <div>
          <p class="eyebrow">Rules & Controls</p>
          <h2>設定中心</h2>
        </div>
      </div>

      <div class="settings-grid">
        <section class="panel" data-section="settings-vip">
          <div class="panel-header">
            <div>
              <p class="eyebrow">VIP Level Rules</p>
              <h3>分層規則</h3>
            </div>
          </div>
          <div class="settings-list">
            ${settingRow("VIP Score Model", "Net Deposit 30% + Turnover 25% + Activity 15% + Retention 15% + Loyalty 10% - Risk 5%", true)}
            ${settingRow("Auto Downgrade", "連續 30 天低活躍進入人工審核。", true)}
            ${settingRow("Watchlist VIP", "高價值但高風險玩家需共同監控。", true)}
          </div>
        </section>

        <section class="panel" data-section="settings-sla">
          <div class="panel-header">
            <div>
              <p class="eyebrow">SLA Rules</p>
              <h3>服務時限</h3>
            </div>
          </div>
          <div class="settings-list">
            ${settingRow("VIP 5 First Response", "1 分鐘內，解決目標 15 分鐘。", true)}
            ${settingRow("Large Withdrawal", "大額出金問題 30 分鐘內處理。", true)}
            ${settingRow("RG High Risk", "即時升級 Compliance。", true)}
          </div>
        </section>

        <section class="panel" data-section="settings-templates">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Template Control</p>
              <h3>話術權限</h3>
            </div>
          </div>
          <div class="settings-list">
            ${settingRow("Withdrawal Guarantee", "禁止使用出金保證話術。", false)}
            ${settingRow("RG Templates", "僅可使用 Compliance 核准版本。", true)}
            ${settingRow("Compensation Promise", "Team Leader 以上才可使用。", true)}
          </div>
        </section>
      </div>
    </section>
  `;
}

function settingRow(title, body, enabled) {
  return `
    <article class="setting-row">
      <div>
        <strong>${title}</strong>
        <p>${body}</p>
      </div>
      <button class="toggle ${enabled ? "on" : ""}" type="button" aria-label="${title}"></button>
    </article>
  `;
}

function hydrateView() {
  if (state.view === "inbox") {
    const messages = document.querySelector("#messages");
    if (messages) messages.scrollTop = messages.scrollHeight;
  }
  if (state.activeSection) {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function showModal({ eyebrow = "Action", title, body }) {
  modalEyebrow.textContent = eyebrow;
  modalTitle.textContent = title;
  modalBody.innerHTML = body;
  modalBackdrop.hidden = false;
  applyLocale(modalBackdrop);
}

function closeModal() {
  modalBackdrop.hidden = true;
  modalBody.innerHTML = "";
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = translateTextForLocale(message);
  toastStack.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3600);
}

function openTicketModal(playerId) {
  const player = playerById(playerId);
  const owner = suggestedOwner(player);
  showModal({
    eyebrow: "Ticket",
    title: `新增工單 · ${player.name}`,
    body: `
      <form class="modal-form" id="ticketForm" data-player="${player.id}">
        <div class="form-grid">
          <label class="field">
            <span>Category</span>
            <select id="ticketCategory">
              ${["Deposit Issue", "Withdrawal Issue", "Bonus Issue", "Complaint", "VIP Request", "KYC Issue", "Risk Review", "Responsible Gaming"].map((item) => `<option>${item}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>Priority</span>
            <select id="ticketPriority">
              ${["P0", "P1", "P2", "P3", "P4"].map((item) => `<option>${item}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>Assigned Team</span>
            <select id="ticketTeam">
              ${["VIP CS", "Payment", "Risk", "Compliance", "Technical"].map((item) => `<option>${item}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>Owner</span>
            <select id="ticketOwner">
              ${agents.map((agent) => `<option ${agent.name === owner ? "selected" : ""}>${agent.name}</option>`).join("")}
              <option ${owner === "Risk Team" ? "selected" : ""}>Risk Team</option>
            </select>
          </label>
          <label class="field">
            <span>SLA</span>
            <select id="ticketSla">
              ${["30 分鐘", "1 小時", "2 小時", "4 小時", "24 小時"].map((item) => `<option>${item}</option>`).join("")}
            </select>
          </label>
        </div>
        <label class="field">
          <span>Description</span>
          <textarea id="ticketDescription" required placeholder="描述問題、玩家情境、已查證資訊與下一步"></textarea>
        </label>
        <div class="modal-form-row">
          <p class="message-meta">建立後會自動連回 Player 360 與對話紀錄。</p>
          <button class="primary-button" type="submit">建立工單</button>
        </div>
      </form>
    `
  });
}

function openTicketDetailModal(ticketId) {
  const ticket = ticketById(ticketId);
  if (!ticket) return;
  const player = playerById(ticket.playerId);
  const history = ticket.history || [
    { at: "建立", by: ticket.owner || suggestedOwner(player, ticket.category), body: ticket.description },
    { at: ticket.due, by: ticket.team, body: `目前狀態：${ticket.status}` }
  ];

  showModal({
    eyebrow: "Ticket Lifecycle",
    title: `${ticket.id} · ${player.name}`,
    body: `
      <section class="detail-stack">
        <div class="detail-grid">
          ${summaryCell("Player", `${player.name} · ${player.id}`)}
          ${summaryCell("Category", ticket.category)}
          ${summaryCell("Priority", ticket.priority)}
          ${summaryCell("SLA", ticket.due)}
          ${summaryCell("Team", ticket.team)}
          ${summaryCell("Owner", ticket.owner || suggestedOwner(player, ticket.category))}
        </div>

        <div class="check-list">
          ${guardrail(player)}
        </div>

        <form class="modal-form" id="ticketUpdateForm" data-ticket="${ticket.id}">
          <div class="form-grid">
            <label class="field">
              <span>Status</span>
              <select id="ticketUpdateStatus">
                ${["Open", "Payment Review", "Risk Review", "Compliance Review", "Escalated", "Resolved", "Closed"].map((item) => `<option ${ticket.status === item ? "selected" : ""}>${item}</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span>Owner</span>
              <select id="ticketUpdateOwner">
                ${agents.map((agent) => `<option ${ticket.owner === agent.name ? "selected" : ""}>${agent.name}</option>`).join("")}
                <option ${ticket.owner === "Risk Team" ? "selected" : ""}>Risk Team</option>
              </select>
            </label>
          </div>
          <label class="field">
            <span>Next Step / Internal Note</span>
            <textarea id="ticketUpdateNote" placeholder="記錄處理依據、下一步、可揭露內容與升級原因"></textarea>
          </label>
          <div class="modal-form-row">
            <button class="ghost-button" data-advance-ticket="${ticket.id}" type="button">推進至 ${nextTicketStatus(ticket)}</button>
            <button class="primary-button" type="submit">更新工單</button>
          </div>
        </form>

        <section>
          <h3>處理時間軸</h3>
          <div class="event-timeline">
            ${history
              .map(
                (item) => `
                  <article class="timeline-event">
                    <span class="event-marker">${item.by}</span>
                    <div>
                      <div class="event-head">
                        <strong>${item.body}</strong>
                        <span>${item.at}</span>
                      </div>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      </section>
    `
  });
}

function openNoteModal(playerId) {
  const player = playerById(playerId);
  showModal({
    eyebrow: "Internal Note",
    title: `新增備註 · ${player.name}`,
    body: `
      <form class="modal-form" id="noteForm">
        <label class="field">
          <span>Note Type</span>
          <select>
            <option>Important Notes</option>
            <option>Preference</option>
            <option>Complaint History</option>
            <option>Retention History</option>
            <option>Sensitive Topics</option>
          </select>
        </label>
        <label class="field">
          <span>Internal Note</span>
          <textarea required placeholder="這裡的資料會進入稽核紀錄，請避免不必要個資與主觀標籤"></textarea>
        </label>
        <button class="primary-button" type="submit">儲存備註</button>
      </form>
    `
  });
}

function openTaskModal(playerId) {
  const player = playerById(playerId);
  showModal({
    eyebrow: "Follow-up",
    title: `設定跟進 · ${player.name}`,
    body: `
      <form class="modal-form" id="taskForm" data-player="${player.id}">
        <div class="form-grid">
          <label class="field">
            <span>Task Type</span>
            <select id="taskType">
              ${["Welcome Call", "Birthday Greeting", "Deposit Follow-up", "Withdrawal Follow-up", "Churn Prevention", "Complaint Follow-up", "Big Loss Care", "Big Win Care", "KYC Reminder"].map((item) => `<option>${item}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>Priority</span>
            <select id="taskPriority">
              ${["P0", "P1", "P2", "P3"].map((item) => `<option>${item}</option>`).join("")}
            </select>
          </label>
        </div>
        <label class="field">
          <span>Reason</span>
          <textarea id="taskReason" required placeholder="為什麼需要跟進，以及客服應注意的合規限制"></textarea>
        </label>
        <button class="primary-button" type="submit">建立任務</button>
      </form>
    `
  });
}

function openRgModal(playerId) {
  const player = playerById(playerId);
  showModal({
    eyebrow: "Responsible Gaming",
    title: `RG Action · ${player.name}`,
    body: `
      <form class="modal-form" id="rgForm" data-player="${player.id}">
        <div class="detail-grid">
          ${summaryCell("RG Risk", player.rgRisk)}
          ${summaryCell("Today P/L", formatMoney(player.metrics.todayPl))}
          ${summaryCell("Deposit Pattern", player.behavior.depositPattern)}
          ${summaryCell("Signals", rgSignals(player).join(" / "))}
        </div>
        <div class="check-list">
          ${[
            ["Cooling-off", "建議冷靜期，暫停遊玩指定期間。"],
            ["Deposit Limit", "設定每日 / 每週 / 每月存款限制。"],
            ["Bet Limit", "設定投注或損失限額。"],
            ["Self-exclusion", "自我排除，需 Compliance 流程。"],
            ["Promo Block", "停止促銷與挽留訊息。"]
          ]
            .map(
              ([title, body]) => `
                <label class="check-item">
                  <strong><span>${title}</span><input type="checkbox" value="${title}" /></strong>
                  <p>${body}</p>
                </label>
              `
            )
            .join("")}
        </div>
        <div class="form-grid">
          <label class="field">
            <span>Risk Score</span>
            <input id="rgRiskScore" type="number" min="0" max="100" value="${player.rgRisk === "High" ? 88 : player.rgRisk === "Medium" ? 64 : 35}" />
          </label>
          <label class="field">
            <span>Next Review</span>
            <select id="rgNextReview">
              <option>今日 16:30</option>
              <option>明日 12:00</option>
              <option>3 日後</option>
              <option>7 日後</option>
            </select>
          </label>
        </div>
        <label class="field">
          <span>Compliance Note</span>
          <textarea id="rgNote" placeholder="記錄玩家狀態、訊號與採取限制的依據"></textarea>
        </label>
        <button class="primary-button" type="submit">送出 RG 審核</button>
      </form>
    `
  });
}

function openRgCaseModal(caseId) {
  const item = rgCaseById(caseId);
  if (!item) return;
  const player = playerById(item.playerId);
  showModal({
    eyebrow: "RG Evidence",
    title: `${item.id} · ${player.name}`,
    body: `
      <section class="detail-stack">
        <div class="detail-grid">
          ${summaryCell("Risk Score", item.riskScore)}
          ${summaryCell("Status", item.status)}
          ${summaryCell("Owner", item.owner)}
          ${summaryCell("Next Review", item.nextReview)}
        </div>
        <section>
          <h3>Evidence</h3>
          <div class="check-list">
            ${item.evidence.map((evidence) => `<article class="check-item"><strong>${evidence}</strong><p>保留為 RG 判斷依據與後續稽核紀錄。</p></article>`).join("")}
          </div>
        </section>
        <section>
          <h3>Actions</h3>
          <div class="tag-row">
            ${item.actions.map((action) => `<span class="tag ${action.includes("Block") ? "risk" : "warning"}">${action}</span>`).join("")}
          </div>
          <p class="message-meta">${item.note}</p>
        </section>
        <div class="modal-form-row">
          <button class="ghost-button" data-action="rg-action" data-player="${item.playerId}" type="button">新增 Action</button>
          <button class="primary-button" data-resolve-rg="${item.id}" type="button">標記已 Review</button>
        </div>
      </section>
    `
  });
}

function openAiHandoffModal(conversationId) {
  const conversation = conversations.find((item) => item.id === conversationId);
  if (!conversation) return;
  const analysis = aiAnalyzeConversation(conversation);
  showModal({
    eyebrow: "AI Handoff",
    title: `轉真人摘要 · ${analysis.player.name}`,
    body: `
      <section class="detail-stack">
        <div class="detail-grid">
          ${summaryCell("Intent", analysis.intent)}
          ${summaryCell("Confidence", `${analysis.confidence}%`)}
          ${summaryCell("Route", analysis.route)}
          ${summaryCell("Status", aiStatusLabel(analysis)[0])}
        </div>
        <section>
          <h3>交接摘要</h3>
          <div class="check-list">
            ${analysis.summary.map((item) => `<article class="check-item"><strong>${item}</strong><p>已納入真人接手上下文。</p></article>`).join("")}
          </div>
        </section>
        <section>
          <h3>風險與限制</h3>
          <div class="tag-row">
            ${
              analysis.blockers.length
                ? analysis.blockers.map((item) => `<span class="tag risk">${item}</span>`).join("")
                : `<span class="tag ok">無硬性阻擋</span>`
            }
          </div>
          <p class="message-meta">AI 建議路徑：${analysis.route}。高風險案件需由真人確認後回覆。</p>
        </section>
        <section>
          <h3>AI 建議回覆</h3>
          <article class="ai-reply-preview">
            <p>${analysis.suggestedReply}</p>
          </article>
        </section>
        <div class="modal-form-row">
          <button class="ghost-button" data-open-ai-conversation="${conversation.id}" type="button">回到對話</button>
          <button class="primary-button" data-ai-create-ticket="${conversation.id}" type="button">建立交接工單</button>
        </div>
      </section>
    `
  });
}

function checkCompliance(text) {
  const blocked = [
    "再玩一下就會贏",
    "繼續試試",
    "運氣快來了",
    "再入金就可以翻本",
    "保證這次出金",
    "翻本"
  ];
  const hit = blocked.find((phrase) => text.includes(phrase));
  return hit
    ? { ok: false, message: `話術風險：偵測到「${hit}」，請改用合規模板或 RG 提醒。` }
    : { ok: true, message: "話術檢查：目前未偵測到高風險語句" };
}

function sendMessage(body) {
  const conversation = conversations.find((item) => item.id === state.activeConversationId);
  if (!conversation || !body.trim()) return;
  const result = checkCompliance(body);
  if (!result.ok) {
    showToast(result.message);
    return;
  }
  conversation.messages.push({
    sender: "agent",
    at: "剛剛",
    body: body.trim()
  });
  render();
  showToast("回覆已送出，並完成話術合規檢查。");
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setView(viewButton.dataset.view, viewButton.dataset.section || "");
    return;
  }

  const profileButton = event.target.closest("[data-open-profile]");
  if (profileButton) {
    state.activePlayerId = profileButton.dataset.openProfile;
    setView("players", "players-profile");
    return;
  }

  const selectPlayer = event.target.closest("[data-select-player]");
  if (selectPlayer) {
    state.activePlayerId = selectPlayer.dataset.selectPlayer;
    setView("players", "players-profile");
    return;
  }

  const conversationButton = event.target.closest("[data-conversation]");
  if (conversationButton) {
    state.activeConversationId = conversationButton.dataset.conversation;
    setView("inbox", "inbox-chat");
    return;
  }

  const templateButton = event.target.closest("[data-template]");
  if (templateButton) {
    const input = document.querySelector("#messageInput");
    if (input) {
      input.value = templateButton.dataset.template;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
    }
    return;
  }

  const sendButton = event.target.closest("[data-send-message]");
  if (sendButton) {
    const conversation = conversationsForPlayer(sendButton.dataset.sendMessage);
    state.activePlayerId = sendButton.dataset.sendMessage;
    if (conversation) state.activeConversationId = conversation.id;
    setView("inbox", "inbox-chat");
    return;
  }

  const issueBonusButton = event.target.closest("[data-issue-bonus]");
  if (issueBonusButton) {
    state.bonusDraft.playerId = issueBonusButton.dataset.issueBonus;
    setView("bonus", "bonus-request");
    return;
  }

  const openAiConversationButton = event.target.closest("[data-open-ai-conversation]");
  if (openAiConversationButton) {
    const conversation = conversations.find((item) => item.id === openAiConversationButton.dataset.openAiConversation);
    if (conversation) {
      state.activeConversationId = conversation.id;
      state.activePlayerId = conversation.playerId;
      closeModal();
      setView("inbox", "inbox-chat");
    }
    return;
  }

  const applyAiReplyButton = event.target.closest("[data-ai-apply-reply]");
  if (applyAiReplyButton) {
    const conversation = conversations.find((item) => item.id === applyAiReplyButton.dataset.aiApplyReply);
    if (conversation) {
      const analysis = aiAnalyzeConversation(conversation);
      state.activeConversationId = conversation.id;
      state.activePlayerId = conversation.playerId;
      if (state.view !== "inbox" || state.activeSection !== "inbox-chat") {
        setView("inbox", "inbox-chat");
      }
      const input = document.querySelector("#messageInput");
      if (input) {
        input.value = analysis.suggestedReply;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.focus();
      }
      aiAuditEvents.unshift({ id: `AI-${Math.floor(9100 + Math.random() * 800)}`, conversationId: conversation.id, action: "Applied suggested reply", status: "Draft", at: "剛剛" });
      showToast("AI 建議回覆已套用到輸入框，送出前仍需真人確認。");
    }
    return;
  }

  const aiHandoffButton = event.target.closest("[data-ai-handoff]");
  if (aiHandoffButton) {
    openAiHandoffModal(aiHandoffButton.dataset.aiHandoff);
    return;
  }

  const aiCreateTicketButton = event.target.closest("[data-ai-create-ticket]");
  if (aiCreateTicketButton) {
    const conversation = conversations.find((item) => item.id === aiCreateTicketButton.dataset.aiCreateTicket);
    if (conversation) {
      const analysis = aiAnalyzeConversation(conversation);
      tickets.unshift({
        id: `T-${Math.floor(6300 + Math.random() * 300)}`,
        playerId: conversation.playerId,
        category: analysis.category,
        priority: analysis.severity === "high" ? "P0" : analysis.severity === "medium" ? "P1" : "P2",
        status: "Open",
        team: analysis.route,
        owner: analysis.route,
        sla: analysis.severity === "high" ? "due" : "safe",
        due: analysis.severity === "high" ? "30 分鐘" : "2 小時",
        description: `AI handoff：${analysis.summary.join(" ")}`
      });
      aiAuditEvents.unshift({ id: `AI-${Math.floor(9100 + Math.random() * 800)}`, conversationId: conversation.id, action: "Created handoff ticket", status: "Handoff", at: "剛剛" });
      closeModal();
      showToast("AI 交接工單已建立。");
      render();
    }
    return;
  }

  const ticketButton = event.target.closest("[data-open-ticket]");
  if (ticketButton) {
    openTicketDetailModal(ticketButton.dataset.openTicket);
    return;
  }

  const advanceTicketButton = event.target.closest("[data-advance-ticket]");
  if (advanceTicketButton) {
    const ticket = ticketById(advanceTicketButton.dataset.advanceTicket);
    if (ticket) {
      ticket.status = nextTicketStatus(ticket);
      if (ticket.status === "Resolved" || ticket.status === "Closed") {
        ticket.sla = "safe";
        ticket.due = "完成";
      }
      ticket.history = [
        ...(ticket.history || []),
        { at: "剛剛", by: state.role, body: `狀態推進至 ${ticket.status}` }
      ];
      closeModal();
      showToast(`工單 ${ticket.id} 已推進至 ${ticket.status}。`);
      render();
    }
    return;
  }

  const rgCaseButton = event.target.closest("[data-open-rg-case]");
  if (rgCaseButton) {
    openRgCaseModal(rgCaseButton.dataset.openRgCase);
    return;
  }

  const resolveRgButton = event.target.closest("[data-resolve-rg]");
  if (resolveRgButton) {
    const item = rgCaseById(resolveRgButton.dataset.resolveRg);
    if (item) {
      item.status = "Reviewed";
      item.nextReview = "7 日後";
      closeModal();
      showToast(`${item.id} 已標記完成 review，並排入後續追蹤。`);
      render();
    }
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const playerId = actionButton.dataset.player || state.activePlayerId;
    const action = actionButton.dataset.action;
    if (action === "create-ticket") openTicketModal(playerId);
    if (action === "add-note") openNoteModal(playerId);
    if (action === "create-task") openTaskModal(playerId);
    if (action === "rg-action") openRgModal(playerId);
    if (action === "assign-next") {
      const next = routingQueueItems()[0];
      if (next) showToast(`${next.source} ${next.id} 已建議分派給 ${next.owner}。`);
    }
    if (action === "ai-run-triage") {
      aiAuditEvents.unshift({ id: `AI-${Math.floor(9100 + Math.random() * 800)}`, conversationId: "ALL", action: "Manual triage refresh", status: "Audit", at: "剛剛" });
      showToast("AI 分流已重新執行，稽核紀錄已更新。");
      render();
    }
    if (action === "risk-escalate" || action === "risk-note") {
      showToast("Risk alert 已建立處理紀錄，並通知 Risk Team。");
    }
    return;
  }

  if (event.target.closest("#closeModal")) {
    closeModal();
    return;
  }

  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "globalSearch") {
    state.globalSearch = event.target.value;
    if (state.view === "players") render();
  }

  if (event.target.id === "playerSearch") {
    state.playerFilters.search = event.target.value;
    render();
  }

  if (event.target.id === "messageInput") {
    const hint = document.querySelector("#complianceHint");
    const result = checkCompliance(event.target.value);
    if (hint) {
      hint.textContent = translateTextForLocale(result.message);
      hint.classList.toggle("warn", !result.ok);
    }
  }

  if (event.target.id === "bonusAmount") {
    state.bonusDraft.amount = Number(event.target.value) || 0;
    render();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "vipFilter") {
    state.playerFilters.vip = event.target.value;
    render();
  }
  if (event.target.id === "riskFilter") {
    state.playerFilters.risk = event.target.value;
    render();
  }
  if (event.target.id === "bonusPlayer") {
    state.bonusDraft.playerId = event.target.value;
    render();
  }
  if (event.target.id === "bonusType") {
    state.bonusDraft.type = event.target.value;
    render();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "composer") {
    event.preventDefault();
    const input = document.querySelector("#messageInput");
    sendMessage(input ? input.value : "");
  }

  if (event.target.id === "bonusForm") {
    event.preventDefault();
    const player = playerById(state.bonusDraft.playerId);
    const id = `B-${Math.floor(2050 + Math.random() * 200)}`;
    bonusRequests = [
      {
        id,
        playerId: player.id,
        type: state.bonusDraft.type,
        amount: state.bonusDraft.amount,
        status: "審批中",
        route: evaluateBonus(player, state.bonusDraft.amount, state.bonusDraft.type).route,
        created: "剛剛"
      },
      ...bonusRequests
    ];
    showToast("補償申請已送出，並寫入稽核紀錄。");
    render();
  }

  if (event.target.id === "ticketForm") {
    event.preventDefault();
    const playerId = event.target.dataset.player;
    const player = playerById(playerId);
    const category = document.querySelector("#ticketCategory").value;
    const owner = document.querySelector("#ticketOwner").value || suggestedOwner(player, category);
    tickets.unshift({
      id: `T-${Math.floor(6000 + Math.random() * 300)}`,
      playerId,
      category,
      priority: document.querySelector("#ticketPriority").value,
      status: "Open",
      team: document.querySelector("#ticketTeam").value,
      owner,
      sla: "safe",
      due: document.querySelector("#ticketSla").value,
      description: document.querySelector("#ticketDescription").value,
      history: [
        { at: "剛剛", by: state.role, body: "建立工單" },
        { at: "剛剛", by: owner, body: `建議分派：${owner}` }
      ]
    });
    closeModal();
    showToast("工單已建立。");
    render();
  }

  if (event.target.id === "ticketUpdateForm") {
    event.preventDefault();
    const ticket = ticketById(event.target.dataset.ticket);
    if (ticket) {
      const status = document.querySelector("#ticketUpdateStatus").value;
      const owner = document.querySelector("#ticketUpdateOwner").value;
      const note = document.querySelector("#ticketUpdateNote").value.trim();
      ticket.status = status;
      ticket.owner = owner;
      if (status === "Resolved" || status === "Closed") {
        ticket.sla = "safe";
        ticket.due = "完成";
      }
      ticket.history = [
        ...(ticket.history || []),
        { at: "剛剛", by: owner, body: note || `狀態更新為 ${status}` }
      ];
      closeModal();
      showToast(`工單 ${ticket.id} 已更新。`);
      render();
    }
  }

  if (event.target.id === "noteForm") {
    event.preventDefault();
    closeModal();
    showToast("備註已儲存至 Player 360。");
  }

  if (event.target.id === "taskForm") {
    event.preventDefault();
    tasks.unshift({
      id: `F-${Math.floor(820 + Math.random() * 80)}`,
      playerId: event.target.dataset.player,
      type: document.querySelector("#taskType").value,
      priority: document.querySelector("#taskPriority").value,
      due: "24 小時內",
      status: "Open",
      reason: document.querySelector("#taskReason").value
    });
    closeModal();
    showToast("跟進任務已建立。");
    render();
  }

  if (event.target.id === "rgForm") {
    event.preventDefault();
    const playerId = event.target.dataset.player;
    const player = playerById(playerId);
    const actions = [...event.target.querySelectorAll("input[type='checkbox']:checked")].map((input) => input.value);
    const riskScore = Number(document.querySelector("#rgRiskScore").value) || (player.rgRisk === "High" ? 88 : 55);
    const nextReview = document.querySelector("#rgNextReview").value;
    const note = document.querySelector("#rgNote").value.trim() || "RG action 已送出，等待 Compliance 審核。";
    rgCases.unshift({
      id: `RG-${Math.floor(910 + Math.random() * 80)}`,
      playerId,
      riskScore,
      status: "Compliance Review",
      owner: "RG Officer",
      nextReview,
      actions: actions.length ? actions : ["Manual Review"],
      evidence: rgSignals(player),
      note
    });
    if (!riskAlerts.some((alert) => alert.playerId === playerId && alert.type === "RG Risk")) {
      riskAlerts.unshift({
        id: `R-${Math.floor(460 + Math.random() * 80)}`,
        playerId,
        type: "RG Risk",
        severity: riskScore >= 80 ? "High" : "Medium",
        status: "Review",
        action: actions.length ? actions.join(" / ") : "人工 RG 審核"
      });
    }
    closeModal();
    showToast("RG Action 已送出 Compliance 審核。");
    render();
  }
});

document.querySelector("#quickTicket").addEventListener("click", () => openTicketModal(state.activePlayerId));

document.querySelector("#roleButton").addEventListener("click", () => {
  const roles = ["VIP CS", "Team Leader", "Risk", "Payment", "Compliance", "Manager"];
  const index = roles.indexOf(state.role);
  state.role = roles[(index + 1) % roles.length];
  document.querySelector("#roleButton").textContent = state.role;
  showToast(`已切換角色視角：${state.role}`);
});

localeSelect?.addEventListener("change", (event) => {
  state.locale = localeNames[event.target.value] ? event.target.value : "zh";
  try {
    localStorage.setItem("vip-cs-locale", state.locale);
  } catch (error) {
    // Ignore storage failures in restricted browser contexts.
  }
  render();
  showToast(`語系已切換：${localeNames[state.locale]}`);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

render();
