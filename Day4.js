// Q1: Yeh code kya print karega?
try {
  throw new Error('oops');
} catch (e) {
  console.log(e.message, e instanceof Error);
} finally {
  console.log('done');
}

// Output:
// oops true
// done


// Q2: Kya print hoga?
try {
  null.x;
} catch (e) {
  console.log(e.constructor.name);
}

// Output:
// TypeError


// Q3: Kya print hoga aur kyun?
try {
  try {
    throw 42;
  } finally {
    console.log('inner');
  }
} catch (e) {
  console.log('caught', e);
} finally {
  console.log('outer');
}

// Output:
// inner
// caught 42
// outer


// Q4: Kya print hoga?
function f() {
  try {
    return 1;
  } finally {
    return 2;
  }
}
console.log(f());

// Output:
// 2


// Q5: Kya print hoga?
async function go() {
  try {
    await Promise.reject('bad');
  } catch (e) {
    console.log(e);
  } finally {
    console.log('fin');
  }
}
go();

// Output:
// bad
// fin


// Q6: Kya error type aayega?
try {
  undeclaredVar;
} catch (e) {
  console.log(e.constructor.name);
}

// Output:
// ReferenceError


// Q7: Kya print hoga?
class AppError extends Error {
  constructor(msg, code) {
    super(msg);
    this.code = code;
  }
}

try {
  throw new AppError('fail', 404);
} catch (e) {
  console.log(e.message, e.code, e instanceof Error);
}

// Output:
// fail 404 true


// Q8: Kya print hoga?
try {
  JSON.parse('{bad}');
} catch (e) {
  console.log(e instanceof SyntaxError);
}

// Output:
// true


// Q9: Kya print hoga — output order bhi batao:
Promise.resolve()
  .then(() => {
    throw new Error('p');
  })
  .catch((e) => console.log('c', e.message));

try {
  throw new Error('s');
} catch (e) {
  console.log('s', e.message);
}

// Output:
// s s
// c p


// Q10: Error ka exact name batao
const obj = {};
obj.foo.bar;

// Error:
// TypeError


// Q11: ValidationError, NetworkError, AuthError classes + handle()

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

class AuthError extends Error {
  constructor(message, userId) {
    super(message);
    this.name = 'AuthError';
    this.userId = userId;
  }
}

function handle(err) {
  if (err instanceof ValidationError) {
    console.log('ValidationError:', err.field);
  } else if (err instanceof NetworkError) {
    console.log('NetworkError:', err.statusCode);
  } else if (err instanceof AuthError) {
    console.log('AuthError:', err.userId);
  } else {
    console.log('Unknown Error');
  }
}


// Q12: safeDiv(a,b)

class DivisionByZeroError extends Error {
  constructor() {
    super('Division by zero is not allowed');
    this.name = 'DivisionByZeroError';
  }
}

function safeDiv(a, b) {
  try {
    if (b === 0) throw new DivisionByZeroError();
    return a / b;
  } catch (e) {
    console.log(e.message);
  }
}


// Q13: retry(fn, times)

class MaxRetriesError extends Error {
  constructor(attempts) {
    super(`Failed after ${attempts} attempts`);
    this.name = 'MaxRetriesError';
    this.attempts = attempts;
  }
}

async function retry(fn, times) {
  for (let i = 1; i <= times; i++) {
    try {
      return await fn();
    } catch (e) {
      console.log(`Attempt ${i}:`, e.message);
    }
  }
  throw new MaxRetriesError(times);
}


// Q14: ES Modules Project

// mathUtils.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};

// main.js
import { add, sub, mul, div } from './mathUtils.js';

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
console.log(div(10, 5));


// Q15: CommonJS logger module

// logger.js
function log(level, msg) {
  console.log(`[${level}] ${msg}`);
}

module.exports = { log };

// app.js
const { log } = require('./logger');
log('INFO', 'Application Started');


// Q16: Dynamic import() plugin loader

class PluginNotFoundError extends Error {
  constructor(name) {
    super(`Plugin not found: ${name}`);
    this.name = 'PluginNotFoundError';
    this.pluginName = name;
  }
}

async function loadPlugin(name) {
  try {
    return await import(`./plugins/${name}.js`);
  } catch {
    throw new PluginNotFoundError(name);
  }
}


// Q17: config.js default export

// config.js
export default {
  env: 'development',
  port: 3000,
  dbUrl: 'mongodb://localhost:27017/app'
};

// main.js
import config from './config.js';

for (const key of ['env', 'port', 'dbUrl']) {
  if (!config[key]) {
    throw new Error(`${key} is missing`);
  }
  console.log(config[key]);
}


// Q18: errorBoundary(fn)

function errorBoundary(fn) {
  return async (...args) => {
    try {
      const result = await fn(...args);
      return { ok: true, data: result };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  };
}


// Q19: Barrel Export

// stringUtils.js
export const upper = str => str.toUpperCase();

// arrayUtils.js
export const first = arr => arr[0];

// objectUtils.js
export const keys = obj => Object.keys(obj);

// index.js
export * from './stringUtils.js';
export * from './arrayUtils.js';
export * from './objectUtils.js';

// main.js
import { upper, first, keys } from './index.js';


// Q20: fetchWithTimeout(url, ms)

class TimeoutError extends Error {
  constructor() {
    super('Request timed out');
    this.name = 'TimeoutError';
  }
}

async function fetchWithTimeout(url, ms) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, ms);

  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    return response;
  } catch (e) {
    if (e.name === 'AbortError') {
      throw new TimeoutError();
    }
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}


// Q21: Custom EventEmitter

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, cb) {
    (this.events[event] ||= []).push(cb);
  }

  off(event, cb) {
    this.events[event] =
      (this.events[event] || []).filter(fn => fn !== cb);
  }

  emit(event, ...args) {
    for (const cb of this.events[event] || []) {
      try {
        cb(...args);
      } catch (e) {
        console.error(e.message);
      }
    }
  }
}


// Q22: parseJSON(str)

function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error(e.message);
    return null;
  } finally {
    console.log('Parsing complete');
  }
}


// Q23: Kya print hoga?

const obj2 = {
  get val() {
    throw new Error('no');
  }
};

try {
  const { val } = obj2;
} catch (e) {
  console.log(e.message);
}

// Output:
// no


// Q24: Kya print hoga?

function* gen() {
  try {
    yield 1;
    yield 2;
  } finally {
    yield 3;
  }
}

const g = gen();

console.log(
  g.next(),
  g.return('done'),
  g.next()
);

// Output:
// { value: 1, done: false }
// { value: 3, done: false }
// { value: 'done', done: true }


// Q25: Kya print hoga?

class E extends Error {}

const e = new E('test');

console.log(
  e instanceof E,
  e instanceof Error,
  e.name
);

// Output:
// true true E

// Q51: Top-level await — kab valid, kab error?

// file: main.js
const m = await import('./mod.js');
console.log(m.default, m.named);

// Valid:
// ✅ ES Module (.mjs)
// ✅ package.json => { "type": "module" }
// ✅ Modern browsers inside <script type="module">

// Error:
// ❌ CommonJS (.js with require/module.exports)
// ❌ Node.js without ESM configuration

// Error:
// SyntaxError: await is only valid in async functions and the top level bodies of modules



// Q52: Kya print hoga?

try {
  eval('{{bad syntax{{');
} catch (e) {
  console.log(e.name);
}

// Output:
// SyntaxError



// Q53: Kya print hoga?

class HttpError extends Error {
  constructor(code) {
    super('HTTP ' + code);
    this.code = code;
    this.name = 'HttpError';
  }
}

const e = new HttpError(500);

console.log(
  e.message,
  e.stack?.split('\n')[0]
);

// Output:
// HTTP 500 HttpError: HTTP 500



// Q54: Runtime behaviour mein kya farq hai?

// ESM
import x from './a.js';

// CommonJS
const x = require('./a.js');

// ESM:
// - Static analysis
// - Hoisted imports
// - Live bindings
// - Async loading possible
// - Circular dependency better handled

// CommonJS:
// - Runtime loading
// - Snapshot values
// - Synchronous loading
// - Uses require cache



// Q55: Kya print hoga?

const err = new TypeError('bad type');

console.log(
  err instanceof TypeError,
  err instanceof Error,
  err instanceof RangeError
);

// Output:
// true true false



// Q61: pipe(...fns)

class PipelineError extends Error {
  constructor(step, original) {
    super(`Pipeline failed at step ${step}`);
    this.step = step;
    this.original = original;
  }
}

function pipe(...fns) {
  return async function(input) {
    let result = input;

    for (let i = 0; i < fns.length; i++) {
      try {
        result = await fns[i](result);
      } catch (e) {
        throw new PipelineError(i, e);
      }
    }

    return result;
  };
}



// Q62: tryCatch(fn, fallback)

function tryCatch(fn, fallback) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (e) {
      return typeof fallback === 'function'
        ? fallback(e)
        : fallback;
    }
  };
}



// Q63: Singleton config module

// config.js

class Config {
  constructor() {
    this.port = 3000;
  }
}

const instance = new Config();

export default instance;


// test.js

import c1 from './config.js';
import c2 from './config.js';

console.log(c1 === c2);

// Output:
// true



// Q64: Named + default export

// math.js

export default function sum(a, b) {
  return a + b;
}

export const PI = 3.14;


// main.js

import sum, { PI } from './math.js';

console.log(sum(2, 3));
console.log(PI);



// Q65: SafeMap class

class KeyNotFoundError extends Error {
  constructor(key) {
    super(`Key not found: ${key}`);
    this.key = key;
  }
}

class SafeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    this.map.set(key, value);
  }

  get(key, defaultVal = null) {
    return this.map.has(key)
      ? this.map.get(key)
      : defaultVal;
  }

  getOrThrow(key) {
    if (!this.map.has(key)) {
      throw new KeyNotFoundError(key);
    }

    return this.map.get(key);
  }

  has(key) {
    return this.map.has(key);
  }

  delete(key) {
    return this.map.delete(key);
  }
}



// Q71: Result Monad

class Result {
  constructor(ok, value) {
    this.ok = ok;
    this.value = value;
  }

  static ok(value) {
    return new Result(true, value);
  }

  static err(error) {
    return new Result(false, error);
  }

  map(fn) {
    if (!this.ok) return this;

    try {
      return Result.ok(fn(this.value));
    } catch (e) {
      return Result.err(e);
    }
  }

  flatMap(fn) {
    if (!this.ok) return this;

    try {
      return fn(this.value);
    } catch (e) {
      return Result.err(e);
    }
  }

  getOrElse(def) {
    return this.ok ? this.value : def;
  }

  isOk() {
    return this.ok;
  }
}

// Demo

const result = Result.ok(5)
  .map(x => x * 2)
  .map(x => x + 1);

console.log(result.getOrElse(0));



// Q72: Circular Dependency Demo

// a.js
import { b } from './b.js';
export const a = 'A';
console.log('a sees:', b);

// b.js
import { a } from './a.js';
export const b = 'B';
console.log('b sees:', a);

// Runtime:
// ReferenceError / partially initialized binding

// Solution:
// Move shared code to common.js
// Both import common.js



// Q73: Kya print hoga?

const p = new Promise((res, rej) => {
  try {
    throw new Error('sync');
  } catch (e) {
    rej(e);
  }
});

p.catch(e =>
  console.log('caught:', e.message)
);

// Output:
// caught: sync



// Q76: Module Explorer

function moduleExplorer(code) {
  const tryCatchBlocks =
    (code.match(/try\s*\{/g) || []).length;

  const imports =
    (code.match(/import\s.+?from/g) || []).length;

  const exports =
    (code.match(/export\s/g) || []).length;

  return {
    tryCatchBlocks,
    imports,
    exports
  };
}



// Q77: Error Dashboard

window.onerror = function(
  message,
  source,
  line,
  col,
  error
) {
  addError({
    type: error?.name,
    message,
    timestamp: new Date(),
    stack: error?.stack
  });
};

window.onunhandledrejection = function(e) {
  addError({
    type: 'PromiseRejection',
    message: e.reason?.message || e.reason,
    timestamp: new Date(),
    stack: e.reason?.stack
  });
};

function addError(err) {
  console.log(err);
}



// Q80: PluginManager

class PluginNotFoundError extends Error {}

class PluginManager {
  constructor() {
    this.plugins = new Map();
  }

  register(name, module) {
    this.plugins.set(name, module);
  }

  unregister(name) {
    this.plugins.delete(name);
  }

  run(name, ...args) {
    const plugin = this.plugins.get(name);

    if (!plugin) {
      throw new PluginNotFoundError(name);
    }

    return plugin(...args);
  }
}



// Q83: withErrorLogging(fn)

function withErrorLogging(fn) {
  return function(...args) {
    try {
      return fn(...args);
    } catch (e) {
      console.log({
        fnName: fn.name,
        args,
        error: e.message,
        timestamp: new Date()
      });

      throw e;
    }
  };
}



// Q85: Kya print hoga?

function throws() {
  throw new RangeError('out');
}

try {
  throws();
} catch (e) {
  if (e instanceof TypeError) {
    throw e;
  }

  console.log('range caught');
}

// Output:
// range caught



// Q88: AsyncQueue

class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
    this.errors = [];
  }

  add(task) {
    this.queue.push(task);
    this.run();
  }

  async run() {
    if (this.running) return;

    this.running = true;

    while (this.queue.length) {
      const task = this.queue.shift();

      try {
        await task();
      } catch (e) {
        this.errors.push(e);
      }
    }

    this.running = false;
  }
}



// Q89: toString() ka exact output

const err2 = new Error();

err2.name = 'Custom';
err2.message = 'msg';

console.log(`${err2}`);

// Output:
// Custom: msg



// Q91: Module Bundler Concept Demo

// c.js
console.log('C loaded');

// b.js
import './c.js';
console.log('B loaded');

// a.js
import './b.js';
console.log('A loaded');

// Output:
// C loaded
// B loaded
// A loaded



// Q94: Error Recovery UI

let errorCount = 0;

window.onerror = function() {
  errorCount++;

  document.body.innerHTML += `
    <div>
      Something went wrong.
      <button onclick="retry()">
        Retry
      </button>
    </div>
  `;
};

function retry() {
  console.log('Retrying...');
}



// Q96: typecheck(schema, data)

class TypeMismatchError extends Error {
  constructor(field, expected, actual) {
    super(`Type mismatch on ${field}`);

    this.field = field;
    this.expected = expected;
    this.actual = actual;
  }
}

function typecheck(schema, data) {
  for (const key in schema) {
    const expected = schema[key];

    let actual;

    if (Array.isArray(data[key])) {
      actual = typeof data[key][0] + '[]';
    } else {
      actual = typeof data[key];
    }

    if (expected !== actual) {
      throw new TypeMismatchError(
        key,
        expected,
        actual
      );
    }
  }

  return true;
}



// Q99: Chainable Validator

class ValidationError extends Error {
  constructor(rule) {
    super(`Validation failed: ${rule}`);
    this.rule = rule;
  }
}

class Validator {
  constructor() {
    this.rules = [];
  }

  static string() {
    return new Validator();
  }

  minLength(n) {
    this.rules.push(v => v.length >= n || 'minLength');
    return this;
  }

  maxLength(n) {
    this.rules.push(v => v.length <= n || 'maxLength');
    return this;
  }

  matches(regex) {
    this.rules.push(v => regex.test(v) || 'matches');
    return this;
  }

  validate(value) {
    for (const rule of this.rules) {
      const result = rule(value);

      if (result !== true) {
        throw new ValidationError(result);
      }
    }

    return true;
  }
}

// Demo

Validator
  .string()
  .minLength(3)
  .maxLength(50)
  .matches(/^[a-z]+$/)
  .validate('hello');