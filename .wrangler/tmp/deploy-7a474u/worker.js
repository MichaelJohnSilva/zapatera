var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var isatty, tty_default;
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_read_stream();
    init_write_stream();
    init_read_stream();
    init_write_stream();
    isatty = /* @__PURE__ */ __name(function() {
      return false;
    }, "isatty");
    tty_default = {
      ReadStream,
      WriteStream,
      isatty
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// node-built-in-modules:path
import libDefault from "path";
var require_path = __commonJS({
  "node-built-in-modules:path"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault;
  }
});

// node-built-in-modules:crypto
import libDefault2 from "crypto";
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault2;
  }
});

// node_modules/depd/lib/browser/index.js
var require_browser = __commonJS({
  "node_modules/depd/lib/browser/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = depd;
    function depd(namespace) {
      if (!namespace) {
        throw new TypeError("argument namespace is required");
      }
      function deprecate(message) {
      }
      __name(deprecate, "deprecate");
      deprecate._file = void 0;
      deprecate._ignored = true;
      deprecate._namespace = namespace;
      deprecate._traced = false;
      deprecate._warned = /* @__PURE__ */ Object.create(null);
      deprecate.function = wrapfunction;
      deprecate.property = wrapproperty;
      return deprecate;
    }
    __name(depd, "depd");
    function wrapfunction(fn, message) {
      if (typeof fn !== "function") {
        throw new TypeError("argument fn must be a function");
      }
      return fn;
    }
    __name(wrapfunction, "wrapfunction");
    function wrapproperty(obj, prop, message) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new TypeError("argument obj must be object");
      }
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      if (!descriptor) {
        throw new TypeError("must call property on owner object");
      }
      if (!descriptor.configurable) {
        throw new TypeError("property must be configurable");
      }
    }
    __name(wrapproperty, "wrapproperty");
  }
});

// node_modules/bytes/index.js
var require_bytes = __commonJS({
  "node_modules/bytes/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = bytes;
    module.exports.format = format;
    module.exports.parse = parse;
    var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;
    var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;
    var map = {
      b: 1,
      kb: 1 << 10,
      mb: 1 << 20,
      gb: 1 << 30,
      tb: Math.pow(1024, 4),
      pb: Math.pow(1024, 5)
    };
    var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
    function bytes(value, options) {
      if (typeof value === "string") {
        return parse(value);
      }
      if (typeof value === "number") {
        return format(value, options);
      }
      return null;
    }
    __name(bytes, "bytes");
    function format(value, options) {
      if (!Number.isFinite(value)) {
        return null;
      }
      var mag = Math.abs(value);
      var thousandsSeparator = options && options.thousandsSeparator || "";
      var unitSeparator = options && options.unitSeparator || "";
      var decimalPlaces = options && options.decimalPlaces !== void 0 ? options.decimalPlaces : 2;
      var fixedDecimals = Boolean(options && options.fixedDecimals);
      var unit = options && options.unit || "";
      if (!unit || !map[unit.toLowerCase()]) {
        if (mag >= map.pb) {
          unit = "PB";
        } else if (mag >= map.tb) {
          unit = "TB";
        } else if (mag >= map.gb) {
          unit = "GB";
        } else if (mag >= map.mb) {
          unit = "MB";
        } else if (mag >= map.kb) {
          unit = "KB";
        } else {
          unit = "B";
        }
      }
      var val = value / map[unit.toLowerCase()];
      var str = val.toFixed(decimalPlaces);
      if (!fixedDecimals) {
        str = str.replace(formatDecimalsRegExp, "$1");
      }
      if (thousandsSeparator) {
        str = str.split(".").map(function(s, i) {
          return i === 0 ? s.replace(formatThousandsRegExp, thousandsSeparator) : s;
        }).join(".");
      }
      return str + unitSeparator + unit;
    }
    __name(format, "format");
    function parse(val) {
      if (typeof val === "number" && !isNaN(val)) {
        return val;
      }
      if (typeof val !== "string") {
        return null;
      }
      var results = parseRegExp.exec(val);
      var floatValue;
      var unit = "b";
      if (!results) {
        floatValue = parseInt(val, 10);
        unit = "b";
      } else {
        floatValue = parseFloat(results[1]);
        unit = results[4].toLowerCase();
      }
      if (isNaN(floatValue)) {
        return null;
      }
      return Math.floor(map[unit] * floatValue);
    }
    __name(parse, "parse");
  }
});

// node_modules/content-type/index.js
var require_content_type = __commonJS({
  "node_modules/content-type/index.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;
    var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/;
    var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g;
    var QUOTE_REGEXP = /([\\"])/g;
    var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    exports.format = format;
    exports.parse = parse;
    function format(obj) {
      if (!obj || typeof obj !== "object") {
        throw new TypeError("argument obj is required");
      }
      var parameters = obj.parameters;
      var type = obj.type;
      if (!type || !TYPE_REGEXP.test(type)) {
        throw new TypeError("invalid type");
      }
      var string = type;
      if (parameters && typeof parameters === "object") {
        var param;
        var params = Object.keys(parameters).sort();
        for (var i = 0; i < params.length; i++) {
          param = params[i];
          if (!TOKEN_REGEXP.test(param)) {
            throw new TypeError("invalid parameter name");
          }
          string += "; " + param + "=" + qstring(parameters[param]);
        }
      }
      return string;
    }
    __name(format, "format");
    function parse(string) {
      if (!string) {
        throw new TypeError("argument string is required");
      }
      var header = typeof string === "object" ? getcontenttype(string) : string;
      if (typeof header !== "string") {
        throw new TypeError("argument string is required to be a string");
      }
      var index = header.indexOf(";");
      var type = index !== -1 ? header.slice(0, index).trim() : header.trim();
      if (!TYPE_REGEXP.test(type)) {
        throw new TypeError("invalid media type");
      }
      var obj = new ContentType(type.toLowerCase());
      if (index !== -1) {
        var key;
        var match;
        var value;
        PARAM_REGEXP.lastIndex = index;
        while (match = PARAM_REGEXP.exec(header)) {
          if (match.index !== index) {
            throw new TypeError("invalid parameter format");
          }
          index += match[0].length;
          key = match[1].toLowerCase();
          value = match[2];
          if (value.charCodeAt(0) === 34) {
            value = value.slice(1, -1);
            if (value.indexOf("\\") !== -1) {
              value = value.replace(QESC_REGEXP, "$1");
            }
          }
          obj.parameters[key] = value;
        }
        if (index !== header.length) {
          throw new TypeError("invalid parameter format");
        }
      }
      return obj;
    }
    __name(parse, "parse");
    function getcontenttype(obj) {
      var header;
      if (typeof obj.getHeader === "function") {
        header = obj.getHeader("content-type");
      } else if (typeof obj.headers === "object") {
        header = obj.headers && obj.headers["content-type"];
      }
      if (typeof header !== "string") {
        throw new TypeError("content-type header is missing from object");
      }
      return header;
    }
    __name(getcontenttype, "getcontenttype");
    function qstring(val) {
      var str = String(val);
      if (TOKEN_REGEXP.test(str)) {
        return str;
      }
      if (str.length > 0 && !TEXT_REGEXP.test(str)) {
        throw new TypeError("invalid parameter value");
      }
      return '"' + str.replace(QUOTE_REGEXP, "\\$1") + '"';
    }
    __name(qstring, "qstring");
    function ContentType(type) {
      this.parameters = /* @__PURE__ */ Object.create(null);
      this.type = type;
    }
    __name(ContentType, "ContentType");
  }
});

// node_modules/setprototypeof/index.js
var require_setprototypeof = __commonJS({
  "node_modules/setprototypeof/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
    function setProtoOf(obj, proto) {
      obj.__proto__ = proto;
      return obj;
    }
    __name(setProtoOf, "setProtoOf");
    function mixinProperties(obj, proto) {
      for (var prop in proto) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
          obj[prop] = proto[prop];
        }
      }
      return obj;
    }
    __name(mixinProperties, "mixinProperties");
  }
});

// node_modules/statuses/codes.json
var require_codes = __commonJS({
  "node_modules/statuses/codes.json"(exports, module) {
    module.exports = {
      "100": "Continue",
      "101": "Switching Protocols",
      "102": "Processing",
      "103": "Early Hints",
      "200": "OK",
      "201": "Created",
      "202": "Accepted",
      "203": "Non-Authoritative Information",
      "204": "No Content",
      "205": "Reset Content",
      "206": "Partial Content",
      "207": "Multi-Status",
      "208": "Already Reported",
      "226": "IM Used",
      "300": "Multiple Choices",
      "301": "Moved Permanently",
      "302": "Found",
      "303": "See Other",
      "304": "Not Modified",
      "305": "Use Proxy",
      "307": "Temporary Redirect",
      "308": "Permanent Redirect",
      "400": "Bad Request",
      "401": "Unauthorized",
      "402": "Payment Required",
      "403": "Forbidden",
      "404": "Not Found",
      "405": "Method Not Allowed",
      "406": "Not Acceptable",
      "407": "Proxy Authentication Required",
      "408": "Request Timeout",
      "409": "Conflict",
      "410": "Gone",
      "411": "Length Required",
      "412": "Precondition Failed",
      "413": "Payload Too Large",
      "414": "URI Too Long",
      "415": "Unsupported Media Type",
      "416": "Range Not Satisfiable",
      "417": "Expectation Failed",
      "418": "I'm a Teapot",
      "421": "Misdirected Request",
      "422": "Unprocessable Entity",
      "423": "Locked",
      "424": "Failed Dependency",
      "425": "Too Early",
      "426": "Upgrade Required",
      "428": "Precondition Required",
      "429": "Too Many Requests",
      "431": "Request Header Fields Too Large",
      "451": "Unavailable For Legal Reasons",
      "500": "Internal Server Error",
      "501": "Not Implemented",
      "502": "Bad Gateway",
      "503": "Service Unavailable",
      "504": "Gateway Timeout",
      "505": "HTTP Version Not Supported",
      "506": "Variant Also Negotiates",
      "507": "Insufficient Storage",
      "508": "Loop Detected",
      "509": "Bandwidth Limit Exceeded",
      "510": "Not Extended",
      "511": "Network Authentication Required"
    };
  }
});

// node_modules/statuses/index.js
var require_statuses = __commonJS({
  "node_modules/statuses/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var codes = require_codes();
    module.exports = status;
    status.message = codes;
    status.code = createMessageToStatusCodeMap(codes);
    status.codes = createStatusCodeList(codes);
    status.redirect = {
      300: true,
      301: true,
      302: true,
      303: true,
      305: true,
      307: true,
      308: true
    };
    status.empty = {
      204: true,
      205: true,
      304: true
    };
    status.retry = {
      502: true,
      503: true,
      504: true
    };
    function createMessageToStatusCodeMap(codes2) {
      var map = {};
      Object.keys(codes2).forEach(/* @__PURE__ */ __name(function forEachCode(code) {
        var message = codes2[code];
        var status2 = Number(code);
        map[message.toLowerCase()] = status2;
      }, "forEachCode"));
      return map;
    }
    __name(createMessageToStatusCodeMap, "createMessageToStatusCodeMap");
    function createStatusCodeList(codes2) {
      return Object.keys(codes2).map(/* @__PURE__ */ __name(function mapCode(code) {
        return Number(code);
      }, "mapCode"));
    }
    __name(createStatusCodeList, "createStatusCodeList");
    function getStatusCode(message) {
      var msg = message.toLowerCase();
      if (!Object.prototype.hasOwnProperty.call(status.code, msg)) {
        throw new Error('invalid status message: "' + message + '"');
      }
      return status.code[msg];
    }
    __name(getStatusCode, "getStatusCode");
    function getStatusMessage(code) {
      if (!Object.prototype.hasOwnProperty.call(status.message, code)) {
        throw new Error("invalid status code: " + code);
      }
      return status.message[code];
    }
    __name(getStatusMessage, "getStatusMessage");
    function status(code) {
      if (typeof code === "number") {
        return getStatusMessage(code);
      }
      if (typeof code !== "string") {
        throw new TypeError("code must be a number or string");
      }
      var n = parseInt(code, 10);
      if (!isNaN(n)) {
        return getStatusMessage(n);
      }
      return getStatusCode(code);
    }
    __name(status, "status");
  }
});

// node_modules/unenv/dist/runtime/npm/inherits.mjs
var inherits_exports = {};
__export(inherits_exports, {
  default: () => inherits_default
});
import { inherits } from "node:util";
var inherits_default;
var init_inherits = __esm({
  "node_modules/unenv/dist/runtime/npm/inherits.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    inherits_default = inherits;
  }
});

// required-unenv-alias:inherits
var require_inherits = __commonJS({
  "required-unenv-alias:inherits"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_inherits();
    module.exports = Object.entries(inherits_exports).filter(([k]) => k !== "default").reduce(
      (cjs, [k, value]) => Object.defineProperty(cjs, k, { value, enumerable: true }),
      "default" in inherits_exports ? inherits_default : {}
    );
  }
});

// node_modules/toidentifier/index.js
var require_toidentifier = __commonJS({
  "node_modules/toidentifier/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = toIdentifier;
    function toIdentifier(str) {
      return str.split(" ").map(function(token) {
        return token.slice(0, 1).toUpperCase() + token.slice(1);
      }).join("").replace(/[^ _0-9a-z]/gi, "");
    }
    __name(toIdentifier, "toIdentifier");
  }
});

// node_modules/http-errors/index.js
var require_http_errors = __commonJS({
  "node_modules/http-errors/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var deprecate = require_browser()("http-errors");
    var setPrototypeOf = require_setprototypeof();
    var statuses = require_statuses();
    var inherits2 = require_inherits();
    var toIdentifier = require_toidentifier();
    module.exports = createError;
    module.exports.HttpError = createHttpErrorConstructor();
    module.exports.isHttpError = createIsHttpErrorFunction(module.exports.HttpError);
    populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError);
    function codeClass(status) {
      return Number(String(status).charAt(0) + "00");
    }
    __name(codeClass, "codeClass");
    function createError() {
      var err;
      var msg;
      var status = 500;
      var props = {};
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        var type = typeof arg;
        if (type === "object" && arg instanceof Error) {
          err = arg;
          status = err.status || err.statusCode || status;
        } else if (type === "number" && i === 0) {
          status = arg;
        } else if (type === "string") {
          msg = arg;
        } else if (type === "object") {
          props = arg;
        } else {
          throw new TypeError("argument #" + (i + 1) + " unsupported type " + type);
        }
      }
      if (typeof status === "number" && (status < 400 || status >= 600)) {
        deprecate("non-error status code; use only 4xx or 5xx status codes");
      }
      if (typeof status !== "number" || !statuses.message[status] && (status < 400 || status >= 600)) {
        status = 500;
      }
      var HttpError = createError[status] || createError[codeClass(status)];
      if (!err) {
        err = HttpError ? new HttpError(msg) : new Error(msg || statuses.message[status]);
        Error.captureStackTrace(err, createError);
      }
      if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
        err.expose = status < 500;
        err.status = err.statusCode = status;
      }
      for (var key in props) {
        if (key !== "status" && key !== "statusCode") {
          err[key] = props[key];
        }
      }
      return err;
    }
    __name(createError, "createError");
    function createHttpErrorConstructor() {
      function HttpError() {
        throw new TypeError("cannot construct abstract class");
      }
      __name(HttpError, "HttpError");
      inherits2(HttpError, Error);
      return HttpError;
    }
    __name(createHttpErrorConstructor, "createHttpErrorConstructor");
    function createClientErrorConstructor(HttpError, name, code) {
      var className = toClassName(name);
      function ClientError(message) {
        var msg = message != null ? message : statuses.message[code];
        var err = new Error(msg);
        Error.captureStackTrace(err, ClientError);
        setPrototypeOf(err, ClientError.prototype);
        Object.defineProperty(err, "message", {
          enumerable: true,
          configurable: true,
          value: msg,
          writable: true
        });
        Object.defineProperty(err, "name", {
          enumerable: false,
          configurable: true,
          value: className,
          writable: true
        });
        return err;
      }
      __name(ClientError, "ClientError");
      inherits2(ClientError, HttpError);
      nameFunc(ClientError, className);
      ClientError.prototype.status = code;
      ClientError.prototype.statusCode = code;
      ClientError.prototype.expose = true;
      return ClientError;
    }
    __name(createClientErrorConstructor, "createClientErrorConstructor");
    function createIsHttpErrorFunction(HttpError) {
      return /* @__PURE__ */ __name(function isHttpError(val) {
        if (!val || typeof val !== "object") {
          return false;
        }
        if (val instanceof HttpError) {
          return true;
        }
        return val instanceof Error && typeof val.expose === "boolean" && typeof val.statusCode === "number" && val.status === val.statusCode;
      }, "isHttpError");
    }
    __name(createIsHttpErrorFunction, "createIsHttpErrorFunction");
    function createServerErrorConstructor(HttpError, name, code) {
      var className = toClassName(name);
      function ServerError(message) {
        var msg = message != null ? message : statuses.message[code];
        var err = new Error(msg);
        Error.captureStackTrace(err, ServerError);
        setPrototypeOf(err, ServerError.prototype);
        Object.defineProperty(err, "message", {
          enumerable: true,
          configurable: true,
          value: msg,
          writable: true
        });
        Object.defineProperty(err, "name", {
          enumerable: false,
          configurable: true,
          value: className,
          writable: true
        });
        return err;
      }
      __name(ServerError, "ServerError");
      inherits2(ServerError, HttpError);
      nameFunc(ServerError, className);
      ServerError.prototype.status = code;
      ServerError.prototype.statusCode = code;
      ServerError.prototype.expose = false;
      return ServerError;
    }
    __name(createServerErrorConstructor, "createServerErrorConstructor");
    function nameFunc(func, name) {
      var desc = Object.getOwnPropertyDescriptor(func, "name");
      if (desc && desc.configurable) {
        desc.value = name;
        Object.defineProperty(func, "name", desc);
      }
    }
    __name(nameFunc, "nameFunc");
    function populateConstructorExports(exports2, codes, HttpError) {
      codes.forEach(/* @__PURE__ */ __name(function forEachCode(code) {
        var CodeError;
        var name = toIdentifier(statuses.message[code]);
        switch (codeClass(code)) {
          case 400:
            CodeError = createClientErrorConstructor(HttpError, name, code);
            break;
          case 500:
            CodeError = createServerErrorConstructor(HttpError, name, code);
            break;
        }
        if (CodeError) {
          exports2[code] = CodeError;
          exports2[name] = CodeError;
        }
      }, "forEachCode"));
    }
    __name(populateConstructorExports, "populateConstructorExports");
    function toClassName(name) {
      return name.slice(-5) === "Error" ? name : name + "Error";
    }
    __name(toClassName, "toClassName");
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    __name(parse, "parse");
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
    __name(plural, "plural");
  }
});

// node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/debug/src/debug.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    __name(selectColor, "selectColor");
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self2 = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self2, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      __name(debug, "debug");
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    __name(createDebug, "createDebug");
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    __name(enable, "enable");
    function disable() {
      exports.enable("");
    }
    __name(disable, "disable");
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    __name(enabled, "enabled");
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
    __name(coerce, "coerce");
  }
});

// node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    exports = module.exports = require_debug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/applewebkit\/(\d+)/);
    }
    __name(useColors, "useColors");
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    __name(formatArgs, "formatArgs");
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    __name(log, "log");
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    __name(save, "save");
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    __name(load, "load");
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
    __name(localstorage, "localstorage");
  }
});

// node-built-in-modules:tty
var require_tty = __commonJS({
  "node-built-in-modules:tty"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_tty();
    module.exports = tty_default;
  }
});

// node-built-in-modules:util
import libDefault3 from "util";
var require_util = __commonJS({
  "node-built-in-modules:util"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault3;
  }
});

// node-built-in-modules:fs
import libDefault4 from "fs";
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault4;
  }
});

// node-built-in-modules:net
import libDefault5 from "net";
var require_net = __commonJS({
  "node-built-in-modules:net"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault5;
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var tty = require_tty();
    var util = require_util();
    exports = module.exports = require_debug();
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
      else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
      else if (val === "null") val = null;
      else val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    __name(useColors, "useColors");
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    __name(formatArgs, "formatArgs");
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    __name(log, "log");
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    __name(save, "save");
    function load() {
      return process.env.DEBUG;
    }
    __name(load, "load");
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = require_fs();
          stream2 = new fs.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require_net();
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    __name(createWritableStdioStream, "createWritableStdioStream");
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    __name(init, "init");
    exports.enable(load());
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    if (typeof process !== "undefined" && process.type === "renderer") {
      module.exports = require_browser2();
    } else {
      module.exports = require_node();
    }
  }
});

// node-built-in-modules:events
import libDefault6 from "events";
var require_events = __commonJS({
  "node-built-in-modules:events"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault6;
  }
});

// node-built-in-modules:stream
import libDefault7 from "stream";
var require_stream = __commonJS({
  "node-built-in-modules:stream"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault7;
  }
});

// node-built-in-modules:zlib
import libDefault8 from "zlib";
var require_zlib = __commonJS({
  "node-built-in-modules:zlib"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault8;
  }
});

// node_modules/destroy/index.js
var require_destroy = __commonJS({
  "node_modules/destroy/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var EventEmitter2 = require_events().EventEmitter;
    var ReadStream2 = require_fs().ReadStream;
    var Stream = require_stream();
    var Zlib = require_zlib();
    module.exports = destroy;
    function destroy(stream, suppress) {
      if (isFsReadStream(stream)) {
        destroyReadStream(stream);
      } else if (isZlibStream(stream)) {
        destroyZlibStream(stream);
      } else if (hasDestroy(stream)) {
        stream.destroy();
      }
      if (isEventEmitter(stream) && suppress) {
        stream.removeAllListeners("error");
        stream.addListener("error", noop);
      }
      return stream;
    }
    __name(destroy, "destroy");
    function destroyReadStream(stream) {
      stream.destroy();
      if (typeof stream.close === "function") {
        stream.on("open", onOpenClose);
      }
    }
    __name(destroyReadStream, "destroyReadStream");
    function closeZlibStream(stream) {
      if (stream._hadError === true) {
        var prop = stream._binding === null ? "_binding" : "_handle";
        stream[prop] = {
          close: /* @__PURE__ */ __name(function() {
            this[prop] = null;
          }, "close")
        };
      }
      stream.close();
    }
    __name(closeZlibStream, "closeZlibStream");
    function destroyZlibStream(stream) {
      if (typeof stream.destroy === "function") {
        if (stream._binding) {
          stream.destroy();
          if (stream._processing) {
            stream._needDrain = true;
            stream.once("drain", onDrainClearBinding);
          } else {
            stream._binding.clear();
          }
        } else if (stream._destroy && stream._destroy !== Stream.Transform.prototype._destroy) {
          stream.destroy();
        } else if (stream._destroy && typeof stream.close === "function") {
          stream.destroyed = true;
          stream.close();
        } else {
          stream.destroy();
        }
      } else if (typeof stream.close === "function") {
        closeZlibStream(stream);
      }
    }
    __name(destroyZlibStream, "destroyZlibStream");
    function hasDestroy(stream) {
      return stream instanceof Stream && typeof stream.destroy === "function";
    }
    __name(hasDestroy, "hasDestroy");
    function isEventEmitter(val) {
      return val instanceof EventEmitter2;
    }
    __name(isEventEmitter, "isEventEmitter");
    function isFsReadStream(stream) {
      return stream instanceof ReadStream2;
    }
    __name(isFsReadStream, "isFsReadStream");
    function isZlibStream(stream) {
      return stream instanceof Zlib.Gzip || stream instanceof Zlib.Gunzip || stream instanceof Zlib.Deflate || stream instanceof Zlib.DeflateRaw || stream instanceof Zlib.Inflate || stream instanceof Zlib.InflateRaw || stream instanceof Zlib.Unzip;
    }
    __name(isZlibStream, "isZlibStream");
    function noop() {
    }
    __name(noop, "noop");
    function onDrainClearBinding() {
      this._binding.clear();
    }
    __name(onDrainClearBinding, "onDrainClearBinding");
    function onOpenClose() {
      if (typeof this.fd === "number") {
        this.close();
      }
    }
    __name(onOpenClose, "onOpenClose");
  }
});

// iconv-stub.js
var require_iconv_stub = __commonJS({
  "iconv-stub.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = {
      encodingExists: /* @__PURE__ */ __name(() => true, "encodingExists"),
      decode: /* @__PURE__ */ __name((buf, enc) => new TextDecoder(enc || "utf-8").decode(buf), "decode"),
      getDecoder: /* @__PURE__ */ __name((enc) => {
        const d = new TextDecoder(enc || "utf-8");
        return { write: /* @__PURE__ */ __name((b) => d.decode(b, { stream: true }), "write"), end: /* @__PURE__ */ __name(() => d.decode(), "end") };
      }, "getDecoder")
    };
  }
});

// node_modules/unpipe/index.js
var require_unpipe = __commonJS({
  "node_modules/unpipe/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = unpipe;
    function hasPipeDataListeners(stream) {
      var listeners2 = stream.listeners("data");
      for (var i = 0; i < listeners2.length; i++) {
        if (listeners2[i].name === "ondata") {
          return true;
        }
      }
      return false;
    }
    __name(hasPipeDataListeners, "hasPipeDataListeners");
    function unpipe(stream) {
      if (!stream) {
        throw new TypeError("argument stream is required");
      }
      if (typeof stream.unpipe === "function") {
        stream.unpipe();
        return;
      }
      if (!hasPipeDataListeners(stream)) {
        return;
      }
      var listener;
      var listeners2 = stream.listeners("close");
      for (var i = 0; i < listeners2.length; i++) {
        listener = listeners2[i];
        if (listener.name !== "cleanup" && listener.name !== "onclose") {
          continue;
        }
        listener.call(stream);
      }
    }
    __name(unpipe, "unpipe");
  }
});

// node-built-in-modules:async_hooks
import libDefault9 from "async_hooks";
var require_async_hooks = __commonJS({
  "node-built-in-modules:async_hooks"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault9;
  }
});

// node_modules/raw-body/index.js
var require_raw_body = __commonJS({
  "node_modules/raw-body/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var asyncHooks = tryRequireAsyncHooks();
    var bytes = require_bytes();
    var createError = require_http_errors();
    var iconv = require_iconv_stub();
    var unpipe = require_unpipe();
    module.exports = getRawBody;
    var ICONV_ENCODING_MESSAGE_REGEXP = /^Encoding not recognized: /;
    function getDecoder(encoding) {
      if (!encoding) return null;
      try {
        return iconv.getDecoder(encoding);
      } catch (e) {
        if (!ICONV_ENCODING_MESSAGE_REGEXP.test(e.message)) throw e;
        throw createError(415, "specified encoding unsupported", {
          encoding,
          type: "encoding.unsupported"
        });
      }
    }
    __name(getDecoder, "getDecoder");
    function getRawBody(stream, options, callback) {
      var done = callback;
      var opts = options || {};
      if (stream === void 0) {
        throw new TypeError("argument stream is required");
      } else if (typeof stream !== "object" || stream === null || typeof stream.on !== "function") {
        throw new TypeError("argument stream must be a stream");
      }
      if (options === true || typeof options === "string") {
        opts = {
          encoding: options
        };
      }
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      if (done !== void 0 && typeof done !== "function") {
        throw new TypeError("argument callback must be a function");
      }
      if (!done && !global.Promise) {
        throw new TypeError("argument callback is required");
      }
      var encoding = opts.encoding !== true ? opts.encoding : "utf-8";
      var limit = bytes.parse(opts.limit);
      var length = opts.length != null && !isNaN(opts.length) ? parseInt(opts.length, 10) : null;
      if (done) {
        return readStream(stream, encoding, length, limit, wrap(done));
      }
      return new Promise(/* @__PURE__ */ __name(function executor(resolve, reject) {
        readStream(stream, encoding, length, limit, /* @__PURE__ */ __name(function onRead(err, buf) {
          if (err) return reject(err);
          resolve(buf);
        }, "onRead"));
      }, "executor"));
    }
    __name(getRawBody, "getRawBody");
    function halt(stream) {
      unpipe(stream);
      if (typeof stream.pause === "function") {
        stream.pause();
      }
    }
    __name(halt, "halt");
    function readStream(stream, encoding, length, limit, callback) {
      var complete = false;
      var sync = true;
      if (limit !== null && length !== null && length > limit) {
        return done(createError(413, "request entity too large", {
          expected: length,
          length,
          limit,
          type: "entity.too.large"
        }));
      }
      var state = stream._readableState;
      if (stream._decoder || state && (state.encoding || state.decoder)) {
        return done(createError(500, "stream encoding should not be set", {
          type: "stream.encoding.set"
        }));
      }
      if (typeof stream.readable !== "undefined" && !stream.readable) {
        return done(createError(500, "stream is not readable", {
          type: "stream.not.readable"
        }));
      }
      var received = 0;
      var decoder;
      try {
        decoder = getDecoder(encoding);
      } catch (err) {
        return done(err);
      }
      var buffer = decoder ? "" : [];
      stream.on("aborted", onAborted);
      stream.on("close", cleanup);
      stream.on("data", onData);
      stream.on("end", onEnd);
      stream.on("error", onEnd);
      sync = false;
      function done() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        complete = true;
        if (sync) {
          process.nextTick(invokeCallback);
        } else {
          invokeCallback();
        }
        function invokeCallback() {
          cleanup();
          if (args[0]) {
            halt(stream);
          }
          callback.apply(null, args);
        }
        __name(invokeCallback, "invokeCallback");
      }
      __name(done, "done");
      function onAborted() {
        if (complete) return;
        done(createError(400, "request aborted", {
          code: "ECONNABORTED",
          expected: length,
          length,
          received,
          type: "request.aborted"
        }));
      }
      __name(onAborted, "onAborted");
      function onData(chunk) {
        if (complete) return;
        received += chunk.length;
        if (limit !== null && received > limit) {
          done(createError(413, "request entity too large", {
            limit,
            received,
            type: "entity.too.large"
          }));
        } else if (decoder) {
          buffer += decoder.write(chunk);
        } else {
          buffer.push(chunk);
        }
      }
      __name(onData, "onData");
      function onEnd(err) {
        if (complete) return;
        if (err) return done(err);
        if (length !== null && received !== length) {
          done(createError(400, "request size did not match content length", {
            expected: length,
            length,
            received,
            type: "request.size.invalid"
          }));
        } else {
          var string = decoder ? buffer + (decoder.end() || "") : Buffer.concat(buffer);
          done(null, string);
        }
      }
      __name(onEnd, "onEnd");
      function cleanup() {
        buffer = null;
        stream.removeListener("aborted", onAborted);
        stream.removeListener("data", onData);
        stream.removeListener("end", onEnd);
        stream.removeListener("error", onEnd);
        stream.removeListener("close", cleanup);
      }
      __name(cleanup, "cleanup");
    }
    __name(readStream, "readStream");
    function tryRequireAsyncHooks() {
      try {
        return require_async_hooks();
      } catch (e) {
        return {};
      }
    }
    __name(tryRequireAsyncHooks, "tryRequireAsyncHooks");
    function wrap(fn) {
      var res;
      if (asyncHooks.AsyncResource) {
        res = new asyncHooks.AsyncResource(fn.name || "bound-anonymous-fn");
      }
      if (!res || !res.runInAsyncScope) {
        return fn;
      }
      return res.runInAsyncScope.bind(res, fn, null);
    }
    __name(wrap, "wrap");
  }
});

// node_modules/ee-first/index.js
var require_ee_first = __commonJS({
  "node_modules/ee-first/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = first;
    function first(stuff, done) {
      if (!Array.isArray(stuff))
        throw new TypeError("arg must be an array of [ee, events...] arrays");
      var cleanups = [];
      for (var i = 0; i < stuff.length; i++) {
        var arr = stuff[i];
        if (!Array.isArray(arr) || arr.length < 2)
          throw new TypeError("each array member must be [ee, events...]");
        var ee = arr[0];
        for (var j = 1; j < arr.length; j++) {
          var event = arr[j];
          var fn = listener(event, callback);
          ee.on(event, fn);
          cleanups.push({
            ee,
            event,
            fn
          });
        }
      }
      function callback() {
        cleanup();
        done.apply(null, arguments);
      }
      __name(callback, "callback");
      function cleanup() {
        var x;
        for (var i2 = 0; i2 < cleanups.length; i2++) {
          x = cleanups[i2];
          x.ee.removeListener(x.event, x.fn);
        }
      }
      __name(cleanup, "cleanup");
      function thunk(fn2) {
        done = fn2;
      }
      __name(thunk, "thunk");
      thunk.cancel = cleanup;
      return thunk;
    }
    __name(first, "first");
    function listener(event, done) {
      return /* @__PURE__ */ __name(function onevent(arg1) {
        var args = new Array(arguments.length);
        var ee = this;
        var err = event === "error" ? arg1 : null;
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        done(err, ee, event, args);
      }, "onevent");
    }
    __name(listener, "listener");
  }
});

// node_modules/on-finished/index.js
var require_on_finished = __commonJS({
  "node_modules/on-finished/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = onFinished;
    module.exports.isFinished = isFinished;
    var asyncHooks = tryRequireAsyncHooks();
    var first = require_ee_first();
    var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
      process.nextTick(fn.bind.apply(fn, arguments));
    };
    function onFinished(msg, listener) {
      if (isFinished(msg) !== false) {
        defer(listener, null, msg);
        return msg;
      }
      attachListener(msg, wrap(listener));
      return msg;
    }
    __name(onFinished, "onFinished");
    function isFinished(msg) {
      var socket = msg.socket;
      if (typeof msg.finished === "boolean") {
        return Boolean(msg.finished || socket && !socket.writable);
      }
      if (typeof msg.complete === "boolean") {
        return Boolean(msg.upgrade || !socket || !socket.readable || msg.complete && !msg.readable);
      }
      return void 0;
    }
    __name(isFinished, "isFinished");
    function attachFinishedListener(msg, callback) {
      var eeMsg;
      var eeSocket;
      var finished = false;
      function onFinish(error) {
        eeMsg.cancel();
        eeSocket.cancel();
        finished = true;
        callback(error);
      }
      __name(onFinish, "onFinish");
      eeMsg = eeSocket = first([[msg, "end", "finish"]], onFinish);
      function onSocket(socket) {
        msg.removeListener("socket", onSocket);
        if (finished) return;
        if (eeMsg !== eeSocket) return;
        eeSocket = first([[socket, "error", "close"]], onFinish);
      }
      __name(onSocket, "onSocket");
      if (msg.socket) {
        onSocket(msg.socket);
        return;
      }
      msg.on("socket", onSocket);
      if (msg.socket === void 0) {
        patchAssignSocket(msg, onSocket);
      }
    }
    __name(attachFinishedListener, "attachFinishedListener");
    function attachListener(msg, listener) {
      var attached = msg.__onFinished;
      if (!attached || !attached.queue) {
        attached = msg.__onFinished = createListener(msg);
        attachFinishedListener(msg, attached);
      }
      attached.queue.push(listener);
    }
    __name(attachListener, "attachListener");
    function createListener(msg) {
      function listener(err) {
        if (msg.__onFinished === listener) msg.__onFinished = null;
        if (!listener.queue) return;
        var queue = listener.queue;
        listener.queue = null;
        for (var i = 0; i < queue.length; i++) {
          queue[i](err, msg);
        }
      }
      __name(listener, "listener");
      listener.queue = [];
      return listener;
    }
    __name(createListener, "createListener");
    function patchAssignSocket(res, callback) {
      var assignSocket = res.assignSocket;
      if (typeof assignSocket !== "function") return;
      res.assignSocket = /* @__PURE__ */ __name(function _assignSocket(socket) {
        assignSocket.call(this, socket);
        callback(socket);
      }, "_assignSocket");
    }
    __name(patchAssignSocket, "patchAssignSocket");
    function tryRequireAsyncHooks() {
      try {
        return require_async_hooks();
      } catch (e) {
        return {};
      }
    }
    __name(tryRequireAsyncHooks, "tryRequireAsyncHooks");
    function wrap(fn) {
      var res;
      if (asyncHooks.AsyncResource) {
        res = new asyncHooks.AsyncResource(fn.name || "bound-anonymous-fn");
      }
      if (!res || !res.runInAsyncScope) {
        return fn;
      }
      return res.runInAsyncScope.bind(res, fn, null);
    }
    __name(wrap, "wrap");
  }
});

// node_modules/body-parser/lib/read.js
var require_read = __commonJS({
  "node_modules/body-parser/lib/read.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var createError = require_http_errors();
    var destroy = require_destroy();
    var getBody = require_raw_body();
    var iconv = require_iconv_stub();
    var onFinished = require_on_finished();
    var unpipe = require_unpipe();
    var zlib = require_zlib();
    module.exports = read;
    function read(req, res, next, parse, debug, options) {
      var length;
      var opts = options;
      var stream;
      req._body = true;
      var encoding = opts.encoding !== null ? opts.encoding : null;
      var verify = opts.verify;
      try {
        stream = contentstream(req, debug, opts.inflate);
        length = stream.length;
        stream.length = void 0;
      } catch (err) {
        return next(err);
      }
      opts.length = length;
      opts.encoding = verify ? null : encoding;
      if (opts.encoding === null && encoding !== null && !iconv.encodingExists(encoding)) {
        return next(createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
          charset: encoding.toLowerCase(),
          type: "charset.unsupported"
        }));
      }
      debug("read body");
      getBody(stream, opts, function(error, body) {
        if (error) {
          var _error;
          if (error.type === "encoding.unsupported") {
            _error = createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
              charset: encoding.toLowerCase(),
              type: "charset.unsupported"
            });
          } else {
            _error = createError(400, error);
          }
          if (stream !== req) {
            unpipe(req);
            destroy(stream, true);
          }
          dump(req, /* @__PURE__ */ __name(function onfinished() {
            next(createError(400, _error));
          }, "onfinished"));
          return;
        }
        if (verify) {
          try {
            debug("verify body");
            verify(req, res, body, encoding);
          } catch (err) {
            next(createError(403, err, {
              body,
              type: err.type || "entity.verify.failed"
            }));
            return;
          }
        }
        var str = body;
        try {
          debug("parse body");
          str = typeof body !== "string" && encoding !== null ? iconv.decode(body, encoding) : body;
          req.body = parse(str);
        } catch (err) {
          next(createError(400, err, {
            body: str,
            type: err.type || "entity.parse.failed"
          }));
          return;
        }
        next();
      });
    }
    __name(read, "read");
    function contentstream(req, debug, inflate) {
      var encoding = (req.headers["content-encoding"] || "identity").toLowerCase();
      var length = req.headers["content-length"];
      var stream;
      debug('content-encoding "%s"', encoding);
      if (inflate === false && encoding !== "identity") {
        throw createError(415, "content encoding unsupported", {
          encoding,
          type: "encoding.unsupported"
        });
      }
      switch (encoding) {
        case "deflate":
          stream = zlib.createInflate();
          debug("inflate body");
          req.pipe(stream);
          break;
        case "gzip":
          stream = zlib.createGunzip();
          debug("gunzip body");
          req.pipe(stream);
          break;
        case "identity":
          stream = req;
          stream.length = length;
          break;
        default:
          throw createError(415, 'unsupported content encoding "' + encoding + '"', {
            encoding,
            type: "encoding.unsupported"
          });
      }
      return stream;
    }
    __name(contentstream, "contentstream");
    function dump(req, callback) {
      if (onFinished.isFinished(req)) {
        callback(null);
      } else {
        onFinished(req, callback);
        req.resume();
      }
    }
    __name(dump, "dump");
  }
});

// node_modules/media-typer/index.js
var require_media_typer = __commonJS({
  "node_modules/media-typer/index.js"(exports) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g;
    var textRegExp = /^[\u0020-\u007e\u0080-\u00ff]+$/;
    var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/;
    var qescRegExp = /\\([\u0000-\u007f])/g;
    var quoteRegExp = /([\\"])/g;
    var subtypeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/;
    var typeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/;
    var typeRegExp = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
    exports.format = format;
    exports.parse = parse;
    function format(obj) {
      if (!obj || typeof obj !== "object") {
        throw new TypeError("argument obj is required");
      }
      var parameters = obj.parameters;
      var subtype = obj.subtype;
      var suffix = obj.suffix;
      var type = obj.type;
      if (!type || !typeNameRegExp.test(type)) {
        throw new TypeError("invalid type");
      }
      if (!subtype || !subtypeNameRegExp.test(subtype)) {
        throw new TypeError("invalid subtype");
      }
      var string = type + "/" + subtype;
      if (suffix) {
        if (!typeNameRegExp.test(suffix)) {
          throw new TypeError("invalid suffix");
        }
        string += "+" + suffix;
      }
      if (parameters && typeof parameters === "object") {
        var param;
        var params = Object.keys(parameters).sort();
        for (var i = 0; i < params.length; i++) {
          param = params[i];
          if (!tokenRegExp.test(param)) {
            throw new TypeError("invalid parameter name");
          }
          string += "; " + param + "=" + qstring(parameters[param]);
        }
      }
      return string;
    }
    __name(format, "format");
    function parse(string) {
      if (!string) {
        throw new TypeError("argument string is required");
      }
      if (typeof string === "object") {
        string = getcontenttype(string);
      }
      if (typeof string !== "string") {
        throw new TypeError("argument string is required to be a string");
      }
      var index = string.indexOf(";");
      var type = index !== -1 ? string.substr(0, index) : string;
      var key;
      var match;
      var obj = splitType(type);
      var params = {};
      var value;
      paramRegExp.lastIndex = index;
      while (match = paramRegExp.exec(string)) {
        if (match.index !== index) {
          throw new TypeError("invalid parameter format");
        }
        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];
        if (value[0] === '"') {
          value = value.substr(1, value.length - 2).replace(qescRegExp, "$1");
        }
        params[key] = value;
      }
      if (index !== -1 && index !== string.length) {
        throw new TypeError("invalid parameter format");
      }
      obj.parameters = params;
      return obj;
    }
    __name(parse, "parse");
    function getcontenttype(obj) {
      if (typeof obj.getHeader === "function") {
        return obj.getHeader("content-type");
      }
      if (typeof obj.headers === "object") {
        return obj.headers && obj.headers["content-type"];
      }
    }
    __name(getcontenttype, "getcontenttype");
    function qstring(val) {
      var str = String(val);
      if (tokenRegExp.test(str)) {
        return str;
      }
      if (str.length > 0 && !textRegExp.test(str)) {
        throw new TypeError("invalid parameter value");
      }
      return '"' + str.replace(quoteRegExp, "\\$1") + '"';
    }
    __name(qstring, "qstring");
    function splitType(string) {
      var match = typeRegExp.exec(string.toLowerCase());
      if (!match) {
        throw new TypeError("invalid media type");
      }
      var type = match[1];
      var subtype = match[2];
      var suffix;
      var index = subtype.lastIndexOf("+");
      if (index !== -1) {
        suffix = subtype.substr(index + 1);
        subtype = subtype.substr(0, index);
      }
      var obj = {
        type,
        subtype,
        suffix
      };
      return obj;
    }
    __name(splitType, "splitType");
  }
});

// node_modules/mime-db/db.json
var require_db = __commonJS({
  "node_modules/mime-db/db.json"(exports, module) {
    module.exports = {
      "application/1d-interleaved-parityfec": {
        source: "iana"
      },
      "application/3gpdash-qoe-report+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/3gpp-ims+xml": {
        source: "iana",
        compressible: true
      },
      "application/3gpphal+json": {
        source: "iana",
        compressible: true
      },
      "application/3gpphalforms+json": {
        source: "iana",
        compressible: true
      },
      "application/a2l": {
        source: "iana"
      },
      "application/ace+cbor": {
        source: "iana"
      },
      "application/activemessage": {
        source: "iana"
      },
      "application/activity+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-directory+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcost+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcostparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointprop+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointpropparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-error+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamcontrol+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamparams+json": {
        source: "iana",
        compressible: true
      },
      "application/aml": {
        source: "iana"
      },
      "application/andrew-inset": {
        source: "iana",
        extensions: ["ez"]
      },
      "application/applefile": {
        source: "iana"
      },
      "application/applixware": {
        source: "apache",
        extensions: ["aw"]
      },
      "application/at+jwt": {
        source: "iana"
      },
      "application/atf": {
        source: "iana"
      },
      "application/atfx": {
        source: "iana"
      },
      "application/atom+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atom"]
      },
      "application/atomcat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomcat"]
      },
      "application/atomdeleted+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomdeleted"]
      },
      "application/atomicmail": {
        source: "iana"
      },
      "application/atomsvc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomsvc"]
      },
      "application/atsc-dwd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dwd"]
      },
      "application/atsc-dynamic-event-message": {
        source: "iana"
      },
      "application/atsc-held+xml": {
        source: "iana",
        compressible: true,
        extensions: ["held"]
      },
      "application/atsc-rdt+json": {
        source: "iana",
        compressible: true
      },
      "application/atsc-rsat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsat"]
      },
      "application/atxml": {
        source: "iana"
      },
      "application/auth-policy+xml": {
        source: "iana",
        compressible: true
      },
      "application/bacnet-xdd+zip": {
        source: "iana",
        compressible: false
      },
      "application/batch-smtp": {
        source: "iana"
      },
      "application/bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/beep+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/calendar+json": {
        source: "iana",
        compressible: true
      },
      "application/calendar+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xcs"]
      },
      "application/call-completion": {
        source: "iana"
      },
      "application/cals-1840": {
        source: "iana"
      },
      "application/captive+json": {
        source: "iana",
        compressible: true
      },
      "application/cbor": {
        source: "iana"
      },
      "application/cbor-seq": {
        source: "iana"
      },
      "application/cccex": {
        source: "iana"
      },
      "application/ccmp+xml": {
        source: "iana",
        compressible: true
      },
      "application/ccxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ccxml"]
      },
      "application/cdfx+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdfx"]
      },
      "application/cdmi-capability": {
        source: "iana",
        extensions: ["cdmia"]
      },
      "application/cdmi-container": {
        source: "iana",
        extensions: ["cdmic"]
      },
      "application/cdmi-domain": {
        source: "iana",
        extensions: ["cdmid"]
      },
      "application/cdmi-object": {
        source: "iana",
        extensions: ["cdmio"]
      },
      "application/cdmi-queue": {
        source: "iana",
        extensions: ["cdmiq"]
      },
      "application/cdni": {
        source: "iana"
      },
      "application/cea": {
        source: "iana"
      },
      "application/cea-2018+xml": {
        source: "iana",
        compressible: true
      },
      "application/cellml+xml": {
        source: "iana",
        compressible: true
      },
      "application/cfw": {
        source: "iana"
      },
      "application/city+json": {
        source: "iana",
        compressible: true
      },
      "application/clr": {
        source: "iana"
      },
      "application/clue+xml": {
        source: "iana",
        compressible: true
      },
      "application/clue_info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cms": {
        source: "iana"
      },
      "application/cnrp+xml": {
        source: "iana",
        compressible: true
      },
      "application/coap-group+json": {
        source: "iana",
        compressible: true
      },
      "application/coap-payload": {
        source: "iana"
      },
      "application/commonground": {
        source: "iana"
      },
      "application/conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cose": {
        source: "iana"
      },
      "application/cose-key": {
        source: "iana"
      },
      "application/cose-key-set": {
        source: "iana"
      },
      "application/cpl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cpl"]
      },
      "application/csrattrs": {
        source: "iana"
      },
      "application/csta+xml": {
        source: "iana",
        compressible: true
      },
      "application/cstadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/csvm+json": {
        source: "iana",
        compressible: true
      },
      "application/cu-seeme": {
        source: "apache",
        extensions: ["cu"]
      },
      "application/cwt": {
        source: "iana"
      },
      "application/cybercash": {
        source: "iana"
      },
      "application/dart": {
        compressible: true
      },
      "application/dash+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpd"]
      },
      "application/dash-patch+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpp"]
      },
      "application/dashdelta": {
        source: "iana"
      },
      "application/davmount+xml": {
        source: "iana",
        compressible: true,
        extensions: ["davmount"]
      },
      "application/dca-rft": {
        source: "iana"
      },
      "application/dcd": {
        source: "iana"
      },
      "application/dec-dx": {
        source: "iana"
      },
      "application/dialog-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/dicom": {
        source: "iana"
      },
      "application/dicom+json": {
        source: "iana",
        compressible: true
      },
      "application/dicom+xml": {
        source: "iana",
        compressible: true
      },
      "application/dii": {
        source: "iana"
      },
      "application/dit": {
        source: "iana"
      },
      "application/dns": {
        source: "iana"
      },
      "application/dns+json": {
        source: "iana",
        compressible: true
      },
      "application/dns-message": {
        source: "iana"
      },
      "application/docbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dbk"]
      },
      "application/dots+cbor": {
        source: "iana"
      },
      "application/dskpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/dssc+der": {
        source: "iana",
        extensions: ["dssc"]
      },
      "application/dssc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdssc"]
      },
      "application/dvcs": {
        source: "iana"
      },
      "application/ecmascript": {
        source: "iana",
        compressible: true,
        extensions: ["es", "ecma"]
      },
      "application/edi-consent": {
        source: "iana"
      },
      "application/edi-x12": {
        source: "iana",
        compressible: false
      },
      "application/edifact": {
        source: "iana",
        compressible: false
      },
      "application/efi": {
        source: "iana"
      },
      "application/elm+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/elm+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.cap+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/emergencycalldata.comment+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.control+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.deviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.ecall.msd": {
        source: "iana"
      },
      "application/emergencycalldata.providerinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.serviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.subscriberinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.veds+xml": {
        source: "iana",
        compressible: true
      },
      "application/emma+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emma"]
      },
      "application/emotionml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emotionml"]
      },
      "application/encaprtp": {
        source: "iana"
      },
      "application/epp+xml": {
        source: "iana",
        compressible: true
      },
      "application/epub+zip": {
        source: "iana",
        compressible: false,
        extensions: ["epub"]
      },
      "application/eshop": {
        source: "iana"
      },
      "application/exi": {
        source: "iana",
        extensions: ["exi"]
      },
      "application/expect-ct-report+json": {
        source: "iana",
        compressible: true
      },
      "application/express": {
        source: "iana",
        extensions: ["exp"]
      },
      "application/fastinfoset": {
        source: "iana"
      },
      "application/fastsoap": {
        source: "iana"
      },
      "application/fdt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fdt"]
      },
      "application/fhir+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fhir+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fido.trusted-apps+json": {
        compressible: true
      },
      "application/fits": {
        source: "iana"
      },
      "application/flexfec": {
        source: "iana"
      },
      "application/font-sfnt": {
        source: "iana"
      },
      "application/font-tdpfr": {
        source: "iana",
        extensions: ["pfr"]
      },
      "application/font-woff": {
        source: "iana",
        compressible: false
      },
      "application/framework-attributes+xml": {
        source: "iana",
        compressible: true
      },
      "application/geo+json": {
        source: "iana",
        compressible: true,
        extensions: ["geojson"]
      },
      "application/geo+json-seq": {
        source: "iana"
      },
      "application/geopackage+sqlite3": {
        source: "iana"
      },
      "application/geoxacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/gltf-buffer": {
        source: "iana"
      },
      "application/gml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["gml"]
      },
      "application/gpx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["gpx"]
      },
      "application/gxf": {
        source: "apache",
        extensions: ["gxf"]
      },
      "application/gzip": {
        source: "iana",
        compressible: false,
        extensions: ["gz"]
      },
      "application/h224": {
        source: "iana"
      },
      "application/held+xml": {
        source: "iana",
        compressible: true
      },
      "application/hjson": {
        extensions: ["hjson"]
      },
      "application/http": {
        source: "iana"
      },
      "application/hyperstudio": {
        source: "iana",
        extensions: ["stk"]
      },
      "application/ibe-key-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pkg-reply+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pp-data": {
        source: "iana"
      },
      "application/iges": {
        source: "iana"
      },
      "application/im-iscomposing+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/index": {
        source: "iana"
      },
      "application/index.cmd": {
        source: "iana"
      },
      "application/index.obj": {
        source: "iana"
      },
      "application/index.response": {
        source: "iana"
      },
      "application/index.vnd": {
        source: "iana"
      },
      "application/inkml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ink", "inkml"]
      },
      "application/iotp": {
        source: "iana"
      },
      "application/ipfix": {
        source: "iana",
        extensions: ["ipfix"]
      },
      "application/ipp": {
        source: "iana"
      },
      "application/isup": {
        source: "iana"
      },
      "application/its+xml": {
        source: "iana",
        compressible: true,
        extensions: ["its"]
      },
      "application/java-archive": {
        source: "apache",
        compressible: false,
        extensions: ["jar", "war", "ear"]
      },
      "application/java-serialized-object": {
        source: "apache",
        compressible: false,
        extensions: ["ser"]
      },
      "application/java-vm": {
        source: "apache",
        compressible: false,
        extensions: ["class"]
      },
      "application/javascript": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["js", "mjs"]
      },
      "application/jf2feed+json": {
        source: "iana",
        compressible: true
      },
      "application/jose": {
        source: "iana"
      },
      "application/jose+json": {
        source: "iana",
        compressible: true
      },
      "application/jrd+json": {
        source: "iana",
        compressible: true
      },
      "application/jscalendar+json": {
        source: "iana",
        compressible: true
      },
      "application/json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["json", "map"]
      },
      "application/json-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/json-seq": {
        source: "iana"
      },
      "application/json5": {
        extensions: ["json5"]
      },
      "application/jsonml+json": {
        source: "apache",
        compressible: true,
        extensions: ["jsonml"]
      },
      "application/jwk+json": {
        source: "iana",
        compressible: true
      },
      "application/jwk-set+json": {
        source: "iana",
        compressible: true
      },
      "application/jwt": {
        source: "iana"
      },
      "application/kpml-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/kpml-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/ld+json": {
        source: "iana",
        compressible: true,
        extensions: ["jsonld"]
      },
      "application/lgr+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lgr"]
      },
      "application/link-format": {
        source: "iana"
      },
      "application/load-control+xml": {
        source: "iana",
        compressible: true
      },
      "application/lost+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lostxml"]
      },
      "application/lostsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/lpf+zip": {
        source: "iana",
        compressible: false
      },
      "application/lxf": {
        source: "iana"
      },
      "application/mac-binhex40": {
        source: "iana",
        extensions: ["hqx"]
      },
      "application/mac-compactpro": {
        source: "apache",
        extensions: ["cpt"]
      },
      "application/macwriteii": {
        source: "iana"
      },
      "application/mads+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mads"]
      },
      "application/manifest+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["webmanifest"]
      },
      "application/marc": {
        source: "iana",
        extensions: ["mrc"]
      },
      "application/marcxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mrcx"]
      },
      "application/mathematica": {
        source: "iana",
        extensions: ["ma", "nb", "mb"]
      },
      "application/mathml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mathml"]
      },
      "application/mathml-content+xml": {
        source: "iana",
        compressible: true
      },
      "application/mathml-presentation+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-associated-procedure-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-deregister+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-envelope+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-protection-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-reception-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-schedule+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-user-service-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbox": {
        source: "iana",
        extensions: ["mbox"]
      },
      "application/media-policy-dataset+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpf"]
      },
      "application/media_control+xml": {
        source: "iana",
        compressible: true
      },
      "application/mediaservercontrol+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mscml"]
      },
      "application/merge-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/metalink+xml": {
        source: "apache",
        compressible: true,
        extensions: ["metalink"]
      },
      "application/metalink4+xml": {
        source: "iana",
        compressible: true,
        extensions: ["meta4"]
      },
      "application/mets+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mets"]
      },
      "application/mf4": {
        source: "iana"
      },
      "application/mikey": {
        source: "iana"
      },
      "application/mipc": {
        source: "iana"
      },
      "application/missing-blocks+cbor-seq": {
        source: "iana"
      },
      "application/mmt-aei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["maei"]
      },
      "application/mmt-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musd"]
      },
      "application/mods+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mods"]
      },
      "application/moss-keys": {
        source: "iana"
      },
      "application/moss-signature": {
        source: "iana"
      },
      "application/mosskey-data": {
        source: "iana"
      },
      "application/mosskey-request": {
        source: "iana"
      },
      "application/mp21": {
        source: "iana",
        extensions: ["m21", "mp21"]
      },
      "application/mp4": {
        source: "iana",
        extensions: ["mp4s", "m4p"]
      },
      "application/mpeg4-generic": {
        source: "iana"
      },
      "application/mpeg4-iod": {
        source: "iana"
      },
      "application/mpeg4-iod-xmt": {
        source: "iana"
      },
      "application/mrb-consumer+xml": {
        source: "iana",
        compressible: true
      },
      "application/mrb-publish+xml": {
        source: "iana",
        compressible: true
      },
      "application/msc-ivr+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msc-mixer+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msword": {
        source: "iana",
        compressible: false,
        extensions: ["doc", "dot"]
      },
      "application/mud+json": {
        source: "iana",
        compressible: true
      },
      "application/multipart-core": {
        source: "iana"
      },
      "application/mxf": {
        source: "iana",
        extensions: ["mxf"]
      },
      "application/n-quads": {
        source: "iana",
        extensions: ["nq"]
      },
      "application/n-triples": {
        source: "iana",
        extensions: ["nt"]
      },
      "application/nasdata": {
        source: "iana"
      },
      "application/news-checkgroups": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-groupinfo": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-transmission": {
        source: "iana"
      },
      "application/nlsml+xml": {
        source: "iana",
        compressible: true
      },
      "application/node": {
        source: "iana",
        extensions: ["cjs"]
      },
      "application/nss": {
        source: "iana"
      },
      "application/oauth-authz-req+jwt": {
        source: "iana"
      },
      "application/oblivious-dns-message": {
        source: "iana"
      },
      "application/ocsp-request": {
        source: "iana"
      },
      "application/ocsp-response": {
        source: "iana"
      },
      "application/octet-stream": {
        source: "iana",
        compressible: false,
        extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
      },
      "application/oda": {
        source: "iana",
        extensions: ["oda"]
      },
      "application/odm+xml": {
        source: "iana",
        compressible: true
      },
      "application/odx": {
        source: "iana"
      },
      "application/oebps-package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["opf"]
      },
      "application/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogx"]
      },
      "application/omdoc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["omdoc"]
      },
      "application/onenote": {
        source: "apache",
        extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
      },
      "application/opc-nodeset+xml": {
        source: "iana",
        compressible: true
      },
      "application/oscore": {
        source: "iana"
      },
      "application/oxps": {
        source: "iana",
        extensions: ["oxps"]
      },
      "application/p21": {
        source: "iana"
      },
      "application/p21+zip": {
        source: "iana",
        compressible: false
      },
      "application/p2p-overlay+xml": {
        source: "iana",
        compressible: true,
        extensions: ["relo"]
      },
      "application/parityfec": {
        source: "iana"
      },
      "application/passport": {
        source: "iana"
      },
      "application/patch-ops-error+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xer"]
      },
      "application/pdf": {
        source: "iana",
        compressible: false,
        extensions: ["pdf"]
      },
      "application/pdx": {
        source: "iana"
      },
      "application/pem-certificate-chain": {
        source: "iana"
      },
      "application/pgp-encrypted": {
        source: "iana",
        compressible: false,
        extensions: ["pgp"]
      },
      "application/pgp-keys": {
        source: "iana",
        extensions: ["asc"]
      },
      "application/pgp-signature": {
        source: "iana",
        extensions: ["asc", "sig"]
      },
      "application/pics-rules": {
        source: "apache",
        extensions: ["prf"]
      },
      "application/pidf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pidf-diff+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pkcs10": {
        source: "iana",
        extensions: ["p10"]
      },
      "application/pkcs12": {
        source: "iana"
      },
      "application/pkcs7-mime": {
        source: "iana",
        extensions: ["p7m", "p7c"]
      },
      "application/pkcs7-signature": {
        source: "iana",
        extensions: ["p7s"]
      },
      "application/pkcs8": {
        source: "iana",
        extensions: ["p8"]
      },
      "application/pkcs8-encrypted": {
        source: "iana"
      },
      "application/pkix-attr-cert": {
        source: "iana",
        extensions: ["ac"]
      },
      "application/pkix-cert": {
        source: "iana",
        extensions: ["cer"]
      },
      "application/pkix-crl": {
        source: "iana",
        extensions: ["crl"]
      },
      "application/pkix-pkipath": {
        source: "iana",
        extensions: ["pkipath"]
      },
      "application/pkixcmp": {
        source: "iana",
        extensions: ["pki"]
      },
      "application/pls+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pls"]
      },
      "application/poc-settings+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/postscript": {
        source: "iana",
        compressible: true,
        extensions: ["ai", "eps", "ps"]
      },
      "application/ppsp-tracker+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+xml": {
        source: "iana",
        compressible: true
      },
      "application/provenance+xml": {
        source: "iana",
        compressible: true,
        extensions: ["provx"]
      },
      "application/prs.alvestrand.titrax-sheet": {
        source: "iana"
      },
      "application/prs.cww": {
        source: "iana",
        extensions: ["cww"]
      },
      "application/prs.cyn": {
        source: "iana",
        charset: "7-BIT"
      },
      "application/prs.hpub+zip": {
        source: "iana",
        compressible: false
      },
      "application/prs.nprend": {
        source: "iana"
      },
      "application/prs.plucker": {
        source: "iana"
      },
      "application/prs.rdf-xml-crypt": {
        source: "iana"
      },
      "application/prs.xsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/pskc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pskcxml"]
      },
      "application/pvd+json": {
        source: "iana",
        compressible: true
      },
      "application/qsig": {
        source: "iana"
      },
      "application/raml+yaml": {
        compressible: true,
        extensions: ["raml"]
      },
      "application/raptorfec": {
        source: "iana"
      },
      "application/rdap+json": {
        source: "iana",
        compressible: true
      },
      "application/rdf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rdf", "owl"]
      },
      "application/reginfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rif"]
      },
      "application/relax-ng-compact-syntax": {
        source: "iana",
        extensions: ["rnc"]
      },
      "application/remote-printing": {
        source: "iana"
      },
      "application/reputon+json": {
        source: "iana",
        compressible: true
      },
      "application/resource-lists+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rl"]
      },
      "application/resource-lists-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rld"]
      },
      "application/rfc+xml": {
        source: "iana",
        compressible: true
      },
      "application/riscos": {
        source: "iana"
      },
      "application/rlmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/rls-services+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rs"]
      },
      "application/route-apd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rapd"]
      },
      "application/route-s-tsid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sls"]
      },
      "application/route-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rusd"]
      },
      "application/rpki-ghostbusters": {
        source: "iana",
        extensions: ["gbr"]
      },
      "application/rpki-manifest": {
        source: "iana",
        extensions: ["mft"]
      },
      "application/rpki-publication": {
        source: "iana"
      },
      "application/rpki-roa": {
        source: "iana",
        extensions: ["roa"]
      },
      "application/rpki-updown": {
        source: "iana"
      },
      "application/rsd+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rsd"]
      },
      "application/rss+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rss"]
      },
      "application/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "application/rtploopback": {
        source: "iana"
      },
      "application/rtx": {
        source: "iana"
      },
      "application/samlassertion+xml": {
        source: "iana",
        compressible: true
      },
      "application/samlmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/sarif+json": {
        source: "iana",
        compressible: true
      },
      "application/sarif-external-properties+json": {
        source: "iana",
        compressible: true
      },
      "application/sbe": {
        source: "iana"
      },
      "application/sbml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sbml"]
      },
      "application/scaip+xml": {
        source: "iana",
        compressible: true
      },
      "application/scim+json": {
        source: "iana",
        compressible: true
      },
      "application/scvp-cv-request": {
        source: "iana",
        extensions: ["scq"]
      },
      "application/scvp-cv-response": {
        source: "iana",
        extensions: ["scs"]
      },
      "application/scvp-vp-request": {
        source: "iana",
        extensions: ["spq"]
      },
      "application/scvp-vp-response": {
        source: "iana",
        extensions: ["spp"]
      },
      "application/sdp": {
        source: "iana",
        extensions: ["sdp"]
      },
      "application/secevent+jwt": {
        source: "iana"
      },
      "application/senml+cbor": {
        source: "iana"
      },
      "application/senml+json": {
        source: "iana",
        compressible: true
      },
      "application/senml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["senmlx"]
      },
      "application/senml-etch+cbor": {
        source: "iana"
      },
      "application/senml-etch+json": {
        source: "iana",
        compressible: true
      },
      "application/senml-exi": {
        source: "iana"
      },
      "application/sensml+cbor": {
        source: "iana"
      },
      "application/sensml+json": {
        source: "iana",
        compressible: true
      },
      "application/sensml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sensmlx"]
      },
      "application/sensml-exi": {
        source: "iana"
      },
      "application/sep+xml": {
        source: "iana",
        compressible: true
      },
      "application/sep-exi": {
        source: "iana"
      },
      "application/session-info": {
        source: "iana"
      },
      "application/set-payment": {
        source: "iana"
      },
      "application/set-payment-initiation": {
        source: "iana",
        extensions: ["setpay"]
      },
      "application/set-registration": {
        source: "iana"
      },
      "application/set-registration-initiation": {
        source: "iana",
        extensions: ["setreg"]
      },
      "application/sgml": {
        source: "iana"
      },
      "application/sgml-open-catalog": {
        source: "iana"
      },
      "application/shf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["shf"]
      },
      "application/sieve": {
        source: "iana",
        extensions: ["siv", "sieve"]
      },
      "application/simple-filter+xml": {
        source: "iana",
        compressible: true
      },
      "application/simple-message-summary": {
        source: "iana"
      },
      "application/simplesymbolcontainer": {
        source: "iana"
      },
      "application/sipc": {
        source: "iana"
      },
      "application/slate": {
        source: "iana"
      },
      "application/smil": {
        source: "iana"
      },
      "application/smil+xml": {
        source: "iana",
        compressible: true,
        extensions: ["smi", "smil"]
      },
      "application/smpte336m": {
        source: "iana"
      },
      "application/soap+fastinfoset": {
        source: "iana"
      },
      "application/soap+xml": {
        source: "iana",
        compressible: true
      },
      "application/sparql-query": {
        source: "iana",
        extensions: ["rq"]
      },
      "application/sparql-results+xml": {
        source: "iana",
        compressible: true,
        extensions: ["srx"]
      },
      "application/spdx+json": {
        source: "iana",
        compressible: true
      },
      "application/spirits-event+xml": {
        source: "iana",
        compressible: true
      },
      "application/sql": {
        source: "iana"
      },
      "application/srgs": {
        source: "iana",
        extensions: ["gram"]
      },
      "application/srgs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["grxml"]
      },
      "application/sru+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sru"]
      },
      "application/ssdl+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ssdl"]
      },
      "application/ssml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ssml"]
      },
      "application/stix+json": {
        source: "iana",
        compressible: true
      },
      "application/swid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["swidtag"]
      },
      "application/tamp-apex-update": {
        source: "iana"
      },
      "application/tamp-apex-update-confirm": {
        source: "iana"
      },
      "application/tamp-community-update": {
        source: "iana"
      },
      "application/tamp-community-update-confirm": {
        source: "iana"
      },
      "application/tamp-error": {
        source: "iana"
      },
      "application/tamp-sequence-adjust": {
        source: "iana"
      },
      "application/tamp-sequence-adjust-confirm": {
        source: "iana"
      },
      "application/tamp-status-query": {
        source: "iana"
      },
      "application/tamp-status-response": {
        source: "iana"
      },
      "application/tamp-update": {
        source: "iana"
      },
      "application/tamp-update-confirm": {
        source: "iana"
      },
      "application/tar": {
        compressible: true
      },
      "application/taxii+json": {
        source: "iana",
        compressible: true
      },
      "application/td+json": {
        source: "iana",
        compressible: true
      },
      "application/tei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tei", "teicorpus"]
      },
      "application/tetra_isi": {
        source: "iana"
      },
      "application/thraud+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tfi"]
      },
      "application/timestamp-query": {
        source: "iana"
      },
      "application/timestamp-reply": {
        source: "iana"
      },
      "application/timestamped-data": {
        source: "iana",
        extensions: ["tsd"]
      },
      "application/tlsrpt+gzip": {
        source: "iana"
      },
      "application/tlsrpt+json": {
        source: "iana",
        compressible: true
      },
      "application/tnauthlist": {
        source: "iana"
      },
      "application/token-introspection+jwt": {
        source: "iana"
      },
      "application/toml": {
        compressible: true,
        extensions: ["toml"]
      },
      "application/trickle-ice-sdpfrag": {
        source: "iana"
      },
      "application/trig": {
        source: "iana",
        extensions: ["trig"]
      },
      "application/ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ttml"]
      },
      "application/tve-trigger": {
        source: "iana"
      },
      "application/tzif": {
        source: "iana"
      },
      "application/tzif-leap": {
        source: "iana"
      },
      "application/ubjson": {
        compressible: false,
        extensions: ["ubj"]
      },
      "application/ulpfec": {
        source: "iana"
      },
      "application/urc-grpsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/urc-ressheet+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsheet"]
      },
      "application/urc-targetdesc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["td"]
      },
      "application/urc-uisocketdesc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vcard+json": {
        source: "iana",
        compressible: true
      },
      "application/vcard+xml": {
        source: "iana",
        compressible: true
      },
      "application/vemmi": {
        source: "iana"
      },
      "application/vividence.scriptfile": {
        source: "apache"
      },
      "application/vnd.1000minds.decision-model+xml": {
        source: "iana",
        compressible: true,
        extensions: ["1km"]
      },
      "application/vnd.3gpp-prose+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-prose-pc3ch+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-v2x-local-service-information": {
        source: "iana"
      },
      "application/vnd.3gpp.5gnas": {
        source: "iana"
      },
      "application/vnd.3gpp.access-transfer-events+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.bsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gmop+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gtpc": {
        source: "iana"
      },
      "application/vnd.3gpp.interworking-data": {
        source: "iana"
      },
      "application/vnd.3gpp.lpp": {
        source: "iana"
      },
      "application/vnd.3gpp.mc-signalling-ear": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-payload": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-signalling": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-floor-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-signed+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-init-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-transmission-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mid-call+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ngap": {
        source: "iana"
      },
      "application/vnd.3gpp.pfcp": {
        source: "iana"
      },
      "application/vnd.3gpp.pic-bw-large": {
        source: "iana",
        extensions: ["plb"]
      },
      "application/vnd.3gpp.pic-bw-small": {
        source: "iana",
        extensions: ["psb"]
      },
      "application/vnd.3gpp.pic-bw-var": {
        source: "iana",
        extensions: ["pvb"]
      },
      "application/vnd.3gpp.s1ap": {
        source: "iana"
      },
      "application/vnd.3gpp.sms": {
        source: "iana"
      },
      "application/vnd.3gpp.sms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-ext+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.state-and-event-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ussd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.bcmcsinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.sms": {
        source: "iana"
      },
      "application/vnd.3gpp2.tcap": {
        source: "iana",
        extensions: ["tcap"]
      },
      "application/vnd.3lightssoftware.imagescal": {
        source: "iana"
      },
      "application/vnd.3m.post-it-notes": {
        source: "iana",
        extensions: ["pwn"]
      },
      "application/vnd.accpac.simply.aso": {
        source: "iana",
        extensions: ["aso"]
      },
      "application/vnd.accpac.simply.imp": {
        source: "iana",
        extensions: ["imp"]
      },
      "application/vnd.acucobol": {
        source: "iana",
        extensions: ["acu"]
      },
      "application/vnd.acucorp": {
        source: "iana",
        extensions: ["atc", "acutc"]
      },
      "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: false,
        extensions: ["air"]
      },
      "application/vnd.adobe.flash.movie": {
        source: "iana"
      },
      "application/vnd.adobe.formscentral.fcdt": {
        source: "iana",
        extensions: ["fcdt"]
      },
      "application/vnd.adobe.fxp": {
        source: "iana",
        extensions: ["fxp", "fxpl"]
      },
      "application/vnd.adobe.partial-upload": {
        source: "iana"
      },
      "application/vnd.adobe.xdp+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdp"]
      },
      "application/vnd.adobe.xfdf": {
        source: "iana",
        extensions: ["xfdf"]
      },
      "application/vnd.aether.imp": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata-pagedef": {
        source: "iana"
      },
      "application/vnd.afpc.cmoca-cmresource": {
        source: "iana"
      },
      "application/vnd.afpc.foca-charset": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codedfont": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codepage": {
        source: "iana"
      },
      "application/vnd.afpc.modca": {
        source: "iana"
      },
      "application/vnd.afpc.modca-cmtable": {
        source: "iana"
      },
      "application/vnd.afpc.modca-formdef": {
        source: "iana"
      },
      "application/vnd.afpc.modca-mediummap": {
        source: "iana"
      },
      "application/vnd.afpc.modca-objectcontainer": {
        source: "iana"
      },
      "application/vnd.afpc.modca-overlay": {
        source: "iana"
      },
      "application/vnd.afpc.modca-pagesegment": {
        source: "iana"
      },
      "application/vnd.age": {
        source: "iana",
        extensions: ["age"]
      },
      "application/vnd.ah-barcode": {
        source: "iana"
      },
      "application/vnd.ahead.space": {
        source: "iana",
        extensions: ["ahead"]
      },
      "application/vnd.airzip.filesecure.azf": {
        source: "iana",
        extensions: ["azf"]
      },
      "application/vnd.airzip.filesecure.azs": {
        source: "iana",
        extensions: ["azs"]
      },
      "application/vnd.amadeus+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.amazon.ebook": {
        source: "apache",
        extensions: ["azw"]
      },
      "application/vnd.amazon.mobi8-ebook": {
        source: "iana"
      },
      "application/vnd.americandynamics.acc": {
        source: "iana",
        extensions: ["acc"]
      },
      "application/vnd.amiga.ami": {
        source: "iana",
        extensions: ["ami"]
      },
      "application/vnd.amundsen.maze+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.android.ota": {
        source: "iana"
      },
      "application/vnd.android.package-archive": {
        source: "apache",
        compressible: false,
        extensions: ["apk"]
      },
      "application/vnd.anki": {
        source: "iana"
      },
      "application/vnd.anser-web-certificate-issue-initiation": {
        source: "iana",
        extensions: ["cii"]
      },
      "application/vnd.anser-web-funds-transfer-initiation": {
        source: "apache",
        extensions: ["fti"]
      },
      "application/vnd.antix.game-component": {
        source: "iana",
        extensions: ["atx"]
      },
      "application/vnd.apache.arrow.file": {
        source: "iana"
      },
      "application/vnd.apache.arrow.stream": {
        source: "iana"
      },
      "application/vnd.apache.thrift.binary": {
        source: "iana"
      },
      "application/vnd.apache.thrift.compact": {
        source: "iana"
      },
      "application/vnd.apache.thrift.json": {
        source: "iana"
      },
      "application/vnd.api+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.aplextor.warrp+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apothekende.reservation+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apple.installer+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpkg"]
      },
      "application/vnd.apple.keynote": {
        source: "iana",
        extensions: ["key"]
      },
      "application/vnd.apple.mpegurl": {
        source: "iana",
        extensions: ["m3u8"]
      },
      "application/vnd.apple.numbers": {
        source: "iana",
        extensions: ["numbers"]
      },
      "application/vnd.apple.pages": {
        source: "iana",
        extensions: ["pages"]
      },
      "application/vnd.apple.pkpass": {
        compressible: false,
        extensions: ["pkpass"]
      },
      "application/vnd.arastra.swi": {
        source: "iana"
      },
      "application/vnd.aristanetworks.swi": {
        source: "iana",
        extensions: ["swi"]
      },
      "application/vnd.artisan+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.artsquare": {
        source: "iana"
      },
      "application/vnd.astraea-software.iota": {
        source: "iana",
        extensions: ["iota"]
      },
      "application/vnd.audiograph": {
        source: "iana",
        extensions: ["aep"]
      },
      "application/vnd.autopackage": {
        source: "iana"
      },
      "application/vnd.avalon+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.avistar+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.balsamiq.bmml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["bmml"]
      },
      "application/vnd.balsamiq.bmpr": {
        source: "iana"
      },
      "application/vnd.banana-accounting": {
        source: "iana"
      },
      "application/vnd.bbf.usp.error": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bekitzur-stech+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bint.med-content": {
        source: "iana"
      },
      "application/vnd.biopax.rdf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.blink-idb-value-wrapper": {
        source: "iana"
      },
      "application/vnd.blueice.multipass": {
        source: "iana",
        extensions: ["mpm"]
      },
      "application/vnd.bluetooth.ep.oob": {
        source: "iana"
      },
      "application/vnd.bluetooth.le.oob": {
        source: "iana"
      },
      "application/vnd.bmi": {
        source: "iana",
        extensions: ["bmi"]
      },
      "application/vnd.bpf": {
        source: "iana"
      },
      "application/vnd.bpf3": {
        source: "iana"
      },
      "application/vnd.businessobjects": {
        source: "iana",
        extensions: ["rep"]
      },
      "application/vnd.byu.uapi+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cab-jscript": {
        source: "iana"
      },
      "application/vnd.canon-cpdl": {
        source: "iana"
      },
      "application/vnd.canon-lips": {
        source: "iana"
      },
      "application/vnd.capasystems-pg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cendio.thinlinc.clientconf": {
        source: "iana"
      },
      "application/vnd.century-systems.tcp_stream": {
        source: "iana"
      },
      "application/vnd.chemdraw+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdxml"]
      },
      "application/vnd.chess-pgn": {
        source: "iana"
      },
      "application/vnd.chipnuts.karaoke-mmd": {
        source: "iana",
        extensions: ["mmd"]
      },
      "application/vnd.ciedi": {
        source: "iana"
      },
      "application/vnd.cinderella": {
        source: "iana",
        extensions: ["cdy"]
      },
      "application/vnd.cirpack.isdn-ext": {
        source: "iana"
      },
      "application/vnd.citationstyles.style+xml": {
        source: "iana",
        compressible: true,
        extensions: ["csl"]
      },
      "application/vnd.claymore": {
        source: "iana",
        extensions: ["cla"]
      },
      "application/vnd.cloanto.rp9": {
        source: "iana",
        extensions: ["rp9"]
      },
      "application/vnd.clonk.c4group": {
        source: "iana",
        extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
      },
      "application/vnd.cluetrust.cartomobile-config": {
        source: "iana",
        extensions: ["c11amc"]
      },
      "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: "iana",
        extensions: ["c11amz"]
      },
      "application/vnd.coffeescript": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet-template": {
        source: "iana"
      },
      "application/vnd.collection+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.doc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.next+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.comicbook+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.comicbook-rar": {
        source: "iana"
      },
      "application/vnd.commerce-battelle": {
        source: "iana"
      },
      "application/vnd.commonspace": {
        source: "iana",
        extensions: ["csp"]
      },
      "application/vnd.contact.cmsg": {
        source: "iana",
        extensions: ["cdbcmsg"]
      },
      "application/vnd.coreos.ignition+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cosmocaller": {
        source: "iana",
        extensions: ["cmc"]
      },
      "application/vnd.crick.clicker": {
        source: "iana",
        extensions: ["clkx"]
      },
      "application/vnd.crick.clicker.keyboard": {
        source: "iana",
        extensions: ["clkk"]
      },
      "application/vnd.crick.clicker.palette": {
        source: "iana",
        extensions: ["clkp"]
      },
      "application/vnd.crick.clicker.template": {
        source: "iana",
        extensions: ["clkt"]
      },
      "application/vnd.crick.clicker.wordbank": {
        source: "iana",
        extensions: ["clkw"]
      },
      "application/vnd.criticaltools.wbs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wbs"]
      },
      "application/vnd.cryptii.pipe+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.crypto-shade-file": {
        source: "iana"
      },
      "application/vnd.cryptomator.encrypted": {
        source: "iana"
      },
      "application/vnd.cryptomator.vault": {
        source: "iana"
      },
      "application/vnd.ctc-posml": {
        source: "iana",
        extensions: ["pml"]
      },
      "application/vnd.ctct.ws+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cups-pdf": {
        source: "iana"
      },
      "application/vnd.cups-postscript": {
        source: "iana"
      },
      "application/vnd.cups-ppd": {
        source: "iana",
        extensions: ["ppd"]
      },
      "application/vnd.cups-raster": {
        source: "iana"
      },
      "application/vnd.cups-raw": {
        source: "iana"
      },
      "application/vnd.curl": {
        source: "iana"
      },
      "application/vnd.curl.car": {
        source: "apache",
        extensions: ["car"]
      },
      "application/vnd.curl.pcurl": {
        source: "apache",
        extensions: ["pcurl"]
      },
      "application/vnd.cyan.dean.root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cybank": {
        source: "iana"
      },
      "application/vnd.cyclonedx+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cyclonedx+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.d2l.coursepackage1p0+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.d3m-dataset": {
        source: "iana"
      },
      "application/vnd.d3m-problem": {
        source: "iana"
      },
      "application/vnd.dart": {
        source: "iana",
        compressible: true,
        extensions: ["dart"]
      },
      "application/vnd.data-vision.rdz": {
        source: "iana",
        extensions: ["rdz"]
      },
      "application/vnd.datapackage+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dataresource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dbf": {
        source: "iana",
        extensions: ["dbf"]
      },
      "application/vnd.debian.binary-package": {
        source: "iana"
      },
      "application/vnd.dece.data": {
        source: "iana",
        extensions: ["uvf", "uvvf", "uvd", "uvvd"]
      },
      "application/vnd.dece.ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uvt", "uvvt"]
      },
      "application/vnd.dece.unspecified": {
        source: "iana",
        extensions: ["uvx", "uvvx"]
      },
      "application/vnd.dece.zip": {
        source: "iana",
        extensions: ["uvz", "uvvz"]
      },
      "application/vnd.denovo.fcselayout-link": {
        source: "iana",
        extensions: ["fe_launch"]
      },
      "application/vnd.desmume.movie": {
        source: "iana"
      },
      "application/vnd.dir-bi.plate-dl-nosuffix": {
        source: "iana"
      },
      "application/vnd.dm.delegation+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dna": {
        source: "iana",
        extensions: ["dna"]
      },
      "application/vnd.document+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dolby.mlp": {
        source: "apache",
        extensions: ["mlp"]
      },
      "application/vnd.dolby.mobile.1": {
        source: "iana"
      },
      "application/vnd.dolby.mobile.2": {
        source: "iana"
      },
      "application/vnd.doremir.scorecloud-binary-document": {
        source: "iana"
      },
      "application/vnd.dpgraph": {
        source: "iana",
        extensions: ["dpg"]
      },
      "application/vnd.dreamfactory": {
        source: "iana",
        extensions: ["dfac"]
      },
      "application/vnd.drive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ds-keypoint": {
        source: "apache",
        extensions: ["kpxx"]
      },
      "application/vnd.dtg.local": {
        source: "iana"
      },
      "application/vnd.dtg.local.flash": {
        source: "iana"
      },
      "application/vnd.dtg.local.html": {
        source: "iana"
      },
      "application/vnd.dvb.ait": {
        source: "iana",
        extensions: ["ait"]
      },
      "application/vnd.dvb.dvbisl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.dvbj": {
        source: "iana"
      },
      "application/vnd.dvb.esgcontainer": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcdftnotifaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess2": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgpdd": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcroaming": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-base": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-enhancement": {
        source: "iana"
      },
      "application/vnd.dvb.notif-aggregate-root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-container+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-generic+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-msglist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-init+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.pfr": {
        source: "iana"
      },
      "application/vnd.dvb.service": {
        source: "iana",
        extensions: ["svc"]
      },
      "application/vnd.dxr": {
        source: "iana"
      },
      "application/vnd.dynageo": {
        source: "iana",
        extensions: ["geo"]
      },
      "application/vnd.dzr": {
        source: "iana"
      },
      "application/vnd.easykaraoke.cdgdownload": {
        source: "iana"
      },
      "application/vnd.ecdis-update": {
        source: "iana"
      },
      "application/vnd.ecip.rlp": {
        source: "iana"
      },
      "application/vnd.eclipse.ditto+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ecowin.chart": {
        source: "iana",
        extensions: ["mag"]
      },
      "application/vnd.ecowin.filerequest": {
        source: "iana"
      },
      "application/vnd.ecowin.fileupdate": {
        source: "iana"
      },
      "application/vnd.ecowin.series": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesrequest": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesupdate": {
        source: "iana"
      },
      "application/vnd.efi.img": {
        source: "iana"
      },
      "application/vnd.efi.iso": {
        source: "iana"
      },
      "application/vnd.emclient.accessrequest+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.enliven": {
        source: "iana",
        extensions: ["nml"]
      },
      "application/vnd.enphase.envoy": {
        source: "iana"
      },
      "application/vnd.eprints.data+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.epson.esf": {
        source: "iana",
        extensions: ["esf"]
      },
      "application/vnd.epson.msf": {
        source: "iana",
        extensions: ["msf"]
      },
      "application/vnd.epson.quickanime": {
        source: "iana",
        extensions: ["qam"]
      },
      "application/vnd.epson.salt": {
        source: "iana",
        extensions: ["slt"]
      },
      "application/vnd.epson.ssf": {
        source: "iana",
        extensions: ["ssf"]
      },
      "application/vnd.ericsson.quickcall": {
        source: "iana"
      },
      "application/vnd.espass-espass+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.eszigno3+xml": {
        source: "iana",
        compressible: true,
        extensions: ["es3", "et3"]
      },
      "application/vnd.etsi.aoc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.asic-e+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.asic-s+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.cug+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvcommand+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-bc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-cod+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-npvr+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvservice+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mcid+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mheg5": {
        source: "iana"
      },
      "application/vnd.etsi.overload-control-policy-dataset+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.pstn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.sci+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.simservs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.timestamp-token": {
        source: "iana"
      },
      "application/vnd.etsi.tsl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.tsl.der": {
        source: "iana"
      },
      "application/vnd.eu.kasparian.car+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.eudora.data": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.profile": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.settings": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.theme": {
        source: "iana"
      },
      "application/vnd.exstream-empower+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.exstream-package": {
        source: "iana"
      },
      "application/vnd.ezpix-album": {
        source: "iana",
        extensions: ["ez2"]
      },
      "application/vnd.ezpix-package": {
        source: "iana",
        extensions: ["ez3"]
      },
      "application/vnd.f-secure.mobile": {
        source: "iana"
      },
      "application/vnd.familysearch.gedcom+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.fastcopy-disk-image": {
        source: "iana"
      },
      "application/vnd.fdf": {
        source: "iana",
        extensions: ["fdf"]
      },
      "application/vnd.fdsn.mseed": {
        source: "iana",
        extensions: ["mseed"]
      },
      "application/vnd.fdsn.seed": {
        source: "iana",
        extensions: ["seed", "dataless"]
      },
      "application/vnd.ffsns": {
        source: "iana"
      },
      "application/vnd.ficlab.flb+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.filmit.zfc": {
        source: "iana"
      },
      "application/vnd.fints": {
        source: "iana"
      },
      "application/vnd.firemonkeys.cloudcell": {
        source: "iana"
      },
      "application/vnd.flographit": {
        source: "iana",
        extensions: ["gph"]
      },
      "application/vnd.fluxtime.clip": {
        source: "iana",
        extensions: ["ftc"]
      },
      "application/vnd.font-fontforge-sfd": {
        source: "iana"
      },
      "application/vnd.framemaker": {
        source: "iana",
        extensions: ["fm", "frame", "maker", "book"]
      },
      "application/vnd.frogans.fnc": {
        source: "iana",
        extensions: ["fnc"]
      },
      "application/vnd.frogans.ltf": {
        source: "iana",
        extensions: ["ltf"]
      },
      "application/vnd.fsc.weblaunch": {
        source: "iana",
        extensions: ["fsc"]
      },
      "application/vnd.fujifilm.fb.docuworks": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.binder": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.jfi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fujitsu.oasys": {
        source: "iana",
        extensions: ["oas"]
      },
      "application/vnd.fujitsu.oasys2": {
        source: "iana",
        extensions: ["oa2"]
      },
      "application/vnd.fujitsu.oasys3": {
        source: "iana",
        extensions: ["oa3"]
      },
      "application/vnd.fujitsu.oasysgp": {
        source: "iana",
        extensions: ["fg5"]
      },
      "application/vnd.fujitsu.oasysprs": {
        source: "iana",
        extensions: ["bh2"]
      },
      "application/vnd.fujixerox.art-ex": {
        source: "iana"
      },
      "application/vnd.fujixerox.art4": {
        source: "iana"
      },
      "application/vnd.fujixerox.ddd": {
        source: "iana",
        extensions: ["ddd"]
      },
      "application/vnd.fujixerox.docuworks": {
        source: "iana",
        extensions: ["xdw"]
      },
      "application/vnd.fujixerox.docuworks.binder": {
        source: "iana",
        extensions: ["xbd"]
      },
      "application/vnd.fujixerox.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujixerox.hbpl": {
        source: "iana"
      },
      "application/vnd.fut-misnet": {
        source: "iana"
      },
      "application/vnd.futoin+cbor": {
        source: "iana"
      },
      "application/vnd.futoin+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fuzzysheet": {
        source: "iana",
        extensions: ["fzs"]
      },
      "application/vnd.genomatix.tuxedo": {
        source: "iana",
        extensions: ["txd"]
      },
      "application/vnd.gentics.grd+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geo+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geocube+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geogebra.file": {
        source: "iana",
        extensions: ["ggb"]
      },
      "application/vnd.geogebra.slides": {
        source: "iana"
      },
      "application/vnd.geogebra.tool": {
        source: "iana",
        extensions: ["ggt"]
      },
      "application/vnd.geometry-explorer": {
        source: "iana",
        extensions: ["gex", "gre"]
      },
      "application/vnd.geonext": {
        source: "iana",
        extensions: ["gxt"]
      },
      "application/vnd.geoplan": {
        source: "iana",
        extensions: ["g2w"]
      },
      "application/vnd.geospace": {
        source: "iana",
        extensions: ["g3w"]
      },
      "application/vnd.gerber": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt-response": {
        source: "iana"
      },
      "application/vnd.gmx": {
        source: "iana",
        extensions: ["gmx"]
      },
      "application/vnd.google-apps.document": {
        compressible: false,
        extensions: ["gdoc"]
      },
      "application/vnd.google-apps.presentation": {
        compressible: false,
        extensions: ["gslides"]
      },
      "application/vnd.google-apps.spreadsheet": {
        compressible: false,
        extensions: ["gsheet"]
      },
      "application/vnd.google-earth.kml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["kml"]
      },
      "application/vnd.google-earth.kmz": {
        source: "iana",
        compressible: false,
        extensions: ["kmz"]
      },
      "application/vnd.gov.sk.e-form+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.gov.sk.e-form+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.gov.sk.xmldatacontainer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.grafeq": {
        source: "iana",
        extensions: ["gqf", "gqs"]
      },
      "application/vnd.gridmp": {
        source: "iana"
      },
      "application/vnd.groove-account": {
        source: "iana",
        extensions: ["gac"]
      },
      "application/vnd.groove-help": {
        source: "iana",
        extensions: ["ghf"]
      },
      "application/vnd.groove-identity-message": {
        source: "iana",
        extensions: ["gim"]
      },
      "application/vnd.groove-injector": {
        source: "iana",
        extensions: ["grv"]
      },
      "application/vnd.groove-tool-message": {
        source: "iana",
        extensions: ["gtm"]
      },
      "application/vnd.groove-tool-template": {
        source: "iana",
        extensions: ["tpl"]
      },
      "application/vnd.groove-vcard": {
        source: "iana",
        extensions: ["vcg"]
      },
      "application/vnd.hal+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hal+xml": {
        source: "iana",
        compressible: true,
        extensions: ["hal"]
      },
      "application/vnd.handheld-entertainment+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zmm"]
      },
      "application/vnd.hbci": {
        source: "iana",
        extensions: ["hbci"]
      },
      "application/vnd.hc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hcl-bireports": {
        source: "iana"
      },
      "application/vnd.hdt": {
        source: "iana"
      },
      "application/vnd.heroku+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hhe.lesson-player": {
        source: "iana",
        extensions: ["les"]
      },
      "application/vnd.hl7cda+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.hl7v2+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.hp-hpgl": {
        source: "iana",
        extensions: ["hpgl"]
      },
      "application/vnd.hp-hpid": {
        source: "iana",
        extensions: ["hpid"]
      },
      "application/vnd.hp-hps": {
        source: "iana",
        extensions: ["hps"]
      },
      "application/vnd.hp-jlyt": {
        source: "iana",
        extensions: ["jlt"]
      },
      "application/vnd.hp-pcl": {
        source: "iana",
        extensions: ["pcl"]
      },
      "application/vnd.hp-pclxl": {
        source: "iana",
        extensions: ["pclxl"]
      },
      "application/vnd.httphone": {
        source: "iana"
      },
      "application/vnd.hydrostatix.sof-data": {
        source: "iana",
        extensions: ["sfd-hdstx"]
      },
      "application/vnd.hyper+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyper-item+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyperdrive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hzn-3d-crossword": {
        source: "iana"
      },
      "application/vnd.ibm.afplinedata": {
        source: "iana"
      },
      "application/vnd.ibm.electronic-media": {
        source: "iana"
      },
      "application/vnd.ibm.minipay": {
        source: "iana",
        extensions: ["mpy"]
      },
      "application/vnd.ibm.modcap": {
        source: "iana",
        extensions: ["afp", "listafp", "list3820"]
      },
      "application/vnd.ibm.rights-management": {
        source: "iana",
        extensions: ["irm"]
      },
      "application/vnd.ibm.secure-container": {
        source: "iana",
        extensions: ["sc"]
      },
      "application/vnd.iccprofile": {
        source: "iana",
        extensions: ["icc", "icm"]
      },
      "application/vnd.ieee.1905": {
        source: "iana"
      },
      "application/vnd.igloader": {
        source: "iana",
        extensions: ["igl"]
      },
      "application/vnd.imagemeter.folder+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.imagemeter.image+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.immervision-ivp": {
        source: "iana",
        extensions: ["ivp"]
      },
      "application/vnd.immervision-ivu": {
        source: "iana",
        extensions: ["ivu"]
      },
      "application/vnd.ims.imsccv1p1": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p2": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p3": {
        source: "iana"
      },
      "application/vnd.ims.lis.v2.result+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy.id+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informedcontrol.rms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informix-visionary": {
        source: "iana"
      },
      "application/vnd.infotech.project": {
        source: "iana"
      },
      "application/vnd.infotech.project+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.innopath.wamp.notification": {
        source: "iana"
      },
      "application/vnd.insors.igm": {
        source: "iana",
        extensions: ["igm"]
      },
      "application/vnd.intercon.formnet": {
        source: "iana",
        extensions: ["xpw", "xpx"]
      },
      "application/vnd.intergeo": {
        source: "iana",
        extensions: ["i2g"]
      },
      "application/vnd.intertrust.digibox": {
        source: "iana"
      },
      "application/vnd.intertrust.nncp": {
        source: "iana"
      },
      "application/vnd.intu.qbo": {
        source: "iana",
        extensions: ["qbo"]
      },
      "application/vnd.intu.qfx": {
        source: "iana",
        extensions: ["qfx"]
      },
      "application/vnd.iptc.g2.catalogitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.conceptitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.knowledgeitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.packageitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.planningitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ipunplugged.rcprofile": {
        source: "iana",
        extensions: ["rcprofile"]
      },
      "application/vnd.irepository.package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["irp"]
      },
      "application/vnd.is-xpr": {
        source: "iana",
        extensions: ["xpr"]
      },
      "application/vnd.isac.fcs": {
        source: "iana",
        extensions: ["fcs"]
      },
      "application/vnd.iso11783-10+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.jam": {
        source: "iana",
        extensions: ["jam"]
      },
      "application/vnd.japannet-directory-service": {
        source: "iana"
      },
      "application/vnd.japannet-jpnstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-payment-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-registration": {
        source: "iana"
      },
      "application/vnd.japannet-registration-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-setstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-verification": {
        source: "iana"
      },
      "application/vnd.japannet-verification-wakeup": {
        source: "iana"
      },
      "application/vnd.jcp.javame.midlet-rms": {
        source: "iana",
        extensions: ["rms"]
      },
      "application/vnd.jisp": {
        source: "iana",
        extensions: ["jisp"]
      },
      "application/vnd.joost.joda-archive": {
        source: "iana",
        extensions: ["joda"]
      },
      "application/vnd.jsk.isdn-ngn": {
        source: "iana"
      },
      "application/vnd.kahootz": {
        source: "iana",
        extensions: ["ktz", "ktr"]
      },
      "application/vnd.kde.karbon": {
        source: "iana",
        extensions: ["karbon"]
      },
      "application/vnd.kde.kchart": {
        source: "iana",
        extensions: ["chrt"]
      },
      "application/vnd.kde.kformula": {
        source: "iana",
        extensions: ["kfo"]
      },
      "application/vnd.kde.kivio": {
        source: "iana",
        extensions: ["flw"]
      },
      "application/vnd.kde.kontour": {
        source: "iana",
        extensions: ["kon"]
      },
      "application/vnd.kde.kpresenter": {
        source: "iana",
        extensions: ["kpr", "kpt"]
      },
      "application/vnd.kde.kspread": {
        source: "iana",
        extensions: ["ksp"]
      },
      "application/vnd.kde.kword": {
        source: "iana",
        extensions: ["kwd", "kwt"]
      },
      "application/vnd.kenameaapp": {
        source: "iana",
        extensions: ["htke"]
      },
      "application/vnd.kidspiration": {
        source: "iana",
        extensions: ["kia"]
      },
      "application/vnd.kinar": {
        source: "iana",
        extensions: ["kne", "knp"]
      },
      "application/vnd.koan": {
        source: "iana",
        extensions: ["skp", "skd", "skt", "skm"]
      },
      "application/vnd.kodak-descriptor": {
        source: "iana",
        extensions: ["sse"]
      },
      "application/vnd.las": {
        source: "iana"
      },
      "application/vnd.las.las+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.las.las+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lasxml"]
      },
      "application/vnd.laszip": {
        source: "iana"
      },
      "application/vnd.leap+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.liberty-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.llamagraphics.life-balance.desktop": {
        source: "iana",
        extensions: ["lbd"]
      },
      "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lbe"]
      },
      "application/vnd.logipipe.circuit+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.loom": {
        source: "iana"
      },
      "application/vnd.lotus-1-2-3": {
        source: "iana",
        extensions: ["123"]
      },
      "application/vnd.lotus-approach": {
        source: "iana",
        extensions: ["apr"]
      },
      "application/vnd.lotus-freelance": {
        source: "iana",
        extensions: ["pre"]
      },
      "application/vnd.lotus-notes": {
        source: "iana",
        extensions: ["nsf"]
      },
      "application/vnd.lotus-organizer": {
        source: "iana",
        extensions: ["org"]
      },
      "application/vnd.lotus-screencam": {
        source: "iana",
        extensions: ["scm"]
      },
      "application/vnd.lotus-wordpro": {
        source: "iana",
        extensions: ["lwp"]
      },
      "application/vnd.macports.portpkg": {
        source: "iana",
        extensions: ["portpkg"]
      },
      "application/vnd.mapbox-vector-tile": {
        source: "iana",
        extensions: ["mvt"]
      },
      "application/vnd.marlin.drm.actiontoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.conftoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.license+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.mdcf": {
        source: "iana"
      },
      "application/vnd.mason+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.maxar.archive.3tz+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.maxmind.maxmind-db": {
        source: "iana"
      },
      "application/vnd.mcd": {
        source: "iana",
        extensions: ["mcd"]
      },
      "application/vnd.medcalcdata": {
        source: "iana",
        extensions: ["mc1"]
      },
      "application/vnd.mediastation.cdkey": {
        source: "iana",
        extensions: ["cdkey"]
      },
      "application/vnd.meridian-slingshot": {
        source: "iana"
      },
      "application/vnd.mfer": {
        source: "iana",
        extensions: ["mwf"]
      },
      "application/vnd.mfmp": {
        source: "iana",
        extensions: ["mfm"]
      },
      "application/vnd.micro+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.micrografx.flo": {
        source: "iana",
        extensions: ["flo"]
      },
      "application/vnd.micrografx.igx": {
        source: "iana",
        extensions: ["igx"]
      },
      "application/vnd.microsoft.portable-executable": {
        source: "iana"
      },
      "application/vnd.microsoft.windows.thumbnail-cache": {
        source: "iana"
      },
      "application/vnd.miele+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.mif": {
        source: "iana",
        extensions: ["mif"]
      },
      "application/vnd.minisoft-hp3000-save": {
        source: "iana"
      },
      "application/vnd.mitsubishi.misty-guard.trustweb": {
        source: "iana"
      },
      "application/vnd.mobius.daf": {
        source: "iana",
        extensions: ["daf"]
      },
      "application/vnd.mobius.dis": {
        source: "iana",
        extensions: ["dis"]
      },
      "application/vnd.mobius.mbk": {
        source: "iana",
        extensions: ["mbk"]
      },
      "application/vnd.mobius.mqy": {
        source: "iana",
        extensions: ["mqy"]
      },
      "application/vnd.mobius.msl": {
        source: "iana",
        extensions: ["msl"]
      },
      "application/vnd.mobius.plc": {
        source: "iana",
        extensions: ["plc"]
      },
      "application/vnd.mobius.txf": {
        source: "iana",
        extensions: ["txf"]
      },
      "application/vnd.mophun.application": {
        source: "iana",
        extensions: ["mpn"]
      },
      "application/vnd.mophun.certificate": {
        source: "iana",
        extensions: ["mpc"]
      },
      "application/vnd.motorola.flexsuite": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.adsi": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.fis": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.gotap": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.kmr": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.ttc": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.wem": {
        source: "iana"
      },
      "application/vnd.motorola.iprm": {
        source: "iana"
      },
      "application/vnd.mozilla.xul+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xul"]
      },
      "application/vnd.ms-3mfdocument": {
        source: "iana"
      },
      "application/vnd.ms-artgalry": {
        source: "iana",
        extensions: ["cil"]
      },
      "application/vnd.ms-asf": {
        source: "iana"
      },
      "application/vnd.ms-cab-compressed": {
        source: "iana",
        extensions: ["cab"]
      },
      "application/vnd.ms-color.iccprofile": {
        source: "apache"
      },
      "application/vnd.ms-excel": {
        source: "iana",
        compressible: false,
        extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
      },
      "application/vnd.ms-excel.addin.macroenabled.12": {
        source: "iana",
        extensions: ["xlam"]
      },
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: "iana",
        extensions: ["xlsb"]
      },
      "application/vnd.ms-excel.sheet.macroenabled.12": {
        source: "iana",
        extensions: ["xlsm"]
      },
      "application/vnd.ms-excel.template.macroenabled.12": {
        source: "iana",
        extensions: ["xltm"]
      },
      "application/vnd.ms-fontobject": {
        source: "iana",
        compressible: true,
        extensions: ["eot"]
      },
      "application/vnd.ms-htmlhelp": {
        source: "iana",
        extensions: ["chm"]
      },
      "application/vnd.ms-ims": {
        source: "iana",
        extensions: ["ims"]
      },
      "application/vnd.ms-lrm": {
        source: "iana",
        extensions: ["lrm"]
      },
      "application/vnd.ms-office.activex+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-officetheme": {
        source: "iana",
        extensions: ["thmx"]
      },
      "application/vnd.ms-opentype": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-outlook": {
        compressible: false,
        extensions: ["msg"]
      },
      "application/vnd.ms-package.obfuscated-opentype": {
        source: "apache"
      },
      "application/vnd.ms-pki.seccat": {
        source: "apache",
        extensions: ["cat"]
      },
      "application/vnd.ms-pki.stl": {
        source: "apache",
        extensions: ["stl"]
      },
      "application/vnd.ms-playready.initiator+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-powerpoint": {
        source: "iana",
        compressible: false,
        extensions: ["ppt", "pps", "pot"]
      },
      "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: "iana",
        extensions: ["ppam"]
      },
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: "iana",
        extensions: ["pptm"]
      },
      "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: "iana",
        extensions: ["sldm"]
      },
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: "iana",
        extensions: ["ppsm"]
      },
      "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: "iana",
        extensions: ["potm"]
      },
      "application/vnd.ms-printdevicecapabilities+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-printing.printticket+xml": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-printschematicket+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-project": {
        source: "iana",
        extensions: ["mpp", "mpt"]
      },
      "application/vnd.ms-tnef": {
        source: "iana"
      },
      "application/vnd.ms-windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.nwprinting.oob": {
        source: "iana"
      },
      "application/vnd.ms-windows.printerpairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.wsd.oob": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-resp": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-resp": {
        source: "iana"
      },
      "application/vnd.ms-word.document.macroenabled.12": {
        source: "iana",
        extensions: ["docm"]
      },
      "application/vnd.ms-word.template.macroenabled.12": {
        source: "iana",
        extensions: ["dotm"]
      },
      "application/vnd.ms-works": {
        source: "iana",
        extensions: ["wps", "wks", "wcm", "wdb"]
      },
      "application/vnd.ms-wpl": {
        source: "iana",
        extensions: ["wpl"]
      },
      "application/vnd.ms-xpsdocument": {
        source: "iana",
        compressible: false,
        extensions: ["xps"]
      },
      "application/vnd.msa-disk-image": {
        source: "iana"
      },
      "application/vnd.mseq": {
        source: "iana",
        extensions: ["mseq"]
      },
      "application/vnd.msign": {
        source: "iana"
      },
      "application/vnd.multiad.creator": {
        source: "iana"
      },
      "application/vnd.multiad.creator.cif": {
        source: "iana"
      },
      "application/vnd.music-niff": {
        source: "iana"
      },
      "application/vnd.musician": {
        source: "iana",
        extensions: ["mus"]
      },
      "application/vnd.muvee.style": {
        source: "iana",
        extensions: ["msty"]
      },
      "application/vnd.mynfc": {
        source: "iana",
        extensions: ["taglet"]
      },
      "application/vnd.nacamar.ybrid+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ncd.control": {
        source: "iana"
      },
      "application/vnd.ncd.reference": {
        source: "iana"
      },
      "application/vnd.nearst.inv+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nebumind.line": {
        source: "iana"
      },
      "application/vnd.nervana": {
        source: "iana"
      },
      "application/vnd.netfpx": {
        source: "iana"
      },
      "application/vnd.neurolanguage.nlu": {
        source: "iana",
        extensions: ["nlu"]
      },
      "application/vnd.nimn": {
        source: "iana"
      },
      "application/vnd.nintendo.nitro.rom": {
        source: "iana"
      },
      "application/vnd.nintendo.snes.rom": {
        source: "iana"
      },
      "application/vnd.nitf": {
        source: "iana",
        extensions: ["ntf", "nitf"]
      },
      "application/vnd.noblenet-directory": {
        source: "iana",
        extensions: ["nnd"]
      },
      "application/vnd.noblenet-sealer": {
        source: "iana",
        extensions: ["nns"]
      },
      "application/vnd.noblenet-web": {
        source: "iana",
        extensions: ["nnw"]
      },
      "application/vnd.nokia.catalogs": {
        source: "iana"
      },
      "application/vnd.nokia.conml+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.conml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.iptv.config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.isds-radio-presets": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.landmarkcollection+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.n-gage.ac+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ac"]
      },
      "application/vnd.nokia.n-gage.data": {
        source: "iana",
        extensions: ["ngdat"]
      },
      "application/vnd.nokia.n-gage.symbian.install": {
        source: "iana",
        extensions: ["n-gage"]
      },
      "application/vnd.nokia.ncd": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.radio-preset": {
        source: "iana",
        extensions: ["rpst"]
      },
      "application/vnd.nokia.radio-presets": {
        source: "iana",
        extensions: ["rpss"]
      },
      "application/vnd.novadigm.edm": {
        source: "iana",
        extensions: ["edm"]
      },
      "application/vnd.novadigm.edx": {
        source: "iana",
        extensions: ["edx"]
      },
      "application/vnd.novadigm.ext": {
        source: "iana",
        extensions: ["ext"]
      },
      "application/vnd.ntt-local.content-share": {
        source: "iana"
      },
      "application/vnd.ntt-local.file-transfer": {
        source: "iana"
      },
      "application/vnd.ntt-local.ogw_remote-access": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_remote": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_tcp_stream": {
        source: "iana"
      },
      "application/vnd.oasis.opendocument.chart": {
        source: "iana",
        extensions: ["odc"]
      },
      "application/vnd.oasis.opendocument.chart-template": {
        source: "iana",
        extensions: ["otc"]
      },
      "application/vnd.oasis.opendocument.database": {
        source: "iana",
        extensions: ["odb"]
      },
      "application/vnd.oasis.opendocument.formula": {
        source: "iana",
        extensions: ["odf"]
      },
      "application/vnd.oasis.opendocument.formula-template": {
        source: "iana",
        extensions: ["odft"]
      },
      "application/vnd.oasis.opendocument.graphics": {
        source: "iana",
        compressible: false,
        extensions: ["odg"]
      },
      "application/vnd.oasis.opendocument.graphics-template": {
        source: "iana",
        extensions: ["otg"]
      },
      "application/vnd.oasis.opendocument.image": {
        source: "iana",
        extensions: ["odi"]
      },
      "application/vnd.oasis.opendocument.image-template": {
        source: "iana",
        extensions: ["oti"]
      },
      "application/vnd.oasis.opendocument.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["odp"]
      },
      "application/vnd.oasis.opendocument.presentation-template": {
        source: "iana",
        extensions: ["otp"]
      },
      "application/vnd.oasis.opendocument.spreadsheet": {
        source: "iana",
        compressible: false,
        extensions: ["ods"]
      },
      "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: "iana",
        extensions: ["ots"]
      },
      "application/vnd.oasis.opendocument.text": {
        source: "iana",
        compressible: false,
        extensions: ["odt"]
      },
      "application/vnd.oasis.opendocument.text-master": {
        source: "iana",
        extensions: ["odm"]
      },
      "application/vnd.oasis.opendocument.text-template": {
        source: "iana",
        extensions: ["ott"]
      },
      "application/vnd.oasis.opendocument.text-web": {
        source: "iana",
        extensions: ["oth"]
      },
      "application/vnd.obn": {
        source: "iana"
      },
      "application/vnd.ocf+cbor": {
        source: "iana"
      },
      "application/vnd.oci.image.manifest.v1+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oftn.l10n+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessdownload+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessstreaming+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.cspg-hexbinary": {
        source: "iana"
      },
      "application/vnd.oipf.dae.svg+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.dae.xhtml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.mippvcontrolmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.pae.gem": {
        source: "iana"
      },
      "application/vnd.oipf.spdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.spdlist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.ueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.userprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.olpc-sugar": {
        source: "iana",
        extensions: ["xo"]
      },
      "application/vnd.oma-scws-config": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-request": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-response": {
        source: "iana"
      },
      "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.drm-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.imd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.ltkm": {
        source: "iana"
      },
      "application/vnd.oma.bcast.notification+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.provisioningtrigger": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgboot": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgdd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sgdu": {
        source: "iana"
      },
      "application/vnd.oma.bcast.simple-symbol-container": {
        source: "iana"
      },
      "application/vnd.oma.bcast.smartcard-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sprov+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.stkm": {
        source: "iana"
      },
      "application/vnd.oma.cab-address-book+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-feature-handler+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-pcc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-subs-invite+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-user-prefs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.dcd": {
        source: "iana"
      },
      "application/vnd.oma.dcdc": {
        source: "iana"
      },
      "application/vnd.oma.dd2+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dd2"]
      },
      "application/vnd.oma.drm.risd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.group-usage-list+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+cbor": {
        source: "iana"
      },
      "application/vnd.oma.lwm2m+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+tlv": {
        source: "iana"
      },
      "application/vnd.oma.pal+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.detailed-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.final-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.groups+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.invocation-descriptor+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.optimized-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.push": {
        source: "iana"
      },
      "application/vnd.oma.scidm.messages+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.xcap-directory+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.omads-email+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-file+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-folder+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omaloc-supl-init": {
        source: "iana"
      },
      "application/vnd.onepager": {
        source: "iana"
      },
      "application/vnd.onepagertamp": {
        source: "iana"
      },
      "application/vnd.onepagertamx": {
        source: "iana"
      },
      "application/vnd.onepagertat": {
        source: "iana"
      },
      "application/vnd.onepagertatp": {
        source: "iana"
      },
      "application/vnd.onepagertatx": {
        source: "iana"
      },
      "application/vnd.openblox.game+xml": {
        source: "iana",
        compressible: true,
        extensions: ["obgx"]
      },
      "application/vnd.openblox.game-binary": {
        source: "iana"
      },
      "application/vnd.openeye.oeb": {
        source: "iana"
      },
      "application/vnd.openofficeorg.extension": {
        source: "apache",
        extensions: ["oxt"]
      },
      "application/vnd.openstreetmap.data+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osm"]
      },
      "application/vnd.opentimestamps.ots": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawing+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["pptx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: "iana",
        extensions: ["sldx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: "iana",
        extensions: ["ppsx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: "iana",
        extensions: ["potx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: false,
        extensions: ["xlsx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: "iana",
        extensions: ["xltx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.theme+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.vmldrawing": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: false,
        extensions: ["docx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: "iana",
        extensions: ["dotx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.core-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.relationships+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oracle.resource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.orange.indata": {
        source: "iana"
      },
      "application/vnd.osa.netdeploy": {
        source: "iana"
      },
      "application/vnd.osgeo.mapguide.package": {
        source: "iana",
        extensions: ["mgp"]
      },
      "application/vnd.osgi.bundle": {
        source: "iana"
      },
      "application/vnd.osgi.dp": {
        source: "iana",
        extensions: ["dp"]
      },
      "application/vnd.osgi.subsystem": {
        source: "iana",
        extensions: ["esa"]
      },
      "application/vnd.otps.ct-kip+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oxli.countgraph": {
        source: "iana"
      },
      "application/vnd.pagerduty+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.palm": {
        source: "iana",
        extensions: ["pdb", "pqa", "oprc"]
      },
      "application/vnd.panoply": {
        source: "iana"
      },
      "application/vnd.paos.xml": {
        source: "iana"
      },
      "application/vnd.patentdive": {
        source: "iana"
      },
      "application/vnd.patientecommsdoc": {
        source: "iana"
      },
      "application/vnd.pawaafile": {
        source: "iana",
        extensions: ["paw"]
      },
      "application/vnd.pcos": {
        source: "iana"
      },
      "application/vnd.pg.format": {
        source: "iana",
        extensions: ["str"]
      },
      "application/vnd.pg.osasli": {
        source: "iana",
        extensions: ["ei6"]
      },
      "application/vnd.piaccess.application-licence": {
        source: "iana"
      },
      "application/vnd.picsel": {
        source: "iana",
        extensions: ["efif"]
      },
      "application/vnd.pmi.widget": {
        source: "iana",
        extensions: ["wg"]
      },
      "application/vnd.poc.group-advertisement+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.pocketlearn": {
        source: "iana",
        extensions: ["plf"]
      },
      "application/vnd.powerbuilder6": {
        source: "iana",
        extensions: ["pbd"]
      },
      "application/vnd.powerbuilder6-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder7": {
        source: "iana"
      },
      "application/vnd.powerbuilder7-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder75": {
        source: "iana"
      },
      "application/vnd.powerbuilder75-s": {
        source: "iana"
      },
      "application/vnd.preminet": {
        source: "iana"
      },
      "application/vnd.previewsystems.box": {
        source: "iana",
        extensions: ["box"]
      },
      "application/vnd.proteus.magazine": {
        source: "iana",
        extensions: ["mgz"]
      },
      "application/vnd.psfs": {
        source: "iana"
      },
      "application/vnd.publishare-delta-tree": {
        source: "iana",
        extensions: ["qps"]
      },
      "application/vnd.pvi.ptid1": {
        source: "iana",
        extensions: ["ptid"]
      },
      "application/vnd.pwg-multiplexed": {
        source: "iana"
      },
      "application/vnd.pwg-xhtml-print+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.qualcomm.brew-app-res": {
        source: "iana"
      },
      "application/vnd.quarantainenet": {
        source: "iana"
      },
      "application/vnd.quark.quarkxpress": {
        source: "iana",
        extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
      },
      "application/vnd.quobject-quoxdocument": {
        source: "iana"
      },
      "application/vnd.radisys.moml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-stream+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-base+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-group+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-speech+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-transform+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rainstor.data": {
        source: "iana"
      },
      "application/vnd.rapid": {
        source: "iana"
      },
      "application/vnd.rar": {
        source: "iana",
        extensions: ["rar"]
      },
      "application/vnd.realvnc.bed": {
        source: "iana",
        extensions: ["bed"]
      },
      "application/vnd.recordare.musicxml": {
        source: "iana",
        extensions: ["mxl"]
      },
      "application/vnd.recordare.musicxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musicxml"]
      },
      "application/vnd.renlearn.rlprint": {
        source: "iana"
      },
      "application/vnd.resilient.logic": {
        source: "iana"
      },
      "application/vnd.restful+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rig.cryptonote": {
        source: "iana",
        extensions: ["cryptonote"]
      },
      "application/vnd.rim.cod": {
        source: "apache",
        extensions: ["cod"]
      },
      "application/vnd.rn-realmedia": {
        source: "apache",
        extensions: ["rm"]
      },
      "application/vnd.rn-realmedia-vbr": {
        source: "apache",
        extensions: ["rmvb"]
      },
      "application/vnd.route66.link66+xml": {
        source: "iana",
        compressible: true,
        extensions: ["link66"]
      },
      "application/vnd.rs-274x": {
        source: "iana"
      },
      "application/vnd.ruckus.download": {
        source: "iana"
      },
      "application/vnd.s3sms": {
        source: "iana"
      },
      "application/vnd.sailingtracker.track": {
        source: "iana",
        extensions: ["st"]
      },
      "application/vnd.sar": {
        source: "iana"
      },
      "application/vnd.sbm.cid": {
        source: "iana"
      },
      "application/vnd.sbm.mid2": {
        source: "iana"
      },
      "application/vnd.scribus": {
        source: "iana"
      },
      "application/vnd.sealed.3df": {
        source: "iana"
      },
      "application/vnd.sealed.csf": {
        source: "iana"
      },
      "application/vnd.sealed.doc": {
        source: "iana"
      },
      "application/vnd.sealed.eml": {
        source: "iana"
      },
      "application/vnd.sealed.mht": {
        source: "iana"
      },
      "application/vnd.sealed.net": {
        source: "iana"
      },
      "application/vnd.sealed.ppt": {
        source: "iana"
      },
      "application/vnd.sealed.tiff": {
        source: "iana"
      },
      "application/vnd.sealed.xls": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.html": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.pdf": {
        source: "iana"
      },
      "application/vnd.seemail": {
        source: "iana",
        extensions: ["see"]
      },
      "application/vnd.seis+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.sema": {
        source: "iana",
        extensions: ["sema"]
      },
      "application/vnd.semd": {
        source: "iana",
        extensions: ["semd"]
      },
      "application/vnd.semf": {
        source: "iana",
        extensions: ["semf"]
      },
      "application/vnd.shade-save-file": {
        source: "iana"
      },
      "application/vnd.shana.informed.formdata": {
        source: "iana",
        extensions: ["ifm"]
      },
      "application/vnd.shana.informed.formtemplate": {
        source: "iana",
        extensions: ["itp"]
      },
      "application/vnd.shana.informed.interchange": {
        source: "iana",
        extensions: ["iif"]
      },
      "application/vnd.shana.informed.package": {
        source: "iana",
        extensions: ["ipk"]
      },
      "application/vnd.shootproof+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shopkick+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shp": {
        source: "iana"
      },
      "application/vnd.shx": {
        source: "iana"
      },
      "application/vnd.sigrok.session": {
        source: "iana"
      },
      "application/vnd.simtech-mindmapper": {
        source: "iana",
        extensions: ["twd", "twds"]
      },
      "application/vnd.siren+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.smaf": {
        source: "iana",
        extensions: ["mmf"]
      },
      "application/vnd.smart.notebook": {
        source: "iana"
      },
      "application/vnd.smart.teacher": {
        source: "iana",
        extensions: ["teacher"]
      },
      "application/vnd.snesdev-page-table": {
        source: "iana"
      },
      "application/vnd.software602.filler.form+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fo"]
      },
      "application/vnd.software602.filler.form-xml-zip": {
        source: "iana"
      },
      "application/vnd.solent.sdkm+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sdkm", "sdkd"]
      },
      "application/vnd.spotfire.dxp": {
        source: "iana",
        extensions: ["dxp"]
      },
      "application/vnd.spotfire.sfs": {
        source: "iana",
        extensions: ["sfs"]
      },
      "application/vnd.sqlite3": {
        source: "iana"
      },
      "application/vnd.sss-cod": {
        source: "iana"
      },
      "application/vnd.sss-dtf": {
        source: "iana"
      },
      "application/vnd.sss-ntf": {
        source: "iana"
      },
      "application/vnd.stardivision.calc": {
        source: "apache",
        extensions: ["sdc"]
      },
      "application/vnd.stardivision.draw": {
        source: "apache",
        extensions: ["sda"]
      },
      "application/vnd.stardivision.impress": {
        source: "apache",
        extensions: ["sdd"]
      },
      "application/vnd.stardivision.math": {
        source: "apache",
        extensions: ["smf"]
      },
      "application/vnd.stardivision.writer": {
        source: "apache",
        extensions: ["sdw", "vor"]
      },
      "application/vnd.stardivision.writer-global": {
        source: "apache",
        extensions: ["sgl"]
      },
      "application/vnd.stepmania.package": {
        source: "iana",
        extensions: ["smzip"]
      },
      "application/vnd.stepmania.stepchart": {
        source: "iana",
        extensions: ["sm"]
      },
      "application/vnd.street-stream": {
        source: "iana"
      },
      "application/vnd.sun.wadl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wadl"]
      },
      "application/vnd.sun.xml.calc": {
        source: "apache",
        extensions: ["sxc"]
      },
      "application/vnd.sun.xml.calc.template": {
        source: "apache",
        extensions: ["stc"]
      },
      "application/vnd.sun.xml.draw": {
        source: "apache",
        extensions: ["sxd"]
      },
      "application/vnd.sun.xml.draw.template": {
        source: "apache",
        extensions: ["std"]
      },
      "application/vnd.sun.xml.impress": {
        source: "apache",
        extensions: ["sxi"]
      },
      "application/vnd.sun.xml.impress.template": {
        source: "apache",
        extensions: ["sti"]
      },
      "application/vnd.sun.xml.math": {
        source: "apache",
        extensions: ["sxm"]
      },
      "application/vnd.sun.xml.writer": {
        source: "apache",
        extensions: ["sxw"]
      },
      "application/vnd.sun.xml.writer.global": {
        source: "apache",
        extensions: ["sxg"]
      },
      "application/vnd.sun.xml.writer.template": {
        source: "apache",
        extensions: ["stw"]
      },
      "application/vnd.sus-calendar": {
        source: "iana",
        extensions: ["sus", "susp"]
      },
      "application/vnd.svd": {
        source: "iana",
        extensions: ["svd"]
      },
      "application/vnd.swiftview-ics": {
        source: "iana"
      },
      "application/vnd.sycle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.syft+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.symbian.install": {
        source: "apache",
        extensions: ["sis", "sisx"]
      },
      "application/vnd.syncml+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xsm"]
      },
      "application/vnd.syncml.dm+wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["bdm"]
      },
      "application/vnd.syncml.dm+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xdm"]
      },
      "application/vnd.syncml.dm.notification": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["ddf"]
      },
      "application/vnd.syncml.dmtnds+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmtnds+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.syncml.ds.notification": {
        source: "iana"
      },
      "application/vnd.tableschema+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tao.intent-module-archive": {
        source: "iana",
        extensions: ["tao"]
      },
      "application/vnd.tcpdump.pcap": {
        source: "iana",
        extensions: ["pcap", "cap", "dmp"]
      },
      "application/vnd.think-cell.ppttc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tmd.mediaflex.api+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tml": {
        source: "iana"
      },
      "application/vnd.tmobile-livetv": {
        source: "iana",
        extensions: ["tmo"]
      },
      "application/vnd.tri.onesource": {
        source: "iana"
      },
      "application/vnd.trid.tpt": {
        source: "iana",
        extensions: ["tpt"]
      },
      "application/vnd.triscape.mxs": {
        source: "iana",
        extensions: ["mxs"]
      },
      "application/vnd.trueapp": {
        source: "iana",
        extensions: ["tra"]
      },
      "application/vnd.truedoc": {
        source: "iana"
      },
      "application/vnd.ubisoft.webplayer": {
        source: "iana"
      },
      "application/vnd.ufdl": {
        source: "iana",
        extensions: ["ufd", "ufdl"]
      },
      "application/vnd.uiq.theme": {
        source: "iana",
        extensions: ["utz"]
      },
      "application/vnd.umajin": {
        source: "iana",
        extensions: ["umj"]
      },
      "application/vnd.unity": {
        source: "iana",
        extensions: ["unityweb"]
      },
      "application/vnd.uoml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uoml"]
      },
      "application/vnd.uplanet.alert": {
        source: "iana"
      },
      "application/vnd.uplanet.alert-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.channel": {
        source: "iana"
      },
      "application/vnd.uplanet.channel-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.list": {
        source: "iana"
      },
      "application/vnd.uplanet.list-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.signal": {
        source: "iana"
      },
      "application/vnd.uri-map": {
        source: "iana"
      },
      "application/vnd.valve.source.material": {
        source: "iana"
      },
      "application/vnd.vcx": {
        source: "iana",
        extensions: ["vcx"]
      },
      "application/vnd.vd-study": {
        source: "iana"
      },
      "application/vnd.vectorworks": {
        source: "iana"
      },
      "application/vnd.vel+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.verimatrix.vcas": {
        source: "iana"
      },
      "application/vnd.veritone.aion+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.veryant.thin": {
        source: "iana"
      },
      "application/vnd.ves.encrypted": {
        source: "iana"
      },
      "application/vnd.vidsoft.vidconference": {
        source: "iana"
      },
      "application/vnd.visio": {
        source: "iana",
        extensions: ["vsd", "vst", "vss", "vsw"]
      },
      "application/vnd.visionary": {
        source: "iana",
        extensions: ["vis"]
      },
      "application/vnd.vividence.scriptfile": {
        source: "iana"
      },
      "application/vnd.vsf": {
        source: "iana",
        extensions: ["vsf"]
      },
      "application/vnd.wap.sic": {
        source: "iana"
      },
      "application/vnd.wap.slc": {
        source: "iana"
      },
      "application/vnd.wap.wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["wbxml"]
      },
      "application/vnd.wap.wmlc": {
        source: "iana",
        extensions: ["wmlc"]
      },
      "application/vnd.wap.wmlscriptc": {
        source: "iana",
        extensions: ["wmlsc"]
      },
      "application/vnd.webturbo": {
        source: "iana",
        extensions: ["wtb"]
      },
      "application/vnd.wfa.dpp": {
        source: "iana"
      },
      "application/vnd.wfa.p2p": {
        source: "iana"
      },
      "application/vnd.wfa.wsc": {
        source: "iana"
      },
      "application/vnd.windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.wmc": {
        source: "iana"
      },
      "application/vnd.wmf.bootstrap": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica.package": {
        source: "iana"
      },
      "application/vnd.wolfram.player": {
        source: "iana",
        extensions: ["nbp"]
      },
      "application/vnd.wordperfect": {
        source: "iana",
        extensions: ["wpd"]
      },
      "application/vnd.wqd": {
        source: "iana",
        extensions: ["wqd"]
      },
      "application/vnd.wrq-hp3000-labelled": {
        source: "iana"
      },
      "application/vnd.wt.stf": {
        source: "iana",
        extensions: ["stf"]
      },
      "application/vnd.wv.csp+wbxml": {
        source: "iana"
      },
      "application/vnd.wv.csp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.wv.ssp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xacml+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xara": {
        source: "iana",
        extensions: ["xar"]
      },
      "application/vnd.xfdl": {
        source: "iana",
        extensions: ["xfdl"]
      },
      "application/vnd.xfdl.webform": {
        source: "iana"
      },
      "application/vnd.xmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xmpie.cpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.dpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.plan": {
        source: "iana"
      },
      "application/vnd.xmpie.ppkg": {
        source: "iana"
      },
      "application/vnd.xmpie.xlim": {
        source: "iana"
      },
      "application/vnd.yamaha.hv-dic": {
        source: "iana",
        extensions: ["hvd"]
      },
      "application/vnd.yamaha.hv-script": {
        source: "iana",
        extensions: ["hvs"]
      },
      "application/vnd.yamaha.hv-voice": {
        source: "iana",
        extensions: ["hvp"]
      },
      "application/vnd.yamaha.openscoreformat": {
        source: "iana",
        extensions: ["osf"]
      },
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osfpvg"]
      },
      "application/vnd.yamaha.remote-setup": {
        source: "iana"
      },
      "application/vnd.yamaha.smaf-audio": {
        source: "iana",
        extensions: ["saf"]
      },
      "application/vnd.yamaha.smaf-phrase": {
        source: "iana",
        extensions: ["spf"]
      },
      "application/vnd.yamaha.through-ngn": {
        source: "iana"
      },
      "application/vnd.yamaha.tunnel-udpencap": {
        source: "iana"
      },
      "application/vnd.yaoweme": {
        source: "iana"
      },
      "application/vnd.yellowriver-custom-menu": {
        source: "iana",
        extensions: ["cmp"]
      },
      "application/vnd.youtube.yt": {
        source: "iana"
      },
      "application/vnd.zul": {
        source: "iana",
        extensions: ["zir", "zirz"]
      },
      "application/vnd.zzazz.deck+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zaz"]
      },
      "application/voicexml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["vxml"]
      },
      "application/voucher-cms+json": {
        source: "iana",
        compressible: true
      },
      "application/vq-rtcpxr": {
        source: "iana"
      },
      "application/wasm": {
        source: "iana",
        compressible: true,
        extensions: ["wasm"]
      },
      "application/watcherinfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wif"]
      },
      "application/webpush-options+json": {
        source: "iana",
        compressible: true
      },
      "application/whoispp-query": {
        source: "iana"
      },
      "application/whoispp-response": {
        source: "iana"
      },
      "application/widget": {
        source: "iana",
        extensions: ["wgt"]
      },
      "application/winhlp": {
        source: "apache",
        extensions: ["hlp"]
      },
      "application/wita": {
        source: "iana"
      },
      "application/wordperfect5.1": {
        source: "iana"
      },
      "application/wsdl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wsdl"]
      },
      "application/wspolicy+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wspolicy"]
      },
      "application/x-7z-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["7z"]
      },
      "application/x-abiword": {
        source: "apache",
        extensions: ["abw"]
      },
      "application/x-ace-compressed": {
        source: "apache",
        extensions: ["ace"]
      },
      "application/x-amf": {
        source: "apache"
      },
      "application/x-apple-diskimage": {
        source: "apache",
        extensions: ["dmg"]
      },
      "application/x-arj": {
        compressible: false,
        extensions: ["arj"]
      },
      "application/x-authorware-bin": {
        source: "apache",
        extensions: ["aab", "x32", "u32", "vox"]
      },
      "application/x-authorware-map": {
        source: "apache",
        extensions: ["aam"]
      },
      "application/x-authorware-seg": {
        source: "apache",
        extensions: ["aas"]
      },
      "application/x-bcpio": {
        source: "apache",
        extensions: ["bcpio"]
      },
      "application/x-bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/x-bittorrent": {
        source: "apache",
        extensions: ["torrent"]
      },
      "application/x-blorb": {
        source: "apache",
        extensions: ["blb", "blorb"]
      },
      "application/x-bzip": {
        source: "apache",
        compressible: false,
        extensions: ["bz"]
      },
      "application/x-bzip2": {
        source: "apache",
        compressible: false,
        extensions: ["bz2", "boz"]
      },
      "application/x-cbr": {
        source: "apache",
        extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
      },
      "application/x-cdlink": {
        source: "apache",
        extensions: ["vcd"]
      },
      "application/x-cfs-compressed": {
        source: "apache",
        extensions: ["cfs"]
      },
      "application/x-chat": {
        source: "apache",
        extensions: ["chat"]
      },
      "application/x-chess-pgn": {
        source: "apache",
        extensions: ["pgn"]
      },
      "application/x-chrome-extension": {
        extensions: ["crx"]
      },
      "application/x-cocoa": {
        source: "nginx",
        extensions: ["cco"]
      },
      "application/x-compress": {
        source: "apache"
      },
      "application/x-conference": {
        source: "apache",
        extensions: ["nsc"]
      },
      "application/x-cpio": {
        source: "apache",
        extensions: ["cpio"]
      },
      "application/x-csh": {
        source: "apache",
        extensions: ["csh"]
      },
      "application/x-deb": {
        compressible: false
      },
      "application/x-debian-package": {
        source: "apache",
        extensions: ["deb", "udeb"]
      },
      "application/x-dgc-compressed": {
        source: "apache",
        extensions: ["dgc"]
      },
      "application/x-director": {
        source: "apache",
        extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
      },
      "application/x-doom": {
        source: "apache",
        extensions: ["wad"]
      },
      "application/x-dtbncx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ncx"]
      },
      "application/x-dtbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dtb"]
      },
      "application/x-dtbresource+xml": {
        source: "apache",
        compressible: true,
        extensions: ["res"]
      },
      "application/x-dvi": {
        source: "apache",
        compressible: false,
        extensions: ["dvi"]
      },
      "application/x-envoy": {
        source: "apache",
        extensions: ["evy"]
      },
      "application/x-eva": {
        source: "apache",
        extensions: ["eva"]
      },
      "application/x-font-bdf": {
        source: "apache",
        extensions: ["bdf"]
      },
      "application/x-font-dos": {
        source: "apache"
      },
      "application/x-font-framemaker": {
        source: "apache"
      },
      "application/x-font-ghostscript": {
        source: "apache",
        extensions: ["gsf"]
      },
      "application/x-font-libgrx": {
        source: "apache"
      },
      "application/x-font-linux-psf": {
        source: "apache",
        extensions: ["psf"]
      },
      "application/x-font-pcf": {
        source: "apache",
        extensions: ["pcf"]
      },
      "application/x-font-snf": {
        source: "apache",
        extensions: ["snf"]
      },
      "application/x-font-speedo": {
        source: "apache"
      },
      "application/x-font-sunos-news": {
        source: "apache"
      },
      "application/x-font-type1": {
        source: "apache",
        extensions: ["pfa", "pfb", "pfm", "afm"]
      },
      "application/x-font-vfont": {
        source: "apache"
      },
      "application/x-freearc": {
        source: "apache",
        extensions: ["arc"]
      },
      "application/x-futuresplash": {
        source: "apache",
        extensions: ["spl"]
      },
      "application/x-gca-compressed": {
        source: "apache",
        extensions: ["gca"]
      },
      "application/x-glulx": {
        source: "apache",
        extensions: ["ulx"]
      },
      "application/x-gnumeric": {
        source: "apache",
        extensions: ["gnumeric"]
      },
      "application/x-gramps-xml": {
        source: "apache",
        extensions: ["gramps"]
      },
      "application/x-gtar": {
        source: "apache",
        extensions: ["gtar"]
      },
      "application/x-gzip": {
        source: "apache"
      },
      "application/x-hdf": {
        source: "apache",
        extensions: ["hdf"]
      },
      "application/x-httpd-php": {
        compressible: true,
        extensions: ["php"]
      },
      "application/x-install-instructions": {
        source: "apache",
        extensions: ["install"]
      },
      "application/x-iso9660-image": {
        source: "apache",
        extensions: ["iso"]
      },
      "application/x-iwork-keynote-sffkey": {
        extensions: ["key"]
      },
      "application/x-iwork-numbers-sffnumbers": {
        extensions: ["numbers"]
      },
      "application/x-iwork-pages-sffpages": {
        extensions: ["pages"]
      },
      "application/x-java-archive-diff": {
        source: "nginx",
        extensions: ["jardiff"]
      },
      "application/x-java-jnlp-file": {
        source: "apache",
        compressible: false,
        extensions: ["jnlp"]
      },
      "application/x-javascript": {
        compressible: true
      },
      "application/x-keepass2": {
        extensions: ["kdbx"]
      },
      "application/x-latex": {
        source: "apache",
        compressible: false,
        extensions: ["latex"]
      },
      "application/x-lua-bytecode": {
        extensions: ["luac"]
      },
      "application/x-lzh-compressed": {
        source: "apache",
        extensions: ["lzh", "lha"]
      },
      "application/x-makeself": {
        source: "nginx",
        extensions: ["run"]
      },
      "application/x-mie": {
        source: "apache",
        extensions: ["mie"]
      },
      "application/x-mobipocket-ebook": {
        source: "apache",
        extensions: ["prc", "mobi"]
      },
      "application/x-mpegurl": {
        compressible: false
      },
      "application/x-ms-application": {
        source: "apache",
        extensions: ["application"]
      },
      "application/x-ms-shortcut": {
        source: "apache",
        extensions: ["lnk"]
      },
      "application/x-ms-wmd": {
        source: "apache",
        extensions: ["wmd"]
      },
      "application/x-ms-wmz": {
        source: "apache",
        extensions: ["wmz"]
      },
      "application/x-ms-xbap": {
        source: "apache",
        extensions: ["xbap"]
      },
      "application/x-msaccess": {
        source: "apache",
        extensions: ["mdb"]
      },
      "application/x-msbinder": {
        source: "apache",
        extensions: ["obd"]
      },
      "application/x-mscardfile": {
        source: "apache",
        extensions: ["crd"]
      },
      "application/x-msclip": {
        source: "apache",
        extensions: ["clp"]
      },
      "application/x-msdos-program": {
        extensions: ["exe"]
      },
      "application/x-msdownload": {
        source: "apache",
        extensions: ["exe", "dll", "com", "bat", "msi"]
      },
      "application/x-msmediaview": {
        source: "apache",
        extensions: ["mvb", "m13", "m14"]
      },
      "application/x-msmetafile": {
        source: "apache",
        extensions: ["wmf", "wmz", "emf", "emz"]
      },
      "application/x-msmoney": {
        source: "apache",
        extensions: ["mny"]
      },
      "application/x-mspublisher": {
        source: "apache",
        extensions: ["pub"]
      },
      "application/x-msschedule": {
        source: "apache",
        extensions: ["scd"]
      },
      "application/x-msterminal": {
        source: "apache",
        extensions: ["trm"]
      },
      "application/x-mswrite": {
        source: "apache",
        extensions: ["wri"]
      },
      "application/x-netcdf": {
        source: "apache",
        extensions: ["nc", "cdf"]
      },
      "application/x-ns-proxy-autoconfig": {
        compressible: true,
        extensions: ["pac"]
      },
      "application/x-nzb": {
        source: "apache",
        extensions: ["nzb"]
      },
      "application/x-perl": {
        source: "nginx",
        extensions: ["pl", "pm"]
      },
      "application/x-pilot": {
        source: "nginx",
        extensions: ["prc", "pdb"]
      },
      "application/x-pkcs12": {
        source: "apache",
        compressible: false,
        extensions: ["p12", "pfx"]
      },
      "application/x-pkcs7-certificates": {
        source: "apache",
        extensions: ["p7b", "spc"]
      },
      "application/x-pkcs7-certreqresp": {
        source: "apache",
        extensions: ["p7r"]
      },
      "application/x-pki-message": {
        source: "iana"
      },
      "application/x-rar-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["rar"]
      },
      "application/x-redhat-package-manager": {
        source: "nginx",
        extensions: ["rpm"]
      },
      "application/x-research-info-systems": {
        source: "apache",
        extensions: ["ris"]
      },
      "application/x-sea": {
        source: "nginx",
        extensions: ["sea"]
      },
      "application/x-sh": {
        source: "apache",
        compressible: true,
        extensions: ["sh"]
      },
      "application/x-shar": {
        source: "apache",
        extensions: ["shar"]
      },
      "application/x-shockwave-flash": {
        source: "apache",
        compressible: false,
        extensions: ["swf"]
      },
      "application/x-silverlight-app": {
        source: "apache",
        extensions: ["xap"]
      },
      "application/x-sql": {
        source: "apache",
        extensions: ["sql"]
      },
      "application/x-stuffit": {
        source: "apache",
        compressible: false,
        extensions: ["sit"]
      },
      "application/x-stuffitx": {
        source: "apache",
        extensions: ["sitx"]
      },
      "application/x-subrip": {
        source: "apache",
        extensions: ["srt"]
      },
      "application/x-sv4cpio": {
        source: "apache",
        extensions: ["sv4cpio"]
      },
      "application/x-sv4crc": {
        source: "apache",
        extensions: ["sv4crc"]
      },
      "application/x-t3vm-image": {
        source: "apache",
        extensions: ["t3"]
      },
      "application/x-tads": {
        source: "apache",
        extensions: ["gam"]
      },
      "application/x-tar": {
        source: "apache",
        compressible: true,
        extensions: ["tar"]
      },
      "application/x-tcl": {
        source: "apache",
        extensions: ["tcl", "tk"]
      },
      "application/x-tex": {
        source: "apache",
        extensions: ["tex"]
      },
      "application/x-tex-tfm": {
        source: "apache",
        extensions: ["tfm"]
      },
      "application/x-texinfo": {
        source: "apache",
        extensions: ["texinfo", "texi"]
      },
      "application/x-tgif": {
        source: "apache",
        extensions: ["obj"]
      },
      "application/x-ustar": {
        source: "apache",
        extensions: ["ustar"]
      },
      "application/x-virtualbox-hdd": {
        compressible: true,
        extensions: ["hdd"]
      },
      "application/x-virtualbox-ova": {
        compressible: true,
        extensions: ["ova"]
      },
      "application/x-virtualbox-ovf": {
        compressible: true,
        extensions: ["ovf"]
      },
      "application/x-virtualbox-vbox": {
        compressible: true,
        extensions: ["vbox"]
      },
      "application/x-virtualbox-vbox-extpack": {
        compressible: false,
        extensions: ["vbox-extpack"]
      },
      "application/x-virtualbox-vdi": {
        compressible: true,
        extensions: ["vdi"]
      },
      "application/x-virtualbox-vhd": {
        compressible: true,
        extensions: ["vhd"]
      },
      "application/x-virtualbox-vmdk": {
        compressible: true,
        extensions: ["vmdk"]
      },
      "application/x-wais-source": {
        source: "apache",
        extensions: ["src"]
      },
      "application/x-web-app-manifest+json": {
        compressible: true,
        extensions: ["webapp"]
      },
      "application/x-www-form-urlencoded": {
        source: "iana",
        compressible: true
      },
      "application/x-x509-ca-cert": {
        source: "iana",
        extensions: ["der", "crt", "pem"]
      },
      "application/x-x509-ca-ra-cert": {
        source: "iana"
      },
      "application/x-x509-next-ca-cert": {
        source: "iana"
      },
      "application/x-xfig": {
        source: "apache",
        extensions: ["fig"]
      },
      "application/x-xliff+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/x-xpinstall": {
        source: "apache",
        compressible: false,
        extensions: ["xpi"]
      },
      "application/x-xz": {
        source: "apache",
        extensions: ["xz"]
      },
      "application/x-zmachine": {
        source: "apache",
        extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
      },
      "application/x400-bp": {
        source: "iana"
      },
      "application/xacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/xaml+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xaml"]
      },
      "application/xcap-att+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xav"]
      },
      "application/xcap-caps+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xca"]
      },
      "application/xcap-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdf"]
      },
      "application/xcap-el+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xel"]
      },
      "application/xcap-error+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcap-ns+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xns"]
      },
      "application/xcon-conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcon-conference-info-diff+xml": {
        source: "iana",
        compressible: true
      },
      "application/xenc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xenc"]
      },
      "application/xhtml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xhtml", "xht"]
      },
      "application/xhtml-voice+xml": {
        source: "apache",
        compressible: true
      },
      "application/xliff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml", "xsl", "xsd", "rng"]
      },
      "application/xml-dtd": {
        source: "iana",
        compressible: true,
        extensions: ["dtd"]
      },
      "application/xml-external-parsed-entity": {
        source: "iana"
      },
      "application/xml-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/xmpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/xop+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xop"]
      },
      "application/xproc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xpl"]
      },
      "application/xslt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xsl", "xslt"]
      },
      "application/xspf+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xspf"]
      },
      "application/xv+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mxml", "xhvml", "xvml", "xvm"]
      },
      "application/yang": {
        source: "iana",
        extensions: ["yang"]
      },
      "application/yang-data+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-data+xml": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/yin+xml": {
        source: "iana",
        compressible: true,
        extensions: ["yin"]
      },
      "application/zip": {
        source: "iana",
        compressible: false,
        extensions: ["zip"]
      },
      "application/zlib": {
        source: "iana"
      },
      "application/zstd": {
        source: "iana"
      },
      "audio/1d-interleaved-parityfec": {
        source: "iana"
      },
      "audio/32kadpcm": {
        source: "iana"
      },
      "audio/3gpp": {
        source: "iana",
        compressible: false,
        extensions: ["3gpp"]
      },
      "audio/3gpp2": {
        source: "iana"
      },
      "audio/aac": {
        source: "iana"
      },
      "audio/ac3": {
        source: "iana"
      },
      "audio/adpcm": {
        source: "apache",
        extensions: ["adp"]
      },
      "audio/amr": {
        source: "iana",
        extensions: ["amr"]
      },
      "audio/amr-wb": {
        source: "iana"
      },
      "audio/amr-wb+": {
        source: "iana"
      },
      "audio/aptx": {
        source: "iana"
      },
      "audio/asc": {
        source: "iana"
      },
      "audio/atrac-advanced-lossless": {
        source: "iana"
      },
      "audio/atrac-x": {
        source: "iana"
      },
      "audio/atrac3": {
        source: "iana"
      },
      "audio/basic": {
        source: "iana",
        compressible: false,
        extensions: ["au", "snd"]
      },
      "audio/bv16": {
        source: "iana"
      },
      "audio/bv32": {
        source: "iana"
      },
      "audio/clearmode": {
        source: "iana"
      },
      "audio/cn": {
        source: "iana"
      },
      "audio/dat12": {
        source: "iana"
      },
      "audio/dls": {
        source: "iana"
      },
      "audio/dsr-es201108": {
        source: "iana"
      },
      "audio/dsr-es202050": {
        source: "iana"
      },
      "audio/dsr-es202211": {
        source: "iana"
      },
      "audio/dsr-es202212": {
        source: "iana"
      },
      "audio/dv": {
        source: "iana"
      },
      "audio/dvi4": {
        source: "iana"
      },
      "audio/eac3": {
        source: "iana"
      },
      "audio/encaprtp": {
        source: "iana"
      },
      "audio/evrc": {
        source: "iana"
      },
      "audio/evrc-qcp": {
        source: "iana"
      },
      "audio/evrc0": {
        source: "iana"
      },
      "audio/evrc1": {
        source: "iana"
      },
      "audio/evrcb": {
        source: "iana"
      },
      "audio/evrcb0": {
        source: "iana"
      },
      "audio/evrcb1": {
        source: "iana"
      },
      "audio/evrcnw": {
        source: "iana"
      },
      "audio/evrcnw0": {
        source: "iana"
      },
      "audio/evrcnw1": {
        source: "iana"
      },
      "audio/evrcwb": {
        source: "iana"
      },
      "audio/evrcwb0": {
        source: "iana"
      },
      "audio/evrcwb1": {
        source: "iana"
      },
      "audio/evs": {
        source: "iana"
      },
      "audio/flexfec": {
        source: "iana"
      },
      "audio/fwdred": {
        source: "iana"
      },
      "audio/g711-0": {
        source: "iana"
      },
      "audio/g719": {
        source: "iana"
      },
      "audio/g722": {
        source: "iana"
      },
      "audio/g7221": {
        source: "iana"
      },
      "audio/g723": {
        source: "iana"
      },
      "audio/g726-16": {
        source: "iana"
      },
      "audio/g726-24": {
        source: "iana"
      },
      "audio/g726-32": {
        source: "iana"
      },
      "audio/g726-40": {
        source: "iana"
      },
      "audio/g728": {
        source: "iana"
      },
      "audio/g729": {
        source: "iana"
      },
      "audio/g7291": {
        source: "iana"
      },
      "audio/g729d": {
        source: "iana"
      },
      "audio/g729e": {
        source: "iana"
      },
      "audio/gsm": {
        source: "iana"
      },
      "audio/gsm-efr": {
        source: "iana"
      },
      "audio/gsm-hr-08": {
        source: "iana"
      },
      "audio/ilbc": {
        source: "iana"
      },
      "audio/ip-mr_v2.5": {
        source: "iana"
      },
      "audio/isac": {
        source: "apache"
      },
      "audio/l16": {
        source: "iana"
      },
      "audio/l20": {
        source: "iana"
      },
      "audio/l24": {
        source: "iana",
        compressible: false
      },
      "audio/l8": {
        source: "iana"
      },
      "audio/lpc": {
        source: "iana"
      },
      "audio/melp": {
        source: "iana"
      },
      "audio/melp1200": {
        source: "iana"
      },
      "audio/melp2400": {
        source: "iana"
      },
      "audio/melp600": {
        source: "iana"
      },
      "audio/mhas": {
        source: "iana"
      },
      "audio/midi": {
        source: "apache",
        extensions: ["mid", "midi", "kar", "rmi"]
      },
      "audio/mobile-xmf": {
        source: "iana",
        extensions: ["mxmf"]
      },
      "audio/mp3": {
        compressible: false,
        extensions: ["mp3"]
      },
      "audio/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["m4a", "mp4a"]
      },
      "audio/mp4a-latm": {
        source: "iana"
      },
      "audio/mpa": {
        source: "iana"
      },
      "audio/mpa-robust": {
        source: "iana"
      },
      "audio/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
      },
      "audio/mpeg4-generic": {
        source: "iana"
      },
      "audio/musepack": {
        source: "apache"
      },
      "audio/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["oga", "ogg", "spx", "opus"]
      },
      "audio/opus": {
        source: "iana"
      },
      "audio/parityfec": {
        source: "iana"
      },
      "audio/pcma": {
        source: "iana"
      },
      "audio/pcma-wb": {
        source: "iana"
      },
      "audio/pcmu": {
        source: "iana"
      },
      "audio/pcmu-wb": {
        source: "iana"
      },
      "audio/prs.sid": {
        source: "iana"
      },
      "audio/qcelp": {
        source: "iana"
      },
      "audio/raptorfec": {
        source: "iana"
      },
      "audio/red": {
        source: "iana"
      },
      "audio/rtp-enc-aescm128": {
        source: "iana"
      },
      "audio/rtp-midi": {
        source: "iana"
      },
      "audio/rtploopback": {
        source: "iana"
      },
      "audio/rtx": {
        source: "iana"
      },
      "audio/s3m": {
        source: "apache",
        extensions: ["s3m"]
      },
      "audio/scip": {
        source: "iana"
      },
      "audio/silk": {
        source: "apache",
        extensions: ["sil"]
      },
      "audio/smv": {
        source: "iana"
      },
      "audio/smv-qcp": {
        source: "iana"
      },
      "audio/smv0": {
        source: "iana"
      },
      "audio/sofa": {
        source: "iana"
      },
      "audio/sp-midi": {
        source: "iana"
      },
      "audio/speex": {
        source: "iana"
      },
      "audio/t140c": {
        source: "iana"
      },
      "audio/t38": {
        source: "iana"
      },
      "audio/telephone-event": {
        source: "iana"
      },
      "audio/tetra_acelp": {
        source: "iana"
      },
      "audio/tetra_acelp_bb": {
        source: "iana"
      },
      "audio/tone": {
        source: "iana"
      },
      "audio/tsvcis": {
        source: "iana"
      },
      "audio/uemclip": {
        source: "iana"
      },
      "audio/ulpfec": {
        source: "iana"
      },
      "audio/usac": {
        source: "iana"
      },
      "audio/vdvi": {
        source: "iana"
      },
      "audio/vmr-wb": {
        source: "iana"
      },
      "audio/vnd.3gpp.iufp": {
        source: "iana"
      },
      "audio/vnd.4sb": {
        source: "iana"
      },
      "audio/vnd.audiokoz": {
        source: "iana"
      },
      "audio/vnd.celp": {
        source: "iana"
      },
      "audio/vnd.cisco.nse": {
        source: "iana"
      },
      "audio/vnd.cmles.radio-events": {
        source: "iana"
      },
      "audio/vnd.cns.anp1": {
        source: "iana"
      },
      "audio/vnd.cns.inf1": {
        source: "iana"
      },
      "audio/vnd.dece.audio": {
        source: "iana",
        extensions: ["uva", "uvva"]
      },
      "audio/vnd.digital-winds": {
        source: "iana",
        extensions: ["eol"]
      },
      "audio/vnd.dlna.adts": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.1": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.2": {
        source: "iana"
      },
      "audio/vnd.dolby.mlp": {
        source: "iana"
      },
      "audio/vnd.dolby.mps": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2x": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2z": {
        source: "iana"
      },
      "audio/vnd.dolby.pulse.1": {
        source: "iana"
      },
      "audio/vnd.dra": {
        source: "iana",
        extensions: ["dra"]
      },
      "audio/vnd.dts": {
        source: "iana",
        extensions: ["dts"]
      },
      "audio/vnd.dts.hd": {
        source: "iana",
        extensions: ["dtshd"]
      },
      "audio/vnd.dts.uhd": {
        source: "iana"
      },
      "audio/vnd.dvb.file": {
        source: "iana"
      },
      "audio/vnd.everad.plj": {
        source: "iana"
      },
      "audio/vnd.hns.audio": {
        source: "iana"
      },
      "audio/vnd.lucent.voice": {
        source: "iana",
        extensions: ["lvp"]
      },
      "audio/vnd.ms-playready.media.pya": {
        source: "iana",
        extensions: ["pya"]
      },
      "audio/vnd.nokia.mobile-xmf": {
        source: "iana"
      },
      "audio/vnd.nortel.vbk": {
        source: "iana"
      },
      "audio/vnd.nuera.ecelp4800": {
        source: "iana",
        extensions: ["ecelp4800"]
      },
      "audio/vnd.nuera.ecelp7470": {
        source: "iana",
        extensions: ["ecelp7470"]
      },
      "audio/vnd.nuera.ecelp9600": {
        source: "iana",
        extensions: ["ecelp9600"]
      },
      "audio/vnd.octel.sbc": {
        source: "iana"
      },
      "audio/vnd.presonus.multitrack": {
        source: "iana"
      },
      "audio/vnd.qcelp": {
        source: "iana"
      },
      "audio/vnd.rhetorex.32kadpcm": {
        source: "iana"
      },
      "audio/vnd.rip": {
        source: "iana",
        extensions: ["rip"]
      },
      "audio/vnd.rn-realaudio": {
        compressible: false
      },
      "audio/vnd.sealedmedia.softseal.mpeg": {
        source: "iana"
      },
      "audio/vnd.vmx.cvsd": {
        source: "iana"
      },
      "audio/vnd.wave": {
        compressible: false
      },
      "audio/vorbis": {
        source: "iana",
        compressible: false
      },
      "audio/vorbis-config": {
        source: "iana"
      },
      "audio/wav": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/wave": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/webm": {
        source: "apache",
        compressible: false,
        extensions: ["weba"]
      },
      "audio/x-aac": {
        source: "apache",
        compressible: false,
        extensions: ["aac"]
      },
      "audio/x-aiff": {
        source: "apache",
        extensions: ["aif", "aiff", "aifc"]
      },
      "audio/x-caf": {
        source: "apache",
        compressible: false,
        extensions: ["caf"]
      },
      "audio/x-flac": {
        source: "apache",
        extensions: ["flac"]
      },
      "audio/x-m4a": {
        source: "nginx",
        extensions: ["m4a"]
      },
      "audio/x-matroska": {
        source: "apache",
        extensions: ["mka"]
      },
      "audio/x-mpegurl": {
        source: "apache",
        extensions: ["m3u"]
      },
      "audio/x-ms-wax": {
        source: "apache",
        extensions: ["wax"]
      },
      "audio/x-ms-wma": {
        source: "apache",
        extensions: ["wma"]
      },
      "audio/x-pn-realaudio": {
        source: "apache",
        extensions: ["ram", "ra"]
      },
      "audio/x-pn-realaudio-plugin": {
        source: "apache",
        extensions: ["rmp"]
      },
      "audio/x-realaudio": {
        source: "nginx",
        extensions: ["ra"]
      },
      "audio/x-tta": {
        source: "apache"
      },
      "audio/x-wav": {
        source: "apache",
        extensions: ["wav"]
      },
      "audio/xm": {
        source: "apache",
        extensions: ["xm"]
      },
      "chemical/x-cdx": {
        source: "apache",
        extensions: ["cdx"]
      },
      "chemical/x-cif": {
        source: "apache",
        extensions: ["cif"]
      },
      "chemical/x-cmdf": {
        source: "apache",
        extensions: ["cmdf"]
      },
      "chemical/x-cml": {
        source: "apache",
        extensions: ["cml"]
      },
      "chemical/x-csml": {
        source: "apache",
        extensions: ["csml"]
      },
      "chemical/x-pdb": {
        source: "apache"
      },
      "chemical/x-xyz": {
        source: "apache",
        extensions: ["xyz"]
      },
      "font/collection": {
        source: "iana",
        extensions: ["ttc"]
      },
      "font/otf": {
        source: "iana",
        compressible: true,
        extensions: ["otf"]
      },
      "font/sfnt": {
        source: "iana"
      },
      "font/ttf": {
        source: "iana",
        compressible: true,
        extensions: ["ttf"]
      },
      "font/woff": {
        source: "iana",
        extensions: ["woff"]
      },
      "font/woff2": {
        source: "iana",
        extensions: ["woff2"]
      },
      "image/aces": {
        source: "iana",
        extensions: ["exr"]
      },
      "image/apng": {
        compressible: false,
        extensions: ["apng"]
      },
      "image/avci": {
        source: "iana",
        extensions: ["avci"]
      },
      "image/avcs": {
        source: "iana",
        extensions: ["avcs"]
      },
      "image/avif": {
        source: "iana",
        compressible: false,
        extensions: ["avif"]
      },
      "image/bmp": {
        source: "iana",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/cgm": {
        source: "iana",
        extensions: ["cgm"]
      },
      "image/dicom-rle": {
        source: "iana",
        extensions: ["drle"]
      },
      "image/emf": {
        source: "iana",
        extensions: ["emf"]
      },
      "image/fits": {
        source: "iana",
        extensions: ["fits"]
      },
      "image/g3fax": {
        source: "iana",
        extensions: ["g3"]
      },
      "image/gif": {
        source: "iana",
        compressible: false,
        extensions: ["gif"]
      },
      "image/heic": {
        source: "iana",
        extensions: ["heic"]
      },
      "image/heic-sequence": {
        source: "iana",
        extensions: ["heics"]
      },
      "image/heif": {
        source: "iana",
        extensions: ["heif"]
      },
      "image/heif-sequence": {
        source: "iana",
        extensions: ["heifs"]
      },
      "image/hej2k": {
        source: "iana",
        extensions: ["hej2"]
      },
      "image/hsj2": {
        source: "iana",
        extensions: ["hsj2"]
      },
      "image/ief": {
        source: "iana",
        extensions: ["ief"]
      },
      "image/jls": {
        source: "iana",
        extensions: ["jls"]
      },
      "image/jp2": {
        source: "iana",
        compressible: false,
        extensions: ["jp2", "jpg2"]
      },
      "image/jpeg": {
        source: "iana",
        compressible: false,
        extensions: ["jpeg", "jpg", "jpe"]
      },
      "image/jph": {
        source: "iana",
        extensions: ["jph"]
      },
      "image/jphc": {
        source: "iana",
        extensions: ["jhc"]
      },
      "image/jpm": {
        source: "iana",
        compressible: false,
        extensions: ["jpm"]
      },
      "image/jpx": {
        source: "iana",
        compressible: false,
        extensions: ["jpx", "jpf"]
      },
      "image/jxr": {
        source: "iana",
        extensions: ["jxr"]
      },
      "image/jxra": {
        source: "iana",
        extensions: ["jxra"]
      },
      "image/jxrs": {
        source: "iana",
        extensions: ["jxrs"]
      },
      "image/jxs": {
        source: "iana",
        extensions: ["jxs"]
      },
      "image/jxsc": {
        source: "iana",
        extensions: ["jxsc"]
      },
      "image/jxsi": {
        source: "iana",
        extensions: ["jxsi"]
      },
      "image/jxss": {
        source: "iana",
        extensions: ["jxss"]
      },
      "image/ktx": {
        source: "iana",
        extensions: ["ktx"]
      },
      "image/ktx2": {
        source: "iana",
        extensions: ["ktx2"]
      },
      "image/naplps": {
        source: "iana"
      },
      "image/pjpeg": {
        compressible: false
      },
      "image/png": {
        source: "iana",
        compressible: false,
        extensions: ["png"]
      },
      "image/prs.btif": {
        source: "iana",
        extensions: ["btif"]
      },
      "image/prs.pti": {
        source: "iana",
        extensions: ["pti"]
      },
      "image/pwg-raster": {
        source: "iana"
      },
      "image/sgi": {
        source: "apache",
        extensions: ["sgi"]
      },
      "image/svg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["svg", "svgz"]
      },
      "image/t38": {
        source: "iana",
        extensions: ["t38"]
      },
      "image/tiff": {
        source: "iana",
        compressible: false,
        extensions: ["tif", "tiff"]
      },
      "image/tiff-fx": {
        source: "iana",
        extensions: ["tfx"]
      },
      "image/vnd.adobe.photoshop": {
        source: "iana",
        compressible: true,
        extensions: ["psd"]
      },
      "image/vnd.airzip.accelerator.azv": {
        source: "iana",
        extensions: ["azv"]
      },
      "image/vnd.cns.inf2": {
        source: "iana"
      },
      "image/vnd.dece.graphic": {
        source: "iana",
        extensions: ["uvi", "uvvi", "uvg", "uvvg"]
      },
      "image/vnd.djvu": {
        source: "iana",
        extensions: ["djvu", "djv"]
      },
      "image/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "image/vnd.dwg": {
        source: "iana",
        extensions: ["dwg"]
      },
      "image/vnd.dxf": {
        source: "iana",
        extensions: ["dxf"]
      },
      "image/vnd.fastbidsheet": {
        source: "iana",
        extensions: ["fbs"]
      },
      "image/vnd.fpx": {
        source: "iana",
        extensions: ["fpx"]
      },
      "image/vnd.fst": {
        source: "iana",
        extensions: ["fst"]
      },
      "image/vnd.fujixerox.edmics-mmr": {
        source: "iana",
        extensions: ["mmr"]
      },
      "image/vnd.fujixerox.edmics-rlc": {
        source: "iana",
        extensions: ["rlc"]
      },
      "image/vnd.globalgraphics.pgb": {
        source: "iana"
      },
      "image/vnd.microsoft.icon": {
        source: "iana",
        compressible: true,
        extensions: ["ico"]
      },
      "image/vnd.mix": {
        source: "iana"
      },
      "image/vnd.mozilla.apng": {
        source: "iana"
      },
      "image/vnd.ms-dds": {
        compressible: true,
        extensions: ["dds"]
      },
      "image/vnd.ms-modi": {
        source: "iana",
        extensions: ["mdi"]
      },
      "image/vnd.ms-photo": {
        source: "apache",
        extensions: ["wdp"]
      },
      "image/vnd.net-fpx": {
        source: "iana",
        extensions: ["npx"]
      },
      "image/vnd.pco.b16": {
        source: "iana",
        extensions: ["b16"]
      },
      "image/vnd.radiance": {
        source: "iana"
      },
      "image/vnd.sealed.png": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.gif": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.jpg": {
        source: "iana"
      },
      "image/vnd.svf": {
        source: "iana"
      },
      "image/vnd.tencent.tap": {
        source: "iana",
        extensions: ["tap"]
      },
      "image/vnd.valve.source.texture": {
        source: "iana",
        extensions: ["vtf"]
      },
      "image/vnd.wap.wbmp": {
        source: "iana",
        extensions: ["wbmp"]
      },
      "image/vnd.xiff": {
        source: "iana",
        extensions: ["xif"]
      },
      "image/vnd.zbrush.pcx": {
        source: "iana",
        extensions: ["pcx"]
      },
      "image/webp": {
        source: "apache",
        extensions: ["webp"]
      },
      "image/wmf": {
        source: "iana",
        extensions: ["wmf"]
      },
      "image/x-3ds": {
        source: "apache",
        extensions: ["3ds"]
      },
      "image/x-cmu-raster": {
        source: "apache",
        extensions: ["ras"]
      },
      "image/x-cmx": {
        source: "apache",
        extensions: ["cmx"]
      },
      "image/x-freehand": {
        source: "apache",
        extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
      },
      "image/x-icon": {
        source: "apache",
        compressible: true,
        extensions: ["ico"]
      },
      "image/x-jng": {
        source: "nginx",
        extensions: ["jng"]
      },
      "image/x-mrsid-image": {
        source: "apache",
        extensions: ["sid"]
      },
      "image/x-ms-bmp": {
        source: "nginx",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/x-pcx": {
        source: "apache",
        extensions: ["pcx"]
      },
      "image/x-pict": {
        source: "apache",
        extensions: ["pic", "pct"]
      },
      "image/x-portable-anymap": {
        source: "apache",
        extensions: ["pnm"]
      },
      "image/x-portable-bitmap": {
        source: "apache",
        extensions: ["pbm"]
      },
      "image/x-portable-graymap": {
        source: "apache",
        extensions: ["pgm"]
      },
      "image/x-portable-pixmap": {
        source: "apache",
        extensions: ["ppm"]
      },
      "image/x-rgb": {
        source: "apache",
        extensions: ["rgb"]
      },
      "image/x-tga": {
        source: "apache",
        extensions: ["tga"]
      },
      "image/x-xbitmap": {
        source: "apache",
        extensions: ["xbm"]
      },
      "image/x-xcf": {
        compressible: false
      },
      "image/x-xpixmap": {
        source: "apache",
        extensions: ["xpm"]
      },
      "image/x-xwindowdump": {
        source: "apache",
        extensions: ["xwd"]
      },
      "message/cpim": {
        source: "iana"
      },
      "message/delivery-status": {
        source: "iana"
      },
      "message/disposition-notification": {
        source: "iana",
        extensions: [
          "disposition-notification"
        ]
      },
      "message/external-body": {
        source: "iana"
      },
      "message/feedback-report": {
        source: "iana"
      },
      "message/global": {
        source: "iana",
        extensions: ["u8msg"]
      },
      "message/global-delivery-status": {
        source: "iana",
        extensions: ["u8dsn"]
      },
      "message/global-disposition-notification": {
        source: "iana",
        extensions: ["u8mdn"]
      },
      "message/global-headers": {
        source: "iana",
        extensions: ["u8hdr"]
      },
      "message/http": {
        source: "iana",
        compressible: false
      },
      "message/imdn+xml": {
        source: "iana",
        compressible: true
      },
      "message/news": {
        source: "iana"
      },
      "message/partial": {
        source: "iana",
        compressible: false
      },
      "message/rfc822": {
        source: "iana",
        compressible: true,
        extensions: ["eml", "mime"]
      },
      "message/s-http": {
        source: "iana"
      },
      "message/sip": {
        source: "iana"
      },
      "message/sipfrag": {
        source: "iana"
      },
      "message/tracking-status": {
        source: "iana"
      },
      "message/vnd.si.simp": {
        source: "iana"
      },
      "message/vnd.wfa.wsc": {
        source: "iana",
        extensions: ["wsc"]
      },
      "model/3mf": {
        source: "iana",
        extensions: ["3mf"]
      },
      "model/e57": {
        source: "iana"
      },
      "model/gltf+json": {
        source: "iana",
        compressible: true,
        extensions: ["gltf"]
      },
      "model/gltf-binary": {
        source: "iana",
        compressible: true,
        extensions: ["glb"]
      },
      "model/iges": {
        source: "iana",
        compressible: false,
        extensions: ["igs", "iges"]
      },
      "model/mesh": {
        source: "iana",
        compressible: false,
        extensions: ["msh", "mesh", "silo"]
      },
      "model/mtl": {
        source: "iana",
        extensions: ["mtl"]
      },
      "model/obj": {
        source: "iana",
        extensions: ["obj"]
      },
      "model/step": {
        source: "iana"
      },
      "model/step+xml": {
        source: "iana",
        compressible: true,
        extensions: ["stpx"]
      },
      "model/step+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpz"]
      },
      "model/step-xml+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpxz"]
      },
      "model/stl": {
        source: "iana",
        extensions: ["stl"]
      },
      "model/vnd.collada+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dae"]
      },
      "model/vnd.dwf": {
        source: "iana",
        extensions: ["dwf"]
      },
      "model/vnd.flatland.3dml": {
        source: "iana"
      },
      "model/vnd.gdl": {
        source: "iana",
        extensions: ["gdl"]
      },
      "model/vnd.gs-gdl": {
        source: "apache"
      },
      "model/vnd.gs.gdl": {
        source: "iana"
      },
      "model/vnd.gtw": {
        source: "iana",
        extensions: ["gtw"]
      },
      "model/vnd.moml+xml": {
        source: "iana",
        compressible: true
      },
      "model/vnd.mts": {
        source: "iana",
        extensions: ["mts"]
      },
      "model/vnd.opengex": {
        source: "iana",
        extensions: ["ogex"]
      },
      "model/vnd.parasolid.transmit.binary": {
        source: "iana",
        extensions: ["x_b"]
      },
      "model/vnd.parasolid.transmit.text": {
        source: "iana",
        extensions: ["x_t"]
      },
      "model/vnd.pytha.pyox": {
        source: "iana"
      },
      "model/vnd.rosette.annotated-data-model": {
        source: "iana"
      },
      "model/vnd.sap.vds": {
        source: "iana",
        extensions: ["vds"]
      },
      "model/vnd.usdz+zip": {
        source: "iana",
        compressible: false,
        extensions: ["usdz"]
      },
      "model/vnd.valve.source.compiled-map": {
        source: "iana",
        extensions: ["bsp"]
      },
      "model/vnd.vtu": {
        source: "iana",
        extensions: ["vtu"]
      },
      "model/vrml": {
        source: "iana",
        compressible: false,
        extensions: ["wrl", "vrml"]
      },
      "model/x3d+binary": {
        source: "apache",
        compressible: false,
        extensions: ["x3db", "x3dbz"]
      },
      "model/x3d+fastinfoset": {
        source: "iana",
        extensions: ["x3db"]
      },
      "model/x3d+vrml": {
        source: "apache",
        compressible: false,
        extensions: ["x3dv", "x3dvz"]
      },
      "model/x3d+xml": {
        source: "iana",
        compressible: true,
        extensions: ["x3d", "x3dz"]
      },
      "model/x3d-vrml": {
        source: "iana",
        extensions: ["x3dv"]
      },
      "multipart/alternative": {
        source: "iana",
        compressible: false
      },
      "multipart/appledouble": {
        source: "iana"
      },
      "multipart/byteranges": {
        source: "iana"
      },
      "multipart/digest": {
        source: "iana"
      },
      "multipart/encrypted": {
        source: "iana",
        compressible: false
      },
      "multipart/form-data": {
        source: "iana",
        compressible: false
      },
      "multipart/header-set": {
        source: "iana"
      },
      "multipart/mixed": {
        source: "iana"
      },
      "multipart/multilingual": {
        source: "iana"
      },
      "multipart/parallel": {
        source: "iana"
      },
      "multipart/related": {
        source: "iana",
        compressible: false
      },
      "multipart/report": {
        source: "iana"
      },
      "multipart/signed": {
        source: "iana",
        compressible: false
      },
      "multipart/vnd.bint.med-plus": {
        source: "iana"
      },
      "multipart/voice-message": {
        source: "iana"
      },
      "multipart/x-mixed-replace": {
        source: "iana"
      },
      "text/1d-interleaved-parityfec": {
        source: "iana"
      },
      "text/cache-manifest": {
        source: "iana",
        compressible: true,
        extensions: ["appcache", "manifest"]
      },
      "text/calendar": {
        source: "iana",
        extensions: ["ics", "ifb"]
      },
      "text/calender": {
        compressible: true
      },
      "text/cmd": {
        compressible: true
      },
      "text/coffeescript": {
        extensions: ["coffee", "litcoffee"]
      },
      "text/cql": {
        source: "iana"
      },
      "text/cql-expression": {
        source: "iana"
      },
      "text/cql-identifier": {
        source: "iana"
      },
      "text/css": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["css"]
      },
      "text/csv": {
        source: "iana",
        compressible: true,
        extensions: ["csv"]
      },
      "text/csv-schema": {
        source: "iana"
      },
      "text/directory": {
        source: "iana"
      },
      "text/dns": {
        source: "iana"
      },
      "text/ecmascript": {
        source: "iana"
      },
      "text/encaprtp": {
        source: "iana"
      },
      "text/enriched": {
        source: "iana"
      },
      "text/fhirpath": {
        source: "iana"
      },
      "text/flexfec": {
        source: "iana"
      },
      "text/fwdred": {
        source: "iana"
      },
      "text/gff3": {
        source: "iana"
      },
      "text/grammar-ref-list": {
        source: "iana"
      },
      "text/html": {
        source: "iana",
        compressible: true,
        extensions: ["html", "htm", "shtml"]
      },
      "text/jade": {
        extensions: ["jade"]
      },
      "text/javascript": {
        source: "iana",
        compressible: true
      },
      "text/jcr-cnd": {
        source: "iana"
      },
      "text/jsx": {
        compressible: true,
        extensions: ["jsx"]
      },
      "text/less": {
        compressible: true,
        extensions: ["less"]
      },
      "text/markdown": {
        source: "iana",
        compressible: true,
        extensions: ["markdown", "md"]
      },
      "text/mathml": {
        source: "nginx",
        extensions: ["mml"]
      },
      "text/mdx": {
        compressible: true,
        extensions: ["mdx"]
      },
      "text/mizar": {
        source: "iana"
      },
      "text/n3": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["n3"]
      },
      "text/parameters": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/parityfec": {
        source: "iana"
      },
      "text/plain": {
        source: "iana",
        compressible: true,
        extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
      },
      "text/provenance-notation": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/prs.fallenstein.rst": {
        source: "iana"
      },
      "text/prs.lines.tag": {
        source: "iana",
        extensions: ["dsc"]
      },
      "text/prs.prop.logic": {
        source: "iana"
      },
      "text/raptorfec": {
        source: "iana"
      },
      "text/red": {
        source: "iana"
      },
      "text/rfc822-headers": {
        source: "iana"
      },
      "text/richtext": {
        source: "iana",
        compressible: true,
        extensions: ["rtx"]
      },
      "text/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "text/rtp-enc-aescm128": {
        source: "iana"
      },
      "text/rtploopback": {
        source: "iana"
      },
      "text/rtx": {
        source: "iana"
      },
      "text/sgml": {
        source: "iana",
        extensions: ["sgml", "sgm"]
      },
      "text/shaclc": {
        source: "iana"
      },
      "text/shex": {
        source: "iana",
        extensions: ["shex"]
      },
      "text/slim": {
        extensions: ["slim", "slm"]
      },
      "text/spdx": {
        source: "iana",
        extensions: ["spdx"]
      },
      "text/strings": {
        source: "iana"
      },
      "text/stylus": {
        extensions: ["stylus", "styl"]
      },
      "text/t140": {
        source: "iana"
      },
      "text/tab-separated-values": {
        source: "iana",
        compressible: true,
        extensions: ["tsv"]
      },
      "text/troff": {
        source: "iana",
        extensions: ["t", "tr", "roff", "man", "me", "ms"]
      },
      "text/turtle": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["ttl"]
      },
      "text/ulpfec": {
        source: "iana"
      },
      "text/uri-list": {
        source: "iana",
        compressible: true,
        extensions: ["uri", "uris", "urls"]
      },
      "text/vcard": {
        source: "iana",
        compressible: true,
        extensions: ["vcard"]
      },
      "text/vnd.a": {
        source: "iana"
      },
      "text/vnd.abc": {
        source: "iana"
      },
      "text/vnd.ascii-art": {
        source: "iana"
      },
      "text/vnd.curl": {
        source: "iana",
        extensions: ["curl"]
      },
      "text/vnd.curl.dcurl": {
        source: "apache",
        extensions: ["dcurl"]
      },
      "text/vnd.curl.mcurl": {
        source: "apache",
        extensions: ["mcurl"]
      },
      "text/vnd.curl.scurl": {
        source: "apache",
        extensions: ["scurl"]
      },
      "text/vnd.debian.copyright": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.dmclientscript": {
        source: "iana"
      },
      "text/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "text/vnd.esmertec.theme-descriptor": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.familysearch.gedcom": {
        source: "iana",
        extensions: ["ged"]
      },
      "text/vnd.ficlab.flt": {
        source: "iana"
      },
      "text/vnd.fly": {
        source: "iana",
        extensions: ["fly"]
      },
      "text/vnd.fmi.flexstor": {
        source: "iana",
        extensions: ["flx"]
      },
      "text/vnd.gml": {
        source: "iana"
      },
      "text/vnd.graphviz": {
        source: "iana",
        extensions: ["gv"]
      },
      "text/vnd.hans": {
        source: "iana"
      },
      "text/vnd.hgl": {
        source: "iana"
      },
      "text/vnd.in3d.3dml": {
        source: "iana",
        extensions: ["3dml"]
      },
      "text/vnd.in3d.spot": {
        source: "iana",
        extensions: ["spot"]
      },
      "text/vnd.iptc.newsml": {
        source: "iana"
      },
      "text/vnd.iptc.nitf": {
        source: "iana"
      },
      "text/vnd.latex-z": {
        source: "iana"
      },
      "text/vnd.motorola.reflex": {
        source: "iana"
      },
      "text/vnd.ms-mediapackage": {
        source: "iana"
      },
      "text/vnd.net2phone.commcenter.command": {
        source: "iana"
      },
      "text/vnd.radisys.msml-basic-layout": {
        source: "iana"
      },
      "text/vnd.senx.warpscript": {
        source: "iana"
      },
      "text/vnd.si.uricatalogue": {
        source: "iana"
      },
      "text/vnd.sosi": {
        source: "iana"
      },
      "text/vnd.sun.j2me.app-descriptor": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["jad"]
      },
      "text/vnd.trolltech.linguist": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.wap.si": {
        source: "iana"
      },
      "text/vnd.wap.sl": {
        source: "iana"
      },
      "text/vnd.wap.wml": {
        source: "iana",
        extensions: ["wml"]
      },
      "text/vnd.wap.wmlscript": {
        source: "iana",
        extensions: ["wmls"]
      },
      "text/vtt": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["vtt"]
      },
      "text/x-asm": {
        source: "apache",
        extensions: ["s", "asm"]
      },
      "text/x-c": {
        source: "apache",
        extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
      },
      "text/x-component": {
        source: "nginx",
        extensions: ["htc"]
      },
      "text/x-fortran": {
        source: "apache",
        extensions: ["f", "for", "f77", "f90"]
      },
      "text/x-gwt-rpc": {
        compressible: true
      },
      "text/x-handlebars-template": {
        extensions: ["hbs"]
      },
      "text/x-java-source": {
        source: "apache",
        extensions: ["java"]
      },
      "text/x-jquery-tmpl": {
        compressible: true
      },
      "text/x-lua": {
        extensions: ["lua"]
      },
      "text/x-markdown": {
        compressible: true,
        extensions: ["mkd"]
      },
      "text/x-nfo": {
        source: "apache",
        extensions: ["nfo"]
      },
      "text/x-opml": {
        source: "apache",
        extensions: ["opml"]
      },
      "text/x-org": {
        compressible: true,
        extensions: ["org"]
      },
      "text/x-pascal": {
        source: "apache",
        extensions: ["p", "pas"]
      },
      "text/x-processing": {
        compressible: true,
        extensions: ["pde"]
      },
      "text/x-sass": {
        extensions: ["sass"]
      },
      "text/x-scss": {
        extensions: ["scss"]
      },
      "text/x-setext": {
        source: "apache",
        extensions: ["etx"]
      },
      "text/x-sfv": {
        source: "apache",
        extensions: ["sfv"]
      },
      "text/x-suse-ymp": {
        compressible: true,
        extensions: ["ymp"]
      },
      "text/x-uuencode": {
        source: "apache",
        extensions: ["uu"]
      },
      "text/x-vcalendar": {
        source: "apache",
        extensions: ["vcs"]
      },
      "text/x-vcard": {
        source: "apache",
        extensions: ["vcf"]
      },
      "text/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml"]
      },
      "text/xml-external-parsed-entity": {
        source: "iana"
      },
      "text/yaml": {
        compressible: true,
        extensions: ["yaml", "yml"]
      },
      "video/1d-interleaved-parityfec": {
        source: "iana"
      },
      "video/3gpp": {
        source: "iana",
        extensions: ["3gp", "3gpp"]
      },
      "video/3gpp-tt": {
        source: "iana"
      },
      "video/3gpp2": {
        source: "iana",
        extensions: ["3g2"]
      },
      "video/av1": {
        source: "iana"
      },
      "video/bmpeg": {
        source: "iana"
      },
      "video/bt656": {
        source: "iana"
      },
      "video/celb": {
        source: "iana"
      },
      "video/dv": {
        source: "iana"
      },
      "video/encaprtp": {
        source: "iana"
      },
      "video/ffv1": {
        source: "iana"
      },
      "video/flexfec": {
        source: "iana"
      },
      "video/h261": {
        source: "iana",
        extensions: ["h261"]
      },
      "video/h263": {
        source: "iana",
        extensions: ["h263"]
      },
      "video/h263-1998": {
        source: "iana"
      },
      "video/h263-2000": {
        source: "iana"
      },
      "video/h264": {
        source: "iana",
        extensions: ["h264"]
      },
      "video/h264-rcdo": {
        source: "iana"
      },
      "video/h264-svc": {
        source: "iana"
      },
      "video/h265": {
        source: "iana"
      },
      "video/iso.segment": {
        source: "iana",
        extensions: ["m4s"]
      },
      "video/jpeg": {
        source: "iana",
        extensions: ["jpgv"]
      },
      "video/jpeg2000": {
        source: "iana"
      },
      "video/jpm": {
        source: "apache",
        extensions: ["jpm", "jpgm"]
      },
      "video/jxsv": {
        source: "iana"
      },
      "video/mj2": {
        source: "iana",
        extensions: ["mj2", "mjp2"]
      },
      "video/mp1s": {
        source: "iana"
      },
      "video/mp2p": {
        source: "iana"
      },
      "video/mp2t": {
        source: "iana",
        extensions: ["ts"]
      },
      "video/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["mp4", "mp4v", "mpg4"]
      },
      "video/mp4v-es": {
        source: "iana"
      },
      "video/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
      },
      "video/mpeg4-generic": {
        source: "iana"
      },
      "video/mpv": {
        source: "iana"
      },
      "video/nv": {
        source: "iana"
      },
      "video/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogv"]
      },
      "video/parityfec": {
        source: "iana"
      },
      "video/pointer": {
        source: "iana"
      },
      "video/quicktime": {
        source: "iana",
        compressible: false,
        extensions: ["qt", "mov"]
      },
      "video/raptorfec": {
        source: "iana"
      },
      "video/raw": {
        source: "iana"
      },
      "video/rtp-enc-aescm128": {
        source: "iana"
      },
      "video/rtploopback": {
        source: "iana"
      },
      "video/rtx": {
        source: "iana"
      },
      "video/scip": {
        source: "iana"
      },
      "video/smpte291": {
        source: "iana"
      },
      "video/smpte292m": {
        source: "iana"
      },
      "video/ulpfec": {
        source: "iana"
      },
      "video/vc1": {
        source: "iana"
      },
      "video/vc2": {
        source: "iana"
      },
      "video/vnd.cctv": {
        source: "iana"
      },
      "video/vnd.dece.hd": {
        source: "iana",
        extensions: ["uvh", "uvvh"]
      },
      "video/vnd.dece.mobile": {
        source: "iana",
        extensions: ["uvm", "uvvm"]
      },
      "video/vnd.dece.mp4": {
        source: "iana"
      },
      "video/vnd.dece.pd": {
        source: "iana",
        extensions: ["uvp", "uvvp"]
      },
      "video/vnd.dece.sd": {
        source: "iana",
        extensions: ["uvs", "uvvs"]
      },
      "video/vnd.dece.video": {
        source: "iana",
        extensions: ["uvv", "uvvv"]
      },
      "video/vnd.directv.mpeg": {
        source: "iana"
      },
      "video/vnd.directv.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dlna.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dvb.file": {
        source: "iana",
        extensions: ["dvb"]
      },
      "video/vnd.fvt": {
        source: "iana",
        extensions: ["fvt"]
      },
      "video/vnd.hns.video": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsavc": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsmpeg2": {
        source: "iana"
      },
      "video/vnd.motorola.video": {
        source: "iana"
      },
      "video/vnd.motorola.videop": {
        source: "iana"
      },
      "video/vnd.mpegurl": {
        source: "iana",
        extensions: ["mxu", "m4u"]
      },
      "video/vnd.ms-playready.media.pyv": {
        source: "iana",
        extensions: ["pyv"]
      },
      "video/vnd.nokia.interleaved-multimedia": {
        source: "iana"
      },
      "video/vnd.nokia.mp4vr": {
        source: "iana"
      },
      "video/vnd.nokia.videovoip": {
        source: "iana"
      },
      "video/vnd.objectvideo": {
        source: "iana"
      },
      "video/vnd.radgamettools.bink": {
        source: "iana"
      },
      "video/vnd.radgamettools.smacker": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg1": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg4": {
        source: "iana"
      },
      "video/vnd.sealed.swf": {
        source: "iana"
      },
      "video/vnd.sealedmedia.softseal.mov": {
        source: "iana"
      },
      "video/vnd.uvvu.mp4": {
        source: "iana",
        extensions: ["uvu", "uvvu"]
      },
      "video/vnd.vivo": {
        source: "iana",
        extensions: ["viv"]
      },
      "video/vnd.youtube.yt": {
        source: "iana"
      },
      "video/vp8": {
        source: "iana"
      },
      "video/vp9": {
        source: "iana"
      },
      "video/webm": {
        source: "apache",
        compressible: false,
        extensions: ["webm"]
      },
      "video/x-f4v": {
        source: "apache",
        extensions: ["f4v"]
      },
      "video/x-fli": {
        source: "apache",
        extensions: ["fli"]
      },
      "video/x-flv": {
        source: "apache",
        compressible: false,
        extensions: ["flv"]
      },
      "video/x-m4v": {
        source: "apache",
        extensions: ["m4v"]
      },
      "video/x-matroska": {
        source: "apache",
        compressible: false,
        extensions: ["mkv", "mk3d", "mks"]
      },
      "video/x-mng": {
        source: "apache",
        extensions: ["mng"]
      },
      "video/x-ms-asf": {
        source: "apache",
        extensions: ["asf", "asx"]
      },
      "video/x-ms-vob": {
        source: "apache",
        extensions: ["vob"]
      },
      "video/x-ms-wm": {
        source: "apache",
        extensions: ["wm"]
      },
      "video/x-ms-wmv": {
        source: "apache",
        compressible: false,
        extensions: ["wmv"]
      },
      "video/x-ms-wmx": {
        source: "apache",
        extensions: ["wmx"]
      },
      "video/x-ms-wvx": {
        source: "apache",
        extensions: ["wvx"]
      },
      "video/x-msvideo": {
        source: "apache",
        extensions: ["avi"]
      },
      "video/x-sgi-movie": {
        source: "apache",
        extensions: ["movie"]
      },
      "video/x-smv": {
        source: "apache",
        extensions: ["smv"]
      },
      "x-conference/x-cooltalk": {
        source: "apache",
        extensions: ["ice"]
      },
      "x-shader/x-fragment": {
        compressible: true
      },
      "x-shader/x-vertex": {
        compressible: true
      }
    };
  }
});

// node_modules/mime-db/index.js
var require_mime_db = __commonJS({
  "node_modules/mime-db/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = require_db();
  }
});

// node_modules/mime-types/index.js
var require_mime_types = __commonJS({
  "node_modules/mime-types/index.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var db = require_mime_db();
    var extname = require_path().extname;
    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;
    exports.charset = charset;
    exports.charsets = { lookup: charset };
    exports.contentType = contentType;
    exports.extension = extension;
    exports.extensions = /* @__PURE__ */ Object.create(null);
    exports.lookup = lookup;
    exports.types = /* @__PURE__ */ Object.create(null);
    populateMaps(exports.extensions, exports.types);
    function charset(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && db[match[1].toLowerCase()];
      if (mime && mime.charset) {
        return mime.charset;
      }
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return "UTF-8";
      }
      return false;
    }
    __name(charset, "charset");
    function contentType(str) {
      if (!str || typeof str !== "string") {
        return false;
      }
      var mime = str.indexOf("/") === -1 ? exports.lookup(str) : str;
      if (!mime) {
        return false;
      }
      if (mime.indexOf("charset") === -1) {
        var charset2 = exports.charset(mime);
        if (charset2) mime += "; charset=" + charset2.toLowerCase();
      }
      return mime;
    }
    __name(contentType, "contentType");
    function extension(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var exts = match && exports.extensions[match[1].toLowerCase()];
      if (!exts || !exts.length) {
        return false;
      }
      return exts[0];
    }
    __name(extension, "extension");
    function lookup(path) {
      if (!path || typeof path !== "string") {
        return false;
      }
      var extension2 = extname("x." + path).toLowerCase().substr(1);
      if (!extension2) {
        return false;
      }
      return exports.types[extension2] || false;
    }
    __name(lookup, "lookup");
    function populateMaps(extensions, types) {
      var preference = ["nginx", "apache", void 0, "iana"];
      Object.keys(db).forEach(/* @__PURE__ */ __name(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
          return;
        }
        extensions[type] = exts;
        for (var i = 0; i < exts.length; i++) {
          var extension2 = exts[i];
          if (types[extension2]) {
            var from = preference.indexOf(db[types[extension2]].source);
            var to = preference.indexOf(mime.source);
            if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
              continue;
            }
          }
          types[extension2] = type;
        }
      }, "forEachMimeType"));
    }
    __name(populateMaps, "populateMaps");
  }
});

// node_modules/type-is/index.js
var require_type_is = __commonJS({
  "node_modules/type-is/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var typer = require_media_typer();
    var mime = require_mime_types();
    module.exports = typeofrequest;
    module.exports.is = typeis;
    module.exports.hasBody = hasbody;
    module.exports.normalize = normalize;
    module.exports.match = mimeMatch;
    function typeis(value, types_) {
      var i;
      var types = types_;
      var val = tryNormalizeType(value);
      if (!val) {
        return false;
      }
      if (types && !Array.isArray(types)) {
        types = new Array(arguments.length - 1);
        for (i = 0; i < types.length; i++) {
          types[i] = arguments[i + 1];
        }
      }
      if (!types || !types.length) {
        return val;
      }
      var type;
      for (i = 0; i < types.length; i++) {
        if (mimeMatch(normalize(type = types[i]), val)) {
          return type[0] === "+" || type.indexOf("*") !== -1 ? val : type;
        }
      }
      return false;
    }
    __name(typeis, "typeis");
    function hasbody(req) {
      return req.headers["transfer-encoding"] !== void 0 || !isNaN(req.headers["content-length"]);
    }
    __name(hasbody, "hasbody");
    function typeofrequest(req, types_) {
      var types = types_;
      if (!hasbody(req)) {
        return null;
      }
      if (arguments.length > 2) {
        types = new Array(arguments.length - 1);
        for (var i = 0; i < types.length; i++) {
          types[i] = arguments[i + 1];
        }
      }
      var value = req.headers["content-type"];
      return typeis(value, types);
    }
    __name(typeofrequest, "typeofrequest");
    function normalize(type) {
      if (typeof type !== "string") {
        return false;
      }
      switch (type) {
        case "urlencoded":
          return "application/x-www-form-urlencoded";
        case "multipart":
          return "multipart/*";
      }
      if (type[0] === "+") {
        return "*/*" + type;
      }
      return type.indexOf("/") === -1 ? mime.lookup(type) : type;
    }
    __name(normalize, "normalize");
    function mimeMatch(expected, actual) {
      if (expected === false) {
        return false;
      }
      var actualParts = actual.split("/");
      var expectedParts = expected.split("/");
      if (actualParts.length !== 2 || expectedParts.length !== 2) {
        return false;
      }
      if (expectedParts[0] !== "*" && expectedParts[0] !== actualParts[0]) {
        return false;
      }
      if (expectedParts[1].substr(0, 2) === "*+") {
        return expectedParts[1].length <= actualParts[1].length + 1 && expectedParts[1].substr(1) === actualParts[1].substr(1 - expectedParts[1].length);
      }
      if (expectedParts[1] !== "*" && expectedParts[1] !== actualParts[1]) {
        return false;
      }
      return true;
    }
    __name(mimeMatch, "mimeMatch");
    function normalizeType(value) {
      var type = typer.parse(value);
      type.parameters = void 0;
      return typer.format(type);
    }
    __name(normalizeType, "normalizeType");
    function tryNormalizeType(value) {
      if (!value) {
        return null;
      }
      try {
        return normalizeType(value);
      } catch (err) {
        return null;
      }
    }
    __name(tryNormalizeType, "tryNormalizeType");
  }
});

// node_modules/body-parser/lib/types/json.js
var require_json = __commonJS({
  "node_modules/body-parser/lib/types/json.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bytes = require_bytes();
    var contentType = require_content_type();
    var createError = require_http_errors();
    var debug = require_src()("body-parser:json");
    var read = require_read();
    var typeis = require_type_is();
    module.exports = json;
    var FIRST_CHAR_REGEXP = /^[\x20\x09\x0a\x0d]*([^\x20\x09\x0a\x0d])/;
    var JSON_SYNTAX_CHAR = "#";
    var JSON_SYNTAX_REGEXP = /#+/g;
    function json(options) {
      var opts = options || {};
      var limit = typeof opts.limit === "undefined" || opts.limit === null ? 102400 : bytes.parse(opts.limit);
      var inflate = opts.inflate !== false;
      var reviver = opts.reviver;
      var strict = opts.strict !== false;
      var type = opts.type || "application/json";
      var verify = opts.verify || false;
      if (limit === null) {
        throw new TypeError('option limit "' + String(opts.limit) + '" is invalid');
      }
      if (verify !== false && typeof verify !== "function") {
        throw new TypeError("option verify must be function");
      }
      var shouldParse = typeof type !== "function" ? typeChecker(type) : type;
      function parse(body) {
        if (body.length === 0) {
          return {};
        }
        if (strict) {
          var first = firstchar(body);
          if (first !== "{" && first !== "[") {
            debug("strict violation");
            throw createStrictSyntaxError(body, first);
          }
        }
        try {
          debug("parse json");
          return JSON.parse(body, reviver);
        } catch (e) {
          throw normalizeJsonSyntaxError(e, {
            message: e.message,
            stack: e.stack
          });
        }
      }
      __name(parse, "parse");
      return /* @__PURE__ */ __name(function jsonParser(req, res, next) {
        if (req._body) {
          debug("body already parsed");
          next();
          return;
        }
        req.body = req.body || {};
        if (!typeis.hasBody(req)) {
          debug("skip empty body");
          next();
          return;
        }
        debug("content-type %j", req.headers["content-type"]);
        if (!shouldParse(req)) {
          debug("skip parsing");
          next();
          return;
        }
        var charset = getCharset(req) || "utf-8";
        if (charset.slice(0, 4) !== "utf-") {
          debug("invalid charset");
          next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
            charset,
            type: "charset.unsupported"
          }));
          return;
        }
        read(req, res, next, parse, debug, {
          encoding: charset,
          inflate,
          limit,
          verify
        });
      }, "jsonParser");
    }
    __name(json, "json");
    function createStrictSyntaxError(str, char) {
      var index = str.indexOf(char);
      var partial = "";
      if (index !== -1) {
        partial = str.substring(0, index) + new Array(str.length - index + 1).join(JSON_SYNTAX_CHAR);
      }
      try {
        JSON.parse(partial);
        throw new SyntaxError("strict violation");
      } catch (e) {
        return normalizeJsonSyntaxError(e, {
          message: e.message.replace(JSON_SYNTAX_REGEXP, function(placeholder) {
            return str.substring(index, index + placeholder.length);
          }),
          stack: e.stack
        });
      }
    }
    __name(createStrictSyntaxError, "createStrictSyntaxError");
    function firstchar(str) {
      var match = FIRST_CHAR_REGEXP.exec(str);
      return match ? match[1] : void 0;
    }
    __name(firstchar, "firstchar");
    function getCharset(req) {
      try {
        return (contentType.parse(req).parameters.charset || "").toLowerCase();
      } catch (e) {
        return void 0;
      }
    }
    __name(getCharset, "getCharset");
    function normalizeJsonSyntaxError(error, obj) {
      var keys = Object.getOwnPropertyNames(error);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key !== "stack" && key !== "message") {
          delete error[key];
        }
      }
      error.stack = obj.stack.replace(error.message, obj.message);
      error.message = obj.message;
      return error;
    }
    __name(normalizeJsonSyntaxError, "normalizeJsonSyntaxError");
    function typeChecker(type) {
      return /* @__PURE__ */ __name(function checkType(req) {
        return Boolean(typeis(req, type));
      }, "checkType");
    }
    __name(typeChecker, "typeChecker");
  }
});

// node_modules/body-parser/lib/types/raw.js
var require_raw = __commonJS({
  "node_modules/body-parser/lib/types/raw.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bytes = require_bytes();
    var debug = require_src()("body-parser:raw");
    var read = require_read();
    var typeis = require_type_is();
    module.exports = raw;
    function raw(options) {
      var opts = options || {};
      var inflate = opts.inflate !== false;
      var limit = typeof opts.limit === "undefined" || opts.limit === null ? 102400 : bytes.parse(opts.limit);
      var type = opts.type || "application/octet-stream";
      var verify = opts.verify || false;
      if (limit === null) {
        throw new TypeError('option limit "' + String(opts.limit) + '" is invalid');
      }
      if (verify !== false && typeof verify !== "function") {
        throw new TypeError("option verify must be function");
      }
      var shouldParse = typeof type !== "function" ? typeChecker(type) : type;
      function parse(buf) {
        return buf;
      }
      __name(parse, "parse");
      return /* @__PURE__ */ __name(function rawParser(req, res, next) {
        if (req._body) {
          debug("body already parsed");
          next();
          return;
        }
        req.body = req.body || {};
        if (!typeis.hasBody(req)) {
          debug("skip empty body");
          next();
          return;
        }
        debug("content-type %j", req.headers["content-type"]);
        if (!shouldParse(req)) {
          debug("skip parsing");
          next();
          return;
        }
        read(req, res, next, parse, debug, {
          encoding: null,
          inflate,
          limit,
          verify
        });
      }, "rawParser");
    }
    __name(raw, "raw");
    function typeChecker(type) {
      return /* @__PURE__ */ __name(function checkType(req) {
        return Boolean(typeis(req, type));
      }, "checkType");
    }
    __name(typeChecker, "typeChecker");
  }
});

// node_modules/body-parser/lib/types/text.js
var require_text = __commonJS({
  "node_modules/body-parser/lib/types/text.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bytes = require_bytes();
    var contentType = require_content_type();
    var debug = require_src()("body-parser:text");
    var read = require_read();
    var typeis = require_type_is();
    module.exports = text;
    function text(options) {
      var opts = options || {};
      var defaultCharset = opts.defaultCharset || "utf-8";
      var inflate = opts.inflate !== false;
      var limit = typeof opts.limit === "undefined" || opts.limit === null ? 102400 : bytes.parse(opts.limit);
      var type = opts.type || "text/plain";
      var verify = opts.verify || false;
      if (limit === null) {
        throw new TypeError('option limit "' + String(opts.limit) + '" is invalid');
      }
      if (verify !== false && typeof verify !== "function") {
        throw new TypeError("option verify must be function");
      }
      var shouldParse = typeof type !== "function" ? typeChecker(type) : type;
      function parse(buf) {
        return buf;
      }
      __name(parse, "parse");
      return /* @__PURE__ */ __name(function textParser(req, res, next) {
        if (req._body) {
          debug("body already parsed");
          next();
          return;
        }
        req.body = req.body || {};
        if (!typeis.hasBody(req)) {
          debug("skip empty body");
          next();
          return;
        }
        debug("content-type %j", req.headers["content-type"]);
        if (!shouldParse(req)) {
          debug("skip parsing");
          next();
          return;
        }
        var charset = getCharset(req) || defaultCharset;
        read(req, res, next, parse, debug, {
          encoding: charset,
          inflate,
          limit,
          verify
        });
      }, "textParser");
    }
    __name(text, "text");
    function getCharset(req) {
      try {
        return (contentType.parse(req).parameters.charset || "").toLowerCase();
      } catch (e) {
        return void 0;
      }
    }
    __name(getCharset, "getCharset");
    function typeChecker(type) {
      return /* @__PURE__ */ __name(function checkType(req) {
        return Boolean(typeis(req, type));
      }, "checkType");
    }
    __name(typeChecker, "typeChecker");
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = TypeError;
  }
});

// (disabled):node_modules/object-inspect/util.inspect
var require_util2 = __commonJS({
  "(disabled):node_modules/object-inspect/util.inspect"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    __name(addNumericSeparator, "addNumericSeparator");
    var utilInspect = require_util2();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    var quotes = {
      __proto__: null,
      "double": '"',
      single: "'"
    };
    var quoteREs = {
      __proto__: null,
      "double": /(["\\])/g,
      single: /(['\\])/g
    };
    module.exports = /* @__PURE__ */ __name(function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      __name(inspect, "inspect");
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    }, "inspect_");
    function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
    }
    __name(wrapQuotes, "wrapQuotes");
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    __name(quote, "quote");
    function canTrustToString(obj) {
      return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
    }
    __name(canTrustToString, "canTrustToString");
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && canTrustToString(obj);
    }
    __name(isArray, "isArray");
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && canTrustToString(obj);
    }
    __name(isDate, "isDate");
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
    }
    __name(isRegExp, "isRegExp");
    function isError(obj) {
      return toStr(obj) === "[object Error]" && canTrustToString(obj);
    }
    __name(isError, "isError");
    function isString(obj) {
      return toStr(obj) === "[object String]" && canTrustToString(obj);
    }
    __name(isString, "isString");
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && canTrustToString(obj);
    }
    __name(isNumber, "isNumber");
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
    }
    __name(isBoolean, "isBoolean");
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isSymbol, "isSymbol");
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isBigInt, "isBigInt");
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    __name(has, "has");
    function toStr(obj) {
      return objectToString.call(obj);
    }
    __name(toStr, "toStr");
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    __name(nameOf, "nameOf");
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    __name(indexOf, "indexOf");
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    __name(isMap, "isMap");
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakMap, "isWeakMap");
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakRef, "isWeakRef");
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    __name(isSet, "isSet");
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakSet, "isWeakSet");
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    __name(isElement, "isElement");
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || "single"];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    __name(inspectString, "inspectString");
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    __name(lowbyte, "lowbyte");
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    __name(markBoxed, "markBoxed");
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    __name(weakCollectionOf, "weakCollectionOf");
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    __name(collectionOf, "collectionOf");
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    __name(singleLineValues, "singleLineValues");
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    __name(getIndent, "getIndent");
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    __name(indentedJoin, "indentedJoin");
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
    __name(arrObjKeys, "arrObjKeys");
  }
});

// node_modules/side-channel-list/index.js
var require_side_channel_list = __commonJS({
  "node_modules/side-channel-list/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var listGetNode = /* @__PURE__ */ __name(function(list, key, isDelete) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) != null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          if (!isDelete) {
            curr.next = /** @type {NonNullable<typeof list.next>} */
            list.next;
            list.next = curr;
          }
          return curr;
        }
      }
    }, "listGetNode");
    var listGet = /* @__PURE__ */ __name(function(objects, key) {
      if (!objects) {
        return void 0;
      }
      var node = listGetNode(objects, key);
      return node && node.value;
    }, "listGet");
    var listSet = /* @__PURE__ */ __name(function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    }, "listSet");
    var listHas = /* @__PURE__ */ __name(function(objects, key) {
      if (!objects) {
        return false;
      }
      return !!listGetNode(objects, key);
    }, "listHas");
    var listDelete = /* @__PURE__ */ __name(function(objects, key) {
      if (objects) {
        return listGetNode(objects, key, true);
      }
    }, "listDelete");
    module.exports = /* @__PURE__ */ __name(function getSideChannelList() {
      var $o;
      var channel2 = {
        assert: /* @__PURE__ */ __name(function(key) {
          if (!channel2.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        }, "assert"),
        "delete": /* @__PURE__ */ __name(function(key) {
          var deletedNode = listDelete($o, key);
          if (deletedNode && $o && !$o.next) {
            $o = void 0;
          }
          return !!deletedNode;
        }, "delete"),
        get: /* @__PURE__ */ __name(function(key) {
          return listGet($o, key);
        }, "get"),
        has: /* @__PURE__ */ __name(function(key) {
          return listHas($o, key);
        }, "has"),
        set: /* @__PURE__ */ __name(function(key, value) {
          if (!$o) {
            $o = {
              next: void 0
            };
          }
          listSet(
            /** @type {NonNullable<typeof $o>} */
            $o,
            key,
            value
          );
        }, "set")
      };
      return channel2;
    }, "getSideChannelList");
  }
});

// node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "node_modules/es-object-atoms/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Object;
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = SyntaxError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = URIError;
  }
});

// node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "node_modules/math-intrinsics/abs.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.abs;
  }
});

// node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "node_modules/math-intrinsics/floor.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.floor;
  }
});

// node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "node_modules/math-intrinsics/max.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.max;
  }
});

// node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "node_modules/math-intrinsics/min.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.min;
  }
});

// node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "node_modules/math-intrinsics/pow.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.pow;
  }
});

// node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "node_modules/math-intrinsics/round.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.round;
  }
});

// node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/math-intrinsics/isNaN.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Number.isNaN || /* @__PURE__ */ __name(function isNaN2(a) {
      return a !== a;
    }, "isNaN");
  }
});

// node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "node_modules/math-intrinsics/sign.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $isNaN = require_isNaN();
    module.exports = /* @__PURE__ */ __name(function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    }, "sign");
  }
});

// node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "node_modules/gopd/gOPD.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Object.getOwnPropertyDescriptor;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = /* @__PURE__ */ __name(function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = /* @__PURE__ */ Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    }, "hasSymbols");
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = /* @__PURE__ */ __name(function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    }, "hasNativeSymbols");
  }
});

// node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $Object = require_es_object_atoms();
    module.exports = $Object.getPrototypeOf || null;
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = /* @__PURE__ */ __name(function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    }, "concatty");
    var slicy = /* @__PURE__ */ __name(function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    }, "slicy");
    var joiny = /* @__PURE__ */ __name(function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    }, "joiny");
    module.exports = /* @__PURE__ */ __name(function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = /* @__PURE__ */ __name(function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      }, "binder");
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = /* @__PURE__ */ __name(function Empty2() {
        }, "Empty");
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    }, "bind");
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Function.prototype.call;
  }
});

// node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Function.prototype.apply;
  }
});

// node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module.exports = $reflectApply || bind.call($call, $apply);
  }
});

// node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "node_modules/call-bind-apply-helpers/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module.exports = /* @__PURE__ */ __name(function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    }, "callBindBasic");
  }
});

// node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "node_modules/dunder-proto/get.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      /* @__PURE__ */ __name(function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }, "getDunder")
    ) : false;
  }
});

// node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "node_modules/get-proto/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module.exports = reflectGetProto ? /* @__PURE__ */ __name(function getProto(O) {
      return reflectGetProto(O);
    }, "getProto") : originalGetProto ? /* @__PURE__ */ __name(function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    }, "getProto") : getDunderProto ? /* @__PURE__ */ __name(function getProto(O) {
      return getDunderProto(O);
    }, "getProto") : null;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = /* @__PURE__ */ __name(function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    }, "getEvalledConstructor");
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = /* @__PURE__ */ __name(function() {
      throw new $TypeError();
    }, "throwTypeError");
    var ThrowTypeError = $gOPD ? (function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    })() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = /* @__PURE__ */ __name(function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    }, "doEval");
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = /* @__PURE__ */ __name(function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    }, "stringToPath");
    var getBaseIntrinsic = /* @__PURE__ */ __name(function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    }, "getBaseIntrinsic");
    module.exports = /* @__PURE__ */ __name(function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void undefined2;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    }, "GetIntrinsic");
  }
});

// node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "node_modules/call-bound/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module.exports = /* @__PURE__ */ __name(function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    }, "callBoundIntrinsic");
  }
});

// node_modules/side-channel-map/index.js
var require_side_channel_map = __commonJS({
  "node_modules/side-channel-map/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $Map = GetIntrinsic("%Map%", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapDelete = callBound("Map.prototype.delete", true);
    var $mapSize = callBound("Map.prototype.size", true);
    module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
    /* @__PURE__ */ __name(function getSideChannelMap() {
      var $m;
      var channel2 = {
        assert: /* @__PURE__ */ __name(function(key) {
          if (!channel2.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        }, "assert"),
        "delete": /* @__PURE__ */ __name(function(key) {
          if ($m) {
            var result = $mapDelete($m, key);
            if ($mapSize($m) === 0) {
              $m = void 0;
            }
            return result;
          }
          return false;
        }, "delete"),
        get: /* @__PURE__ */ __name(function(key) {
          if ($m) {
            return $mapGet($m, key);
          }
        }, "get"),
        has: /* @__PURE__ */ __name(function(key) {
          if ($m) {
            return $mapHas($m, key);
          }
          return false;
        }, "has"),
        set: /* @__PURE__ */ __name(function(key, value) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        }, "set")
      };
      return channel2;
    }, "getSideChannelMap");
  }
});

// node_modules/side-channel-weakmap/index.js
var require_side_channel_weakmap = __commonJS({
  "node_modules/side-channel-weakmap/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var getSideChannelMap = require_side_channel_map();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
    module.exports = $WeakMap ? (
      /** @type {Exclude<import('.'), false>} */
      /* @__PURE__ */ __name(function getSideChannelWeakMap() {
        var $wm;
        var $m;
        var channel2 = {
          assert: /* @__PURE__ */ __name(function(key) {
            if (!channel2.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          }, "assert"),
          "delete": /* @__PURE__ */ __name(function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapDelete($wm, key);
              }
            } else if (getSideChannelMap) {
              if ($m) {
                return $m["delete"](key);
              }
            }
            return false;
          }, "delete"),
          get: /* @__PURE__ */ __name(function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            }
            return $m && $m.get(key);
          }, "get"),
          has: /* @__PURE__ */ __name(function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            }
            return !!$m && $m.has(key);
          }, "has"),
          set: /* @__PURE__ */ __name(function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
              if (!$m) {
                $m = getSideChannelMap();
              }
              $m.set(key, value);
            }
          }, "set")
        };
        return channel2;
      }, "getSideChannelWeakMap")
    ) : getSideChannelMap;
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $TypeError = require_type();
    var inspect = require_object_inspect();
    var getSideChannelList = require_side_channel_list();
    var getSideChannelMap = require_side_channel_map();
    var getSideChannelWeakMap = require_side_channel_weakmap();
    var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
    module.exports = /* @__PURE__ */ __name(function getSideChannel() {
      var $channelData;
      var channel2 = {
        assert: /* @__PURE__ */ __name(function(key) {
          if (!channel2.has(key)) {
            var keyDesc = key && Object(key) === key ? "the given object key" : inspect(key);
            throw new $TypeError("Side channel does not contain " + keyDesc);
          }
        }, "assert"),
        "delete": /* @__PURE__ */ __name(function(key) {
          return !!$channelData && $channelData["delete"](key);
        }, "delete"),
        get: /* @__PURE__ */ __name(function(key) {
          return $channelData && $channelData.get(key);
        }, "get"),
        has: /* @__PURE__ */ __name(function(key) {
          return !!$channelData && $channelData.has(key);
        }, "has"),
        set: /* @__PURE__ */ __name(function(key, value) {
          if (!$channelData) {
            $channelData = makeChannel();
          }
          $channelData.set(key, value);
        }, "set")
      };
      return channel2;
    }, "getSideChannel");
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: /* @__PURE__ */ __name(function(value) {
          return replace.call(value, percentTwenties, "+");
        }, "RFC1738"),
        RFC3986: /* @__PURE__ */ __name(function(value) {
          return String(value);
        }, "RFC3986")
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var formats = require_formats();
    var getSideChannel = require_side_channel();
    var defineProperty = require_es_define_property();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var overflowChannel = getSideChannel();
    var markOverflow = /* @__PURE__ */ __name(function markOverflow2(obj, maxIndex) {
      overflowChannel.set(obj, maxIndex);
      return obj;
    }, "markOverflow");
    var isOverflow = /* @__PURE__ */ __name(function isOverflow2(obj) {
      return overflowChannel.has(obj);
    }, "isOverflow");
    var getMaxIndex = /* @__PURE__ */ __name(function getMaxIndex2(obj) {
      return overflowChannel.get(obj);
    }, "getMaxIndex");
    var setMaxIndex = /* @__PURE__ */ __name(function setMaxIndex2(obj, maxIndex) {
      overflowChannel.set(obj, maxIndex);
    }, "setMaxIndex");
    var conflictChannel = getSideChannel();
    var markConflict = /* @__PURE__ */ __name(function markConflict2(obj, maxIndex) {
      conflictChannel.set(obj, maxIndex);
      return obj;
    }, "markConflict");
    var isConflict = /* @__PURE__ */ __name(function isConflict2(obj) {
      return conflictChannel.has(obj);
    }, "isConflict");
    var getConflictIndex = /* @__PURE__ */ __name(function getConflictIndex2(obj) {
      return conflictChannel.get(obj);
    }, "getConflictIndex");
    var hexTable = (function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
      }
      return array;
    })();
    var compactQueue = /* @__PURE__ */ __name(function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted[compacted.length] = obj[j];
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    }, "compactQueue");
    var arrayToObject = /* @__PURE__ */ __name(function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? { __proto__: null } : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    }, "arrayToObject");
    var setProperty = /* @__PURE__ */ __name(function setProperty2(obj, key, value) {
      if (key === "__proto__" && defineProperty) {
        defineProperty(obj, key, {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      } else {
        obj[key] = value;
      }
    }, "setProperty");
    var maxNumericIndex = /* @__PURE__ */ __name(function maxNumericIndex2(obj, min) {
      var max = min;
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; ++i) {
        var num = parseInt(keys[i], 10);
        if (String(num) === keys[i] && num > max) {
          max = num;
        }
      }
      return max;
    }, "maxNumericIndex");
    var limitedPair = /* @__PURE__ */ __name(function limitedPair2(first, second, options) {
      var pair = [first, second];
      if (options && typeof options.arrayLimit === "number" && pair.length > options.arrayLimit) {
        if (options.throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        return markOverflow(arrayToObject(pair, options), 1);
      }
      return pair;
    }, "limitedPair");
    var merge = /* @__PURE__ */ __name(function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object" && typeof source !== "function") {
        if (isArray(target)) {
          var nextIndex = target.length;
          if (options && typeof options.arrayLimit === "number" && nextIndex >= options.arrayLimit) {
            if (options.throwOnLimitExceeded) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            return markOverflow(arrayToObject(target.concat(source), options), nextIndex);
          }
          target[nextIndex] = source;
        } else if (target && typeof target === "object") {
          if (isOverflow(target)) {
            var newIndex = getMaxIndex(target) + 1;
            target[newIndex] = source;
            setMaxIndex(target, newIndex);
          } else if (options && options.strictMerge && isConflict(target)) {
            var nextConflict = getConflictIndex(target) + 1;
            if (options.throwOnLimitExceeded && typeof options.arrayLimit === "number" && nextConflict >= options.arrayLimit) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            target[nextConflict] = source;
            markConflict(target, nextConflict);
          } else if (options && options.strictMerge) {
            var conflict = limitedPair(target, source, options);
            return isArray(conflict) ? markConflict(conflict, 1) : conflict;
          } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return limitedPair(target, source, options);
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        if (isOverflow(source)) {
          var sourceKeys = Object.keys(source);
          var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
          for (var m = 0; m < sourceKeys.length; m++) {
            var oldKey = parseInt(sourceKeys[m], 10);
            result[oldKey + 1] = source[sourceKeys[m]];
          }
          return markOverflow(result, getMaxIndex(source) + 1);
        }
        var combined = [target].concat(source);
        if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) {
          if (options.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          return markOverflow(arrayToObject(combined, options), combined.length - 1);
        }
        return combined;
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
        if (isConflict(target)) {
          markConflict(mergeTarget, target.length - 1);
        }
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target[target.length] = item;
            }
          } else {
            target[i] = item;
          }
        });
        if (options && typeof options.arrayLimit === "number" && target.length > options.arrayLimit) {
          if (options.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          return markOverflow(arrayToObject(target, options), target.length - 1);
        }
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          setProperty(acc, key, merge2(acc[key], value, options));
        } else {
          setProperty(acc, key, value);
        }
        if (isOverflow(source) && !isOverflow(acc)) {
          markOverflow(acc, maxNumericIndex(acc, getMaxIndex(source)));
        }
        if (isOverflow(acc)) {
          var keyNum = parseInt(key, 10);
          if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) {
            setMaxIndex(acc, keyNum);
          }
        }
        if (isConflict(acc)) {
          var conflictKey = parseInt(key, 10);
          if (String(conflictKey) === key && conflictKey > getConflictIndex(acc)) {
            markConflict(acc, conflictKey);
          }
        }
        return acc;
      }, mergeTarget);
    }, "merge");
    var assign = /* @__PURE__ */ __name(function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        setProperty(acc, key, source[key]);
        return acc;
      }, target);
    }, "assignSingleSource");
    var decode = /* @__PURE__ */ __name(function(str, defaultDecoder, charset) {
      if (typeof str === "string" && str.indexOf("%") === -1) {
        return str.indexOf("+") === -1 ? str : str.replace(/\+/g, " ");
      }
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    }, "decode");
    var hasToPrimitive = typeof Symbol === "function" && typeof Symbol.toPrimitive === "symbol";
    var arrayJoin = Array.prototype.join;
    var arrayToString = Array.prototype.toString;
    var objectToString = Object.prototype.toString;
    var toCoercible = /* @__PURE__ */ __name(function toCoercible2(value, joining) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return value;
      }
      if (hasToPrimitive && value[Symbol.toPrimitive] != null) {
        return value;
      }
      if (isArray(value) && value.toString === arrayToString && value.join === arrayJoin) {
        var ancestors = joining || getSideChannel();
        if (ancestors.has(value)) {
          return "";
        }
        ancestors.set(value, true);
        var copy;
        for (var i = 0; i < value.length; i += 1) {
          var item = value[i];
          var coerced = toCoercible2(item, ancestors);
          if (!copy && coerced !== item) {
            copy = [];
            for (var j = 0; j < i; j += 1) {
              copy[j] = value[j];
            }
          }
          if (copy) {
            copy[i] = coerced;
          }
        }
        ancestors["delete"](value);
        return copy || value;
      }
      if (typeof value.toString === "function") {
        return value;
      }
      var valueOf = value.valueOf;
      if (typeof valueOf === "function") {
        var primitive = valueOf.call(value);
        if (!primitive || typeof primitive !== "object" && typeof primitive !== "function") {
          return String(primitive);
        }
      }
      return objectToString.call(value);
    }, "toCoercible");
    var limit = 1024;
    var encode = /* @__PURE__ */ __name(function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(toCoercible(str));
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        }).replace(/\+/g, "%2B");
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        if (j + limit < string.length) {
          var last = segment.charCodeAt(segment.length - 1);
          if (last >= 55296 && last <= 56319) {
            segment = segment.slice(0, -1);
            j -= 1;
          }
        }
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    }, "encode");
    var compact = /* @__PURE__ */ __name(function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = getSideChannel();
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && !refs.has(val)) {
            queue[queue.length] = { obj, prop: key };
            refs.set(val, true);
          }
        }
      }
      compactQueue(queue);
      return value;
    }, "compact");
    var isRegExp = /* @__PURE__ */ __name(function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    }, "isRegExp");
    var isBuffer = /* @__PURE__ */ __name(function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj));
    }, "isBuffer");
    var combine = /* @__PURE__ */ __name(function combine2(a, b, arrayLimit, plainObjects, throwOnLimitExceeded) {
      if (isOverflow(a)) {
        if (throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + arrayLimit + " element" + (arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        var bValues = isArray(b) ? b : [b];
        var newIndex = getMaxIndex(a);
        for (var i = 0; i < bValues.length; ++i) {
          newIndex += 1;
          a[newIndex] = bValues[i];
        }
        setMaxIndex(a, newIndex);
        return a;
      }
      var result = [].concat(a, b);
      if (result.length > arrayLimit) {
        if (throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + arrayLimit + " element" + (arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
      }
      return result;
    }, "combine");
    var maybeMap = /* @__PURE__ */ __name(function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped[mapped.length] = fn(val[i]);
        }
        return mapped;
      }
      return fn(val);
    }, "maybeMap");
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isOverflow,
      isRegExp,
      markOverflow,
      maybeMap,
      merge,
      toCoercible
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: /* @__PURE__ */ __name(function brackets(prefix) {
        return prefix + "[]";
      }, "brackets"),
      comma: "comma",
      indices: /* @__PURE__ */ __name(function indices(prefix, key) {
        return prefix + "[" + key + "]";
      }, "indices"),
      repeat: /* @__PURE__ */ __name(function repeat(prefix) {
        return prefix;
      }, "repeat")
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = /* @__PURE__ */ __name(function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    }, "pushToArray");
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      commaRoundTrip: false,
      delimiter: "&",
      depth: Infinity,
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      filter: void 0,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: /* @__PURE__ */ __name(function serializeDate(date) {
        return toISO.call(date);
      }, "serializeDate"),
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = /* @__PURE__ */ __name(function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    }, "isNonNullishPrimitive");
    var sentinel = {};
    var stringify = /* @__PURE__ */ __name(function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel, depth, currentDepth) {
      var obj = object;
      if (currentDepth > depth) {
        throw new RangeError("Input depth exceeded depth option of " + depth);
      }
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      obj = typeof filter === "function" ? filter(prefix, obj) : obj;
      if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return formatter(encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix);
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, function(v) {
            return v == null ? v : encoder(v, defaults.encoder, charset, "value", format);
          });
        }
        objKeys = [{ value: obj.length > 0 ? utils.toCoercible(obj).join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = String(prefix);
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0 && Object.keys(obj).length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel,
          depth,
          currentDepth + 1
        ));
      }
      return values;
    }, "stringify");
    var normalizeStringifyOptions = /* @__PURE__ */ __name(function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (has.call(arrayPrefixGenerators, opts.arrayFormat)) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        depth: typeof opts.depth === "number" ? opts.depth : defaults.depth,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    }, "normalizeStringifyOptions");
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (typeof key === "undefined" || key === null) {
          continue;
        }
        var value = obj[key];
        if (options.skipNulls && value === null) {
          continue;
        }
        var encodedKey = options.encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        pushToArray(keys, stringify(
          value,
          encodedKey,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel,
          options.depth,
          0
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B" + options.delimiter;
        } else {
          prefix += "utf8=%E2%9C%93" + options.delimiter;
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var getPrototypeOf = Object.getPrototypeOf;
    var isPlainContainer = /* @__PURE__ */ __name(function isPlainContainer2(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (isArray(value)) {
        return true;
      }
      var proto = getPrototypeOf(value);
      return proto === Object.prototype || proto === null;
    }, "isPlainContainer");
    var emptyCopyOf = /* @__PURE__ */ __name(function emptyCopyOf2(value) {
      if (isArray(value)) {
        var arr = [];
        arr.length = value.length;
        return arr;
      }
      return getPrototypeOf(value) === null ? { __proto__: null } : {};
    }, "emptyCopyOf");
    var copyInput = /* @__PURE__ */ __name(function copyInput2(input) {
      var copies = getSideChannel();
      var result = {};
      var queue = [{ source: input, target: result }];
      for (var i = 0; i < queue.length; ++i) {
        var source = queue[i].source;
        var target = queue[i].target;
        var keys = Object.keys(source);
        for (var j = 0; j < keys.length; ++j) {
          var value = source[keys[j]];
          if (isPlainContainer(value)) {
            if (!copies.has(value)) {
              var copy = emptyCopyOf(value);
              copies.set(value, copy);
              queue[queue.length] = { source: value, target: copy };
            }
            target[keys[j]] = copies.get(value);
          } else {
            target[keys[j]] = value;
          }
        }
      }
      return result;
    }, "copyInput");
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictMerge: true,
      strictNullHandling: false,
      throwOnLimitExceeded: false
    };
    var interpretNumericEntities = /* @__PURE__ */ __name(function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    }, "interpretNumericEntities");
    var parseArrayValue = /* @__PURE__ */ __name(function(val, options, currentArrayLength) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        if (options.throwOnLimitExceeded) {
          var commaCount = 0;
          var commaIndex = val.indexOf(",");
          while (commaIndex > -1) {
            commaCount += 1;
            if (commaCount >= options.arrayLimit) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            commaIndex = val.indexOf(",", commaIndex + 1);
          }
        }
        return val.split(",");
      }
      if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
      }
      return val;
    }, "parseArrayValue");
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = /* @__PURE__ */ __name(function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(
        options.delimiter,
        options.throwOnLimitExceeded && typeof limit !== "undefined" ? limit + 1 : limit
      );
      if (options.throwOnLimitExceeded && typeof limit !== "undefined" && parts.length > limit) {
        throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
      }
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var isEmptyBracketKey = pos > 1 && part.slice(pos - 2, pos) === "[]";
        var key;
        var val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          if (key !== null) {
            val = utils.maybeMap(
              parseArrayValue(
                part.slice(pos + 1),
                options,
                isArray(obj[key]) ? obj[key].length : 0
              ),
              function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
              }
            );
          }
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(String(val));
        }
        if (isEmptyBracketKey) {
          val = isArray(val) ? [val] : val;
        }
        if (options.comma && isArray(val) && val.length > options.arrayLimit) {
          val = utils.combine([], val, options.arrayLimit, options.plainObjects, options.throwOnLimitExceeded);
        }
        if (key !== null) {
          var existing = has.call(obj, key);
          if (existing && (options.duplicates === "combine" || isEmptyBracketKey)) {
            obj[key] = utils.combine(
              obj[key],
              val,
              options.arrayLimit,
              options.plainObjects,
              options.throwOnLimitExceeded
            );
          } else if (!existing || options.duplicates === "last") {
            obj[key] = val;
          }
        }
      }
      return obj;
    }, "parseQueryStringValues");
    var parseObject = /* @__PURE__ */ __name(function(chain, val, options, valuesParsed) {
      var currentArrayLength = 0;
      if (chain.length > 0 && chain[chain.length - 1] === "[]") {
        var parentKey = chain.slice(0, -1).join("");
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
      }
      var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          if (utils.isOverflow(leaf)) {
            obj = leaf;
          } else {
            obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine(
              [],
              leaf,
              options.arrayLimit,
              options.plainObjects,
              options.throwOnLimitExceeded
            );
          }
        } else {
          obj = options.plainObjects ? { __proto__: null } : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          var isValidArrayIndex = !isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays;
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (isValidArrayIndex && index < options.arrayLimit) {
            obj = [];
            obj[index] = leaf;
          } else if (isValidArrayIndex && options.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          } else if (isValidArrayIndex) {
            obj[index] = leaf;
            utils.markOverflow(obj, index);
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    }, "parseObject");
    var topLevelDotsToBrackets = /* @__PURE__ */ __name(function topLevelDotsToBrackets2(key) {
      var result = "";
      var depth = 0;
      for (var i = 0; i < key.length; i += 1) {
        var cu = key.charCodeAt(i);
        if (cu === 91) {
          depth += 1;
          result += "[";
        } else if (cu === 93) {
          if (depth > 0) {
            depth -= 1;
          }
          result += "]";
        } else if (cu === 46 && depth === 0 && i + 1 < key.length && key.charCodeAt(i + 1) !== 46 && key.charCodeAt(i + 1) !== 91) {
          var start = i + 1;
          var j = start;
          while (j < key.length && key.charCodeAt(j) !== 46 && key.charCodeAt(j) !== 91) {
            j += 1;
          }
          result += "[" + key.slice(start, j) + "]";
          i = j - 1;
        } else {
          result += key.charAt(i);
        }
      }
      return result;
    }, "topLevelDotsToBrackets");
    var splitKeyIntoSegments = /* @__PURE__ */ __name(function splitKeyIntoSegments2(originalKey, options) {
      var key = options.allowDots ? topLevelDotsToBrackets(originalKey) : originalKey;
      if (options.depth <= 0) {
        if (!options.plainObjects && has.call(Object.prototype, key)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        return [key];
      }
      var segments = [];
      var first = key.indexOf("[");
      var parent = first >= 0 ? key.slice(0, first) : key;
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        segments[segments.length] = parent;
      }
      var n = key.length;
      var open = first;
      var collected = 0;
      while (open >= 0 && collected < options.depth) {
        var level = 1;
        var i = open + 1;
        var close = -1;
        while (i < n && close < 0) {
          var cu = key.charCodeAt(i);
          if (cu === 91) {
            level += 1;
          } else if (cu === 93) {
            level -= 1;
            if (level === 0) {
              close = i;
            }
          }
          i += 1;
        }
        if (close < 0) {
          segments[segments.length] = "[" + key.slice(open) + "]";
          return segments;
        }
        var seg = key.slice(open, close + 1);
        var content = seg.slice(1, -1);
        if (!options.plainObjects && has.call(Object.prototype, content) && !options.allowPrototypes) {
          return;
        }
        segments[segments.length] = seg;
        collected += 1;
        open = key.indexOf("[", close + 1);
      }
      if (open >= 0) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        segments[segments.length] = "[" + key.slice(open) + "]";
      }
      return segments;
    }, "splitKeyIntoSegments");
    var parseKeys = /* @__PURE__ */ __name(function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var keys = splitKeyIntoSegments(givenKey, options);
      if (!keys) {
        return;
      }
      return parseObject(keys, val, options, valuesParsed);
    }, "parseQueryStringKeys");
    var normalizeParseOptions = /* @__PURE__ */ __name(function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictMerge: typeof opts.strictMerge === "boolean" ? !!opts.strictMerge : defaults.strictMerge,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
      };
    }, "normalizeParseOptions");
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? { __proto__: null } : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : copyInput(str);
      var obj = options.plainObjects ? { __proto__: null } : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node-built-in-modules:querystring
import libDefault10 from "querystring";
var require_querystring = __commonJS({
  "node-built-in-modules:querystring"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault10;
  }
});

// node_modules/body-parser/lib/types/urlencoded.js
var require_urlencoded = __commonJS({
  "node_modules/body-parser/lib/types/urlencoded.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bytes = require_bytes();
    var contentType = require_content_type();
    var createError = require_http_errors();
    var debug = require_src()("body-parser:urlencoded");
    var deprecate = require_browser()("body-parser");
    var read = require_read();
    var typeis = require_type_is();
    module.exports = urlencoded;
    var parsers = /* @__PURE__ */ Object.create(null);
    function urlencoded(options) {
      var opts = options || {};
      if (opts.extended === void 0) {
        deprecate("undefined extended: provide extended option");
      }
      var extended = opts.extended !== false;
      var inflate = opts.inflate !== false;
      var limit = typeof opts.limit === "undefined" || opts.limit === null ? 102400 : bytes.parse(opts.limit);
      var type = opts.type || "application/x-www-form-urlencoded";
      var verify = opts.verify || false;
      if (limit === null) {
        throw new TypeError('option limit "' + String(opts.limit) + '" is invalid');
      }
      if (verify !== false && typeof verify !== "function") {
        throw new TypeError("option verify must be function");
      }
      var queryparse = extended ? extendedparser(opts) : simpleparser(opts);
      var shouldParse = typeof type !== "function" ? typeChecker(type) : type;
      function parse(body) {
        return body.length ? queryparse(body) : {};
      }
      __name(parse, "parse");
      return /* @__PURE__ */ __name(function urlencodedParser(req, res, next) {
        if (req._body) {
          debug("body already parsed");
          next();
          return;
        }
        req.body = req.body || {};
        if (!typeis.hasBody(req)) {
          debug("skip empty body");
          next();
          return;
        }
        debug("content-type %j", req.headers["content-type"]);
        if (!shouldParse(req)) {
          debug("skip parsing");
          next();
          return;
        }
        var charset = getCharset(req) || "utf-8";
        if (charset !== "utf-8") {
          debug("invalid charset");
          next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
            charset,
            type: "charset.unsupported"
          }));
          return;
        }
        read(req, res, next, parse, debug, {
          debug,
          encoding: charset,
          inflate,
          limit,
          verify
        });
      }, "urlencodedParser");
    }
    __name(urlencoded, "urlencoded");
    function extendedparser(options) {
      var parameterLimit = options.parameterLimit !== void 0 ? options.parameterLimit : 1e3;
      var depth = options.depth !== void 0 ? options.depth : 32;
      var parse = parser("qs");
      if (isNaN(parameterLimit) || parameterLimit < 1) {
        throw new TypeError("option parameterLimit must be a positive number");
      }
      if (isNaN(depth) || depth < 0) {
        throw new TypeError("option depth must be a zero or a positive number");
      }
      if (isFinite(parameterLimit)) {
        parameterLimit = parameterLimit | 0;
      }
      return /* @__PURE__ */ __name(function queryparse(body) {
        var paramCount = parameterCount(body, parameterLimit);
        if (paramCount === void 0) {
          debug("too many parameters");
          throw createError(413, "too many parameters", {
            type: "parameters.too.many"
          });
        }
        var arrayLimit = Math.max(100, paramCount);
        debug("parse extended urlencoding");
        try {
          return parse(body, {
            allowPrototypes: true,
            arrayLimit,
            depth,
            strictDepth: true,
            parameterLimit
          });
        } catch (err) {
          if (err instanceof RangeError) {
            throw createError(400, "The input exceeded the depth", {
              type: "querystring.parse.rangeError"
            });
          } else {
            throw err;
          }
        }
      }, "queryparse");
    }
    __name(extendedparser, "extendedparser");
    function getCharset(req) {
      try {
        return (contentType.parse(req).parameters.charset || "").toLowerCase();
      } catch (e) {
        return void 0;
      }
    }
    __name(getCharset, "getCharset");
    function parameterCount(body, limit) {
      var count = 0;
      var index = -1;
      do {
        count++;
        if (count > limit) {
          return void 0;
        }
        index = body.indexOf("&", index + 1);
      } while (index !== -1);
      return count;
    }
    __name(parameterCount, "parameterCount");
    function parser(name) {
      var mod = parsers[name];
      if (mod !== void 0) {
        return mod.parse;
      }
      switch (name) {
        case "qs":
          mod = require_lib();
          break;
        case "querystring":
          mod = require_querystring();
          break;
      }
      parsers[name] = mod;
      return mod.parse;
    }
    __name(parser, "parser");
    function simpleparser(options) {
      var parameterLimit = options.parameterLimit !== void 0 ? options.parameterLimit : 1e3;
      var parse = parser("querystring");
      if (isNaN(parameterLimit) || parameterLimit < 1) {
        throw new TypeError("option parameterLimit must be a positive number");
      }
      if (isFinite(parameterLimit)) {
        parameterLimit = parameterLimit | 0;
      }
      return /* @__PURE__ */ __name(function queryparse(body) {
        var paramCount = parameterCount(body, parameterLimit);
        if (paramCount === void 0) {
          debug("too many parameters");
          throw createError(413, "too many parameters", {
            type: "parameters.too.many"
          });
        }
        debug("parse urlencoding");
        return parse(body, void 0, void 0, { maxKeys: parameterLimit });
      }, "queryparse");
    }
    __name(simpleparser, "simpleparser");
    function typeChecker(type) {
      return /* @__PURE__ */ __name(function checkType(req) {
        return Boolean(typeis(req, type));
      }, "checkType");
    }
    __name(typeChecker, "typeChecker");
  }
});

// node_modules/body-parser/index.js
var require_body_parser = __commonJS({
  "node_modules/body-parser/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var deprecate = require_browser()("body-parser");
    var parsers = /* @__PURE__ */ Object.create(null);
    exports = module.exports = deprecate.function(
      bodyParser,
      "bodyParser: use individual json/urlencoded middlewares"
    );
    Object.defineProperty(exports, "json", {
      configurable: true,
      enumerable: true,
      get: createParserGetter("json")
    });
    Object.defineProperty(exports, "raw", {
      configurable: true,
      enumerable: true,
      get: createParserGetter("raw")
    });
    Object.defineProperty(exports, "text", {
      configurable: true,
      enumerable: true,
      get: createParserGetter("text")
    });
    Object.defineProperty(exports, "urlencoded", {
      configurable: true,
      enumerable: true,
      get: createParserGetter("urlencoded")
    });
    function bodyParser(options) {
      var opts = Object.create(options || null, {
        type: {
          configurable: true,
          enumerable: true,
          value: void 0,
          writable: true
        }
      });
      var _urlencoded = exports.urlencoded(opts);
      var _json = exports.json(opts);
      return /* @__PURE__ */ __name(function bodyParser2(req, res, next) {
        _json(req, res, function(err) {
          if (err) return next(err);
          _urlencoded(req, res, next);
        });
      }, "bodyParser");
    }
    __name(bodyParser, "bodyParser");
    function createParserGetter(name) {
      return /* @__PURE__ */ __name(function get() {
        return loadParser(name);
      }, "get");
    }
    __name(createParserGetter, "createParserGetter");
    function loadParser(parserName) {
      var parser = parsers[parserName];
      if (parser !== void 0) {
        return parser;
      }
      switch (parserName) {
        case "json":
          parser = require_json();
          break;
        case "raw":
          parser = require_raw();
          break;
        case "text":
          parser = require_text();
          break;
        case "urlencoded":
          parser = require_urlencoded();
          break;
      }
      return parsers[parserName] = parser;
    }
    __name(loadParser, "loadParser");
  }
});

// node_modules/merge-descriptors/index.js
var require_merge_descriptors = __commonJS({
  "node_modules/merge-descriptors/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = merge;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function merge(dest, src, redefine) {
      if (!dest) {
        throw new TypeError("argument dest is required");
      }
      if (!src) {
        throw new TypeError("argument src is required");
      }
      if (redefine === void 0) {
        redefine = true;
      }
      Object.getOwnPropertyNames(src).forEach(/* @__PURE__ */ __name(function forEachOwnPropertyName(name) {
        if (!redefine && hasOwnProperty.call(dest, name)) {
          return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(src, name);
        Object.defineProperty(dest, name, descriptor);
      }, "forEachOwnPropertyName"));
      return dest;
    }
    __name(merge, "merge");
  }
});

// node_modules/encodeurl/index.js
var require_encodeurl = __commonJS({
  "node_modules/encodeurl/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = encodeUrl;
    var ENCODE_CHARS_REGEXP = /(?:[^\x21\x23-\x3B\x3D\x3F-\x5F\x61-\x7A\x7C\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g;
    var UNMATCHED_SURROGATE_PAIR_REGEXP = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g;
    var UNMATCHED_SURROGATE_PAIR_REPLACE = "$1\uFFFD$2";
    function encodeUrl(url) {
      return String(url).replace(UNMATCHED_SURROGATE_PAIR_REGEXP, UNMATCHED_SURROGATE_PAIR_REPLACE).replace(ENCODE_CHARS_REGEXP, encodeURI);
    }
    __name(encodeUrl, "encodeUrl");
  }
});

// node_modules/escape-html/index.js
var require_escape_html = __commonJS({
  "node_modules/escape-html/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var matchHtmlRegExp = /["'&<>]/;
    module.exports = escapeHtml;
    function escapeHtml(string) {
      var str = "" + string;
      var match = matchHtmlRegExp.exec(str);
      if (!match) {
        return str;
      }
      var escape2;
      var html = "";
      var index = 0;
      var lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escape2 = "&quot;";
            break;
          case 38:
            escape2 = "&amp;";
            break;
          case 39:
            escape2 = "&#39;";
            break;
          case 60:
            escape2 = "&lt;";
            break;
          case 62:
            escape2 = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escape2;
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
    __name(escapeHtml, "escapeHtml");
  }
});

// node-built-in-modules:url
import libDefault11 from "url";
var require_url = __commonJS({
  "node-built-in-modules:url"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault11;
  }
});

// node_modules/parseurl/index.js
var require_parseurl = __commonJS({
  "node_modules/parseurl/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var url = require_url();
    var parse = url.parse;
    var Url = url.Url;
    module.exports = parseurl;
    module.exports.original = originalurl;
    function parseurl(req) {
      var url2 = req.url;
      if (url2 === void 0) {
        return void 0;
      }
      var parsed = req._parsedUrl;
      if (fresh(url2, parsed)) {
        return parsed;
      }
      parsed = fastparse(url2);
      parsed._raw = url2;
      return req._parsedUrl = parsed;
    }
    __name(parseurl, "parseurl");
    function originalurl(req) {
      var url2 = req.originalUrl;
      if (typeof url2 !== "string") {
        return parseurl(req);
      }
      var parsed = req._parsedOriginalUrl;
      if (fresh(url2, parsed)) {
        return parsed;
      }
      parsed = fastparse(url2);
      parsed._raw = url2;
      return req._parsedOriginalUrl = parsed;
    }
    __name(originalurl, "originalurl");
    function fastparse(str) {
      if (typeof str !== "string" || str.charCodeAt(0) !== 47) {
        return parse(str);
      }
      var pathname = str;
      var query = null;
      var search = null;
      for (var i = 1; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
          case 63:
            if (search === null) {
              pathname = str.substring(0, i);
              query = str.substring(i + 1);
              search = str.substring(i);
            }
            break;
          case 9:
          /* \t */
          case 10:
          /* \n */
          case 12:
          /* \f */
          case 13:
          /* \r */
          case 32:
          /*    */
          case 35:
          /* #  */
          case 160:
          case 65279:
            return parse(str);
        }
      }
      var url2 = Url !== void 0 ? new Url() : {};
      url2.path = str;
      url2.href = str;
      url2.pathname = pathname;
      if (search !== null) {
        url2.query = query;
        url2.search = search;
      }
      return url2;
    }
    __name(fastparse, "fastparse");
    function fresh(url2, parsedUrl) {
      return typeof parsedUrl === "object" && parsedUrl !== null && (Url === void 0 || parsedUrl instanceof Url) && parsedUrl._raw === url2;
    }
    __name(fresh, "fresh");
  }
});

// node_modules/finalhandler/index.js
var require_finalhandler = __commonJS({
  "node_modules/finalhandler/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var debug = require_src()("finalhandler");
    var encodeUrl = require_encodeurl();
    var escapeHtml = require_escape_html();
    var onFinished = require_on_finished();
    var parseUrl = require_parseurl();
    var statuses = require_statuses();
    var unpipe = require_unpipe();
    var DOUBLE_SPACE_REGEXP = /\x20{2}/g;
    var NEWLINE_REGEXP = /\n/g;
    var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
      process.nextTick(fn.bind.apply(fn, arguments));
    };
    var isFinished = onFinished.isFinished;
    function createHtmlDocument(message) {
      var body = escapeHtml(message).replace(NEWLINE_REGEXP, "<br>").replace(DOUBLE_SPACE_REGEXP, " &nbsp;");
      return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>' + body + "</pre>\n</body>\n</html>\n";
    }
    __name(createHtmlDocument, "createHtmlDocument");
    module.exports = finalhandler;
    function finalhandler(req, res, options) {
      var opts = options || {};
      var env2 = opts.env || "development";
      var onerror = opts.onerror;
      return function(err) {
        var headers;
        var msg;
        var status;
        if (!err && headersSent(res)) {
          debug("cannot 404 after headers sent");
          return;
        }
        if (err) {
          status = getErrorStatusCode(err);
          if (status === void 0) {
            status = getResponseStatusCode(res);
          } else {
            headers = getErrorHeaders(err);
          }
          msg = getErrorMessage(err, status, env2);
        } else {
          status = 404;
          msg = "Cannot " + req.method + " " + encodeUrl(getResourceName(req));
        }
        debug("default %s", status);
        if (err && onerror) {
          defer(onerror, err, req, res);
        }
        if (headersSent(res)) {
          debug("cannot %d after headers sent", status);
          if (req.socket) {
            req.socket.destroy();
          }
          return;
        }
        send2(req, res, status, headers, msg);
      };
    }
    __name(finalhandler, "finalhandler");
    function getErrorHeaders(err) {
      if (!err.headers || typeof err.headers !== "object") {
        return void 0;
      }
      var headers = /* @__PURE__ */ Object.create(null);
      var keys = Object.keys(err.headers);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        headers[key] = err.headers[key];
      }
      return headers;
    }
    __name(getErrorHeaders, "getErrorHeaders");
    function getErrorMessage(err, status, env2) {
      var msg;
      if (env2 !== "production") {
        msg = err.stack;
        if (!msg && typeof err.toString === "function") {
          msg = err.toString();
        }
      }
      return msg || statuses.message[status];
    }
    __name(getErrorMessage, "getErrorMessage");
    function getErrorStatusCode(err) {
      if (typeof err.status === "number" && err.status >= 400 && err.status < 600) {
        return err.status;
      }
      if (typeof err.statusCode === "number" && err.statusCode >= 400 && err.statusCode < 600) {
        return err.statusCode;
      }
      return void 0;
    }
    __name(getErrorStatusCode, "getErrorStatusCode");
    function getResourceName(req) {
      try {
        return parseUrl.original(req).pathname;
      } catch (e) {
        return "resource";
      }
    }
    __name(getResourceName, "getResourceName");
    function getResponseStatusCode(res) {
      var status = res.statusCode;
      if (typeof status !== "number" || status < 400 || status > 599) {
        status = 500;
      }
      return status;
    }
    __name(getResponseStatusCode, "getResponseStatusCode");
    function headersSent(res) {
      return typeof res.headersSent !== "boolean" ? Boolean(res._header) : res.headersSent;
    }
    __name(headersSent, "headersSent");
    function send2(req, res, status, headers, message) {
      function write() {
        var body = createHtmlDocument(message);
        res.statusCode = status;
        if (req.httpVersionMajor < 2) {
          res.statusMessage = statuses.message[status];
        }
        res.removeHeader("Content-Encoding");
        res.removeHeader("Content-Language");
        res.removeHeader("Content-Range");
        setHeaders(res, headers);
        res.setHeader("Content-Security-Policy", "default-src 'none'");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Content-Length", Buffer.byteLength(body, "utf8"));
        if (req.method === "HEAD") {
          res.end();
          return;
        }
        res.end(body, "utf8");
      }
      __name(write, "write");
      if (isFinished(req)) {
        write();
        return;
      }
      unpipe(req);
      onFinished(req, write);
      req.resume();
    }
    __name(send2, "send");
    function setHeaders(res, headers) {
      if (!headers) {
        return;
      }
      var keys = Object.keys(headers);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        res.setHeader(key, headers[key]);
      }
    }
    __name(setHeaders, "setHeaders");
  }
});

// node_modules/array-flatten/array-flatten.js
var require_array_flatten = __commonJS({
  "node_modules/array-flatten/array-flatten.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = arrayFlatten;
    function flattenWithDepth(array, result, depth) {
      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (depth > 0 && Array.isArray(value)) {
          flattenWithDepth(value, result, depth - 1);
        } else {
          result.push(value);
        }
      }
      return result;
    }
    __name(flattenWithDepth, "flattenWithDepth");
    function flattenForever(array, result) {
      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (Array.isArray(value)) {
          flattenForever(value, result);
        } else {
          result.push(value);
        }
      }
      return result;
    }
    __name(flattenForever, "flattenForever");
    function arrayFlatten(array, depth) {
      if (depth == null) {
        return flattenForever(array, []);
      }
      return flattenWithDepth(array, [], depth);
    }
    __name(arrayFlatten, "arrayFlatten");
  }
});

// node_modules/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "node_modules/path-to-regexp/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = pathToRegexp;
    var MATCHING_GROUP_REGEXP = /\\.|\((?:\?<(.*?)>)?(?!\?)/g;
    function pathToRegexp(path, keys, options) {
      options = options || {};
      keys = keys || [];
      var strict = options.strict;
      var end = options.end !== false;
      var flags = options.sensitive ? "" : "i";
      var lookahead = options.lookahead !== false;
      var extraOffset = 0;
      var keysOffset = keys.length;
      var i = 0;
      var name = 0;
      var pos = 0;
      var backtrack = "";
      var m;
      if (path instanceof RegExp) {
        while (m = MATCHING_GROUP_REGEXP.exec(path.source)) {
          if (m[0][0] === "\\") continue;
          keys.push({
            name: m[1] || name++,
            optional: false,
            offset: m.index
          });
        }
        return path;
      }
      if (Array.isArray(path)) {
        path = path.map(function(value) {
          return pathToRegexp(value, keys, options).source;
        });
        return new RegExp(path.join("|"), flags);
      }
      if (typeof path !== "string") {
        throw new TypeError("path must be a string, array of strings, or regular expression");
      }
      path = path.replace(
        /\\.|(\/)?(\.)?:(\w+)(\(.*?\))?(\*)?(\?)?|[.*]|\/\(/g,
        function(match, slash, format, key, capture, star, optional, offset) {
          if (match[0] === "\\") {
            backtrack += match;
            pos += 2;
            return match;
          }
          if (match === ".") {
            backtrack += "\\.";
            extraOffset += 1;
            pos += 1;
            return "\\.";
          }
          if (slash || format) {
            backtrack = "";
          } else {
            backtrack += path.slice(pos, offset);
          }
          pos = offset + match.length;
          if (match === "*") {
            backtrack = "";
            extraOffset += 3;
            return "(.*)";
          }
          if (match === "/(") {
            backtrack += "/";
            extraOffset += 2;
            return "/(?:";
          }
          slash = slash || "";
          format = format ? "\\." : "";
          optional = optional || "";
          capture = capture ? capture.replace(/\\.|\*/, function(m2) {
            return m2 === "*" ? "(.*)" : m2;
          }) : backtrack ? "((?:(?!/|" + backtrack + ").)+?)" : "([^/" + format + "]+?)";
          keys.push({
            name: key,
            optional: !!optional,
            offset: offset + extraOffset
          });
          var result = "(?:" + format + slash + capture + (star ? "((?:[/" + format + "].+?)?)" : "") + ")" + optional;
          backtrack = "";
          extraOffset += result.length - match.length;
          return result;
        }
      );
      while (m = MATCHING_GROUP_REGEXP.exec(path)) {
        if (m[0][0] === "\\") continue;
        if (keysOffset + i === keys.length || keys[keysOffset + i].offset > m.index) {
          keys.splice(keysOffset + i, 0, {
            name: name++,
            // Unnamed matching groups must be consistently linear.
            optional: false,
            offset: m.index
          });
        }
        i++;
      }
      path += strict ? "" : path[path.length - 1] === "/" ? "?" : "/?";
      if (end) {
        path += "$";
      } else if (path[path.length - 1] !== "/") {
        path += lookahead ? "(?=/|$)" : "(?:/|$)";
      }
      return new RegExp("^" + path, flags);
    }
    __name(pathToRegexp, "pathToRegexp");
  }
});

// node_modules/express/lib/router/layer.js
var require_layer = __commonJS({
  "node_modules/express/lib/router/layer.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var pathRegexp = require_path_to_regexp();
    var debug = require_src()("express:router:layer");
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    module.exports = Layer;
    function Layer(path, options, fn) {
      if (!(this instanceof Layer)) {
        return new Layer(path, options, fn);
      }
      debug("new %o", path);
      var opts = options || {};
      this.handle = fn;
      this.name = fn.name || "<anonymous>";
      this.params = void 0;
      this.path = void 0;
      this.regexp = pathRegexp(path, this.keys = [], opts);
      this.regexp.fast_star = path === "*";
      this.regexp.fast_slash = path === "/" && opts.end === false;
    }
    __name(Layer, "Layer");
    Layer.prototype.handle_error = /* @__PURE__ */ __name(function handle_error(error, req, res, next) {
      var fn = this.handle;
      if (fn.length !== 4) {
        return next(error);
      }
      try {
        fn(error, req, res, next);
      } catch (err) {
        next(err);
      }
    }, "handle_error");
    Layer.prototype.handle_request = /* @__PURE__ */ __name(function handle(req, res, next) {
      var fn = this.handle;
      if (fn.length > 3) {
        return next();
      }
      try {
        fn(req, res, next);
      } catch (err) {
        next(err);
      }
    }, "handle");
    Layer.prototype.match = /* @__PURE__ */ __name(function match(path) {
      var match2;
      if (path != null) {
        if (this.regexp.fast_slash) {
          this.params = {};
          this.path = "";
          return true;
        }
        if (this.regexp.fast_star) {
          this.params = { "0": decode_param(path) };
          this.path = path;
          return true;
        }
        match2 = this.regexp.exec(path);
      }
      if (!match2) {
        this.params = void 0;
        this.path = void 0;
        return false;
      }
      this.params = {};
      this.path = match2[0];
      var keys = this.keys;
      var params = this.params;
      for (var i = 1; i < match2.length; i++) {
        var key = keys[i - 1];
        var prop = key.name;
        var val = decode_param(match2[i]);
        if (val !== void 0 || !hasOwnProperty.call(params, prop)) {
          params[prop] = val;
        }
      }
      return true;
    }, "match");
    function decode_param(val) {
      if (typeof val !== "string" || val.length === 0) {
        return val;
      }
      try {
        return decodeURIComponent(val);
      } catch (err) {
        if (err instanceof URIError) {
          err.message = "Failed to decode param '" + val + "'";
          err.status = err.statusCode = 400;
        }
        throw err;
      }
    }
    __name(decode_param, "decode_param");
  }
});

// node-built-in-modules:http
import libDefault12 from "http";
var require_http = __commonJS({
  "node-built-in-modules:http"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault12;
  }
});

// node_modules/methods/index.js
var require_methods = __commonJS({
  "node_modules/methods/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var http = require_http();
    module.exports = getCurrentNodeMethods() || getBasicNodeMethods();
    function getCurrentNodeMethods() {
      return http.METHODS && http.METHODS.map(/* @__PURE__ */ __name(function lowerCaseMethod(method) {
        return method.toLowerCase();
      }, "lowerCaseMethod"));
    }
    __name(getCurrentNodeMethods, "getCurrentNodeMethods");
    function getBasicNodeMethods() {
      return [
        "get",
        "post",
        "put",
        "head",
        "delete",
        "options",
        "trace",
        "copy",
        "lock",
        "mkcol",
        "move",
        "purge",
        "propfind",
        "proppatch",
        "unlock",
        "report",
        "mkactivity",
        "checkout",
        "merge",
        "m-search",
        "notify",
        "subscribe",
        "unsubscribe",
        "patch",
        "search",
        "connect"
      ];
    }
    __name(getBasicNodeMethods, "getBasicNodeMethods");
  }
});

// node_modules/express/lib/router/route.js
var require_route = __commonJS({
  "node_modules/express/lib/router/route.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var debug = require_src()("express:router:route");
    var flatten = require_array_flatten();
    var Layer = require_layer();
    var methods = require_methods();
    var slice = Array.prototype.slice;
    var toString = Object.prototype.toString;
    module.exports = Route;
    function Route(path) {
      this.path = path;
      this.stack = [];
      debug("new %o", path);
      this.methods = {};
    }
    __name(Route, "Route");
    Route.prototype._handles_method = /* @__PURE__ */ __name(function _handles_method(method) {
      if (this.methods._all) {
        return true;
      }
      var name = typeof method === "string" ? method.toLowerCase() : method;
      if (name === "head" && !this.methods["head"]) {
        name = "get";
      }
      return Boolean(this.methods[name]);
    }, "_handles_method");
    Route.prototype._options = /* @__PURE__ */ __name(function _options() {
      var methods2 = Object.keys(this.methods);
      if (this.methods.get && !this.methods.head) {
        methods2.push("head");
      }
      for (var i = 0; i < methods2.length; i++) {
        methods2[i] = methods2[i].toUpperCase();
      }
      return methods2;
    }, "_options");
    Route.prototype.dispatch = /* @__PURE__ */ __name(function dispatch(req, res, done) {
      var idx = 0;
      var stack = this.stack;
      var sync = 0;
      if (stack.length === 0) {
        return done();
      }
      var method = typeof req.method === "string" ? req.method.toLowerCase() : req.method;
      if (method === "head" && !this.methods["head"]) {
        method = "get";
      }
      req.route = this;
      next();
      function next(err) {
        if (err && err === "route") {
          return done();
        }
        if (err && err === "router") {
          return done(err);
        }
        if (++sync > 100) {
          return setImmediate(next, err);
        }
        var layer = stack[idx++];
        if (!layer) {
          return done(err);
        }
        if (layer.method && layer.method !== method) {
          next(err);
        } else if (err) {
          layer.handle_error(err, req, res, next);
        } else {
          layer.handle_request(req, res, next);
        }
        sync = 0;
      }
      __name(next, "next");
    }, "dispatch");
    Route.prototype.all = /* @__PURE__ */ __name(function all() {
      var handles = flatten(slice.call(arguments));
      for (var i = 0; i < handles.length; i++) {
        var handle = handles[i];
        if (typeof handle !== "function") {
          var type = toString.call(handle);
          var msg = "Route.all() requires a callback function but got a " + type;
          throw new TypeError(msg);
        }
        var layer = Layer("/", {}, handle);
        layer.method = void 0;
        this.methods._all = true;
        this.stack.push(layer);
      }
      return this;
    }, "all");
    methods.forEach(function(method) {
      Route.prototype[method] = function() {
        var handles = flatten(slice.call(arguments));
        for (var i = 0; i < handles.length; i++) {
          var handle = handles[i];
          if (typeof handle !== "function") {
            var type = toString.call(handle);
            var msg = "Route." + method + "() requires a callback function but got a " + type;
            throw new Error(msg);
          }
          debug("%s %o", method, this.path);
          var layer = Layer("/", {}, handle);
          layer.method = method;
          this.methods[method] = true;
          this.stack.push(layer);
        }
        return this;
      };
    });
  }
});

// node_modules/utils-merge/index.js
var require_utils_merge = __commonJS({
  "node_modules/utils-merge/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    exports = module.exports = function(a, b) {
      if (a && b) {
        for (var key in b) {
          a[key] = b[key];
        }
      }
      return a;
    };
  }
});

// node_modules/express/lib/router/index.js
var require_router = __commonJS({
  "node_modules/express/lib/router/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var Route = require_route();
    var Layer = require_layer();
    var methods = require_methods();
    var mixin = require_utils_merge();
    var debug = require_src()("express:router");
    var deprecate = require_browser()("express");
    var flatten = require_array_flatten();
    var parseUrl = require_parseurl();
    var setPrototypeOf = require_setprototypeof();
    var objectRegExp = /^\[object (\S+)\]$/;
    var slice = Array.prototype.slice;
    var toString = Object.prototype.toString;
    var proto = module.exports = function(options) {
      var opts = options || {};
      function router(req, res, next) {
        router.handle(req, res, next);
      }
      __name(router, "router");
      setPrototypeOf(router, proto);
      router.params = {};
      router._params = [];
      router.caseSensitive = opts.caseSensitive;
      router.mergeParams = opts.mergeParams;
      router.strict = opts.strict;
      router.stack = [];
      return router;
    };
    proto.param = /* @__PURE__ */ __name(function param(name, fn) {
      if (typeof name === "function") {
        deprecate("router.param(fn): Refactor to use path params");
        this._params.push(name);
        return;
      }
      var params = this._params;
      var len = params.length;
      var ret;
      if (name[0] === ":") {
        deprecate("router.param(" + JSON.stringify(name) + ", fn): Use router.param(" + JSON.stringify(name.slice(1)) + ", fn) instead");
        name = name.slice(1);
      }
      for (var i = 0; i < len; ++i) {
        if (ret = params[i](name, fn)) {
          fn = ret;
        }
      }
      if ("function" !== typeof fn) {
        throw new Error("invalid param() call for " + name + ", got " + fn);
      }
      (this.params[name] = this.params[name] || []).push(fn);
      return this;
    }, "param");
    proto.handle = /* @__PURE__ */ __name(function handle(req, res, out) {
      var self2 = this;
      debug("dispatching %s %s", req.method, req.url);
      var idx = 0;
      var protohost = getProtohost(req.url) || "";
      var removed = "";
      var slashAdded = false;
      var sync = 0;
      var paramcalled = {};
      var options = [];
      var stack = self2.stack;
      var parentParams = req.params;
      var parentUrl = req.baseUrl || "";
      var done = restore(out, req, "baseUrl", "next", "params");
      req.next = next;
      if (req.method === "OPTIONS") {
        done = wrap(done, function(old, err) {
          if (err || options.length === 0) return old(err);
          sendOptionsResponse(res, options, old);
        });
      }
      req.baseUrl = parentUrl;
      req.originalUrl = req.originalUrl || req.url;
      next();
      function next(err) {
        var layerError = err === "route" ? null : err;
        if (slashAdded) {
          req.url = req.url.slice(1);
          slashAdded = false;
        }
        if (removed.length !== 0) {
          req.baseUrl = parentUrl;
          req.url = protohost + removed + req.url.slice(protohost.length);
          removed = "";
        }
        if (layerError === "router") {
          setImmediate(done, null);
          return;
        }
        if (idx >= stack.length) {
          setImmediate(done, layerError);
          return;
        }
        if (++sync > 100) {
          return setImmediate(next, err);
        }
        var path = getPathname(req);
        if (path == null) {
          return done(layerError);
        }
        var layer;
        var match;
        var route;
        while (match !== true && idx < stack.length) {
          layer = stack[idx++];
          match = matchLayer(layer, path);
          route = layer.route;
          if (typeof match !== "boolean") {
            layerError = layerError || match;
          }
          if (match !== true) {
            continue;
          }
          if (!route) {
            continue;
          }
          if (layerError) {
            match = false;
            continue;
          }
          var method = req.method;
          var has_method = route._handles_method(method);
          if (!has_method && method === "OPTIONS") {
            appendMethods(options, route._options());
          }
          if (!has_method && method !== "HEAD") {
            match = false;
          }
        }
        if (match !== true) {
          return done(layerError);
        }
        if (route) {
          req.route = route;
        }
        req.params = self2.mergeParams ? mergeParams(layer.params, parentParams) : layer.params;
        var layerPath = layer.path;
        self2.process_params(layer, paramcalled, req, res, function(err2) {
          if (err2) {
            next(layerError || err2);
          } else if (route) {
            layer.handle_request(req, res, next);
          } else {
            trim_prefix(layer, layerError, layerPath, path);
          }
          sync = 0;
        });
      }
      __name(next, "next");
      function trim_prefix(layer, layerError, layerPath, path) {
        if (layerPath.length !== 0) {
          if (layerPath !== path.slice(0, layerPath.length)) {
            next(layerError);
            return;
          }
          var c = path[layerPath.length];
          if (c && c !== "/" && c !== ".") return next(layerError);
          debug("trim prefix (%s) from url %s", layerPath, req.url);
          removed = layerPath;
          req.url = protohost + req.url.slice(protohost.length + removed.length);
          if (!protohost && req.url[0] !== "/") {
            req.url = "/" + req.url;
            slashAdded = true;
          }
          req.baseUrl = parentUrl + (removed[removed.length - 1] === "/" ? removed.substring(0, removed.length - 1) : removed);
        }
        debug("%s %s : %s", layer.name, layerPath, req.originalUrl);
        if (layerError) {
          layer.handle_error(layerError, req, res, next);
        } else {
          layer.handle_request(req, res, next);
        }
      }
      __name(trim_prefix, "trim_prefix");
    }, "handle");
    proto.process_params = /* @__PURE__ */ __name(function process_params(layer, called, req, res, done) {
      var params = this.params;
      var keys = layer.keys;
      if (!keys || keys.length === 0) {
        return done();
      }
      var i = 0;
      var name;
      var paramIndex = 0;
      var key;
      var paramVal;
      var paramCallbacks;
      var paramCalled;
      function param(err) {
        if (err) {
          return done(err);
        }
        if (i >= keys.length) {
          return done();
        }
        paramIndex = 0;
        key = keys[i++];
        name = key.name;
        paramVal = req.params[name];
        paramCallbacks = params[name];
        paramCalled = called[name];
        if (paramVal === void 0 || !paramCallbacks) {
          return param();
        }
        if (paramCalled && (paramCalled.match === paramVal || paramCalled.error && paramCalled.error !== "route")) {
          req.params[name] = paramCalled.value;
          return param(paramCalled.error);
        }
        called[name] = paramCalled = {
          error: null,
          match: paramVal,
          value: paramVal
        };
        paramCallback();
      }
      __name(param, "param");
      function paramCallback(err) {
        var fn = paramCallbacks[paramIndex++];
        paramCalled.value = req.params[key.name];
        if (err) {
          paramCalled.error = err;
          param(err);
          return;
        }
        if (!fn) return param();
        try {
          fn(req, res, paramCallback, paramVal, key.name);
        } catch (e) {
          paramCallback(e);
        }
      }
      __name(paramCallback, "paramCallback");
      param();
    }, "process_params");
    proto.use = /* @__PURE__ */ __name(function use(fn) {
      var offset = 0;
      var path = "/";
      if (typeof fn !== "function") {
        var arg = fn;
        while (Array.isArray(arg) && arg.length !== 0) {
          arg = arg[0];
        }
        if (typeof arg !== "function") {
          offset = 1;
          path = fn;
        }
      }
      var callbacks = flatten(slice.call(arguments, offset));
      if (callbacks.length === 0) {
        throw new TypeError("Router.use() requires a middleware function");
      }
      for (var i = 0; i < callbacks.length; i++) {
        var fn = callbacks[i];
        if (typeof fn !== "function") {
          throw new TypeError("Router.use() requires a middleware function but got a " + gettype(fn));
        }
        debug("use %o %s", path, fn.name || "<anonymous>");
        var layer = new Layer(path, {
          sensitive: this.caseSensitive,
          strict: false,
          end: false
        }, fn);
        layer.route = void 0;
        this.stack.push(layer);
      }
      return this;
    }, "use");
    proto.route = /* @__PURE__ */ __name(function route(path) {
      var route2 = new Route(path);
      var layer = new Layer(path, {
        sensitive: this.caseSensitive,
        strict: this.strict,
        end: true
      }, route2.dispatch.bind(route2));
      layer.route = route2;
      this.stack.push(layer);
      return route2;
    }, "route");
    methods.concat("all").forEach(function(method) {
      proto[method] = function(path) {
        var route = this.route(path);
        route[method].apply(route, slice.call(arguments, 1));
        return this;
      };
    });
    function appendMethods(list, addition) {
      for (var i = 0; i < addition.length; i++) {
        var method = addition[i];
        if (list.indexOf(method) === -1) {
          list.push(method);
        }
      }
    }
    __name(appendMethods, "appendMethods");
    function getPathname(req) {
      try {
        return parseUrl(req).pathname;
      } catch (err) {
        return void 0;
      }
    }
    __name(getPathname, "getPathname");
    function getProtohost(url) {
      if (typeof url !== "string" || url.length === 0 || url[0] === "/") {
        return void 0;
      }
      var searchIndex = url.indexOf("?");
      var pathLength = searchIndex !== -1 ? searchIndex : url.length;
      var fqdnIndex = url.slice(0, pathLength).indexOf("://");
      return fqdnIndex !== -1 ? url.substring(0, url.indexOf("/", 3 + fqdnIndex)) : void 0;
    }
    __name(getProtohost, "getProtohost");
    function gettype(obj) {
      var type = typeof obj;
      if (type !== "object") {
        return type;
      }
      return toString.call(obj).replace(objectRegExp, "$1");
    }
    __name(gettype, "gettype");
    function matchLayer(layer, path) {
      try {
        return layer.match(path);
      } catch (err) {
        return err;
      }
    }
    __name(matchLayer, "matchLayer");
    function mergeParams(params, parent) {
      if (typeof parent !== "object" || !parent) {
        return params;
      }
      var obj = mixin({}, parent);
      if (!(0 in params) || !(0 in parent)) {
        return mixin(obj, params);
      }
      var i = 0;
      var o = 0;
      while (i in params) {
        i++;
      }
      while (o in parent) {
        o++;
      }
      for (i--; i >= 0; i--) {
        params[i + o] = params[i];
        if (i < o) {
          delete params[i];
        }
      }
      return mixin(obj, params);
    }
    __name(mergeParams, "mergeParams");
    function restore(fn, obj) {
      var props = new Array(arguments.length - 2);
      var vals = new Array(arguments.length - 2);
      for (var i = 0; i < props.length; i++) {
        props[i] = arguments[i + 2];
        vals[i] = obj[props[i]];
      }
      return function() {
        for (var i2 = 0; i2 < props.length; i2++) {
          obj[props[i2]] = vals[i2];
        }
        return fn.apply(this, arguments);
      };
    }
    __name(restore, "restore");
    function sendOptionsResponse(res, options, next) {
      try {
        var body = options.join(",");
        res.set("Allow", body);
        res.send(body);
      } catch (err) {
        next(err);
      }
    }
    __name(sendOptionsResponse, "sendOptionsResponse");
    function wrap(old, fn) {
      return /* @__PURE__ */ __name(function proxy() {
        var args = new Array(arguments.length + 1);
        args[0] = old;
        for (var i = 0, len = arguments.length; i < len; i++) {
          args[i + 1] = arguments[i];
        }
        fn.apply(this, args);
      }, "proxy");
    }
    __name(wrap, "wrap");
  }
});

// node_modules/express/lib/middleware/init.js
var require_init = __commonJS({
  "node_modules/express/lib/middleware/init.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var setPrototypeOf = require_setprototypeof();
    exports.init = function(app2) {
      return /* @__PURE__ */ __name(function expressInit(req, res, next) {
        if (app2.enabled("x-powered-by")) res.setHeader("X-Powered-By", "Express");
        req.res = res;
        res.req = req;
        req.next = next;
        setPrototypeOf(req, app2.request);
        setPrototypeOf(res, app2.response);
        res.locals = res.locals || /* @__PURE__ */ Object.create(null);
        next();
      }, "expressInit");
    };
  }
});

// node_modules/express/lib/middleware/query.js
var require_query = __commonJS({
  "node_modules/express/lib/middleware/query.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var merge = require_utils_merge();
    var parseUrl = require_parseurl();
    var qs = require_lib();
    module.exports = /* @__PURE__ */ __name(function query(options) {
      var opts = merge({}, options);
      var queryparse = qs.parse;
      if (typeof options === "function") {
        queryparse = options;
        opts = void 0;
      }
      if (opts !== void 0 && opts.allowPrototypes === void 0) {
        opts.allowPrototypes = true;
      }
      return /* @__PURE__ */ __name(function query2(req, res, next) {
        if (!req.query) {
          var val = parseUrl(req).query;
          req.query = queryparse(val, opts);
        }
        next();
      }, "query");
    }, "query");
  }
});

// node_modules/express/lib/view.js
var require_view = __commonJS({
  "node_modules/express/lib/view.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var debug = require_src()("express:view");
    var path = require_path();
    var fs = require_fs();
    var dirname = path.dirname;
    var basename = path.basename;
    var extname = path.extname;
    var join = path.join;
    var resolve = path.resolve;
    module.exports = View;
    function View(name, options) {
      var opts = options || {};
      this.defaultEngine = opts.defaultEngine;
      this.ext = extname(name);
      this.name = name;
      this.root = opts.root;
      if (!this.ext && !this.defaultEngine) {
        throw new Error("No default engine was specified and no extension was provided.");
      }
      var fileName = name;
      if (!this.ext) {
        this.ext = this.defaultEngine[0] !== "." ? "." + this.defaultEngine : this.defaultEngine;
        fileName += this.ext;
      }
      if (!opts.engines[this.ext]) {
        var mod = this.ext.slice(1);
        debug('require "%s"', mod);
        var fn = __require(mod).__express;
        if (typeof fn !== "function") {
          throw new Error('Module "' + mod + '" does not provide a view engine.');
        }
        opts.engines[this.ext] = fn;
      }
      this.engine = opts.engines[this.ext];
      this.path = this.lookup(fileName);
    }
    __name(View, "View");
    View.prototype.lookup = /* @__PURE__ */ __name(function lookup(name) {
      var path2;
      var roots = [].concat(this.root);
      debug('lookup "%s"', name);
      for (var i = 0; i < roots.length && !path2; i++) {
        var root = roots[i];
        var loc = resolve(root, name);
        var dir = dirname(loc);
        var file = basename(loc);
        path2 = this.resolve(dir, file);
      }
      return path2;
    }, "lookup");
    View.prototype.render = /* @__PURE__ */ __name(function render(options, callback) {
      debug('render "%s"', this.path);
      this.engine(this.path, options, callback);
    }, "render");
    View.prototype.resolve = /* @__PURE__ */ __name(function resolve2(dir, file) {
      var ext = this.ext;
      var path2 = join(dir, file);
      var stat = tryStat(path2);
      if (stat && stat.isFile()) {
        return path2;
      }
      path2 = join(dir, basename(file, ext), "index" + ext);
      stat = tryStat(path2);
      if (stat && stat.isFile()) {
        return path2;
      }
    }, "resolve");
    function tryStat(path2) {
      debug('stat "%s"', path2);
      try {
        return fs.statSync(path2);
      } catch (e) {
        return void 0;
      }
    }
    __name(tryStat, "tryStat");
  }
});

// node-built-in-modules:buffer
import libDefault13 from "buffer";
var require_buffer = __commonJS({
  "node-built-in-modules:buffer"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault13;
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var buffer = require_buffer();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    __name(copyProps, "copyProps");
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    __name(SafeBuffer, "SafeBuffer");
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/content-disposition/index.js
var require_content_disposition = __commonJS({
  "node_modules/content-disposition/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = contentDisposition;
    module.exports.parse = parse;
    var basename = require_path().basename;
    var Buffer2 = require_safe_buffer().Buffer;
    var ENCODE_URL_ATTR_CHAR_REGEXP = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g;
    var HEX_ESCAPE_REGEXP = /%[0-9A-Fa-f]{2}/;
    var HEX_ESCAPE_REPLACE_REGEXP = /%([0-9A-Fa-f]{2})/g;
    var NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/g;
    var QESC_REGEXP = /\\([\u0000-\u007f])/g;
    var QUOTE_REGEXP = /([\\"])/g;
    var PARAM_REGEXP = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g;
    var TEXT_REGEXP = /^[\x20-\x7e\x80-\xff]+$/;
    var TOKEN_REGEXP = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/;
    var EXT_VALUE_REGEXP = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/;
    var DISPOSITION_TYPE_REGEXP = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/;
    function contentDisposition(filename, options) {
      var opts = options || {};
      var type = opts.type || "attachment";
      var params = createparams(filename, opts.fallback);
      return format(new ContentDisposition(type, params));
    }
    __name(contentDisposition, "contentDisposition");
    function createparams(filename, fallback) {
      if (filename === void 0) {
        return;
      }
      var params = {};
      if (typeof filename !== "string") {
        throw new TypeError("filename must be a string");
      }
      if (fallback === void 0) {
        fallback = true;
      }
      if (typeof fallback !== "string" && typeof fallback !== "boolean") {
        throw new TypeError("fallback must be a string or boolean");
      }
      if (typeof fallback === "string" && NON_LATIN1_REGEXP.test(fallback)) {
        throw new TypeError("fallback must be ISO-8859-1 string");
      }
      var name = basename(filename);
      var isQuotedString = TEXT_REGEXP.test(name);
      var fallbackName = typeof fallback !== "string" ? fallback && getlatin1(name) : basename(fallback);
      var hasFallback = typeof fallbackName === "string" && fallbackName !== name;
      if (hasFallback || !isQuotedString || HEX_ESCAPE_REGEXP.test(name)) {
        params["filename*"] = name;
      }
      if (isQuotedString || hasFallback) {
        params.filename = hasFallback ? fallbackName : name;
      }
      return params;
    }
    __name(createparams, "createparams");
    function format(obj) {
      var parameters = obj.parameters;
      var type = obj.type;
      if (!type || typeof type !== "string" || !TOKEN_REGEXP.test(type)) {
        throw new TypeError("invalid type");
      }
      var string = String(type).toLowerCase();
      if (parameters && typeof parameters === "object") {
        var param;
        var params = Object.keys(parameters).sort();
        for (var i = 0; i < params.length; i++) {
          param = params[i];
          var val = param.substr(-1) === "*" ? ustring(parameters[param]) : qstring(parameters[param]);
          string += "; " + param + "=" + val;
        }
      }
      return string;
    }
    __name(format, "format");
    function decodefield(str) {
      var match = EXT_VALUE_REGEXP.exec(str);
      if (!match) {
        throw new TypeError("invalid extended field value");
      }
      var charset = match[1].toLowerCase();
      var encoded = match[2];
      var value;
      var binary = encoded.replace(HEX_ESCAPE_REPLACE_REGEXP, pdecode);
      switch (charset) {
        case "iso-8859-1":
          value = getlatin1(binary);
          break;
        case "utf-8":
          value = Buffer2.from(binary, "binary").toString("utf8");
          break;
        default:
          throw new TypeError("unsupported charset in extended field");
      }
      return value;
    }
    __name(decodefield, "decodefield");
    function getlatin1(val) {
      return String(val).replace(NON_LATIN1_REGEXP, "?");
    }
    __name(getlatin1, "getlatin1");
    function parse(string) {
      if (!string || typeof string !== "string") {
        throw new TypeError("argument string is required");
      }
      var match = DISPOSITION_TYPE_REGEXP.exec(string);
      if (!match) {
        throw new TypeError("invalid type format");
      }
      var index = match[0].length;
      var type = match[1].toLowerCase();
      var key;
      var names = [];
      var params = {};
      var value;
      index = PARAM_REGEXP.lastIndex = match[0].substr(-1) === ";" ? index - 1 : index;
      while (match = PARAM_REGEXP.exec(string)) {
        if (match.index !== index) {
          throw new TypeError("invalid parameter format");
        }
        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];
        if (names.indexOf(key) !== -1) {
          throw new TypeError("invalid duplicate parameter");
        }
        names.push(key);
        if (key.indexOf("*") + 1 === key.length) {
          key = key.slice(0, -1);
          value = decodefield(value);
          params[key] = value;
          continue;
        }
        if (typeof params[key] === "string") {
          continue;
        }
        if (value[0] === '"') {
          value = value.substr(1, value.length - 2).replace(QESC_REGEXP, "$1");
        }
        params[key] = value;
      }
      if (index !== -1 && index !== string.length) {
        throw new TypeError("invalid parameter format");
      }
      return new ContentDisposition(type, params);
    }
    __name(parse, "parse");
    function pdecode(str, hex) {
      return String.fromCharCode(parseInt(hex, 16));
    }
    __name(pdecode, "pdecode");
    function pencode(char) {
      return "%" + String(char).charCodeAt(0).toString(16).toUpperCase();
    }
    __name(pencode, "pencode");
    function qstring(val) {
      var str = String(val);
      return '"' + str.replace(QUOTE_REGEXP, "\\$1") + '"';
    }
    __name(qstring, "qstring");
    function ustring(val) {
      var str = String(val);
      var encoded = encodeURIComponent(str).replace(ENCODE_URL_ATTR_CHAR_REGEXP, pencode);
      return "UTF-8''" + encoded;
    }
    __name(ustring, "ustring");
    function ContentDisposition(type, parameters) {
      this.type = type;
      this.parameters = parameters;
    }
    __name(ContentDisposition, "ContentDisposition");
  }
});

// node_modules/etag/index.js
var require_etag = __commonJS({
  "node_modules/etag/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = etag;
    var crypto = require_crypto();
    var Stats = require_fs().Stats;
    var toString = Object.prototype.toString;
    function entitytag(entity) {
      if (entity.length === 0) {
        return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
      }
      var hash = crypto.createHash("sha1").update(entity, "utf8").digest("base64").substring(0, 27);
      var len = typeof entity === "string" ? Buffer.byteLength(entity, "utf8") : entity.length;
      return '"' + len.toString(16) + "-" + hash + '"';
    }
    __name(entitytag, "entitytag");
    function etag(entity, options) {
      if (entity == null) {
        throw new TypeError("argument entity is required");
      }
      var isStats = isstats(entity);
      var weak = options && typeof options.weak === "boolean" ? options.weak : isStats;
      if (!isStats && typeof entity !== "string" && !Buffer.isBuffer(entity)) {
        throw new TypeError("argument entity must be string, Buffer, or fs.Stats");
      }
      var tag = isStats ? stattag(entity) : entitytag(entity);
      return weak ? "W/" + tag : tag;
    }
    __name(etag, "etag");
    function isstats(obj) {
      if (typeof Stats === "function" && obj instanceof Stats) {
        return true;
      }
      return obj && typeof obj === "object" && "ctime" in obj && toString.call(obj.ctime) === "[object Date]" && "mtime" in obj && toString.call(obj.mtime) === "[object Date]" && "ino" in obj && typeof obj.ino === "number" && "size" in obj && typeof obj.size === "number";
    }
    __name(isstats, "isstats");
    function stattag(stat) {
      var mtime = stat.mtime.getTime().toString(16);
      var size = stat.size.toString(16);
      return '"' + size + "-" + mtime + '"';
    }
    __name(stattag, "stattag");
  }
});

// node_modules/fresh/index.js
var require_fresh = __commonJS({
  "node_modules/fresh/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var CACHE_CONTROL_NO_CACHE_REGEXP = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
    module.exports = fresh;
    function fresh(reqHeaders, resHeaders) {
      var modifiedSince = reqHeaders["if-modified-since"];
      var noneMatch = reqHeaders["if-none-match"];
      if (!modifiedSince && !noneMatch) {
        return false;
      }
      var cacheControl = reqHeaders["cache-control"];
      if (cacheControl && CACHE_CONTROL_NO_CACHE_REGEXP.test(cacheControl)) {
        return false;
      }
      if (noneMatch && noneMatch !== "*") {
        var etag = resHeaders["etag"];
        if (!etag) {
          return false;
        }
        var etagStale = true;
        var matches = parseTokenList(noneMatch);
        for (var i = 0; i < matches.length; i++) {
          var match = matches[i];
          if (match === etag || match === "W/" + etag || "W/" + match === etag) {
            etagStale = false;
            break;
          }
        }
        if (etagStale) {
          return false;
        }
      }
      if (modifiedSince) {
        var lastModified = resHeaders["last-modified"];
        var modifiedStale = !lastModified || !(parseHttpDate(lastModified) <= parseHttpDate(modifiedSince));
        if (modifiedStale) {
          return false;
        }
      }
      return true;
    }
    __name(fresh, "fresh");
    function parseHttpDate(date) {
      var timestamp = date && Date.parse(date);
      return typeof timestamp === "number" ? timestamp : NaN;
    }
    __name(parseHttpDate, "parseHttpDate");
    function parseTokenList(str) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i = 0, len = str.length; i < len; i++) {
        switch (str.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 44:
            list.push(str.substring(start, end));
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
      list.push(str.substring(start, end));
      return list;
    }
    __name(parseTokenList, "parseTokenList");
  }
});

// node_modules/mime/types.json
var require_types = __commonJS({
  "node_modules/mime/types.json"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomsvc+xml": ["atomsvc"], "application/bdoc": ["bdoc"], "application/ccxml+xml": ["ccxml"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["ecma"], "application/emma+xml": ["emma"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/font-tdpfr": ["pfr"], "application/font-woff": [], "application/font-woff2": [], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/prs.cww": ["cww"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": [], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": [], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": [], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": [], "application/x-msdownload": ["com", "bat"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["wmf", "emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": [], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "application/xaml+xml": ["xaml"], "application/xcap-diff+xml": ["xdf"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": [], "audio/adpcm": ["adp"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mp3": [], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/wav": ["wav"], "audio/wave": [], "audio/webm": ["weba"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": [], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": [], "audio/x-wav": [], "audio/xm": ["xm"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/apng": ["apng"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/ief": ["ief"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/ktx": ["ktx"], "image/png": ["png"], "image/prs.btif": ["btif"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/tiff": ["tiff", "tif"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": [], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/webp": ["webp"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": [], "image/x-pcx": ["pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/rfc822": ["eml", "mime"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.vtu": ["vtu"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["x3db", "x3dbz"], "model/x3d+vrml": ["x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/hjson": ["hjson"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/prs.lines.tag": ["dsc"], "text/richtext": ["rtx"], "text/rtf": [], "text/sgml": ["sgml", "sgm"], "text/slim": ["slim", "slm"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/vtt": ["vtt"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": [], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "text/xml": [], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/jpeg": ["jpgv"], "video/jpm": ["jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/webm": ["webm"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// node_modules/mime/mime.js
var require_mime = __commonJS({
  "node_modules/mime/mime.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var path = require_path();
    var fs = require_fs();
    function Mime() {
      this.types = /* @__PURE__ */ Object.create(null);
      this.extensions = /* @__PURE__ */ Object.create(null);
    }
    __name(Mime, "Mime");
    Mime.prototype.define = function(map) {
      for (var type in map) {
        var exts = map[type];
        for (var i = 0; i < exts.length; i++) {
          if (process.env.DEBUG_MIME && this.types[exts[i]]) {
            console.warn((this._loading || "define()").replace(/.*\//, ""), 'changes "' + exts[i] + '" extension type from ' + this.types[exts[i]] + " to " + type);
          }
          this.types[exts[i]] = type;
        }
        if (!this.extensions[type]) {
          this.extensions[type] = exts[0];
        }
      }
    };
    Mime.prototype.load = function(file) {
      this._loading = file;
      var map = {}, content = fs.readFileSync(file, "ascii"), lines = content.split(/[\r\n]+/);
      lines.forEach(function(line) {
        var fields = line.replace(/\s*#.*|^\s*|\s*$/g, "").split(/\s+/);
        map[fields.shift()] = fields;
      });
      this.define(map);
      this._loading = null;
    };
    Mime.prototype.lookup = function(path2, fallback) {
      var ext = path2.replace(/^.*[\.\/\\]/, "").toLowerCase();
      return this.types[ext] || fallback || this.default_type;
    };
    Mime.prototype.extension = function(mimeType) {
      var type = mimeType.match(/^\s*([^;\s]*)(?:;|\s|$)/)[1].toLowerCase();
      return this.extensions[type];
    };
    var mime = new Mime();
    mime.define(require_types());
    mime.default_type = mime.lookup("bin");
    mime.Mime = Mime;
    mime.charsets = {
      lookup: /* @__PURE__ */ __name(function(mimeType, fallback) {
        return /^text\/|^application\/(javascript|json)/.test(mimeType) ? "UTF-8" : fallback;
      }, "lookup")
    };
    module.exports = mime;
  }
});

// node_modules/send/node_modules/ms/index.js
var require_ms2 = __commonJS({
  "node_modules/send/node_modules/ms/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    __name(parse, "parse");
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
    __name(plural, "plural");
  }
});

// node_modules/range-parser/index.js
var require_range_parser = __commonJS({
  "node_modules/range-parser/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = rangeParser;
    function rangeParser(size, str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var index = str.indexOf("=");
      if (index === -1) {
        return -2;
      }
      var arr = str.slice(index + 1).split(",");
      var ranges = [];
      ranges.type = str.slice(0, index);
      for (var i = 0; i < arr.length; i++) {
        var range = arr[i].split("-");
        var start = parseInt(range[0], 10);
        var end = parseInt(range[1], 10);
        if (isNaN(start)) {
          start = size - end;
          end = size - 1;
        } else if (isNaN(end)) {
          end = size - 1;
        }
        if (end > size - 1) {
          end = size - 1;
        }
        if (isNaN(start) || isNaN(end) || start > end || start < 0) {
          continue;
        }
        ranges.push({
          start,
          end
        });
      }
      if (ranges.length < 1) {
        return -1;
      }
      return options && options.combine ? combineRanges(ranges) : ranges;
    }
    __name(rangeParser, "rangeParser");
    function combineRanges(ranges) {
      var ordered = ranges.map(mapWithIndex).sort(sortByRangeStart);
      for (var j = 0, i = 1; i < ordered.length; i++) {
        var range = ordered[i];
        var current = ordered[j];
        if (range.start > current.end + 1) {
          ordered[++j] = range;
        } else if (range.end > current.end) {
          current.end = range.end;
          current.index = Math.min(current.index, range.index);
        }
      }
      ordered.length = j + 1;
      var combined = ordered.sort(sortByRangeIndex).map(mapWithoutIndex);
      combined.type = ranges.type;
      return combined;
    }
    __name(combineRanges, "combineRanges");
    function mapWithIndex(range, index) {
      return {
        start: range.start,
        end: range.end,
        index
      };
    }
    __name(mapWithIndex, "mapWithIndex");
    function mapWithoutIndex(range) {
      return {
        start: range.start,
        end: range.end
      };
    }
    __name(mapWithoutIndex, "mapWithoutIndex");
    function sortByRangeIndex(a, b) {
      return a.index - b.index;
    }
    __name(sortByRangeIndex, "sortByRangeIndex");
    function sortByRangeStart(a, b) {
      return a.start - b.start;
    }
    __name(sortByRangeStart, "sortByRangeStart");
  }
});

// node_modules/send/index.js
var require_send = __commonJS({
  "node_modules/send/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var createError = require_http_errors();
    var debug = require_src()("send");
    var deprecate = require_browser()("send");
    var destroy = require_destroy();
    var encodeUrl = require_encodeurl();
    var escapeHtml = require_escape_html();
    var etag = require_etag();
    var fresh = require_fresh();
    var fs = require_fs();
    var mime = require_mime();
    var ms = require_ms2();
    var onFinished = require_on_finished();
    var parseRange = require_range_parser();
    var path = require_path();
    var statuses = require_statuses();
    var Stream = require_stream();
    var util = require_util();
    var extname = path.extname;
    var join = path.join;
    var normalize = path.normalize;
    var resolve = path.resolve;
    var sep = path.sep;
    var BYTES_RANGE_REGEXP = /^ *bytes=/;
    var MAX_MAXAGE = 60 * 60 * 24 * 365 * 1e3;
    var UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/;
    module.exports = send2;
    module.exports.mime = mime;
    function send2(req, path2, options) {
      return new SendStream(req, path2, options);
    }
    __name(send2, "send");
    function SendStream(req, path2, options) {
      Stream.call(this);
      var opts = options || {};
      this.options = opts;
      this.path = path2;
      this.req = req;
      this._acceptRanges = opts.acceptRanges !== void 0 ? Boolean(opts.acceptRanges) : true;
      this._cacheControl = opts.cacheControl !== void 0 ? Boolean(opts.cacheControl) : true;
      this._etag = opts.etag !== void 0 ? Boolean(opts.etag) : true;
      this._dotfiles = opts.dotfiles !== void 0 ? opts.dotfiles : "ignore";
      if (this._dotfiles !== "ignore" && this._dotfiles !== "allow" && this._dotfiles !== "deny") {
        throw new TypeError('dotfiles option must be "allow", "deny", or "ignore"');
      }
      this._hidden = Boolean(opts.hidden);
      if (opts.hidden !== void 0) {
        deprecate("hidden: use dotfiles: '" + (this._hidden ? "allow" : "ignore") + "' instead");
      }
      if (opts.dotfiles === void 0) {
        this._dotfiles = void 0;
      }
      this._extensions = opts.extensions !== void 0 ? normalizeList(opts.extensions, "extensions option") : [];
      this._immutable = opts.immutable !== void 0 ? Boolean(opts.immutable) : false;
      this._index = opts.index !== void 0 ? normalizeList(opts.index, "index option") : ["index.html"];
      this._lastModified = opts.lastModified !== void 0 ? Boolean(opts.lastModified) : true;
      this._maxage = opts.maxAge || opts.maxage;
      this._maxage = typeof this._maxage === "string" ? ms(this._maxage) : Number(this._maxage);
      this._maxage = !isNaN(this._maxage) ? Math.min(Math.max(0, this._maxage), MAX_MAXAGE) : 0;
      this._root = opts.root ? resolve(opts.root) : null;
      if (!this._root && opts.from) {
        this.from(opts.from);
      }
    }
    __name(SendStream, "SendStream");
    util.inherits(SendStream, Stream);
    SendStream.prototype.etag = deprecate.function(/* @__PURE__ */ __name(function etag2(val) {
      this._etag = Boolean(val);
      debug("etag %s", this._etag);
      return this;
    }, "etag"), "send.etag: pass etag as option");
    SendStream.prototype.hidden = deprecate.function(/* @__PURE__ */ __name(function hidden(val) {
      this._hidden = Boolean(val);
      this._dotfiles = void 0;
      debug("hidden %s", this._hidden);
      return this;
    }, "hidden"), "send.hidden: use dotfiles option");
    SendStream.prototype.index = deprecate.function(/* @__PURE__ */ __name(function index(paths) {
      var index2 = !paths ? [] : normalizeList(paths, "paths argument");
      debug("index %o", paths);
      this._index = index2;
      return this;
    }, "index"), "send.index: pass index as option");
    SendStream.prototype.root = /* @__PURE__ */ __name(function root(path2) {
      this._root = resolve(String(path2));
      debug("root %s", this._root);
      return this;
    }, "root");
    SendStream.prototype.from = deprecate.function(
      SendStream.prototype.root,
      "send.from: pass root as option"
    );
    SendStream.prototype.root = deprecate.function(
      SendStream.prototype.root,
      "send.root: pass root as option"
    );
    SendStream.prototype.maxage = deprecate.function(/* @__PURE__ */ __name(function maxage(maxAge) {
      this._maxage = typeof maxAge === "string" ? ms(maxAge) : Number(maxAge);
      this._maxage = !isNaN(this._maxage) ? Math.min(Math.max(0, this._maxage), MAX_MAXAGE) : 0;
      debug("max-age %d", this._maxage);
      return this;
    }, "maxage"), "send.maxage: pass maxAge as option");
    SendStream.prototype.error = /* @__PURE__ */ __name(function error(status, err) {
      if (hasListeners(this, "error")) {
        return this.emit("error", createHttpError(status, err));
      }
      var res = this.res;
      var msg = statuses.message[status] || String(status);
      var doc = createHtmlDocument("Error", escapeHtml(msg));
      clearHeaders(res);
      if (err && err.headers) {
        setHeaders(res, err.headers);
      }
      res.statusCode = status;
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.setHeader("Content-Length", Buffer.byteLength(doc));
      res.setHeader("Content-Security-Policy", "default-src 'none'");
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.end(doc);
    }, "error");
    SendStream.prototype.hasTrailingSlash = /* @__PURE__ */ __name(function hasTrailingSlash() {
      return this.path[this.path.length - 1] === "/";
    }, "hasTrailingSlash");
    SendStream.prototype.isConditionalGET = /* @__PURE__ */ __name(function isConditionalGET() {
      return this.req.headers["if-match"] || this.req.headers["if-unmodified-since"] || this.req.headers["if-none-match"] || this.req.headers["if-modified-since"];
    }, "isConditionalGET");
    SendStream.prototype.isPreconditionFailure = /* @__PURE__ */ __name(function isPreconditionFailure() {
      var req = this.req;
      var res = this.res;
      var match = req.headers["if-match"];
      if (match) {
        var etag2 = res.getHeader("ETag");
        return !etag2 || match !== "*" && parseTokenList(match).every(function(match2) {
          return match2 !== etag2 && match2 !== "W/" + etag2 && "W/" + match2 !== etag2;
        });
      }
      var unmodifiedSince = parseHttpDate(req.headers["if-unmodified-since"]);
      if (!isNaN(unmodifiedSince)) {
        var lastModified = parseHttpDate(res.getHeader("Last-Modified"));
        return isNaN(lastModified) || lastModified > unmodifiedSince;
      }
      return false;
    }, "isPreconditionFailure");
    SendStream.prototype.removeContentHeaderFields = /* @__PURE__ */ __name(function removeContentHeaderFields() {
      var res = this.res;
      res.removeHeader("Content-Encoding");
      res.removeHeader("Content-Language");
      res.removeHeader("Content-Length");
      res.removeHeader("Content-Range");
      res.removeHeader("Content-Type");
    }, "removeContentHeaderFields");
    SendStream.prototype.notModified = /* @__PURE__ */ __name(function notModified() {
      var res = this.res;
      debug("not modified");
      this.removeContentHeaderFields();
      res.statusCode = 304;
      res.end();
    }, "notModified");
    SendStream.prototype.headersAlreadySent = /* @__PURE__ */ __name(function headersAlreadySent() {
      var err = new Error("Can't set headers after they are sent.");
      debug("headers already sent");
      this.error(500, err);
    }, "headersAlreadySent");
    SendStream.prototype.isCachable = /* @__PURE__ */ __name(function isCachable() {
      var statusCode = this.res.statusCode;
      return statusCode >= 200 && statusCode < 300 || statusCode === 304;
    }, "isCachable");
    SendStream.prototype.onStatError = /* @__PURE__ */ __name(function onStatError(error) {
      switch (error.code) {
        case "ENAMETOOLONG":
        case "ENOENT":
        case "ENOTDIR":
          this.error(404, error);
          break;
        default:
          this.error(500, error);
          break;
      }
    }, "onStatError");
    SendStream.prototype.isFresh = /* @__PURE__ */ __name(function isFresh() {
      return fresh(this.req.headers, {
        etag: this.res.getHeader("ETag"),
        "last-modified": this.res.getHeader("Last-Modified")
      });
    }, "isFresh");
    SendStream.prototype.isRangeFresh = /* @__PURE__ */ __name(function isRangeFresh() {
      var ifRange = this.req.headers["if-range"];
      if (!ifRange) {
        return true;
      }
      if (ifRange.indexOf('"') !== -1) {
        var etag2 = this.res.getHeader("ETag");
        return Boolean(etag2 && ifRange.indexOf(etag2) !== -1);
      }
      var lastModified = this.res.getHeader("Last-Modified");
      return parseHttpDate(lastModified) <= parseHttpDate(ifRange);
    }, "isRangeFresh");
    SendStream.prototype.redirect = /* @__PURE__ */ __name(function redirect(path2) {
      var res = this.res;
      if (hasListeners(this, "directory")) {
        this.emit("directory", res, path2);
        return;
      }
      if (this.hasTrailingSlash()) {
        this.error(403);
        return;
      }
      var loc = encodeUrl(collapseLeadingSlashes(this.path + "/"));
      var doc = createHtmlDocument("Redirecting", "Redirecting to " + escapeHtml(loc));
      res.statusCode = 301;
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.setHeader("Content-Length", Buffer.byteLength(doc));
      res.setHeader("Content-Security-Policy", "default-src 'none'");
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("Location", loc);
      res.end(doc);
    }, "redirect");
    SendStream.prototype.pipe = /* @__PURE__ */ __name(function pipe(res) {
      var root = this._root;
      this.res = res;
      var path2 = decode(this.path);
      if (path2 === -1) {
        this.error(400);
        return res;
      }
      if (~path2.indexOf("\0")) {
        this.error(400);
        return res;
      }
      var parts;
      if (root !== null) {
        if (path2) {
          path2 = normalize("." + sep + path2);
        }
        if (UP_PATH_REGEXP.test(path2)) {
          debug('malicious path "%s"', path2);
          this.error(403);
          return res;
        }
        parts = path2.split(sep);
        path2 = normalize(join(root, path2));
      } else {
        if (UP_PATH_REGEXP.test(path2)) {
          debug('malicious path "%s"', path2);
          this.error(403);
          return res;
        }
        parts = normalize(path2).split(sep);
        path2 = resolve(path2);
      }
      if (containsDotFile(parts)) {
        var access = this._dotfiles;
        if (access === void 0) {
          access = parts[parts.length - 1][0] === "." ? this._hidden ? "allow" : "ignore" : "allow";
        }
        debug('%s dotfile "%s"', access, path2);
        switch (access) {
          case "allow":
            break;
          case "deny":
            this.error(403);
            return res;
          case "ignore":
          default:
            this.error(404);
            return res;
        }
      }
      if (this._index.length && this.hasTrailingSlash()) {
        this.sendIndex(path2);
        return res;
      }
      this.sendFile(path2);
      return res;
    }, "pipe");
    SendStream.prototype.send = /* @__PURE__ */ __name(function send3(path2, stat) {
      var len = stat.size;
      var options = this.options;
      var opts = {};
      var res = this.res;
      var req = this.req;
      var ranges = req.headers.range;
      var offset = options.start || 0;
      if (headersSent(res)) {
        this.headersAlreadySent();
        return;
      }
      debug('pipe "%s"', path2);
      this.setHeader(path2, stat);
      this.type(path2);
      if (this.isConditionalGET()) {
        if (this.isPreconditionFailure()) {
          this.error(412);
          return;
        }
        if (this.isCachable() && this.isFresh()) {
          this.notModified();
          return;
        }
      }
      len = Math.max(0, len - offset);
      if (options.end !== void 0) {
        var bytes = options.end - offset + 1;
        if (len > bytes) len = bytes;
      }
      if (this._acceptRanges && BYTES_RANGE_REGEXP.test(ranges)) {
        ranges = parseRange(len, ranges, {
          combine: true
        });
        if (!this.isRangeFresh()) {
          debug("range stale");
          ranges = -2;
        }
        if (ranges === -1) {
          debug("range unsatisfiable");
          res.setHeader("Content-Range", contentRange("bytes", len));
          return this.error(416, {
            headers: { "Content-Range": res.getHeader("Content-Range") }
          });
        }
        if (ranges !== -2 && ranges.length === 1) {
          debug("range %j", ranges);
          res.statusCode = 206;
          res.setHeader("Content-Range", contentRange("bytes", len, ranges[0]));
          offset += ranges[0].start;
          len = ranges[0].end - ranges[0].start + 1;
        }
      }
      for (var prop in options) {
        opts[prop] = options[prop];
      }
      opts.start = offset;
      opts.end = Math.max(offset, offset + len - 1);
      res.setHeader("Content-Length", len);
      if (req.method === "HEAD") {
        res.end();
        return;
      }
      this.stream(path2, opts);
    }, "send");
    SendStream.prototype.sendFile = /* @__PURE__ */ __name(function sendFile(path2) {
      var i = 0;
      var self2 = this;
      debug('stat "%s"', path2);
      fs.stat(path2, /* @__PURE__ */ __name(function onstat(err, stat) {
        if (err && err.code === "ENOENT" && !extname(path2) && path2[path2.length - 1] !== sep) {
          return next(err);
        }
        if (err) return self2.onStatError(err);
        if (stat.isDirectory()) return self2.redirect(path2);
        self2.emit("file", path2, stat);
        self2.send(path2, stat);
      }, "onstat"));
      function next(err) {
        if (self2._extensions.length <= i) {
          return err ? self2.onStatError(err) : self2.error(404);
        }
        var p = path2 + "." + self2._extensions[i++];
        debug('stat "%s"', p);
        fs.stat(p, function(err2, stat) {
          if (err2) return next(err2);
          if (stat.isDirectory()) return next();
          self2.emit("file", p, stat);
          self2.send(p, stat);
        });
      }
      __name(next, "next");
    }, "sendFile");
    SendStream.prototype.sendIndex = /* @__PURE__ */ __name(function sendIndex(path2) {
      var i = -1;
      var self2 = this;
      function next(err) {
        if (++i >= self2._index.length) {
          if (err) return self2.onStatError(err);
          return self2.error(404);
        }
        var p = join(path2, self2._index[i]);
        debug('stat "%s"', p);
        fs.stat(p, function(err2, stat) {
          if (err2) return next(err2);
          if (stat.isDirectory()) return next();
          self2.emit("file", p, stat);
          self2.send(p, stat);
        });
      }
      __name(next, "next");
      next();
    }, "sendIndex");
    SendStream.prototype.stream = /* @__PURE__ */ __name(function stream(path2, options) {
      var self2 = this;
      var res = this.res;
      var stream2 = fs.createReadStream(path2, options);
      this.emit("stream", stream2);
      stream2.pipe(res);
      function cleanup() {
        destroy(stream2, true);
      }
      __name(cleanup, "cleanup");
      onFinished(res, cleanup);
      stream2.on("error", /* @__PURE__ */ __name(function onerror(err) {
        cleanup();
        self2.onStatError(err);
      }, "onerror"));
      stream2.on("end", /* @__PURE__ */ __name(function onend() {
        self2.emit("end");
      }, "onend"));
    }, "stream");
    SendStream.prototype.type = /* @__PURE__ */ __name(function type(path2) {
      var res = this.res;
      if (res.getHeader("Content-Type")) return;
      var type2 = mime.lookup(path2);
      if (!type2) {
        debug("no content-type");
        return;
      }
      var charset = mime.charsets.lookup(type2);
      debug("content-type %s", type2);
      res.setHeader("Content-Type", type2 + (charset ? "; charset=" + charset : ""));
    }, "type");
    SendStream.prototype.setHeader = /* @__PURE__ */ __name(function setHeader(path2, stat) {
      var res = this.res;
      this.emit("headers", res, path2, stat);
      if (this._acceptRanges && !res.getHeader("Accept-Ranges")) {
        debug("accept ranges");
        res.setHeader("Accept-Ranges", "bytes");
      }
      if (this._cacheControl && !res.getHeader("Cache-Control")) {
        var cacheControl = "public, max-age=" + Math.floor(this._maxage / 1e3);
        if (this._immutable) {
          cacheControl += ", immutable";
        }
        debug("cache-control %s", cacheControl);
        res.setHeader("Cache-Control", cacheControl);
      }
      if (this._lastModified && !res.getHeader("Last-Modified")) {
        var modified = stat.mtime.toUTCString();
        debug("modified %s", modified);
        res.setHeader("Last-Modified", modified);
      }
      if (this._etag && !res.getHeader("ETag")) {
        var val = etag(stat);
        debug("etag %s", val);
        res.setHeader("ETag", val);
      }
    }, "setHeader");
    function clearHeaders(res) {
      var headers = getHeaderNames(res);
      for (var i = 0; i < headers.length; i++) {
        res.removeHeader(headers[i]);
      }
    }
    __name(clearHeaders, "clearHeaders");
    function collapseLeadingSlashes(str) {
      for (var i = 0; i < str.length; i++) {
        if (str[i] !== "/") {
          break;
        }
      }
      return i > 1 ? "/" + str.substr(i) : str;
    }
    __name(collapseLeadingSlashes, "collapseLeadingSlashes");
    function containsDotFile(parts) {
      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (part.length > 1 && part[0] === ".") {
          return true;
        }
      }
      return false;
    }
    __name(containsDotFile, "containsDotFile");
    function contentRange(type, size, range) {
      return type + " " + (range ? range.start + "-" + range.end : "*") + "/" + size;
    }
    __name(contentRange, "contentRange");
    function createHtmlDocument(title2, body) {
      return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>' + title2 + "</title>\n</head>\n<body>\n<pre>" + body + "</pre>\n</body>\n</html>\n";
    }
    __name(createHtmlDocument, "createHtmlDocument");
    function createHttpError(status, err) {
      if (!err) {
        return createError(status);
      }
      return err instanceof Error ? createError(status, err, { expose: false }) : createError(status, err);
    }
    __name(createHttpError, "createHttpError");
    function decode(path2) {
      try {
        return decodeURIComponent(path2);
      } catch (err) {
        return -1;
      }
    }
    __name(decode, "decode");
    function getHeaderNames(res) {
      return typeof res.getHeaderNames !== "function" ? Object.keys(res._headers || {}) : res.getHeaderNames();
    }
    __name(getHeaderNames, "getHeaderNames");
    function hasListeners(emitter, type) {
      var count = typeof emitter.listenerCount !== "function" ? emitter.listeners(type).length : emitter.listenerCount(type);
      return count > 0;
    }
    __name(hasListeners, "hasListeners");
    function headersSent(res) {
      return typeof res.headersSent !== "boolean" ? Boolean(res._header) : res.headersSent;
    }
    __name(headersSent, "headersSent");
    function normalizeList(val, name) {
      var list = [].concat(val || []);
      for (var i = 0; i < list.length; i++) {
        if (typeof list[i] !== "string") {
          throw new TypeError(name + " must be array of strings or false");
        }
      }
      return list;
    }
    __name(normalizeList, "normalizeList");
    function parseHttpDate(date) {
      var timestamp = date && Date.parse(date);
      return typeof timestamp === "number" ? timestamp : NaN;
    }
    __name(parseHttpDate, "parseHttpDate");
    function parseTokenList(str) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i = 0, len = str.length; i < len; i++) {
        switch (str.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 44:
            if (start !== end) {
              list.push(str.substring(start, end));
            }
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
      if (start !== end) {
        list.push(str.substring(start, end));
      }
      return list;
    }
    __name(parseTokenList, "parseTokenList");
    function setHeaders(res, headers) {
      var keys = Object.keys(headers);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        res.setHeader(key, headers[key]);
      }
    }
    __name(setHeaders, "setHeaders");
  }
});

// node_modules/forwarded/index.js
var require_forwarded = __commonJS({
  "node_modules/forwarded/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = forwarded;
    function forwarded(req) {
      if (!req) {
        throw new TypeError("argument req is required");
      }
      var proxyAddrs = parse(req.headers["x-forwarded-for"] || "");
      var socketAddr = getSocketAddr(req);
      var addrs = [socketAddr].concat(proxyAddrs);
      return addrs;
    }
    __name(forwarded, "forwarded");
    function getSocketAddr(req) {
      return req.socket ? req.socket.remoteAddress : req.connection.remoteAddress;
    }
    __name(getSocketAddr, "getSocketAddr");
    function parse(header) {
      var end = header.length;
      var list = [];
      var start = header.length;
      for (var i = header.length - 1; i >= 0; i--) {
        switch (header.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i;
            }
            break;
          case 44:
            if (start !== end) {
              list.push(header.substring(start, end));
            }
            start = end = i;
            break;
          default:
            start = i;
            break;
        }
      }
      if (start !== end) {
        list.push(header.substring(start, end));
      }
      return list;
    }
    __name(parse, "parse");
  }
});

// node_modules/ipaddr.js/lib/ipaddr.js
var require_ipaddr = __commonJS({
  "node_modules/ipaddr.js/lib/ipaddr.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    (function() {
      var expandIPv6, ipaddr, ipv4Part, ipv4Regexes, ipv6Part, ipv6Regexes, matchCIDR, root, zoneIndex;
      ipaddr = {};
      root = this;
      if (typeof module !== "undefined" && module !== null && module.exports) {
        module.exports = ipaddr;
      } else {
        root["ipaddr"] = ipaddr;
      }
      matchCIDR = /* @__PURE__ */ __name(function(first, second, partSize, cidrBits) {
        var part, shift;
        if (first.length !== second.length) {
          throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
        }
        part = 0;
        while (cidrBits > 0) {
          shift = partSize - cidrBits;
          if (shift < 0) {
            shift = 0;
          }
          if (first[part] >> shift !== second[part] >> shift) {
            return false;
          }
          cidrBits -= partSize;
          part += 1;
        }
        return true;
      }, "matchCIDR");
      ipaddr.subnetMatch = function(address, rangeList, defaultName) {
        var k, len, rangeName, rangeSubnets, subnet;
        if (defaultName == null) {
          defaultName = "unicast";
        }
        for (rangeName in rangeList) {
          rangeSubnets = rangeList[rangeName];
          if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
            rangeSubnets = [rangeSubnets];
          }
          for (k = 0, len = rangeSubnets.length; k < len; k++) {
            subnet = rangeSubnets[k];
            if (address.kind() === subnet[0].kind()) {
              if (address.match.apply(address, subnet)) {
                return rangeName;
              }
            }
          }
        }
        return defaultName;
      };
      ipaddr.IPv4 = (function() {
        function IPv4(octets) {
          var k, len, octet;
          if (octets.length !== 4) {
            throw new Error("ipaddr: ipv4 octet count should be 4");
          }
          for (k = 0, len = octets.length; k < len; k++) {
            octet = octets[k];
            if (!(0 <= octet && octet <= 255)) {
              throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
            }
          }
          this.octets = octets;
        }
        __name(IPv4, "IPv4");
        IPv4.prototype.kind = function() {
          return "ipv4";
        };
        IPv4.prototype.toString = function() {
          return this.octets.join(".");
        };
        IPv4.prototype.toNormalizedString = function() {
          return this.toString();
        };
        IPv4.prototype.toByteArray = function() {
          return this.octets.slice(0);
        };
        IPv4.prototype.match = function(other, cidrRange) {
          var ref2;
          if (cidrRange === void 0) {
            ref2 = other, other = ref2[0], cidrRange = ref2[1];
          }
          if (other.kind() !== "ipv4") {
            throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
          }
          return matchCIDR(this.octets, other.octets, 8, cidrRange);
        };
        IPv4.prototype.SpecialRanges = {
          unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
          broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
          multicast: [[new IPv4([224, 0, 0, 0]), 4]],
          linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
          loopback: [[new IPv4([127, 0, 0, 0]), 8]],
          carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
          "private": [[new IPv4([10, 0, 0, 0]), 8], [new IPv4([172, 16, 0, 0]), 12], [new IPv4([192, 168, 0, 0]), 16]],
          reserved: [[new IPv4([192, 0, 0, 0]), 24], [new IPv4([192, 0, 2, 0]), 24], [new IPv4([192, 88, 99, 0]), 24], [new IPv4([198, 51, 100, 0]), 24], [new IPv4([203, 0, 113, 0]), 24], [new IPv4([240, 0, 0, 0]), 4]]
        };
        IPv4.prototype.range = function() {
          return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        IPv4.prototype.toIPv4MappedAddress = function() {
          return ipaddr.IPv6.parse("::ffff:" + this.toString());
        };
        IPv4.prototype.prefixLengthFromSubnetMask = function() {
          var cidr, i, k, octet, stop, zeros, zerotable;
          zerotable = {
            0: 8,
            128: 7,
            192: 6,
            224: 5,
            240: 4,
            248: 3,
            252: 2,
            254: 1,
            255: 0
          };
          cidr = 0;
          stop = false;
          for (i = k = 3; k >= 0; i = k += -1) {
            octet = this.octets[i];
            if (octet in zerotable) {
              zeros = zerotable[octet];
              if (stop && zeros !== 0) {
                return null;
              }
              if (zeros !== 8) {
                stop = true;
              }
              cidr += zeros;
            } else {
              return null;
            }
          }
          return 32 - cidr;
        };
        return IPv4;
      })();
      ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
      ipv4Regexes = {
        fourOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$", "i"),
        longValue: new RegExp("^" + ipv4Part + "$", "i")
      };
      ipaddr.IPv4.parser = function(string) {
        var match, parseIntAuto, part, shift, value;
        parseIntAuto = /* @__PURE__ */ __name(function(string2) {
          if (string2[0] === "0" && string2[1] !== "x") {
            return parseInt(string2, 8);
          } else {
            return parseInt(string2);
          }
        }, "parseIntAuto");
        if (match = string.match(ipv4Regexes.fourOctet)) {
          return (function() {
            var k, len, ref2, results;
            ref2 = match.slice(1, 6);
            results = [];
            for (k = 0, len = ref2.length; k < len; k++) {
              part = ref2[k];
              results.push(parseIntAuto(part));
            }
            return results;
          })();
        } else if (match = string.match(ipv4Regexes.longValue)) {
          value = parseIntAuto(match[1]);
          if (value > 4294967295 || value < 0) {
            throw new Error("ipaddr: address outside defined range");
          }
          return (function() {
            var k, results;
            results = [];
            for (shift = k = 0; k <= 24; shift = k += 8) {
              results.push(value >> shift & 255);
            }
            return results;
          })().reverse();
        } else {
          return null;
        }
      };
      ipaddr.IPv6 = (function() {
        function IPv6(parts, zoneId) {
          var i, k, l, len, part, ref2;
          if (parts.length === 16) {
            this.parts = [];
            for (i = k = 0; k <= 14; i = k += 2) {
              this.parts.push(parts[i] << 8 | parts[i + 1]);
            }
          } else if (parts.length === 8) {
            this.parts = parts;
          } else {
            throw new Error("ipaddr: ipv6 part count should be 8 or 16");
          }
          ref2 = this.parts;
          for (l = 0, len = ref2.length; l < len; l++) {
            part = ref2[l];
            if (!(0 <= part && part <= 65535)) {
              throw new Error("ipaddr: ipv6 part should fit in 16 bits");
            }
          }
          if (zoneId) {
            this.zoneId = zoneId;
          }
        }
        __name(IPv6, "IPv6");
        IPv6.prototype.kind = function() {
          return "ipv6";
        };
        IPv6.prototype.toString = function() {
          return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, "::");
        };
        IPv6.prototype.toRFC5952String = function() {
          var bestMatchIndex, bestMatchLength, match, regex, string;
          regex = /((^|:)(0(:|$)){2,})/g;
          string = this.toNormalizedString();
          bestMatchIndex = 0;
          bestMatchLength = -1;
          while (match = regex.exec(string)) {
            if (match[0].length > bestMatchLength) {
              bestMatchIndex = match.index;
              bestMatchLength = match[0].length;
            }
          }
          if (bestMatchLength < 0) {
            return string;
          }
          return string.substring(0, bestMatchIndex) + "::" + string.substring(bestMatchIndex + bestMatchLength);
        };
        IPv6.prototype.toByteArray = function() {
          var bytes, k, len, part, ref2;
          bytes = [];
          ref2 = this.parts;
          for (k = 0, len = ref2.length; k < len; k++) {
            part = ref2[k];
            bytes.push(part >> 8);
            bytes.push(part & 255);
          }
          return bytes;
        };
        IPv6.prototype.toNormalizedString = function() {
          var addr, part, suffix;
          addr = (function() {
            var k, len, ref2, results;
            ref2 = this.parts;
            results = [];
            for (k = 0, len = ref2.length; k < len; k++) {
              part = ref2[k];
              results.push(part.toString(16));
            }
            return results;
          }).call(this).join(":");
          suffix = "";
          if (this.zoneId) {
            suffix = "%" + this.zoneId;
          }
          return addr + suffix;
        };
        IPv6.prototype.toFixedLengthString = function() {
          var addr, part, suffix;
          addr = (function() {
            var k, len, ref2, results;
            ref2 = this.parts;
            results = [];
            for (k = 0, len = ref2.length; k < len; k++) {
              part = ref2[k];
              results.push(part.toString(16).padStart(4, "0"));
            }
            return results;
          }).call(this).join(":");
          suffix = "";
          if (this.zoneId) {
            suffix = "%" + this.zoneId;
          }
          return addr + suffix;
        };
        IPv6.prototype.match = function(other, cidrRange) {
          var ref2;
          if (cidrRange === void 0) {
            ref2 = other, other = ref2[0], cidrRange = ref2[1];
          }
          if (other.kind() !== "ipv6") {
            throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
          }
          return matchCIDR(this.parts, other.parts, 16, cidrRange);
        };
        IPv6.prototype.SpecialRanges = {
          unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
          linkLocal: [new IPv6([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
          multicast: [new IPv6([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
          loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
          uniqueLocal: [new IPv6([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
          ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
          rfc6145: [new IPv6([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
          rfc6052: [new IPv6([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
          "6to4": [new IPv6([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
          teredo: [new IPv6([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
          reserved: [[new IPv6([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]]
        };
        IPv6.prototype.range = function() {
          return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        IPv6.prototype.isIPv4MappedAddress = function() {
          return this.range() === "ipv4Mapped";
        };
        IPv6.prototype.toIPv4Address = function() {
          var high, low, ref2;
          if (!this.isIPv4MappedAddress()) {
            throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
          }
          ref2 = this.parts.slice(-2), high = ref2[0], low = ref2[1];
          return new ipaddr.IPv4([high >> 8, high & 255, low >> 8, low & 255]);
        };
        IPv6.prototype.prefixLengthFromSubnetMask = function() {
          var cidr, i, k, part, stop, zeros, zerotable;
          zerotable = {
            0: 16,
            32768: 15,
            49152: 14,
            57344: 13,
            61440: 12,
            63488: 11,
            64512: 10,
            65024: 9,
            65280: 8,
            65408: 7,
            65472: 6,
            65504: 5,
            65520: 4,
            65528: 3,
            65532: 2,
            65534: 1,
            65535: 0
          };
          cidr = 0;
          stop = false;
          for (i = k = 7; k >= 0; i = k += -1) {
            part = this.parts[i];
            if (part in zerotable) {
              zeros = zerotable[part];
              if (stop && zeros !== 0) {
                return null;
              }
              if (zeros !== 16) {
                stop = true;
              }
              cidr += zeros;
            } else {
              return null;
            }
          }
          return 128 - cidr;
        };
        return IPv6;
      })();
      ipv6Part = "(?:[0-9a-f]+::?)+";
      zoneIndex = "%[0-9a-z]{1,}";
      ipv6Regexes = {
        zoneIndex: new RegExp(zoneIndex, "i"),
        "native": new RegExp("^(::)?(" + ipv6Part + ")?([0-9a-f]+)?(::)?(" + zoneIndex + ")?$", "i"),
        transitional: new RegExp("^((?:" + ipv6Part + ")|(?:::)(?:" + ipv6Part + ")?)" + (ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part) + ("(" + zoneIndex + ")?$"), "i")
      };
      expandIPv6 = /* @__PURE__ */ __name(function(string, parts) {
        var colonCount, lastColon, part, replacement, replacementCount, zoneId;
        if (string.indexOf("::") !== string.lastIndexOf("::")) {
          return null;
        }
        zoneId = (string.match(ipv6Regexes["zoneIndex"]) || [])[0];
        if (zoneId) {
          zoneId = zoneId.substring(1);
          string = string.replace(/%.+$/, "");
        }
        colonCount = 0;
        lastColon = -1;
        while ((lastColon = string.indexOf(":", lastColon + 1)) >= 0) {
          colonCount++;
        }
        if (string.substr(0, 2) === "::") {
          colonCount--;
        }
        if (string.substr(-2, 2) === "::") {
          colonCount--;
        }
        if (colonCount > parts) {
          return null;
        }
        replacementCount = parts - colonCount;
        replacement = ":";
        while (replacementCount--) {
          replacement += "0:";
        }
        string = string.replace("::", replacement);
        if (string[0] === ":") {
          string = string.slice(1);
        }
        if (string[string.length - 1] === ":") {
          string = string.slice(0, -1);
        }
        parts = (function() {
          var k, len, ref2, results;
          ref2 = string.split(":");
          results = [];
          for (k = 0, len = ref2.length; k < len; k++) {
            part = ref2[k];
            results.push(parseInt(part, 16));
          }
          return results;
        })();
        return {
          parts,
          zoneId
        };
      }, "expandIPv6");
      ipaddr.IPv6.parser = function(string) {
        var addr, k, len, match, octet, octets, zoneId;
        if (ipv6Regexes["native"].test(string)) {
          return expandIPv6(string, 8);
        } else if (match = string.match(ipv6Regexes["transitional"])) {
          zoneId = match[6] || "";
          addr = expandIPv6(match[1].slice(0, -1) + zoneId, 6);
          if (addr.parts) {
            octets = [parseInt(match[2]), parseInt(match[3]), parseInt(match[4]), parseInt(match[5])];
            for (k = 0, len = octets.length; k < len; k++) {
              octet = octets[k];
              if (!(0 <= octet && octet <= 255)) {
                return null;
              }
            }
            addr.parts.push(octets[0] << 8 | octets[1]);
            addr.parts.push(octets[2] << 8 | octets[3]);
            return {
              parts: addr.parts,
              zoneId: addr.zoneId
            };
          }
        }
        return null;
      };
      ipaddr.IPv4.isIPv4 = ipaddr.IPv6.isIPv6 = function(string) {
        return this.parser(string) !== null;
      };
      ipaddr.IPv4.isValid = function(string) {
        var e;
        try {
          new this(this.parser(string));
          return true;
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      ipaddr.IPv4.isValidFourPartDecimal = function(string) {
        if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
          return true;
        } else {
          return false;
        }
      };
      ipaddr.IPv6.isValid = function(string) {
        var addr, e;
        if (typeof string === "string" && string.indexOf(":") === -1) {
          return false;
        }
        try {
          addr = this.parser(string);
          new this(addr.parts, addr.zoneId);
          return true;
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      ipaddr.IPv4.parse = function(string) {
        var parts;
        parts = this.parser(string);
        if (parts === null) {
          throw new Error("ipaddr: string is not formatted like ip address");
        }
        return new this(parts);
      };
      ipaddr.IPv6.parse = function(string) {
        var addr;
        addr = this.parser(string);
        if (addr.parts === null) {
          throw new Error("ipaddr: string is not formatted like ip address");
        }
        return new this(addr.parts, addr.zoneId);
      };
      ipaddr.IPv4.parseCIDR = function(string) {
        var maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
          maskLength = parseInt(match[2]);
          if (maskLength >= 0 && maskLength <= 32) {
            parsed = [this.parse(match[1]), maskLength];
            Object.defineProperty(parsed, "toString", {
              value: /* @__PURE__ */ __name(function() {
                return this.join("/");
              }, "value")
            });
            return parsed;
          }
        }
        throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
      };
      ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
        var filledOctetCount, j, octets;
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 32) {
          throw new Error("ipaddr: invalid IPv4 prefix length");
        }
        octets = [0, 0, 0, 0];
        j = 0;
        filledOctetCount = Math.floor(prefix / 8);
        while (j < filledOctetCount) {
          octets[j] = 255;
          j++;
        }
        if (filledOctetCount < 4) {
          octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
      };
      ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
        var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
          cidr = this.parseCIDR(string);
          ipInterfaceOctets = cidr[0].toByteArray();
          subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          octets = [];
          i = 0;
          while (i < 4) {
            octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
            i++;
          }
          return new this(octets);
        } catch (error1) {
          error = error1;
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      };
      ipaddr.IPv4.networkAddressFromCIDR = function(string) {
        var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
          cidr = this.parseCIDR(string);
          ipInterfaceOctets = cidr[0].toByteArray();
          subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          octets = [];
          i = 0;
          while (i < 4) {
            octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
            i++;
          }
          return new this(octets);
        } catch (error1) {
          error = error1;
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      };
      ipaddr.IPv6.parseCIDR = function(string) {
        var maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
          maskLength = parseInt(match[2]);
          if (maskLength >= 0 && maskLength <= 128) {
            parsed = [this.parse(match[1]), maskLength];
            Object.defineProperty(parsed, "toString", {
              value: /* @__PURE__ */ __name(function() {
                return this.join("/");
              }, "value")
            });
            return parsed;
          }
        }
        throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
      };
      ipaddr.isValid = function(string) {
        return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
      };
      ipaddr.parse = function(string) {
        if (ipaddr.IPv6.isValid(string)) {
          return ipaddr.IPv6.parse(string);
        } else if (ipaddr.IPv4.isValid(string)) {
          return ipaddr.IPv4.parse(string);
        } else {
          throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
        }
      };
      ipaddr.parseCIDR = function(string) {
        var e;
        try {
          return ipaddr.IPv6.parseCIDR(string);
        } catch (error1) {
          e = error1;
          try {
            return ipaddr.IPv4.parseCIDR(string);
          } catch (error12) {
            e = error12;
            throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
          }
        }
      };
      ipaddr.fromByteArray = function(bytes) {
        var length;
        length = bytes.length;
        if (length === 4) {
          return new ipaddr.IPv4(bytes);
        } else if (length === 16) {
          return new ipaddr.IPv6(bytes);
        } else {
          throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
        }
      };
      ipaddr.process = function(string) {
        var addr;
        addr = this.parse(string);
        if (addr.kind() === "ipv6" && addr.isIPv4MappedAddress()) {
          return addr.toIPv4Address();
        } else {
          return addr;
        }
      };
    }).call(exports);
  }
});

// node_modules/proxy-addr/index.js
var require_proxy_addr = __commonJS({
  "node_modules/proxy-addr/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = proxyaddr;
    module.exports.all = alladdrs;
    module.exports.compile = compile;
    var forwarded = require_forwarded();
    var ipaddr = require_ipaddr();
    var DIGIT_REGEXP = /^[0-9]+$/;
    var isip = ipaddr.isValid;
    var parseip = ipaddr.parse;
    var IP_RANGES = {
      linklocal: ["169.254.0.0/16", "fe80::/10"],
      loopback: ["127.0.0.1/8", "::1/128"],
      uniquelocal: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "fc00::/7"]
    };
    function alladdrs(req, trust) {
      var addrs = forwarded(req);
      if (!trust) {
        return addrs;
      }
      if (typeof trust !== "function") {
        trust = compile(trust);
      }
      for (var i = 0; i < addrs.length - 1; i++) {
        if (trust(addrs[i], i)) continue;
        addrs.length = i + 1;
      }
      return addrs;
    }
    __name(alladdrs, "alladdrs");
    function compile(val) {
      if (!val) {
        throw new TypeError("argument is required");
      }
      var trust;
      if (typeof val === "string") {
        trust = [val];
      } else if (Array.isArray(val)) {
        trust = val.slice();
      } else {
        throw new TypeError("unsupported trust argument");
      }
      for (var i = 0; i < trust.length; i++) {
        val = trust[i];
        if (!Object.prototype.hasOwnProperty.call(IP_RANGES, val)) {
          continue;
        }
        val = IP_RANGES[val];
        trust.splice.apply(trust, [i, 1].concat(val));
        i += val.length - 1;
      }
      return compileTrust(compileRangeSubnets(trust));
    }
    __name(compile, "compile");
    function compileRangeSubnets(arr) {
      var rangeSubnets = new Array(arr.length);
      for (var i = 0; i < arr.length; i++) {
        rangeSubnets[i] = parseipNotation(arr[i]);
      }
      return rangeSubnets;
    }
    __name(compileRangeSubnets, "compileRangeSubnets");
    function compileTrust(rangeSubnets) {
      var len = rangeSubnets.length;
      return len === 0 ? trustNone : len === 1 ? trustSingle(rangeSubnets[0]) : trustMulti(rangeSubnets);
    }
    __name(compileTrust, "compileTrust");
    function parseipNotation(note) {
      var pos = note.lastIndexOf("/");
      var str = pos !== -1 ? note.substring(0, pos) : note;
      if (!isip(str)) {
        throw new TypeError("invalid IP address: " + str);
      }
      var ip = parseip(str);
      if (pos === -1 && ip.kind() === "ipv6" && ip.isIPv4MappedAddress()) {
        ip = ip.toIPv4Address();
      }
      var max = ip.kind() === "ipv6" ? 128 : 32;
      var range = pos !== -1 ? note.substring(pos + 1, note.length) : null;
      if (range === null) {
        range = max;
      } else if (DIGIT_REGEXP.test(range)) {
        range = parseInt(range, 10);
      } else if (ip.kind() === "ipv4" && isip(range)) {
        range = parseNetmask(range);
      } else {
        range = null;
      }
      if (range <= 0 || range > max) {
        throw new TypeError("invalid range on address: " + note);
      }
      return [ip, range];
    }
    __name(parseipNotation, "parseipNotation");
    function parseNetmask(netmask) {
      var ip = parseip(netmask);
      var kind = ip.kind();
      return kind === "ipv4" ? ip.prefixLengthFromSubnetMask() : null;
    }
    __name(parseNetmask, "parseNetmask");
    function proxyaddr(req, trust) {
      if (!req) {
        throw new TypeError("req argument is required");
      }
      if (!trust) {
        throw new TypeError("trust argument is required");
      }
      var addrs = alladdrs(req, trust);
      var addr = addrs[addrs.length - 1];
      return addr;
    }
    __name(proxyaddr, "proxyaddr");
    function trustNone() {
      return false;
    }
    __name(trustNone, "trustNone");
    function trustMulti(subnets) {
      return /* @__PURE__ */ __name(function trust(addr) {
        if (!isip(addr)) return false;
        var ip = parseip(addr);
        if (ip.kind() === "ipv6" && ip.isIPv4MappedAddress()) {
          ip = ip.toIPv4Address();
        }
        var ipconv;
        var kind = ip.kind();
        for (var i = 0; i < subnets.length; i++) {
          var subnet = subnets[i];
          var subnetip = subnet[0];
          var subnetkind = subnetip.kind();
          var subnetrange = subnet[1];
          var trusted = ip;
          if (kind !== subnetkind) {
            if (subnetkind === "ipv4" && !ip.isIPv4MappedAddress()) {
              continue;
            }
            if (subnetkind !== "ipv4" && !(subnetrange >= 96 && subnetip.isIPv4MappedAddress())) {
              continue;
            }
            if (!ipconv) {
              ipconv = subnetkind === "ipv4" ? ip.toIPv4Address() : ip.toIPv4MappedAddress();
            }
            trusted = ipconv;
          } else if (kind === "ipv6" && subnetip.isIPv4MappedAddress()) {
            continue;
          }
          if (trusted.match(subnetip, subnetrange)) {
            return true;
          }
        }
        return false;
      }, "trust");
    }
    __name(trustMulti, "trustMulti");
    function trustSingle(subnet) {
      var subnetip = subnet[0];
      var subnetkind = subnetip.kind();
      var subnetisipv4 = subnetkind === "ipv4";
      var subnetrange = subnet[1];
      return /* @__PURE__ */ __name(function trust(addr) {
        if (!isip(addr)) return false;
        var ip = parseip(addr);
        if (ip.kind() === "ipv6" && ip.isIPv4MappedAddress()) {
          ip = ip.toIPv4Address();
        }
        var kind = ip.kind();
        if (kind !== subnetkind) {
          if (subnetisipv4 && !ip.isIPv4MappedAddress()) {
            return false;
          }
          if (!subnetisipv4 && !(subnetrange >= 96 && subnetip.isIPv4MappedAddress())) {
            return false;
          }
          ip = subnetisipv4 ? ip.toIPv4Address() : ip.toIPv4MappedAddress();
        } else if (kind === "ipv6" && subnetip.isIPv4MappedAddress()) {
          return false;
        }
        return ip.match(subnetip, subnetrange);
      }, "trust");
    }
    __name(trustSingle, "trustSingle");
  }
});

// node_modules/express/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/express/lib/utils.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var Buffer2 = require_safe_buffer().Buffer;
    var contentDisposition = require_content_disposition();
    var contentType = require_content_type();
    var deprecate = require_browser()("express");
    var flatten = require_array_flatten();
    var mime = require_send().mime;
    var etag = require_etag();
    var proxyaddr = require_proxy_addr();
    var qs = require_lib();
    var querystring = require_querystring();
    exports.etag = createETagGenerator({ weak: false });
    exports.wetag = createETagGenerator({ weak: true });
    exports.isAbsolute = function(path) {
      if ("/" === path[0]) return true;
      if (":" === path[1] && ("\\" === path[2] || "/" === path[2])) return true;
      if ("\\\\" === path.substring(0, 2)) return true;
    };
    exports.flatten = deprecate.function(
      flatten,
      "utils.flatten: use array-flatten npm module instead"
    );
    exports.normalizeType = function(type) {
      return ~type.indexOf("/") ? acceptParams(type) : { value: mime.lookup(type), params: {} };
    };
    exports.normalizeTypes = function(types) {
      var ret = [];
      for (var i = 0; i < types.length; ++i) {
        ret.push(exports.normalizeType(types[i]));
      }
      return ret;
    };
    exports.contentDisposition = deprecate.function(
      contentDisposition,
      "utils.contentDisposition: use content-disposition npm module instead"
    );
    function acceptParams(str) {
      var parts = str.split(/ *; */);
      var ret = { value: parts[0], quality: 1, params: {} };
      for (var i = 1; i < parts.length; ++i) {
        var pms = parts[i].split(/ *= */);
        if ("q" === pms[0]) {
          ret.quality = parseFloat(pms[1]);
        } else {
          ret.params[pms[0]] = pms[1];
        }
      }
      return ret;
    }
    __name(acceptParams, "acceptParams");
    exports.compileETag = function(val) {
      var fn;
      if (typeof val === "function") {
        return val;
      }
      switch (val) {
        case true:
        case "weak":
          fn = exports.wetag;
          break;
        case false:
          break;
        case "strong":
          fn = exports.etag;
          break;
        default:
          throw new TypeError("unknown value for etag function: " + val);
      }
      return fn;
    };
    exports.compileQueryParser = /* @__PURE__ */ __name(function compileQueryParser(val) {
      var fn;
      if (typeof val === "function") {
        return val;
      }
      switch (val) {
        case true:
        case "simple":
          fn = querystring.parse;
          break;
        case false:
          fn = newObject;
          break;
        case "extended":
          fn = parseExtendedQueryString;
          break;
        default:
          throw new TypeError("unknown value for query parser function: " + val);
      }
      return fn;
    }, "compileQueryParser");
    exports.compileTrust = function(val) {
      if (typeof val === "function") return val;
      if (val === true) {
        return function() {
          return true;
        };
      }
      if (typeof val === "number") {
        return function(a, i) {
          return i < val;
        };
      }
      if (typeof val === "string") {
        val = val.split(",").map(function(v) {
          return v.trim();
        });
      }
      return proxyaddr.compile(val || []);
    };
    exports.setCharset = /* @__PURE__ */ __name(function setCharset(type, charset) {
      if (!type || !charset) {
        return type;
      }
      var parsed = contentType.parse(type);
      parsed.parameters.charset = charset;
      return contentType.format(parsed);
    }, "setCharset");
    function createETagGenerator(options) {
      return /* @__PURE__ */ __name(function generateETag(body, encoding) {
        var buf = !Buffer2.isBuffer(body) ? Buffer2.from(body, encoding) : body;
        return etag(buf, options);
      }, "generateETag");
    }
    __name(createETagGenerator, "createETagGenerator");
    function parseExtendedQueryString(str) {
      return qs.parse(str, {
        allowPrototypes: true,
        arrayLimit: 1e3
      });
    }
    __name(parseExtendedQueryString, "parseExtendedQueryString");
    function newObject() {
      return {};
    }
    __name(newObject, "newObject");
  }
});

// node_modules/express/lib/application.js
var require_application = __commonJS({
  "node_modules/express/lib/application.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var finalhandler = require_finalhandler();
    var Router = require_router();
    var methods = require_methods();
    var middleware = require_init();
    var query = require_query();
    var debug = require_src()("express:application");
    var View = require_view();
    var http = require_http();
    var compileETag = require_utils2().compileETag;
    var compileQueryParser = require_utils2().compileQueryParser;
    var compileTrust = require_utils2().compileTrust;
    var deprecate = require_browser()("express");
    var flatten = require_array_flatten();
    var merge = require_utils_merge();
    var resolve = require_path().resolve;
    var setPrototypeOf = require_setprototypeof();
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var slice = Array.prototype.slice;
    var app2 = exports = module.exports = {};
    var trustProxyDefaultSymbol = "@@symbol:trust_proxy_default";
    app2.init = /* @__PURE__ */ __name(function init() {
      this.cache = {};
      this.engines = {};
      this.settings = {};
      this.defaultConfiguration();
    }, "init");
    app2.defaultConfiguration = /* @__PURE__ */ __name(function defaultConfiguration() {
      var env2 = "development";
      this.enable("x-powered-by");
      this.set("etag", "weak");
      this.set("env", env2);
      this.set("query parser", "extended");
      this.set("subdomain offset", 2);
      this.set("trust proxy", false);
      Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
        configurable: true,
        value: true
      });
      debug("booting in %s mode", env2);
      this.on("mount", /* @__PURE__ */ __name(function onmount(parent) {
        if (this.settings[trustProxyDefaultSymbol] === true && typeof parent.settings["trust proxy fn"] === "function") {
          delete this.settings["trust proxy"];
          delete this.settings["trust proxy fn"];
        }
        setPrototypeOf(this.request, parent.request);
        setPrototypeOf(this.response, parent.response);
        setPrototypeOf(this.engines, parent.engines);
        setPrototypeOf(this.settings, parent.settings);
      }, "onmount"));
      this.locals = /* @__PURE__ */ Object.create(null);
      this.mountpath = "/";
      this.locals.settings = this.settings;
      this.set("view", View);
      this.set("views", resolve("views"));
      this.set("jsonp callback name", "callback");
      if (env2 === "production") {
        this.enable("view cache");
      }
      Object.defineProperty(this, "router", {
        get: /* @__PURE__ */ __name(function() {
          throw new Error("'app.router' is deprecated!\nPlease see the 3.x to 4.x migration guide for details on how to update your app.");
        }, "get")
      });
    }, "defaultConfiguration");
    app2.lazyrouter = /* @__PURE__ */ __name(function lazyrouter() {
      if (!this._router) {
        this._router = new Router({
          caseSensitive: this.enabled("case sensitive routing"),
          strict: this.enabled("strict routing")
        });
        this._router.use(query(this.get("query parser fn")));
        this._router.use(middleware.init(this));
      }
    }, "lazyrouter");
    app2.handle = /* @__PURE__ */ __name(function handle(req, res, callback) {
      var router = this._router;
      var done = callback || finalhandler(req, res, {
        env: this.get("env"),
        onerror: logerror.bind(this)
      });
      if (!router) {
        debug("no routes defined on app");
        done();
        return;
      }
      router.handle(req, res, done);
    }, "handle");
    app2.use = /* @__PURE__ */ __name(function use(fn) {
      var offset = 0;
      var path = "/";
      if (typeof fn !== "function") {
        var arg = fn;
        while (Array.isArray(arg) && arg.length !== 0) {
          arg = arg[0];
        }
        if (typeof arg !== "function") {
          offset = 1;
          path = fn;
        }
      }
      var fns = flatten(slice.call(arguments, offset));
      if (fns.length === 0) {
        throw new TypeError("app.use() requires a middleware function");
      }
      this.lazyrouter();
      var router = this._router;
      fns.forEach(function(fn2) {
        if (!fn2 || !fn2.handle || !fn2.set) {
          return router.use(path, fn2);
        }
        debug(".use app under %s", path);
        fn2.mountpath = path;
        fn2.parent = this;
        router.use(path, /* @__PURE__ */ __name(function mounted_app(req, res, next) {
          var orig = req.app;
          fn2.handle(req, res, function(err) {
            setPrototypeOf(req, orig.request);
            setPrototypeOf(res, orig.response);
            next(err);
          });
        }, "mounted_app"));
        fn2.emit("mount", this);
      }, this);
      return this;
    }, "use");
    app2.route = /* @__PURE__ */ __name(function route(path) {
      this.lazyrouter();
      return this._router.route(path);
    }, "route");
    app2.engine = /* @__PURE__ */ __name(function engine(ext, fn) {
      if (typeof fn !== "function") {
        throw new Error("callback function required");
      }
      var extension = ext[0] !== "." ? "." + ext : ext;
      this.engines[extension] = fn;
      return this;
    }, "engine");
    app2.param = /* @__PURE__ */ __name(function param(name, fn) {
      this.lazyrouter();
      if (Array.isArray(name)) {
        for (var i = 0; i < name.length; i++) {
          this.param(name[i], fn);
        }
        return this;
      }
      this._router.param(name, fn);
      return this;
    }, "param");
    app2.set = /* @__PURE__ */ __name(function set(setting, val) {
      if (arguments.length === 1) {
        var settings = this.settings;
        while (settings && settings !== Object.prototype) {
          if (hasOwnProperty.call(settings, setting)) {
            return settings[setting];
          }
          settings = Object.getPrototypeOf(settings);
        }
        return void 0;
      }
      debug('set "%s" to %o', setting, val);
      this.settings[setting] = val;
      switch (setting) {
        case "etag":
          this.set("etag fn", compileETag(val));
          break;
        case "query parser":
          this.set("query parser fn", compileQueryParser(val));
          break;
        case "trust proxy":
          this.set("trust proxy fn", compileTrust(val));
          Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
            configurable: true,
            value: false
          });
          break;
      }
      return this;
    }, "set");
    app2.path = /* @__PURE__ */ __name(function path() {
      return this.parent ? this.parent.path() + this.mountpath : "";
    }, "path");
    app2.enabled = /* @__PURE__ */ __name(function enabled(setting) {
      return Boolean(this.set(setting));
    }, "enabled");
    app2.disabled = /* @__PURE__ */ __name(function disabled(setting) {
      return !this.set(setting);
    }, "disabled");
    app2.enable = /* @__PURE__ */ __name(function enable(setting) {
      return this.set(setting, true);
    }, "enable");
    app2.disable = /* @__PURE__ */ __name(function disable(setting) {
      return this.set(setting, false);
    }, "disable");
    methods.forEach(function(method) {
      app2[method] = function(path) {
        if (method === "get" && arguments.length === 1) {
          return this.set(path);
        }
        this.lazyrouter();
        var route = this._router.route(path);
        route[method].apply(route, slice.call(arguments, 1));
        return this;
      };
    });
    app2.all = /* @__PURE__ */ __name(function all(path) {
      this.lazyrouter();
      var route = this._router.route(path);
      var args = slice.call(arguments, 1);
      for (var i = 0; i < methods.length; i++) {
        route[methods[i]].apply(route, args);
      }
      return this;
    }, "all");
    app2.del = deprecate.function(app2.delete, "app.del: Use app.delete instead");
    app2.render = /* @__PURE__ */ __name(function render(name, options, callback) {
      var cache = this.cache;
      var done = callback;
      var engines = this.engines;
      var opts = options;
      var renderOptions = {};
      var view;
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      merge(renderOptions, this.locals);
      if (opts._locals) {
        merge(renderOptions, opts._locals);
      }
      merge(renderOptions, opts);
      if (renderOptions.cache == null) {
        renderOptions.cache = this.enabled("view cache");
      }
      if (renderOptions.cache) {
        view = cache[name];
      }
      if (!view) {
        var View2 = this.get("view");
        view = new View2(name, {
          defaultEngine: this.get("view engine"),
          root: this.get("views"),
          engines
        });
        if (!view.path) {
          var dirs = Array.isArray(view.root) && view.root.length > 1 ? 'directories "' + view.root.slice(0, -1).join('", "') + '" or "' + view.root[view.root.length - 1] + '"' : 'directory "' + view.root + '"';
          var err = new Error('Failed to lookup view "' + name + '" in views ' + dirs);
          err.view = view;
          return done(err);
        }
        if (renderOptions.cache) {
          cache[name] = view;
        }
      }
      tryRender(view, renderOptions, done);
    }, "render");
    app2.listen = /* @__PURE__ */ __name(function listen() {
      var server = http.createServer(this);
      return server.listen.apply(server, arguments);
    }, "listen");
    function logerror(err) {
      if (this.get("env") !== "test") console.error(err.stack || err.toString());
    }
    __name(logerror, "logerror");
    function tryRender(view, options, callback) {
      try {
        view.render(options, callback);
      } catch (err) {
        callback(err);
      }
    }
    __name(tryRender, "tryRender");
  }
});

// node_modules/negotiator/lib/charset.js
var require_charset = __commonJS({
  "node_modules/negotiator/lib/charset.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = preferredCharsets;
    module.exports.preferredCharsets = preferredCharsets;
    var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
    function parseAcceptCharset(accept) {
      var accepts = accept.split(",");
      for (var i = 0, j = 0; i < accepts.length; i++) {
        var charset = parseCharset(accepts[i].trim(), i);
        if (charset) {
          accepts[j++] = charset;
        }
      }
      accepts.length = j;
      return accepts;
    }
    __name(parseAcceptCharset, "parseAcceptCharset");
    function parseCharset(str, i) {
      var match = simpleCharsetRegExp.exec(str);
      if (!match) return null;
      var charset = match[1];
      var q = 1;
      if (match[2]) {
        var params = match[2].split(";");
        for (var j = 0; j < params.length; j++) {
          var p = params[j].trim().split("=");
          if (p[0] === "q") {
            q = parseFloat(p[1]);
            break;
          }
        }
      }
      return {
        charset,
        q,
        i
      };
    }
    __name(parseCharset, "parseCharset");
    function getCharsetPriority(charset, accepted, index) {
      var priority = { o: -1, q: 0, s: 0 };
      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(charset, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }
      return priority;
    }
    __name(getCharsetPriority, "getCharsetPriority");
    function specify(charset, spec, index) {
      var s = 0;
      if (spec.charset.toLowerCase() === charset.toLowerCase()) {
        s |= 1;
      } else if (spec.charset !== "*") {
        return null;
      }
      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s
      };
    }
    __name(specify, "specify");
    function preferredCharsets(accept, provided) {
      var accepts = parseAcceptCharset(accept === void 0 ? "*" : accept || "");
      if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
      }
      var priorities = provided.map(/* @__PURE__ */ __name(function getPriority(type, index) {
        return getCharsetPriority(type, accepts, index);
      }, "getPriority"));
      return priorities.filter(isQuality).sort(compareSpecs).map(/* @__PURE__ */ __name(function getCharset(priority) {
        return provided[priorities.indexOf(priority)];
      }, "getCharset"));
    }
    __name(preferredCharsets, "preferredCharsets");
    function compareSpecs(a, b) {
      return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
    }
    __name(compareSpecs, "compareSpecs");
    function getFullCharset(spec) {
      return spec.charset;
    }
    __name(getFullCharset, "getFullCharset");
    function isQuality(spec) {
      return spec.q > 0;
    }
    __name(isQuality, "isQuality");
  }
});

// node_modules/negotiator/lib/encoding.js
var require_encoding = __commonJS({
  "node_modules/negotiator/lib/encoding.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = preferredEncodings;
    module.exports.preferredEncodings = preferredEncodings;
    var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
    function parseAcceptEncoding(accept) {
      var accepts = accept.split(",");
      var hasIdentity = false;
      var minQuality = 1;
      for (var i = 0, j = 0; i < accepts.length; i++) {
        var encoding = parseEncoding(accepts[i].trim(), i);
        if (encoding) {
          accepts[j++] = encoding;
          hasIdentity = hasIdentity || specify("identity", encoding);
          minQuality = Math.min(minQuality, encoding.q || 1);
        }
      }
      if (!hasIdentity) {
        accepts[j++] = {
          encoding: "identity",
          q: minQuality,
          i
        };
      }
      accepts.length = j;
      return accepts;
    }
    __name(parseAcceptEncoding, "parseAcceptEncoding");
    function parseEncoding(str, i) {
      var match = simpleEncodingRegExp.exec(str);
      if (!match) return null;
      var encoding = match[1];
      var q = 1;
      if (match[2]) {
        var params = match[2].split(";");
        for (var j = 0; j < params.length; j++) {
          var p = params[j].trim().split("=");
          if (p[0] === "q") {
            q = parseFloat(p[1]);
            break;
          }
        }
      }
      return {
        encoding,
        q,
        i
      };
    }
    __name(parseEncoding, "parseEncoding");
    function getEncodingPriority(encoding, accepted, index) {
      var priority = { o: -1, q: 0, s: 0 };
      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(encoding, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }
      return priority;
    }
    __name(getEncodingPriority, "getEncodingPriority");
    function specify(encoding, spec, index) {
      var s = 0;
      if (spec.encoding.toLowerCase() === encoding.toLowerCase()) {
        s |= 1;
      } else if (spec.encoding !== "*") {
        return null;
      }
      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s
      };
    }
    __name(specify, "specify");
    function preferredEncodings(accept, provided) {
      var accepts = parseAcceptEncoding(accept || "");
      if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullEncoding);
      }
      var priorities = provided.map(/* @__PURE__ */ __name(function getPriority(type, index) {
        return getEncodingPriority(type, accepts, index);
      }, "getPriority"));
      return priorities.filter(isQuality).sort(compareSpecs).map(/* @__PURE__ */ __name(function getEncoding(priority) {
        return provided[priorities.indexOf(priority)];
      }, "getEncoding"));
    }
    __name(preferredEncodings, "preferredEncodings");
    function compareSpecs(a, b) {
      return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
    }
    __name(compareSpecs, "compareSpecs");
    function getFullEncoding(spec) {
      return spec.encoding;
    }
    __name(getFullEncoding, "getFullEncoding");
    function isQuality(spec) {
      return spec.q > 0;
    }
    __name(isQuality, "isQuality");
  }
});

// node_modules/negotiator/lib/language.js
var require_language = __commonJS({
  "node_modules/negotiator/lib/language.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = preferredLanguages;
    module.exports.preferredLanguages = preferredLanguages;
    var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
    function parseAcceptLanguage(accept) {
      var accepts = accept.split(",");
      for (var i = 0, j = 0; i < accepts.length; i++) {
        var language = parseLanguage(accepts[i].trim(), i);
        if (language) {
          accepts[j++] = language;
        }
      }
      accepts.length = j;
      return accepts;
    }
    __name(parseAcceptLanguage, "parseAcceptLanguage");
    function parseLanguage(str, i) {
      var match = simpleLanguageRegExp.exec(str);
      if (!match) return null;
      var prefix = match[1];
      var suffix = match[2];
      var full = prefix;
      if (suffix) full += "-" + suffix;
      var q = 1;
      if (match[3]) {
        var params = match[3].split(";");
        for (var j = 0; j < params.length; j++) {
          var p = params[j].split("=");
          if (p[0] === "q") q = parseFloat(p[1]);
        }
      }
      return {
        prefix,
        suffix,
        q,
        i,
        full
      };
    }
    __name(parseLanguage, "parseLanguage");
    function getLanguagePriority(language, accepted, index) {
      var priority = { o: -1, q: 0, s: 0 };
      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(language, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }
      return priority;
    }
    __name(getLanguagePriority, "getLanguagePriority");
    function specify(language, spec, index) {
      var p = parseLanguage(language);
      if (!p) return null;
      var s = 0;
      if (spec.full.toLowerCase() === p.full.toLowerCase()) {
        s |= 4;
      } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
        s |= 2;
      } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
        s |= 1;
      } else if (spec.full !== "*") {
        return null;
      }
      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s
      };
    }
    __name(specify, "specify");
    function preferredLanguages(accept, provided) {
      var accepts = parseAcceptLanguage(accept === void 0 ? "*" : accept || "");
      if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
      }
      var priorities = provided.map(/* @__PURE__ */ __name(function getPriority(type, index) {
        return getLanguagePriority(type, accepts, index);
      }, "getPriority"));
      return priorities.filter(isQuality).sort(compareSpecs).map(/* @__PURE__ */ __name(function getLanguage(priority) {
        return provided[priorities.indexOf(priority)];
      }, "getLanguage"));
    }
    __name(preferredLanguages, "preferredLanguages");
    function compareSpecs(a, b) {
      return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
    }
    __name(compareSpecs, "compareSpecs");
    function getFullLanguage(spec) {
      return spec.full;
    }
    __name(getFullLanguage, "getFullLanguage");
    function isQuality(spec) {
      return spec.q > 0;
    }
    __name(isQuality, "isQuality");
  }
});

// node_modules/negotiator/lib/mediaType.js
var require_mediaType = __commonJS({
  "node_modules/negotiator/lib/mediaType.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = preferredMediaTypes;
    module.exports.preferredMediaTypes = preferredMediaTypes;
    var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
    function parseAccept(accept) {
      var accepts = splitMediaTypes(accept);
      for (var i = 0, j = 0; i < accepts.length; i++) {
        var mediaType = parseMediaType(accepts[i].trim(), i);
        if (mediaType) {
          accepts[j++] = mediaType;
        }
      }
      accepts.length = j;
      return accepts;
    }
    __name(parseAccept, "parseAccept");
    function parseMediaType(str, i) {
      var match = simpleMediaTypeRegExp.exec(str);
      if (!match) return null;
      var params = /* @__PURE__ */ Object.create(null);
      var q = 1;
      var subtype = match[2];
      var type = match[1];
      if (match[3]) {
        var kvps = splitParameters(match[3]).map(splitKeyValuePair);
        for (var j = 0; j < kvps.length; j++) {
          var pair = kvps[j];
          var key = pair[0].toLowerCase();
          var val = pair[1];
          var value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.substr(1, val.length - 2) : val;
          if (key === "q") {
            q = parseFloat(value);
            break;
          }
          params[key] = value;
        }
      }
      return {
        type,
        subtype,
        params,
        q,
        i
      };
    }
    __name(parseMediaType, "parseMediaType");
    function getMediaTypePriority(type, accepted, index) {
      var priority = { o: -1, q: 0, s: 0 };
      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(type, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }
      return priority;
    }
    __name(getMediaTypePriority, "getMediaTypePriority");
    function specify(type, spec, index) {
      var p = parseMediaType(type);
      var s = 0;
      if (!p) {
        return null;
      }
      if (spec.type.toLowerCase() == p.type.toLowerCase()) {
        s |= 4;
      } else if (spec.type != "*") {
        return null;
      }
      if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
        s |= 2;
      } else if (spec.subtype != "*") {
        return null;
      }
      var keys = Object.keys(spec.params);
      if (keys.length > 0) {
        if (keys.every(function(k) {
          return spec.params[k] == "*" || (spec.params[k] || "").toLowerCase() == (p.params[k] || "").toLowerCase();
        })) {
          s |= 1;
        } else {
          return null;
        }
      }
      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s
      };
    }
    __name(specify, "specify");
    function preferredMediaTypes(accept, provided) {
      var accepts = parseAccept(accept === void 0 ? "*/*" : accept || "");
      if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
      }
      var priorities = provided.map(/* @__PURE__ */ __name(function getPriority(type, index) {
        return getMediaTypePriority(type, accepts, index);
      }, "getPriority"));
      return priorities.filter(isQuality).sort(compareSpecs).map(/* @__PURE__ */ __name(function getType(priority) {
        return provided[priorities.indexOf(priority)];
      }, "getType"));
    }
    __name(preferredMediaTypes, "preferredMediaTypes");
    function compareSpecs(a, b) {
      return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
    }
    __name(compareSpecs, "compareSpecs");
    function getFullType(spec) {
      return spec.type + "/" + spec.subtype;
    }
    __name(getFullType, "getFullType");
    function isQuality(spec) {
      return spec.q > 0;
    }
    __name(isQuality, "isQuality");
    function quoteCount(string) {
      var count = 0;
      var index = 0;
      while ((index = string.indexOf('"', index)) !== -1) {
        count++;
        index++;
      }
      return count;
    }
    __name(quoteCount, "quoteCount");
    function splitKeyValuePair(str) {
      var index = str.indexOf("=");
      var key;
      var val;
      if (index === -1) {
        key = str;
      } else {
        key = str.substr(0, index);
        val = str.substr(index + 1);
      }
      return [key, val];
    }
    __name(splitKeyValuePair, "splitKeyValuePair");
    function splitMediaTypes(accept) {
      var accepts = accept.split(",");
      for (var i = 1, j = 0; i < accepts.length; i++) {
        if (quoteCount(accepts[j]) % 2 == 0) {
          accepts[++j] = accepts[i];
        } else {
          accepts[j] += "," + accepts[i];
        }
      }
      accepts.length = j + 1;
      return accepts;
    }
    __name(splitMediaTypes, "splitMediaTypes");
    function splitParameters(str) {
      var parameters = str.split(";");
      for (var i = 1, j = 0; i < parameters.length; i++) {
        if (quoteCount(parameters[j]) % 2 == 0) {
          parameters[++j] = parameters[i];
        } else {
          parameters[j] += ";" + parameters[i];
        }
      }
      parameters.length = j + 1;
      for (var i = 0; i < parameters.length; i++) {
        parameters[i] = parameters[i].trim();
      }
      return parameters;
    }
    __name(splitParameters, "splitParameters");
  }
});

// node_modules/negotiator/index.js
var require_negotiator = __commonJS({
  "node_modules/negotiator/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var preferredCharsets = require_charset();
    var preferredEncodings = require_encoding();
    var preferredLanguages = require_language();
    var preferredMediaTypes = require_mediaType();
    module.exports = Negotiator;
    module.exports.Negotiator = Negotiator;
    function Negotiator(request) {
      if (!(this instanceof Negotiator)) {
        return new Negotiator(request);
      }
      this.request = request;
    }
    __name(Negotiator, "Negotiator");
    Negotiator.prototype.charset = /* @__PURE__ */ __name(function charset(available) {
      var set = this.charsets(available);
      return set && set[0];
    }, "charset");
    Negotiator.prototype.charsets = /* @__PURE__ */ __name(function charsets(available) {
      return preferredCharsets(this.request.headers["accept-charset"], available);
    }, "charsets");
    Negotiator.prototype.encoding = /* @__PURE__ */ __name(function encoding(available) {
      var set = this.encodings(available);
      return set && set[0];
    }, "encoding");
    Negotiator.prototype.encodings = /* @__PURE__ */ __name(function encodings(available) {
      return preferredEncodings(this.request.headers["accept-encoding"], available);
    }, "encodings");
    Negotiator.prototype.language = /* @__PURE__ */ __name(function language(available) {
      var set = this.languages(available);
      return set && set[0];
    }, "language");
    Negotiator.prototype.languages = /* @__PURE__ */ __name(function languages(available) {
      return preferredLanguages(this.request.headers["accept-language"], available);
    }, "languages");
    Negotiator.prototype.mediaType = /* @__PURE__ */ __name(function mediaType(available) {
      var set = this.mediaTypes(available);
      return set && set[0];
    }, "mediaType");
    Negotiator.prototype.mediaTypes = /* @__PURE__ */ __name(function mediaTypes(available) {
      return preferredMediaTypes(this.request.headers.accept, available);
    }, "mediaTypes");
    Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
    Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
    Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
    Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
    Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
    Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
    Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
    Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;
  }
});

// node_modules/accepts/index.js
var require_accepts = __commonJS({
  "node_modules/accepts/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var Negotiator = require_negotiator();
    var mime = require_mime_types();
    module.exports = Accepts;
    function Accepts(req) {
      if (!(this instanceof Accepts)) {
        return new Accepts(req);
      }
      this.headers = req.headers;
      this.negotiator = new Negotiator(req);
    }
    __name(Accepts, "Accepts");
    Accepts.prototype.type = Accepts.prototype.types = function(types_) {
      var types = types_;
      if (types && !Array.isArray(types)) {
        types = new Array(arguments.length);
        for (var i = 0; i < types.length; i++) {
          types[i] = arguments[i];
        }
      }
      if (!types || types.length === 0) {
        return this.negotiator.mediaTypes();
      }
      if (!this.headers.accept) {
        return types[0];
      }
      var mimes = types.map(extToMime);
      var accepts = this.negotiator.mediaTypes(mimes.filter(validMime));
      var first = accepts[0];
      return first ? types[mimes.indexOf(first)] : false;
    };
    Accepts.prototype.encoding = Accepts.prototype.encodings = function(encodings_) {
      var encodings = encodings_;
      if (encodings && !Array.isArray(encodings)) {
        encodings = new Array(arguments.length);
        for (var i = 0; i < encodings.length; i++) {
          encodings[i] = arguments[i];
        }
      }
      if (!encodings || encodings.length === 0) {
        return this.negotiator.encodings();
      }
      return this.negotiator.encodings(encodings)[0] || false;
    };
    Accepts.prototype.charset = Accepts.prototype.charsets = function(charsets_) {
      var charsets = charsets_;
      if (charsets && !Array.isArray(charsets)) {
        charsets = new Array(arguments.length);
        for (var i = 0; i < charsets.length; i++) {
          charsets[i] = arguments[i];
        }
      }
      if (!charsets || charsets.length === 0) {
        return this.negotiator.charsets();
      }
      return this.negotiator.charsets(charsets)[0] || false;
    };
    Accepts.prototype.lang = Accepts.prototype.langs = Accepts.prototype.language = Accepts.prototype.languages = function(languages_) {
      var languages = languages_;
      if (languages && !Array.isArray(languages)) {
        languages = new Array(arguments.length);
        for (var i = 0; i < languages.length; i++) {
          languages[i] = arguments[i];
        }
      }
      if (!languages || languages.length === 0) {
        return this.negotiator.languages();
      }
      return this.negotiator.languages(languages)[0] || false;
    };
    function extToMime(type) {
      return type.indexOf("/") === -1 ? mime.lookup(type) : type;
    }
    __name(extToMime, "extToMime");
    function validMime(type) {
      return typeof type === "string";
    }
    __name(validMime, "validMime");
  }
});

// node_modules/express/lib/request.js
var require_request = __commonJS({
  "node_modules/express/lib/request.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var accepts = require_accepts();
    var deprecate = require_browser()("express");
    var isIP = require_net().isIP;
    var typeis = require_type_is();
    var http = require_http();
    var fresh = require_fresh();
    var parseRange = require_range_parser();
    var parse = require_parseurl();
    var proxyaddr = require_proxy_addr();
    var req = Object.create(http.IncomingMessage.prototype);
    module.exports = req;
    req.get = req.header = /* @__PURE__ */ __name(function header(name) {
      if (!name) {
        throw new TypeError("name argument is required to req.get");
      }
      if (typeof name !== "string") {
        throw new TypeError("name must be a string to req.get");
      }
      var lc = name.toLowerCase();
      switch (lc) {
        case "referer":
        case "referrer":
          return this.headers.referrer || this.headers.referer;
        default:
          return this.headers[lc];
      }
    }, "header");
    req.accepts = function() {
      var accept = accepts(this);
      return accept.types.apply(accept, arguments);
    };
    req.acceptsEncodings = function() {
      var accept = accepts(this);
      return accept.encodings.apply(accept, arguments);
    };
    req.acceptsEncoding = deprecate.function(
      req.acceptsEncodings,
      "req.acceptsEncoding: Use acceptsEncodings instead"
    );
    req.acceptsCharsets = function() {
      var accept = accepts(this);
      return accept.charsets.apply(accept, arguments);
    };
    req.acceptsCharset = deprecate.function(
      req.acceptsCharsets,
      "req.acceptsCharset: Use acceptsCharsets instead"
    );
    req.acceptsLanguages = function() {
      var accept = accepts(this);
      return accept.languages.apply(accept, arguments);
    };
    req.acceptsLanguage = deprecate.function(
      req.acceptsLanguages,
      "req.acceptsLanguage: Use acceptsLanguages instead"
    );
    req.range = /* @__PURE__ */ __name(function range(size, options) {
      var range2 = this.get("Range");
      if (!range2) return;
      return parseRange(size, range2, options);
    }, "range");
    req.param = /* @__PURE__ */ __name(function param(name, defaultValue) {
      var params = this.params || {};
      var body = this.body || {};
      var query = this.query || {};
      var args = arguments.length === 1 ? "name" : "name, default";
      deprecate("req.param(" + args + "): Use req.params, req.body, or req.query instead");
      if (null != params[name] && params.hasOwnProperty(name)) return params[name];
      if (null != body[name]) return body[name];
      if (null != query[name]) return query[name];
      return defaultValue;
    }, "param");
    req.is = /* @__PURE__ */ __name(function is(types) {
      var arr = types;
      if (!Array.isArray(types)) {
        arr = new Array(arguments.length);
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arguments[i];
        }
      }
      return typeis(this, arr);
    }, "is");
    defineGetter(req, "protocol", /* @__PURE__ */ __name(function protocol() {
      var proto = this.connection.encrypted ? "https" : "http";
      var trust = this.app.get("trust proxy fn");
      if (!trust(this.connection.remoteAddress, 0)) {
        return proto;
      }
      var header = this.get("X-Forwarded-Proto") || proto;
      var index = header.indexOf(",");
      return index !== -1 ? header.substring(0, index).trim() : header.trim();
    }, "protocol"));
    defineGetter(req, "secure", /* @__PURE__ */ __name(function secure() {
      return this.protocol === "https";
    }, "secure"));
    defineGetter(req, "ip", /* @__PURE__ */ __name(function ip() {
      var trust = this.app.get("trust proxy fn");
      return proxyaddr(this, trust);
    }, "ip"));
    defineGetter(req, "ips", /* @__PURE__ */ __name(function ips() {
      var trust = this.app.get("trust proxy fn");
      var addrs = proxyaddr.all(this, trust);
      addrs.reverse().pop();
      return addrs;
    }, "ips"));
    defineGetter(req, "subdomains", /* @__PURE__ */ __name(function subdomains() {
      var hostname = this.hostname;
      if (!hostname) return [];
      var offset = this.app.get("subdomain offset");
      var subdomains2 = !isIP(hostname) ? hostname.split(".").reverse() : [hostname];
      return subdomains2.slice(offset);
    }, "subdomains"));
    defineGetter(req, "path", /* @__PURE__ */ __name(function path() {
      return parse(this).pathname;
    }, "path"));
    defineGetter(req, "hostname", /* @__PURE__ */ __name(function hostname() {
      var trust = this.app.get("trust proxy fn");
      var host = this.get("X-Forwarded-Host");
      if (!host || !trust(this.connection.remoteAddress, 0)) {
        host = this.get("Host");
      } else if (host.indexOf(",") !== -1) {
        host = host.substring(0, host.indexOf(",")).trimRight();
      }
      if (!host) return;
      var offset = host[0] === "[" ? host.indexOf("]") + 1 : 0;
      var index = host.indexOf(":", offset);
      return index !== -1 ? host.substring(0, index) : host;
    }, "hostname"));
    defineGetter(req, "host", deprecate.function(/* @__PURE__ */ __name(function host() {
      return this.hostname;
    }, "host"), "req.host: Use req.hostname instead"));
    defineGetter(req, "fresh", function() {
      var method = this.method;
      var res = this.res;
      var status = res.statusCode;
      if ("GET" !== method && "HEAD" !== method && "QUERY" !== method) return false;
      if (status >= 200 && status < 300 || 304 === status) {
        return fresh(this.headers, {
          "etag": res.get("ETag"),
          "last-modified": res.get("Last-Modified")
        });
      }
      return false;
    });
    defineGetter(req, "stale", /* @__PURE__ */ __name(function stale() {
      return !this.fresh;
    }, "stale"));
    defineGetter(req, "xhr", /* @__PURE__ */ __name(function xhr() {
      var val = this.get("X-Requested-With") || "";
      return val.toLowerCase() === "xmlhttprequest";
    }, "xhr"));
    function defineGetter(obj, name, getter) {
      Object.defineProperty(obj, name, {
        configurable: true,
        enumerable: true,
        get: getter
      });
    }
    __name(defineGetter, "defineGetter");
  }
});

// node_modules/cookie-signature/index.js
var require_cookie_signature = __commonJS({
  "node_modules/cookie-signature/index.js"(exports) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var crypto = require_crypto();
    exports.sign = function(val, secret) {
      if ("string" !== typeof val) throw new TypeError("Cookie value must be provided as a string.");
      if (null == secret) throw new TypeError("Secret key must be provided.");
      return val + "." + crypto.createHmac("sha256", secret).update(val).digest("base64").replace(/\=+$/, "");
    };
    exports.unsign = function(val, secret) {
      if ("string" !== typeof val) throw new TypeError("Signed cookie string must be provided.");
      if (null == secret) throw new TypeError("Secret key must be provided.");
      var str = val.slice(0, val.lastIndexOf(".")), mac = exports.sign(str, secret);
      return sha1(mac) == sha1(val) ? str : false;
    };
    function sha1(str) {
      return crypto.createHash("sha1").update(str).digest("hex");
    }
    __name(sha1, "sha1");
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    exports.parse = parse;
    exports.serialize = serialize;
    var __toString = Object.prototype.toString;
    var __hasOwnProperty = Object.prototype.hasOwnProperty;
    var cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    var cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    function parse(str, opt) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var len = str.length;
      if (len < 2) return obj;
      var dec = opt && opt.decode || decode;
      var index = 0;
      var eqIdx = 0;
      var endIdx = 0;
      do {
        eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break;
        endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = len;
        } else if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var keyStartIdx = startIndex(str, index, eqIdx);
        var keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        var key = str.slice(keyStartIdx, keyEndIdx);
        if (!__hasOwnProperty.call(obj, key)) {
          var valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          var valEndIdx = endIndex(str, endIdx, valStartIdx);
          if (str.charCodeAt(valStartIdx) === 34 && str.charCodeAt(valEndIdx - 1) === 34) {
            valStartIdx++;
            valEndIdx--;
          }
          var val = str.slice(valStartIdx, valEndIdx);
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    __name(parse, "parse");
    function startIndex(str, index, max) {
      do {
        var code = str.charCodeAt(index);
        if (code !== 32 && code !== 9) return index;
      } while (++index < max);
      return max;
    }
    __name(startIndex, "startIndex");
    function endIndex(str, index, min) {
      while (index > min) {
        var code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9) return index + 1;
      }
      return min;
    }
    __name(endIndex, "endIndex");
    function serialize(name, val, opt) {
      var enc = opt && opt.encode || encodeURIComponent;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (!opt) return str;
      if (null != opt.maxAge) {
        var maxAge = Math.floor(opt.maxAge);
        if (!isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + maxAge;
      }
      if (opt.domain) {
        if (!domainValueRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!pathValueRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    __name(serialize, "serialize");
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    __name(decode, "decode");
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
    __name(isDate, "isDate");
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
    __name(tryDecode, "tryDecode");
  }
});

// node_modules/vary/index.js
var require_vary = __commonJS({
  "node_modules/vary/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = vary;
    module.exports.append = append;
    var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function append(header, field) {
      if (typeof header !== "string") {
        throw new TypeError("header argument is required");
      }
      if (!field) {
        throw new TypeError("field argument is required");
      }
      var fields = !Array.isArray(field) ? parse(String(field)) : field;
      for (var j = 0; j < fields.length; j++) {
        if (!FIELD_NAME_REGEXP.test(fields[j])) {
          throw new TypeError("field argument contains an invalid header name");
        }
      }
      if (header === "*") {
        return header;
      }
      var val = header;
      var vals = parse(header.toLowerCase());
      if (fields.indexOf("*") !== -1 || vals.indexOf("*") !== -1) {
        return "*";
      }
      for (var i = 0; i < fields.length; i++) {
        var fld = fields[i].toLowerCase();
        if (vals.indexOf(fld) === -1) {
          vals.push(fld);
          val = val ? val + ", " + fields[i] : fields[i];
        }
      }
      return val;
    }
    __name(append, "append");
    function parse(header) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i = 0, len = header.length; i < len; i++) {
        switch (header.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 44:
            list.push(header.substring(start, end));
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
      list.push(header.substring(start, end));
      return list;
    }
    __name(parse, "parse");
    function vary(res, field) {
      if (!res || !res.getHeader || !res.setHeader) {
        throw new TypeError("res argument is required");
      }
      var val = res.getHeader("Vary") || "";
      var header = Array.isArray(val) ? val.join(", ") : String(val);
      if (val = append(header, field)) {
        res.setHeader("Vary", val);
      }
    }
    __name(vary, "vary");
  }
});

// node_modules/express/lib/response.js
var require_response = __commonJS({
  "node_modules/express/lib/response.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var Buffer2 = require_safe_buffer().Buffer;
    var contentDisposition = require_content_disposition();
    var createError = require_http_errors();
    var deprecate = require_browser()("express");
    var encodeUrl = require_encodeurl();
    var escapeHtml = require_escape_html();
    var http = require_http();
    var isAbsolute = require_utils2().isAbsolute;
    var onFinished = require_on_finished();
    var path = require_path();
    var statuses = require_statuses();
    var merge = require_utils_merge();
    var sign = require_cookie_signature().sign;
    var normalizeType = require_utils2().normalizeType;
    var normalizeTypes = require_utils2().normalizeTypes;
    var setCharset = require_utils2().setCharset;
    var cookie = require_cookie();
    var send2 = require_send();
    var extname = path.extname;
    var mime = send2.mime;
    var resolve = path.resolve;
    var vary = require_vary();
    var res = Object.create(http.ServerResponse.prototype);
    module.exports = res;
    var charsetRegExp = /;\s*charset\s*=/;
    res.status = /* @__PURE__ */ __name(function status(code) {
      if ((typeof code === "string" || Math.floor(code) !== code) && code > 99 && code < 1e3) {
        deprecate("res.status(" + JSON.stringify(code) + "): use res.status(" + Math.floor(code) + ") instead");
      }
      this.statusCode = code;
      return this;
    }, "status");
    res.links = function(links) {
      var link = this.get("Link") || "";
      if (link) link += ", ";
      return this.set("Link", link + Object.keys(links).map(function(rel) {
        return "<" + links[rel] + '>; rel="' + rel + '"';
      }).join(", "));
    };
    res.send = /* @__PURE__ */ __name(function send3(body) {
      var chunk = body;
      var encoding;
      var req = this.req;
      var type;
      var app2 = this.app;
      if (arguments.length === 2) {
        if (typeof arguments[0] !== "number" && typeof arguments[1] === "number") {
          deprecate("res.send(body, status): Use res.status(status).send(body) instead");
          this.statusCode = arguments[1];
        } else {
          deprecate("res.send(status, body): Use res.status(status).send(body) instead");
          this.statusCode = arguments[0];
          chunk = arguments[1];
        }
      }
      if (typeof chunk === "number" && arguments.length === 1) {
        if (!this.get("Content-Type")) {
          this.type("txt");
        }
        deprecate("res.send(status): Use res.sendStatus(status) instead");
        this.statusCode = chunk;
        chunk = statuses.message[chunk];
      }
      switch (typeof chunk) {
        // string defaulting to html
        case "string":
          if (!this.get("Content-Type")) {
            this.type("html");
          }
          break;
        case "boolean":
        case "number":
        case "object":
          if (chunk === null) {
            chunk = "";
          } else if (Buffer2.isBuffer(chunk)) {
            if (!this.get("Content-Type")) {
              this.type("bin");
            }
          } else {
            return this.json(chunk);
          }
          break;
      }
      if (typeof chunk === "string") {
        encoding = "utf8";
        type = this.get("Content-Type");
        if (typeof type === "string") {
          this.set("Content-Type", setCharset(type, "utf-8"));
        }
      }
      var etagFn = app2.get("etag fn");
      var generateETag = !this.get("ETag") && typeof etagFn === "function";
      var len;
      if (chunk !== void 0) {
        if (Buffer2.isBuffer(chunk)) {
          len = chunk.length;
        } else if (!generateETag && chunk.length < 1e3) {
          len = Buffer2.byteLength(chunk, encoding);
        } else {
          chunk = Buffer2.from(chunk, encoding);
          encoding = void 0;
          len = chunk.length;
        }
        this.set("Content-Length", len);
      }
      var etag;
      if (generateETag && len !== void 0) {
        if (etag = etagFn(chunk, encoding)) {
          this.set("ETag", etag);
        }
      }
      if (req.fresh) this.statusCode = 304;
      if (204 === this.statusCode || 304 === this.statusCode) {
        this.removeHeader("Content-Type");
        this.removeHeader("Content-Length");
        this.removeHeader("Transfer-Encoding");
        chunk = "";
      }
      if (this.statusCode === 205) {
        this.set("Content-Length", "0");
        this.removeHeader("Transfer-Encoding");
        chunk = "";
      }
      if (req.method === "HEAD") {
        this.end();
      } else {
        this.end(chunk, encoding);
      }
      return this;
    }, "send");
    res.json = /* @__PURE__ */ __name(function json(obj) {
      var val = obj;
      if (arguments.length === 2) {
        if (typeof arguments[1] === "number") {
          deprecate("res.json(obj, status): Use res.status(status).json(obj) instead");
          this.statusCode = arguments[1];
        } else {
          deprecate("res.json(status, obj): Use res.status(status).json(obj) instead");
          this.statusCode = arguments[0];
          val = arguments[1];
        }
      }
      var app2 = this.app;
      var escape2 = app2.get("json escape");
      var replacer = app2.get("json replacer");
      var spaces = app2.get("json spaces");
      var body = stringify(val, replacer, spaces, escape2);
      if (!this.get("Content-Type")) {
        this.set("Content-Type", "application/json");
      }
      return this.send(body);
    }, "json");
    res.jsonp = /* @__PURE__ */ __name(function jsonp(obj) {
      var val = obj;
      if (arguments.length === 2) {
        if (typeof arguments[1] === "number") {
          deprecate("res.jsonp(obj, status): Use res.status(status).jsonp(obj) instead");
          this.statusCode = arguments[1];
        } else {
          deprecate("res.jsonp(status, obj): Use res.status(status).jsonp(obj) instead");
          this.statusCode = arguments[0];
          val = arguments[1];
        }
      }
      var app2 = this.app;
      var escape2 = app2.get("json escape");
      var replacer = app2.get("json replacer");
      var spaces = app2.get("json spaces");
      var body = stringify(val, replacer, spaces, escape2);
      var callback = this.req.query[app2.get("jsonp callback name")];
      if (!this.get("Content-Type")) {
        this.set("X-Content-Type-Options", "nosniff");
        this.set("Content-Type", "application/json");
      }
      if (Array.isArray(callback)) {
        callback = callback[0];
      }
      if (typeof callback === "string" && callback.length !== 0) {
        this.set("X-Content-Type-Options", "nosniff");
        this.set("Content-Type", "text/javascript");
        callback = callback.replace(/[^\[\]\w$.]/g, "");
        if (body === void 0) {
          body = "";
        } else if (typeof body === "string") {
          body = body.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        body = "/**/ typeof " + callback + " === 'function' && " + callback + "(" + body + ");";
      }
      return this.send(body);
    }, "jsonp");
    res.sendStatus = /* @__PURE__ */ __name(function sendStatus(statusCode) {
      var body = statuses.message[statusCode] || String(statusCode);
      this.statusCode = statusCode;
      this.type("txt");
      return this.send(body);
    }, "sendStatus");
    res.sendFile = /* @__PURE__ */ __name(function sendFile(path2, options, callback) {
      var done = callback;
      var req = this.req;
      var res2 = this;
      var next = req.next;
      var opts = options || {};
      if (!path2) {
        throw new TypeError("path argument is required to res.sendFile");
      }
      if (typeof path2 !== "string") {
        throw new TypeError("path must be a string to res.sendFile");
      }
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      if (!opts.root && !isAbsolute(path2)) {
        throw new TypeError("path must be absolute or specify root to res.sendFile");
      }
      var pathname = encodeURI(path2);
      var file = send2(req, pathname, opts);
      sendfile(res2, file, opts, function(err) {
        if (done) return done(err);
        if (err && err.code === "EISDIR") return next();
        if (err && err.code !== "ECONNABORTED" && err.syscall !== "write") {
          next(err);
        }
      });
    }, "sendFile");
    res.sendfile = function(path2, options, callback) {
      var done = callback;
      var req = this.req;
      var res2 = this;
      var next = req.next;
      var opts = options || {};
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      var file = send2(req, path2, opts);
      sendfile(res2, file, opts, function(err) {
        if (done) return done(err);
        if (err && err.code === "EISDIR") return next();
        if (err && err.code !== "ECONNABORTED" && err.syscall !== "write") {
          next(err);
        }
      });
    };
    res.sendfile = deprecate.function(
      res.sendfile,
      "res.sendfile: Use res.sendFile instead"
    );
    res.download = /* @__PURE__ */ __name(function download(path2, filename, options, callback) {
      var done = callback;
      var name = filename;
      var opts = options || null;
      if (typeof filename === "function") {
        done = filename;
        name = null;
        opts = null;
      } else if (typeof options === "function") {
        done = options;
        opts = null;
      }
      if (typeof filename === "object" && (typeof options === "function" || options === void 0)) {
        name = null;
        opts = filename;
      }
      var headers = {
        "Content-Disposition": contentDisposition(name || path2)
      };
      if (opts && opts.headers) {
        var keys = Object.keys(opts.headers);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (key.toLowerCase() !== "content-disposition") {
            headers[key] = opts.headers[key];
          }
        }
      }
      opts = Object.create(opts);
      opts.headers = headers;
      var fullPath = !opts.root ? resolve(path2) : path2;
      return this.sendFile(fullPath, opts, done);
    }, "download");
    res.contentType = res.type = /* @__PURE__ */ __name(function contentType(type) {
      var ct = type.indexOf("/") === -1 ? mime.lookup(type) : type;
      return this.set("Content-Type", ct);
    }, "contentType");
    res.format = function(obj) {
      var req = this.req;
      var next = req.next;
      var keys = Object.keys(obj).filter(function(v) {
        return v !== "default";
      });
      var key = keys.length > 0 ? req.accepts(keys) : false;
      this.vary("Accept");
      if (key) {
        this.set("Content-Type", normalizeType(key).value);
        obj[key](req, this, next);
      } else if (obj.default) {
        obj.default(req, this, next);
      } else {
        next(createError(406, {
          types: normalizeTypes(keys).map(function(o) {
            return o.value;
          })
        }));
      }
      return this;
    };
    res.attachment = /* @__PURE__ */ __name(function attachment(filename) {
      if (filename) {
        this.type(extname(filename));
      }
      this.set("Content-Disposition", contentDisposition(filename));
      return this;
    }, "attachment");
    res.append = /* @__PURE__ */ __name(function append(field, val) {
      var prev = this.get(field);
      var value = val;
      if (prev) {
        value = Array.isArray(prev) ? prev.concat(val) : Array.isArray(val) ? [prev].concat(val) : [prev, val];
      }
      return this.set(field, value);
    }, "append");
    res.set = res.header = /* @__PURE__ */ __name(function header(field, val) {
      if (arguments.length === 2) {
        var value = Array.isArray(val) ? val.map(String) : String(val);
        if (field.toLowerCase() === "content-type") {
          if (Array.isArray(value)) {
            throw new TypeError("Content-Type cannot be set to an Array");
          }
          if (!charsetRegExp.test(value)) {
            var charset = mime.charsets.lookup(value.split(";")[0]);
            if (charset) value += "; charset=" + charset.toLowerCase();
          }
        }
        this.setHeader(field, value);
      } else {
        for (var key in field) {
          this.set(key, field[key]);
        }
      }
      return this;
    }, "header");
    res.get = function(field) {
      return this.getHeader(field);
    };
    res.clearCookie = /* @__PURE__ */ __name(function clearCookie(name, options) {
      if (options) {
        if (options.maxAge) {
          deprecate('res.clearCookie: Passing "options.maxAge" is deprecated. In v5.0.0 of Express, this option will be ignored, as res.clearCookie will automatically set cookies to expire immediately. Please update your code to omit this option.');
        }
        if (options.expires) {
          deprecate('res.clearCookie: Passing "options.expires" is deprecated. In v5.0.0 of Express, this option will be ignored, as res.clearCookie will automatically set cookies to expire immediately. Please update your code to omit this option.');
        }
      }
      var opts = merge({ expires: /* @__PURE__ */ new Date(1), path: "/" }, options);
      return this.cookie(name, "", opts);
    }, "clearCookie");
    res.cookie = function(name, value, options) {
      var opts = merge({}, options);
      var secret = this.req.secret;
      var signed = opts.signed;
      if (signed && !secret) {
        throw new Error('cookieParser("secret") required for signed cookies');
      }
      var val = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
      if (signed) {
        val = "s:" + sign(val, secret);
      }
      if (opts.maxAge != null) {
        var maxAge = opts.maxAge - 0;
        if (!isNaN(maxAge)) {
          opts.expires = new Date(Date.now() + maxAge);
          opts.maxAge = Math.floor(maxAge / 1e3);
        }
      }
      if (opts.path == null) {
        opts.path = "/";
      }
      this.append("Set-Cookie", cookie.serialize(name, String(val), opts));
      return this;
    };
    res.location = /* @__PURE__ */ __name(function location(url) {
      var loc;
      if (url === "back") {
        deprecate('res.location("back"): use res.location(req.get("Referrer") || "/") and refer to https://dub.sh/security-redirect for best practices');
        loc = this.req.get("Referrer") || "/";
      } else {
        loc = String(url);
      }
      return this.set("Location", encodeUrl(loc));
    }, "location");
    res.redirect = /* @__PURE__ */ __name(function redirect(url) {
      var address = url;
      var body;
      var status = 302;
      if (arguments.length === 2) {
        if (typeof arguments[0] === "number") {
          status = arguments[0];
          address = arguments[1];
        } else {
          deprecate("res.redirect(url, status): Use res.redirect(status, url) instead");
          status = arguments[1];
        }
      }
      address = this.location(address).get("Location");
      this.format({
        text: /* @__PURE__ */ __name(function() {
          body = statuses.message[status] + ". Redirecting to " + address;
        }, "text"),
        html: /* @__PURE__ */ __name(function() {
          var u = escapeHtml(address);
          body = "<p>" + statuses.message[status] + ". Redirecting to " + u + "</p>";
        }, "html"),
        default: /* @__PURE__ */ __name(function() {
          body = "";
        }, "default")
      });
      this.statusCode = status;
      this.set("Content-Length", Buffer2.byteLength(body));
      if (this.req.method === "HEAD") {
        this.end();
      } else {
        this.end(body);
      }
    }, "redirect");
    res.vary = function(field) {
      if (!field || Array.isArray(field) && !field.length) {
        deprecate("res.vary(): Provide a field name");
        return this;
      }
      vary(this, field);
      return this;
    };
    res.render = /* @__PURE__ */ __name(function render(view, options, callback) {
      var app2 = this.req.app;
      var done = callback;
      var opts = options || {};
      var req = this.req;
      var self2 = this;
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      opts._locals = self2.locals;
      done = done || function(err, str) {
        if (err) return req.next(err);
        self2.send(str);
      };
      app2.render(view, opts, done);
    }, "render");
    function sendfile(res2, file, options, callback) {
      var done = false;
      var streaming;
      function onaborted() {
        if (done) return;
        done = true;
        var err = new Error("Request aborted");
        err.code = "ECONNABORTED";
        callback(err);
      }
      __name(onaborted, "onaborted");
      function ondirectory() {
        if (done) return;
        done = true;
        var err = new Error("EISDIR, read");
        err.code = "EISDIR";
        callback(err);
      }
      __name(ondirectory, "ondirectory");
      function onerror(err) {
        if (done) return;
        done = true;
        callback(err);
      }
      __name(onerror, "onerror");
      function onend() {
        if (done) return;
        done = true;
        callback();
      }
      __name(onend, "onend");
      function onfile() {
        streaming = false;
      }
      __name(onfile, "onfile");
      function onfinish(err) {
        if (err && err.code === "ECONNRESET") return onaborted();
        if (err) return onerror(err);
        if (done) return;
        setImmediate(function() {
          if (streaming !== false && !done) {
            onaborted();
            return;
          }
          if (done) return;
          done = true;
          callback();
        });
      }
      __name(onfinish, "onfinish");
      function onstream() {
        streaming = true;
      }
      __name(onstream, "onstream");
      file.on("directory", ondirectory);
      file.on("end", onend);
      file.on("error", onerror);
      file.on("file", onfile);
      file.on("stream", onstream);
      onFinished(res2, onfinish);
      if (options.headers) {
        file.on("headers", /* @__PURE__ */ __name(function headers(res3) {
          var obj = options.headers;
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            res3.setHeader(k, obj[k]);
          }
        }, "headers"));
      }
      file.pipe(res2);
    }
    __name(sendfile, "sendfile");
    function stringify(value, replacer, spaces, escape2) {
      var json = replacer || spaces ? JSON.stringify(value, replacer, spaces) : JSON.stringify(value);
      if (escape2 && typeof json === "string") {
        json = json.replace(/[<>&]/g, function(c) {
          switch (c.charCodeAt(0)) {
            case 60:
              return "\\u003c";
            case 62:
              return "\\u003e";
            case 38:
              return "\\u0026";
            /* istanbul ignore next: unreachable default */
            default:
              return c;
          }
        });
      }
      return json;
    }
    __name(stringify, "stringify");
  }
});

// node_modules/serve-static/index.js
var require_serve_static = __commonJS({
  "node_modules/serve-static/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var encodeUrl = require_encodeurl();
    var escapeHtml = require_escape_html();
    var parseUrl = require_parseurl();
    var resolve = require_path().resolve;
    var send2 = require_send();
    var url = require_url();
    module.exports = serveStatic;
    module.exports.mime = send2.mime;
    function serveStatic(root, options) {
      if (!root) {
        throw new TypeError("root path required");
      }
      if (typeof root !== "string") {
        throw new TypeError("root path must be a string");
      }
      var opts = Object.create(options || null);
      var fallthrough = opts.fallthrough !== false;
      var redirect = opts.redirect !== false;
      var setHeaders = opts.setHeaders;
      if (setHeaders && typeof setHeaders !== "function") {
        throw new TypeError("option setHeaders must be function");
      }
      opts.maxage = opts.maxage || opts.maxAge || 0;
      opts.root = resolve(root);
      var onDirectory = redirect ? createRedirectDirectoryListener() : createNotFoundDirectoryListener();
      return /* @__PURE__ */ __name(function serveStatic2(req, res, next) {
        if (req.method !== "GET" && req.method !== "HEAD") {
          if (fallthrough) {
            return next();
          }
          res.statusCode = 405;
          res.setHeader("Allow", "GET, HEAD");
          res.setHeader("Content-Length", "0");
          res.end();
          return;
        }
        var forwardError = !fallthrough;
        var originalUrl = parseUrl.original(req);
        var path = parseUrl(req).pathname;
        if (path === "/" && originalUrl.pathname.substr(-1) !== "/") {
          path = "";
        }
        var stream = send2(req, path, opts);
        stream.on("directory", onDirectory);
        if (setHeaders) {
          stream.on("headers", setHeaders);
        }
        if (fallthrough) {
          stream.on("file", /* @__PURE__ */ __name(function onFile() {
            forwardError = true;
          }, "onFile"));
        }
        stream.on("error", /* @__PURE__ */ __name(function error(err) {
          if (forwardError || !(err.statusCode < 500)) {
            next(err);
            return;
          }
          next();
        }, "error"));
        stream.pipe(res);
      }, "serveStatic");
    }
    __name(serveStatic, "serveStatic");
    function collapseLeadingSlashes(str) {
      for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== 47) {
          break;
        }
      }
      return i > 1 ? "/" + str.substr(i) : str;
    }
    __name(collapseLeadingSlashes, "collapseLeadingSlashes");
    function createHtmlDocument(title2, body) {
      return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>' + title2 + "</title>\n</head>\n<body>\n<pre>" + body + "</pre>\n</body>\n</html>\n";
    }
    __name(createHtmlDocument, "createHtmlDocument");
    function createNotFoundDirectoryListener() {
      return /* @__PURE__ */ __name(function notFound() {
        this.error(404);
      }, "notFound");
    }
    __name(createNotFoundDirectoryListener, "createNotFoundDirectoryListener");
    function createRedirectDirectoryListener() {
      return /* @__PURE__ */ __name(function redirect(res) {
        if (this.hasTrailingSlash()) {
          this.error(404);
          return;
        }
        var originalUrl = parseUrl.original(this.req);
        originalUrl.path = null;
        originalUrl.pathname = collapseLeadingSlashes(originalUrl.pathname + "/");
        var loc = encodeUrl(url.format(originalUrl));
        var doc = createHtmlDocument("Redirecting", "Redirecting to " + escapeHtml(loc));
        res.statusCode = 301;
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        res.setHeader("Content-Length", Buffer.byteLength(doc));
        res.setHeader("Content-Security-Policy", "default-src 'none'");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Location", loc);
        res.end(doc);
      }, "redirect");
    }
    __name(createRedirectDirectoryListener, "createRedirectDirectoryListener");
  }
});

// node_modules/express/lib/express.js
var require_express = __commonJS({
  "node_modules/express/lib/express.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bodyParser = require_body_parser();
    var EventEmitter2 = require_events().EventEmitter;
    var mixin = require_merge_descriptors();
    var proto = require_application();
    var Route = require_route();
    var Router = require_router();
    var req = require_request();
    var res = require_response();
    exports = module.exports = createApplication;
    function createApplication() {
      var app2 = /* @__PURE__ */ __name(function(req2, res2, next) {
        app2.handle(req2, res2, next);
      }, "app");
      mixin(app2, EventEmitter2.prototype, false);
      mixin(app2, proto, false);
      app2.request = Object.create(req, {
        app: { configurable: true, enumerable: true, writable: true, value: app2 }
      });
      app2.response = Object.create(res, {
        app: { configurable: true, enumerable: true, writable: true, value: app2 }
      });
      app2.init();
      return app2;
    }
    __name(createApplication, "createApplication");
    exports.application = proto;
    exports.request = req;
    exports.response = res;
    exports.Route = Route;
    exports.Router = Router;
    exports.json = bodyParser.json;
    exports.query = require_query();
    exports.raw = bodyParser.raw;
    exports.static = require_serve_static();
    exports.text = bodyParser.text;
    exports.urlencoded = bodyParser.urlencoded;
    var removedMiddlewares = [
      "bodyParser",
      "compress",
      "cookieSession",
      "session",
      "logger",
      "cookieParser",
      "favicon",
      "responseTime",
      "errorHandler",
      "timeout",
      "methodOverride",
      "vhost",
      "csrf",
      "directory",
      "limit",
      "multipart",
      "staticCache"
    ];
    removedMiddlewares.forEach(function(name) {
      Object.defineProperty(exports, name, {
        get: /* @__PURE__ */ __name(function() {
          throw new Error("Most middleware (like " + name + ") is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.");
        }, "get"),
        configurable: true
      });
    });
  }
});

// node_modules/express/index.js
var require_express2 = __commonJS({
  "node_modules/express/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = require_express();
  }
});

// node-built-in-modules:node:buffer
import libDefault14 from "node:buffer";
var require_node_buffer = __commonJS({
  "node-built-in-modules:node:buffer"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault14;
  }
});

// node-built-in-modules:node:crypto
import libDefault15 from "node:crypto";
var require_node_crypto = __commonJS({
  "node-built-in-modules:node:crypto"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault15;
  }
});

// node-built-in-modules:node:net
import libDefault16 from "node:net";
var require_node_net = __commonJS({
  "node-built-in-modules:node:net"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault16;
  }
});

// node_modules/express-rate-limit/dist/index.cjs
var require_dist = __commonJS({
  "node_modules/express-rate-limit/dist/index.cjs"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      MemoryStore: /* @__PURE__ */ __name(() => MemoryStore, "MemoryStore"),
      default: /* @__PURE__ */ __name(() => lib_default, "default"),
      rateLimit: /* @__PURE__ */ __name(() => lib_default, "rateLimit")
    });
    module.exports = __toCommonJS(index_exports);
    var import_node_buffer2 = require_node_buffer();
    var import_node_crypto2 = require_node_crypto();
    var SUPPORTED_DRAFT_VERSIONS = [
      "draft-6",
      "draft-7",
      "draft-8"
    ];
    var getResetSeconds = /* @__PURE__ */ __name((resetTime, windowMs) => {
      let resetSeconds = void 0;
      if (resetTime) {
        const deltaSeconds = Math.ceil((resetTime.getTime() - Date.now()) / 1e3);
        resetSeconds = Math.max(0, deltaSeconds);
      } else if (windowMs) {
        resetSeconds = Math.ceil(windowMs / 1e3);
      }
      return resetSeconds;
    }, "getResetSeconds");
    var getPartitionKey = /* @__PURE__ */ __name((key) => {
      const hash = (0, import_node_crypto2.createHash)("sha256");
      hash.update(key);
      const partitionKey = hash.digest("hex").slice(0, 12);
      return import_node_buffer2.Buffer.from(partitionKey).toString("base64");
    }, "getPartitionKey");
    var setLegacyHeaders = /* @__PURE__ */ __name((response, info) => {
      if (response.headersSent) return;
      response.setHeader("X-RateLimit-Limit", info.limit.toString());
      response.setHeader("X-RateLimit-Remaining", info.remaining.toString());
      if (info.resetTime instanceof Date) {
        response.setHeader("Date", (/* @__PURE__ */ new Date()).toUTCString());
        response.setHeader(
          "X-RateLimit-Reset",
          Math.ceil(info.resetTime.getTime() / 1e3).toString()
        );
      }
    }, "setLegacyHeaders");
    var setDraft6Headers = /* @__PURE__ */ __name((response, info, windowMs) => {
      if (response.headersSent) return;
      const windowSeconds = Math.ceil(windowMs / 1e3);
      const resetSeconds = getResetSeconds(info.resetTime);
      response.setHeader("RateLimit-Policy", `${info.limit};w=${windowSeconds}`);
      response.setHeader("RateLimit-Limit", info.limit.toString());
      response.setHeader("RateLimit-Remaining", info.remaining.toString());
      if (resetSeconds)
        response.setHeader("RateLimit-Reset", resetSeconds.toString());
    }, "setDraft6Headers");
    var setDraft7Headers = /* @__PURE__ */ __name((response, info, windowMs) => {
      if (response.headersSent) return;
      const windowSeconds = Math.ceil(windowMs / 1e3);
      const resetSeconds = getResetSeconds(info.resetTime, windowMs);
      response.setHeader("RateLimit-Policy", `${info.limit};w=${windowSeconds}`);
      response.setHeader(
        "RateLimit",
        `limit=${info.limit}, remaining=${info.remaining}, reset=${resetSeconds}`
      );
    }, "setDraft7Headers");
    var setDraft8Headers = /* @__PURE__ */ __name((response, info, windowMs, name, key) => {
      if (response.headersSent) return;
      const windowSeconds = Math.ceil(windowMs / 1e3);
      const resetSeconds = getResetSeconds(info.resetTime, windowMs);
      const partitionKey = getPartitionKey(key);
      const policy = `q=${info.limit}; w=${windowSeconds}; pk=:${partitionKey}:`;
      const header = `r=${info.remaining}; t=${resetSeconds}`;
      response.append("RateLimit-Policy", `"${name}"; ${policy}`);
      response.append("RateLimit", `"${name}"; ${header}`);
    }, "setDraft8Headers");
    var setRetryAfterHeader = /* @__PURE__ */ __name((response, info, windowMs) => {
      if (response.headersSent) return;
      const resetSeconds = getResetSeconds(info.resetTime, windowMs);
      response.setHeader("Retry-After", resetSeconds.toString());
    }, "setRetryAfterHeader");
    var import_node_net2 = require_node_net();
    var ValidationError = class extends Error {
      static {
        __name(this, "ValidationError");
      }
      /**
       * The code must be a string, in snake case and all capital, that starts with
       * the substring `ERR_ERL_`.
       *
       * The message must be a string, starting with an uppercase character,
       * describing the issue in detail.
       */
      constructor(code, message) {
        const url = `https://express-rate-limit.github.io/${code}/`;
        super(`${message} See ${url} for more information.`);
        this.name = this.constructor.name;
        this.code = code;
        this.help = url;
      }
    };
    var ChangeWarning = class extends ValidationError {
      static {
        __name(this, "ChangeWarning");
      }
    };
    var usedStores = /* @__PURE__ */ new Set();
    var singleCountKeys = /* @__PURE__ */ new WeakMap();
    var validations = {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      enabled: {
        default: true
      },
      // Should be EnabledValidations type, but that's a circular reference
      disable() {
        for (const k of Object.keys(this.enabled)) this.enabled[k] = false;
      },
      /**
       * Checks whether the IP address is valid, and that it does not have a port
       * number in it.
       *
       * See https://github.com/express-rate-limit/express-rate-limit/wiki/Error-Codes#err_erl_invalid_ip_address.
       *
       * @param ip {string | undefined} - The IP address provided by Express as request.ip.
       *
       * @returns {void}
       */
      ip(ip) {
        if (ip === void 0) {
          throw new ValidationError(
            "ERR_ERL_UNDEFINED_IP_ADDRESS",
            `An undefined 'request.ip' was detected. This might indicate a misconfiguration or the connection being destroyed prematurely.`
          );
        }
        if (!(0, import_node_net2.isIP)(ip)) {
          throw new ValidationError(
            "ERR_ERL_INVALID_IP_ADDRESS",
            `An invalid 'request.ip' (${ip}) was detected. Consider passing a custom 'keyGenerator' function to the rate limiter.`
          );
        }
      },
      /**
       * Makes sure the trust proxy setting is not set to `true`.
       *
       * See https://github.com/express-rate-limit/express-rate-limit/wiki/Error-Codes#err_erl_permissive_trust_proxy.
       *
       * @param request {Request} - The Express request object.
       *
       * @returns {void}
       */
      trustProxy(request) {
        if (request.app.get("trust proxy") === true) {
          throw new ValidationError(
            "ERR_ERL_PERMISSIVE_TRUST_PROXY",
            `The Express 'trust proxy' setting is true, which allows anyone to trivially bypass IP-based rate limiting.`
          );
        }
      },
      /**
       * Makes sure the trust proxy setting is set in case the `X-Forwarded-For`
       * header is present.
       *
       * See https://github.com/express-rate-limit/express-rate-limit/wiki/Error-Codes#err_erl_unset_trust_proxy.
       *
       * @param request {Request} - The Express request object.
       *
       * @returns {void}
       */
      xForwardedForHeader(request) {
        if (request.headers["x-forwarded-for"] && request.app.get("trust proxy") === false) {
          throw new ValidationError(
            "ERR_ERL_UNEXPECTED_X_FORWARDED_FOR",
            `The 'X-Forwarded-For' header is set but the Express 'trust proxy' setting is false (default). This could indicate a misconfiguration which would prevent express-rate-limit from accurately identifying users.`
          );
        }
      },
      /**
       * Ensures totalHits value from store is a positive integer.
       *
       * @param hits {any} - The `totalHits` returned by the store.
       */
      positiveHits(hits) {
        if (typeof hits !== "number" || hits < 1 || hits !== Math.round(hits)) {
          throw new ValidationError(
            "ERR_ERL_INVALID_HITS",
            `The totalHits value returned from the store must be a positive integer, got ${hits}`
          );
        }
      },
      /**
       * Ensures a single store instance is not used with multiple express-rate-limit instances
       */
      unsharedStore(store) {
        if (usedStores.has(store)) {
          const maybeUniquePrefix = store?.localKeys ? "" : " (with a unique prefix)";
          throw new ValidationError(
            "ERR_ERL_STORE_REUSE",
            `A Store instance must not be shared across multiple rate limiters. Create a new instance of ${store.constructor.name}${maybeUniquePrefix} for each limiter instead.`
          );
        }
        usedStores.add(store);
      },
      /**
       * Ensures a given key is incremented only once per request.
       *
       * @param request {Request} - The Express request object.
       * @param store {Store} - The store class.
       * @param key {string} - The key used to store the client's hit count.
       *
       * @returns {void}
       */
      singleCount(request, store, key) {
        let storeKeys = singleCountKeys.get(request);
        if (!storeKeys) {
          storeKeys = /* @__PURE__ */ new Map();
          singleCountKeys.set(request, storeKeys);
        }
        const storeKey = store.localKeys ? store : store.constructor.name;
        let keys = storeKeys.get(storeKey);
        if (!keys) {
          keys = [];
          storeKeys.set(storeKey, keys);
        }
        const prefixedKey = `${store.prefix ?? ""}${key}`;
        if (keys.includes(prefixedKey)) {
          throw new ValidationError(
            "ERR_ERL_DOUBLE_COUNT",
            `The hit count for ${key} was incremented more than once for a single request.`
          );
        }
        keys.push(prefixedKey);
      },
      /**
       * Warns the user that the behaviour for `max: 0` / `limit: 0` is
       * changing in the next major release.
       *
       * @param limit {number} - The maximum number of hits per client.
       *
       * @returns {void}
       */
      limit(limit) {
        if (limit === 0) {
          throw new ChangeWarning(
            "WRN_ERL_MAX_ZERO",
            `Setting limit or max to 0 disables rate limiting in express-rate-limit v6 and older, but will cause all requests to be blocked in v7`
          );
        }
      },
      /**
       * Warns the user that the `draft_polli_ratelimit_headers` option is deprecated
       * and will be removed in the next major release.
       *
       * @param draft_polli_ratelimit_headers {any | undefined} - The now-deprecated setting that was used to enable standard headers.
       *
       * @returns {void}
       */
      draftPolliHeaders(draft_polli_ratelimit_headers) {
        if (draft_polli_ratelimit_headers) {
          throw new ChangeWarning(
            "WRN_ERL_DEPRECATED_DRAFT_POLLI_HEADERS",
            `The draft_polli_ratelimit_headers configuration option is deprecated and has been removed in express-rate-limit v7, please set standardHeaders: 'draft-6' instead.`
          );
        }
      },
      /**
       * Warns the user that the `onLimitReached` option is deprecated and
       * will be removed in the next major release.
       *
       * @param onLimitReached {any | undefined} - The maximum number of hits per client.
       *
       * @returns {void}
       */
      onLimitReached(onLimitReached) {
        if (onLimitReached) {
          throw new ChangeWarning(
            "WRN_ERL_DEPRECATED_ON_LIMIT_REACHED",
            `The onLimitReached configuration option is deprecated and has been removed in express-rate-limit v7.`
          );
        }
      },
      /**
       * Warns the user when an invalid/unsupported version of the draft spec is passed.
       *
       * @param version {any | undefined} - The version passed by the user.
       *
       * @returns {void}
       */
      headersDraftVersion(version2) {
        if (typeof version2 !== "string" || // @ts-expect-error This is fine. If version is not in the array, it will just return false.
        !SUPPORTED_DRAFT_VERSIONS.includes(version2)) {
          const versionString = SUPPORTED_DRAFT_VERSIONS.join(", ");
          throw new ValidationError(
            "ERR_ERL_HEADERS_UNSUPPORTED_DRAFT_VERSION",
            `standardHeaders: only the following versions of the IETF draft specification are supported: ${versionString}.`
          );
        }
      },
      /**
       * Warns the user when the selected headers option requires a reset time but
       * the store does not provide one.
       *
       * @param resetTime {Date | undefined} - The timestamp when the client's hit count will be reset.
       *
       * @returns {void}
       */
      headersResetTime(resetTime) {
        if (!resetTime) {
          throw new ValidationError(
            "ERR_ERL_HEADERS_NO_RESET",
            `standardHeaders:  'draft-7' requires a 'resetTime', but the store did not provide one. The 'windowMs' value will be used instead, which may cause clients to wait longer than necessary.`
          );
        }
      },
      /**
       * Checks the options.validate setting to ensure that only recognized
       * validations are enabled or disabled.
       *
       * If any unrecognized values are found, an error is logged that
       * includes the list of supported vaidations.
       */
      validationsConfig() {
        const supportedValidations = Object.keys(this).filter(
          (k) => !["enabled", "disable"].includes(k)
        );
        supportedValidations.push("default");
        for (const key of Object.keys(this.enabled)) {
          if (!supportedValidations.includes(key)) {
            throw new ValidationError(
              "ERR_ERL_UNKNOWN_VALIDATION",
              `options.validate.${key} is not recognized. Supported validate options are: ${supportedValidations.join(
                ", "
              )}.`
            );
          }
        }
      },
      /**
       * Checks to see if the instance was created inside of a request handler,
       * which would prevent it from working correctly, with the default memory
       * store (or any other store with localKeys.)
       */
      creationStack(store) {
        const { stack } = new Error(
          "express-rate-limit validation check (set options.validate.creationStack=false to disable)"
        );
        if (stack?.includes("Layer.handle [as handle_request]")) {
          if (!store.localKeys) {
            throw new ValidationError(
              "ERR_ERL_CREATED_IN_REQUEST_HANDLER",
              "express-rate-limit instance should *usually* be created at app initialization, not when responding to a request."
            );
          }
          throw new ValidationError(
            "ERR_ERL_CREATED_IN_REQUEST_HANDLER",
            `express-rate-limit instance should be created at app initialization, not when responding to a request.`
          );
        }
      }
    };
    var getValidations = /* @__PURE__ */ __name((_enabled) => {
      let enabled;
      if (typeof _enabled === "boolean") {
        enabled = {
          default: _enabled
        };
      } else {
        enabled = {
          default: true,
          ..._enabled
        };
      }
      const wrappedValidations = {
        enabled
      };
      for (const [name, validation] of Object.entries(validations)) {
        if (typeof validation === "function")
          wrappedValidations[name] = (...args) => {
            if (!(enabled[name] ?? enabled.default)) {
              return;
            }
            try {
              ;
              validation.apply(
                wrappedValidations,
                args
              );
            } catch (error) {
              if (error instanceof ChangeWarning) console.warn(error);
              else console.error(error);
            }
          };
      }
      return wrappedValidations;
    }, "getValidations");
    var MemoryStore = class {
      static {
        __name(this, "MemoryStore");
      }
      constructor() {
        this.previous = /* @__PURE__ */ new Map();
        this.current = /* @__PURE__ */ new Map();
        this.localKeys = true;
      }
      /**
       * Method that initializes the store.
       *
       * @param options {Options} - The options used to setup the middleware.
       */
      init(options) {
        this.windowMs = options.windowMs;
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => {
          this.clearExpired();
        }, this.windowMs);
        if (this.interval.unref) this.interval.unref();
      }
      /**
       * Method to fetch a client's hit count and reset time.
       *
       * @param key {string} - The identifier for a client.
       *
       * @returns {ClientRateLimitInfo | undefined} - The number of hits and reset time for that client.
       *
       * @public
       */
      async get(key) {
        return this.current.get(key) ?? this.previous.get(key);
      }
      /**
       * Method to increment a client's hit counter.
       *
       * @param key {string} - The identifier for a client.
       *
       * @returns {ClientRateLimitInfo} - The number of hits and reset time for that client.
       *
       * @public
       */
      async increment(key) {
        const client = this.getClient(key);
        const now = Date.now();
        if (client.resetTime.getTime() <= now) {
          this.resetClient(client, now);
        }
        client.totalHits++;
        return client;
      }
      /**
       * Method to decrement a client's hit counter.
       *
       * @param key {string} - The identifier for a client.
       *
       * @public
       */
      async decrement(key) {
        const client = this.getClient(key);
        if (client.totalHits > 0) client.totalHits--;
      }
      /**
       * Method to reset a client's hit counter.
       *
       * @param key {string} - The identifier for a client.
       *
       * @public
       */
      async resetKey(key) {
        this.current.delete(key);
        this.previous.delete(key);
      }
      /**
       * Method to reset everyone's hit counter.
       *
       * @public
       */
      async resetAll() {
        this.current.clear();
        this.previous.clear();
      }
      /**
       * Method to stop the timer (if currently running) and prevent any memory
       * leaks.
       *
       * @public
       */
      shutdown() {
        clearInterval(this.interval);
        void this.resetAll();
      }
      /**
       * Recycles a client by setting its hit count to zero, and reset time to
       * `windowMs` milliseconds from now.
       *
       * NOT to be confused with `#resetKey()`, which removes a client from both the
       * `current` and `previous` maps.
       *
       * @param client {Client} - The client to recycle.
       * @param now {number} - The current time, to which the `windowMs` is added to get the `resetTime` for the client.
       *
       * @return {Client} - The modified client that was passed in, to allow for chaining.
       */
      resetClient(client, now = Date.now()) {
        client.totalHits = 0;
        client.resetTime.setTime(now + this.windowMs);
        return client;
      }
      /**
       * Retrieves or creates a client, given a key. Also ensures that the client being
       * returned is in the `current` map.
       *
       * @param key {string} - The key under which the client is (or is to be) stored.
       *
       * @returns {Client} - The requested client.
       */
      getClient(key) {
        if (this.current.has(key)) return this.current.get(key);
        let client;
        if (this.previous.has(key)) {
          client = this.previous.get(key);
          this.previous.delete(key);
        } else {
          client = { totalHits: 0, resetTime: /* @__PURE__ */ new Date() };
          this.resetClient(client);
        }
        this.current.set(key, client);
        return client;
      }
      /**
       * Move current clients to previous, create a new map for current.
       *
       * This function is called every `windowMs`.
       */
      clearExpired() {
        this.previous = this.current;
        this.current = /* @__PURE__ */ new Map();
      }
    };
    var isLegacyStore = /* @__PURE__ */ __name((store) => (
      // Check that `incr` exists but `increment` does not - store authors might want
      // to keep both around for backwards compatibility.
      typeof store.incr === "function" && typeof store.increment !== "function"
    ), "isLegacyStore");
    var promisifyStore = /* @__PURE__ */ __name((passedStore) => {
      if (!isLegacyStore(passedStore)) {
        return passedStore;
      }
      const legacyStore = passedStore;
      class PromisifiedStore {
        static {
          __name(this, "PromisifiedStore");
        }
        async increment(key) {
          return new Promise((resolve, reject) => {
            legacyStore.incr(
              key,
              (error, totalHits, resetTime) => {
                if (error) reject(error);
                resolve({ totalHits, resetTime });
              }
            );
          });
        }
        async decrement(key) {
          return legacyStore.decrement(key);
        }
        async resetKey(key) {
          return legacyStore.resetKey(key);
        }
        /* istanbul ignore next */
        async resetAll() {
          if (typeof legacyStore.resetAll === "function")
            return legacyStore.resetAll();
        }
      }
      return new PromisifiedStore();
    }, "promisifyStore");
    var getOptionsFromConfig = /* @__PURE__ */ __name((config2) => {
      const { validations: validations2, ...directlyPassableEntries } = config2;
      return {
        ...directlyPassableEntries,
        validate: validations2.enabled
      };
    }, "getOptionsFromConfig");
    var omitUndefinedOptions = /* @__PURE__ */ __name((passedOptions) => {
      const omittedOptions = {};
      for (const k of Object.keys(passedOptions)) {
        const key = k;
        if (passedOptions[key] !== void 0) {
          omittedOptions[key] = passedOptions[key];
        }
      }
      return omittedOptions;
    }, "omitUndefinedOptions");
    var parseOptions = /* @__PURE__ */ __name((passedOptions) => {
      const notUndefinedOptions = omitUndefinedOptions(passedOptions);
      const validations2 = getValidations(notUndefinedOptions?.validate ?? true);
      validations2.validationsConfig();
      validations2.draftPolliHeaders(
        // @ts-expect-error see the note above.
        notUndefinedOptions.draft_polli_ratelimit_headers
      );
      validations2.onLimitReached(notUndefinedOptions.onLimitReached);
      let standardHeaders = notUndefinedOptions.standardHeaders ?? false;
      if (standardHeaders === true) standardHeaders = "draft-6";
      const config2 = {
        windowMs: 60 * 1e3,
        limit: passedOptions.max ?? 5,
        // `max` is deprecated, but support it anyways.
        message: "Too many requests, please try again later.",
        statusCode: 429,
        legacyHeaders: passedOptions.headers ?? true,
        identifier(request, _response) {
          let duration = "";
          const property = config2.requestPropertyName;
          const { limit } = request[property];
          const seconds = config2.windowMs / 1e3;
          const minutes = config2.windowMs / (1e3 * 60);
          const hours = config2.windowMs / (1e3 * 60 * 60);
          const days = config2.windowMs / (1e3 * 60 * 60 * 24);
          if (seconds < 60) duration = `${seconds}sec`;
          else if (minutes < 60) duration = `${minutes}min`;
          else if (hours < 24) duration = `${hours}hr${hours > 1 ? "s" : ""}`;
          else duration = `${days}day${days > 1 ? "s" : ""}`;
          return `${limit}-in-${duration}`;
        },
        requestPropertyName: "rateLimit",
        skipFailedRequests: false,
        skipSuccessfulRequests: false,
        requestWasSuccessful: /* @__PURE__ */ __name((_request, response) => response.statusCode < 400, "requestWasSuccessful"),
        skip: /* @__PURE__ */ __name((_request, _response) => false, "skip"),
        keyGenerator(request, _response) {
          validations2.ip(request.ip);
          validations2.trustProxy(request);
          validations2.xForwardedForHeader(request);
          return request.ip;
        },
        async handler(request, response, _next, _optionsUsed) {
          response.status(config2.statusCode);
          const message = typeof config2.message === "function" ? await config2.message(
            request,
            response
          ) : config2.message;
          if (!response.writableEnded) {
            response.send(message);
          }
        },
        passOnStoreError: false,
        // Allow the default options to be overridden by the passed options.
        ...notUndefinedOptions,
        // `standardHeaders` is resolved into a draft version above, use that.
        standardHeaders,
        // Note that this field is declared after the user's options are spread in,
        // so that this field doesn't get overridden with an un-promisified store!
        store: promisifyStore(notUndefinedOptions.store ?? new MemoryStore()),
        // Print an error to the console if a few known misconfigurations are detected.
        validations: validations2
      };
      if (typeof config2.store.increment !== "function" || typeof config2.store.decrement !== "function" || typeof config2.store.resetKey !== "function" || config2.store.resetAll !== void 0 && typeof config2.store.resetAll !== "function" || config2.store.init !== void 0 && typeof config2.store.init !== "function") {
        throw new TypeError(
          "An invalid store was passed. Please ensure that the store is a class that implements the `Store` interface."
        );
      }
      return config2;
    }, "parseOptions");
    var handleAsyncErrors = /* @__PURE__ */ __name((fn) => async (request, response, next) => {
      try {
        await Promise.resolve(fn(request, response, next)).catch(next);
      } catch (error) {
        next(error);
      }
    }, "handleAsyncErrors");
    var rateLimit = /* @__PURE__ */ __name((passedOptions) => {
      const config2 = parseOptions(passedOptions ?? {});
      const options = getOptionsFromConfig(config2);
      config2.validations.creationStack(config2.store);
      config2.validations.unsharedStore(config2.store);
      if (typeof config2.store.init === "function") config2.store.init(options);
      const middleware = handleAsyncErrors(
        async (request, response, next) => {
          const skip = await config2.skip(request, response);
          if (skip) {
            next();
            return;
          }
          const augmentedRequest = request;
          const key = await config2.keyGenerator(request, response);
          let totalHits = 0;
          let resetTime;
          try {
            const incrementResult = await config2.store.increment(key);
            totalHits = incrementResult.totalHits;
            resetTime = incrementResult.resetTime;
          } catch (error) {
            if (config2.passOnStoreError) {
              console.error(
                "express-rate-limit: error from store, allowing request without rate-limiting.",
                error
              );
              next();
              return;
            }
            throw error;
          }
          config2.validations.positiveHits(totalHits);
          config2.validations.singleCount(request, config2.store, key);
          const retrieveLimit = typeof config2.limit === "function" ? config2.limit(request, response) : config2.limit;
          const limit = await retrieveLimit;
          config2.validations.limit(limit);
          const info = {
            limit,
            used: totalHits,
            remaining: Math.max(limit - totalHits, 0),
            resetTime
          };
          Object.defineProperty(info, "current", {
            configurable: false,
            enumerable: false,
            value: totalHits
          });
          augmentedRequest[config2.requestPropertyName] = info;
          if (config2.legacyHeaders && !response.headersSent) {
            setLegacyHeaders(response, info);
          }
          if (config2.standardHeaders && !response.headersSent) {
            switch (config2.standardHeaders) {
              case "draft-6": {
                setDraft6Headers(response, info, config2.windowMs);
                break;
              }
              case "draft-7": {
                config2.validations.headersResetTime(info.resetTime);
                setDraft7Headers(response, info, config2.windowMs);
                break;
              }
              case "draft-8": {
                const retrieveName = typeof config2.identifier === "function" ? config2.identifier(request, response) : config2.identifier;
                const name = await retrieveName;
                config2.validations.headersResetTime(info.resetTime);
                setDraft8Headers(response, info, config2.windowMs, name, key);
                break;
              }
              default: {
                config2.validations.headersDraftVersion(config2.standardHeaders);
                break;
              }
            }
          }
          if (config2.skipFailedRequests || config2.skipSuccessfulRequests) {
            let decremented = false;
            const decrementKey = /* @__PURE__ */ __name(async () => {
              if (!decremented) {
                await config2.store.decrement(key);
                decremented = true;
              }
            }, "decrementKey");
            if (config2.skipFailedRequests) {
              response.on("finish", async () => {
                if (!await config2.requestWasSuccessful(request, response))
                  await decrementKey();
              });
              response.on("close", async () => {
                if (!response.writableEnded) await decrementKey();
              });
              response.on("error", async () => {
                await decrementKey();
              });
            }
            if (config2.skipSuccessfulRequests) {
              response.on("finish", async () => {
                if (await config2.requestWasSuccessful(request, response))
                  await decrementKey();
              });
            }
          }
          config2.validations.disable();
          if (totalHits > limit) {
            if (config2.legacyHeaders || config2.standardHeaders) {
              setRetryAfterHeader(response, info, config2.windowMs);
            }
            config2.handler(request, response, next, options);
            return;
          }
          next();
        }
      );
      const getThrowFn = /* @__PURE__ */ __name(() => {
        throw new Error("The current store does not support the get/getKey method");
      }, "getThrowFn");
      middleware.resetKey = config2.store.resetKey.bind(config2.store);
      middleware.getKey = typeof config2.store.get === "function" ? config2.store.get.bind(config2.store) : getThrowFn;
      return middleware;
    }, "rateLimit");
    var lib_default = rateLimit;
    module.exports = rateLimit;
    module.exports.default = rateLimit;
    module.exports.rateLimit = rateLimit;
    module.exports.MemoryStore = MemoryStore;
  }
});

// node_modules/@libsql/core/lib-cjs/api.js
var require_api = __commonJS({
  "node_modules/@libsql/core/lib-cjs/api.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LibsqlError = void 0;
    var LibsqlError = class extends Error {
      static {
        __name(this, "LibsqlError");
      }
      /** Machine-readable error code. */
      code;
      /** Raw numeric error code */
      rawCode;
      constructor(message, code, rawCode, cause) {
        if (code !== void 0) {
          message = `${code}: ${message}`;
        }
        super(message, { cause });
        this.code = code;
        this.rawCode = rawCode;
        this.name = "LibsqlError";
      }
    };
    exports.LibsqlError = LibsqlError;
  }
});

// node_modules/@libsql/core/lib-cjs/uri.js
var require_uri2 = __commonJS({
  "node_modules/@libsql/core/lib-cjs/uri.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.encodeBaseUrl = exports.parseUri = void 0;
    var api_js_1 = require_api();
    function parseUri(text) {
      const match = URI_RE.exec(text);
      if (match === null) {
        throw new api_js_1.LibsqlError(`The URL '${text}' is not in a valid format`, "URL_INVALID");
      }
      const groups = match.groups;
      const scheme = groups["scheme"];
      const authority = groups["authority"] !== void 0 ? parseAuthority(groups["authority"]) : void 0;
      const path = percentDecode(groups["path"]);
      const query = groups["query"] !== void 0 ? parseQuery(groups["query"]) : void 0;
      const fragment = groups["fragment"] !== void 0 ? percentDecode(groups["fragment"]) : void 0;
      return { scheme, authority, path, query, fragment };
    }
    __name(parseUri, "parseUri");
    exports.parseUri = parseUri;
    var URI_RE = (() => {
      const SCHEME = "(?<scheme>[A-Za-z][A-Za-z.+-]*)";
      const AUTHORITY = "(?<authority>[^/?#]*)";
      const PATH = "(?<path>[^?#]*)";
      const QUERY = "(?<query>[^#]*)";
      const FRAGMENT = "(?<fragment>.*)";
      return new RegExp(`^${SCHEME}:(//${AUTHORITY})?${PATH}(\\?${QUERY})?(#${FRAGMENT})?$`, "su");
    })();
    function parseAuthority(text) {
      const match = AUTHORITY_RE.exec(text);
      if (match === null) {
        throw new api_js_1.LibsqlError("The authority part of the URL is not in a valid format", "URL_INVALID");
      }
      const groups = match.groups;
      const host = percentDecode(groups["host_br"] ?? groups["host"]);
      const port = groups["port"] ? parseInt(groups["port"], 10) : void 0;
      const userinfo = groups["username"] !== void 0 ? {
        username: percentDecode(groups["username"]),
        password: groups["password"] !== void 0 ? percentDecode(groups["password"]) : void 0
      } : void 0;
      return { host, port, userinfo };
    }
    __name(parseAuthority, "parseAuthority");
    var AUTHORITY_RE = (() => {
      return new RegExp(`^((?<username>[^:]*)(:(?<password>.*))?@)?((?<host>[^:\\[\\]]*)|(\\[(?<host_br>[^\\[\\]]*)\\]))(:(?<port>[0-9]*))?$`, "su");
    })();
    function parseQuery(text) {
      const sequences = text.split("&");
      const pairs = [];
      for (const sequence of sequences) {
        if (sequence === "") {
          continue;
        }
        let key;
        let value;
        const splitIdx = sequence.indexOf("=");
        if (splitIdx < 0) {
          key = sequence;
          value = "";
        } else {
          key = sequence.substring(0, splitIdx);
          value = sequence.substring(splitIdx + 1);
        }
        pairs.push({
          key: percentDecode(key.replaceAll("+", " ")),
          value: percentDecode(value.replaceAll("+", " "))
        });
      }
      return { pairs };
    }
    __name(parseQuery, "parseQuery");
    function percentDecode(text) {
      try {
        return decodeURIComponent(text);
      } catch (e) {
        if (e instanceof URIError) {
          throw new api_js_1.LibsqlError(`URL component has invalid percent encoding: ${e}`, "URL_INVALID", void 0, e);
        }
        throw e;
      }
    }
    __name(percentDecode, "percentDecode");
    function encodeBaseUrl(scheme, authority, path) {
      if (authority === void 0) {
        throw new api_js_1.LibsqlError(`URL with scheme ${JSON.stringify(scheme + ":")} requires authority (the "//" part)`, "URL_INVALID");
      }
      const schemeText = `${scheme}:`;
      const hostText = encodeHost(authority.host);
      const portText = encodePort(authority.port);
      const userinfoText = encodeUserinfo(authority.userinfo);
      const authorityText = `//${userinfoText}${hostText}${portText}`;
      let pathText = path.split("/").map(encodeURIComponent).join("/");
      if (pathText !== "" && !pathText.startsWith("/")) {
        pathText = "/" + pathText;
      }
      return new URL(`${schemeText}${authorityText}${pathText}`);
    }
    __name(encodeBaseUrl, "encodeBaseUrl");
    exports.encodeBaseUrl = encodeBaseUrl;
    function encodeHost(host) {
      return host.includes(":") ? `[${encodeURI(host)}]` : encodeURI(host);
    }
    __name(encodeHost, "encodeHost");
    function encodePort(port) {
      return port !== void 0 ? `:${port}` : "";
    }
    __name(encodePort, "encodePort");
    function encodeUserinfo(userinfo) {
      if (userinfo === void 0) {
        return "";
      }
      const usernameText = encodeURIComponent(userinfo.username);
      const passwordText = userinfo.password !== void 0 ? `:${encodeURIComponent(userinfo.password)}` : "";
      return `${usernameText}${passwordText}@`;
    }
    __name(encodeUserinfo, "encodeUserinfo");
  }
});

// node_modules/js-base64/base64.js
var require_base64 = __commonJS({
  "node_modules/js-base64/base64.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, (function() {
        var current = global2.Base64;
        var exports2 = global2.Base64 = {};
        factory(exports2);
        exports2.noConflict = function() {
          global2.Base64 = current;
          return exports2;
        };
      })());
    })(exports, (function(exports2) {
      "use strict";
      var version2 = "3.9.4";
      var VERSION = version2;
      var _TD = typeof TextDecoder === "function" ? new TextDecoder("utf-8", { ignoreBOM: true }) : void 0;
      var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
      var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var b64chs = Array.prototype.slice.call(b64ch);
      var b64tab = (function(a) {
        var tab = {};
        a.forEach(function(c, i) {
          return tab[c] = i;
        });
        return tab;
      })(b64chs);
      var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
      var _fromCC = String.fromCharCode.bind(String);
      var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : function(it) {
        return new Uint8Array(Array.prototype.slice.call(it, 0));
      };
      var _mkUriSafe = /* @__PURE__ */ __name(function(src) {
        return src.replace(/=/g, "").replace(/[+\/]/g, function(m0) {
          return m0 == "+" ? "-" : "_";
        });
      }, "_mkUriSafe");
      var _tidyB64 = /* @__PURE__ */ __name(function(s) {
        return s.replace(/[^A-Za-z0-9\+\/]/g, "");
      }, "_tidyB64");
      var btoaPolyfill = /* @__PURE__ */ __name(function(bin) {
        var u32, c0, c1, c2, asc = "";
        var pad = bin.length % 3;
        for (var i = 0; i < bin.length; ) {
          if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError("invalid character found");
          u32 = c0 << 16 | c1 << 8 | c2;
          asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
        }
        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
      }, "btoaPolyfill");
      var _btoa = typeof btoa === "function" ? function(bin) {
        return btoa(bin);
      } : btoaPolyfill;
      var _fromUint8Array = typeof Uint8Array.prototype.toBase64 === "function" ? function(u8a) {
        return u8a.toBase64();
      } : function(u8a) {
        var maxargs = 4096;
        var strs = [];
        for (var i = 0, l = u8a.length; i < l; i += maxargs) {
          strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(""));
      };
      var fromUint8Array = /* @__PURE__ */ __name(function(u8a, urlsafe) {
        if (urlsafe === void 0) {
          urlsafe = false;
        }
        return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
      }, "fromUint8Array");
      var cb_utob = /* @__PURE__ */ __name(function(c) {
        if (c.length < 2) {
          var cc = c.charCodeAt(0);
          return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
        } else {
          var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
          return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
        }
      }, "cb_utob");
      var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\x00-\x7F]/g;
      var utob = /* @__PURE__ */ __name(function(u) {
        return u.replace(re_utob, cb_utob);
      }, "utob");
      var _encode = _TE ? function(s) {
        return _fromUint8Array(_TE.encode(s));
      } : function(s) {
        return _btoa(utob(s));
      };
      var encode = /* @__PURE__ */ __name(function(src, urlsafe) {
        if (urlsafe === void 0) {
          urlsafe = false;
        }
        return urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
      }, "encode");
      var encodeURI2 = /* @__PURE__ */ __name(function(src) {
        return encode(src, true);
      }, "encodeURI");
      var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
      var cb_btou = /* @__PURE__ */ __name(function(cccc) {
        switch (cccc.length) {
          case 4:
            var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
            return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
          case 3:
            return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
          default:
            return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
        }
      }, "cb_btou");
      var btou = /* @__PURE__ */ __name(function(b) {
        return b.replace(re_btou, cb_btou);
      }, "btou");
      var atobPolyfill = /* @__PURE__ */ __name(function(asc) {
        asc = asc.replace(/\s+/g, "");
        if (!b64re.test(asc))
          throw new TypeError("malformed base64.");
        asc += "==".slice(2 - (asc.length & 3));
        var u24, r1, r2;
        var binArray = [];
        for (var i = 0; i < asc.length; ) {
          u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
          if (r1 === 64) {
            binArray.push(_fromCC(u24 >> 16 & 255));
          } else if (r2 === 64) {
            binArray.push(_fromCC(u24 >> 16 & 255, u24 >> 8 & 255));
          } else {
            binArray.push(_fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255));
          }
        }
        return binArray.join("");
      }, "atobPolyfill");
      var _atob = typeof atob === "function" ? function(asc) {
        return atob(_tidyB64(asc));
      } : atobPolyfill;
      var _toUint8Array = typeof Uint8Array.fromBase64 === "function" ? function(a) {
        return Uint8Array.fromBase64(a);
      } : function(a) {
        return _U8Afrom(_atob(a).split("").map(function(c) {
          return c.charCodeAt(0);
        }));
      };
      var toUint8Array = /* @__PURE__ */ __name(function(a) {
        return _toUint8Array(_unURI(a));
      }, "toUint8Array");
      var _decode = _TD ? function(a) {
        return _TD.decode(_toUint8Array(a));
      } : function(a) {
        return btou(_atob(a));
      };
      var _unURI = /* @__PURE__ */ __name(function(a) {
        return _tidyB64(a.replace(/[-_]/g, function(m0) {
          return m0 == "-" ? "+" : "/";
        }));
      }, "_unURI");
      var decode = /* @__PURE__ */ __name(function(src) {
        return _decode(_unURI(src));
      }, "decode");
      var isValid = /* @__PURE__ */ __name(function(src) {
        if (typeof src !== "string")
          return false;
        var s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
      }, "isValid");
      var _noEnum = /* @__PURE__ */ __name(function(v) {
        return {
          value: v,
          enumerable: false,
          writable: true,
          configurable: true
        };
      }, "_noEnum");
      var extendString = /* @__PURE__ */ __name(function() {
        var _add = /* @__PURE__ */ __name(function(name, body) {
          return Object.defineProperty(String.prototype, name, _noEnum(body));
        }, "_add");
        _add("fromBase64", function() {
          return decode(this);
        });
        _add("toBase64", function(urlsafe) {
          return encode(this, urlsafe);
        });
        _add("toBase64URI", function() {
          return encode(this, true);
        });
        _add("toBase64URL", function() {
          return encode(this, true);
        });
        _add("toUint8Array", function() {
          return toUint8Array(this);
        });
      }, "extendString");
      var extendUint8Array = /* @__PURE__ */ __name(function() {
        var _add = /* @__PURE__ */ __name(function(name, body) {
          return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
        }, "_add");
        _add("toBase64", function(urlsafe) {
          return fromUint8Array(this, urlsafe);
        });
        _add("toBase64URI", function() {
          return fromUint8Array(this, true);
        });
        _add("toBase64URL", function() {
          return fromUint8Array(this, true);
        });
      }, "extendUint8Array");
      var extendBuiltins = /* @__PURE__ */ __name(function() {
        extendString();
        extendUint8Array();
      }, "extendBuiltins");
      var gBase64 = {
        version: version2,
        VERSION,
        atob: _atob,
        atobPolyfill,
        btoa: _btoa,
        btoaPolyfill,
        fromBase64: decode,
        toBase64: encode,
        encode,
        encodeURI: encodeURI2,
        encodeURL: encodeURI2,
        utob,
        btou,
        decode,
        isValid,
        fromUint8Array,
        toUint8Array,
        extendString,
        extendUint8Array,
        extendBuiltins
      };
      exports2.Base64 = gBase64;
      exports2.VERSION = VERSION;
      exports2.atob = _atob;
      exports2.atobPolyfill = atobPolyfill;
      exports2.btoa = _btoa;
      exports2.btoaPolyfill = btoaPolyfill;
      exports2.btou = btou;
      exports2.decode = decode;
      exports2.encode = encode;
      exports2.encodeURI = encodeURI2;
      exports2.encodeURL = encodeURI2;
      exports2.extendBuiltins = extendBuiltins;
      exports2.extendString = extendString;
      exports2.extendUint8Array = extendUint8Array;
      exports2.fromBase64 = decode;
      exports2.fromUint8Array = fromUint8Array;
      exports2.isValid = isValid;
      exports2.toBase64 = encode;
      exports2.toUint8Array = toUint8Array;
      exports2.utob = utob;
      exports2.version = version2;
    }));
  }
});

// node_modules/@libsql/core/lib-cjs/util.js
var require_util3 = __commonJS({
  "node_modules/@libsql/core/lib-cjs/util.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResultSetImpl = exports.transactionModeToBegin = exports.supportedUrlLink = void 0;
    var js_base64_1 = require_base64();
    exports.supportedUrlLink = "https://github.com/libsql/libsql-client-ts#supported-urls";
    function transactionModeToBegin(mode) {
      if (mode === "write") {
        return "BEGIN IMMEDIATE";
      } else if (mode === "read") {
        return "BEGIN TRANSACTION READONLY";
      } else if (mode === "deferred") {
        return "BEGIN DEFERRED";
      } else {
        throw RangeError('Unknown transaction mode, supported values are "write", "read" and "deferred"');
      }
    }
    __name(transactionModeToBegin, "transactionModeToBegin");
    exports.transactionModeToBegin = transactionModeToBegin;
    var ResultSetImpl = class {
      static {
        __name(this, "ResultSetImpl");
      }
      columns;
      columnTypes;
      rows;
      rowsAffected;
      lastInsertRowid;
      constructor(columns, columnTypes, rows, rowsAffected, lastInsertRowid) {
        this.columns = columns;
        this.columnTypes = columnTypes;
        this.rows = rows;
        this.rowsAffected = rowsAffected;
        this.lastInsertRowid = lastInsertRowid;
      }
      toJSON() {
        return {
          columns: this.columns,
          columnTypes: this.columnTypes,
          rows: this.rows.map(rowToJson),
          rowsAffected: this.rowsAffected,
          lastInsertRowid: this.lastInsertRowid !== void 0 ? "" + this.lastInsertRowid : null
        };
      }
    };
    exports.ResultSetImpl = ResultSetImpl;
    function rowToJson(row) {
      return Array.prototype.map.call(row, valueToJson);
    }
    __name(rowToJson, "rowToJson");
    function valueToJson(value) {
      if (typeof value === "bigint") {
        return "" + value;
      } else if (value instanceof ArrayBuffer) {
        return js_base64_1.Base64.fromUint8Array(new Uint8Array(value));
      } else {
        return value;
      }
    }
    __name(valueToJson, "valueToJson");
  }
});

// node_modules/@libsql/core/lib-cjs/config.js
var require_config = __commonJS({
  "node_modules/@libsql/core/lib-cjs/config.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.expandConfig = exports.isInMemoryConfig = void 0;
    var api_js_1 = require_api();
    var uri_js_1 = require_uri2();
    var util_js_1 = require_util3();
    var inMemoryMode = ":memory:";
    function isInMemoryConfig(config2) {
      return config2.scheme === "file" && (config2.path === ":memory:" || config2.path.startsWith(":memory:?"));
    }
    __name(isInMemoryConfig, "isInMemoryConfig");
    exports.isInMemoryConfig = isInMemoryConfig;
    function expandConfig(config2, preferHttp) {
      if (typeof config2 !== "object") {
        throw new TypeError(`Expected client configuration as object, got ${typeof config2}`);
      }
      let { url, authToken, tls, intMode, concurrency } = config2;
      concurrency = Math.max(0, concurrency || 20);
      intMode ??= "number";
      let connectionQueryParams = [];
      if (url === inMemoryMode) {
        url = "file::memory:";
      }
      const uri = (0, uri_js_1.parseUri)(url);
      const originalUriScheme = uri.scheme.toLowerCase();
      const isInMemoryMode = originalUriScheme === "file" && uri.path === inMemoryMode && uri.authority === void 0;
      let queryParamsDef;
      if (isInMemoryMode) {
        queryParamsDef = {
          cache: {
            values: ["shared", "private"],
            update: /* @__PURE__ */ __name((key, value) => connectionQueryParams.push(`${key}=${value}`), "update")
          }
        };
      } else {
        queryParamsDef = {
          tls: {
            values: ["0", "1"],
            update: /* @__PURE__ */ __name((_, value) => tls = value === "1", "update")
          },
          authToken: {
            update: /* @__PURE__ */ __name((_, value) => authToken = value, "update")
          }
        };
      }
      for (const { key, value } of uri.query?.pairs ?? []) {
        if (!Object.hasOwn(queryParamsDef, key)) {
          throw new api_js_1.LibsqlError(`Unsupported URL query parameter ${JSON.stringify(key)}`, "URL_PARAM_NOT_SUPPORTED");
        }
        const queryParamDef = queryParamsDef[key];
        if (queryParamDef.values !== void 0 && !queryParamDef.values.includes(value)) {
          throw new api_js_1.LibsqlError(`Unknown value for the "${key}" query argument: ${JSON.stringify(value)}. Supported values are: [${queryParamDef.values.map((x) => '"' + x + '"').join(", ")}]`, "URL_INVALID");
        }
        if (queryParamDef.update !== void 0) {
          queryParamDef?.update(key, value);
        }
      }
      const connectionQueryParamsString = connectionQueryParams.length === 0 ? "" : `?${connectionQueryParams.join("&")}`;
      const path = uri.path + connectionQueryParamsString;
      let scheme;
      if (originalUriScheme === "libsql") {
        if (tls === false) {
          if (uri.authority?.port === void 0) {
            throw new api_js_1.LibsqlError('A "libsql:" URL with ?tls=0 must specify an explicit port', "URL_INVALID");
          }
          scheme = preferHttp ? "http" : "ws";
        } else {
          scheme = preferHttp ? "https" : "wss";
        }
      } else {
        scheme = originalUriScheme;
      }
      if (scheme === "http" || scheme === "ws") {
        tls ??= false;
      } else {
        tls ??= true;
      }
      if (scheme !== "http" && scheme !== "ws" && scheme !== "https" && scheme !== "wss" && scheme !== "file") {
        throw new api_js_1.LibsqlError(`The client supports only "libsql:", "wss:", "ws:", "https:", "http:" and "file:" URLs, got ${JSON.stringify(uri.scheme + ":")}. For more information, please read ${util_js_1.supportedUrlLink}`, "URL_SCHEME_NOT_SUPPORTED");
      }
      if (intMode !== "number" && intMode !== "bigint" && intMode !== "string") {
        throw new TypeError(`Invalid value for intMode, expected "number", "bigint" or "string", got ${JSON.stringify(intMode)}`);
      }
      if (uri.fragment !== void 0) {
        throw new api_js_1.LibsqlError(`URL fragments are not supported: ${JSON.stringify("#" + uri.fragment)}`, "URL_INVALID");
      }
      if (isInMemoryMode) {
        return {
          scheme: "file",
          tls: false,
          path,
          intMode,
          concurrency,
          syncUrl: config2.syncUrl,
          syncInterval: config2.syncInterval,
          fetch: config2.fetch,
          authToken: void 0,
          encryptionKey: void 0,
          authority: void 0
        };
      }
      return {
        scheme,
        tls,
        authority: uri.authority,
        path,
        authToken,
        intMode,
        concurrency,
        encryptionKey: config2.encryptionKey,
        syncUrl: config2.syncUrl,
        syncInterval: config2.syncInterval,
        fetch: config2.fetch
      };
    }
    __name(expandConfig, "expandConfig");
    exports.expandConfig = expandConfig;
  }
});

// node_modules/@libsql/isomorphic-ws/web.cjs
var require_web = __commonJS({
  "node_modules/@libsql/isomorphic-ws/web.cjs"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var _WebSocket;
    if (typeof WebSocket !== "undefined") {
      _WebSocket = WebSocket;
    } else if (typeof global !== "undefined") {
      _WebSocket = global.WebSocket;
    } else if (typeof window !== "undefined") {
      _WebSocket = window.WebSocket;
    } else if (typeof self !== "undefined") {
      _WebSocket = self.WebSocket;
    }
    module.exports = { WebSocket: _WebSocket };
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/client.js
var require_client = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/client.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Client = void 0;
    var Client = class {
      static {
        __name(this, "Client");
      }
      /** @private */
      constructor() {
        this.intMode = "number";
      }
      /** Representation of integers returned from the database. See {@link IntMode}.
       *
       * This value is inherited by {@link Stream} objects created with {@link openStream}, but you can
       * override the integer mode for every stream by setting {@link Stream.intMode} on the stream.
       */
      intMode;
    };
    exports.Client = Client;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/errors.js
var require_errors = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/errors.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MisuseError = exports.InternalError = exports.ProtocolVersionError = exports.LibsqlUrlParseError = exports.HttpServerError = exports.WebSocketError = exports.WebSocketUnsupportedError = exports.ClosedError = exports.ResponseError = exports.ProtoError = exports.ClientError = void 0;
    var ClientError = class extends Error {
      static {
        __name(this, "ClientError");
      }
      /** @private */
      constructor(message) {
        super(message);
        this.name = "ClientError";
      }
    };
    exports.ClientError = ClientError;
    var ProtoError = class extends ClientError {
      static {
        __name(this, "ProtoError");
      }
      /** @private */
      constructor(message) {
        super(message);
        this.name = "ProtoError";
      }
    };
    exports.ProtoError = ProtoError;
    var ResponseError = class extends ClientError {
      static {
        __name(this, "ResponseError");
      }
      code;
      /** @internal */
      proto;
      /** @private */
      constructor(message, protoError) {
        super(message);
        this.name = "ResponseError";
        this.code = protoError.code;
        this.proto = protoError;
        this.stack = void 0;
      }
    };
    exports.ResponseError = ResponseError;
    var ClosedError = class extends ClientError {
      static {
        __name(this, "ClosedError");
      }
      /** @private */
      constructor(message, cause) {
        if (cause !== void 0) {
          super(`${message}: ${cause}`);
          this.cause = cause;
        } else {
          super(message);
        }
        this.name = "ClosedError";
      }
    };
    exports.ClosedError = ClosedError;
    var WebSocketUnsupportedError = class extends ClientError {
      static {
        __name(this, "WebSocketUnsupportedError");
      }
      /** @private */
      constructor(message) {
        super(message);
        this.name = "WebSocketUnsupportedError";
      }
    };
    exports.WebSocketUnsupportedError = WebSocketUnsupportedError;
    var WebSocketError = class extends ClientError {
      static {
        __name(this, "WebSocketError");
      }
      /** @private */
      constructor(message) {
        super(message);
        this.name = "WebSocketError";
      }
    };
    exports.WebSocketError = WebSocketError;
    var HttpServerError = class extends ClientError {
      static {
        __name(this, "HttpServerError");
      }
      status;
      /** @private */
      constructor(message, status) {
        super(message);
        this.status = status;
        this.name = "HttpServerError";
      }
    };
    exports.HttpServerError = HttpServerError;
    var LibsqlUrlParseError = class extends ClientError {
      static {
        __name(this, "LibsqlUrlParseError");
      }
      /** @private */
      constructor(message) {
        super(message);
        this.name = "LibsqlUrlParseError";
      }
    };
    exports.LibsqlUrlParseError = LibsqlUrlParseError;
    var ProtocolVersionError = class extends ClientError {
      static {
        __name(this, "ProtocolVersionError");
      }
      /** @private */
      constructor(message) {
        super(message);
        this.name = "ProtocolVersionError";
      }
    };
    exports.ProtocolVersionError = ProtocolVersionError;
    var InternalError = class extends ClientError {
      static {
        __name(this, "InternalError");
      }
      /** @private */
      constructor(message) {
        super(message);
        this.name = "InternalError";
      }
    };
    exports.InternalError = InternalError;
    var MisuseError = class extends ClientError {
      static {
        __name(this, "MisuseError");
      }
      /** @private */
      constructor(message) {
        super(message);
        this.name = "MisuseError";
      }
    };
    exports.MisuseError = MisuseError;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/encoding/json/decode.js
var require_decode = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/encoding/json/decode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readJsonObject = exports.arrayObjectsMap = exports.object = exports.array = exports.boolean = exports.number = exports.stringOpt = exports.string = void 0;
    var errors_js_1 = require_errors();
    function string(value) {
      if (typeof value === "string") {
        return value;
      }
      throw typeError(value, "string");
    }
    __name(string, "string");
    exports.string = string;
    function stringOpt(value) {
      if (value === null || value === void 0) {
        return void 0;
      } else if (typeof value === "string") {
        return value;
      }
      throw typeError(value, "string or null");
    }
    __name(stringOpt, "stringOpt");
    exports.stringOpt = stringOpt;
    function number(value) {
      if (typeof value === "number") {
        return value;
      }
      throw typeError(value, "number");
    }
    __name(number, "number");
    exports.number = number;
    function boolean(value) {
      if (typeof value === "boolean") {
        return value;
      }
      throw typeError(value, "boolean");
    }
    __name(boolean, "boolean");
    exports.boolean = boolean;
    function array(value) {
      if (Array.isArray(value)) {
        return value;
      }
      throw typeError(value, "array");
    }
    __name(array, "array");
    exports.array = array;
    function object(value) {
      if (value !== null && typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      throw typeError(value, "object");
    }
    __name(object, "object");
    exports.object = object;
    function arrayObjectsMap(value, fun) {
      return array(value).map((elemValue) => fun(object(elemValue)));
    }
    __name(arrayObjectsMap, "arrayObjectsMap");
    exports.arrayObjectsMap = arrayObjectsMap;
    function typeError(value, expected) {
      if (value === void 0) {
        return new errors_js_1.ProtoError(`Expected ${expected}, but the property was missing`);
      }
      let received = typeof value;
      if (value === null) {
        received = "null";
      } else if (Array.isArray(value)) {
        received = "array";
      }
      return new errors_js_1.ProtoError(`Expected ${expected}, received ${received}`);
    }
    __name(typeError, "typeError");
    function readJsonObject(value, fun) {
      return fun(object(value));
    }
    __name(readJsonObject, "readJsonObject");
    exports.readJsonObject = readJsonObject;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/encoding/json/encode.js
var require_encode = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/encoding/json/encode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeJsonObject = exports.ObjectWriter = void 0;
    var ObjectWriter = class {
      static {
        __name(this, "ObjectWriter");
      }
      #output;
      #isFirst;
      constructor(output) {
        this.#output = output;
        this.#isFirst = false;
      }
      begin() {
        this.#output.push("{");
        this.#isFirst = true;
      }
      end() {
        this.#output.push("}");
        this.#isFirst = false;
      }
      #key(name) {
        if (this.#isFirst) {
          this.#output.push('"');
          this.#isFirst = false;
        } else {
          this.#output.push(',"');
        }
        this.#output.push(name);
        this.#output.push('":');
      }
      string(name, value) {
        this.#key(name);
        this.#output.push(JSON.stringify(value));
      }
      stringRaw(name, value) {
        this.#key(name);
        this.#output.push('"');
        this.#output.push(value);
        this.#output.push('"');
      }
      number(name, value) {
        this.#key(name);
        this.#output.push("" + value);
      }
      boolean(name, value) {
        this.#key(name);
        this.#output.push(value ? "true" : "false");
      }
      object(name, value, valueFun) {
        this.#key(name);
        this.begin();
        valueFun(this, value);
        this.end();
      }
      arrayObjects(name, values, valueFun) {
        this.#key(name);
        this.#output.push("[");
        for (let i = 0; i < values.length; ++i) {
          if (i !== 0) {
            this.#output.push(",");
          }
          this.begin();
          valueFun(this, values[i]);
          this.end();
        }
        this.#output.push("]");
      }
    };
    exports.ObjectWriter = ObjectWriter;
    function writeJsonObject(value, fun) {
      const output = [];
      const writer = new ObjectWriter(output);
      writer.begin();
      fun(writer, value);
      writer.end();
      return output.join("");
    }
    __name(writeJsonObject, "writeJsonObject");
    exports.writeJsonObject = writeJsonObject;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/encoding/protobuf/util.js
var require_util4 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/encoding/protobuf/util.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FIXED_32 = exports.GROUP_END = exports.GROUP_START = exports.LENGTH_DELIMITED = exports.FIXED_64 = exports.VARINT = void 0;
    exports.VARINT = 0;
    exports.FIXED_64 = 1;
    exports.LENGTH_DELIMITED = 2;
    exports.GROUP_START = 3;
    exports.GROUP_END = 4;
    exports.FIXED_32 = 5;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/encoding/protobuf/decode.js
var require_decode2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/encoding/protobuf/decode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readProtobufMessage = exports.FieldReader = void 0;
    var errors_js_1 = require_errors();
    var util_js_1 = require_util4();
    var MessageReader = class {
      static {
        __name(this, "MessageReader");
      }
      #array;
      #view;
      #pos;
      constructor(array) {
        this.#array = array;
        this.#view = new DataView(array.buffer, array.byteOffset, array.byteLength);
        this.#pos = 0;
      }
      varint() {
        let value = 0;
        for (let shift = 0; ; shift += 7) {
          const byte = this.#array[this.#pos++];
          value |= (byte & 127) << shift;
          if (!(byte & 128)) {
            break;
          }
        }
        return value;
      }
      varintBig() {
        let value = 0n;
        for (let shift = 0n; ; shift += 7n) {
          const byte = this.#array[this.#pos++];
          value |= BigInt(byte & 127) << shift;
          if (!(byte & 128)) {
            break;
          }
        }
        return value;
      }
      bytes(length) {
        const array = new Uint8Array(this.#array.buffer, this.#array.byteOffset + this.#pos, length);
        this.#pos += length;
        return array;
      }
      double() {
        const value = this.#view.getFloat64(this.#pos, true);
        this.#pos += 8;
        return value;
      }
      skipVarint() {
        for (; ; ) {
          const byte = this.#array[this.#pos++];
          if (!(byte & 128)) {
            break;
          }
        }
      }
      skip(count) {
        this.#pos += count;
      }
      eof() {
        return this.#pos >= this.#array.byteLength;
      }
    };
    var FieldReader = class {
      static {
        __name(this, "FieldReader");
      }
      #reader;
      #wireType;
      constructor(reader) {
        this.#reader = reader;
        this.#wireType = -1;
      }
      setup(wireType) {
        this.#wireType = wireType;
      }
      #expect(expectedWireType) {
        if (this.#wireType !== expectedWireType) {
          throw new errors_js_1.ProtoError(`Expected wire type ${expectedWireType}, got ${this.#wireType}`);
        }
        this.#wireType = -1;
      }
      bytes() {
        this.#expect(util_js_1.LENGTH_DELIMITED);
        const length = this.#reader.varint();
        return this.#reader.bytes(length);
      }
      string() {
        return new TextDecoder().decode(this.bytes());
      }
      message(def) {
        return readProtobufMessage(this.bytes(), def);
      }
      int32() {
        this.#expect(util_js_1.VARINT);
        return this.#reader.varint();
      }
      uint32() {
        return this.int32();
      }
      bool() {
        return this.int32() !== 0;
      }
      uint64() {
        this.#expect(util_js_1.VARINT);
        return this.#reader.varintBig();
      }
      sint64() {
        const value = this.uint64();
        return value >> 1n ^ -(value & 1n);
      }
      double() {
        this.#expect(util_js_1.FIXED_64);
        return this.#reader.double();
      }
      maybeSkip() {
        if (this.#wireType < 0) {
          return;
        } else if (this.#wireType === util_js_1.VARINT) {
          this.#reader.skipVarint();
        } else if (this.#wireType === util_js_1.FIXED_64) {
          this.#reader.skip(8);
        } else if (this.#wireType === util_js_1.LENGTH_DELIMITED) {
          const length = this.#reader.varint();
          this.#reader.skip(length);
        } else if (this.#wireType === util_js_1.FIXED_32) {
          this.#reader.skip(4);
        } else {
          throw new errors_js_1.ProtoError(`Unexpected wire type ${this.#wireType}`);
        }
        this.#wireType = -1;
      }
    };
    exports.FieldReader = FieldReader;
    function readProtobufMessage(data, def) {
      const msgReader = new MessageReader(data);
      const fieldReader = new FieldReader(msgReader);
      let value = def.default();
      while (!msgReader.eof()) {
        const key = msgReader.varint();
        const tag = key >> 3;
        const wireType = key & 7;
        fieldReader.setup(wireType);
        const tagFun = def[tag];
        if (tagFun !== void 0) {
          const returnedValue = tagFun(fieldReader, value);
          if (returnedValue !== void 0) {
            value = returnedValue;
          }
        }
        fieldReader.maybeSkip();
      }
      return value;
    }
    __name(readProtobufMessage, "readProtobufMessage");
    exports.readProtobufMessage = readProtobufMessage;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/encoding/protobuf/encode.js
var require_encode2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/encoding/protobuf/encode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeProtobufMessage = exports.MessageWriter = void 0;
    var util_js_1 = require_util4();
    var MessageWriter = class _MessageWriter {
      static {
        __name(this, "MessageWriter");
      }
      #buf;
      #array;
      #view;
      #pos;
      constructor() {
        this.#buf = new ArrayBuffer(256);
        this.#array = new Uint8Array(this.#buf);
        this.#view = new DataView(this.#buf);
        this.#pos = 0;
      }
      #ensure(extra) {
        if (this.#pos + extra <= this.#buf.byteLength) {
          return;
        }
        let newCap = this.#buf.byteLength;
        while (newCap < this.#pos + extra) {
          newCap *= 2;
        }
        const newBuf = new ArrayBuffer(newCap);
        const newArray = new Uint8Array(newBuf);
        const newView = new DataView(newBuf);
        newArray.set(new Uint8Array(this.#buf, 0, this.#pos));
        this.#buf = newBuf;
        this.#array = newArray;
        this.#view = newView;
      }
      #varint(value) {
        this.#ensure(5);
        value = 0 | value;
        do {
          let byte = value & 127;
          value >>>= 7;
          byte |= value ? 128 : 0;
          this.#array[this.#pos++] = byte;
        } while (value);
      }
      #varintBig(value) {
        this.#ensure(10);
        value = value & 0xffffffffffffffffn;
        do {
          let byte = Number(value & 0x7fn);
          value >>= 7n;
          byte |= value ? 128 : 0;
          this.#array[this.#pos++] = byte;
        } while (value);
      }
      #tag(tag, wireType) {
        this.#varint(tag << 3 | wireType);
      }
      bytes(tag, value) {
        this.#tag(tag, util_js_1.LENGTH_DELIMITED);
        this.#varint(value.byteLength);
        this.#ensure(value.byteLength);
        this.#array.set(value, this.#pos);
        this.#pos += value.byteLength;
      }
      string(tag, value) {
        this.bytes(tag, new TextEncoder().encode(value));
      }
      message(tag, value, fun) {
        const writer = new _MessageWriter();
        fun(writer, value);
        this.bytes(tag, writer.data());
      }
      int32(tag, value) {
        this.#tag(tag, util_js_1.VARINT);
        this.#varint(value);
      }
      uint32(tag, value) {
        this.int32(tag, value);
      }
      bool(tag, value) {
        this.int32(tag, value ? 1 : 0);
      }
      sint64(tag, value) {
        this.#tag(tag, util_js_1.VARINT);
        this.#varintBig(value << 1n ^ value >> 63n);
      }
      double(tag, value) {
        this.#tag(tag, util_js_1.FIXED_64);
        this.#ensure(8);
        this.#view.setFloat64(this.#pos, value, true);
        this.#pos += 8;
      }
      data() {
        return new Uint8Array(this.#buf, 0, this.#pos);
      }
    };
    exports.MessageWriter = MessageWriter;
    function writeProtobufMessage(value, fun) {
      const w = new MessageWriter();
      fun(w, value);
      return w.data();
    }
    __name(writeProtobufMessage, "writeProtobufMessage");
    exports.writeProtobufMessage = writeProtobufMessage;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/encoding/index.js
var require_encoding2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/encoding/index.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeProtobufMessage = exports.readProtobufMessage = exports.writeJsonObject = exports.readJsonObject = void 0;
    var decode_js_1 = require_decode();
    Object.defineProperty(exports, "readJsonObject", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return decode_js_1.readJsonObject;
    }, "get") });
    var encode_js_1 = require_encode();
    Object.defineProperty(exports, "writeJsonObject", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return encode_js_1.writeJsonObject;
    }, "get") });
    var decode_js_2 = require_decode2();
    Object.defineProperty(exports, "readProtobufMessage", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return decode_js_2.readProtobufMessage;
    }, "get") });
    var encode_js_2 = require_encode2();
    Object.defineProperty(exports, "writeProtobufMessage", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return encode_js_2.writeProtobufMessage;
    }, "get") });
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/id_alloc.js
var require_id_alloc = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/id_alloc.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IdAlloc = void 0;
    var errors_js_1 = require_errors();
    var IdAlloc = class {
      static {
        __name(this, "IdAlloc");
      }
      // Set of all allocated ids
      #usedIds;
      // Set of all free ids lower than `#usedIds.size`
      #freeIds;
      constructor() {
        this.#usedIds = /* @__PURE__ */ new Set();
        this.#freeIds = /* @__PURE__ */ new Set();
      }
      // Returns an id that was free, and marks it as used.
      alloc() {
        for (const freeId2 of this.#freeIds) {
          this.#freeIds.delete(freeId2);
          this.#usedIds.add(freeId2);
          if (!this.#usedIds.has(this.#usedIds.size - 1)) {
            this.#freeIds.add(this.#usedIds.size - 1);
          }
          return freeId2;
        }
        const freeId = this.#usedIds.size;
        this.#usedIds.add(freeId);
        return freeId;
      }
      free(id) {
        if (!this.#usedIds.delete(id)) {
          throw new errors_js_1.InternalError("Freeing an id that is not allocated");
        }
        this.#freeIds.delete(this.#usedIds.size);
        if (id < this.#usedIds.size) {
          this.#freeIds.add(id);
        }
      }
    };
    exports.IdAlloc = IdAlloc;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/util.js
var require_util5 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/util.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.impossible = void 0;
    var errors_js_1 = require_errors();
    function impossible(value, message) {
      throw new errors_js_1.InternalError(message);
    }
    __name(impossible, "impossible");
    exports.impossible = impossible;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/value.js
var require_value = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/value.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.valueFromProto = exports.valueToProto = void 0;
    var errors_js_1 = require_errors();
    var util_js_1 = require_util5();
    function valueToProto(value) {
      if (value === null) {
        return null;
      } else if (typeof value === "string") {
        return value;
      } else if (typeof value === "number") {
        if (!Number.isFinite(value)) {
          throw new RangeError("Only finite numbers (not Infinity or NaN) can be passed as arguments");
        }
        return value;
      } else if (typeof value === "bigint") {
        if (value < minInteger || value > maxInteger) {
          throw new RangeError("This bigint value is too large to be represented as a 64-bit integer and passed as argument");
        }
        return value;
      } else if (typeof value === "boolean") {
        return value ? 1n : 0n;
      } else if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
      } else if (value instanceof Uint8Array) {
        return value;
      } else if (value instanceof Date) {
        return +value.valueOf();
      } else if (typeof value === "object") {
        return "" + value.toString();
      } else {
        throw new TypeError("Unsupported type of value");
      }
    }
    __name(valueToProto, "valueToProto");
    exports.valueToProto = valueToProto;
    var minInteger = -9223372036854775808n;
    var maxInteger = 9223372036854775807n;
    function valueFromProto(value, intMode) {
      if (value === null) {
        return null;
      } else if (typeof value === "number") {
        return value;
      } else if (typeof value === "string") {
        return value;
      } else if (typeof value === "bigint") {
        if (intMode === "number") {
          const num = Number(value);
          if (!Number.isSafeInteger(num)) {
            throw new RangeError("Received integer which is too large to be safely represented as a JavaScript number");
          }
          return num;
        } else if (intMode === "bigint") {
          return value;
        } else if (intMode === "string") {
          return "" + value;
        } else {
          throw new errors_js_1.MisuseError("Invalid value for IntMode");
        }
      } else if (value instanceof Uint8Array) {
        return value.slice().buffer;
      } else if (value === void 0) {
        throw new errors_js_1.ProtoError("Received unrecognized type of Value");
      } else {
        throw (0, util_js_1.impossible)(value, "Impossible type of Value");
      }
    }
    __name(valueFromProto, "valueFromProto");
    exports.valueFromProto = valueFromProto;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/result.js
var require_result = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/result.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorFromProto = exports.valueResultFromProto = exports.rowResultFromProto = exports.rowsResultFromProto = exports.stmtResultFromProto = void 0;
    var errors_js_1 = require_errors();
    var value_js_1 = require_value();
    function stmtResultFromProto(result) {
      return {
        affectedRowCount: result.affectedRowCount,
        lastInsertRowid: result.lastInsertRowid,
        columnNames: result.cols.map((col) => col.name),
        columnDecltypes: result.cols.map((col) => col.decltype)
      };
    }
    __name(stmtResultFromProto, "stmtResultFromProto");
    exports.stmtResultFromProto = stmtResultFromProto;
    function rowsResultFromProto(result, intMode) {
      const stmtResult = stmtResultFromProto(result);
      const rows = result.rows.map((row) => rowFromProto(stmtResult.columnNames, row, intMode));
      return { ...stmtResult, rows };
    }
    __name(rowsResultFromProto, "rowsResultFromProto");
    exports.rowsResultFromProto = rowsResultFromProto;
    function rowResultFromProto(result, intMode) {
      const stmtResult = stmtResultFromProto(result);
      let row;
      if (result.rows.length > 0) {
        row = rowFromProto(stmtResult.columnNames, result.rows[0], intMode);
      }
      return { ...stmtResult, row };
    }
    __name(rowResultFromProto, "rowResultFromProto");
    exports.rowResultFromProto = rowResultFromProto;
    function valueResultFromProto(result, intMode) {
      const stmtResult = stmtResultFromProto(result);
      let value;
      if (result.rows.length > 0 && stmtResult.columnNames.length > 0) {
        value = (0, value_js_1.valueFromProto)(result.rows[0][0], intMode);
      }
      return { ...stmtResult, value };
    }
    __name(valueResultFromProto, "valueResultFromProto");
    exports.valueResultFromProto = valueResultFromProto;
    function rowFromProto(colNames, values, intMode) {
      const row = {};
      Object.defineProperty(row, "length", { value: values.length });
      for (let i = 0; i < values.length; ++i) {
        const value = (0, value_js_1.valueFromProto)(values[i], intMode);
        Object.defineProperty(row, i, { value });
        const colName = colNames[i];
        if (colName !== void 0 && !Object.hasOwn(row, colName)) {
          Object.defineProperty(row, colName, { value, enumerable: true, configurable: true, writable: true });
        }
      }
      return row;
    }
    __name(rowFromProto, "rowFromProto");
    function errorFromProto(error) {
      return new errors_js_1.ResponseError(error.message, error);
    }
    __name(errorFromProto, "errorFromProto");
    exports.errorFromProto = errorFromProto;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/sql.js
var require_sql = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/sql.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sqlToProto = exports.Sql = void 0;
    var errors_js_1 = require_errors();
    var Sql = class {
      static {
        __name(this, "Sql");
      }
      #owner;
      #sqlId;
      #closed;
      /** @private */
      constructor(owner, sqlId) {
        this.#owner = owner;
        this.#sqlId = sqlId;
        this.#closed = void 0;
      }
      /** @private */
      _getSqlId(owner) {
        if (this.#owner !== owner) {
          throw new errors_js_1.MisuseError("Attempted to use SQL text opened with other object");
        } else if (this.#closed !== void 0) {
          throw new errors_js_1.ClosedError("SQL text is closed", this.#closed);
        }
        return this.#sqlId;
      }
      /** Remove the SQL text from the server, releasing resouces. */
      close() {
        this._setClosed(new errors_js_1.ClientError("SQL text was manually closed"));
      }
      /** @private */
      _setClosed(error) {
        if (this.#closed === void 0) {
          this.#closed = error;
          this.#owner._closeSql(this.#sqlId);
        }
      }
      /** True if the SQL text is closed (removed from the server). */
      get closed() {
        return this.#closed !== void 0;
      }
    };
    exports.Sql = Sql;
    function sqlToProto(owner, sql) {
      if (sql instanceof Sql) {
        return { sqlId: sql._getSqlId(owner) };
      } else {
        return { sql: "" + sql };
      }
    }
    __name(sqlToProto, "sqlToProto");
    exports.sqlToProto = sqlToProto;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/queue.js
var require_queue = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/queue.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Queue = void 0;
    var Queue = class {
      static {
        __name(this, "Queue");
      }
      #pushStack;
      #shiftStack;
      constructor() {
        this.#pushStack = [];
        this.#shiftStack = [];
      }
      get length() {
        return this.#pushStack.length + this.#shiftStack.length;
      }
      push(elem) {
        this.#pushStack.push(elem);
      }
      shift() {
        if (this.#shiftStack.length === 0 && this.#pushStack.length > 0) {
          this.#shiftStack = this.#pushStack.reverse();
          this.#pushStack = [];
        }
        return this.#shiftStack.pop();
      }
      first() {
        return this.#shiftStack.length !== 0 ? this.#shiftStack[this.#shiftStack.length - 1] : this.#pushStack[0];
      }
    };
    exports.Queue = Queue;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/stmt.js
var require_stmt = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/stmt.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stmtToProto = exports.Stmt = void 0;
    var sql_js_1 = require_sql();
    var value_js_1 = require_value();
    var Stmt = class {
      static {
        __name(this, "Stmt");
      }
      /** The SQL statement text. */
      sql;
      /** @private */
      _args;
      /** @private */
      _namedArgs;
      /** Initialize the statement with given SQL text. */
      constructor(sql) {
        this.sql = sql;
        this._args = [];
        this._namedArgs = /* @__PURE__ */ new Map();
      }
      /** Binds positional parameters from the given `values`. All previous positional bindings are cleared. */
      bindIndexes(values) {
        this._args.length = 0;
        for (const value of values) {
          this._args.push((0, value_js_1.valueToProto)(value));
        }
        return this;
      }
      /** Binds a parameter by a 1-based index. */
      bindIndex(index, value) {
        if (index !== (index | 0) || index <= 0) {
          throw new RangeError("Index of a positional argument must be positive integer");
        }
        while (this._args.length < index) {
          this._args.push(null);
        }
        this._args[index - 1] = (0, value_js_1.valueToProto)(value);
        return this;
      }
      /** Binds a parameter by name. */
      bindName(name, value) {
        this._namedArgs.set(name, (0, value_js_1.valueToProto)(value));
        return this;
      }
      /** Clears all bindings. */
      unbindAll() {
        this._args.length = 0;
        this._namedArgs.clear();
        return this;
      }
    };
    exports.Stmt = Stmt;
    function stmtToProto(sqlOwner, stmt, wantRows) {
      let inSql;
      let args = [];
      let namedArgs = [];
      if (stmt instanceof Stmt) {
        inSql = stmt.sql;
        args = stmt._args;
        for (const [name, value] of stmt._namedArgs.entries()) {
          namedArgs.push({ name, value });
        }
      } else if (Array.isArray(stmt)) {
        inSql = stmt[0];
        if (Array.isArray(stmt[1])) {
          args = stmt[1].map((arg) => (0, value_js_1.valueToProto)(arg));
        } else {
          namedArgs = Object.entries(stmt[1]).map(([name, value]) => {
            return { name, value: (0, value_js_1.valueToProto)(value) };
          });
        }
      } else {
        inSql = stmt;
      }
      const { sql, sqlId } = (0, sql_js_1.sqlToProto)(sqlOwner, inSql);
      return { sql, sqlId, args, namedArgs, wantRows };
    }
    __name(stmtToProto, "stmtToProto");
    exports.stmtToProto = stmtToProto;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/batch.js
var require_batch = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/batch.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BatchCond = exports.BatchStep = exports.Batch = void 0;
    var errors_js_1 = require_errors();
    var result_js_1 = require_result();
    var stmt_js_1 = require_stmt();
    var util_js_1 = require_util5();
    var Batch = class {
      static {
        __name(this, "Batch");
      }
      /** @private */
      _stream;
      #useCursor;
      /** @private */
      _steps;
      #executed;
      /** @private */
      constructor(stream, useCursor) {
        this._stream = stream;
        this.#useCursor = useCursor;
        this._steps = [];
        this.#executed = false;
      }
      /** Return a builder for adding a step to the batch. */
      step() {
        return new BatchStep(this);
      }
      /** Execute the batch. */
      execute() {
        if (this.#executed) {
          throw new errors_js_1.MisuseError("This batch has already been executed");
        }
        this.#executed = true;
        const batch = {
          steps: this._steps.map((step) => step.proto)
        };
        if (this.#useCursor) {
          return executeCursor(this._stream, this._steps, batch);
        } else {
          return executeRegular(this._stream, this._steps, batch);
        }
      }
    };
    exports.Batch = Batch;
    function executeRegular(stream, steps, batch) {
      return stream._batch(batch).then((result) => {
        for (let step = 0; step < steps.length; ++step) {
          const stepResult = result.stepResults.get(step);
          const stepError = result.stepErrors.get(step);
          steps[step].callback(stepResult, stepError);
        }
      });
    }
    __name(executeRegular, "executeRegular");
    async function executeCursor(stream, steps, batch) {
      const cursor = await stream._openCursor(batch);
      try {
        let nextStep = 0;
        let beginEntry = void 0;
        let rows = [];
        for (; ; ) {
          const entry = await cursor.next();
          if (entry === void 0) {
            break;
          }
          if (entry.type === "step_begin") {
            if (entry.step < nextStep || entry.step >= steps.length) {
              throw new errors_js_1.ProtoError("Server produced StepBeginEntry for unexpected step");
            } else if (beginEntry !== void 0) {
              throw new errors_js_1.ProtoError("Server produced StepBeginEntry before terminating previous step");
            }
            for (let step = nextStep; step < entry.step; ++step) {
              steps[step].callback(void 0, void 0);
            }
            nextStep = entry.step + 1;
            beginEntry = entry;
            rows = [];
          } else if (entry.type === "step_end") {
            if (beginEntry === void 0) {
              throw new errors_js_1.ProtoError("Server produced StepEndEntry but no step is active");
            }
            const stmtResult = {
              cols: beginEntry.cols,
              rows,
              affectedRowCount: entry.affectedRowCount,
              lastInsertRowid: entry.lastInsertRowid
            };
            steps[beginEntry.step].callback(stmtResult, void 0);
            beginEntry = void 0;
            rows = [];
          } else if (entry.type === "step_error") {
            if (beginEntry === void 0) {
              if (entry.step >= steps.length) {
                throw new errors_js_1.ProtoError("Server produced StepErrorEntry for unexpected step");
              }
              for (let step = nextStep; step < entry.step; ++step) {
                steps[step].callback(void 0, void 0);
              }
            } else {
              if (entry.step !== beginEntry.step) {
                throw new errors_js_1.ProtoError("Server produced StepErrorEntry for unexpected step");
              }
              beginEntry = void 0;
              rows = [];
            }
            steps[entry.step].callback(void 0, entry.error);
            nextStep = entry.step + 1;
          } else if (entry.type === "row") {
            if (beginEntry === void 0) {
              throw new errors_js_1.ProtoError("Server produced RowEntry but no step is active");
            }
            rows.push(entry.row);
          } else if (entry.type === "error") {
            throw (0, result_js_1.errorFromProto)(entry.error);
          } else if (entry.type === "none") {
            throw new errors_js_1.ProtoError("Server produced unrecognized CursorEntry");
          } else {
            throw (0, util_js_1.impossible)(entry, "Impossible CursorEntry");
          }
        }
        if (beginEntry !== void 0) {
          throw new errors_js_1.ProtoError("Server closed Cursor before terminating active step");
        }
        for (let step = nextStep; step < steps.length; ++step) {
          steps[step].callback(void 0, void 0);
        }
      } finally {
        cursor.close();
      }
    }
    __name(executeCursor, "executeCursor");
    var BatchStep = class {
      static {
        __name(this, "BatchStep");
      }
      /** @private */
      _batch;
      #conds;
      /** @private */
      _index;
      /** @private */
      constructor(batch) {
        this._batch = batch;
        this.#conds = [];
        this._index = void 0;
      }
      /** Add the condition that needs to be satisfied to execute the statement. If you use this method multiple
       * times, we join the conditions with a logical AND. */
      condition(cond) {
        this.#conds.push(cond._proto);
        return this;
      }
      /** Add a statement that returns rows. */
      query(stmt) {
        return this.#add(stmt, true, result_js_1.rowsResultFromProto);
      }
      /** Add a statement that returns at most a single row. */
      queryRow(stmt) {
        return this.#add(stmt, true, result_js_1.rowResultFromProto);
      }
      /** Add a statement that returns at most a single value. */
      queryValue(stmt) {
        return this.#add(stmt, true, result_js_1.valueResultFromProto);
      }
      /** Add a statement without returning rows. */
      run(stmt) {
        return this.#add(stmt, false, result_js_1.stmtResultFromProto);
      }
      #add(inStmt, wantRows, fromProto) {
        if (this._index !== void 0) {
          throw new errors_js_1.MisuseError("This BatchStep has already been added to the batch");
        }
        const stmt = (0, stmt_js_1.stmtToProto)(this._batch._stream._sqlOwner(), inStmt, wantRows);
        let condition;
        if (this.#conds.length === 0) {
          condition = void 0;
        } else if (this.#conds.length === 1) {
          condition = this.#conds[0];
        } else {
          condition = { type: "and", conds: this.#conds.slice() };
        }
        const proto = { stmt, condition };
        return new Promise((outputCallback, errorCallback) => {
          const callback = /* @__PURE__ */ __name((stepResult, stepError) => {
            if (stepResult !== void 0 && stepError !== void 0) {
              errorCallback(new errors_js_1.ProtoError("Server returned both result and error"));
            } else if (stepError !== void 0) {
              errorCallback((0, result_js_1.errorFromProto)(stepError));
            } else if (stepResult !== void 0) {
              outputCallback(fromProto(stepResult, this._batch._stream.intMode));
            } else {
              outputCallback(void 0);
            }
          }, "callback");
          this._index = this._batch._steps.length;
          this._batch._steps.push({ proto, callback });
        });
      }
    };
    exports.BatchStep = BatchStep;
    var BatchCond = class _BatchCond {
      static {
        __name(this, "BatchCond");
      }
      /** @private */
      _batch;
      /** @private */
      _proto;
      /** @private */
      constructor(batch, proto) {
        this._batch = batch;
        this._proto = proto;
      }
      /** Create a condition that evaluates to true when the given step executes successfully.
       *
       * If the given step fails error or is skipped because its condition evaluated to false, this
       * condition evaluates to false.
       */
      static ok(step) {
        return new _BatchCond(step._batch, { type: "ok", step: stepIndex(step) });
      }
      /** Create a condition that evaluates to true when the given step fails.
       *
       * If the given step succeeds or is skipped because its condition evaluated to false, this condition
       * evaluates to false.
       */
      static error(step) {
        return new _BatchCond(step._batch, { type: "error", step: stepIndex(step) });
      }
      /** Create a condition that is a logical negation of another condition.
       */
      static not(cond) {
        return new _BatchCond(cond._batch, { type: "not", cond: cond._proto });
      }
      /** Create a condition that is a logical AND of other conditions.
       */
      static and(batch, conds) {
        for (const cond of conds) {
          checkCondBatch(batch, cond);
        }
        return new _BatchCond(batch, { type: "and", conds: conds.map((e) => e._proto) });
      }
      /** Create a condition that is a logical OR of other conditions.
       */
      static or(batch, conds) {
        for (const cond of conds) {
          checkCondBatch(batch, cond);
        }
        return new _BatchCond(batch, { type: "or", conds: conds.map((e) => e._proto) });
      }
      /** Create a condition that evaluates to true when the SQL connection is in autocommit mode (not inside an
       * explicit transaction). This requires protocol version 3 or higher.
       */
      static isAutocommit(batch) {
        batch._stream.client()._ensureVersion(3, "BatchCond.isAutocommit()");
        return new _BatchCond(batch, { type: "is_autocommit" });
      }
    };
    exports.BatchCond = BatchCond;
    function stepIndex(step) {
      if (step._index === void 0) {
        throw new errors_js_1.MisuseError("Cannot add a condition referencing a step that has not been added to the batch");
      }
      return step._index;
    }
    __name(stepIndex, "stepIndex");
    function checkCondBatch(expectedBatch, cond) {
      if (cond._batch !== expectedBatch) {
        throw new errors_js_1.MisuseError("Cannot mix BatchCond objects for different Batch objects");
      }
    }
    __name(checkCondBatch, "checkCondBatch");
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/describe.js
var require_describe = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/describe.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.describeResultFromProto = void 0;
    function describeResultFromProto(result) {
      return {
        paramNames: result.params.map((p) => p.name),
        columns: result.cols,
        isExplain: result.isExplain,
        isReadonly: result.isReadonly
      };
    }
    __name(describeResultFromProto, "describeResultFromProto");
    exports.describeResultFromProto = describeResultFromProto;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/stream.js
var require_stream2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/stream.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Stream = void 0;
    var batch_js_1 = require_batch();
    var describe_js_1 = require_describe();
    var result_js_1 = require_result();
    var sql_js_1 = require_sql();
    var stmt_js_1 = require_stmt();
    var Stream = class {
      static {
        __name(this, "Stream");
      }
      /** @private */
      constructor(intMode) {
        this.intMode = intMode;
      }
      /** Execute a statement and return rows. */
      query(stmt) {
        return this.#execute(stmt, true, result_js_1.rowsResultFromProto);
      }
      /** Execute a statement and return at most a single row. */
      queryRow(stmt) {
        return this.#execute(stmt, true, result_js_1.rowResultFromProto);
      }
      /** Execute a statement and return at most a single value. */
      queryValue(stmt) {
        return this.#execute(stmt, true, result_js_1.valueResultFromProto);
      }
      /** Execute a statement without returning rows. */
      run(stmt) {
        return this.#execute(stmt, false, result_js_1.stmtResultFromProto);
      }
      #execute(inStmt, wantRows, fromProto) {
        const stmt = (0, stmt_js_1.stmtToProto)(this._sqlOwner(), inStmt, wantRows);
        return this._execute(stmt).then((r) => fromProto(r, this.intMode));
      }
      /** Return a builder for creating and executing a batch.
       *
       * If `useCursor` is true, the batch will be executed using a Hrana cursor, which will stream results from
       * the server to the client, which consumes less memory on the server. This requires protocol version 3 or
       * higher.
       */
      batch(useCursor = false) {
        return new batch_js_1.Batch(this, useCursor);
      }
      /** Parse and analyze a statement. This requires protocol version 2 or higher. */
      describe(inSql) {
        const protoSql = (0, sql_js_1.sqlToProto)(this._sqlOwner(), inSql);
        return this._describe(protoSql).then(describe_js_1.describeResultFromProto);
      }
      /** Execute a sequence of statements separated by semicolons. This requires protocol version 2 or higher.
       * */
      sequence(inSql) {
        const protoSql = (0, sql_js_1.sqlToProto)(this._sqlOwner(), inSql);
        return this._sequence(protoSql);
      }
      /** Representation of integers returned from the database. See {@link IntMode}.
       *
       * This value affects the results of all operations on this stream.
       */
      intMode;
    };
    exports.Stream = Stream;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/cursor.js
var require_cursor = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/cursor.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cursor = void 0;
    var Cursor = class {
      static {
        __name(this, "Cursor");
      }
    };
    exports.Cursor = Cursor;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/ws/cursor.js
var require_cursor2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/ws/cursor.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WsCursor = void 0;
    var errors_js_1 = require_errors();
    var cursor_js_1 = require_cursor();
    var queue_js_1 = require_queue();
    var fetchChunkSize = 1e3;
    var fetchQueueSize = 10;
    var WsCursor = class extends cursor_js_1.Cursor {
      static {
        __name(this, "WsCursor");
      }
      #client;
      #stream;
      #cursorId;
      #entryQueue;
      #fetchQueue;
      #closed;
      #done;
      /** @private */
      constructor(client, stream, cursorId) {
        super();
        this.#client = client;
        this.#stream = stream;
        this.#cursorId = cursorId;
        this.#entryQueue = new queue_js_1.Queue();
        this.#fetchQueue = new queue_js_1.Queue();
        this.#closed = void 0;
        this.#done = false;
      }
      /** Fetch the next entry from the cursor. */
      async next() {
        for (; ; ) {
          if (this.#closed !== void 0) {
            throw new errors_js_1.ClosedError("Cursor is closed", this.#closed);
          }
          while (!this.#done && this.#fetchQueue.length < fetchQueueSize) {
            this.#fetchQueue.push(this.#fetch());
          }
          const entry = this.#entryQueue.shift();
          if (this.#done || entry !== void 0) {
            return entry;
          }
          await this.#fetchQueue.shift().then((response) => {
            if (response === void 0) {
              return;
            }
            for (const entry2 of response.entries) {
              this.#entryQueue.push(entry2);
            }
            this.#done ||= response.done;
          });
        }
      }
      #fetch() {
        return this.#stream._sendCursorRequest(this, {
          type: "fetch_cursor",
          cursorId: this.#cursorId,
          maxCount: fetchChunkSize
        }).then((resp) => resp, (error) => {
          this._setClosed(error);
          return void 0;
        });
      }
      /** @private */
      _setClosed(error) {
        if (this.#closed !== void 0) {
          return;
        }
        this.#closed = error;
        this.#stream._sendCursorRequest(this, {
          type: "close_cursor",
          cursorId: this.#cursorId
        }).catch(() => void 0);
        this.#stream._cursorClosed(this);
      }
      /** Close the cursor. */
      close() {
        this._setClosed(new errors_js_1.ClientError("Cursor was manually closed"));
      }
      /** True if the cursor is closed. */
      get closed() {
        return this.#closed !== void 0;
      }
    };
    exports.WsCursor = WsCursor;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/ws/stream.js
var require_stream3 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/ws/stream.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WsStream = void 0;
    var errors_js_1 = require_errors();
    var queue_js_1 = require_queue();
    var stream_js_1 = require_stream2();
    var cursor_js_1 = require_cursor2();
    var WsStream = class _WsStream extends stream_js_1.Stream {
      static {
        __name(this, "WsStream");
      }
      #client;
      #streamId;
      #queue;
      #cursor;
      #closing;
      #closed;
      /** @private */
      static open(client) {
        const streamId = client._streamIdAlloc.alloc();
        const stream = new _WsStream(client, streamId);
        const responseCallback = /* @__PURE__ */ __name(() => void 0, "responseCallback");
        const errorCallback = /* @__PURE__ */ __name((e) => stream.#setClosed(e), "errorCallback");
        const request = { type: "open_stream", streamId };
        client._sendRequest(request, { responseCallback, errorCallback });
        return stream;
      }
      /** @private */
      constructor(client, streamId) {
        super(client.intMode);
        this.#client = client;
        this.#streamId = streamId;
        this.#queue = new queue_js_1.Queue();
        this.#cursor = void 0;
        this.#closing = false;
        this.#closed = void 0;
      }
      /** Get the {@link WsClient} object that this stream belongs to. */
      client() {
        return this.#client;
      }
      /** @private */
      _sqlOwner() {
        return this.#client;
      }
      /** @private */
      _execute(stmt) {
        return this.#sendStreamRequest({
          type: "execute",
          streamId: this.#streamId,
          stmt
        }).then((response) => {
          return response.result;
        });
      }
      /** @private */
      _batch(batch) {
        return this.#sendStreamRequest({
          type: "batch",
          streamId: this.#streamId,
          batch
        }).then((response) => {
          return response.result;
        });
      }
      /** @private */
      _describe(protoSql) {
        this.#client._ensureVersion(2, "describe()");
        return this.#sendStreamRequest({
          type: "describe",
          streamId: this.#streamId,
          sql: protoSql.sql,
          sqlId: protoSql.sqlId
        }).then((response) => {
          return response.result;
        });
      }
      /** @private */
      _sequence(protoSql) {
        this.#client._ensureVersion(2, "sequence()");
        return this.#sendStreamRequest({
          type: "sequence",
          streamId: this.#streamId,
          sql: protoSql.sql,
          sqlId: protoSql.sqlId
        }).then((_response) => {
          return void 0;
        });
      }
      /** Check whether the SQL connection underlying this stream is in autocommit state (i.e., outside of an
       * explicit transaction). This requires protocol version 3 or higher.
       */
      getAutocommit() {
        this.#client._ensureVersion(3, "getAutocommit()");
        return this.#sendStreamRequest({
          type: "get_autocommit",
          streamId: this.#streamId
        }).then((response) => {
          return response.isAutocommit;
        });
      }
      #sendStreamRequest(request) {
        return new Promise((responseCallback, errorCallback) => {
          this.#pushToQueue({ type: "request", request, responseCallback, errorCallback });
        });
      }
      /** @private */
      _openCursor(batch) {
        this.#client._ensureVersion(3, "cursor");
        return new Promise((cursorCallback, errorCallback) => {
          this.#pushToQueue({ type: "cursor", batch, cursorCallback, errorCallback });
        });
      }
      /** @private */
      _sendCursorRequest(cursor, request) {
        if (cursor !== this.#cursor) {
          throw new errors_js_1.InternalError("Cursor not associated with the stream attempted to execute a request");
        }
        return new Promise((responseCallback, errorCallback) => {
          if (this.#closed !== void 0) {
            errorCallback(new errors_js_1.ClosedError("Stream is closed", this.#closed));
          } else {
            this.#client._sendRequest(request, { responseCallback, errorCallback });
          }
        });
      }
      /** @private */
      _cursorClosed(cursor) {
        if (cursor !== this.#cursor) {
          throw new errors_js_1.InternalError("Cursor was closed, but it was not associated with the stream");
        }
        this.#cursor = void 0;
        this.#flushQueue();
      }
      #pushToQueue(entry) {
        if (this.#closed !== void 0) {
          entry.errorCallback(new errors_js_1.ClosedError("Stream is closed", this.#closed));
        } else if (this.#closing) {
          entry.errorCallback(new errors_js_1.ClosedError("Stream is closing", void 0));
        } else {
          this.#queue.push(entry);
          this.#flushQueue();
        }
      }
      #flushQueue() {
        for (; ; ) {
          const entry = this.#queue.first();
          if (entry === void 0 && this.#cursor === void 0 && this.#closing) {
            this.#setClosed(new errors_js_1.ClientError("Stream was gracefully closed"));
            break;
          } else if (entry?.type === "request" && this.#cursor === void 0) {
            const { request, responseCallback, errorCallback } = entry;
            this.#queue.shift();
            this.#client._sendRequest(request, { responseCallback, errorCallback });
          } else if (entry?.type === "cursor" && this.#cursor === void 0) {
            const { batch, cursorCallback } = entry;
            this.#queue.shift();
            const cursorId = this.#client._cursorIdAlloc.alloc();
            const cursor = new cursor_js_1.WsCursor(this.#client, this, cursorId);
            const request = {
              type: "open_cursor",
              streamId: this.#streamId,
              cursorId,
              batch
            };
            const responseCallback = /* @__PURE__ */ __name(() => void 0, "responseCallback");
            const errorCallback = /* @__PURE__ */ __name((e) => cursor._setClosed(e), "errorCallback");
            this.#client._sendRequest(request, { responseCallback, errorCallback });
            this.#cursor = cursor;
            cursorCallback(cursor);
          } else {
            break;
          }
        }
      }
      #setClosed(error) {
        if (this.#closed !== void 0) {
          return;
        }
        this.#closed = error;
        if (this.#cursor !== void 0) {
          this.#cursor._setClosed(error);
        }
        for (; ; ) {
          const entry = this.#queue.shift();
          if (entry !== void 0) {
            entry.errorCallback(error);
          } else {
            break;
          }
        }
        const request = { type: "close_stream", streamId: this.#streamId };
        const responseCallback = /* @__PURE__ */ __name(() => this.#client._streamIdAlloc.free(this.#streamId), "responseCallback");
        const errorCallback = /* @__PURE__ */ __name(() => void 0, "errorCallback");
        this.#client._sendRequest(request, { responseCallback, errorCallback });
      }
      /** Immediately close the stream. */
      close() {
        this.#setClosed(new errors_js_1.ClientError("Stream was manually closed"));
      }
      /** Gracefully close the stream. */
      closeGracefully() {
        this.#closing = true;
        this.#flushQueue();
      }
      /** True if the stream is closed or closing. */
      get closed() {
        return this.#closed !== void 0 || this.#closing;
      }
    };
    exports.WsStream = WsStream;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/shared/json_encode.js
var require_json_encode = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/shared/json_encode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Batch = exports.Stmt = void 0;
    var js_base64_1 = require_base64();
    var util_js_1 = require_util5();
    function Stmt(w, msg) {
      if (msg.sql !== void 0) {
        w.string("sql", msg.sql);
      }
      if (msg.sqlId !== void 0) {
        w.number("sql_id", msg.sqlId);
      }
      w.arrayObjects("args", msg.args, Value);
      w.arrayObjects("named_args", msg.namedArgs, NamedArg);
      w.boolean("want_rows", msg.wantRows);
    }
    __name(Stmt, "Stmt");
    exports.Stmt = Stmt;
    function NamedArg(w, msg) {
      w.string("name", msg.name);
      w.object("value", msg.value, Value);
    }
    __name(NamedArg, "NamedArg");
    function Batch(w, msg) {
      w.arrayObjects("steps", msg.steps, BatchStep);
    }
    __name(Batch, "Batch");
    exports.Batch = Batch;
    function BatchStep(w, msg) {
      if (msg.condition !== void 0) {
        w.object("condition", msg.condition, BatchCond);
      }
      w.object("stmt", msg.stmt, Stmt);
    }
    __name(BatchStep, "BatchStep");
    function BatchCond(w, msg) {
      w.stringRaw("type", msg.type);
      if (msg.type === "ok" || msg.type === "error") {
        w.number("step", msg.step);
      } else if (msg.type === "not") {
        w.object("cond", msg.cond, BatchCond);
      } else if (msg.type === "and" || msg.type === "or") {
        w.arrayObjects("conds", msg.conds, BatchCond);
      } else if (msg.type === "is_autocommit") {
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of BatchCond");
      }
    }
    __name(BatchCond, "BatchCond");
    function Value(w, msg) {
      if (msg === null) {
        w.stringRaw("type", "null");
      } else if (typeof msg === "bigint") {
        w.stringRaw("type", "integer");
        w.stringRaw("value", "" + msg);
      } else if (typeof msg === "number") {
        w.stringRaw("type", "float");
        w.number("value", msg);
      } else if (typeof msg === "string") {
        w.stringRaw("type", "text");
        w.string("value", msg);
      } else if (msg instanceof Uint8Array) {
        w.stringRaw("type", "blob");
        w.stringRaw("base64", js_base64_1.Base64.fromUint8Array(msg));
      } else if (msg === void 0) {
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of Value");
      }
    }
    __name(Value, "Value");
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/ws/json_encode.js
var require_json_encode2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/ws/json_encode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClientMsg = void 0;
    var json_encode_js_1 = require_json_encode();
    var util_js_1 = require_util5();
    function ClientMsg(w, msg) {
      w.stringRaw("type", msg.type);
      if (msg.type === "hello") {
        if (msg.jwt !== void 0) {
          w.string("jwt", msg.jwt);
        }
      } else if (msg.type === "request") {
        w.number("request_id", msg.requestId);
        w.object("request", msg.request, Request2);
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of ClientMsg");
      }
    }
    __name(ClientMsg, "ClientMsg");
    exports.ClientMsg = ClientMsg;
    function Request2(w, msg) {
      w.stringRaw("type", msg.type);
      if (msg.type === "open_stream") {
        w.number("stream_id", msg.streamId);
      } else if (msg.type === "close_stream") {
        w.number("stream_id", msg.streamId);
      } else if (msg.type === "execute") {
        w.number("stream_id", msg.streamId);
        w.object("stmt", msg.stmt, json_encode_js_1.Stmt);
      } else if (msg.type === "batch") {
        w.number("stream_id", msg.streamId);
        w.object("batch", msg.batch, json_encode_js_1.Batch);
      } else if (msg.type === "open_cursor") {
        w.number("stream_id", msg.streamId);
        w.number("cursor_id", msg.cursorId);
        w.object("batch", msg.batch, json_encode_js_1.Batch);
      } else if (msg.type === "close_cursor") {
        w.number("cursor_id", msg.cursorId);
      } else if (msg.type === "fetch_cursor") {
        w.number("cursor_id", msg.cursorId);
        w.number("max_count", msg.maxCount);
      } else if (msg.type === "sequence") {
        w.number("stream_id", msg.streamId);
        if (msg.sql !== void 0) {
          w.string("sql", msg.sql);
        }
        if (msg.sqlId !== void 0) {
          w.number("sql_id", msg.sqlId);
        }
      } else if (msg.type === "describe") {
        w.number("stream_id", msg.streamId);
        if (msg.sql !== void 0) {
          w.string("sql", msg.sql);
        }
        if (msg.sqlId !== void 0) {
          w.number("sql_id", msg.sqlId);
        }
      } else if (msg.type === "store_sql") {
        w.number("sql_id", msg.sqlId);
        w.string("sql", msg.sql);
      } else if (msg.type === "close_sql") {
        w.number("sql_id", msg.sqlId);
      } else if (msg.type === "get_autocommit") {
        w.number("stream_id", msg.streamId);
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of Request");
      }
    }
    __name(Request2, "Request");
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/shared/protobuf_encode.js
var require_protobuf_encode = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/shared/protobuf_encode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Batch = exports.Stmt = void 0;
    var util_js_1 = require_util5();
    function Stmt(w, msg) {
      if (msg.sql !== void 0) {
        w.string(1, msg.sql);
      }
      if (msg.sqlId !== void 0) {
        w.int32(2, msg.sqlId);
      }
      for (const arg of msg.args) {
        w.message(3, arg, Value);
      }
      for (const arg of msg.namedArgs) {
        w.message(4, arg, NamedArg);
      }
      w.bool(5, msg.wantRows);
    }
    __name(Stmt, "Stmt");
    exports.Stmt = Stmt;
    function NamedArg(w, msg) {
      w.string(1, msg.name);
      w.message(2, msg.value, Value);
    }
    __name(NamedArg, "NamedArg");
    function Batch(w, msg) {
      for (const step of msg.steps) {
        w.message(1, step, BatchStep);
      }
    }
    __name(Batch, "Batch");
    exports.Batch = Batch;
    function BatchStep(w, msg) {
      if (msg.condition !== void 0) {
        w.message(1, msg.condition, BatchCond);
      }
      w.message(2, msg.stmt, Stmt);
    }
    __name(BatchStep, "BatchStep");
    function BatchCond(w, msg) {
      if (msg.type === "ok") {
        w.uint32(1, msg.step);
      } else if (msg.type === "error") {
        w.uint32(2, msg.step);
      } else if (msg.type === "not") {
        w.message(3, msg.cond, BatchCond);
      } else if (msg.type === "and") {
        w.message(4, msg.conds, BatchCondList);
      } else if (msg.type === "or") {
        w.message(5, msg.conds, BatchCondList);
      } else if (msg.type === "is_autocommit") {
        w.message(6, void 0, Empty);
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of BatchCond");
      }
    }
    __name(BatchCond, "BatchCond");
    function BatchCondList(w, msg) {
      for (const cond of msg) {
        w.message(1, cond, BatchCond);
      }
    }
    __name(BatchCondList, "BatchCondList");
    function Value(w, msg) {
      if (msg === null) {
        w.message(1, void 0, Empty);
      } else if (typeof msg === "bigint") {
        w.sint64(2, msg);
      } else if (typeof msg === "number") {
        w.double(3, msg);
      } else if (typeof msg === "string") {
        w.string(4, msg);
      } else if (msg instanceof Uint8Array) {
        w.bytes(5, msg);
      } else if (msg === void 0) {
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of Value");
      }
    }
    __name(Value, "Value");
    function Empty(_w, _msg) {
    }
    __name(Empty, "Empty");
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/ws/protobuf_encode.js
var require_protobuf_encode2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/ws/protobuf_encode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClientMsg = void 0;
    var protobuf_encode_js_1 = require_protobuf_encode();
    var util_js_1 = require_util5();
    function ClientMsg(w, msg) {
      if (msg.type === "hello") {
        w.message(1, msg, HelloMsg);
      } else if (msg.type === "request") {
        w.message(2, msg, RequestMsg);
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of ClientMsg");
      }
    }
    __name(ClientMsg, "ClientMsg");
    exports.ClientMsg = ClientMsg;
    function HelloMsg(w, msg) {
      if (msg.jwt !== void 0) {
        w.string(1, msg.jwt);
      }
    }
    __name(HelloMsg, "HelloMsg");
    function RequestMsg(w, msg) {
      w.int32(1, msg.requestId);
      const request = msg.request;
      if (request.type === "open_stream") {
        w.message(2, request, OpenStreamReq);
      } else if (request.type === "close_stream") {
        w.message(3, request, CloseStreamReq);
      } else if (request.type === "execute") {
        w.message(4, request, ExecuteReq);
      } else if (request.type === "batch") {
        w.message(5, request, BatchReq);
      } else if (request.type === "open_cursor") {
        w.message(6, request, OpenCursorReq);
      } else if (request.type === "close_cursor") {
        w.message(7, request, CloseCursorReq);
      } else if (request.type === "fetch_cursor") {
        w.message(8, request, FetchCursorReq);
      } else if (request.type === "sequence") {
        w.message(9, request, SequenceReq);
      } else if (request.type === "describe") {
        w.message(10, request, DescribeReq);
      } else if (request.type === "store_sql") {
        w.message(11, request, StoreSqlReq);
      } else if (request.type === "close_sql") {
        w.message(12, request, CloseSqlReq);
      } else if (request.type === "get_autocommit") {
        w.message(13, request, GetAutocommitReq);
      } else {
        throw (0, util_js_1.impossible)(request, "Impossible type of Request");
      }
    }
    __name(RequestMsg, "RequestMsg");
    function OpenStreamReq(w, msg) {
      w.int32(1, msg.streamId);
    }
    __name(OpenStreamReq, "OpenStreamReq");
    function CloseStreamReq(w, msg) {
      w.int32(1, msg.streamId);
    }
    __name(CloseStreamReq, "CloseStreamReq");
    function ExecuteReq(w, msg) {
      w.int32(1, msg.streamId);
      w.message(2, msg.stmt, protobuf_encode_js_1.Stmt);
    }
    __name(ExecuteReq, "ExecuteReq");
    function BatchReq(w, msg) {
      w.int32(1, msg.streamId);
      w.message(2, msg.batch, protobuf_encode_js_1.Batch);
    }
    __name(BatchReq, "BatchReq");
    function OpenCursorReq(w, msg) {
      w.int32(1, msg.streamId);
      w.int32(2, msg.cursorId);
      w.message(3, msg.batch, protobuf_encode_js_1.Batch);
    }
    __name(OpenCursorReq, "OpenCursorReq");
    function CloseCursorReq(w, msg) {
      w.int32(1, msg.cursorId);
    }
    __name(CloseCursorReq, "CloseCursorReq");
    function FetchCursorReq(w, msg) {
      w.int32(1, msg.cursorId);
      w.uint32(2, msg.maxCount);
    }
    __name(FetchCursorReq, "FetchCursorReq");
    function SequenceReq(w, msg) {
      w.int32(1, msg.streamId);
      if (msg.sql !== void 0) {
        w.string(2, msg.sql);
      }
      if (msg.sqlId !== void 0) {
        w.int32(3, msg.sqlId);
      }
    }
    __name(SequenceReq, "SequenceReq");
    function DescribeReq(w, msg) {
      w.int32(1, msg.streamId);
      if (msg.sql !== void 0) {
        w.string(2, msg.sql);
      }
      if (msg.sqlId !== void 0) {
        w.int32(3, msg.sqlId);
      }
    }
    __name(DescribeReq, "DescribeReq");
    function StoreSqlReq(w, msg) {
      w.int32(1, msg.sqlId);
      w.string(2, msg.sql);
    }
    __name(StoreSqlReq, "StoreSqlReq");
    function CloseSqlReq(w, msg) {
      w.int32(1, msg.sqlId);
    }
    __name(CloseSqlReq, "CloseSqlReq");
    function GetAutocommitReq(w, msg) {
      w.int32(1, msg.streamId);
    }
    __name(GetAutocommitReq, "GetAutocommitReq");
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/shared/json_decode.js
var require_json_decode = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/shared/json_decode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Value = exports.DescribeResult = exports.CursorEntry = exports.BatchResult = exports.StmtResult = exports.Error = void 0;
    var js_base64_1 = require_base64();
    var errors_js_1 = require_errors();
    var d = __importStar(require_decode());
    function Error2(obj) {
      const message = d.string(obj["message"]);
      const code = d.stringOpt(obj["code"]);
      return { message, code };
    }
    __name(Error2, "Error");
    exports.Error = Error2;
    function StmtResult(obj) {
      const cols = d.arrayObjectsMap(obj["cols"], Col);
      const rows = d.array(obj["rows"]).map((rowObj) => d.arrayObjectsMap(rowObj, Value));
      const affectedRowCount = d.number(obj["affected_row_count"]);
      const lastInsertRowidStr = d.stringOpt(obj["last_insert_rowid"]);
      const lastInsertRowid = lastInsertRowidStr !== void 0 ? BigInt(lastInsertRowidStr) : void 0;
      return { cols, rows, affectedRowCount, lastInsertRowid };
    }
    __name(StmtResult, "StmtResult");
    exports.StmtResult = StmtResult;
    function Col(obj) {
      const name = d.stringOpt(obj["name"]);
      const decltype = d.stringOpt(obj["decltype"]);
      return { name, decltype };
    }
    __name(Col, "Col");
    function BatchResult(obj) {
      const stepResults = /* @__PURE__ */ new Map();
      d.array(obj["step_results"]).forEach((value, i) => {
        if (value !== null) {
          stepResults.set(i, StmtResult(d.object(value)));
        }
      });
      const stepErrors = /* @__PURE__ */ new Map();
      d.array(obj["step_errors"]).forEach((value, i) => {
        if (value !== null) {
          stepErrors.set(i, Error2(d.object(value)));
        }
      });
      return { stepResults, stepErrors };
    }
    __name(BatchResult, "BatchResult");
    exports.BatchResult = BatchResult;
    function CursorEntry(obj) {
      const type = d.string(obj["type"]);
      if (type === "step_begin") {
        const step = d.number(obj["step"]);
        const cols = d.arrayObjectsMap(obj["cols"], Col);
        return { type: "step_begin", step, cols };
      } else if (type === "step_end") {
        const affectedRowCount = d.number(obj["affected_row_count"]);
        const lastInsertRowidStr = d.stringOpt(obj["last_insert_rowid"]);
        const lastInsertRowid = lastInsertRowidStr !== void 0 ? BigInt(lastInsertRowidStr) : void 0;
        return { type: "step_end", affectedRowCount, lastInsertRowid };
      } else if (type === "step_error") {
        const step = d.number(obj["step"]);
        const error = Error2(d.object(obj["error"]));
        return { type: "step_error", step, error };
      } else if (type === "row") {
        const row = d.arrayObjectsMap(obj["row"], Value);
        return { type: "row", row };
      } else if (type === "error") {
        const error = Error2(d.object(obj["error"]));
        return { type: "error", error };
      } else {
        throw new errors_js_1.ProtoError("Unexpected type of CursorEntry");
      }
    }
    __name(CursorEntry, "CursorEntry");
    exports.CursorEntry = CursorEntry;
    function DescribeResult(obj) {
      const params = d.arrayObjectsMap(obj["params"], DescribeParam);
      const cols = d.arrayObjectsMap(obj["cols"], DescribeCol);
      const isExplain = d.boolean(obj["is_explain"]);
      const isReadonly = d.boolean(obj["is_readonly"]);
      return { params, cols, isExplain, isReadonly };
    }
    __name(DescribeResult, "DescribeResult");
    exports.DescribeResult = DescribeResult;
    function DescribeParam(obj) {
      const name = d.stringOpt(obj["name"]);
      return { name };
    }
    __name(DescribeParam, "DescribeParam");
    function DescribeCol(obj) {
      const name = d.string(obj["name"]);
      const decltype = d.stringOpt(obj["decltype"]);
      return { name, decltype };
    }
    __name(DescribeCol, "DescribeCol");
    function Value(obj) {
      const type = d.string(obj["type"]);
      if (type === "null") {
        return null;
      } else if (type === "integer") {
        const value = d.string(obj["value"]);
        return BigInt(value);
      } else if (type === "float") {
        return d.number(obj["value"]);
      } else if (type === "text") {
        return d.string(obj["value"]);
      } else if (type === "blob") {
        return js_base64_1.Base64.toUint8Array(d.string(obj["base64"]));
      } else {
        throw new errors_js_1.ProtoError("Unexpected type of Value");
      }
    }
    __name(Value, "Value");
    exports.Value = Value;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/ws/json_decode.js
var require_json_decode2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/ws/json_decode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerMsg = void 0;
    var errors_js_1 = require_errors();
    var d = __importStar(require_decode());
    var json_decode_js_1 = require_json_decode();
    function ServerMsg(obj) {
      const type = d.string(obj["type"]);
      if (type === "hello_ok") {
        return { type: "hello_ok" };
      } else if (type === "hello_error") {
        const error = (0, json_decode_js_1.Error)(d.object(obj["error"]));
        return { type: "hello_error", error };
      } else if (type === "response_ok") {
        const requestId = d.number(obj["request_id"]);
        const response = Response(d.object(obj["response"]));
        return { type: "response_ok", requestId, response };
      } else if (type === "response_error") {
        const requestId = d.number(obj["request_id"]);
        const error = (0, json_decode_js_1.Error)(d.object(obj["error"]));
        return { type: "response_error", requestId, error };
      } else {
        throw new errors_js_1.ProtoError("Unexpected type of ServerMsg");
      }
    }
    __name(ServerMsg, "ServerMsg");
    exports.ServerMsg = ServerMsg;
    function Response(obj) {
      const type = d.string(obj["type"]);
      if (type === "open_stream") {
        return { type: "open_stream" };
      } else if (type === "close_stream") {
        return { type: "close_stream" };
      } else if (type === "execute") {
        const result = (0, json_decode_js_1.StmtResult)(d.object(obj["result"]));
        return { type: "execute", result };
      } else if (type === "batch") {
        const result = (0, json_decode_js_1.BatchResult)(d.object(obj["result"]));
        return { type: "batch", result };
      } else if (type === "open_cursor") {
        return { type: "open_cursor" };
      } else if (type === "close_cursor") {
        return { type: "close_cursor" };
      } else if (type === "fetch_cursor") {
        const entries = d.arrayObjectsMap(obj["entries"], json_decode_js_1.CursorEntry);
        const done = d.boolean(obj["done"]);
        return { type: "fetch_cursor", entries, done };
      } else if (type === "sequence") {
        return { type: "sequence" };
      } else if (type === "describe") {
        const result = (0, json_decode_js_1.DescribeResult)(d.object(obj["result"]));
        return { type: "describe", result };
      } else if (type === "store_sql") {
        return { type: "store_sql" };
      } else if (type === "close_sql") {
        return { type: "close_sql" };
      } else if (type === "get_autocommit") {
        const isAutocommit = d.boolean(obj["is_autocommit"]);
        return { type: "get_autocommit", isAutocommit };
      } else {
        throw new errors_js_1.ProtoError("Unexpected type of Response");
      }
    }
    __name(Response, "Response");
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/shared/protobuf_decode.js
var require_protobuf_decode = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/shared/protobuf_decode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DescribeResult = exports.CursorEntry = exports.BatchResult = exports.StmtResult = exports.Error = void 0;
    exports.Error = {
      default() {
        return { message: "", code: void 0 };
      },
      1(r, msg) {
        msg.message = r.string();
      },
      2(r, msg) {
        msg.code = r.string();
      }
    };
    exports.StmtResult = {
      default() {
        return {
          cols: [],
          rows: [],
          affectedRowCount: 0,
          lastInsertRowid: void 0
        };
      },
      1(r, msg) {
        msg.cols.push(r.message(Col));
      },
      2(r, msg) {
        msg.rows.push(r.message(Row));
      },
      3(r, msg) {
        msg.affectedRowCount = Number(r.uint64());
      },
      4(r, msg) {
        msg.lastInsertRowid = r.sint64();
      }
    };
    var Col = {
      default() {
        return { name: void 0, decltype: void 0 };
      },
      1(r, msg) {
        msg.name = r.string();
      },
      2(r, msg) {
        msg.decltype = r.string();
      }
    };
    var Row = {
      default() {
        return [];
      },
      1(r, msg) {
        msg.push(r.message(Value));
      }
    };
    exports.BatchResult = {
      default() {
        return { stepResults: /* @__PURE__ */ new Map(), stepErrors: /* @__PURE__ */ new Map() };
      },
      1(r, msg) {
        const [key, value] = r.message(BatchResultStepResult);
        msg.stepResults.set(key, value);
      },
      2(r, msg) {
        const [key, value] = r.message(BatchResultStepError);
        msg.stepErrors.set(key, value);
      }
    };
    var BatchResultStepResult = {
      default() {
        return [0, exports.StmtResult.default()];
      },
      1(r, msg) {
        msg[0] = r.uint32();
      },
      2(r, msg) {
        msg[1] = r.message(exports.StmtResult);
      }
    };
    var BatchResultStepError = {
      default() {
        return [0, exports.Error.default()];
      },
      1(r, msg) {
        msg[0] = r.uint32();
      },
      2(r, msg) {
        msg[1] = r.message(exports.Error);
      }
    };
    exports.CursorEntry = {
      default() {
        return { type: "none" };
      },
      1(r) {
        return r.message(StepBeginEntry);
      },
      2(r) {
        return r.message(StepEndEntry);
      },
      3(r) {
        return r.message(StepErrorEntry);
      },
      4(r) {
        return { type: "row", row: r.message(Row) };
      },
      5(r) {
        return { type: "error", error: r.message(exports.Error) };
      }
    };
    var StepBeginEntry = {
      default() {
        return { type: "step_begin", step: 0, cols: [] };
      },
      1(r, msg) {
        msg.step = r.uint32();
      },
      2(r, msg) {
        msg.cols.push(r.message(Col));
      }
    };
    var StepEndEntry = {
      default() {
        return {
          type: "step_end",
          affectedRowCount: 0,
          lastInsertRowid: void 0
        };
      },
      1(r, msg) {
        msg.affectedRowCount = r.uint32();
      },
      2(r, msg) {
        msg.lastInsertRowid = r.uint64();
      }
    };
    var StepErrorEntry = {
      default() {
        return {
          type: "step_error",
          step: 0,
          error: exports.Error.default()
        };
      },
      1(r, msg) {
        msg.step = r.uint32();
      },
      2(r, msg) {
        msg.error = r.message(exports.Error);
      }
    };
    exports.DescribeResult = {
      default() {
        return {
          params: [],
          cols: [],
          isExplain: false,
          isReadonly: false
        };
      },
      1(r, msg) {
        msg.params.push(r.message(DescribeParam));
      },
      2(r, msg) {
        msg.cols.push(r.message(DescribeCol));
      },
      3(r, msg) {
        msg.isExplain = r.bool();
      },
      4(r, msg) {
        msg.isReadonly = r.bool();
      }
    };
    var DescribeParam = {
      default() {
        return { name: void 0 };
      },
      1(r, msg) {
        msg.name = r.string();
      }
    };
    var DescribeCol = {
      default() {
        return { name: "", decltype: void 0 };
      },
      1(r, msg) {
        msg.name = r.string();
      },
      2(r, msg) {
        msg.decltype = r.string();
      }
    };
    var Value = {
      default() {
        return void 0;
      },
      1(r) {
        return null;
      },
      2(r) {
        return r.sint64();
      },
      3(r) {
        return r.double();
      },
      4(r) {
        return r.string();
      },
      5(r) {
        return r.bytes();
      }
    };
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/ws/protobuf_decode.js
var require_protobuf_decode2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/ws/protobuf_decode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerMsg = void 0;
    var protobuf_decode_js_1 = require_protobuf_decode();
    exports.ServerMsg = {
      default() {
        return { type: "none" };
      },
      1(r) {
        return { type: "hello_ok" };
      },
      2(r) {
        return r.message(HelloErrorMsg);
      },
      3(r) {
        return r.message(ResponseOkMsg);
      },
      4(r) {
        return r.message(ResponseErrorMsg);
      }
    };
    var HelloErrorMsg = {
      default() {
        return { type: "hello_error", error: protobuf_decode_js_1.Error.default() };
      },
      1(r, msg) {
        msg.error = r.message(protobuf_decode_js_1.Error);
      }
    };
    var ResponseErrorMsg = {
      default() {
        return { type: "response_error", requestId: 0, error: protobuf_decode_js_1.Error.default() };
      },
      1(r, msg) {
        msg.requestId = r.int32();
      },
      2(r, msg) {
        msg.error = r.message(protobuf_decode_js_1.Error);
      }
    };
    var ResponseOkMsg = {
      default() {
        return {
          type: "response_ok",
          requestId: 0,
          response: { type: "none" }
        };
      },
      1(r, msg) {
        msg.requestId = r.int32();
      },
      2(r, msg) {
        msg.response = { type: "open_stream" };
      },
      3(r, msg) {
        msg.response = { type: "close_stream" };
      },
      4(r, msg) {
        msg.response = r.message(ExecuteResp);
      },
      5(r, msg) {
        msg.response = r.message(BatchResp);
      },
      6(r, msg) {
        msg.response = { type: "open_cursor" };
      },
      7(r, msg) {
        msg.response = { type: "close_cursor" };
      },
      8(r, msg) {
        msg.response = r.message(FetchCursorResp);
      },
      9(r, msg) {
        msg.response = { type: "sequence" };
      },
      10(r, msg) {
        msg.response = r.message(DescribeResp);
      },
      11(r, msg) {
        msg.response = { type: "store_sql" };
      },
      12(r, msg) {
        msg.response = { type: "close_sql" };
      },
      13(r, msg) {
        msg.response = r.message(GetAutocommitResp);
      }
    };
    var ExecuteResp = {
      default() {
        return { type: "execute", result: protobuf_decode_js_1.StmtResult.default() };
      },
      1(r, msg) {
        msg.result = r.message(protobuf_decode_js_1.StmtResult);
      }
    };
    var BatchResp = {
      default() {
        return { type: "batch", result: protobuf_decode_js_1.BatchResult.default() };
      },
      1(r, msg) {
        msg.result = r.message(protobuf_decode_js_1.BatchResult);
      }
    };
    var FetchCursorResp = {
      default() {
        return { type: "fetch_cursor", entries: [], done: false };
      },
      1(r, msg) {
        msg.entries.push(r.message(protobuf_decode_js_1.CursorEntry));
      },
      2(r, msg) {
        msg.done = r.bool();
      }
    };
    var DescribeResp = {
      default() {
        return { type: "describe", result: protobuf_decode_js_1.DescribeResult.default() };
      },
      1(r, msg) {
        msg.result = r.message(protobuf_decode_js_1.DescribeResult);
      }
    };
    var GetAutocommitResp = {
      default() {
        return { type: "get_autocommit", isAutocommit: false };
      },
      1(r, msg) {
        msg.isAutocommit = r.bool();
      }
    };
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/ws/client.js
var require_client2 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/ws/client.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WsClient = exports.subprotocolsV3 = exports.subprotocolsV2 = void 0;
    var client_js_1 = require_client();
    var index_js_1 = require_encoding2();
    var errors_js_1 = require_errors();
    var id_alloc_js_1 = require_id_alloc();
    var result_js_1 = require_result();
    var sql_js_1 = require_sql();
    var util_js_1 = require_util5();
    var stream_js_1 = require_stream3();
    var json_encode_js_1 = require_json_encode2();
    var protobuf_encode_js_1 = require_protobuf_encode2();
    var json_decode_js_1 = require_json_decode2();
    var protobuf_decode_js_1 = require_protobuf_decode2();
    exports.subprotocolsV2 = /* @__PURE__ */ new Map([
      ["hrana2", { version: 2, encoding: "json" }],
      ["hrana1", { version: 1, encoding: "json" }]
    ]);
    exports.subprotocolsV3 = /* @__PURE__ */ new Map([
      ["hrana3-protobuf", { version: 3, encoding: "protobuf" }],
      ["hrana3", { version: 3, encoding: "json" }],
      ["hrana2", { version: 2, encoding: "json" }],
      ["hrana1", { version: 1, encoding: "json" }]
    ]);
    var WsClient = class extends client_js_1.Client {
      static {
        __name(this, "WsClient");
      }
      #socket;
      // List of callbacks that we queue until the socket transitions from the CONNECTING to the OPEN state.
      #openCallbacks;
      // Have we already transitioned from CONNECTING to OPEN and fired the callbacks in #openCallbacks?
      #opened;
      // Stores the error that caused us to close the client (and the socket). If we are not closed, this is
      // `undefined`.
      #closed;
      // Have we received a response to our "hello" from the server?
      #recvdHello;
      // Subprotocol negotiated with the server. It is only available after the socket transitions to the OPEN
      // state.
      #subprotocol;
      // Has the `getVersion()` function been called? This is only used to validate that the API is used
      // correctly.
      #getVersionCalled;
      // A map from request id to the responses that we expect to receive from the server.
      #responseMap;
      // An allocator of request ids.
      #requestIdAlloc;
      // An allocator of stream ids.
      /** @private */
      _streamIdAlloc;
      // An allocator of cursor ids.
      /** @private */
      _cursorIdAlloc;
      // An allocator of SQL text ids.
      #sqlIdAlloc;
      /** @private */
      constructor(socket, jwt) {
        super();
        this.#socket = socket;
        this.#openCallbacks = [];
        this.#opened = false;
        this.#closed = void 0;
        this.#recvdHello = false;
        this.#subprotocol = void 0;
        this.#getVersionCalled = false;
        this.#responseMap = /* @__PURE__ */ new Map();
        this.#requestIdAlloc = new id_alloc_js_1.IdAlloc();
        this._streamIdAlloc = new id_alloc_js_1.IdAlloc();
        this._cursorIdAlloc = new id_alloc_js_1.IdAlloc();
        this.#sqlIdAlloc = new id_alloc_js_1.IdAlloc();
        this.#socket.binaryType = "arraybuffer";
        this.#socket.addEventListener("open", () => this.#onSocketOpen());
        this.#socket.addEventListener("close", (event) => this.#onSocketClose(event));
        this.#socket.addEventListener("error", (event) => this.#onSocketError(event));
        this.#socket.addEventListener("message", (event) => this.#onSocketMessage(event));
        this.#send({ type: "hello", jwt });
      }
      // Send (or enqueue to send) a message to the server.
      #send(msg) {
        if (this.#closed !== void 0) {
          throw new errors_js_1.InternalError("Trying to send a message on a closed client");
        }
        if (this.#opened) {
          this.#sendToSocket(msg);
        } else {
          const openCallback = /* @__PURE__ */ __name(() => this.#sendToSocket(msg), "openCallback");
          const errorCallback = /* @__PURE__ */ __name(() => void 0, "errorCallback");
          this.#openCallbacks.push({ openCallback, errorCallback });
        }
      }
      // The socket transitioned from CONNECTING to OPEN
      #onSocketOpen() {
        const protocol = this.#socket.protocol;
        if (protocol === void 0) {
          this.#setClosed(new errors_js_1.ClientError("The `WebSocket.protocol` property is undefined. This most likely means that the WebSocket implementation provided by the environment is broken. If you are using Miniflare 2, please update to Miniflare 3, which fixes this problem."));
          return;
        } else if (protocol === "") {
          this.#subprotocol = { version: 1, encoding: "json" };
        } else {
          this.#subprotocol = exports.subprotocolsV3.get(protocol);
          if (this.#subprotocol === void 0) {
            this.#setClosed(new errors_js_1.ProtoError(`Unrecognized WebSocket subprotocol: ${JSON.stringify(protocol)}`));
            return;
          }
        }
        for (const callbacks of this.#openCallbacks) {
          callbacks.openCallback();
        }
        this.#openCallbacks.length = 0;
        this.#opened = true;
      }
      #sendToSocket(msg) {
        const encoding = this.#subprotocol.encoding;
        if (encoding === "json") {
          const jsonMsg = (0, index_js_1.writeJsonObject)(msg, json_encode_js_1.ClientMsg);
          this.#socket.send(jsonMsg);
        } else if (encoding === "protobuf") {
          const protobufMsg = (0, index_js_1.writeProtobufMessage)(msg, protobuf_encode_js_1.ClientMsg);
          this.#socket.send(protobufMsg);
        } else {
          throw (0, util_js_1.impossible)(encoding, "Impossible encoding");
        }
      }
      /** Get the protocol version negotiated with the server, possibly waiting until the socket is open. */
      getVersion() {
        return new Promise((versionCallback, errorCallback) => {
          this.#getVersionCalled = true;
          if (this.#closed !== void 0) {
            errorCallback(this.#closed);
          } else if (!this.#opened) {
            const openCallback = /* @__PURE__ */ __name(() => versionCallback(this.#subprotocol.version), "openCallback");
            this.#openCallbacks.push({ openCallback, errorCallback });
          } else {
            versionCallback(this.#subprotocol.version);
          }
        });
      }
      // Make sure that the negotiated version is at least `minVersion`.
      /** @private */
      _ensureVersion(minVersion, feature) {
        if (this.#subprotocol === void 0 || !this.#getVersionCalled) {
          throw new errors_js_1.ProtocolVersionError(`${feature} is supported only on protocol version ${minVersion} and higher, but the version supported by the WebSocket server is not yet known. Use Client.getVersion() to wait until the version is available.`);
        } else if (this.#subprotocol.version < minVersion) {
          throw new errors_js_1.ProtocolVersionError(`${feature} is supported on protocol version ${minVersion} and higher, but the WebSocket server only supports version ${this.#subprotocol.version}`);
        }
      }
      // Send a request to the server and invoke a callback when we get the response.
      /** @private */
      _sendRequest(request, callbacks) {
        if (this.#closed !== void 0) {
          callbacks.errorCallback(new errors_js_1.ClosedError("Client is closed", this.#closed));
          return;
        }
        const requestId = this.#requestIdAlloc.alloc();
        this.#responseMap.set(requestId, { ...callbacks, type: request.type });
        this.#send({ type: "request", requestId, request });
      }
      // The socket encountered an error.
      #onSocketError(event) {
        const eventMessage = event.message;
        const message = eventMessage ?? "WebSocket was closed due to an error";
        this.#setClosed(new errors_js_1.WebSocketError(message));
      }
      // The socket was closed.
      #onSocketClose(event) {
        let message = `WebSocket was closed with code ${event.code}`;
        if (event.reason) {
          message += `: ${event.reason}`;
        }
        this.#setClosed(new errors_js_1.WebSocketError(message));
      }
      // Close the client with the given error.
      #setClosed(error) {
        if (this.#closed !== void 0) {
          return;
        }
        this.#closed = error;
        for (const callbacks of this.#openCallbacks) {
          callbacks.errorCallback(error);
        }
        this.#openCallbacks.length = 0;
        for (const [requestId, responseState] of this.#responseMap.entries()) {
          responseState.errorCallback(error);
          this.#requestIdAlloc.free(requestId);
        }
        this.#responseMap.clear();
        this.#socket.close();
      }
      // We received a message from the socket.
      #onSocketMessage(event) {
        if (this.#closed !== void 0) {
          return;
        }
        try {
          let msg;
          const encoding = this.#subprotocol.encoding;
          if (encoding === "json") {
            if (typeof event.data !== "string") {
              this.#socket.close(3003, "Only text messages are accepted with JSON encoding");
              this.#setClosed(new errors_js_1.ProtoError("Received non-text message from server with JSON encoding"));
              return;
            }
            msg = (0, index_js_1.readJsonObject)(JSON.parse(event.data), json_decode_js_1.ServerMsg);
          } else if (encoding === "protobuf") {
            if (!(event.data instanceof ArrayBuffer)) {
              this.#socket.close(3003, "Only binary messages are accepted with Protobuf encoding");
              this.#setClosed(new errors_js_1.ProtoError("Received non-binary message from server with Protobuf encoding"));
              return;
            }
            msg = (0, index_js_1.readProtobufMessage)(new Uint8Array(event.data), protobuf_decode_js_1.ServerMsg);
          } else {
            throw (0, util_js_1.impossible)(encoding, "Impossible encoding");
          }
          this.#handleMsg(msg);
        } catch (e) {
          this.#socket.close(3007, "Could not handle message");
          this.#setClosed(e);
        }
      }
      // Handle a message from the server.
      #handleMsg(msg) {
        if (msg.type === "none") {
          throw new errors_js_1.ProtoError("Received an unrecognized ServerMsg");
        } else if (msg.type === "hello_ok" || msg.type === "hello_error") {
          if (this.#recvdHello) {
            throw new errors_js_1.ProtoError("Received a duplicated hello response");
          }
          this.#recvdHello = true;
          if (msg.type === "hello_error") {
            throw (0, result_js_1.errorFromProto)(msg.error);
          }
          return;
        } else if (!this.#recvdHello) {
          throw new errors_js_1.ProtoError("Received a non-hello message before a hello response");
        }
        if (msg.type === "response_ok") {
          const requestId = msg.requestId;
          const responseState = this.#responseMap.get(requestId);
          this.#responseMap.delete(requestId);
          if (responseState === void 0) {
            throw new errors_js_1.ProtoError("Received unexpected OK response");
          }
          this.#requestIdAlloc.free(requestId);
          try {
            if (responseState.type !== msg.response.type) {
              console.dir({ responseState, msg });
              throw new errors_js_1.ProtoError("Received unexpected type of response");
            }
            responseState.responseCallback(msg.response);
          } catch (e) {
            responseState.errorCallback(e);
            throw e;
          }
        } else if (msg.type === "response_error") {
          const requestId = msg.requestId;
          const responseState = this.#responseMap.get(requestId);
          this.#responseMap.delete(requestId);
          if (responseState === void 0) {
            throw new errors_js_1.ProtoError("Received unexpected error response");
          }
          this.#requestIdAlloc.free(requestId);
          responseState.errorCallback((0, result_js_1.errorFromProto)(msg.error));
        } else {
          throw (0, util_js_1.impossible)(msg, "Impossible ServerMsg type");
        }
      }
      /** Open a {@link WsStream}, a stream for executing SQL statements. */
      openStream() {
        return stream_js_1.WsStream.open(this);
      }
      /** Cache a SQL text on the server. This requires protocol version 2 or higher. */
      storeSql(sql) {
        this._ensureVersion(2, "storeSql()");
        const sqlId = this.#sqlIdAlloc.alloc();
        const sqlObj = new sql_js_1.Sql(this, sqlId);
        const responseCallback = /* @__PURE__ */ __name(() => void 0, "responseCallback");
        const errorCallback = /* @__PURE__ */ __name((e) => sqlObj._setClosed(e), "errorCallback");
        const request = { type: "store_sql", sqlId, sql };
        this._sendRequest(request, { responseCallback, errorCallback });
        return sqlObj;
      }
      /** @private */
      _closeSql(sqlId) {
        if (this.#closed !== void 0) {
          return;
        }
        const responseCallback = /* @__PURE__ */ __name(() => this.#sqlIdAlloc.free(sqlId), "responseCallback");
        const errorCallback = /* @__PURE__ */ __name((e) => this.#setClosed(e), "errorCallback");
        const request = { type: "close_sql", sqlId };
        this._sendRequest(request, { responseCallback, errorCallback });
      }
      /** Close the client and the WebSocket. */
      close() {
        this.#setClosed(new errors_js_1.ClientError("Client was manually closed"));
      }
      /** True if the client is closed. */
      get closed() {
        return this.#closed !== void 0;
      }
    };
    exports.WsClient = WsClient;
  }
});

// node_modules/@libsql/isomorphic-fetch/web.cjs
var require_web2 = __commonJS({
  "node_modules/@libsql/isomorphic-fetch/web.cjs"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports.fetch = fetch;
    module.exports.Request = Request;
    module.exports.Headers = Headers;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/queue_microtask.js
var require_queue_microtask = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/queue_microtask.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.queueMicrotask = void 0;
    var _queueMicrotask;
    if (typeof queueMicrotask !== "undefined") {
      exports.queueMicrotask = _queueMicrotask = queueMicrotask;
    } else {
      const resolved = Promise.resolve();
      exports.queueMicrotask = _queueMicrotask = /* @__PURE__ */ __name((callback) => {
        resolved.then(callback);
      }, "_queueMicrotask");
    }
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/byte_queue.js
var require_byte_queue = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/byte_queue.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ByteQueue = void 0;
    var ByteQueue = class {
      static {
        __name(this, "ByteQueue");
      }
      #array;
      #shiftPos;
      #pushPos;
      constructor(initialCap) {
        this.#array = new Uint8Array(new ArrayBuffer(initialCap));
        this.#shiftPos = 0;
        this.#pushPos = 0;
      }
      get length() {
        return this.#pushPos - this.#shiftPos;
      }
      data() {
        return this.#array.slice(this.#shiftPos, this.#pushPos);
      }
      push(chunk) {
        this.#ensurePush(chunk.byteLength);
        this.#array.set(chunk, this.#pushPos);
        this.#pushPos += chunk.byteLength;
      }
      #ensurePush(pushLength) {
        if (this.#pushPos + pushLength <= this.#array.byteLength) {
          return;
        }
        const filledLength = this.#pushPos - this.#shiftPos;
        if (filledLength + pushLength <= this.#array.byteLength && 2 * this.#pushPos >= this.#array.byteLength) {
          this.#array.copyWithin(0, this.#shiftPos, this.#pushPos);
        } else {
          let newCap = this.#array.byteLength;
          do {
            newCap *= 2;
          } while (filledLength + pushLength > newCap);
          const newArray = new Uint8Array(new ArrayBuffer(newCap));
          newArray.set(this.#array.slice(this.#shiftPos, this.#pushPos), 0);
          this.#array = newArray;
        }
        this.#pushPos = filledLength;
        this.#shiftPos = 0;
      }
      shift(length) {
        this.#shiftPos += length;
      }
    };
    exports.ByteQueue = ByteQueue;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/http/json_decode.js
var require_json_decode3 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/http/json_decode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CursorRespBody = exports.PipelineRespBody = void 0;
    var errors_js_1 = require_errors();
    var d = __importStar(require_decode());
    var json_decode_js_1 = require_json_decode();
    function PipelineRespBody(obj) {
      const baton = d.stringOpt(obj["baton"]);
      const baseUrl = d.stringOpt(obj["base_url"]);
      const results = d.arrayObjectsMap(obj["results"], StreamResult);
      return { baton, baseUrl, results };
    }
    __name(PipelineRespBody, "PipelineRespBody");
    exports.PipelineRespBody = PipelineRespBody;
    function StreamResult(obj) {
      const type = d.string(obj["type"]);
      if (type === "ok") {
        const response = StreamResponse(d.object(obj["response"]));
        return { type: "ok", response };
      } else if (type === "error") {
        const error = (0, json_decode_js_1.Error)(d.object(obj["error"]));
        return { type: "error", error };
      } else {
        throw new errors_js_1.ProtoError("Unexpected type of StreamResult");
      }
    }
    __name(StreamResult, "StreamResult");
    function StreamResponse(obj) {
      const type = d.string(obj["type"]);
      if (type === "close") {
        return { type: "close" };
      } else if (type === "execute") {
        const result = (0, json_decode_js_1.StmtResult)(d.object(obj["result"]));
        return { type: "execute", result };
      } else if (type === "batch") {
        const result = (0, json_decode_js_1.BatchResult)(d.object(obj["result"]));
        return { type: "batch", result };
      } else if (type === "sequence") {
        return { type: "sequence" };
      } else if (type === "describe") {
        const result = (0, json_decode_js_1.DescribeResult)(d.object(obj["result"]));
        return { type: "describe", result };
      } else if (type === "store_sql") {
        return { type: "store_sql" };
      } else if (type === "close_sql") {
        return { type: "close_sql" };
      } else if (type === "get_autocommit") {
        const isAutocommit = d.boolean(obj["is_autocommit"]);
        return { type: "get_autocommit", isAutocommit };
      } else {
        throw new errors_js_1.ProtoError("Unexpected type of StreamResponse");
      }
    }
    __name(StreamResponse, "StreamResponse");
    function CursorRespBody(obj) {
      const baton = d.stringOpt(obj["baton"]);
      const baseUrl = d.stringOpt(obj["base_url"]);
      return { baton, baseUrl };
    }
    __name(CursorRespBody, "CursorRespBody");
    exports.CursorRespBody = CursorRespBody;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/http/protobuf_decode.js
var require_protobuf_decode3 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/http/protobuf_decode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CursorRespBody = exports.PipelineRespBody = void 0;
    var protobuf_decode_js_1 = require_protobuf_decode();
    exports.PipelineRespBody = {
      default() {
        return { baton: void 0, baseUrl: void 0, results: [] };
      },
      1(r, msg) {
        msg.baton = r.string();
      },
      2(r, msg) {
        msg.baseUrl = r.string();
      },
      3(r, msg) {
        msg.results.push(r.message(StreamResult));
      }
    };
    var StreamResult = {
      default() {
        return { type: "none" };
      },
      1(r) {
        return { type: "ok", response: r.message(StreamResponse) };
      },
      2(r) {
        return { type: "error", error: r.message(protobuf_decode_js_1.Error) };
      }
    };
    var StreamResponse = {
      default() {
        return { type: "none" };
      },
      1(r) {
        return { type: "close" };
      },
      2(r) {
        return r.message(ExecuteStreamResp);
      },
      3(r) {
        return r.message(BatchStreamResp);
      },
      4(r) {
        return { type: "sequence" };
      },
      5(r) {
        return r.message(DescribeStreamResp);
      },
      6(r) {
        return { type: "store_sql" };
      },
      7(r) {
        return { type: "close_sql" };
      },
      8(r) {
        return r.message(GetAutocommitStreamResp);
      }
    };
    var ExecuteStreamResp = {
      default() {
        return { type: "execute", result: protobuf_decode_js_1.StmtResult.default() };
      },
      1(r, msg) {
        msg.result = r.message(protobuf_decode_js_1.StmtResult);
      }
    };
    var BatchStreamResp = {
      default() {
        return { type: "batch", result: protobuf_decode_js_1.BatchResult.default() };
      },
      1(r, msg) {
        msg.result = r.message(protobuf_decode_js_1.BatchResult);
      }
    };
    var DescribeStreamResp = {
      default() {
        return { type: "describe", result: protobuf_decode_js_1.DescribeResult.default() };
      },
      1(r, msg) {
        msg.result = r.message(protobuf_decode_js_1.DescribeResult);
      }
    };
    var GetAutocommitStreamResp = {
      default() {
        return { type: "get_autocommit", isAutocommit: false };
      },
      1(r, msg) {
        msg.isAutocommit = r.bool();
      }
    };
    exports.CursorRespBody = {
      default() {
        return { baton: void 0, baseUrl: void 0 };
      },
      1(r, msg) {
        msg.baton = r.string();
      },
      2(r, msg) {
        msg.baseUrl = r.string();
      }
    };
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/http/cursor.js
var require_cursor3 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/http/cursor.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpCursor = void 0;
    var byte_queue_js_1 = require_byte_queue();
    var cursor_js_1 = require_cursor();
    var jsond = __importStar(require_decode());
    var protobufd = __importStar(require_decode2());
    var errors_js_1 = require_errors();
    var util_js_1 = require_util5();
    var json_decode_js_1 = require_json_decode3();
    var protobuf_decode_js_1 = require_protobuf_decode3();
    var json_decode_js_2 = require_json_decode();
    var protobuf_decode_js_2 = require_protobuf_decode();
    var HttpCursor = class extends cursor_js_1.Cursor {
      static {
        __name(this, "HttpCursor");
      }
      #stream;
      #encoding;
      #reader;
      #queue;
      #closed;
      #done;
      /** @private */
      constructor(stream, encoding) {
        super();
        this.#stream = stream;
        this.#encoding = encoding;
        this.#reader = void 0;
        this.#queue = new byte_queue_js_1.ByteQueue(16 * 1024);
        this.#closed = void 0;
        this.#done = false;
      }
      async open(response) {
        if (response.body === null) {
          throw new errors_js_1.ProtoError("No response body for cursor request");
        }
        this.#reader = response.body.getReader();
        const respBody = await this.#nextItem(json_decode_js_1.CursorRespBody, protobuf_decode_js_1.CursorRespBody);
        if (respBody === void 0) {
          throw new errors_js_1.ProtoError("Empty response to cursor request");
        }
        return respBody;
      }
      /** Fetch the next entry from the cursor. */
      next() {
        return this.#nextItem(json_decode_js_2.CursorEntry, protobuf_decode_js_2.CursorEntry);
      }
      /** Close the cursor. */
      close() {
        this._setClosed(new errors_js_1.ClientError("Cursor was manually closed"));
      }
      /** @private */
      _setClosed(error) {
        if (this.#closed !== void 0) {
          return;
        }
        this.#closed = error;
        this.#stream._cursorClosed(this);
        if (this.#reader !== void 0) {
          this.#reader.cancel();
        }
      }
      /** True if the cursor is closed. */
      get closed() {
        return this.#closed !== void 0;
      }
      async #nextItem(jsonFun, protobufDef) {
        for (; ; ) {
          if (this.#done) {
            return void 0;
          } else if (this.#closed !== void 0) {
            throw new errors_js_1.ClosedError("Cursor is closed", this.#closed);
          }
          if (this.#encoding === "json") {
            const jsonData = this.#parseItemJson();
            if (jsonData !== void 0) {
              const jsonText = new TextDecoder().decode(jsonData);
              const jsonValue = JSON.parse(jsonText);
              return jsond.readJsonObject(jsonValue, jsonFun);
            }
          } else if (this.#encoding === "protobuf") {
            const protobufData = this.#parseItemProtobuf();
            if (protobufData !== void 0) {
              return protobufd.readProtobufMessage(protobufData, protobufDef);
            }
          } else {
            throw (0, util_js_1.impossible)(this.#encoding, "Impossible encoding");
          }
          if (this.#reader === void 0) {
            throw new errors_js_1.InternalError("Attempted to read from HTTP cursor before it was opened");
          }
          const { value, done } = await this.#reader.read();
          if (done && this.#queue.length === 0) {
            this.#done = true;
          } else if (done) {
            throw new errors_js_1.ProtoError("Unexpected end of cursor stream");
          } else {
            this.#queue.push(value);
          }
        }
      }
      #parseItemJson() {
        const data = this.#queue.data();
        const newlineByte = 10;
        const newlinePos = data.indexOf(newlineByte);
        if (newlinePos < 0) {
          return void 0;
        }
        const jsonData = data.slice(0, newlinePos);
        this.#queue.shift(newlinePos + 1);
        return jsonData;
      }
      #parseItemProtobuf() {
        const data = this.#queue.data();
        let varintValue = 0;
        let varintLength = 0;
        for (; ; ) {
          if (varintLength >= data.byteLength) {
            return void 0;
          }
          const byte = data[varintLength];
          varintValue |= (byte & 127) << 7 * varintLength;
          varintLength += 1;
          if (!(byte & 128)) {
            break;
          }
        }
        if (data.byteLength < varintLength + varintValue) {
          return void 0;
        }
        const protobufData = data.slice(varintLength, varintLength + varintValue);
        this.#queue.shift(varintLength + varintValue);
        return protobufData;
      }
    };
    exports.HttpCursor = HttpCursor;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/http/json_encode.js
var require_json_encode3 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/http/json_encode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CursorReqBody = exports.PipelineReqBody = void 0;
    var json_encode_js_1 = require_json_encode();
    var util_js_1 = require_util5();
    function PipelineReqBody(w, msg) {
      if (msg.baton !== void 0) {
        w.string("baton", msg.baton);
      }
      w.arrayObjects("requests", msg.requests, StreamRequest);
    }
    __name(PipelineReqBody, "PipelineReqBody");
    exports.PipelineReqBody = PipelineReqBody;
    function StreamRequest(w, msg) {
      w.stringRaw("type", msg.type);
      if (msg.type === "close") {
      } else if (msg.type === "execute") {
        w.object("stmt", msg.stmt, json_encode_js_1.Stmt);
      } else if (msg.type === "batch") {
        w.object("batch", msg.batch, json_encode_js_1.Batch);
      } else if (msg.type === "sequence") {
        if (msg.sql !== void 0) {
          w.string("sql", msg.sql);
        }
        if (msg.sqlId !== void 0) {
          w.number("sql_id", msg.sqlId);
        }
      } else if (msg.type === "describe") {
        if (msg.sql !== void 0) {
          w.string("sql", msg.sql);
        }
        if (msg.sqlId !== void 0) {
          w.number("sql_id", msg.sqlId);
        }
      } else if (msg.type === "store_sql") {
        w.number("sql_id", msg.sqlId);
        w.string("sql", msg.sql);
      } else if (msg.type === "close_sql") {
        w.number("sql_id", msg.sqlId);
      } else if (msg.type === "get_autocommit") {
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of StreamRequest");
      }
    }
    __name(StreamRequest, "StreamRequest");
    function CursorReqBody(w, msg) {
      if (msg.baton !== void 0) {
        w.string("baton", msg.baton);
      }
      w.object("batch", msg.batch, json_encode_js_1.Batch);
    }
    __name(CursorReqBody, "CursorReqBody");
    exports.CursorReqBody = CursorReqBody;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/http/protobuf_encode.js
var require_protobuf_encode3 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/http/protobuf_encode.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CursorReqBody = exports.PipelineReqBody = void 0;
    var protobuf_encode_js_1 = require_protobuf_encode();
    var util_js_1 = require_util5();
    function PipelineReqBody(w, msg) {
      if (msg.baton !== void 0) {
        w.string(1, msg.baton);
      }
      for (const req of msg.requests) {
        w.message(2, req, StreamRequest);
      }
    }
    __name(PipelineReqBody, "PipelineReqBody");
    exports.PipelineReqBody = PipelineReqBody;
    function StreamRequest(w, msg) {
      if (msg.type === "close") {
        w.message(1, msg, CloseStreamReq);
      } else if (msg.type === "execute") {
        w.message(2, msg, ExecuteStreamReq);
      } else if (msg.type === "batch") {
        w.message(3, msg, BatchStreamReq);
      } else if (msg.type === "sequence") {
        w.message(4, msg, SequenceStreamReq);
      } else if (msg.type === "describe") {
        w.message(5, msg, DescribeStreamReq);
      } else if (msg.type === "store_sql") {
        w.message(6, msg, StoreSqlStreamReq);
      } else if (msg.type === "close_sql") {
        w.message(7, msg, CloseSqlStreamReq);
      } else if (msg.type === "get_autocommit") {
        w.message(8, msg, GetAutocommitStreamReq);
      } else {
        throw (0, util_js_1.impossible)(msg, "Impossible type of StreamRequest");
      }
    }
    __name(StreamRequest, "StreamRequest");
    function CloseStreamReq(_w, _msg) {
    }
    __name(CloseStreamReq, "CloseStreamReq");
    function ExecuteStreamReq(w, msg) {
      w.message(1, msg.stmt, protobuf_encode_js_1.Stmt);
    }
    __name(ExecuteStreamReq, "ExecuteStreamReq");
    function BatchStreamReq(w, msg) {
      w.message(1, msg.batch, protobuf_encode_js_1.Batch);
    }
    __name(BatchStreamReq, "BatchStreamReq");
    function SequenceStreamReq(w, msg) {
      if (msg.sql !== void 0) {
        w.string(1, msg.sql);
      }
      if (msg.sqlId !== void 0) {
        w.int32(2, msg.sqlId);
      }
    }
    __name(SequenceStreamReq, "SequenceStreamReq");
    function DescribeStreamReq(w, msg) {
      if (msg.sql !== void 0) {
        w.string(1, msg.sql);
      }
      if (msg.sqlId !== void 0) {
        w.int32(2, msg.sqlId);
      }
    }
    __name(DescribeStreamReq, "DescribeStreamReq");
    function StoreSqlStreamReq(w, msg) {
      w.int32(1, msg.sqlId);
      w.string(2, msg.sql);
    }
    __name(StoreSqlStreamReq, "StoreSqlStreamReq");
    function CloseSqlStreamReq(w, msg) {
      w.int32(1, msg.sqlId);
    }
    __name(CloseSqlStreamReq, "CloseSqlStreamReq");
    function GetAutocommitStreamReq(_w, _msg) {
    }
    __name(GetAutocommitStreamReq, "GetAutocommitStreamReq");
    function CursorReqBody(w, msg) {
      if (msg.baton !== void 0) {
        w.string(1, msg.baton);
      }
      w.message(2, msg.batch, protobuf_encode_js_1.Batch);
    }
    __name(CursorReqBody, "CursorReqBody");
    exports.CursorReqBody = CursorReqBody;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/http/stream.js
var require_stream4 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/http/stream.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpStream = void 0;
    var isomorphic_fetch_1 = require_web2();
    var errors_js_1 = require_errors();
    var index_js_1 = require_encoding2();
    var id_alloc_js_1 = require_id_alloc();
    var queue_js_1 = require_queue();
    var queue_microtask_js_1 = require_queue_microtask();
    var result_js_1 = require_result();
    var sql_js_1 = require_sql();
    var stream_js_1 = require_stream2();
    var util_js_1 = require_util5();
    var cursor_js_1 = require_cursor3();
    var json_encode_js_1 = require_json_encode3();
    var protobuf_encode_js_1 = require_protobuf_encode3();
    var json_encode_js_2 = require_json_encode3();
    var protobuf_encode_js_2 = require_protobuf_encode3();
    var json_decode_js_1 = require_json_decode3();
    var protobuf_decode_js_1 = require_protobuf_decode3();
    var HttpStream = class extends stream_js_1.Stream {
      static {
        __name(this, "HttpStream");
      }
      #client;
      #baseUrl;
      #jwt;
      #fetch;
      #baton;
      #queue;
      #flushing;
      #cursor;
      #closing;
      #closeQueued;
      #closed;
      #sqlIdAlloc;
      /** @private */
      constructor(client, baseUrl, jwt, customFetch) {
        super(client.intMode);
        this.#client = client;
        this.#baseUrl = baseUrl.toString();
        this.#jwt = jwt;
        this.#fetch = customFetch;
        this.#baton = void 0;
        this.#queue = new queue_js_1.Queue();
        this.#flushing = false;
        this.#closing = false;
        this.#closeQueued = false;
        this.#closed = void 0;
        this.#sqlIdAlloc = new id_alloc_js_1.IdAlloc();
      }
      /** Get the {@link HttpClient} object that this stream belongs to. */
      client() {
        return this.#client;
      }
      /** @private */
      _sqlOwner() {
        return this;
      }
      /** Cache a SQL text on the server. */
      storeSql(sql) {
        const sqlId = this.#sqlIdAlloc.alloc();
        this.#sendStreamRequest({ type: "store_sql", sqlId, sql }).then(() => void 0, (error) => this._setClosed(error));
        return new sql_js_1.Sql(this, sqlId);
      }
      /** @private */
      _closeSql(sqlId) {
        if (this.#closed !== void 0) {
          return;
        }
        this.#sendStreamRequest({ type: "close_sql", sqlId }).then(() => this.#sqlIdAlloc.free(sqlId), (error) => this._setClosed(error));
      }
      /** @private */
      _execute(stmt) {
        return this.#sendStreamRequest({ type: "execute", stmt }).then((response) => {
          return response.result;
        });
      }
      /** @private */
      _batch(batch) {
        return this.#sendStreamRequest({ type: "batch", batch }).then((response) => {
          return response.result;
        });
      }
      /** @private */
      _describe(protoSql) {
        return this.#sendStreamRequest({
          type: "describe",
          sql: protoSql.sql,
          sqlId: protoSql.sqlId
        }).then((response) => {
          return response.result;
        });
      }
      /** @private */
      _sequence(protoSql) {
        return this.#sendStreamRequest({
          type: "sequence",
          sql: protoSql.sql,
          sqlId: protoSql.sqlId
        }).then((_response) => {
          return void 0;
        });
      }
      /** Check whether the SQL connection underlying this stream is in autocommit state (i.e., outside of an
       * explicit transaction). This requires protocol version 3 or higher.
       */
      getAutocommit() {
        this.#client._ensureVersion(3, "getAutocommit()");
        return this.#sendStreamRequest({
          type: "get_autocommit"
        }).then((response) => {
          return response.isAutocommit;
        });
      }
      #sendStreamRequest(request) {
        return new Promise((responseCallback, errorCallback) => {
          this.#pushToQueue({ type: "pipeline", request, responseCallback, errorCallback });
        });
      }
      /** @private */
      _openCursor(batch) {
        return new Promise((cursorCallback, errorCallback) => {
          this.#pushToQueue({ type: "cursor", batch, cursorCallback, errorCallback });
        });
      }
      /** @private */
      _cursorClosed(cursor) {
        if (cursor !== this.#cursor) {
          throw new errors_js_1.InternalError("Cursor was closed, but it was not associated with the stream");
        }
        this.#cursor = void 0;
        (0, queue_microtask_js_1.queueMicrotask)(() => this.#flushQueue());
      }
      /** Immediately close the stream. */
      close() {
        this._setClosed(new errors_js_1.ClientError("Stream was manually closed"));
      }
      /** Gracefully close the stream. */
      closeGracefully() {
        this.#closing = true;
        (0, queue_microtask_js_1.queueMicrotask)(() => this.#flushQueue());
      }
      /** True if the stream is closed. */
      get closed() {
        return this.#closed !== void 0 || this.#closing;
      }
      /** @private */
      _setClosed(error) {
        if (this.#closed !== void 0) {
          return;
        }
        this.#closed = error;
        if (this.#cursor !== void 0) {
          this.#cursor._setClosed(error);
        }
        this.#client._streamClosed(this);
        for (; ; ) {
          const entry = this.#queue.shift();
          if (entry !== void 0) {
            entry.errorCallback(error);
          } else {
            break;
          }
        }
        if ((this.#baton !== void 0 || this.#flushing) && !this.#closeQueued) {
          this.#queue.push({
            type: "pipeline",
            request: { type: "close" },
            responseCallback: /* @__PURE__ */ __name(() => void 0, "responseCallback"),
            errorCallback: /* @__PURE__ */ __name(() => void 0, "errorCallback")
          });
          this.#closeQueued = true;
          (0, queue_microtask_js_1.queueMicrotask)(() => this.#flushQueue());
        }
      }
      #pushToQueue(entry) {
        if (this.#closed !== void 0) {
          throw new errors_js_1.ClosedError("Stream is closed", this.#closed);
        } else if (this.#closing) {
          throw new errors_js_1.ClosedError("Stream is closing", void 0);
        } else {
          this.#queue.push(entry);
          (0, queue_microtask_js_1.queueMicrotask)(() => this.#flushQueue());
        }
      }
      #flushQueue() {
        if (this.#flushing || this.#cursor !== void 0) {
          return;
        }
        if (this.#closing && this.#queue.length === 0) {
          this._setClosed(new errors_js_1.ClientError("Stream was gracefully closed"));
          return;
        }
        const endpoint = this.#client._endpoint;
        if (endpoint === void 0) {
          this.#client._endpointPromise.then(() => this.#flushQueue(), (error) => this._setClosed(error));
          return;
        }
        const firstEntry = this.#queue.shift();
        if (firstEntry === void 0) {
          return;
        } else if (firstEntry.type === "pipeline") {
          const pipeline = [firstEntry];
          for (; ; ) {
            const entry = this.#queue.first();
            if (entry !== void 0 && entry.type === "pipeline") {
              pipeline.push(entry);
              this.#queue.shift();
            } else if (entry === void 0 && this.#closing && !this.#closeQueued) {
              pipeline.push({
                type: "pipeline",
                request: { type: "close" },
                responseCallback: /* @__PURE__ */ __name(() => void 0, "responseCallback"),
                errorCallback: /* @__PURE__ */ __name(() => void 0, "errorCallback")
              });
              this.#closeQueued = true;
              break;
            } else {
              break;
            }
          }
          this.#flushPipeline(endpoint, pipeline);
        } else if (firstEntry.type === "cursor") {
          this.#flushCursor(endpoint, firstEntry);
        } else {
          throw (0, util_js_1.impossible)(firstEntry, "Impossible type of QueueEntry");
        }
      }
      #flushPipeline(endpoint, pipeline) {
        this.#flush(() => this.#createPipelineRequest(pipeline, endpoint), (resp) => decodePipelineResponse(resp, endpoint.encoding), (respBody) => respBody.baton, (respBody) => respBody.baseUrl, (respBody) => handlePipelineResponse(pipeline, respBody), (error) => pipeline.forEach((entry) => entry.errorCallback(error)));
      }
      #flushCursor(endpoint, entry) {
        const cursor = new cursor_js_1.HttpCursor(this, endpoint.encoding);
        this.#cursor = cursor;
        this.#flush(() => this.#createCursorRequest(entry, endpoint), (resp) => cursor.open(resp), (respBody) => respBody.baton, (respBody) => respBody.baseUrl, (_respBody) => entry.cursorCallback(cursor), (error) => entry.errorCallback(error));
      }
      #flush(createRequest, decodeResponse, getBaton, getBaseUrl, handleResponse, handleError) {
        let promise;
        try {
          const request = createRequest();
          const fetch2 = this.#fetch;
          promise = fetch2(request);
        } catch (error) {
          promise = Promise.reject(error);
        }
        this.#flushing = true;
        promise.then((resp) => {
          if (!resp.ok) {
            return errorFromResponse(resp).then((error) => {
              throw error;
            });
          }
          return decodeResponse(resp);
        }).then((r) => {
          this.#baton = getBaton(r);
          this.#baseUrl = getBaseUrl(r) ?? this.#baseUrl;
          handleResponse(r);
        }).catch((error) => {
          this._setClosed(error);
          handleError(error);
        }).finally(() => {
          this.#flushing = false;
          this.#flushQueue();
        });
      }
      #createPipelineRequest(pipeline, endpoint) {
        return this.#createRequest(new URL(endpoint.pipelinePath, this.#baseUrl), {
          baton: this.#baton,
          requests: pipeline.map((entry) => entry.request)
        }, endpoint.encoding, json_encode_js_1.PipelineReqBody, protobuf_encode_js_1.PipelineReqBody);
      }
      #createCursorRequest(entry, endpoint) {
        if (endpoint.cursorPath === void 0) {
          throw new errors_js_1.ProtocolVersionError(`Cursors are supported only on protocol version 3 and higher, but the HTTP server only supports version ${endpoint.version}.`);
        }
        return this.#createRequest(new URL(endpoint.cursorPath, this.#baseUrl), {
          baton: this.#baton,
          batch: entry.batch
        }, endpoint.encoding, json_encode_js_2.CursorReqBody, protobuf_encode_js_2.CursorReqBody);
      }
      #createRequest(url, reqBody, encoding, jsonFun, protobufFun) {
        let bodyData;
        let contentType;
        if (encoding === "json") {
          bodyData = (0, index_js_1.writeJsonObject)(reqBody, jsonFun);
          contentType = "application/json";
        } else if (encoding === "protobuf") {
          bodyData = (0, index_js_1.writeProtobufMessage)(reqBody, protobufFun);
          contentType = "application/x-protobuf";
        } else {
          throw (0, util_js_1.impossible)(encoding, "Impossible encoding");
        }
        const headers = new isomorphic_fetch_1.Headers();
        headers.set("content-type", contentType);
        if (this.#jwt !== void 0) {
          headers.set("authorization", `Bearer ${this.#jwt}`);
        }
        return new isomorphic_fetch_1.Request(url.toString(), { method: "POST", headers, body: bodyData });
      }
    };
    exports.HttpStream = HttpStream;
    function handlePipelineResponse(pipeline, respBody) {
      if (respBody.results.length !== pipeline.length) {
        throw new errors_js_1.ProtoError("Server returned unexpected number of pipeline results");
      }
      for (let i = 0; i < pipeline.length; ++i) {
        const result = respBody.results[i];
        const entry = pipeline[i];
        if (result.type === "ok") {
          if (result.response.type !== entry.request.type) {
            throw new errors_js_1.ProtoError("Received unexpected type of response");
          }
          entry.responseCallback(result.response);
        } else if (result.type === "error") {
          entry.errorCallback((0, result_js_1.errorFromProto)(result.error));
        } else if (result.type === "none") {
          throw new errors_js_1.ProtoError("Received unrecognized type of StreamResult");
        } else {
          throw (0, util_js_1.impossible)(result, "Received impossible type of StreamResult");
        }
      }
    }
    __name(handlePipelineResponse, "handlePipelineResponse");
    async function decodePipelineResponse(resp, encoding) {
      if (encoding === "json") {
        const respJson = await resp.json();
        return (0, index_js_1.readJsonObject)(respJson, json_decode_js_1.PipelineRespBody);
      }
      if (encoding === "protobuf") {
        const respData = await resp.arrayBuffer();
        return (0, index_js_1.readProtobufMessage)(new Uint8Array(respData), protobuf_decode_js_1.PipelineRespBody);
      }
      await resp.body?.cancel();
      throw (0, util_js_1.impossible)(encoding, "Impossible encoding");
    }
    __name(decodePipelineResponse, "decodePipelineResponse");
    async function errorFromResponse(resp) {
      const respType = resp.headers.get("content-type") ?? "text/plain";
      let message = `Server returned HTTP status ${resp.status}`;
      if (respType === "application/json") {
        const respBody = await resp.json();
        if ("message" in respBody) {
          return (0, result_js_1.errorFromProto)(respBody);
        }
        return new errors_js_1.HttpServerError(message, resp.status);
      }
      if (respType === "text/plain") {
        const respBody = (await resp.text()).trim();
        if (respBody !== "") {
          message += `: ${respBody}`;
        }
        return new errors_js_1.HttpServerError(message, resp.status);
      }
      await resp.body?.cancel();
      return new errors_js_1.HttpServerError(message, resp.status);
    }
    __name(errorFromResponse, "errorFromResponse");
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/http/client.js
var require_client3 = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/http/client.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpClient = exports.checkEndpoints = void 0;
    var isomorphic_fetch_1 = require_web2();
    var client_js_1 = require_client();
    var errors_js_1 = require_errors();
    var stream_js_1 = require_stream4();
    exports.checkEndpoints = [
      {
        versionPath: "v3-protobuf",
        pipelinePath: "v3-protobuf/pipeline",
        cursorPath: "v3-protobuf/cursor",
        version: 3,
        encoding: "protobuf"
      }
      /*
      {
          versionPath: "v3",
          pipelinePath: "v3/pipeline",
          cursorPath: "v3/cursor",
          version: 3,
          encoding: "json",
      },
      */
    ];
    var fallbackEndpoint = {
      versionPath: "v2",
      pipelinePath: "v2/pipeline",
      cursorPath: void 0,
      version: 2,
      encoding: "json"
    };
    var HttpClient = class extends client_js_1.Client {
      static {
        __name(this, "HttpClient");
      }
      #url;
      #jwt;
      #fetch;
      #closed;
      #streams;
      /** @private */
      _endpointPromise;
      /** @private */
      _endpoint;
      /** @private */
      constructor(url, jwt, customFetch, protocolVersion = 2) {
        super();
        this.#url = url;
        this.#jwt = jwt;
        this.#fetch = customFetch ?? isomorphic_fetch_1.fetch;
        this.#closed = void 0;
        this.#streams = /* @__PURE__ */ new Set();
        if (protocolVersion == 3) {
          this._endpointPromise = findEndpoint(this.#fetch, this.#url);
          this._endpointPromise.then((endpoint) => this._endpoint = endpoint, (error) => this.#setClosed(error));
        } else {
          this._endpointPromise = Promise.resolve(fallbackEndpoint);
          this._endpointPromise.then((endpoint) => this._endpoint = endpoint, (error) => this.#setClosed(error));
        }
      }
      /** Get the protocol version supported by the server. */
      async getVersion() {
        if (this._endpoint !== void 0) {
          return this._endpoint.version;
        }
        return (await this._endpointPromise).version;
      }
      // Make sure that the negotiated version is at least `minVersion`.
      /** @private */
      _ensureVersion(minVersion, feature) {
        if (minVersion <= fallbackEndpoint.version) {
          return;
        } else if (this._endpoint === void 0) {
          throw new errors_js_1.ProtocolVersionError(`${feature} is supported only on protocol version ${minVersion} and higher, but the version supported by the HTTP server is not yet known. Use Client.getVersion() to wait until the version is available.`);
        } else if (this._endpoint.version < minVersion) {
          throw new errors_js_1.ProtocolVersionError(`${feature} is supported only on protocol version ${minVersion} and higher, but the HTTP server only supports version ${this._endpoint.version}.`);
        }
      }
      /** Open a {@link HttpStream}, a stream for executing SQL statements. */
      openStream() {
        if (this.#closed !== void 0) {
          throw new errors_js_1.ClosedError("Client is closed", this.#closed);
        }
        const stream = new stream_js_1.HttpStream(this, this.#url, this.#jwt, this.#fetch);
        this.#streams.add(stream);
        return stream;
      }
      /** @private */
      _streamClosed(stream) {
        this.#streams.delete(stream);
      }
      /** Close the client and all its streams. */
      close() {
        this.#setClosed(new errors_js_1.ClientError("Client was manually closed"));
      }
      /** True if the client is closed. */
      get closed() {
        return this.#closed !== void 0;
      }
      #setClosed(error) {
        if (this.#closed !== void 0) {
          return;
        }
        this.#closed = error;
        for (const stream of Array.from(this.#streams)) {
          stream._setClosed(new errors_js_1.ClosedError("Client was closed", error));
        }
      }
    };
    exports.HttpClient = HttpClient;
    async function findEndpoint(customFetch, clientUrl) {
      const fetch2 = customFetch;
      for (const endpoint of exports.checkEndpoints) {
        const url = new URL(endpoint.versionPath, clientUrl);
        const request = new isomorphic_fetch_1.Request(url.toString(), { method: "GET" });
        const response = await fetch2(request);
        await response.arrayBuffer();
        if (response.ok) {
          return endpoint;
        }
      }
      return fallbackEndpoint;
    }
    __name(findEndpoint, "findEndpoint");
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/libsql_url.js
var require_libsql_url = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/libsql_url.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseLibsqlUrl = void 0;
    var errors_js_1 = require_errors();
    function parseLibsqlUrl(urlStr) {
      const url = new URL(urlStr);
      let authToken = void 0;
      let tls = void 0;
      for (const [key, value] of url.searchParams.entries()) {
        if (key === "authToken") {
          authToken = value;
        } else if (key === "tls") {
          if (value === "0") {
            tls = false;
          } else if (value === "1") {
            tls = true;
          } else {
            throw new errors_js_1.LibsqlUrlParseError(`Unknown value for the "tls" query argument: ${JSON.stringify(value)}`);
          }
        } else {
          throw new errors_js_1.LibsqlUrlParseError(`Unknown URL query argument ${JSON.stringify(key)}`);
        }
      }
      let hranaWsScheme;
      let hranaHttpScheme;
      if ((url.protocol === "http:" || url.protocol === "ws:") && tls === true) {
        throw new errors_js_1.LibsqlUrlParseError(`A ${JSON.stringify(url.protocol)} URL cannot opt into TLS using ?tls=1`);
      } else if ((url.protocol === "https:" || url.protocol === "wss:") && tls === false) {
        throw new errors_js_1.LibsqlUrlParseError(`A ${JSON.stringify(url.protocol)} URL cannot opt out of TLS using ?tls=0`);
      }
      if (url.protocol === "http:" || url.protocol === "https:") {
        hranaHttpScheme = url.protocol;
      } else if (url.protocol === "ws:" || url.protocol === "wss:") {
        hranaWsScheme = url.protocol;
      } else if (url.protocol === "libsql:") {
        if (tls === false) {
          if (!url.port) {
            throw new errors_js_1.LibsqlUrlParseError(`A "libsql:" URL with ?tls=0 must specify an explicit port`);
          }
          hranaHttpScheme = "http:";
          hranaWsScheme = "ws:";
        } else {
          hranaHttpScheme = "https:";
          hranaWsScheme = "wss:";
        }
      } else {
        throw new errors_js_1.LibsqlUrlParseError(`This client does not support ${JSON.stringify(url.protocol)} URLs. Please use a "libsql:", "ws:", "wss:", "http:" or "https:" URL instead.`);
      }
      if (url.username || url.password) {
        throw new errors_js_1.LibsqlUrlParseError('This client does not support HTTP Basic authentication with a username and password. You can authenticate using a token passed in the "authToken" URL query parameter.');
      }
      if (url.hash) {
        throw new errors_js_1.LibsqlUrlParseError("URL fragments are not supported");
      }
      let hranaPath = url.pathname;
      if (hranaPath === "/") {
        hranaPath = "";
      }
      const hranaWsUrl = hranaWsScheme !== void 0 ? `${hranaWsScheme}//${url.host}${hranaPath}` : void 0;
      const hranaHttpUrl = hranaHttpScheme !== void 0 ? `${hranaHttpScheme}//${url.host}${hranaPath}` : void 0;
      return { hranaWsUrl, hranaHttpUrl, authToken };
    }
    __name(parseLibsqlUrl, "parseLibsqlUrl");
    exports.parseLibsqlUrl = parseLibsqlUrl;
  }
});

// node_modules/@libsql/hrana-client/lib-cjs/index.js
var require_lib_cjs = __commonJS({
  "node_modules/@libsql/hrana-client/lib-cjs/index.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.openHttp = exports.openWs = exports.WsStream = exports.WsClient = exports.HttpStream = exports.HttpClient = exports.Stream = exports.Stmt = exports.Sql = exports.parseLibsqlUrl = exports.BatchCond = exports.BatchStep = exports.Batch = exports.Client = exports.Headers = exports.Request = exports.fetch = exports.WebSocket = void 0;
    var isomorphic_ws_1 = require_web();
    var client_js_1 = require_client2();
    var errors_js_1 = require_errors();
    var client_js_2 = require_client3();
    var client_js_3 = require_client2();
    var isomorphic_ws_2 = require_web();
    Object.defineProperty(exports, "WebSocket", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return isomorphic_ws_2.WebSocket;
    }, "get") });
    var isomorphic_fetch_1 = require_web2();
    Object.defineProperty(exports, "fetch", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return isomorphic_fetch_1.fetch;
    }, "get") });
    Object.defineProperty(exports, "Request", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return isomorphic_fetch_1.Request;
    }, "get") });
    Object.defineProperty(exports, "Headers", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return isomorphic_fetch_1.Headers;
    }, "get") });
    var client_js_4 = require_client();
    Object.defineProperty(exports, "Client", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return client_js_4.Client;
    }, "get") });
    __exportStar(require_errors(), exports);
    var batch_js_1 = require_batch();
    Object.defineProperty(exports, "Batch", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return batch_js_1.Batch;
    }, "get") });
    Object.defineProperty(exports, "BatchStep", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return batch_js_1.BatchStep;
    }, "get") });
    Object.defineProperty(exports, "BatchCond", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return batch_js_1.BatchCond;
    }, "get") });
    var libsql_url_js_1 = require_libsql_url();
    Object.defineProperty(exports, "parseLibsqlUrl", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return libsql_url_js_1.parseLibsqlUrl;
    }, "get") });
    var sql_js_1 = require_sql();
    Object.defineProperty(exports, "Sql", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return sql_js_1.Sql;
    }, "get") });
    var stmt_js_1 = require_stmt();
    Object.defineProperty(exports, "Stmt", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return stmt_js_1.Stmt;
    }, "get") });
    var stream_js_1 = require_stream2();
    Object.defineProperty(exports, "Stream", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return stream_js_1.Stream;
    }, "get") });
    var client_js_5 = require_client3();
    Object.defineProperty(exports, "HttpClient", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return client_js_5.HttpClient;
    }, "get") });
    var stream_js_2 = require_stream4();
    Object.defineProperty(exports, "HttpStream", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return stream_js_2.HttpStream;
    }, "get") });
    var client_js_6 = require_client2();
    Object.defineProperty(exports, "WsClient", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return client_js_6.WsClient;
    }, "get") });
    var stream_js_3 = require_stream3();
    Object.defineProperty(exports, "WsStream", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return stream_js_3.WsStream;
    }, "get") });
    function openWs(url, jwt, protocolVersion = 2) {
      if (typeof isomorphic_ws_1.WebSocket === "undefined") {
        throw new errors_js_1.WebSocketUnsupportedError("WebSockets are not supported in this environment");
      }
      var subprotocols = void 0;
      if (protocolVersion == 3) {
        subprotocols = Array.from(client_js_1.subprotocolsV3.keys());
      } else {
        subprotocols = Array.from(client_js_1.subprotocolsV2.keys());
      }
      const socket = new isomorphic_ws_1.WebSocket(url, subprotocols);
      return new client_js_3.WsClient(socket, jwt);
    }
    __name(openWs, "openWs");
    exports.openWs = openWs;
    function openHttp(url, jwt, customFetch, protocolVersion = 2) {
      return new client_js_2.HttpClient(url instanceof URL ? url : new URL(url), jwt, customFetch, protocolVersion);
    }
    __name(openHttp, "openHttp");
    exports.openHttp = openHttp;
  }
});

// node_modules/@libsql/client/lib-cjs/hrana.js
var require_hrana = __commonJS({
  "node_modules/@libsql/client/lib-cjs/hrana.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapHranaError = exports.resultSetFromHrana = exports.stmtToHrana = exports.executeHranaBatch = exports.HranaTransaction = void 0;
    var hrana = __importStar(require_lib_cjs());
    var api_1 = require_api();
    var util_1 = require_util3();
    var HranaTransaction = class {
      static {
        __name(this, "HranaTransaction");
      }
      #mode;
      #version;
      // Promise that is resolved when the BEGIN statement completes, or `undefined` if we haven't executed the
      // BEGIN statement yet.
      #started;
      /** @private */
      constructor(mode, version2) {
        this.#mode = mode;
        this.#version = version2;
        this.#started = void 0;
      }
      execute(stmt) {
        return this.batch([stmt]).then((results) => results[0]);
      }
      async batch(stmts) {
        const stream = this._getStream();
        if (stream.closed) {
          throw new api_1.LibsqlError("Cannot execute statements because the transaction is closed", "TRANSACTION_CLOSED");
        }
        try {
          const hranaStmts = stmts.map(stmtToHrana);
          let rowsPromises;
          if (this.#started === void 0) {
            this._getSqlCache().apply(hranaStmts);
            const batch = stream.batch(this.#version >= 3);
            const beginStep = batch.step();
            const beginPromise = beginStep.run((0, util_1.transactionModeToBegin)(this.#mode));
            let lastStep = beginStep;
            rowsPromises = hranaStmts.map((hranaStmt) => {
              const stmtStep = batch.step().condition(hrana.BatchCond.ok(lastStep));
              if (this.#version >= 3) {
                stmtStep.condition(hrana.BatchCond.not(hrana.BatchCond.isAutocommit(batch)));
              }
              const rowsPromise = stmtStep.query(hranaStmt);
              rowsPromise.catch(() => void 0);
              lastStep = stmtStep;
              return rowsPromise;
            });
            this.#started = batch.execute().then(() => beginPromise).then(() => void 0);
            try {
              await this.#started;
            } catch (e) {
              this.close();
              throw e;
            }
          } else {
            if (this.#version < 3) {
              await this.#started;
            } else {
            }
            this._getSqlCache().apply(hranaStmts);
            const batch = stream.batch(this.#version >= 3);
            let lastStep = void 0;
            rowsPromises = hranaStmts.map((hranaStmt) => {
              const stmtStep = batch.step();
              if (lastStep !== void 0) {
                stmtStep.condition(hrana.BatchCond.ok(lastStep));
              }
              if (this.#version >= 3) {
                stmtStep.condition(hrana.BatchCond.not(hrana.BatchCond.isAutocommit(batch)));
              }
              const rowsPromise = stmtStep.query(hranaStmt);
              rowsPromise.catch(() => void 0);
              lastStep = stmtStep;
              return rowsPromise;
            });
            await batch.execute();
          }
          const resultSets = [];
          for (const rowsPromise of rowsPromises) {
            const rows = await rowsPromise;
            if (rows === void 0) {
              throw new api_1.LibsqlError("Statement in a transaction was not executed, probably because the transaction has been rolled back", "TRANSACTION_CLOSED");
            }
            resultSets.push(resultSetFromHrana(rows));
          }
          return resultSets;
        } catch (e) {
          throw mapHranaError(e);
        }
      }
      async executeMultiple(sql) {
        const stream = this._getStream();
        if (stream.closed) {
          throw new api_1.LibsqlError("Cannot execute statements because the transaction is closed", "TRANSACTION_CLOSED");
        }
        try {
          if (this.#started === void 0) {
            this.#started = stream.run((0, util_1.transactionModeToBegin)(this.#mode)).then(() => void 0);
            try {
              await this.#started;
            } catch (e) {
              this.close();
              throw e;
            }
          } else {
            await this.#started;
          }
          await stream.sequence(sql);
        } catch (e) {
          throw mapHranaError(e);
        }
      }
      async rollback() {
        try {
          const stream = this._getStream();
          if (stream.closed) {
            return;
          }
          if (this.#started !== void 0) {
          } else {
            return;
          }
          const promise = stream.run("ROLLBACK").catch((e) => {
            throw mapHranaError(e);
          });
          stream.closeGracefully();
          await promise;
        } catch (e) {
          throw mapHranaError(e);
        } finally {
          this.close();
        }
      }
      async commit() {
        try {
          const stream = this._getStream();
          if (stream.closed) {
            throw new api_1.LibsqlError("Cannot commit the transaction because it is already closed", "TRANSACTION_CLOSED");
          }
          if (this.#started !== void 0) {
            await this.#started;
          } else {
            return;
          }
          const promise = stream.run("COMMIT").catch((e) => {
            throw mapHranaError(e);
          });
          stream.closeGracefully();
          await promise;
        } catch (e) {
          throw mapHranaError(e);
        } finally {
          this.close();
        }
      }
    };
    exports.HranaTransaction = HranaTransaction;
    async function executeHranaBatch(mode, version2, batch, hranaStmts, disableForeignKeys = false) {
      if (disableForeignKeys) {
        batch.step().run("PRAGMA foreign_keys=off");
      }
      const beginStep = batch.step();
      const beginPromise = beginStep.run((0, util_1.transactionModeToBegin)(mode));
      let lastStep = beginStep;
      const stmtPromises = hranaStmts.map((hranaStmt) => {
        const stmtStep = batch.step().condition(hrana.BatchCond.ok(lastStep));
        if (version2 >= 3) {
          stmtStep.condition(hrana.BatchCond.not(hrana.BatchCond.isAutocommit(batch)));
        }
        const stmtPromise = stmtStep.query(hranaStmt);
        lastStep = stmtStep;
        return stmtPromise;
      });
      const commitStep = batch.step().condition(hrana.BatchCond.ok(lastStep));
      if (version2 >= 3) {
        commitStep.condition(hrana.BatchCond.not(hrana.BatchCond.isAutocommit(batch)));
      }
      const commitPromise = commitStep.run("COMMIT");
      const rollbackStep = batch.step().condition(hrana.BatchCond.not(hrana.BatchCond.ok(commitStep)));
      rollbackStep.run("ROLLBACK").catch((_) => void 0);
      if (disableForeignKeys) {
        batch.step().run("PRAGMA foreign_keys=on");
      }
      await batch.execute();
      const resultSets = [];
      await beginPromise;
      for (const stmtPromise of stmtPromises) {
        const hranaRows = await stmtPromise;
        if (hranaRows === void 0) {
          throw new api_1.LibsqlError("Statement in a batch was not executed, probably because the transaction has been rolled back", "TRANSACTION_CLOSED");
        }
        resultSets.push(resultSetFromHrana(hranaRows));
      }
      await commitPromise;
      return resultSets;
    }
    __name(executeHranaBatch, "executeHranaBatch");
    exports.executeHranaBatch = executeHranaBatch;
    function stmtToHrana(stmt) {
      if (typeof stmt === "string") {
        return new hrana.Stmt(stmt);
      }
      const hranaStmt = new hrana.Stmt(stmt.sql);
      if (Array.isArray(stmt.args)) {
        hranaStmt.bindIndexes(stmt.args);
      } else {
        for (const [key, value] of Object.entries(stmt.args)) {
          hranaStmt.bindName(key, value);
        }
      }
      return hranaStmt;
    }
    __name(stmtToHrana, "stmtToHrana");
    exports.stmtToHrana = stmtToHrana;
    function resultSetFromHrana(hranaRows) {
      const columns = hranaRows.columnNames.map((c) => c ?? "");
      const columnTypes = hranaRows.columnDecltypes.map((c) => c ?? "");
      const rows = hranaRows.rows;
      const rowsAffected = hranaRows.affectedRowCount;
      const lastInsertRowid = hranaRows.lastInsertRowid !== void 0 ? hranaRows.lastInsertRowid : void 0;
      return new util_1.ResultSetImpl(columns, columnTypes, rows, rowsAffected, lastInsertRowid);
    }
    __name(resultSetFromHrana, "resultSetFromHrana");
    exports.resultSetFromHrana = resultSetFromHrana;
    function mapHranaError(e) {
      if (e instanceof hrana.ClientError) {
        const code = mapHranaErrorCode(e);
        return new api_1.LibsqlError(e.message, code, void 0, e);
      }
      return e;
    }
    __name(mapHranaError, "mapHranaError");
    exports.mapHranaError = mapHranaError;
    function mapHranaErrorCode(e) {
      if (e instanceof hrana.ResponseError && e.code !== void 0) {
        return e.code;
      } else if (e instanceof hrana.ProtoError) {
        return "HRANA_PROTO_ERROR";
      } else if (e instanceof hrana.ClosedError) {
        return e.cause instanceof hrana.ClientError ? mapHranaErrorCode(e.cause) : "HRANA_CLOSED_ERROR";
      } else if (e instanceof hrana.WebSocketError) {
        return "HRANA_WEBSOCKET_ERROR";
      } else if (e instanceof hrana.HttpServerError) {
        return "SERVER_ERROR";
      } else if (e instanceof hrana.ProtocolVersionError) {
        return "PROTOCOL_VERSION_ERROR";
      } else if (e instanceof hrana.InternalError) {
        return "INTERNAL_ERROR";
      } else {
        return "UNKNOWN";
      }
    }
    __name(mapHranaErrorCode, "mapHranaErrorCode");
  }
});

// node_modules/@libsql/client/lib-cjs/sql_cache.js
var require_sql_cache = __commonJS({
  "node_modules/@libsql/client/lib-cjs/sql_cache.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SqlCache = void 0;
    var SqlCache = class {
      static {
        __name(this, "SqlCache");
      }
      #owner;
      #sqls;
      capacity;
      constructor(owner, capacity) {
        this.#owner = owner;
        this.#sqls = new Lru();
        this.capacity = capacity;
      }
      // Replaces SQL strings with cached `hrana.Sql` objects in the statements in `hranaStmts`. After this
      // function returns, we guarantee that all `hranaStmts` refer to valid (not closed) `hrana.Sql` objects,
      // but _we may invalidate any other `hrana.Sql` objects_ (by closing them, thus removing them from the
      // server).
      //
      // In practice, this means that after calling this function, you can use the statements only up to the
      // first `await`, because concurrent code may also use the cache and invalidate those statements.
      apply(hranaStmts) {
        if (this.capacity <= 0) {
          return;
        }
        const usedSqlObjs = /* @__PURE__ */ new Set();
        for (const hranaStmt of hranaStmts) {
          if (typeof hranaStmt.sql !== "string") {
            continue;
          }
          const sqlText = hranaStmt.sql;
          if (sqlText.length >= 5e3) {
            continue;
          }
          let sqlObj = this.#sqls.get(sqlText);
          if (sqlObj === void 0) {
            while (this.#sqls.size + 1 > this.capacity) {
              const [evictSqlText, evictSqlObj] = this.#sqls.peekLru();
              if (usedSqlObjs.has(evictSqlObj)) {
                break;
              }
              evictSqlObj.close();
              this.#sqls.delete(evictSqlText);
            }
            if (this.#sqls.size + 1 <= this.capacity) {
              sqlObj = this.#owner.storeSql(sqlText);
              this.#sqls.set(sqlText, sqlObj);
            }
          }
          if (sqlObj !== void 0) {
            hranaStmt.sql = sqlObj;
            usedSqlObjs.add(sqlObj);
          }
        }
      }
    };
    exports.SqlCache = SqlCache;
    var Lru = class {
      static {
        __name(this, "Lru");
      }
      // This maps keys to the cache values. The entries are ordered by their last use (entires that were used
      // most recently are at the end).
      #cache;
      constructor() {
        this.#cache = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.#cache.get(key);
        if (value !== void 0) {
          this.#cache.delete(key);
          this.#cache.set(key, value);
        }
        return value;
      }
      set(key, value) {
        this.#cache.set(key, value);
      }
      peekLru() {
        for (const entry of this.#cache.entries()) {
          return entry;
        }
        return void 0;
      }
      delete(key) {
        this.#cache.delete(key);
      }
      get size() {
        return this.#cache.size;
      }
    };
  }
});

// node_modules/promise-limit/index.js
var require_promise_limit = __commonJS({
  "node_modules/promise-limit/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    function limiter(count) {
      var outstanding = 0;
      var jobs = [];
      function remove() {
        outstanding--;
        if (outstanding < count) {
          dequeue();
        }
      }
      __name(remove, "remove");
      function dequeue() {
        var job = jobs.shift();
        semaphore.queue = jobs.length;
        if (job) {
          run(job.fn).then(job.resolve).catch(job.reject);
        }
      }
      __name(dequeue, "dequeue");
      function queue(fn) {
        return new Promise(function(resolve, reject) {
          jobs.push({ fn, resolve, reject });
          semaphore.queue = jobs.length;
        });
      }
      __name(queue, "queue");
      function run(fn) {
        outstanding++;
        try {
          return Promise.resolve(fn()).then(function(result) {
            remove();
            return result;
          }, function(error) {
            remove();
            throw error;
          });
        } catch (err) {
          remove();
          return Promise.reject(err);
        }
      }
      __name(run, "run");
      var semaphore = /* @__PURE__ */ __name(function(fn) {
        if (outstanding >= count) {
          return queue(fn);
        } else {
          return run(fn);
        }
      }, "semaphore");
      return semaphore;
    }
    __name(limiter, "limiter");
    function map(items, mapper) {
      var failed = false;
      var limit = this;
      return Promise.all(items.map(function() {
        var args = arguments;
        return limit(function() {
          if (!failed) {
            return mapper.apply(void 0, args).catch(function(e) {
              failed = true;
              throw e;
            });
          }
        });
      }));
    }
    __name(map, "map");
    function addExtras(fn) {
      fn.queue = 0;
      fn.map = map;
      return fn;
    }
    __name(addExtras, "addExtras");
    module.exports = function(count) {
      if (count) {
        return addExtras(limiter(count));
      } else {
        return addExtras(function(fn) {
          return fn();
        });
      }
    };
  }
});

// node_modules/@libsql/client/lib-cjs/ws.js
var require_ws = __commonJS({
  "node_modules/@libsql/client/lib-cjs/ws.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WsTransaction = exports.WsClient = exports._createClient = exports.createClient = void 0;
    var hrana = __importStar(require_lib_cjs());
    var api_1 = require_api();
    var config_1 = require_config();
    var hrana_js_1 = require_hrana();
    var sql_cache_js_1 = require_sql_cache();
    var uri_1 = require_uri2();
    var util_1 = require_util3();
    var promise_limit_1 = __importDefault(require_promise_limit());
    __exportStar(require_api(), exports);
    function createClient(config2) {
      return _createClient((0, config_1.expandConfig)(config2, false));
    }
    __name(createClient, "createClient");
    exports.createClient = createClient;
    function _createClient(config2) {
      if (config2.scheme !== "wss" && config2.scheme !== "ws") {
        throw new api_1.LibsqlError(`The WebSocket client supports only "libsql:", "wss:" and "ws:" URLs, got ${JSON.stringify(config2.scheme + ":")}. For more information, please read ${util_1.supportedUrlLink}`, "URL_SCHEME_NOT_SUPPORTED");
      }
      if (config2.encryptionKey !== void 0) {
        throw new api_1.LibsqlError("Encryption key is not supported by the remote client.", "ENCRYPTION_KEY_NOT_SUPPORTED");
      }
      if (config2.scheme === "ws" && config2.tls) {
        throw new api_1.LibsqlError(`A "ws:" URL cannot opt into TLS by using ?tls=1`, "URL_INVALID");
      } else if (config2.scheme === "wss" && !config2.tls) {
        throw new api_1.LibsqlError(`A "wss:" URL cannot opt out of TLS by using ?tls=0`, "URL_INVALID");
      }
      const url = (0, uri_1.encodeBaseUrl)(config2.scheme, config2.authority, config2.path);
      let client;
      try {
        client = hrana.openWs(url, config2.authToken);
      } catch (e) {
        if (e instanceof hrana.WebSocketUnsupportedError) {
          const suggestedScheme = config2.scheme === "wss" ? "https" : "http";
          const suggestedUrl = (0, uri_1.encodeBaseUrl)(suggestedScheme, config2.authority, config2.path);
          throw new api_1.LibsqlError(`This environment does not support WebSockets, please switch to the HTTP client by using a "${suggestedScheme}:" URL (${JSON.stringify(suggestedUrl)}). For more information, please read ${util_1.supportedUrlLink}`, "WEBSOCKETS_NOT_SUPPORTED");
        }
        throw (0, hrana_js_1.mapHranaError)(e);
      }
      return new WsClient(client, url, config2.authToken, config2.intMode, config2.concurrency);
    }
    __name(_createClient, "_createClient");
    exports._createClient = _createClient;
    var maxConnAgeMillis = 60 * 1e3;
    var sqlCacheCapacity = 100;
    var WsClient = class {
      static {
        __name(this, "WsClient");
      }
      #url;
      #authToken;
      #intMode;
      // State of the current connection. The `hrana.WsClient` inside may be closed at any moment due to an
      // asynchronous error.
      #connState;
      // If defined, this is a connection that will be used in the future, once it is ready.
      #futureConnState;
      closed;
      protocol;
      #isSchemaDatabase;
      #promiseLimitFunction;
      /** @private */
      constructor(client, url, authToken, intMode, concurrency) {
        this.#url = url;
        this.#authToken = authToken;
        this.#intMode = intMode;
        this.#connState = this.#openConn(client);
        this.#futureConnState = void 0;
        this.closed = false;
        this.protocol = "ws";
        this.#promiseLimitFunction = (0, promise_limit_1.default)(concurrency);
      }
      async limit(fn) {
        return this.#promiseLimitFunction(fn);
      }
      async execute(stmtOrSql, args) {
        let stmt;
        if (typeof stmtOrSql === "string") {
          stmt = {
            sql: stmtOrSql,
            args: args || []
          };
        } else {
          stmt = stmtOrSql;
        }
        return this.limit(async () => {
          const streamState = await this.#openStream();
          try {
            const hranaStmt = (0, hrana_js_1.stmtToHrana)(stmt);
            streamState.conn.sqlCache.apply([hranaStmt]);
            const hranaRowsPromise = streamState.stream.query(hranaStmt);
            streamState.stream.closeGracefully();
            const hranaRowsResult = await hranaRowsPromise;
            return (0, hrana_js_1.resultSetFromHrana)(hranaRowsResult);
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          } finally {
            this._closeStream(streamState);
          }
        });
      }
      async batch(stmts, mode = "deferred") {
        return this.limit(async () => {
          const streamState = await this.#openStream();
          try {
            const hranaStmts = stmts.map(hrana_js_1.stmtToHrana);
            const version2 = await streamState.conn.client.getVersion();
            streamState.conn.sqlCache.apply(hranaStmts);
            const batch = streamState.stream.batch(version2 >= 3);
            const resultsPromise = (0, hrana_js_1.executeHranaBatch)(mode, version2, batch, hranaStmts);
            const results = await resultsPromise;
            return results;
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          } finally {
            this._closeStream(streamState);
          }
        });
      }
      async migrate(stmts) {
        return this.limit(async () => {
          const streamState = await this.#openStream();
          try {
            const hranaStmts = stmts.map(hrana_js_1.stmtToHrana);
            const version2 = await streamState.conn.client.getVersion();
            const batch = streamState.stream.batch(version2 >= 3);
            const resultsPromise = (0, hrana_js_1.executeHranaBatch)("deferred", version2, batch, hranaStmts, true);
            const results = await resultsPromise;
            return results;
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          } finally {
            this._closeStream(streamState);
          }
        });
      }
      async transaction(mode = "write") {
        return this.limit(async () => {
          const streamState = await this.#openStream();
          try {
            const version2 = await streamState.conn.client.getVersion();
            return new WsTransaction(this, streamState, mode, version2);
          } catch (e) {
            this._closeStream(streamState);
            throw (0, hrana_js_1.mapHranaError)(e);
          }
        });
      }
      async executeMultiple(sql) {
        return this.limit(async () => {
          const streamState = await this.#openStream();
          try {
            const promise = streamState.stream.sequence(sql);
            streamState.stream.closeGracefully();
            await promise;
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          } finally {
            this._closeStream(streamState);
          }
        });
      }
      sync() {
        throw new api_1.LibsqlError("sync not supported in ws mode", "SYNC_NOT_SUPPORTED");
      }
      async #openStream() {
        if (this.closed) {
          throw new api_1.LibsqlError("The client is closed", "CLIENT_CLOSED");
        }
        const now = /* @__PURE__ */ new Date();
        const ageMillis = now.valueOf() - this.#connState.openTime.valueOf();
        if (ageMillis > maxConnAgeMillis && this.#futureConnState === void 0) {
          const futureConnState = this.#openConn();
          this.#futureConnState = futureConnState;
          futureConnState.client.getVersion().then((_version) => {
            if (this.#connState !== futureConnState) {
              if (this.#connState.streamStates.size === 0) {
                this.#connState.client.close();
              } else {
              }
            }
            this.#connState = futureConnState;
            this.#futureConnState = void 0;
          }, (_e) => {
            this.#futureConnState = void 0;
          });
        }
        if (this.#connState.client.closed) {
          try {
            if (this.#futureConnState !== void 0) {
              this.#connState = this.#futureConnState;
            } else {
              this.#connState = this.#openConn();
            }
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          }
        }
        const connState = this.#connState;
        try {
          if (connState.useSqlCache === void 0) {
            connState.useSqlCache = await connState.client.getVersion() >= 2;
            if (connState.useSqlCache) {
              connState.sqlCache.capacity = sqlCacheCapacity;
            }
          }
          const stream = connState.client.openStream();
          stream.intMode = this.#intMode;
          const streamState = { conn: connState, stream };
          connState.streamStates.add(streamState);
          return streamState;
        } catch (e) {
          throw (0, hrana_js_1.mapHranaError)(e);
        }
      }
      #openConn(client) {
        try {
          client ??= hrana.openWs(this.#url, this.#authToken);
          return {
            client,
            useSqlCache: void 0,
            sqlCache: new sql_cache_js_1.SqlCache(client, 0),
            openTime: /* @__PURE__ */ new Date(),
            streamStates: /* @__PURE__ */ new Set()
          };
        } catch (e) {
          throw (0, hrana_js_1.mapHranaError)(e);
        }
      }
      _closeStream(streamState) {
        streamState.stream.close();
        const connState = streamState.conn;
        connState.streamStates.delete(streamState);
        if (connState.streamStates.size === 0 && connState !== this.#connState) {
          connState.client.close();
        }
      }
      close() {
        this.#connState.client.close();
        this.closed = true;
      }
    };
    exports.WsClient = WsClient;
    var WsTransaction = class extends hrana_js_1.HranaTransaction {
      static {
        __name(this, "WsTransaction");
      }
      #client;
      #streamState;
      /** @private */
      constructor(client, state, mode, version2) {
        super(mode, version2);
        this.#client = client;
        this.#streamState = state;
      }
      /** @private */
      _getStream() {
        return this.#streamState.stream;
      }
      /** @private */
      _getSqlCache() {
        return this.#streamState.conn.sqlCache;
      }
      close() {
        this.#client._closeStream(this.#streamState);
      }
      get closed() {
        return this.#streamState.stream.closed;
      }
    };
    exports.WsTransaction = WsTransaction;
  }
});

// node_modules/@libsql/client/lib-cjs/http.js
var require_http2 = __commonJS({
  "node_modules/@libsql/client/lib-cjs/http.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpTransaction = exports.HttpClient = exports._createClient = exports.createClient = void 0;
    var hrana = __importStar(require_lib_cjs());
    var api_1 = require_api();
    var config_1 = require_config();
    var hrana_js_1 = require_hrana();
    var sql_cache_js_1 = require_sql_cache();
    var uri_1 = require_uri2();
    var util_1 = require_util3();
    var promise_limit_1 = __importDefault(require_promise_limit());
    __exportStar(require_api(), exports);
    function createClient(config2) {
      return _createClient((0, config_1.expandConfig)(config2, true));
    }
    __name(createClient, "createClient");
    exports.createClient = createClient;
    function _createClient(config2) {
      if (config2.scheme !== "https" && config2.scheme !== "http") {
        throw new api_1.LibsqlError(`The HTTP client supports only "libsql:", "https:" and "http:" URLs, got ${JSON.stringify(config2.scheme + ":")}. For more information, please read ${util_1.supportedUrlLink}`, "URL_SCHEME_NOT_SUPPORTED");
      }
      if (config2.encryptionKey !== void 0) {
        throw new api_1.LibsqlError("Encryption key is not supported by the remote client.", "ENCRYPTION_KEY_NOT_SUPPORTED");
      }
      if (config2.scheme === "http" && config2.tls) {
        throw new api_1.LibsqlError(`A "http:" URL cannot opt into TLS by using ?tls=1`, "URL_INVALID");
      } else if (config2.scheme === "https" && !config2.tls) {
        throw new api_1.LibsqlError(`A "https:" URL cannot opt out of TLS by using ?tls=0`, "URL_INVALID");
      }
      const url = (0, uri_1.encodeBaseUrl)(config2.scheme, config2.authority, config2.path);
      return new HttpClient(url, config2.authToken, config2.intMode, config2.fetch, config2.concurrency);
    }
    __name(_createClient, "_createClient");
    exports._createClient = _createClient;
    var sqlCacheCapacity = 30;
    var HttpClient = class {
      static {
        __name(this, "HttpClient");
      }
      #client;
      protocol;
      #authToken;
      #promiseLimitFunction;
      /** @private */
      constructor(url, authToken, intMode, customFetch, concurrency) {
        this.#client = hrana.openHttp(url, authToken, customFetch);
        this.#client.intMode = intMode;
        this.protocol = "http";
        this.#authToken = authToken;
        this.#promiseLimitFunction = (0, promise_limit_1.default)(concurrency);
      }
      async limit(fn) {
        return this.#promiseLimitFunction(fn);
      }
      async execute(stmtOrSql, args) {
        let stmt;
        if (typeof stmtOrSql === "string") {
          stmt = {
            sql: stmtOrSql,
            args: args || []
          };
        } else {
          stmt = stmtOrSql;
        }
        return this.limit(async () => {
          try {
            const hranaStmt = (0, hrana_js_1.stmtToHrana)(stmt);
            let rowsPromise;
            const stream = this.#client.openStream();
            try {
              rowsPromise = stream.query(hranaStmt);
            } finally {
              stream.closeGracefully();
            }
            const rowsResult = await rowsPromise;
            return (0, hrana_js_1.resultSetFromHrana)(rowsResult);
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          }
        });
      }
      async batch(stmts, mode = "deferred") {
        return this.limit(async () => {
          try {
            const hranaStmts = stmts.map(hrana_js_1.stmtToHrana);
            const version2 = await this.#client.getVersion();
            let resultsPromise;
            const stream = this.#client.openStream();
            try {
              const sqlCache = new sql_cache_js_1.SqlCache(stream, sqlCacheCapacity);
              sqlCache.apply(hranaStmts);
              const batch = stream.batch(false);
              resultsPromise = (0, hrana_js_1.executeHranaBatch)(mode, version2, batch, hranaStmts);
            } finally {
              stream.closeGracefully();
            }
            const results = await resultsPromise;
            return results;
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          }
        });
      }
      async migrate(stmts) {
        return this.limit(async () => {
          try {
            const hranaStmts = stmts.map(hrana_js_1.stmtToHrana);
            const version2 = await this.#client.getVersion();
            let resultsPromise;
            const stream = this.#client.openStream();
            try {
              const batch = stream.batch(false);
              resultsPromise = (0, hrana_js_1.executeHranaBatch)("deferred", version2, batch, hranaStmts, true);
            } finally {
              stream.closeGracefully();
            }
            const results = await resultsPromise;
            return results;
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          }
        });
      }
      async transaction(mode = "write") {
        return this.limit(async () => {
          try {
            const version2 = await this.#client.getVersion();
            return new HttpTransaction(this.#client.openStream(), mode, version2);
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          }
        });
      }
      async executeMultiple(sql) {
        return this.limit(async () => {
          try {
            let promise;
            const stream = this.#client.openStream();
            try {
              promise = stream.sequence(sql);
            } finally {
              stream.closeGracefully();
            }
            await promise;
          } catch (e) {
            throw (0, hrana_js_1.mapHranaError)(e);
          }
        });
      }
      sync() {
        throw new api_1.LibsqlError("sync not supported in http mode", "SYNC_NOT_SUPPORTED");
      }
      close() {
        this.#client.close();
      }
      get closed() {
        return this.#client.closed;
      }
    };
    exports.HttpClient = HttpClient;
    var HttpTransaction = class extends hrana_js_1.HranaTransaction {
      static {
        __name(this, "HttpTransaction");
      }
      #stream;
      #sqlCache;
      /** @private */
      constructor(stream, mode, version2) {
        super(mode, version2);
        this.#stream = stream;
        this.#sqlCache = new sql_cache_js_1.SqlCache(stream, sqlCacheCapacity);
      }
      /** @private */
      _getStream() {
        return this.#stream;
      }
      /** @private */
      _getSqlCache() {
        return this.#sqlCache;
      }
      close() {
        this.#stream.close();
      }
      get closed() {
        return this.#stream.closed;
      }
    };
    exports.HttpTransaction = HttpTransaction;
  }
});

// node_modules/@libsql/client/lib-cjs/web.js
var require_web3 = __commonJS({
  "node_modules/@libsql/client/lib-cjs/web.js"(exports) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._createClient = exports.createClient = void 0;
    var api_1 = require_api();
    var config_1 = require_config();
    var util_1 = require_util3();
    var ws_js_1 = require_ws();
    var http_js_1 = require_http2();
    __exportStar(require_api(), exports);
    function createClient(config2) {
      return _createClient((0, config_1.expandConfig)(config2, true));
    }
    __name(createClient, "createClient");
    exports.createClient = createClient;
    function _createClient(config2) {
      if (config2.scheme === "ws" || config2.scheme === "wss") {
        return (0, ws_js_1._createClient)(config2);
      } else if (config2.scheme === "http" || config2.scheme === "https") {
        return (0, http_js_1._createClient)(config2);
      } else {
        throw new api_1.LibsqlError(`The client that uses Web standard APIs supports only "libsql:", "wss:", "ws:", "https:" and "http:" URLs, got ${JSON.stringify(config2.scheme + ":")}. For more information, please read ${util_1.supportedUrlLink}`, "URL_SCHEME_NOT_SUPPORTED");
      }
    }
    __name(_createClient, "_createClient");
    exports._createClient = _createClient;
  }
});

// server.js
var require_server = __commonJS({
  "server.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var path = require_path();
    var crypto = require_crypto();
    var express = require_express2();
    var rateLimit = require_dist();
    var { createClient } = require_web3();
    var {
      ADMIN_USERNAME = "admin",
      ADMIN_PASSWORD,
      PORT = 3e3,
      NODE_ENV,
      TURSO_DATABASE_URL,
      TURSO_AUTH_TOKEN
    } = process.env;
    if (!TURSO_DATABASE_URL) {
      console.error("TURSO_DATABASE_URL is not set. Add it (and TURSO_AUTH_TOKEN) in the Cloudflare Variables and Secrets settings, or in .env / .dev.vars for local runs.");
      process.exit(1);
    }
    var _client = null;
    var client = new Proxy({}, {
      get(_, prop) {
        if (!_client) {
          const url = String(TURSO_DATABASE_URL).trim().replace(/^["']+|["']+$/g, "").replace(/^((libsql|https?|wss?):\/*)+/i, "https://");
          const authToken = String(TURSO_AUTH_TOKEN || "").trim().replace(/^["']+|["']+$/g, "");
          _client = createClient({ url, authToken });
        }
        const v = _client[prop];
        return typeof v === "function" ? v.bind(_client) : v;
      }
    });
    var toObjs = /* @__PURE__ */ __name((r) => r.rows.map((row) => {
      const o = {};
      r.columns.forEach((c, i) => {
        o[c] = row[i];
      });
      return o;
    }), "toObjs");
    var all = /* @__PURE__ */ __name(async (sql, args = [], x = client) => toObjs(await x.execute({ sql, args })), "all");
    var get = /* @__PURE__ */ __name(async (sql, args = [], x = client) => (await all(sql, args, x))[0], "get");
    var run = /* @__PURE__ */ __name((sql, args = [], x = client) => x.execute({ sql, args }), "run");
    var blob = /* @__PURE__ */ __name((v) => Buffer.from(v), "blob");
    var marks = /* @__PURE__ */ __name((a) => a.map(() => "?").join(","), "marks");
    var idParam = /* @__PURE__ */ __name((req) => {
      const n = Number(req.params.id);
      return Number.isInteger(n) ? n : -1;
    }, "idParam");
    var SCHEMA = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    position TEXT NOT NULL,
    role TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    must_change INTEGER NOT NULL DEFAULT 1,
    active INTEGER NOT NULL DEFAULT 1,
    email TEXT,
    phone TEXT,
    bio TEXT,
    avatar BLOB,
    updated_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    expires_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    topic TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    handled_by TEXT,
    ref TEXT UNIQUE,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT
  );
  CREATE TABLE IF NOT EXISTS message_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER NOT NULL,
    status TEXT NOT NULL,
    note TEXT NOT NULL DEFAULT '',
    by_id INTEGER,
    by_name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_log_message ON message_log(message_id);
  CREATE TABLE IF NOT EXISTS proof_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    log_id INTEGER NOT NULL,
    data BLOB NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_proof_log ON proof_photos(log_id);
  CREATE TABLE IF NOT EXISTS evidence_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER NOT NULL,
    data BLOB NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_evidence_message ON evidence_photos(message_id);
  CREATE TABLE IF NOT EXISTS announcements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL DEFAULT '',
    author_id INTEGER,
    author_name TEXT,
    event_date TEXT,
    event_time TEXT,
    event_end TEXT,
    venue TEXT,
    edited_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS announcement_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    announcement_id INTEGER NOT NULL,
    data BLOB NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_news_photos ON announcement_photos(announcement_id);
  CREATE TABLE IF NOT EXISTS officials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    position TEXT NOT NULL,
    photo BLOB,
    updated_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS site_content (
    name TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TEXT,
    updated_by TEXT
  );
`;
    var REF_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    var newRef = /* @__PURE__ */ __name(() => "ZAP-" + Array.from(crypto.randomBytes(6), (b) => REF_CHARS[b % REF_CHARS.length]).join(""), "newRef");
    var EVIDENCE_TOPICS = ["Report a concern", "Suggestion", "Other"];
    var withPhotos = /* @__PURE__ */ __name(async (rows) => {
      if (!rows.length) return [];
      const ids = rows.map((r) => r.id);
      const ph = await all(`SELECT id, announcement_id FROM announcement_photos WHERE announcement_id IN (${marks(ids)}) ORDER BY id`, ids);
      return rows.map((r) => ({
        ...r,
        photos: ph.filter((p) => p.announcement_id === r.id).map((p) => "/news-photos/" + p.id + ".jpg")
      }));
    }, "withPhotos");
    var POSITIONS = {
      "Punong Barangay (Chairman)": "admin",
      "Barangay Secretary": "admin",
      "Barangay Kagawad": "staff",
      "SK Chairperson": "announcer"
    };
    var TOPICS = ["Request a document", "Report a concern", "Suggestion", "Other"];
    var STATUSES = ["new", "in progress", "resolved"];
    var hashPw = /* @__PURE__ */ __name((pw) => {
      const salt = crypto.randomBytes(16);
      return salt.toString("hex") + ":" + crypto.scryptSync(pw, salt, 64).toString("hex");
    }, "hashPw");
    var verifyPw = /* @__PURE__ */ __name((pw, stored) => {
      const [s, h2] = String(stored).split(":");
      if (!s || !h2) return false;
      const calc = crypto.scryptSync(String(pw), Buffer.from(s, "hex"), 64);
      const hb = Buffer.from(h2, "hex");
      return hb.length === calc.length && crypto.timingSafeEqual(calc, hb);
    }, "verifyPw");
    var DUMMY = null;
    var sha = /* @__PURE__ */ __name((t) => crypto.createHash("sha256").update(t).digest("hex"), "sha");
    var SESSION_MS = 8 * 60 * 60 * 1e3;
    var secure = NODE_ENV === "production" ? "; Secure" : "";
    var getCookie = /* @__PURE__ */ __name((req, name) => {
      const m = (req.headers.cookie || "").split(";").map((s) => s.trim()).find((s) => s.startsWith(name + "="));
      return m ? decodeURIComponent(m.slice(name.length + 1)) : "";
    }, "getCookie");
    var startSession = /* @__PURE__ */ __name(async (res, userId) => {
      const token = crypto.randomBytes(32).toString("hex");
      await run("INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)", [sha(token), userId, Date.now() + SESSION_MS]);
      res.setHeader("Set-Cookie", `sid=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${SESSION_MS / 1e3}${secure}`);
    }, "startSession");
    var USER_COLS = "id, username, full_name, position, role, must_change, active, email, phone, bio, updated_at, (avatar IS NOT NULL) AS has_avatar";
    var userById = /* @__PURE__ */ __name((id) => get(`SELECT ${USER_COLS} FROM users WHERE id = ?`, [id]), "userById");
    var h = /* @__PURE__ */ __name((fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next), "h");
    var auth = h(async (req, res, next) => {
      const t = getCookie(req, "sid");
      if (!t) return res.status(401).json({ error: "Not signed in" });
      const u = await get(`
    SELECT u.id, u.username, u.full_name, u.position, u.role, u.must_change, u.email, u.phone, u.bio, u.updated_at,
           (u.avatar IS NOT NULL) AS has_avatar
    FROM sessions s JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > ? AND u.active = 1`, [sha(t), Date.now()]);
      if (!u) return res.status(401).json({ error: "Not signed in" });
      req.user = u;
      req.sid = sha(t);
      next();
    });
    var ready = /* @__PURE__ */ __name((req, res, next) => req.user.must_change ? res.status(403).json({ error: "Please change your temporary password first.", mustChange: true }) : next(), "ready");
    var can = /* @__PURE__ */ __name((...roles) => (req, res, next) => roles.includes(req.user.role) ? next() : res.status(403).json({ error: "You do not have access to this." }), "can");
    var limit = /* @__PURE__ */ __name((max, minutes) => {
      let mw = null;
      return (req, res, next) => (mw ||= rateLimit({
        windowMs: minutes * 60 * 1e3,
        max,
        standardHeaders: true,
        legacyHeaders: false,
        keyGenerator: /* @__PURE__ */ __name((req2) => req2.headers["cf-connecting-ip"] || req2.ip || "unknown", "keyGenerator"),
        validate: false,
        message: { error: "Too many attempts. Please try again later." }
      }))(req, res, next);
    }, "limit");
    var clean = /* @__PURE__ */ __name((v, max) => String(v ?? "").trim().slice(0, max), "clean");
    var me = /* @__PURE__ */ __name((u) => ({
      id: u.id,
      username: u.username,
      full_name: u.full_name,
      position: u.position,
      role: u.role,
      must_change: !!u.must_change,
      email: u.email || "",
      phone: u.phone || "",
      bio: u.bio || "",
      has_avatar: !!u.has_avatar,
      updated_at: u.updated_at || ""
    }), "me");
    var validDate = /* @__PURE__ */ __name((s) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
      const d = /* @__PURE__ */ new Date(s + "T00:00:00Z");
      return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
    }, "validDate");
    var validTime = /* @__PURE__ */ __name((s) => /^([01]\d|2[0-3]):[0-5]\d$/.test(s), "validTime");
    function readAnnouncement(body) {
      const title2 = clean(body?.title, 120), text = clean(body?.body, 3e3);
      if (title2.length < 3) return { error: "Title is too short" };
      const event_date = clean(body?.event_date, 10);
      const event_time = clean(body?.event_time, 5);
      const event_end = clean(body?.event_end, 5);
      const venue = clean(body?.venue, 150);
      if (event_date && !validDate(event_date)) return { error: "Event date is not valid." };
      if (event_time && !validTime(event_time) || event_end && !validTime(event_end)) return { error: "Event time is not valid." };
      if (event_end && !event_time) return { error: "Add a start time before the end time." };
      if (event_end && event_time && event_end <= event_time) return { error: "End time must be after the start time." };
      return { title: title2, body: text, event_date: event_date || null, event_time: event_time || null, event_end: event_end || null, venue: venue || null };
    }
    __name(readAnnouncement, "readAnnouncement");
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var PHONE_RE = /^[0-9+()\-\s]{7,20}$/;
    function readProfile(body) {
      const full_name = clean(body?.full_name, 100);
      const email = clean(body?.email, 120).toLowerCase();
      const phone = clean(body?.phone, 20);
      const bio = clean(body?.bio, 200);
      if (full_name.length < 2) return { error: "Enter the full name." };
      if (email && !EMAIL_RE.test(email)) return { error: "Enter a valid email address." };
      if (phone && !PHONE_RE.test(phone)) return { error: "Enter a valid phone number (digits, +, -, spaces)." };
      return { full_name, email: email || null, phone: phone || null, bio: bio || null };
    }
    __name(readProfile, "readProfile");
    function readPhotos(raw) {
      const bufs = [];
      for (const p of raw) {
        const mm = /^data:image\/jpeg;base64,([A-Za-z0-9+/=]+)$/.exec(String(p));
        const buf = mm ? Buffer.from(mm[1], "base64") : null;
        if (!buf || buf.length > 2 * 1024 * 1024 || buf[0] !== 255 || buf[1] !== 216 || buf[2] !== 255) {
          return { error: "Each photo must be a JPEG image under 2 MB." };
        }
        bufs.push(buf);
      }
      return { bufs };
    }
    __name(readPhotos, "readPhotos");
    var sendJpeg = /* @__PURE__ */ __name((res, data, cache) => {
      res.set({ "Content-Type": "image/jpeg", "Cache-Control": cache, "X-Content-Type-Options": "nosniff" });
      res.send(blob(data));
    }, "sendJpeg");
    var app2 = express();
    var booted = null;
    app2.use(h(async (req, res, next) => {
      await (booted ||= boot().catch((e) => {
        booted = null;
        throw e;
      }));
      next();
    }));
    app2.set("trust proxy", 1);
    var bigBody = /* @__PURE__ */ __name((req) => req.method === "PATCH" && (req.path.startsWith("/api/admin/messages/") || req.path.startsWith("/api/staff/announcements/") || req.path.startsWith("/api/admin/officials/") || req.path === "/api/staff/profile") || req.method === "POST" && (req.path === "/api/staff/announcements" || req.path === "/api/admin/officials" || req.path === "/api/messages"), "bigBody");
    app2.use((req, res, next) => bigBody(req) || req.method === "PUT" && (req.path === "/api/admin/content" || req.path === "/api/admin/services") ? next() : express.json({ limit: "20kb" })(req, res, next));
    app2.get("/api/time", (req, res) => {
      res.set("Cache-Control", "no-store");
      res.json({ now: Date.now(), source: "cloudflare" });
    });
    app2.get("/news-photos/:name", h(async (req, res) => {
      const id = parseInt(req.params.name, 10);
      if (!Number.isInteger(id)) return res.status(404).end();
      const p = await get("SELECT data FROM announcement_photos WHERE id = ?", [id]);
      if (!p) return res.status(404).end();
      sendJpeg(res, p.data, "public, max-age=604800, immutable");
    }));
    app2.get("/api/announcements", h(async (req, res) => {
      const rows = await all("SELECT id, title, body, created_at, edited_at, event_date, event_time, event_end, venue FROM announcements ORDER BY id DESC LIMIT 30");
      res.json(await withPhotos(rows));
    }));
    var OFFICIAL_POSITIONS = ["Punong Barangay", "Barangay Kagawad", "SK Chairperson", "Barangay Secretary", "Barangay Treasurer"];
    var rankOf = /* @__PURE__ */ __name((p) => {
      const i = OFFICIAL_POSITIONS.indexOf(p);
      return i < 0 ? 99 : i;
    }, "rankOf");
    function readOfficial(body) {
      const full_name = clean(body?.full_name, 100);
      const position = body?.position;
      if (full_name.length < 2) return { error: "Enter the full name." };
      if (!OFFICIAL_POSITIONS.includes(position)) return { error: "Choose a position." };
      return { full_name, position };
    }
    __name(readOfficial, "readOfficial");
    app2.get("/api/officials", h(async (req, res) => {
      const rows = await all("SELECT id, full_name, position, updated_at, created_at, (photo IS NOT NULL) AS has_photo FROM officials ORDER BY id");
      rows.sort((a, b) => rankOf(a.position) - rankOf(b.position) || a.id - b.id);
      res.set("Cache-Control", "no-store");
      res.json(rows.map((r) => ({ ...r, has_photo: !!r.has_photo })));
    }));
    app2.get("/official-photos/:name", h(async (req, res) => {
      const id = parseInt(req.params.name, 10);
      if (!Number.isInteger(id)) return res.status(404).end();
      const p = await get("SELECT photo FROM officials WHERE id = ?", [id]);
      if (!p || !p.photo) return res.status(404).end();
      sendJpeg(res, p.photo, "public, max-age=86400");
    }));
    app2.post("/api/messages", limit(5, 15), express.json({ limit: "9mb" }), h(async (req, res) => {
      const { name, contact, topic, message, website } = req.body || {};
      if (website) return res.json({ ok: true });
      const n = clean(name, 100), c = clean(contact, 120), m = clean(message, 2e3);
      const t = TOPICS.includes(topic) ? topic : "Other";
      if (n.length < 2 || c.length < 5 || m.length < 5) {
        return res.status(400).json({ error: "Please fill in your name, contact, and message." });
      }
      let bufs = [];
      const raw = Array.isArray(req.body?.evidence) ? req.body.evidence : [];
      if (raw.length) {
        if (!EVIDENCE_TOPICS.includes(t)) return res.status(400).json({ error: "Photos cannot be attached to this topic." });
        if (raw.length > 3) return res.status(400).json({ error: "You can attach up to 3 photos." });
        const ph = readPhotos(raw);
        if (ph.error) return res.status(400).json({ error: ph.error });
        bufs = ph.bufs;
      }
      const tx = await client.transaction("write");
      let ref2, id;
      try {
        for (let i = 0; i < 5; i++) {
          ref2 = newRef();
          try {
            const r = await run("INSERT INTO messages (name, contact, topic, message, ref) VALUES (?, ?, ?, ?, ?)", [n, c, t, m, ref2], tx);
            id = Number(r.lastInsertRowid);
            break;
          } catch (e) {
            if (i === 4) throw e;
          }
        }
        for (const buf of bufs) await run("INSERT INTO evidence_photos (message_id, data) VALUES (?, ?)", [id, buf], tx);
        await tx.commit();
      } catch (e) {
        await tx.rollback().catch(() => {
        });
        throw e;
      } finally {
        tx.close();
      }
      res.status(201).json({ ok: true, ref: ref2 });
    }));
    var latestProof = /* @__PURE__ */ __name((id) => get("SELECT id, note, created_at FROM message_log WHERE message_id = ? AND status = 'resolved' ORDER BY id DESC LIMIT 1", [id]), "latestProof");
    app2.get("/api/status/:ref", limit(20, 15), h(async (req, res) => {
      const ref2 = clean(req.params.ref, 20).toUpperCase();
      const m = /^ZAP-[A-Z0-9]{6}$/.test(ref2) ? await get("SELECT id, ref, topic, status, created_at, updated_at FROM messages WHERE ref = ?", [ref2]) : null;
      if (!m) return res.status(404).json({ error: "Reference number not found. Check the number and try again." });
      const proof = m.status === "resolved" ? await latestProof(m.id) : null;
      const photo_count = proof ? (await get("SELECT COUNT(*) AS n FROM proof_photos WHERE log_id = ?", [proof.id])).n : 0;
      res.set("Cache-Control", "no-store");
      res.json({
        ref: m.ref,
        topic: m.topic,
        status: m.status,
        created_at: m.created_at,
        updated_at: m.updated_at,
        resolution: proof ? proof.note : null,
        resolved_at: proof ? proof.created_at : null,
        photo_count
      });
    }));
    app2.get("/api/status/:ref/photo/:n", limit(120, 15), h(async (req, res) => {
      const ref2 = clean(req.params.ref, 20).toUpperCase();
      const n = Number(req.params.n);
      const m = /^ZAP-[A-Z0-9]{6}$/.test(ref2) ? await get("SELECT id, status FROM messages WHERE ref = ?", [ref2]) : null;
      if (!m || m.status !== "resolved" || !Number.isInteger(n) || n < 0) return res.status(404).end();
      const proof = await latestProof(m.id);
      if (!proof) return res.status(404).end();
      const ids = await all("SELECT id FROM proof_photos WHERE log_id = ? ORDER BY id", [proof.id]);
      if (!ids[n]) return res.status(404).end();
      const f = await get("SELECT data FROM proof_photos WHERE id = ?", [ids[n].id]);
      if (!f) return res.status(404).end();
      sendJpeg(res, f.data, "private, no-store");
    }));
    var GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    var GEMINI_MODEL = "gemini-3.8-flash";
    async function pickModel() {
      try {
        const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models?pageSize=100", {
          headers: { "x-goog-api-key": GEMINI_API_KEY },
          signal: AbortSignal.timeout(1e4)
        });
        const d = await r.json();
        const names = (d.models || []).filter((m) => (m.supportedGenerationMethods || []).includes("generateContent")).map((m) => m.name.replace("models/", "")).filter((n) => !/preview|exp|image|tts|live|audio|embedding|thinking|robotics|computer/.test(n));
        console.log("Models available to your key:", names.join(", "));
        const pick = names.find((n) => /flash-lite/.test(n)) || names.find((n) => /flash/.test(n));
        if (pick) {
          GEMINI_MODEL = pick;
          console.log("Chat model selected:", GEMINI_MODEL);
        }
      } catch (e) {
        console.error("Could not list models:", e.name);
      }
    }
    __name(pickModel, "pickModel");
    var modelReady = null;
    var ensureModel = /* @__PURE__ */ __name(() => modelReady ||= GEMINI_API_KEY ? pickModel() : Promise.resolve(), "ensureModel");
    var CHAT_SYSTEM = `You are the virtual assistant on the official website of Barangay Zapatera, Cebu City, Philippines.
Many residents do not know what to ask or which service they need. Your job is to guide them step by step.
Answer briefly and in simple, friendly language.

Language rules (very important):
- Always reply in the same language as the resident's LATEST message. This works for any language: English, Bisaya (Cebuano), Tagalog, or another one.
- If the resident switches language, switch with them in your very next reply.
- If the latest message is too short to tell (for example "ok", "oo", a number), keep using the language of their previous messages.
- Write the SUGGEST options in that same language too.
- If you draft a message for the resident, write the draft in the language they are using.
- Keep website names exactly as they appear on the site, for example "Send a message", "Report a concern", "Check your request". You may explain them in the resident's language.
How to guide:
- If the resident is vague or unsure, ask ONE short question at a time to find out what they need. Never ask more than one question per reply.
- When you understand the need, name the right service, then explain what to bring, where to go, and the next step.
- Match situations to services:
  * Job application, ID, or general official purpose: Barangay Clearance
  * Proof that they live in Zapatera: Certificate of Residency
  * Medical, school, scholarship, or legal assistance for low-income residents: Certificate of Indigency
  * Starting or renewing a business: Business Clearance
  * Dispute with a neighbor or family member: Mediation (Katarungang Pambarangay), free
  * Problem in the community (noise, garbage, broken light, safety): use "Send a message" and choose "Report a concern"
  * Ideas for the barangay: "Send a message" and choose "Suggestion"
  * Already sent something: ask them to type their ZAP-XXXXXX reference number here in the chat
- If the resident wants to send a message, you may help them write it clearly, and remind them to add it in the "Send a message" form.

Facts you may use:
- Office hours: [Mon to Fri, 8:00 AM to 5:00 PM]
- Address: [Barangay Hall address]
- Phone: [number]
- Fees: [fees]. Bring a valid ID and proof of residency for documents.
- In a life-threatening emergency, call 911.

Rules:
- Only use the facts above. If you do not know something (fees, schedules, requirements not listed), say so and tell the resident to contact the Barangay Hall.
- Never promise approval, processing times, or exceptions.
- Do not ask for or accept IDs, passwords, or other private information.
- You cannot file requests. If the resident wants to check a request, ask them to type their reference number (ZAP-XXXXXX) here in the chat. The system will show the status automatically. Do not tell them to go to another section.
- Stay on barangay topics.
- Write in plain text only. Never use asterisks, bold, headings, tables, or lines made of dashes.
- Use a professional, courteous tone, like a barangay front-desk officer. Be clear and direct. Avoid casual filler such as "Don't worry".
- To list items, put each on its own line starting with "- ".
- When the resident asks you to draft a message, write it as a short, formal message in plain text. Start with "Subject: ..." on its own line, then the message. Use blanks like "____" for details the resident must fill in, and do not use brackets.

Format: end EVERY reply with one final line in exactly this form, with 2 or 3 short options (under 6 words each), written in the resident's language the way the resident would say them. Keep the word SUGGEST: in English.
SUGGEST: option one | option two | option three`;
    var plain = /* @__PURE__ */ __name((t) => t.replace(/\*\*(.+?)\*\*/g, "$1").replace(/__(.+?)__/g, "$1").replace(/^\s*#{1,6}\s*/gm, "").replace(/^\s*[-*_]{3,}\s*$/gm, "").replace(/^\s*\*\s+/gm, "- ").replace(/\*/g, "").replace(/\n{3,}/g, "\n\n").trim(), "plain");
    var chatSystem = /* @__PURE__ */ __name(async () => {
      const rows = await all("SELECT name, value FROM site_content");
      const c = {};
      rows.forEach((r) => {
        c[r.name] = r.value;
      });
      let svc = [];
      try {
        svc = c.services ? JSON.parse(c.services) : [];
      } catch {
      }
      const svcFacts = svc.map((s) => `- Service: ${s.name}. ${s.desc || ""} Bring: ${(s.reqs || []).join(", ") || "ask the Barangay Hall"}. Fee: ${s.fee || "ask the Barangay Hall"}`).join("\n");
      const facts = [
        (c.days || c.hours) && `- Office hours: ${[c.days, c.hours].filter(Boolean).join(", ")}`,
        c.address && `- Address: ${c.address}`,
        c.phone && `- Phone: ${c.phone}`,
        svcFacts
      ].filter(Boolean).join("\n");
      return facts ? CHAT_SYSTEM + "\n\nVerified details from the Barangay Hall (use these instead of any bracketed placeholder above):\n" + facts : CHAT_SYSTEM;
    }, "chatSystem");
    app2.post("/api/chat", limit(20, 10), h(async (req, res) => {
      if (!GEMINI_API_KEY) return res.status(503).json({ error: "The assistant is not available right now." });
      await ensureModel();
      const msgs = (Array.isArray(req.body?.messages) ? req.body.messages : []).filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim()).slice(-6).map((m) => ({ role: m.role, content: m.content.slice(0, 600) }));
      while (msgs.length && msgs[0].role !== "user") msgs.shift();
      if (!msgs.length || msgs[msgs.length - 1].role !== "user") return res.status(400).json({ error: "Please type a question." });
      const detectLang = /* @__PURE__ */ __name((t) => {
        const s = " " + String(t).toLowerCase().replace(/[^a-zñ\s]/g, " ").replace(/\s+/g, " ") + " ";
        const count = /* @__PURE__ */ __name((ws) => ws.filter((w) => s.includes(" " + w + " ")).length, "count");
        const bis = count(["unsa", "asa", "naa", "wala", "dili", "pila", "palihug", "kinahanglan", "nako", "akong", "nimo", "imo", "ug", "og", "nga", "diay", "unsaon", "mangayo", "tabang", "kanus", "kini", "kana", "ra", "oo", "di", "akoa", "atoa", "kuhaon", "gikan"]);
        const tl = count(["ano", "saan", "paano", "magkano", "kailan", "ako", "ang", "ng", "mga", "po", "hindi", "may", "kailangan", "namin", "paki", "nais", "para", "ito", "iyon", "yung", "naman", "nasaan", "opo", "oo po", "gusto ko"]);
        return bis > tl ? "bis" : tl > bis ? "tl" : "en";
      }, "detectLang");
      const userTexts = msgs.filter((m) => m.role === "user").map((m) => m.content).reverse();
      let lang = detectLang(userTexts[0]);
      if (lang === "en" && userTexts[0].trim().split(/\s+/).length < 4) {
        lang = userTexts.slice(1, 4).map(detectLang).find((l) => l !== "en") || "en";
      }
      const T = {
        en: {
          ask: "Please type your reference number here. It looks like ZAP-XXXXXX and was given to you after you sent your message.",
          nf: /* @__PURE__ */ __name((r2) => `I could not find the reference number ${r2}. Please check the number and try again.`, "nf"),
          head: /* @__PURE__ */ __name((r2, t) => `Reference ${r2} (${t})`, "head"),
          status: "Status",
          sent: "Sent on",
          upd: "Last update on",
          done: "What was done",
          photos: 'Proof photos are available under "Check your request" on this website.',
          labels: { "new": "Received", "in progress": "In progress", "resolved": "Resolved" },
          notes: { "new": "The Barangay Hall has received your message and will review it.", "in progress": "The Barangay Hall is working on your request.", "resolved": "Your request has been marked as resolved." },
          sug: ["Check another request", "Send a message"],
          sugNf: ["Check another request", "Contact the Barangay Hall"]
        },
        bis: {
          ask: "Palihug i-type diri ang imong reference number. Ingon ani kini: ZAP-XXXXXX, ug gihatag kini human nimo napadala ang imong mensahe.",
          nf: /* @__PURE__ */ __name((r2) => `Wala nako makita ang reference number nga ${r2}. Palihug susiha ang numero ug sulayi usab.`, "nf"),
          head: /* @__PURE__ */ __name((r2, t) => `Reference ${r2} (${t})`, "head"),
          status: "Kahimtang",
          sent: "Gipadala sa",
          upd: "Kataposang update sa",
          done: "Unsa ang nahimo",
          photos: 'Anaa ang mga proof photo sa "Check your request" niini nga website.',
          labels: { "new": "Nadawat", "in progress": "Gitrabaho pa", "resolved": "Nasulbad na" },
          notes: { "new": "Nadawat na sa Barangay Hall ang imong mensahe ug ireview kini.", "in progress": "Gitrabaho na sa Barangay Hall ang imong hangyo.", "resolved": "Ang imong hangyo gimarkahan na nga nasulbad." },
          sug: ["Susiha ang lain nga hangyo", "Magpadala og mensahe"],
          sugNf: ["Susiha ang lain nga hangyo", "Kontaka ang Barangay Hall"]
        },
        tl: {
          ask: "Pakilagay dito ang iyong reference number. Ganito ang itsura nito: ZAP-XXXXXX, at ibinigay ito sa iyo matapos mong ipadala ang mensahe.",
          nf: /* @__PURE__ */ __name((r2) => `Hindi ko mahanap ang reference number na ${r2}. Pakisuri ang numero at subukan muli.`, "nf"),
          head: /* @__PURE__ */ __name((r2, t) => `Reference ${r2} (${t})`, "head"),
          status: "Katayuan",
          sent: "Ipinadala noong",
          upd: "Huling update noong",
          done: "Ang ginawa",
          photos: 'Makikita ang mga proof photo sa "Check your request" sa website na ito.',
          labels: { "new": "Natanggap", "in progress": "Ginagawa pa", "resolved": "Naresolba na" },
          notes: { "new": "Natanggap na ng Barangay Hall ang iyong mensahe at susuriin ito.", "in progress": "Ginagawa na ng Barangay Hall ang iyong kahilingan.", "resolved": "Namarkahan na bilang naresolba ang iyong kahilingan." },
          sug: ["Suriin ang ibang request", "Magpadala ng mensahe"],
          sugNf: ["Suriin ang ibang request", "Kontakin ang Barangay Hall"]
        }
      };
      const L = T[lang];
      const lastText = msgs[msgs.length - 1].content.trim();
      const refMatch = lastText.match(/ZAP-[A-Z0-9]{6}/i);
      if (/^(check (my )?request|check request status|enter my reference number)$/i.test(lastText)) {
        return res.json({ reply: L.ask, suggestions: [] });
      }
      if (refMatch) {
        const ref2 = refMatch[0].toUpperCase();
        const m = await get("SELECT id, ref, topic, status, created_at, updated_at FROM messages WHERE ref = ?", [ref2]);
        if (!m) return res.json({ reply: L.nf(ref2), suggestions: L.sugNf });
        const day = /* @__PURE__ */ __name((s) => (/* @__PURE__ */ new Date(String(s).replace(" ", "T") + "Z")).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Manila" }), "day");
        let reply2 = `${L.head(m.ref, m.topic)}
${L.status}: ${L.labels[m.status] || m.status}
${L.notes[m.status] || ""}
${L.sent} ${day(m.created_at)}.`;
        if (m.updated_at) reply2 += ` ${L.upd} ${day(m.updated_at)}.`;
        if (m.status === "resolved") {
          const proof = await latestProof(m.id);
          if (proof && proof.note) reply2 += `

${L.done}: ${proof.note}`;
          const cnt = proof ? (await get("SELECT COUNT(*) AS n FROM proof_photos WHERE log_id = ?", [proof.id])).n : 0;
          if (cnt) reply2 += `

${L.photos}`;
        }
        return res.json({ reply: reply2, suggestions: L.sug });
      }
      if (refMatch) {
        const ref2 = refMatch[0].toUpperCase();
        const m = await get("SELECT id, ref, topic, status, created_at, updated_at FROM messages WHERE ref = ?", [ref2]);
        if (!m) {
          return res.json({ reply: `I could not find the reference number ${ref2}. Please check the number and try again.`, suggestions: ["Check another request", "Contact the Barangay Hall"] });
        }
        const day = /* @__PURE__ */ __name((s) => (/* @__PURE__ */ new Date(String(s).replace(" ", "T") + "Z")).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Manila" }), "day");
        const label = { "new": "Received", "in progress": "In progress", "resolved": "Resolved" }[m.status] || m.status;
        const note = {
          "new": "The Barangay Hall has received your message and will review it.",
          "in progress": "The Barangay Hall is working on your request.",
          "resolved": "Your request has been marked as resolved."
        }[m.status] || "";
        let reply2 = `Reference ${m.ref} (${m.topic})
Status: ${label}
${note}
Sent on ${day(m.created_at)}.`;
        if (m.updated_at) reply2 += ` Last update on ${day(m.updated_at)}.`;
        if (m.status === "resolved") {
          const proof = await latestProof(m.id);
          if (proof && proof.note) reply2 += `

What was done: ${proof.note}`;
          const cnt = proof ? (await get("SELECT COUNT(*) AS n FROM proof_photos WHERE log_id = ?", [proof.id])).n : 0;
          if (cnt) reply2 += `

Proof photos are available under "Check your request" on this website.`;
        }
        return res.json({ reply: reply2, suggestions: ["Check another request", "Send a message"] });
      }
      const sysText = await chatSystem();
      const callGemini = /* @__PURE__ */ __name((genConfig) => fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
        method: "POST",
        headers: { "content-type": "application/json", "x-goog-api-key": GEMINI_API_KEY },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: sysText }] },
          contents: msgs.map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] })),
          generationConfig: genConfig
        }),
        signal: AbortSignal.timeout(2e4)
      }), "callGemini");
      let r, data;
      try {
        r = await callGemini({ maxOutputTokens: 350, temperature: 0.3, thinkingConfig: { thinkingLevel: "minimal" } });
        data = await r.json().catch(() => ({}));
        if (r.status === 400 && /thinking/i.test(data?.error?.message || "")) {
          r = await callGemini({ maxOutputTokens: 350, temperature: 0.3 });
          data = await r.json().catch(() => ({}));
        }
      } catch (e) {
        console.error("Chat API timeout or network error:", e.name);
        return res.status(504).json({ error: "The assistant is taking too long. Please try again." });
      }
      if (!r.ok) {
        console.error("Chat API error", r.status, data?.error?.message || "");
        return res.status(502).json({ error: "The assistant is busy. Please try again in a moment." });
      }
      let reply = (data.candidates?.[0]?.content?.parts || []).filter((p) => !p.thought).map((p) => p.text || "").join("\n").trim();
      let suggestions = [];
      const sm = reply.match(/\n?\s*SUGGEST:\s*(.+)\s*$/i);
      if (sm) {
        suggestions = sm[1].split("|").map((s) => s.trim()).filter(Boolean).slice(0, 3).map((s) => s.slice(0, 60));
        reply = reply.slice(0, sm.index).trim();
      }
      reply = plain(reply);
      res.json({ reply: reply || "Sorry, I could not answer that. Please contact the Barangay Hall.", suggestions });
    }));
    app2.post("/api/auth/login", limit(30, 15), h(async (req, res) => {
      const username = clean(req.body?.username, 30).toLowerCase();
      const password = String(req.body?.password ?? "");
      const u = await get(`SELECT ${USER_COLS}, password_hash FROM users WHERE username = ?`, [username]);
      const good = verifyPw(password, u ? u.password_hash : DUMMY ||= hashPw("not-a-real-password"));
      if (!u || !good || !u.active) return res.status(401).json({ error: "Wrong username or password." });
      await startSession(res, u.id);
      res.json({ user: me(u) });
    }));
    app2.post("/api/auth/logout", h(async (req, res) => {
      const t = getCookie(req, "sid");
      if (t) await run("DELETE FROM sessions WHERE token_hash = ?", [sha(t)]);
      res.setHeader("Set-Cookie", "sid=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0");
      res.json({ ok: true });
    }));
    app2.get("/api/auth/me", auth, (req, res) => res.json({ user: me(req.user) }));
    app2.post("/api/auth/change-password", auth, limit(10, 15), h(async (req, res) => {
      const current = String(req.body?.current ?? ""), next = String(req.body?.next ?? "");
      const row = await get("SELECT password_hash FROM users WHERE id = ?", [req.user.id]);
      if (!verifyPw(current, row.password_hash)) return res.status(400).json({ error: "Current password is wrong." });
      if (next.length < 8) return res.status(400).json({ error: "New password must be at least 8 characters." });
      if (next === current) return res.status(400).json({ error: "New password must be different." });
      await client.batch([
        { sql: "UPDATE users SET password_hash = ?, must_change = 0 WHERE id = ?", args: [hashPw(next), req.user.id] },
        { sql: "DELETE FROM sessions WHERE user_id = ? AND token_hash <> ?", args: [req.user.id, req.sid] }
      ], "write");
      res.json({ ok: true });
    }));
    app2.patch("/api/staff/profile", auth, ready, express.json({ limit: "2mb" }), h(async (req, res) => {
      const f = readProfile(req.body);
      if (f.error) return res.status(400).json({ error: f.error });
      let sql = "UPDATE users SET full_name = ?, email = ?, phone = ?, bio = ?, updated_at = datetime('now')";
      const args = [f.full_name, f.email, f.phone, f.bio];
      if (req.body?.avatar) {
        const ph = readPhotos([req.body.avatar]);
        if (ph.error) return res.status(400).json({ error: "Profile photo must be a JPEG image under 2 MB." });
        sql += ", avatar = ?";
        args.push(ph.bufs[0]);
      } else if (req.body?.remove_avatar) {
        sql += ", avatar = NULL";
      }
      sql += " WHERE id = ?";
      args.push(req.user.id);
      await client.batch([
        { sql, args },
        { sql: "UPDATE announcements SET author_name = ? WHERE author_id = ?", args: [f.full_name, req.user.id] }
      ], "write");
      res.json({ user: me(await userById(req.user.id)) });
    }));
    app2.get("/api/staff/avatar/:id", auth, ready, h(async (req, res) => {
      const row = await get("SELECT avatar FROM users WHERE id = ?", [idParam(req)]);
      if (!row || !row.avatar) return res.status(404).end();
      sendJpeg(res, row.avatar, "private, max-age=3600");
    }));
    app2.get("/api/admin/messages", auth, ready, can("admin", "staff"), h(async (req, res) => {
      const rows = await all("SELECT * FROM messages ORDER BY id DESC LIMIT 500");
      let ev = [];
      if (rows.length) {
        const ids = rows.map((r) => r.id);
        ev = await all(`SELECT id, message_id FROM evidence_photos WHERE message_id IN (${marks(ids)}) ORDER BY id`, ids);
      }
      res.json(rows.map((m) => ({ ...m, evidence: ev.filter((e) => e.message_id === m.id).map((e) => e.id) })));
    }));
    app2.get("/api/admin/evidence/:id", auth, ready, can("admin", "staff"), h(async (req, res) => {
      const p = await get("SELECT data FROM evidence_photos WHERE id = ?", [idParam(req)]);
      if (!p) return res.status(404).end();
      sendJpeg(res, p.data, "private, no-store");
    }));
    app2.patch("/api/admin/messages/:id", auth, ready, can("admin", "staff"), express.json({ limit: "9mb" }), h(async (req, res) => {
      const id = idParam(req);
      const status = req.body?.status;
      if (!STATUSES.includes(status)) return res.status(400).json({ error: "Invalid status" });
      if (!await get("SELECT 1 AS x FROM messages WHERE id = ?", [id])) return res.status(404).json({ error: "Message not found." });
      const note = clean(req.body?.note, 500);
      if (status === "resolved" && note.length < 5) {
        return res.status(400).json({ error: "Describe what was done before marking this as resolved." });
      }
      const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
      if (raw.length > 4) return res.status(400).json({ error: "You can add up to 4 proof photos." });
      const ph = readPhotos(raw);
      if (ph.error) return res.status(400).json({ error: ph.error });
      const tx = await client.transaction("write");
      try {
        await run("UPDATE messages SET status = ?, handled_by = ?, updated_at = datetime('now') WHERE id = ?", [status, req.user.full_name, id], tx);
        const info = await run("INSERT INTO message_log (message_id, status, note, by_id, by_name) VALUES (?, ?, ?, ?, ?)", [id, status, note, req.user.id, req.user.full_name], tx);
        const logId = Number(info.lastInsertRowid);
        for (const buf of ph.bufs) await run("INSERT INTO proof_photos (log_id, data) VALUES (?, ?)", [logId, buf], tx);
        await tx.commit();
      } catch (e) {
        await tx.rollback().catch(() => {
        });
        throw e;
      } finally {
        tx.close();
      }
      res.json({ ok: true });
    }));
    app2.get("/api/admin/messages/:id/log", auth, ready, can("admin", "staff"), h(async (req, res) => {
      const logs = await all("SELECT id, status, note, by_name, created_at FROM message_log WHERE message_id = ? ORDER BY id", [idParam(req)]);
      let ph = [];
      if (logs.length) {
        const ids = logs.map((l) => l.id);
        ph = await all(`SELECT id, log_id FROM proof_photos WHERE log_id IN (${marks(ids)}) ORDER BY id`, ids);
      }
      res.json(logs.map((l) => ({ ...l, photos: ph.filter((p) => p.log_id === l.id).map((p) => p.id) })));
    }));
    app2.get("/api/admin/proof/:id", auth, ready, can("admin", "staff"), h(async (req, res) => {
      const p = await get("SELECT data FROM proof_photos WHERE id = ?", [idParam(req)]);
      if (!p) return res.status(404).end();
      sendJpeg(res, p.data, "private, no-store");
    }));
    app2.delete("/api/admin/messages/:id", auth, ready, can("admin"), h(async (req, res) => {
      const id = idParam(req);
      await client.batch([
        { sql: "DELETE FROM evidence_photos WHERE message_id = ?", args: [id] },
        { sql: "DELETE FROM proof_photos WHERE log_id IN (SELECT id FROM message_log WHERE message_id = ?)", args: [id] },
        { sql: "DELETE FROM message_log WHERE message_id = ?", args: [id] },
        { sql: "DELETE FROM messages WHERE id = ?", args: [id] }
      ], "write");
      res.json({ ok: true });
    }));
    app2.get("/api/staff/announcements", auth, ready, h(async (req, res) => {
      const rows = await all("SELECT id, title, body, created_at, edited_at, author_id, author_name, event_date, event_time, event_end, venue FROM announcements ORDER BY id DESC LIMIT 50");
      res.json(await withPhotos(rows));
    }));
    app2.post("/api/staff/announcements", auth, ready, express.json({ limit: "9mb" }), h(async (req, res) => {
      const a = readAnnouncement(req.body);
      if (a.error) return res.status(400).json({ error: a.error });
      const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
      if (raw.length > 4) return res.status(400).json({ error: "You can add up to 4 photos." });
      const ph = readPhotos(raw);
      if (ph.error) return res.status(400).json({ error: ph.error });
      const tx = await client.transaction("write");
      try {
        const info = await run(
          "INSERT INTO announcements (title, body, author_id, author_name, event_date, event_time, event_end, venue) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          [a.title, a.body, req.user.id, req.user.full_name, a.event_date, a.event_time, a.event_end, a.venue],
          tx
        );
        const id = Number(info.lastInsertRowid);
        for (const buf of ph.bufs) await run("INSERT INTO announcement_photos (announcement_id, data) VALUES (?, ?)", [id, buf], tx);
        await tx.commit();
      } catch (e) {
        await tx.rollback().catch(() => {
        });
        throw e;
      } finally {
        tx.close();
      }
      res.status(201).json({ ok: true });
    }));
    app2.patch("/api/staff/announcements/:id", auth, ready, express.json({ limit: "9mb" }), h(async (req, res) => {
      const id = idParam(req);
      const cur = await get("SELECT author_id FROM announcements WHERE id = ?", [id]);
      if (!cur) return res.status(404).json({ error: "Announcement not found." });
      if (req.user.role !== "admin" && cur.author_id !== req.user.id) {
        return res.status(403).json({ error: "You can only edit your own announcements." });
      }
      const a = readAnnouncement(req.body);
      if (a.error) return res.status(400).json({ error: a.error });
      const existing = await all("SELECT id FROM announcement_photos WHERE announcement_id = ?", [id]);
      const removeNames = new Set(Array.isArray(req.body?.remove) ? req.body.remove.map(String) : []);
      const toRemove = existing.filter((p) => removeNames.has(p.id + ".jpg"));
      const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
      if (existing.length - toRemove.length + raw.length > 4) {
        return res.status(400).json({ error: "An announcement can have up to 4 photos." });
      }
      const ph = readPhotos(raw);
      if (ph.error) return res.status(400).json({ error: ph.error });
      const stmts = [{
        sql: "UPDATE announcements SET title = ?, body = ?, event_date = ?, event_time = ?, event_end = ?, venue = ?, edited_at = datetime('now') WHERE id = ?",
        args: [a.title, a.body, a.event_date, a.event_time, a.event_end, a.venue, id]
      }];
      for (const p of toRemove) stmts.push({ sql: "DELETE FROM announcement_photos WHERE id = ?", args: [p.id] });
      for (const buf of ph.bufs) stmts.push({ sql: "INSERT INTO announcement_photos (announcement_id, data) VALUES (?, ?)", args: [id, buf] });
      await client.batch(stmts, "write");
      res.json({ ok: true });
    }));
    app2.delete("/api/staff/announcements/:id", auth, ready, h(async (req, res) => {
      const id = idParam(req);
      const a = await get("SELECT author_id FROM announcements WHERE id = ?", [id]);
      if (!a) return res.json({ ok: true });
      if (req.user.role !== "admin" && a.author_id !== req.user.id) {
        return res.status(403).json({ error: "You can only delete your own announcements." });
      }
      await client.batch([
        { sql: "DELETE FROM announcement_photos WHERE announcement_id = ?", args: [id] },
        { sql: "DELETE FROM announcements WHERE id = ?", args: [id] }
      ], "write");
      res.json({ ok: true });
    }));
    app2.post("/api/admin/officials", auth, ready, can("admin"), express.json({ limit: "2mb" }), h(async (req, res) => {
      const f = readOfficial(req.body);
      if (f.error) return res.status(400).json({ error: f.error });
      let photo = null;
      if (req.body?.photo) {
        const ph = readPhotos([req.body.photo]);
        if (ph.error) return res.status(400).json({ error: ph.error });
        photo = ph.bufs[0];
      }
      await run("INSERT INTO officials (full_name, position, photo) VALUES (?, ?, ?)", [f.full_name, f.position, photo]);
      res.status(201).json({ ok: true });
    }));
    app2.patch("/api/admin/officials/:id", auth, ready, can("admin"), express.json({ limit: "2mb" }), h(async (req, res) => {
      const id = idParam(req);
      if (!await get("SELECT 1 AS x FROM officials WHERE id = ?", [id])) return res.status(404).json({ error: "Official not found." });
      const f = readOfficial(req.body);
      if (f.error) return res.status(400).json({ error: f.error });
      let sql = "UPDATE officials SET full_name = ?, position = ?, updated_at = datetime('now')";
      const args = [f.full_name, f.position];
      if (req.body?.photo) {
        const ph = readPhotos([req.body.photo]);
        if (ph.error) return res.status(400).json({ error: ph.error });
        sql += ", photo = ?";
        args.push(ph.bufs[0]);
      } else if (req.body?.remove_photo) {
        sql += ", photo = NULL";
      }
      sql += " WHERE id = ?";
      args.push(id);
      await run(sql, args);
      res.json({ ok: true });
    }));
    app2.delete("/api/admin/officials/:id", auth, ready, can("admin"), h(async (req, res) => {
      await run("DELETE FROM officials WHERE id = ?", [idParam(req)]);
      res.json({ ok: true });
    }));
    app2.get("/api/admin/users", auth, ready, can("admin"), h(async (req, res) => {
      res.json(await all("SELECT id, username, full_name, position, role, active, must_change, created_at, email, phone, updated_at, (avatar IS NOT NULL) AS has_avatar FROM users ORDER BY id"));
    }));
    app2.post("/api/admin/users", auth, ready, can("admin"), h(async (req, res) => {
      const full_name = clean(req.body?.full_name, 100);
      const username = clean(req.body?.username, 30).toLowerCase();
      const position = req.body?.position;
      const password = String(req.body?.password ?? "");
      if (full_name.length < 2) return res.status(400).json({ error: "Enter the full name." });
      if (!/^[a-z0-9._-]{3,30}$/.test(username)) return res.status(400).json({ error: "Username: 3 to 30 letters, numbers, dot, dash or underscore." });
      if (!POSITIONS[position]) return res.status(400).json({ error: "Choose a position." });
      if (password.length < 8) return res.status(400).json({ error: "Temporary password must be at least 8 characters." });
      if (await get("SELECT 1 AS x FROM users WHERE username = ?", [username])) return res.status(409).json({ error: "That username is taken." });
      await run(
        "INSERT INTO users (username, full_name, position, role, password_hash, must_change) VALUES (?, ?, ?, ?, ?, 1)",
        [username, full_name, position, POSITIONS[position], hashPw(password)]
      );
      res.status(201).json({ ok: true });
    }));
    var activeAdmins = /* @__PURE__ */ __name(async () => (await get("SELECT COUNT(*) AS n FROM users WHERE role = 'admin' AND active = 1")).n, "activeAdmins");
    app2.patch("/api/admin/users/:id", auth, ready, can("admin"), h(async (req, res) => {
      const id = idParam(req);
      const target = await get("SELECT id, position, role, active FROM users WHERE id = ?", [id]);
      if (!target) return res.status(404).json({ error: "Account not found." });
      if (target.position === "Administrator" && req.user.position !== "Administrator") {
        return res.status(403).json({ error: "Only the Administrator can change the Administrator account." });
      }
      if (typeof req.body?.active === "boolean") {
        if (!req.body.active) {
          if (id === req.user.id) return res.status(400).json({ error: "You cannot disable your own account." });
          if (target.role === "admin" && target.active && await activeAdmins() <= 1) return res.status(400).json({ error: "At least one admin must stay active." });
          await run("DELETE FROM sessions WHERE user_id = ?", [id]);
        }
        await run("UPDATE users SET active = ? WHERE id = ?", [req.body.active ? 1 : 0, id]);
        return res.json({ ok: true });
      }
      if (typeof req.body?.password === "string") {
        if (req.body.password.length < 8) return res.status(400).json({ error: "Temporary password must be at least 8 characters." });
        await client.batch([
          { sql: "UPDATE users SET password_hash = ?, must_change = 1 WHERE id = ?", args: [hashPw(req.body.password), id] },
          { sql: "DELETE FROM sessions WHERE user_id = ?", args: [id] }
        ], "write");
        return res.json({ ok: true });
      }
      if (typeof req.body?.full_name === "string") {
        const f = readProfile(req.body);
        if (f.error) return res.status(400).json({ error: f.error });
        let position = target.position, role = target.role;
        const wanted = req.body.position;
        if (wanted !== void 0 && wanted !== target.position) {
          if (!POSITIONS[wanted]) return res.status(400).json({ error: "Choose a valid position." });
          if (id === req.user.id) return res.status(400).json({ error: "You cannot change your own position." });
          position = wanted;
          role = POSITIONS[wanted];
          if (target.role === "admin" && role !== "admin" && target.active && await activeAdmins() <= 1) {
            return res.status(400).json({ error: "At least one admin must stay active." });
          }
        }
        await client.batch([
          { sql: "UPDATE users SET full_name = ?, position = ?, role = ?, email = ?, phone = ?, updated_at = datetime('now') WHERE id = ?", args: [f.full_name, position, role, f.email, f.phone, id] },
          { sql: "UPDATE announcements SET author_name = ? WHERE author_id = ?", args: [f.full_name, id] }
        ], "write");
        return res.json({ ok: true });
      }
      res.status(400).json({ error: "Nothing to update." });
    }));
    var CONTENT = [
      { key: "hero_title", group: "Top of the page", label: "Main headline", max: 150, def: "Reliable barangay service for every Zapatera resident." },
      { key: "hero_text", group: "Top of the page", label: "Short intro under the headline", max: 300, multi: true, def: "Request documents, read official announcements, and reach the Barangay Hall quickly and clearly." },
      { key: "days", group: "Hall hours and contact details", label: "Days open", max: 60, def: "Mon to Fri" },
      { key: "hours", group: "Hall hours and contact details", label: "Office hours", max: 60, def: "8:00 AM to 5:00 PM" },
      { key: "address", group: "Hall hours and contact details", label: "Barangay Hall address", max: 200, def: "Barangay Hall, Zapatera, Cebu City" },
      { key: "phone", group: "Hall hours and contact details", label: "Phone number", max: 40, def: "" },
      { key: "email", group: "Hall hours and contact details", label: "Email address", max: 120, def: "" },
      { key: "facebook", group: "Hall hours and contact details", label: "Facebook page", max: 200, def: "" },
      { key: "about_text", group: "About Barangay Zapatera", label: "About (2 to 3 sentences)", max: 800, multi: true, def: "" },
      { key: "mission", group: "About Barangay Zapatera", label: "Mission", max: 500, multi: true, def: "" },
      { key: "vision", group: "About Barangay Zapatera", label: "Vision", max: 500, multi: true, def: "" },
      { key: "hot_hall", group: "Emergency hotlines", label: "Barangay Hall", max: 40, def: "" },
      { key: "hot_tanod", group: "Emergency hotlines", label: "Barangay Tanod", max: 40, def: "" },
      { key: "hot_health", group: "Emergency hotlines", label: "Health Center", max: 40, def: "" }
    ];
    var CONTENT_KEYS = new Map(CONTENT.map((f) => [f.key, f]));
    app2.get("/api/content", h(async (req, res) => {
      const rows = await all("SELECT name, value FROM site_content");
      const o = {};
      rows.forEach((r) => {
        o[r.name] = r.value;
      });
      res.set("Cache-Control", "no-store");
      res.json(o);
    }));
    app2.get("/api/admin/content", auth, ready, can("admin"), h(async (req, res) => {
      const rows = await all("SELECT name, value FROM site_content");
      const saved = {};
      rows.forEach((r) => {
        saved[r.name] = r.value;
      });
      res.json(CONTENT.map((f) => ({ ...f, value: saved[f.key] || "" })));
    }));
    app2.put("/api/admin/content", auth, ready, can("admin"), express.json({ limit: "100kb" }), h(async (req, res) => {
      const vals = req.body?.values;
      if (!vals || typeof vals !== "object") return res.status(400).json({ error: "Nothing to save." });
      const stmts = [];
      for (const [k, v] of Object.entries(vals)) {
        const f = CONTENT_KEYS.get(k);
        if (!f) continue;
        const text = clean(v, f.max);
        if (!text) stmts.push({ sql: "DELETE FROM site_content WHERE name = ?", args: [k] });
        else stmts.push({
          sql: "INSERT INTO site_content (name, value, updated_at, updated_by) VALUES (?, ?, datetime('now'), ?) ON CONFLICT(name) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at, updated_by = excluded.updated_by",
          args: [k, text, req.user.full_name]
        });
      }
      if (stmts.length) await client.batch(stmts, "write");
      res.json({ ok: true });
    }));
    var SERVICE_ICONS = ["doc", "home", "heart", "biz", "scale", "shield"];
    var DEFAULT_SERVICES = [
      { name: "Barangay Clearance", desc: "For employment, IDs, and other official purposes.", reqs: ["Valid ID", "Proof of residency"], fee: "", icon: "doc" },
      { name: "Certificate of Residency", desc: "Confirms that you live in Zapatera.", reqs: ["Valid ID with address", "Proof of residency, if needed"], fee: "", icon: "home" },
      { name: "Certificate of Indigency", desc: "For medical, school, or legal assistance.", reqs: ["Valid ID", "Letter from the requesting office"], fee: "", icon: "heart" },
      { name: "Business Clearance", desc: "Needed before the city issues a business permit.", reqs: ["Owner's valid ID", "Business name and address"], fee: "", icon: "biz" },
      { name: "Mediation", desc: "Settle disputes between neighbors before going to court (Katarungang Pambarangay).", reqs: ["Visit the Hall", "Speak with the Lupon"], fee: "Free of charge", icon: "scale" }
    ];
    var DEFAULT_STEPS = [
      { title: "Prepare requirements", text: "Bring a valid ID and any supporting papers for your request." },
      { title: "Visit the Hall", text: "Go to the Barangay Hall during office hours and state your request." },
      { title: "Pay the fee", text: "Pay the fee, if any, and keep your official receipt." },
      { title: "Claim your document", text: "Receive your signed document from the Hall." }
    ];
    var loadJson = /* @__PURE__ */ __name(async (name, def) => {
      const r = await get("SELECT value FROM site_content WHERE name = ?", [name]);
      if (!r) return def;
      try {
        const v = JSON.parse(r.value);
        return Array.isArray(v) && v.length ? v : def;
      } catch {
        return def;
      }
    }, "loadJson");
    var loadServices = /* @__PURE__ */ __name(async () => ({ services: await loadJson("services", DEFAULT_SERVICES), steps: await loadJson("steps", DEFAULT_STEPS) }), "loadServices");
    function readServices(raw) {
      if (!Array.isArray(raw) || raw.length > 12) return { error: "You can have up to 12 services." };
      const list = [];
      for (const s of raw) {
        const name = clean(s?.name, 80);
        if (name.length < 2) return { error: "Every service needs a name." };
        list.push({
          name,
          desc: clean(s?.desc, 200),
          fee: clean(s?.fee, 40),
          reqs: (Array.isArray(s?.reqs) ? s.reqs : []).map((r) => clean(r, 100)).filter(Boolean).slice(0, 8),
          icon: SERVICE_ICONS.includes(s?.icon) ? s.icon : "doc"
        });
      }
      return { list };
    }
    __name(readServices, "readServices");
    function readSteps(raw) {
      if (!Array.isArray(raw) || raw.length > 8) return { error: "You can have up to 8 steps." };
      const list = [];
      for (const s of raw) {
        const title2 = clean(s?.title, 60);
        if (title2.length < 2) return { error: "Every step needs a title." };
        list.push({ title: title2, text: clean(s?.text, 200) });
      }
      return { list };
    }
    __name(readSteps, "readSteps");
    app2.get("/api/services", h(async (req, res) => {
      res.set("Cache-Control", "no-store");
      res.json(await loadServices());
    }));
    app2.get("/api/admin/services", auth, ready, can("admin"), h(async (req, res) => {
      res.json(await loadServices());
    }));
    app2.put("/api/admin/services", auth, ready, can("admin"), express.json({ limit: "100kb" }), h(async (req, res) => {
      const sv = readServices(req.body?.services), st = readSteps(req.body?.steps);
      if (sv.error || st.error) return res.status(400).json({ error: sv.error || st.error });
      const stmts = [];
      for (const [k, list] of [["services", sv.list], ["steps", st.list]]) {
        if (!list.length) stmts.push({ sql: "DELETE FROM site_content WHERE name = ?", args: [k] });
        else stmts.push({
          sql: "INSERT INTO site_content (name, value, updated_at, updated_by) VALUES (?, ?, datetime('now'), ?) ON CONFLICT(name) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at, updated_by = excluded.updated_by",
          args: [k, JSON.stringify(list), req.user.full_name]
        });
      }
      await client.batch(stmts, "write");
      res.json({ ok: true });
    }));
    app2.use((err, req, res, next) => {
      if (res.headersSent) return next(err);
      if (err.type === "entity.too.large") return res.status(413).json({ error: "That upload is too large. Use fewer or smaller photos." });
      if (err.type === "entity.parse.failed") return res.status(400).json({ error: "Invalid request." });
      console.error(err);
      res.status(500).json({ error: "Something went wrong on the server." });
    });
    async function boot() {
      await client.executeMultiple(SCHEMA);
      await run("DELETE FROM sessions WHERE expires_at < ?", [Date.now()]);
      const n = (await get("SELECT COUNT(*) AS n FROM users")).n;
      if (n === 0) {
        if (!ADMIN_PASSWORD) throw new Error("No accounts yet. Set ADMIN_PASSWORD to create the first admin.");
        await run(
          "INSERT INTO users (username, full_name, position, role, password_hash, must_change) VALUES (?, ?, ?, ?, ?, 1)",
          [ADMIN_USERNAME.toLowerCase(), "Administrator", "Administrator", "admin", hashPw(ADMIN_PASSWORD)]
        );
      }
      const newPw = process.env.RESET_ADMIN_PASSWORD;
      if (newPw && newPw.length >= 8) {
        const marker = sha("reset:" + newPw);
        const done = await get("SELECT value FROM site_content WHERE name = 'reset_marker'");
        if (!done || done.value !== marker) {
          const adm = await get("SELECT id FROM users WHERE position = 'Administrator' ORDER BY id LIMIT 1");
          if (adm) {
            await client.batch([
              { sql: "UPDATE users SET password_hash = ?, must_change = 1, active = 1 WHERE id = ?", args: [hashPw(newPw), adm.id] },
              { sql: "DELETE FROM sessions WHERE user_id = ?", args: [adm.id] },
              { sql: "INSERT INTO site_content (name, value, updated_at, updated_by) VALUES ('reset_marker', ?, datetime('now'), 'recovery') ON CONFLICT(name) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at", args: [marker] }
            ], "write");
          }
        }
      }
    }
    __name(boot, "boot");
    module.exports = app2;
  }
});

// worker.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var import_server = __toESM(require_server());
import { httpServerHandler } from "cloudflare:node";
import_server.default.listen(3e3);
var worker_default = httpServerHandler({ port: 3e3 });
export {
  worker_default as default
};
/*! Bundled license information:

depd/lib/browser/index.js:
  (*!
   * depd
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

bytes/index.js:
  (*!
   * bytes
   * Copyright(c) 2012-2014 TJ Holowaychuk
   * Copyright(c) 2015 Jed Watson
   * MIT Licensed
   *)

content-type/index.js:
  (*!
   * content-type
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

statuses/index.js:
  (*!
   * statuses
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

toidentifier/index.js:
  (*!
   * toidentifier
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

http-errors/index.js:
  (*!
   * http-errors
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

destroy/index.js:
  (*!
   * destroy
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)

unpipe/index.js:
  (*!
   * unpipe
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

raw-body/index.js:
  (*!
   * raw-body
   * Copyright(c) 2013-2014 Jonathan Ong
   * Copyright(c) 2014-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)

ee-first/index.js:
  (*!
   * ee-first
   * Copyright(c) 2014 Jonathan Ong
   * MIT Licensed
   *)

on-finished/index.js:
  (*!
   * on-finished
   * Copyright(c) 2013 Jonathan Ong
   * Copyright(c) 2014 Douglas Christopher Wilson
   * MIT Licensed
   *)

body-parser/lib/read.js:
body-parser/lib/types/raw.js:
body-parser/lib/types/text.js:
body-parser/index.js:
  (*!
   * body-parser
   * Copyright(c) 2014-2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

media-typer/index.js:
  (*!
   * media-typer
   * Copyright(c) 2014 Douglas Christopher Wilson
   * MIT Licensed
   *)

mime-db/index.js:
  (*!
   * mime-db
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)

mime-types/index.js:
  (*!
   * mime-types
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

type-is/index.js:
  (*!
   * type-is
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2014-2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

body-parser/lib/types/json.js:
body-parser/lib/types/urlencoded.js:
  (*!
   * body-parser
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2014-2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

merge-descriptors/index.js:
  (*!
   * merge-descriptors
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

encodeurl/index.js:
  (*!
   * encodeurl
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

escape-html/index.js:
  (*!
   * escape-html
   * Copyright(c) 2012-2013 TJ Holowaychuk
   * Copyright(c) 2015 Andreas Lubbe
   * Copyright(c) 2015 Tiancheng "Timothy" Gu
   * MIT Licensed
   *)

parseurl/index.js:
  (*!
   * parseurl
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)

finalhandler/index.js:
  (*!
   * finalhandler
   * Copyright(c) 2014-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)

express/lib/router/layer.js:
express/lib/router/route.js:
express/lib/router/index.js:
express/lib/middleware/init.js:
express/lib/middleware/query.js:
express/lib/view.js:
express/lib/application.js:
express/lib/request.js:
express/lib/express.js:
express/index.js:
  (*!
   * express
   * Copyright(c) 2009-2013 TJ Holowaychuk
   * Copyright(c) 2013 Roman Shtylman
   * Copyright(c) 2014-2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

methods/index.js:
  (*!
   * methods
   * Copyright(c) 2013-2014 TJ Holowaychuk
   * Copyright(c) 2015-2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

content-disposition/index.js:
  (*!
   * content-disposition
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)

etag/index.js:
  (*!
   * etag
   * Copyright(c) 2014-2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

fresh/index.js:
  (*!
   * fresh
   * Copyright(c) 2012 TJ Holowaychuk
   * Copyright(c) 2016-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)

range-parser/index.js:
  (*!
   * range-parser
   * Copyright(c) 2012-2014 TJ Holowaychuk
   * Copyright(c) 2015-2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

send/index.js:
  (*!
   * send
   * Copyright(c) 2012 TJ Holowaychuk
   * Copyright(c) 2014-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)

forwarded/index.js:
  (*!
   * forwarded
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)

proxy-addr/index.js:
  (*!
   * proxy-addr
   * Copyright(c) 2014-2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

express/lib/utils.js:
express/lib/response.js:
  (*!
   * express
   * Copyright(c) 2009-2013 TJ Holowaychuk
   * Copyright(c) 2014-2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

negotiator/index.js:
  (*!
   * negotiator
   * Copyright(c) 2012 Federico Romero
   * Copyright(c) 2012-2014 Isaac Z. Schlueter
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

accepts/index.js:
  (*!
   * accepts
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

vary/index.js:
  (*!
   * vary
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)

serve-static/index.js:
  (*!
   * serve-static
   * Copyright(c) 2010 Sencha Inc.
   * Copyright(c) 2011 TJ Holowaychuk
   * Copyright(c) 2014-2016 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=worker.js.map
