import{j as e,e as d,R as p,a,i as m,d as f}from"../chunks/chunk-Cd2ff5R-.js";/* empty css                      */const i=void 0,u=[{id:"1dKm3TR85Uu84oLtVDtXh"},{id:"ZNwmEai_xXZRW1MSZIBIV",maxWidth:991},{id:"ttVaQv5NBWoMblfpNTb5r",maxWidth:767},{id:"JGwyshHVGGIdzZHBlMZOO",maxWidth:640},{id:"jL_Z6xvXwILm2NjP8DDTR",maxWidth:480}],g=void 0,h=[],x=[],w=o=>e.jsx("body",{className:"w-element c1bax9or c1ixnb0a",children:e.jsx(d,{code:`<style>
#comments {
  max-width: 600px;
  margin: 20px auto;
}

.comment {
  background: #fff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
}

.comment:hover {
  transform: translateY(-2px);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.comment-header strong {
  font-weight: bold;
  margin-right: 6px;
  color: #222;
}

.comment-header .association {
  font-weight: 300;
  color: #666;
  margin-right: auto; /* pushes date to the right */
  font-size: 0.9rem;
}

.comment-header .date {
  font-size: 0.8rem;
  color: #777;
  font-style: italic;
}

.comment p {
  margin: 0;
  line-height: 1.5;
  color: #555;
}

.admin-response {
  margin-top: 10px;
  padding: 8px 12px;
  background: #EEEEEE;
 /* border-left: 1px solid #d7d9d9; */
  border-radius: 10px;
  font-size: 0.9rem;
  color: #333;
}

.separator {
  color: #999;
  margin: 0 6px;
  font-weight: normal;
}
</style>

<div id="comments"></div>

<script>
const sheetId = "13xLjhbICv4BGzHm1WCKom9Uof8A15g2axBjzTKbsVi0"; 
const gid = "234595483";

function formatRelativeTime(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 10) return "Just now";
  if (diffSec < 60) return \`\${diffSec} seconds ago\`;
  if (diffMin < 60) return \`\${diffMin} minutes ago\`;
  if (diffHour < 24) return \`\${diffHour} hours ago\`;
  if (diffDay === 1) {
    return \`Yesterday at \${date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    })}\`;
  }

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).replace(",", " •");
}

function escapeHtml(str) {
  if (!str && str !== 0) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

let commentsData = [];

async function loadComments() {
  const url = \`https://docs.google.com/spreadsheets/d/\${sheetId}/gviz/tq?tqx=out:json&gid=\${gid}\`;
  try {
    const res = await fetch(url);
    const text = await res.text();
    const json = JSON.parse(text.substring(47, text.length - 2));

    let rows = json.table.rows || [];
    rows = rows.reverse();

    commentsData = rows.map(row => {
      const timestampStr = row.c[0]?.f || ""; // timestamp
      const name = row.c[1]?.v || "";          // name
      const association = row.c[2]?.v || "";   // association
      const comment = row.c[3]?.v || "";       // comment
      const response = row.c[4]?.v || "";      // admin response

      return { timestampStr, name, association, comment, response };
    });

    renderComments();
  } catch (err) {
    console.error("Error loading comments:", err);
    document.getElementById("comments").innerHTML =
      "<p>⚠️ Could not load comments. Check sheetId & permissions.</p>";
  }
}

function renderComments() {
  const container = document.getElementById("comments");
  container.innerHTML = "";

  commentsData.forEach(item => {
    if (item.name && item.comment && item.timestampStr) {
      const dateObj = new Date(item.timestampStr);
      const formatted = isNaN(dateObj)
        ? escapeHtml(item.timestampStr)
        : formatRelativeTime(dateObj);

      const el = document.createElement("div");
      el.className = "comment";
      el.innerHTML = \`
        <div class="comment-header">
          <strong>\${escapeHtml(item.name)}</strong>
          \${item.association ? \`<span class="separator"> |  </span><span class="association">\${escapeHtml(item.association)}</span>\` : ""}
          <span class="date">\${formatted}</span>
        </div>
        <p>\${escapeHtml(item.comment)}</p>
        \${
          item.response
            ? \`<div class="admin-response"><strong>Mempelai:</strong> \${escapeHtml(item.response)}</div>\`
            : ""
        }
      \`;
      container.appendChild(el);
    }
  });
}

// load immediately and refresh
loadComments();
setInterval(loadComments, 5000);
        <\/script>`,executeScriptOnCanvas:!0,className:"w-html-embed"})}),y=({data:o})=>{const{system:n,resources:s,url:r}=o;return e.jsx(p.Provider,{value:{imageLoader:m,assetBaseUrl:a,resources:s,breakpoints:u,onError:console.error},children:e.jsx(w,{system:n},r)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:o})=>{const{pageMeta:n}=o,{origin:s}=new URL(o.url);let r=n.socialImageUrl;n.socialImageAssetName&&(r=`${s}${m({src:`${a}/${n.socialImageAssetName}`})}`);const c=n.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:n.title}),e.jsx("meta",{property:"og:title",content:n.title}),n.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:n.description}),e.jsx("meta",{property:"og:description",content:n.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,r&&e.jsx("meta",{property:"og:image",content:n.socialImageUrl}),i,n.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.custom.map(({property:t,content:l})=>e.jsx("meta",{property:t,content:l},t)),(n.socialImageAssetName!==void 0||n.socialImageUrl!==void 0)&&c===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,h.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),x.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),$={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/komen/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/komen/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{$ as configValuesSerialized};
