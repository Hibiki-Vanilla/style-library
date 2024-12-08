<template>
  <main>
    <div class="coupon"></div>
  </main>
</template>

<script>
export default {
  name: "ThreePage",

  methods: {
    sendData(event) {
      let target = event.target;
      // 获取元素的相关信息，例如ID、类名等
      let id = target.id;
      let className = target.className;

      // 构造要发送的数据
      let data = {
        type: "click",
        id: id,
        className: className,
        // 其它你想要收集的信息
      };
      console.log(data);

      // 发送数据
      // this.sendData(data);
    },

    scrollEvent() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let data = {
        type: "scroll",
        scrollTop: scrollTop,
        // 其它你想要收集的信息
      };
      console.log(data);
    },
    inputEvent(event) {
      let target = event.target;
      let value = target.value;
      let data = {
        type: "input",
        value: value,
        // 其它你想要收集的信息
      };

      console.log(data);

      // 发送数据
      // this.sendData(data);
    },
    loadEvent() {
      const [performanceData] = performance.getEntriesByType("navigation");
      // 计算页面加载时间 （performance.getEntriesByType("navigation")的时候使用这个）
      let pageLoadTime = performanceData.loadEventEnd - performanceData.domComplete;

      // 计算请求响应时间
      const requestResponseTime =
        performanceData.responseEnd - performanceData.requestStart;

      // 计算DNS查询时间
      let dnsLookupTime =
        performanceData.domainLookupEnd - performanceData.domainLookupStart;

      // 计算TCP连接时间
      let tcpConnectTime = performanceData.connectEnd - performanceData.connectStart;

      // 计算白屏时间
      var whiteScreenTime =
        performanceData.domInteractive - performanceData.responseStart;

      // // 获取 FCP 时间
      // let fcpTime = 0;
      // const [fcpEntry] = performance.getEntriesByName("first-contentful-paint");
      // if (fcpEntry) {
      //   fcpTime = fcpEntry.startTime;
      // }

      // // 获取 LCP 时间
      // let lcpTime = 0;
      // const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
      // if (lcpEntries.length > 0) {
      //   lcpTime =
      //     lcpEntries[lcpEntries.length - 1].renderTime ||
      //     lcpEntries[lcpEntries.length - 1].loadTime;
      // }

      // Paint Timing
      const paintMetrics = performance.getEntriesByType("paint");
      paintMetrics.forEach((metric) => {
        console.log(metric.name + ": " + metric.startTime + "ms");
      });

      // 监听长任务
      let tti = 0;
      let tbt = 0;
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          // 计算 TBT
          if (entry.duration > 50) {
            tbt += entry.duration - 50;
          }
        }

        // 计算 TTI
        if (tti === 0 && tbt < 50) {
          tti = performance.now();
        }
      });
      observer.observe({ entryTypes: ["longtask"] });

      // 构造要发送的性能数据
      let perfData = {
        type: "performance",
        pageLoadTime: pageLoadTime,
        dnsLookupTime: dnsLookupTime,
        tcpConnectTime: tcpConnectTime,
        whiteScreenTime: whiteScreenTime,
        requestResponseTime: requestResponseTime,
        tbt: tbt,
        tti: tti,
        // 其它你想要收集的信息
      };

      console.log(perfData);
    },
    errorEvent(event) {
      console.log(event.target.nodeName);
      // 获取错误信息
      let message = event.message;
      let filename = event.filename;
      let lineno = event.lineno;
      let colno = event.colno;

      // 构造要发送的数据
      let data = {
        type: "error",
        message: message,
        filename: filename,
        lineno: lineno,
        colno: colno,
        // 其它你想要收集的信息
      };
      console.log(data);
    },
    resourceEvent() {
      const resourceData = performance.getEntriesByType("resource");
      resourceData.forEach((resource, i) => {
        // 获取资源的相关信息，例如名称、类型、大小等
        let name = resource.name;
        let type = resource.initiatorType;
        let size = resource.transferSize;

        // 可计算的资源时间
        console.log(`== 资源 [${i}] - ${resource.name}`);
        // 重定向时间
        let t = resource.redirectEnd - resource.redirectStart;
        console.log(`… 重定向时间 = ${t}`);

        // DNS时间
        t = resource.domainLookupEnd - resource.domainLookupStart;
        console.log(`… DNS查询时间 = ${t}`);

        // TCP握手时间
        t = resource.connectEnd - resource.connectStart;
        console.log(`… TCP握手时间 = ${t}`);

        // 响应时间
        t = resource.responseEnd - resource.responseStart;
        console.log(`… 响应时间 = ${t}`);

        // 获取直到响应结束
        t = resource.fetchStart > 0 ? resource.responseEnd - resource.fetchStart : "0";
        console.log(`… 获取直到响应结束时间 = ${t}`);

        // 请求开始直到响应结束
        t =
          resource.requestStart > 0 ? resource.responseEnd - resource.requestStart : "0";
        console.log(`… 请求开始直到响应结束时间 = ${t}`);

        // 开始直到响应结束
        t = resource.startTime > 0 ? resource.responseEnd - resource.startTime : "0";
        console.log(`… 开始直到响应结束时间 = ${t}`);

        // 构造要发送的资源数据
        let resData = {
          type: "resource",
          name: name,
          resourceType: type,
          size: size,
          // 其它你想要收集的信息
        };

        console.log(resData);
      });
    },
  },

  mounted() {
    // window.addEventListener("click", this.sendData);
    // window.addEventListener("scroll", this.scrollEvent, false);
    // window.addEventListener("input", this.inputEvent, false);
    // window.addEventListener("load", this.loadEvent, false);
    window.addEventListener("error", this.errorEvent, false);
    // this.resourceEvent();
  },
};
</script>

<style lang="less">
.coupon {
  width: 250px;
  height: 250px;
  margin: 50px auto;
  background: conic-gradient(
    #000 12.5%,
    #fff 0 37.5%,
    #000 0 62.5%,
    #fff 0 87.5%,
    #000 0
  );
  background-size: 50px 50px;
}
</style>
