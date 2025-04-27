import React, { useState, useEffect } from 'react';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const RiskAnimations = () => {
  // 火災三要素動態展示的狀態
  const [oxygenLevel, setOxygenLevel] = useState(30);
  const [fuelLevel, setFuelLevel] = useState(30);
  const [heatLevel, setHeatLevel] = useState(30);
  const [fireState, setFireState] = useState("none"); // none, starting, burning, explosion

  // 粉塵爆炸風險動態展示的狀態
  const [dustConcentration, setDustConcentration] = useState(15);
  const [dustExplosionRisk, setDustExplosionRisk] = useState("low");

  // 化學原料風險動態展示
  const [chemical, setChemical] = useState("PTA");

  // 自動更新火災三要素的動畫
  useEffect(() => {
    const interval = setInterval(() => {
      setOxygenLevel(prev => {
        const newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
      setFuelLevel(prev => {
        const newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
      setHeatLevel(prev => {
        const newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 檢查火災狀態
  useEffect(() => {
    if (oxygenLevel > 60 && fuelLevel > 60 && heatLevel > 60) {
      setFireState("explosion");
    } else if (oxygenLevel > 40 && fuelLevel > 40 && heatLevel > 40) {
      setFireState("burning");
    } else if (oxygenLevel > 30 && fuelLevel > 30 && heatLevel > 30) {
      setFireState("starting");
    } else {
      setFireState("none");
    }
  }, [oxygenLevel, fuelLevel, heatLevel]);

  // 粉塵濃度動畫
  useEffect(() => {
    const interval = setInterval(() => {
      setDustConcentration(prev => {
        const newValue = prev + Math.random() * 6 - 3;
        return Math.max(5, Math.min(50, newValue));
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // 檢查粉塵爆炸風險
  useEffect(() => {
    if (dustConcentration > 35) {
      setDustExplosionRisk("extreme");
    } else if (dustConcentration > 25) {
      setDustExplosionRisk("high");
    } else if (dustConcentration > 15) {
      setDustExplosionRisk("medium");
    } else {
      setDustExplosionRisk("low");
    }
  }, [dustConcentration]);
  const getFireStyleClass = () => {
    switch (fireState) {
      case "explosion":
        return "bg-red-600 animate-pulse";
      case "burning":
        return "bg-orange-500";
      case "starting":
        return "bg-yellow-400";
      default:
        return "bg-blue-200";
    }
  };
  const getDustStyleClass = () => {
    switch (dustExplosionRisk) {
      case "extreme":
        return "bg-red-600 animate-pulse";
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      default:
        return "bg-green-400";
    }
  };

  // 化學原料切換
  useEffect(() => {
    const chemicals = ["PTA", "EG", "CPL", "HMDA", "Adipic Acid", "AN", "Propylene"];
    const interval = setInterval(() => {
      setChemical(chemicals[Math.floor(Math.random() * chemicals.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    className: "w-full p-4 bg-white rounded-lg space-y-8",
    children: [/*#__PURE__*/_jsx("h2", {
      className: "text-xl font-bold text-center",
      children: "\u7D21\u7E54\u696D\u98A8\u96AA\u52D5\u614B\u8996\u89BA\u5316"
    }), /*#__PURE__*/_jsxs("div", {
      className: "border rounded-lg p-4 shadow-md",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-lg font-bold mb-3",
        children: "\u706B\u707D\u4E09\u8981\u7D20\u52D5\u614B\u6A21\u64EC"
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid grid-cols-3 gap-4 mb-4",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "text-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-blue-600 font-semibold",
            children: "\u6C27\u6C23 (\u7A7A\u6C23)"
          }), /*#__PURE__*/_jsx("div", {
            className: "h-4 w-full bg-gray-200 rounded-full overflow-hidden",
            children: /*#__PURE__*/_jsx("div", {
              className: "h-full bg-blue-500 transition-all duration-500 ease-in-out",
              style: {
                width: `${oxygenLevel}%`
              }
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: "mt-1",
            children: [oxygenLevel.toFixed(1), "%"]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "text-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-yellow-600 font-semibold",
            children: "\u71C3\u6599 (\u7D21\u7E54\u539F\u6599)"
          }), /*#__PURE__*/_jsx("div", {
            className: "h-4 w-full bg-gray-200 rounded-full overflow-hidden",
            children: /*#__PURE__*/_jsx("div", {
              className: "h-full bg-yellow-500 transition-all duration-500 ease-in-out",
              style: {
                width: `${fuelLevel}%`
              }
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: "mt-1",
            children: [fuelLevel.toFixed(1), "%"]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "text-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-red-600 font-semibold",
            children: "\u71B1\u6E90 (\u9EDE\u706B\u6E90)"
          }), /*#__PURE__*/_jsx("div", {
            className: "h-4 w-full bg-gray-200 rounded-full overflow-hidden",
            children: /*#__PURE__*/_jsx("div", {
              className: "h-full bg-red-500 transition-all duration-500 ease-in-out",
              style: {
                width: `${heatLevel}%`
              }
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: "mt-1",
            children: [heatLevel.toFixed(1), "%"]
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/_jsx("div", {
          className: `w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${getFireStyleClass()}`,
          children: /*#__PURE__*/_jsx("span", {
            className: "text-white font-bold text-center",
            children: fireState === "explosion" ? "爆炸風險!" : fireState === "burning" ? "火災!" : fireState === "starting" ? "起火中" : "安全狀態"
          })
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "mt-4 text-sm text-gray-600",
        children: /*#__PURE__*/_jsx("p", {
          className: "text-center",
          children: "\u7576\u4E09\u8981\u7D20\u540C\u6642\u9054\u5230\u9AD8\u6FC3\u5EA6\u6642\uFF0C\u706B\u707D\u98A8\u96AA\u6025\u5287\u4E0A\u5347"
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "border rounded-lg p-4 shadow-md",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-lg font-bold mb-3",
        children: "\u68C9\u7D6E/\u7C89\u5875\u7206\u70B8\u98A8\u96AA\u52D5\u614B\u6A21\u64EC"
      }), /*#__PURE__*/_jsxs("div", {
        className: "mb-4",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-gray-700 font-semibold mb-1",
          children: "\u61F8\u6D6E\u7C89\u5875\u6FC3\u5EA6 (g/m\xB3)"
        }), /*#__PURE__*/_jsx("div", {
          className: "h-6 w-full bg-gray-200 rounded-full overflow-hidden",
          children: /*#__PURE__*/_jsx("div", {
            className: `h-full transition-all duration-500 ease-in-out ${getDustStyleClass()}`,
            style: {
              width: `${dustConcentration * 2}%`
            }
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex justify-between text-sm mt-1",
          children: [/*#__PURE__*/_jsx("span", {
            children: "\u5B89\u5168\u7BC4\u570D"
          }), /*#__PURE__*/_jsx("span", {
            children: "\u7206\u70B8\u4E0B\u9650"
          }), /*#__PURE__*/_jsx("span", {
            children: "\u6700\u4F73\u7206\u70B8\u6FC3\u5EA6"
          }), /*#__PURE__*/_jsx("span", {
            children: "\u7206\u70B8\u4E0A\u9650"
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "text-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold",
            children: dustConcentration.toFixed(1)
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm",
            children: "g/m\xB3"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "text-center px-4 py-2 rounded-lg font-bold",
          style: {
            backgroundColor: dustExplosionRisk === "extreme" ? "#dc2626" : dustExplosionRisk === "high" ? "#ef4444" : dustExplosionRisk === "medium" ? "#f59e0b" : "#22c55e",
            color: "white"
          },
          children: dustExplosionRisk === "extreme" ? "極度危險!" : dustExplosionRisk === "high" ? "高風險" : dustExplosionRisk === "medium" ? "中度風險" : "低風險"
        }), /*#__PURE__*/_jsxs("div", {
          className: "text-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm",
            children: "\u7206\u70B8\u6307\u6578"
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-xl font-bold",
            children: ["Kst ", dustExplosionRisk === "extreme" ? ">300" : dustExplosionRisk === "high" ? "200-300" : dustExplosionRisk === "medium" ? "50-200" : "<50"]
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "mt-4 text-sm text-gray-600",
        children: /*#__PURE__*/_jsx("p", {
          className: "text-center",
          children: "\u7576\u7C89\u5875\u6FC3\u5EA6\u9054\u5230\u7206\u70B8\u7BC4\u570D\u4E14\u9047\u5230\u9EDE\u706B\u6E90\u6642\uFF0C\u5C07\u5F15\u767C\u7206\u70B8"
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "border rounded-lg p-4 shadow-md",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-lg font-bold mb-3",
        children: "\u5316\u5B78\u539F\u6599\u98A8\u96AA\u5FEB\u901F\u63D0\u793A"
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-2xl font-bold text-blue-700",
          children: chemical
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex flex-col items-center",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "grid grid-cols-3 gap-1 mb-2",
            children: [chemical === "PTA" && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("div", {
                className: "bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u7C89\u5875\u7206\u70B8"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-blue-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u975C\u96FB\u5371\u5BB3"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-red-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u9AD8\u6EAB\u5206\u89E3"
              })]
            }), chemical === "EG" && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("div", {
                className: "bg-red-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u53EF\u71C3\u6DB2\u9AD4"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-purple-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u84B8\u6C23\u7206\u70B8"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-orange-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u5065\u5EB7\u5371\u5BB3"
              })]
            }), chemical === "CPL" && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("div", {
                className: "bg-red-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u53EF\u71C3\u56FA\u9AD4"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u84B8\u6C23\u7206\u70B8"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-green-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u6BD2\u6027\u5371\u5BB3"
              })]
            }), chemical === "HMDA" && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("div", {
                className: "bg-red-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u6613\u71C3\u6DB2\u9AD4"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-purple-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u84B8\u6C23\u7206\u70B8"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-orange-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u8150\u8755\u6027"
              })]
            }), chemical === "Adipic Acid" && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("div", {
                className: "bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u7C89\u5875\u7206\u70B8"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-gray-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u4F4E\u53EF\u71C3\u6027"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-green-500 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u523A\u6FC0\u6027"
              })]
            }), chemical === "AN" && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("div", {
                className: "bg-red-600 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u6975\u5EA6\u6613\u71C3"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-purple-600 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u7206\u70B8\u5371\u96AA"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-orange-600 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u9AD8\u6BD2\u6027"
              })]
            }), chemical === "Propylene" && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("div", {
                className: "bg-red-600 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u6975\u5EA6\u6613\u71C3"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-blue-600 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u58D3\u7E2E\u6C23\u9AD4"
              }), /*#__PURE__*/_jsx("div", {
                className: "bg-yellow-600 text-white text-center px-2 py-1 rounded text-sm",
                children: "\u56DE\u706B\u98A8\u96AA"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-sm text-center",
            children: [chemical === "PTA" && "對苯二甲酸 - 聚酯纖維主要原料", chemical === "EG" && "乙二醇 - 聚酯纖維主要原料", chemical === "CPL" && "己內醯胺 - 尼龍6主要原料", chemical === "HMDA" && "己二胺 - 尼龍6,6主要原料", chemical === "Adipic Acid" && "己二酸 - 尼龍6,6主要原料", chemical === "AN" && "丙烯腈 - 壓克力纖維原料", chemical === "Propylene" && "丙烯 - 聚丙烯纖維原料"]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "w-16 h-16 rounded-full flex items-center justify-center border-4",
          style: {
            borderColor: chemical === "AN" || chemical === "Propylene" ? "#dc2626" : chemical === "HMDA" || chemical === "CPL" ? "#ef4444" : chemical === "EG" ? "#f59e0b" : "#22c55e"
          },
          children: /*#__PURE__*/_jsx("span", {
            className: "text-xl font-bold",
            style: {
              color: chemical === "AN" || chemical === "Propylene" ? "#dc2626" : chemical === "HMDA" || chemical === "CPL" ? "#ef4444" : chemical === "EG" ? "#f59e0b" : "#22c55e"
            },
            children: chemical === "AN" || chemical === "Propylene" ? "4" : chemical === "HMDA" || chemical === "CPL" ? "3" : chemical === "EG" ? "2" : "1"
          })
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "mt-4 text-sm text-gray-600",
        children: /*#__PURE__*/_jsx("p", {
          className: "text-center",
          children: "\u5316\u5B78\u539F\u6599\u98A8\u96AA\u7B49\u7D1A\u5F9E1(\u4F4E)\u52304(\u6975\u9AD8)\uFF0C\u61C9\u56B4\u683C\u6309\u7167\u5B89\u5168\u898F\u7BC4\u8655\u7406"
        })
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "text-center text-sm text-gray-500",
      children: /*#__PURE__*/_jsx("p", {
        children: "*\u6A21\u64EC\u5C55\u793A\u50C5\u4F9B\u6559\u80B2\u76EE\u7684\uFF0C\u5BE6\u969B\u98A8\u96AA\u61C9\u7531\u5C08\u696D\u640D\u9632\u5DE5\u7A0B\u5E2B\u8A55\u4F30"
      })
    })]
  });
};
export default RiskAnimations;
### risk-animations.js
