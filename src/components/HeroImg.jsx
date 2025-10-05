import React from "react";

const HeroImage = ({ width = 1600, height = 700 }) => {
  const w = width;
  const h = height;
  return (
    <div style={{ background: "#EADCC0", padding: 24, display: "flex", justifyContent: "center" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        style={{ maxWidth: w, height: "auto", display: "block" }}
        role="img"
        aria-label="Brutalist UI mockup - Pixel Forge"
      >
        <defs>
          <style>{`
            :root{
              --bg: #EADCC0;  /* light beige */
              --mid: #A9754A; /* brown */
              --dark: #5C3A21;/* dark brown */
            }
            svg { font-family: "Courier New", Courier, monospace; }
            .panel-line { fill: none; stroke: var(--dark); stroke-width: 10; shape-rendering: crispEdges; }
            .inner-line { fill: none; stroke: var(--mid); stroke-width: 8; shape-rendering: crispEdges; }
            .title { font-size: 56px; font-weight:700; fill: var(--dark); letter-spacing: 2px; }
            .nav-btn { fill: var(--bg); stroke: var(--dark); stroke-width:8; rx: 8; }
            .nav-text { font-size: 36px; fill: var(--dark); }
            .panel-title { font-size: 44px; font-weight:700; fill: var(--dark); }
            .action-btn { fill: var(--bg); stroke: var(--dark); stroke-width:8; rx:8; }
            .code-bg { fill: rgba(92,58,33,0.03); stroke: var(--dark); stroke-width:8; rx:6; }
            .code { font-size: 20px; fill: var(--dark); white-space: pre; }
            .cursor { fill: var(--dark); }
            .blink { animation: blink 1s steps(1) infinite; }
            @keyframes blink { 50% { opacity: 0 } 100% { opacity: 1 } }
            .right-nav .box { fill: none; stroke: var(--mid); stroke-width:8; rx:6; opacity:0; transform-origin:center; animation: slideIn .8s cubic-bezier(.2,.8,.2,1) forwards; }
            .right-nav .box:nth-child(1){ animation-delay: .06s; }
            .right-nav .box:nth-child(2){ animation-delay: .12s; }
            .right-nav .box:nth-child(3){ animation-delay: .2s; }
            .right-nav .box:nth-child(4){ animation-delay: .28s; }
            @keyframes slideIn { from { transform: translateX(18px); opacity:0 } to { transform: translateX(0); opacity:1 } }
          `}</style>
        </defs>

        {/* Header (no outer frame) */}
        <text x={48} y={86} className="title">DESIGN,BUILD,TEST,DEPLOY!!</text>

        {/* Main layout container (invisible grid to position inner panels) */}
        {/* Left navigation column */}
        <g transform={`translate(48,140)`}>
          <rect className="nav-btn" x="0" y="0" width="260" height="72" />
          <text x="22" y="48" className="nav-text">Compiler</text>

          <rect className="nav-btn" x="0" y="96" width="260" height="72" />
          <text x="22" y="144" className="nav-text">Pixel Lab</text>

          <rect className="nav-btn" x="0" y="192" width="260" height="72" />
          <text x="22" y="240" className="nav-text">Deploy</text>
        </g>

        {/* Main project area */}
        <g transform={`translate(340,140)`}>
          <rect x="0" y="0" width="820" height="220" className="inner-line" />
          <text x="22" y="62" className="panel-title">DEEP CODE. CLEAN COMMIT</text>

          <rect x="640" y="120" width="130" height="52" className="action-btn" />
          <text x="673" y="156" className="nav-text">PUSH</text>
        </g>

        {/* Code panel */}
        <g transform={`translate(340,380)`}>
          <rect x="0" y="0" width="980" height="280" className="code-bg" />
          {/* React snippet - playful + professional */}
          <text x="28" y="40" className="code">{"// LaunchPad - hot reload engaged"}</text>
          <text x="28" y="72" className="code">{"import React, { useState, useEffect } from 'react';"}</text>
          <text x="28" y="104" className="code">{"function LaunchPad() {"}</text>
          <text x="48" y="136" className="code">{"const [ready, setReady] = useState(false);"}</text>
          <text x="48" y="168" className="code">{"useEffect(() => { /* auto-deploy hook */ }, []);"}</text>
          <text x="48" y="200" className="code">{"return ("}</text>
          <text x="72" y="232" className="code">{"<div>"}</text>
          <text x="96" y="264" className="code">{"<h1>Welcome to LaunchPad</h1>"}</text>
          <text x="96" y="296" className="code">{"<button onClick={() => setReady(!ready)}>Toggle Ship</button>"}</text>
          <text x="72" y="328" className="code">{")"}</text>

          {/* Blinking cursor near the end of code */}
          <rect x="340" y="292" width="8" height="20" className="cursor blink" />
        </g>

        {/* Right-side unconventional nav squares */}
        <g transform={`translate(${1240},140)` } className="right-nav">
          <rect className="box" x="0" y="0" width="72" height="72" />
          <rect className="box" x="0" y="104" width="72" height="72" />
          <rect className="box" x="0" y="208" width="72" height="72" />
          <rect className="box" x="0" y="312" width="72" height="72" />
        </g>

        {/* Small footer label */}
        <text x={48} y={h - 8} className="nav-text">Brutalist UI — monospace, crafted for devs</text>
      </svg>
    </div>
  );
};

export default HeroImage;
