let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}}),document.addEventListener("DOMContentLoaded",function(){Highcharts.chart("chart-container",{chart:{type:"bar",styledMode:!0,spacingBottom:25,spacingRight:100},title:{text:null},data:{googleSpreadsheetKey:"1YOKb5l2VM4aAB2r20N_1aT_1vEajYrP3U-U3A6lZbC0"},plotOptions:{series:{groupPadding:.1}},legend:{align:"right",symbolRadius:0,verticalAlign:"top",x:10,itemMarginTop:-10},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYXJ0IiwidHlwZSIsInN0eWxlZE1vZGUiLCJzcGFjaW5nQm90dG9tIiwic3BhY2luZ1JpZ2h0IiwidGl0bGUiLCJ0ZXh0IiwiZGF0YSIsImdvb2dsZVNwcmVhZHNoZWV0S2V5IiwicGxvdE9wdGlvbnMiLCJzZXJpZXMiLCJncm91cFBhZGRpbmciLCJsZWdlbmQiLCJhbGlnbiIsInN5bWJvbFJhZGl1cyIsInZlcnRpY2FsQWxpZ24iLCJ4IiwiaXRlbU1hcmdpblRvcCIsInhBeGlzIiwibGFiZWxzIiwid2hpdGVTcGFjZSIsInRpY2tMZW5ndGgiLCJ5QXhpcyIsInVzZUhUTUwiLCJvdmVyZmxvdyIsImNyZWRpdHMiLCJlbmFibGVkIiwidG9vbHRpcCIsInNoYWRvdyIsInBhZGRpbmciLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBUUEsSUFBQUEsUUFBQUMsU0FBQUMsdUJBQUEsaUJBQ0FDLFNBQUFGLFNBQUFHLGVBQUEsY0FDQSxJQUFBRCxTQUNBLElBQUEsSUFBQUUsRUFBQSxFQUFBQSxFQUFBTCxRQUFBTSxPQUFBRCxJQUNBTCxRQUFBSyxHQUFBRSxNQUFBQyxXQUFBLE1BSUFDLFdBQUFDLFdBQUEsQ0FDQUMsS0FBQSxDQUNBQyxhQUFBLE9BSUFYLFNBQUFZLGlCQUFBLG1CQUFBLFdBQ0FKLFdBQUFLLE1BQUEsa0JBQUEsQ0FDQUEsTUFBQSxDQUNBQyxLQUFBLE1BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLEtBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLGdEQUdBQyxZQUFBLENBQ0FDLE9BQUEsQ0FDQUMsYUFBQSxLQW9CQUMsT0FBQSxDQUNBQyxNQUFBLFFBQ0FDLGFBQUEsRUFDQUMsY0FBQSxNQUNBQyxFQUFBLEdBQ0FDLGVBQUEsSUFFQUMsTUFBQSxDQUNBQyxPQUFBLENBQ0ExQixNQUFBLENBQ0EyQixXQUFBLFdBR0FDLFdBQUEsR0FFQUMsTUFBQSxDQUNBakIsT0FBQSxFQUNBYyxPQUFBLENBQ0FJLFNBQUEsRUFDQUMsU0FBQSxVQUdBQyxRQUFBLENBQ0FDLFNBQUEsR0FFQUMsUUFBQSxDQUNBQyxRQUFBLEVBQ0FDLFFBQUEsSUFFQUMsV0FBQSxDQUNBQyxNQUFBLENBQUEsQ0FDQUMsVUFBQSxDQUNBQyxTQUFBLEtBRUFDLGFBQUEsQ0FDQWxDLE1BQUEsQ0FDQUksYUFBQSxJQUVBUSxPQUFBLENBQ0FDLE1BQUEsT0FDQUcsR0FBQSxJQUVBVyxRQUFBLENBQ0FELFNBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFkZHMgc29jaWFsIGNsYXNzIHRvIGdldCBzb2NpYWwgY2hhcnRcbi8vIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LWFyZWFcIik7XG4vLyBmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKylcbi8vIHtcbi8vICAgICBlbGVtZW50W2ldLmNsYXNzTmFtZSArPSBcIiBzb2NpYWxcIjtcbi8vIH1cblxuLy8gYm9sZHMgdGhlIHN1YmhlYWQgaWYgdGhlcmUgaXMgbm8gaGVhZGxpbmVcbmxldCBzdWJoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LXN1YmhlYWRcIiksXG4gICAgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWhlYWRcIik7XG4gICAgaWYgKCFoZWFkbGluZSkge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ViaGVhZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3ViaGVhZFtpXS5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICAgICAgfSAgICAgICBcbiAgICAgfVxuXG5IaWdoY2hhcnRzLnNldE9wdGlvbnMoe1xuICAgIGxhbmc6IHtcbiAgICAgIHRob3VzYW5kc1NlcDogJywnXG4gICAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbXlDaGFydCA9IEhpZ2hjaGFydHMuY2hhcnQoJ2NoYXJ0LWNvbnRhaW5lcicsIHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgc3R5bGVkTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwYWNpbmdCb3R0b206IDI1LFxuICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMDBcbiAgICAgICAgfSwgXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdvb2dsZVNwcmVhZHNoZWV0S2V5OiAnMVlPS2I1bDJWTTRhQUIycjIwTl8xYVRfMXZFYWpZclAzVS1VM0E2bFpiQzAnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZvciBiYXIgY2hhcnRzIG9ubHlcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3VwUGFkZGluZzogMC4xXG4gICAgICAgICAgICB9IFxuICAgICAgICB9LFxuICAgICAgICAvLyBmb3IgbGluZSBjaGFydHMgb25seVxuICAgICAgICAvLyBwbG90T3B0aW9uczoge1xuICAgICAgICAvLyAgICAgc2VyaWVzOiB7XG4gICAgICAgIC8vICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAvLyAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAvLyAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgc3ltYm9sUmFkaXVzOiAwLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICB4OiAxMCxcbiAgICAgICAgICAgIGl0ZW1NYXJnaW5Ub3A6IC0xMFxuICAgICAgICB9LFxuICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlja0xlbmd0aDogNVxuICAgICAgICB9LFxuICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgdXNlSFRNTDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2FsbG93J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVkaXRzOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICBzaGFkb3c6IGZhbHNlLFxuICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA1MDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdfQ==
