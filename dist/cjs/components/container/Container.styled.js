"use strict";var c=require("@emotion/styled/base"),l=require("../../constants/breakpoints.js"),X=require("../../constants/sizes.js"),t=require("../../constants/spacing.js");const d=c("div","production"===process.env.NODE_ENV?{target:"eaf5brw1"}:{target:"eaf5brw1",label:"FluidContainer"})("margin-left:auto;margin-right:auto;width:100%;box-sizing:border-box;min-height:",X.SCREEN_HEIGHT,";",(c=>{let{$centered:l}=c;return l&&"\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t"}),";"+("production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRhaW5lci5zdHlsZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl5QyIsImZpbGUiOiJDb250YWluZXIuc3R5bGVkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgU0NSRUVOX0xHLCBTQ1JFRU5fU00sIFNDUkVFTl9YTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvYnJlYWtwb2ludHNcIjtcclxuaW1wb3J0IHsgU0NSRUVOX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc2l6ZXNcIjtcclxuaW1wb3J0IHsgQ09MVU1OX1dJRFRILCBHVVRURVIgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3NwYWNpbmdcIjtcclxuZXhwb3J0IGNvbnN0IEZsdWlkQ29udGFpbmVyID0gc3R5bGVkLmRpdiBgXHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdG1pbi1oZWlnaHQ6ICR7U0NSRUVOX0hFSUdIVH07XHJcblxyXG5cdCR7KHsgJGNlbnRlcmVkIH0pID0+ICRjZW50ZXJlZCAmJlxyXG4gICAgYFxyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogJHtDT0xVTU5fV0lEVEggKiA0ICsgR1VUVEVSICogMiAqIDN9cHg7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuXHRAbWVkaWEgKG1pbi13aWR0aDogJHtTQ1JFRU5fWE19cHgpIHtcclxuXHRcdG1heC13aWR0aDogJHtDT0xVTU5fV0lEVEggKiA4ICsgR1VUVEVSICogMiAqIDd9cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgKG1pbi13aWR0aDogJHtTQ1JFRU5fTEd9cHgpIHtcclxuXHRcdG1heC13aWR0aDogJHtDT0xVTU5fV0lEVEggKiAxMiArIEdVVFRFUiAqIDIgKiAxMX1weDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAobWF4LXdpZHRoOiAke1NDUkVFTl9TTX1weCkge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdG1pbi1oZWlnaHQ6ICR7U0NSRUVOX0hFSUdIVH07XHJcblxyXG5cdCR7KHsgJGNlbnRlcmVkIH0pID0+ICRjZW50ZXJlZCAmJlxyXG4gICAgYFxyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YH1cclxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29udGFpbmVyLnN0eWxlZC5qcy5tYXAiXX0= */")),b=c("div","production"===process.env.NODE_ENV?{target:"eaf5brw0"}:{target:"eaf5brw0",label:"Container"})("width:100%;max-width:",4*t.COLUMN_WIDTH+2*t.GUTTER*3,"px;margin-left:auto;margin-right:auto;@media (min-width: ",l.SCREEN_XM,"px){max-width:",8*t.COLUMN_WIDTH+2*t.GUTTER*7,"px;}@media (min-width: ",l.SCREEN_LG,"px){max-width:",12*t.COLUMN_WIDTH+2*t.GUTTER*11,"px;}@media (max-width: ",l.SCREEN_SM,"px){width:100%;max-width:100%;}box-sizing:border-box;min-height:",X.SCREEN_HEIGHT,";",(c=>{let{$centered:l}=c;return l&&"\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t"}),";"+("production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRhaW5lci5zdHlsZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0MiLCJmaWxlIjoiQ29udGFpbmVyLnN0eWxlZC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IFNDUkVFTl9MRywgU0NSRUVOX1NNLCBTQ1JFRU5fWE0gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2JyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCB7IFNDUkVFTl9IRUlHSFQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3NpemVzXCI7XHJcbmltcG9ydCB7IENPTFVNTl9XSURUSCwgR1VUVEVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zcGFjaW5nXCI7XHJcbmV4cG9ydCBjb25zdCBGbHVpZENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxuXHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRtaW4taGVpZ2h0OiAke1NDUkVFTl9IRUlHSFR9O1xyXG5cclxuXHQkeyh7ICRjZW50ZXJlZCB9KSA9PiAkY2VudGVyZWQgJiZcclxuICAgIGBcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXgtd2lkdGg6ICR7Q09MVU1OX1dJRFRIICogNCArIEdVVFRFUiAqIDIgKiAzfXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcblx0QG1lZGlhIChtaW4td2lkdGg6ICR7U0NSRUVOX1hNfXB4KSB7XHJcblx0XHRtYXgtd2lkdGg6ICR7Q09MVU1OX1dJRFRIICogOCArIEdVVFRFUiAqIDIgKiA3fXB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhIChtaW4td2lkdGg6ICR7U0NSRUVOX0xHfXB4KSB7XHJcblx0XHRtYXgtd2lkdGg6ICR7Q09MVU1OX1dJRFRIICogMTIgKyBHVVRURVIgKiAyICogMTF9cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgKG1heC13aWR0aDogJHtTQ1JFRU5fU019cHgpIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRtaW4taGVpZ2h0OiAke1NDUkVFTl9IRUlHSFR9O1xyXG5cclxuXHQkeyh7ICRjZW50ZXJlZCB9KSA9PiAkY2VudGVyZWQgJiZcclxuICAgIGBcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGB9XHJcbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRhaW5lci5zdHlsZWQuanMubWFwIl19 */"));exports.Container=b,exports.FluidContainer=d;
