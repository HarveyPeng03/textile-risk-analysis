import React, { useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const caseStudies = [{
    id: 1,
    title: "遠東新化纖廠熱媒油洩漏爆炸事件",
    date: "2025年2月6日",
    location: "台灣桃園",
    casualties: "2死19傷",
    damages: "約新台幣1,500萬元",
    cause: "熱媒油系統管線破裂洩漏，遇到高溫設備表面產生氣化，形成可燃氣體雲團後遇火源爆炸",
    sequence: ["熱媒油循環系統管線因長期使用產生疲勞裂縫", "約400公升高溫(300°C)熱媒油洩漏並快速氣化", "形成易燃蒸氣雲團充滿作業區", "蒸氣濃度達到爆炸下限，遇到熱表面點火", "發生閃燃(Flash Fire)並迅速轉為爆炸", "衝擊波摧毀周圍設備並引發連鎖火災"],
    lessons: ["熱媒油系統應實施更嚴格的定期檢測，包括超音波測厚和紅外線熱成像", "關鍵管路應加裝洩漏偵測器並與緊急停機系統聯動", "高風險區域應安裝可燃氣體偵測器，配置為達到LEL 20%時觸發警報", "熱媒油系統應設計滴漏盤和排放系統，防止洩漏物擴散", "建立熱媒油系統專項緊急應變程序和定期演練"],
    image: "explosion_incident.jpg"
  }, {
    id: 2,
    title: "龍井織布廠棉絮積聚火災",
    date: "2023年8月15日",
    location: "台灣台中",
    casualties: "0死3傷",
    damages: "約新台幣2,800萬元",
    cause: "織機區域棉絮長期累積，電氣設備短路引發火花點燃棉絮，火勢快速蔓延",
    sequence: ["織布機運轉產生大量棉絮飛塵，廠內清潔不足導致累積", "廠房老舊電氣設備防護不足，配電箱積塵過熱", "電氣短路產生火花點燃鄰近累積的棉絮", "初期火勢小，但迅速沿著棉絮富集處蔓延", "火災沿著設備間隙和通風管道快速擴散", "自動灑水系統噴頭被棉絮覆蓋，滅火效能降低", "最終燒毀大面積廠房及設備"],
    lessons: ["實施嚴格的工作場所清潔計劃，包括每班次清理和定期徹底清掃", "改善排風和集塵系統設計，防止棉絮在關鍵設備附近積聚", "電氣設備應配置防塵保護，定期檢查並清理", "自動滅火系統設計需考慮棉絮遮蔽因素，增設多方向噴頭或吊掛水霧系統", "考慮實施夜間自動清絮系統，減少人工清理風險"],
    image: "textile_dust_fire.jpg"
  }, {
    id: 3,
    title: "昆山化纖加工廠金屬粉塵爆炸",
    date: "2022年6月12日",
    location: "中國江蘇",
    casualties: "5死28傷",
    damages: "約人民幣4,500萬元",
    cause: "金屬拋光過程中產生的鋁粉未有效收集，積聚後發生粉塵爆炸",
    sequence: ["工廠同時進行化纖加工和金屬配件拋光作業", "金屬拋光產生的鋁粉與化纖粉塵混合", "通風系統設計不當，導致粉塵在天花板上積聚", "設備產生的靜電或火花點燃懸浮粉塵", "初次爆炸震動使更多積聚粉塵進入空氣", "發生更大規模的二次爆炸", "爆炸引發化學原料儲存區火災"],
    lessons: ["不同類型的生產活動應嚴格分區，特別是產生易燃粉塵的作業", "根據NFPA 652/654標準進行粉塵危害分析(DHA)，量化Kst值", "安裝爆炸抑制或釋放系統，降低爆炸壓力危害", "強化集塵系統設計，確保捕集效率並防止粉塵再循環", "實施嚴格的靜電控制措施，包括接地、濕度控制和防靜電材料使用"],
    image: "dust_explosion.jpg"
  }, {
    id: 4,
    title: "南亞染整廠化學品洩漏火災",
    date: "2024年4月3日",
    location: "台灣新北",
    casualties: "1死8傷",
    damages: "約新台幣3,600萬元",
    cause: "染整工序中使用的易燃溶劑洩漏後被附近加熱設備點燃",
    sequence: ["染整過程中使用的異丙醇等溶劑從破損閥門洩漏", "溶劑蒸氣在通風不良的區域積聚", "附近定型機的高溫表面(180°C以上)點燃溶劑蒸氣", "初始火勢迅速蔓延到溶劑儲存區", "儲存於現場的溶劑桶受熱爆裂加劇火勢", "火災產生的有毒煙霧造成多人吸入性傷害", "廠房集中區總計15個單位投入滅火作業"],
    lessons: ["化學品應嚴格管理，工作現場應限制最低必要量", "設計適當的溶劑輸送系統，減少人工搬運和臨時儲存", "高溫設備周圍設置防火隔離區，嚴格禁止存放易燃物", "安裝溶劑蒸氣偵測系統，與自動排風和報警連動", "定期培訓人員正確處理危險化學品洩漏的應變程序"],
    image: "chemical_fire.jpg"
  }, {
    id: 5,
    title: "新加坡機能布料廠起毛機火災",
    date: "2024年1月21日",
    location: "新加坡裕廊工業區",
    casualties: "0死2傷",
    damages: "約新幣120萬元",
    cause: "起毛機操作過程中產生的布屑與靜電引發火災",
    sequence: ["機能布料加工過程中的起毛工序產生大量細小纖維", "設備持續運行數小時後累積大量布屑", "機器產生的靜電積聚在纖維材料上", "靜電放電點燃細小纖維引發初期火災", "火勢迅速沿著布匹生產線蔓延", "起火機台附近的加工劑加速了火勢蔓延", "雖然啟動自動滅火系統，但仍造成部分設備損毀"],
    lessons: ["起毛機等高靜電風險設備應加裝靜電消除裝置", "機台設計需包含自動清潔系統，定時移除積聚的纖維", "安裝紅外線熱感應系統，監測機台運行溫度異常", "改進機能布料加工劑配方，研發阻燃型配方", "建立嚴格的設備運行監控制度，定時巡檢高風險設備"],
    image: "napping_machine_fire.jpg"
  }];

  // 計算重要指標
  const totalCasualties = caseStudies.reduce((sum, c) => {
    const deaths = parseInt(c.casualties.split('死')[0]);
    return sum + deaths;
  }, 0);
  const totalInjuries = caseStudies.reduce((sum, c) => {
    const injuries = parseInt(c.casualties.split('死')[1].split('傷')[0]);
    return sum + injuries;
  }, 0);

  // 火災原因分類
  const causeTypes = {
    chemical: caseStudies.filter(c => c.cause.includes('化學') || c.cause.includes('溶劑') || c.cause.includes('熱媒油')).length,
    dust: caseStudies.filter(c => c.cause.includes('粉塵') || c.cause.includes('棉絮')).length,
    electrical: caseStudies.filter(c => c.cause.includes('電氣') || c.cause.includes('短路')).length,
    static: caseStudies.filter(c => c.cause.includes('靜電')).length,
    mechanical: caseStudies.filter(c => c.cause.includes('機械') || c.cause.includes('摩擦')).length
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "w-full p-4 bg-white rounded-lg space-y-4",
    children: [/*#__PURE__*/_jsx("h2", {
      className: "text-xl font-bold text-center mb-2",
      children: "\u7D21\u7E54\u696D\u91CD\u5927\u706B\u707D\u6848\u4F8B\u5206\u6790"
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-3 gap-4 mb-4",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "bg-blue-100 p-3 rounded-lg text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-sm font-semibold text-blue-800",
          children: "\u5206\u6790\u6848\u4F8B\u7E3D\u6578"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-2xl font-bold text-blue-600",
          children: caseStudies.length
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-red-100 p-3 rounded-lg text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-sm font-semibold text-red-800",
          children: "\u6B7B\u4EA1\u4EBA\u6578"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-2xl font-bold text-red-600",
          children: totalCasualties
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-orange-100 p-3 rounded-lg text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-sm font-semibold text-orange-800",
          children: "\u53D7\u50B7\u4EBA\u6578"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-2xl font-bold text-orange-600",
          children: totalInjuries
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "grid grid-cols-5 gap-2 mb-4",
      children: caseStudies.map((caseItem, index) => /*#__PURE__*/_jsxs("button", {
        className: `p-2 text-sm rounded-lg transition-colors ${selectedCase === index ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`,
        onClick: () => setSelectedCase(index),
        children: [caseItem.title.substring(0, 8), "..."]
      }, caseItem.id))
    }), /*#__PURE__*/_jsxs("div", {
      className: "border rounded-lg overflow-hidden shadow-lg",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "bg-blue-700 text-white p-3",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "text-xl font-bold",
          children: caseStudies[selectedCase].title
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex justify-between text-sm mt-1",
          children: [/*#__PURE__*/_jsx("span", {
            children: caseStudies[selectedCase].date
          }), /*#__PURE__*/_jsx("span", {
            children: caseStudies[selectedCase].location
          }), /*#__PURE__*/_jsx("span", {
            className: "text-red-300 font-semibold",
            children: caseStudies[selectedCase].casualties
          }), /*#__PURE__*/_jsx("span", {
            children: caseStudies[selectedCase].damages
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "p-4 bg-white",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "mb-4",
          children: [/*#__PURE__*/_jsx("h4", {
            className: "font-bold text-gray-700 mb-2",
            children: "\u4E8B\u6545\u539F\u56E0:"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-800",
            children: caseStudies[selectedCase].cause
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "mb-4",
          children: [/*#__PURE__*/_jsx("h4", {
            className: "font-bold text-gray-700 mb-2",
            children: "\u4E8B\u6545\u767C\u5C55\u904E\u7A0B:"
          }), /*#__PURE__*/_jsx("div", {
            className: "relative pl-8",
            children: caseStudies[selectedCase].sequence.map((step, index) => /*#__PURE__*/_jsxs("div", {
              className: "mb-2 relative",
              children: [/*#__PURE__*/_jsx("div", {
                className: "absolute left-0 top-0 -ml-6 mt-1 w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs",
                children: index + 1
              }), /*#__PURE__*/_jsx("div", {
                className: `absolute left-0 top-0 -ml-4 mt-5 w-0.5 h-full ${index === caseStudies[selectedCase].sequence.length - 1 ? 'bg-white' : 'bg-blue-200'}`
              }), /*#__PURE__*/_jsx("p", {
                children: step
              })]
            }, index))
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h4", {
            className: "font-bold text-gray-700 mb-2",
            children: "\u91CD\u8981\u6559\u8A13\u8207\u6539\u5584\u5EFA\u8B70:"
          }), /*#__PURE__*/_jsx("ul", {
            className: "list-disc pl-5 space-y-1",
            children: caseStudies[selectedCase].lessons.map((lesson, index) => /*#__PURE__*/_jsx("li", {
              className: "text-gray-800",
              children: lesson
            }, index))
          })]
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-5 gap-2 mt-4",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "h-16 bg-red-500 rounded-t-lg relative",
          children: /*#__PURE__*/_jsx("div", {
            className: "absolute bottom-0 w-full bg-red-600 rounded-b-lg transition-all duration-500",
            style: {
              height: `${causeTypes.chemical / caseStudies.length * 100}%`
            }
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "bg-gray-100 p-2 rounded-b-lg",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm font-semibold",
            children: "\u5316\u5B78\u54C1\u76F8\u95DC"
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-xs",
            children: [Math.round(causeTypes.chemical / caseStudies.length * 100), "%"]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "h-16 bg-yellow-500 rounded-t-lg relative",
          children: /*#__PURE__*/_jsx("div", {
            className: "absolute bottom-0 w-full bg-yellow-600 rounded-b-lg transition-all duration-500",
            style: {
              height: `${causeTypes.dust / caseStudies.length * 100}%`
            }
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "bg-gray-100 p-2 rounded-b-lg",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm font-semibold",
            children: "\u7C89\u5875/\u68C9\u7D6E"
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-xs",
            children: [Math.round(causeTypes.dust / caseStudies.length * 100), "%"]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "h-16 bg-blue-500 rounded-t-lg relative",
          children: /*#__PURE__*/_jsx("div", {
            className: "absolute bottom-0 w-full bg-blue-600 rounded-b-lg transition-all duration-500",
            style: {
              height: `${causeTypes.electrical / caseStudies.length * 100}%`
            }
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "bg-gray-100 p-2 rounded-b-lg",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm font-semibold",
            children: "\u96FB\u6C23\u6545\u969C"
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-xs",
            children: [Math.round(causeTypes.electrical / caseStudies.length * 100), "%"]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "h-16 bg-purple-500 rounded-t-lg relative",
          children: /*#__PURE__*/_jsx("div", {
            className: "absolute bottom-0 w-full bg-purple-600 rounded-b-lg transition-all duration-500",
            style: {
              height: `${causeTypes.static / caseStudies.length * 100}%`
            }
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "bg-gray-100 p-2 rounded-b-lg",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm font-semibold",
            children: "\u975C\u96FB\u7A4D\u805A"
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-xs",
            children: [Math.round(causeTypes.static / caseStudies.length * 100), "%"]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "h-16 bg-green-500 rounded-t-lg relative",
          children: /*#__PURE__*/_jsx("div", {
            className: "absolute bottom-0 w-full bg-green-600 rounded-b-lg transition-all duration-500",
            style: {
              height: `${causeTypes.mechanical / caseStudies.length * 100}%`
            }
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "bg-gray-100 p-2 rounded-b-lg",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm font-semibold",
            children: "\u6A5F\u68B0\u6545\u969C"
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-xs",
            children: [Math.round(causeTypes.mechanical / caseStudies.length * 100), "%"]
          })]
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "text-center text-sm text-gray-500 mt-2",
      children: /*#__PURE__*/_jsx("p", {
        children: "*\u6848\u4F8B\u8CC7\u6599\u6574\u7406\u81EA\u516C\u958B\u65B0\u805E\u5831\u5C0E\u53CA\u640D\u9632\u8ABF\u67E5\u5831\u544A\uFF0C\u50C5\u4F9B\u98A8\u96AA\u6559\u80B2\u76EE\u7684\u4F7F\u7528"
      })
    })]
  });
};
export default CaseStudies;
